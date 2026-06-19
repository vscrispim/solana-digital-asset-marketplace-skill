# Protected Delivery

## Goal

Design file delivery that is practical, not magical. Solana can prove a receipt, but the actual file still needs normal secure infrastructure.

## Recommended first version

- Store files in S3, Cloudflare R2, Supabase Storage, or similar.
- Keep private originals separate from public previews.
- Generate signed URLs after purchase/license creation.
- Expire download links.
- Log download events.
- Version files clearly.
- Let operators revoke or reissue access manually.

## What not to claim

Do not claim protected delivery “stops piracy.” It reduces casual leakage, improves legitimate buyer access, and creates a clean purchase record.

## Access model

Minimum tables/objects:

- users;
- creators;
- assets;
- asset_versions;
- orders;
- licenses;
- download_grants;
- download_events.

## File handling checklist

- preview file is safe to show publicly;
- original high-value file is private;
- file version is named;
- checksum is recorded;
- license is attached to order;
- URL expires;
- download event is logged;
- support path exists for failed downloads.

## Output format

Return a delivery architecture with manual MVP, scalable version, and risks.

## Safety boundary

This module is not legal, financial, or security advice. It helps structure founder decisions and prepare better questions for counsel, engineers, and operators.
