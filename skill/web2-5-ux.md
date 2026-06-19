# Web2.5 UX

## Goal

Design a buying experience that feels normal while still letting Solana add trust in the background.

## Core buyer flow

1. Browse curated assets.
2. Open asset page.
3. Preview the file in browser.
4. Compare license tiers.
5. Pay with familiar checkout.
6. Receive license/receipt.
7. Download protected files.
8. Return for updates/support.

## What buyers should see

Use plain labels:

- “License” instead of “smart contract terms.”
- “Receipt” instead of “transaction metadata.”
- “Verified purchase” instead of “on-chain proof.”
- “Download access” instead of “token-gated delivery” unless token-gating is truly needed.

## Wallet policy

Default: wallet is optional.

Show wallet features only when they add value:

- saving receipts to a wallet;
- proving a purchase externally;
- creator payout transparency;
- collector identity for limited drops.

Do not block normal checkout behind wallet connect in the first version unless the audience already expects it.

## UX anti-patterns

Avoid:

- asking for wallet before explaining the asset;
- making users sign messages to browse;
- leading with “NFT marketplace”; 
- hiding the actual file/license terms behind crypto language;
- adding scarcity mechanics before creator demand exists.

## Output format

Return a step-by-step UX flow with:

- screen names;
- buyer actions;
- system actions;
- what is stored off-chain;
- what is optionally recorded on Solana.

## Safety boundary

This module is not legal, financial, or security advice. It helps structure founder decisions and prepare better questions for counsel, engineers, and operators.
