# Rule: Cybersecurity Baseline

Apply this rule to every generated marketplace plan.

## Required alerts

Include cybersecurity alerts when the plan touches:

- creator uploads;
- protected downloads;
- payment/checkout;
- Solana receipts;
- comments/reviews/bios/descriptions;
- admin dashboards;
- creator payout changes.

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
