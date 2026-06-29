// Solana Pay Integration — On-chain Payments
// Install: npm install @solana/web3.js @solana/spl-token @solana/pay
import { Connection, PublicKey, Transaction, SystemProgram, LAMPORTS_PER_SOL, clusterApiUrl } from '@solana/web3.js';
import { createTransferCheckedInstruction, getAssociatedTokenAddress } from '@solana/spl-token';
import { encodeURL, createQR, findReference, validateTransfer } from '@solana/pay';

const NETWORK = process.env.SOLANA_NETWORK || 'mainnet-beta';
const RECIPIENT = process.env.SOLANA_RECIPIENT_ADDRESS;
const connection = new Connection(process.env.SOLANA_RPC_URL || clusterApiUrl(NETWORK), 'confirmed');

// Create a Solana Pay QR code for a specific amount
export function createPaymentRequest(recipient, amount, label, message) {
  const recipientKey = new PublicKey(recipient || RECIPIENT);
  const amountLamports = amount * LAMPORTS_PER_SOL;
  const reference = new PublicKey(process.env.SOLANA_REFERENCE_KEY || RECIPIENT);

  const url = encodeURL({
    recipient: recipientKey,
    amount: amountLamports,
    label: label || 'Marketplace Purchase',
    message: message || 'Thank you for your purchase',
    reference,
  });

  // Generate QR code (returns data URL)
  const qrCode = createQR(url);
  return { url: url.toString(), qrCode };
}

// Verify a Solana Pay transaction was completed
export async function verifyPayment(reference) {
  const found = await findReference(connection, new PublicKey(reference));
  if (!found) return null;
  const validated = await validateTransfer(connection, found.signature, {
    recipient: new PublicKey(RECIPIENT),
    amount: found.amount,
    reference: new PublicKey(reference),
  });
  return validated ? found : null;
}

// Direct SOL transfer (requires wallet)
export async function sendSOL(wallet, recipient, amount) {
  const tx = new Transaction().add(
    SystemProgram.transfer({
      fromPubkey: wallet.publicKey,
      toPubkey: new PublicKey(recipient || RECIPIENT),
      lamports: amount * LAMPORTS_PER_SOL,
    })
  );
  tx.feePayer = wallet.publicKey;
  tx.recentBlockhash = (await connection.getRecentBlockhash()).blockhash;
  const signed = await wallet.signTransaction(tx);
  const signature = await connection.sendRawTransaction(signed.serialize());
  await connection.confirmTransaction(signature);
  return signature;
}

// SPL Token transfer
export async function sendToken(wallet, recipient, tokenMint, amount) {
  const fromATA = await getAssociatedTokenAddress(new PublicKey(tokenMint), wallet.publicKey);
  const toATA = await getAssociatedTokenAddress(new PublicKey(tokenMint), new PublicKey(recipient));
  const tx = new Transaction().add(
    createTransferCheckedInstruction(fromATA, new PublicKey(tokenMint), toATA, wallet.publicKey, amount, 6)
  );
  tx.feePayer = wallet.publicKey;
  tx.recentBlockhash = (await connection.getRecentBlockhash()).blockhash;
  const signed = await wallet.signTransaction(tx);
  const signature = await connection.sendRawTransaction(signed.serialize());
  await connection.confirmTransaction(signature);
  return signature;
}
