# Integrações Recomendadas

## Gateway de Pagamento: Stripe

Stripe é a escolha recomendada para checkout em moeda fiduciária (cartão, Pix, boleto).

### Setup mínimo

```bash
# Variáveis de ambiente
STRIPE_SECRET_KEY=sk_live_xxx
STRIPE_PUBLISHABLE_KEY=pk_live_xxx
STRIPE_WEBHOOK_SECRET=whsec_xxx
```

### Webhook de confirmação

Após pagamento confirmado, o webhook deve:
1. Verificar assinatura do Stripe
2. Liberar o asset/download no banco
3. Opcionalmente: gravar hash da transação na Solana (devnet primeiro)
4. Enviar email de confirmação (ver Resend abaixo)

### Integração com Solana

```typescript
// Após confirmação do Stripe, ancorar o recibo na Solana
import { Connection, PublicKey } from '@solana/web3.js';
import * as splMemo from '@solana/spl-memo';

const connection = new Connection('https://api.devnet.solana.com');
const memo = `order:${orderId}|asset:${assetHash}|license:${licenseTier}`;
// Gravar hash via SPL Memo program
```

Referência: https://docs.solana.com/developing/clients/javascript-api

---

## Banco de Dados: Supabase

Supabase é ideal como backend serverless + banco PostgreSQL para marketplaces.

### Schema mínimo sugerido

```sql
-- Ativos/produtos
CREATE TABLE assets (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  creator_id UUID REFERENCES creators(id),
  title TEXT NOT NULL,
  description TEXT,
  price_lamports BIGINT,
  license_tier TEXT CHECK (license_tier IN ('personal', 'commercial', 'studio')),
  file_url TEXT NOT NULL,  -- Signed URL, nunca público
  preview_url TEXT,
  metadata JSONB,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Pedidos
CREATE TABLE orders (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  asset_id UUID REFERENCES assets(id),
  buyer_email TEXT NOT NULL,
  stripe_payment_id TEXT UNIQUE,
  solana_tx_signature TEXT,
  license_hash TEXT,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending','confirmed','delivered','refunded')),
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Creators
CREATE TABLE creators (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  solana_wallet TEXT,
  payout_address TEXT,
  verified BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT now()
);
```

Referência: https://supabase.com/docs

---

## Email Transacional: Resend

Para enviar recibos, links de download, e confirmações de waitlist.

```typescript
import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY);

await resend.emails.send({
  from: 'Threed.CC <mail@threed.cc>',
  to: buyerEmail,
  subject: `Seu pedido de ${assetTitle} foi confirmado`,
  html: `<p>Seu recibo: <a href="${receiptUrl}">ver recibo</a></p>`,
});
```

Referência: https://resend.com/docs

---

## Serverless: Netlify Functions / Vercel Edge

Para processar webhooks do Stripe e gerar signed URLs sem backend dedicado.

```typescript
// Netlify Function: /netlify/functions/create-checkout.ts
export const handler = async (event) => {
  const { assetId, buyerEmail } = JSON.parse(event.body);
  const session = await stripe.checkout.sessions.create({
    success_url: `https://site.com/success?session_id={CHECKOUT_SESSION_ID}`,
    line_items: [{ price: 'price_xxx', quantity: 1 }],
    customer_email: buyerEmail,
  });
  return { statusCode: 200, body: JSON.stringify({ url: session.url }) };
};
```

---

## Solana Pay

Para aceitar pagamentos diretos em SOL ou SPL Tokens.

```typescript
import { createTransfer } from '@solana/pay';
import { Keypair, PublicKey } from '@solana/web3.js';

// Gera um QR code de pagamento
const recipient = new PublicKey('SEU_WALLET_AQUI');
const transfer = await createTransfer(new URL('https://site.com/pay'), recipient, 0.01);
```

Referência: https://docs.solanapay.com

---

## Crossmint

Para permitir que compradores paguem com cartão de crédito sem precisar de carteira cripto.

```typescript
// Crossmint checkout widget
await Crossmint.checkout({
  projectId: 'seu-project-id',
  collectionTitle: 'Minha Coleção',
  mintPrice: 0.1, // SOL
  currency: 'USDC',
  emailRequired: true,
});
```

Referência: https://docs.crossmint.com

---

## Helius

Para indexar transações e NFTs na Solana de forma eficiente.

```typescript
import { Helius } from 'helius-sdk';
const helius = new Helius('seu-api-key');

// Webhook para detectar novas transações
await helius.createWebhook({
  webhookURL: 'https://site.com/api/helius',
  transactionTypes: ['ANY'],
  accountAddresses: ['SEU_PROGRAM_ID'],
});
```

Referência: https://docs.helius.xyz

---

## Metaplex (Token Metadata / Core)

Para mintar NFTs com metadados padronizados na Solana.

```bash
# Sugar CLI: criar e mintar coleção
sugar launch
sugar mint
```

```typescript
import { createNft, findMasterEditionPda } from '@metaplex-foundation/js';

const { nft } = await metaplex.nfts().create({
  uri: 'https://seu-metadata.json',
  name: 'Asset #1',
  sellerFeeBasisPoints: 500, // 5% royalties
});
```

Referência: https://docs.metaplex.com

---

## Check: qual integração usar quando?

| Cenário | Integração |
|---------|-----------|
| Checkout em real (cartão/Pix) | Stripe |
| Checkout em crypto (SOL/USDC) | Solana Pay |
| Checkout cartão sem wallet | Crossmint |
| Banco de dados do marketplace | Supabase |
| Email de confirmação/recibo | Resend |
| API serverless | Netlify Functions ou Vercel Edge |
| Indexar transações Solana | Helius |
| Mintar NFTs com metadados | Metaplex |
| Autenticação de usuários | Supabase Auth ou Solana Wallet Adapter |
| Upload de arquivos | Supabase Storage ou AWS S3 |
| Signed URLs para downloads | Supabase Storage ou Cloudflare R2 |
