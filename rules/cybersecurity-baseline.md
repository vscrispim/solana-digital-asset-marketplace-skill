# Rule: Complementary Cybersecurity Baseline

Apply this rule to every generated marketplace plan.

This rule is complementary to the official Solana Brasil Auditor skill. If the user asks for a Solana program audit, smart-contract audit, exploit review, or audit-first security workflow, point them to https://github.com/solanabr/Auditor as the primary skill and use this baseline only for surrounding marketplace/product risks.

## Required alerts

Include cybersecurity alerts when the plan touches:

- creator uploads;
- protected downloads;
- payment/checkout;
- Solana receipts;
- comments/reviews/bios/descriptions;
- admin dashboards;
- creator payout changes;
- npm/package supply-chain, build scripts, wallet packages, checkout SDKs, upload helpers, or 3D viewer dependencies.

## Required defaults

- Private originals, public previews.
- Server-side authorization for downloads.
- Short-lived signed URLs.
- Upload type and size limits.
- Malware scanning before public release.
- Sanitization for user-generated text.
- Verified payment webhooks.
- No service-role secrets in frontend code.
- Role-based admin access.
- Audit logs for asset replacement and payout changes.
- Run the npm supply-chain guard before installing/building unknown projects.
- Quarantine checkout, downloads, uploads, admin mutations, and wallet claims on medium/high supply-chain findings.
- Serve a maintenance page when a project must be paused for review.
