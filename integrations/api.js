// API Routes — Express / Netlify Functions / Vercel Serverless
// These routes wire the HTML frontend to integrations

import { supabase, purchaseAsset } from './supabase.js';
import { createPaymentRequest, verifyPayment } from './solana-pay.js';

// GET /api/assets — list published marketplace items
export async function getAssets(req, res) {
  const { data, error } = await supabase.from('assets').select('*').eq('published', true).order('created_at', { ascending: false });
  if (error) return res.status(500).json({ error: error.message });
  return res.json(data);
}

// POST /api/buy — initiate a purchase
export async function buyAsset(req, res) {
  const { assetId, buyerId, paymentMethod } = req.body;
  if (!assetId) return res.status(400).json({ error: 'Missing assetId' });

  if (paymentMethod === 'solana') {
    const { data: asset } = await supabase.from('assets').select('price_sol').eq('id', assetId).single();
    const payment = createPaymentRequest(null, asset.price_sol, 'Asset Purchase', `Buying asset ${assetId}`);
    return res.json({ paymentRequest: payment.url, qrCode: payment.qrCode });
  }

  // Stripe: create checkout session (requires stripe.js integration)
  return res.json({ message: 'Use Stripe Checkout or Solana Pay' });
}

// POST /api/verify-payment — confirm on-chain payment
export async function verifyOnChainPayment(req, res) {
  const { reference, assetId, buyerId, signature } = req.body;
  const verified = await verifyPayment(reference);
  if (!verified) return res.status(400).json({ error: 'Payment not verified' });
  await purchaseAsset(assetId, buyerId, signature);
  return res.json({ success: true, signature });
}
