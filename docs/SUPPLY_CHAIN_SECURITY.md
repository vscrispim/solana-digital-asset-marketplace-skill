# Supply-chain security and quarantine routine

This project includes a practical routine for npm supply-chain infection checks and an emergency fallback for pausing risky marketplace functions.

## Why this exists

Marketplace demos often import React widgets, wallet adapters, 3D viewers, upload helpers, checkout SDKs, analytics, and build plugins. One compromised dependency or lifecycle script can leak secrets, alter checkout behavior, expose protected files, or inject malicious frontend code.

The default posture is: **install cautiously, run scripts only after review, and quarantine risky functions before users or paid files are affected.**

## NPM guard

Run from the project you want to inspect:

```bash
python3 scripts/npm_supply_chain_guard.py /path/to/project --audit --fail-on medium
```

What it checks:

- suspicious `preinstall`, `install`, `postinstall`, and `prepare` lifecycle scripts;
- shell download/execute patterns such as `curl | bash`, `wget | sh`, PowerShell fetches, `base64 -d`, broad `rm -rf`, and executable permission changes;
- non-registry dependencies such as `git+`, `github:`, `file:`, and URL dependencies;
- insecure `http://` lockfile package URLs;
- npm audit high/moderate/critical counts when `--audit` is enabled;
- packages whose names deserve human review in wallet/crypto/security contexts.

Recommended agent workflow:

1. Run the guard before installing or building an unknown npm project.
2. If findings are medium/high, do not run lifecycle scripts yet.
3. Quarantine checkout, file unlocks, creator uploads, and admin asset replacement.
4. Review package diffs, lockfile diffs, and maintainer/source legitimacy.
5. Rotate secrets if a malicious install might already have run.
6. Only release quarantine after a human review.

## Safer install defaults

Prefer:

```bash
npm ci --ignore-scripts
npm audit --ignore-scripts
```

Only run lifecycle scripts after reviewing why they are needed.

## Quarantine fallback

Use [`../templates/quarantine-fallback.ts`](../templates/quarantine-fallback.ts) as a starter utility. It lets a project pause risky feature functions without deleting code.

Example:

```ts
import { withQuarantine, disabledCheckoutFallback } from './quarantine-fallback';

export const createCheckout = withQuarantine(
  'checkout.create',
  realCreateCheckout,
  disabledCheckoutFallback,
);
```

Quarantine candidates:

- checkout session creation;
- payment webhook fulfillment;
- signed URL generation;
- creator upload publishing;
- asset replacement;
- admin payout changes;
- wallet claim/mint actions.

## Maintenance page

Use [`../templates/maintenance-page.html`](../templates/maintenance-page.html) when a project needs to be paused publicly. It explains that the marketplace is temporarily under security review without exposing sensitive incident details.

Recommended deployment options:

- static hosting fallback page;
- Nginx maintenance rewrite;
- Next.js/React maintenance route;
- CDN edge rule for emergency pause.

## Incident checklist

- [ ] Freeze installs/builds until dependency findings are reviewed.
- [ ] Put checkout, protected delivery, uploads, and admin mutation functions in quarantine.
- [ ] Serve the maintenance page if users could be affected.
- [ ] Check recent lockfile and package manifest changes.
- [ ] Check lifecycle scripts and transitive packages.
- [ ] Rotate secrets if any install script ran in an environment with credentials.
- [ ] Rebuild from a clean checkout after resolving the issue.
- [ ] Record what was quarantined, who reviewed it, and when it was released.

## Important limitation

This guard is not a malware sandbox and not a replacement for professional incident response. It is a fast founder/agent safety layer that reduces the chance of blindly running compromised npm supply-chain code.
