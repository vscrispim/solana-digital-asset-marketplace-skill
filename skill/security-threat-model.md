# Security Threat Model

## Goal

Help founders avoid the most common security mistakes in digital asset marketplaces before a real buyer, creator, or paid file is at risk.

This module is deliberately practical. It is not a full security audit. It is a founder checklist for the first MVP, beta, and launch.

## Security principle

A marketplace for digital assets has two valuable things:

1. paid files;
2. buyer/creator trust.

Protect both. A beautiful marketplace with leaked files, fake creators, stolen accounts, or broken download links will lose credibility fast.

## High-risk areas

### 1. File upload and asset intake

Risks:

- creator uploads malware disguised as a ZIP, plugin, executable, blend add-on, or script;
- oversized files cause storage/CDN cost spikes;
- malicious filenames break paths or previews;
- embedded external references leak buyer IPs or load untrusted content;
- preview generation pipeline gets abused.

Minimum controls:

- block executable formats by default: `.exe`, `.bat`, `.cmd`, `.scr`, `.msi`, `.ps1`, suspicious scripts;
- scan uploads with an antivirus or malware scanning service before publishing;
- enforce file size limits;
- normalize filenames;
- store originals in private buckets;
- generate public previews in an isolated job;
- never run creator-provided scripts during preview generation.

### 2. Protected download

Risks:

- signed URLs live too long;
- links are shared publicly;
- predictable file paths expose private files;
- authorization checks happen only in the frontend;
- bucket policies accidentally expose originals.

Minimum controls:

- private bucket by default;
- server-side authorization before generating signed URL;
- short expiration windows;
- per-order download grants;
- rate limits and download event logging;
- revoke/reissue flow for support;
- never expose storage service keys to the browser.

### 3. Account and creator impersonation

Risks:

- fake creator profiles copy real artists;
- attackers phish creators for payout changes;
- account takeover lets someone replace asset files;
- support impersonation tricks buyers into downloading malware.

Minimum controls:

- email verification;
- 2FA for creators/admins when possible;
- manual review for payout changes;
- audit log for asset file changes;
- visible verified creator signals only after review;
- admin actions behind role-based access control.

### 4. Checkout and receipt integrity

Risks:

- fake payment confirmations;
- webhook replay attacks;
- order/license mismatch;
- buyer gets download before payment is confirmed;
- receipt hash does not match the actual license payload.

Minimum controls:

- verify payment webhooks server-side;
- store raw webhook event IDs to prevent replay;
- generate license only after confirmed payment/test approval;
- hash canonical license JSON;
- show receipt status: pending, confirmed, revoked, refunded;
- treat Solana proof as evidence, not payment confirmation, unless the payment itself is on-chain.

### 5. Web app security

Risks:

- XSS in comments, creator bios, asset descriptions, or license text;
- CSRF on admin actions;
- broken object-level authorization: users download someone else’s asset;
- SSRF or command injection in preview generation;
- secrets committed to repo or exposed in frontend env vars.

Minimum controls:

- sanitize rendered user content;
- use framework escaping defaults;
- require server-side auth checks per object;
- CSRF protection for state-changing admin actions;
- strict environment variable handling;
- no service-role keys in frontend;
- dependency scanning before launch;
- Content Security Policy when possible.

## Red flag alerts to add to product docs

Use these warnings inside generated plans:

> **Cybersecurity alert:** Never generate download access from the frontend alone. The server must verify the buyer owns the order/license before creating a signed URL.

> **Cybersecurity alert:** Do not run creator-provided files or scripts during preview generation. Treat every upload as untrusted until scanned and processed in isolation.

> **Cybersecurity alert:** A Solana receipt does not protect the file by itself. File security still depends on storage permissions, signed URLs, access logs, and account security.

> **Cybersecurity alert:** Comments, bios, asset descriptions, and license fields are user-generated content. Sanitize them to prevent XSS.

> **Cybersecurity alert:** Creator payout changes should require extra verification. This is a common place for account takeover and support phishing.

## MVP security checklist

Before beta:

- [ ] Private bucket for originals.
- [ ] Public bucket only for previews/posters.
- [ ] Signed URL generation happens server-side.
- [ ] Download URLs expire.
- [ ] Download events are logged.
- [ ] Upload size and type limits exist.
- [ ] Dangerous file extensions are blocked or quarantined.
- [ ] User-generated text is sanitized.
- [ ] Admin routes require role checks.
- [ ] Payment webhooks are verified.
- [ ] Service-role secrets are not exposed to frontend.
- [ ] Creator payout changes are manually reviewed.

## Output format

Return:

- top 5 security risks for the proposed marketplace;
- minimum controls for MVP;
- what can wait until launch;
- what must be fixed before any real paid file is uploaded;
- short “cybersecurity alert” callouts to include in the product plan.
