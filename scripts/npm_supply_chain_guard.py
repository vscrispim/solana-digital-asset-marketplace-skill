#!/usr/bin/env python3
"""NPM supply-chain guard for marketplace/demo repos.

Scans package manifests and lockfiles for high-signal infection indicators before
an agent runs install/build scripts. It is intentionally conservative: findings
are warnings unless --fail-on high|medium|low is supplied.
"""
from __future__ import annotations
import argparse, json, os, re, subprocess, sys
from pathlib import Path
from typing import Any

DANGEROUS_SCRIPT_RE = re.compile(r"(curl\s+.*\|\s*(sh|bash)|wget\s+.*\|\s*(sh|bash)|Invoke-WebRequest|iwr\s+|powershell|certutil|base64\s+-d|chmod\s+\+x|rm\s+-rf\s+(/|\$HOME|~)|postinstall|preinstall)", re.I)
SUSPICIOUS_PACKAGE_RE = re.compile(r"(typo|crypto|wallet|solana|phantom|key|secret|stealer|clipper|loader|install)", re.I)
SEVERITY_RANK = {"low": 1, "medium": 2, "high": 3}


def load_json(path: Path) -> Any:
    try:
        return json.loads(path.read_text(encoding="utf-8"))
    except Exception as exc:
        return {"__error__": str(exc)}


def add(findings: list[dict[str, str]], severity: str, kind: str, path: Path, detail: str) -> None:
    findings.append({"severity": severity, "kind": kind, "path": str(path), "detail": detail})


def scan_package_json(path: Path, findings: list[dict[str, str]]) -> None:
    data = load_json(path)
    if "__error__" in data:
        add(findings, "high", "invalid-json", path, data["__error__"])
        return
    scripts = data.get("scripts", {}) or {}
    for name, cmd in scripts.items():
        cmd_s = str(cmd)
        if name in {"preinstall", "install", "postinstall", "prepare"}:
            add(findings, "medium", "lifecycle-script", path, f"{name}: {cmd_s}")
        if DANGEROUS_SCRIPT_RE.search(cmd_s):
            add(findings, "high", "suspicious-script", path, f"{name}: {cmd_s}")
    for dep_group in ["dependencies", "devDependencies", "optionalDependencies"]:
        for name, version in (data.get(dep_group, {}) or {}).items():
            version_s = str(version)
            if version_s.startswith(("http:", "https:", "git+", "github:", "file:")):
                add(findings, "medium", "non-registry-dependency", path, f"{dep_group}.{name} -> {version_s}")
            if SUSPICIOUS_PACKAGE_RE.search(name) and name.startswith(("@", "solana", "wallet")) is False:
                add(findings, "low", "review-package-name", path, f"{dep_group}.{name} -> {version_s}")


def scan_lockfile(path: Path, findings: list[dict[str, str]]) -> None:
    text = path.read_text(encoding="utf-8", errors="ignore")
    if "resolved\": \"http://" in text or "resolved http://" in text:
        add(findings, "high", "insecure-registry-url", path, "lockfile contains http:// resolved package URL")
    if "integrity" not in text and path.name in {"package-lock.json", "npm-shrinkwrap.json"}:
        add(findings, "medium", "missing-integrity", path, "npm lockfile has no integrity fields")
    if re.search(r"(postinstall|preinstall|install)\"?\s*:", text, re.I):
        add(findings, "medium", "lockfile-lifecycle-script", path, "lockfile references lifecycle install scripts")


def run_npm_audit(root: Path, findings: list[dict[str, str]]) -> None:
    if not (root / "package-lock.json").exists():
        return
    try:
        proc = subprocess.run(["npm", "audit", "--json", "--ignore-scripts"], cwd=root, text=True, capture_output=True, timeout=120)
    except Exception as exc:
        add(findings, "medium", "npm-audit-unavailable", root, str(exc))
        return
    if not proc.stdout.strip():
        if proc.returncode not in (0,):
            add(findings, "medium", "npm-audit-failed", root, proc.stderr.strip()[:500])
        return
    try:
        audit = json.loads(proc.stdout)
    except Exception:
        add(findings, "medium", "npm-audit-unparseable", root, proc.stdout[:500])
        return
    meta = audit.get("metadata", {}).get("vulnerabilities", {})
    for sev in ["critical", "high", "moderate"]:
        count = int(meta.get(sev, 0) or 0)
        if count:
            add(findings, "high" if sev in {"critical", "high"} else "medium", "npm-audit", root, f"{count} {sev} vulnerabilities")


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("path", nargs="?", default=".", help="Project root to scan")
    ap.add_argument("--json", action="store_true", help="Emit JSON")
    ap.add_argument("--fail-on", choices=["low", "medium", "high"], default=None)
    ap.add_argument("--audit", action="store_true", help="Run npm audit --ignore-scripts when package-lock.json exists")
    args = ap.parse_args()
    root = Path(args.path).resolve()
    findings: list[dict[str, str]] = []
    for path in root.rglob("package.json"):
        if "node_modules" not in path.parts:
            scan_package_json(path, findings)
    for name in ["package-lock.json", "npm-shrinkwrap.json", "yarn.lock", "pnpm-lock.yaml"]:
        for path in root.rglob(name):
            if "node_modules" not in path.parts:
                scan_lockfile(path, findings)
    if args.audit:
        run_npm_audit(root, findings)
    summary = {"root": str(root), "findings": findings, "count": len(findings)}
    if args.json:
        print(json.dumps(summary, indent=2, ensure_ascii=False))
    else:
        print(f"NPM supply-chain guard: {len(findings)} finding(s) in {root}")
        for f in findings:
            print(f"[{f['severity'].upper()}] {f['kind']} :: {f['path']} :: {f['detail']}")
    if args.fail_on:
        threshold = SEVERITY_RANK[args.fail_on]
        if any(SEVERITY_RANK.get(f["severity"], 0) >= threshold for f in findings):
            return 2
    return 0

if __name__ == "__main__":
    raise SystemExit(main())
