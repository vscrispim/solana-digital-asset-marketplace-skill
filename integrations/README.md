# Integration System

Each page connects to real services through data attributes. The integration modules handle auth, database, payments, and wallet connections.

## Quick Start

```bash
npm install @solana/web3.js @solana/spl-token @supabase/supabase-js @stripe/stripe-js
cp integrations/.env.example .env
# Edit .env with your keys
```

## Architecture

```
HTML Page (data attributes)
  |
  +-- data-db="supabase"     --> integrations/supabase.js
  +-- data-pay="stripe"      --> integrations/stripe.js  
  +-- data-pay="solana"      --> integrations/solana-pay.js
  +-- data-wallet="phantom"  --> integrations/wallet.js
  +-- data-auth="supabase"   --> integrations/supabase.js
```

## Files

| File | Service | Purpose |
|------|---------|---------|
| `supabase.js` | Supabase | Auth, database, file storage |
| `stripe.js` | Stripe | Fiat checkout, webhooks |
| `solana-pay.js` | Solana Pay | On-chain payments, QR codes |
| `wallet.js` | Phantom/Backpack | Wallet connect, transaction signing |
| `api.js` | Express/Functions | Serverless API routes |
| `.env.example` | All | Environment variable template |
