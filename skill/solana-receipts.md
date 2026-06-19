# Solana Receipts

## Goal

Use Solana as a proof layer without turning the product into a crypto maze.

## What can be recorded

For the MVP, consider anchoring:

- license hash;
- order/receipt hash;
- asset version hash;
- creator public identifier;
- timestamp;
- marketplace signature;
- optional buyer wallet if provided.

Do not store private buyer data or full license documents on-chain.

## MVP approach

1. Generate license JSON off-chain.
2. Hash the canonical license payload.
3. Save full license in database/storage.
4. Record hash/proof on Solana devnet/testnet first.
5. Show a simple receipt page.
6. Add explorer link only as supporting evidence.

## Wallet approach

Default buyer path should not require wallet.

Optional wallet paths:

- connect wallet after checkout to save receipt;
- creator wallet for payout identity;
- collector wallet for limited drops;
- enterprise buyer wallet later if needed.

## Output format

Return:

- on-chain fields;
- off-chain fields;
- privacy notes;
- buyer-facing receipt copy;
- what to defer.

## Safety boundary

This module is not legal, financial, or security advice. It helps structure founder decisions and prepare better questions for counsel, engineers, and operators.
