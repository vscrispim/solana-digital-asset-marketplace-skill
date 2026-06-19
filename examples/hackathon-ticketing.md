# Example: Hackathon Ticketing and Attendance Proof

## Input

A university builder group wants to run a hackathon and issue tickets, attendance proofs, and post-event perks using Solana without forcing every student to understand wallets.

## Recommended wedge

Start with one event and one benefit:

- free/paid ticket;
- QR check-in;
- proof of attendance;
- post-event certificate or sponsor perk.

## Flow

`Landing → Register → QR ticket → Check-in → Attendance proof → Certificate/perk → Admin dashboard`

## Solana role

- Optional wallet-linked attendance proof.
- Hash of attendance/certificate record.
- Public verification page for credential.

## What stays off-chain

- Student email;
- private attendee data;
- QR redemption logs;
- admin notes.

## Cybersecurity alerts

- Prevent QR replay.
- Verify check-in server-side.
- Do not put student personal data on-chain.
- Rate-limit claim endpoints.
- Protect admin dashboard with role checks.

## Success criteria

- 100 registrations;
- 70 check-ins;
- 50 proofs claimed;
- 10 post-event perk redemptions;
- organizer can export attendance safely.
