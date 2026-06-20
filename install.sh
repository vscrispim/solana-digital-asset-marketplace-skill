#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
TARGET="${1:-$ROOT/.installed/solana-digital-asset-marketplace-skill}"

mkdir -p "$TARGET"
cp -R "$ROOT/skill" "$TARGET/"
cp -R "$ROOT/templates" "$TARGET/"
cp -R "$ROOT/components" "$TARGET/"
cp -R "$ROOT/scripts" "$TARGET/"
cp -R "$ROOT/commands" "$TARGET/"
cp -R "$ROOT/agents" "$TARGET/"
cp -R "$ROOT/rules" "$TARGET/"
cp "$ROOT/README.md" "$TARGET/README.md"
cp "$ROOT/LICENSE" "$TARGET/LICENSE"

echo "Installed solana-digital-asset-marketplace-skill to: $TARGET"
echo "Entry point: $TARGET/skill/SKILL.md"
