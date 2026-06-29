// Wallet Integration — Phantom, Backpack, Solflare
// Install: npm install @solana/web3.js
// No additional deps needed — Phantom injects window.solana

export async function connectWallet() {
  if (!window.solana) {
    throw new Error('No Solana wallet found. Install Phantom or Backpack.');
  }
  const resp = await window.solana.connect();
  return {
    publicKey: resp.publicKey.toString(),
    wallet: window.solana,
  };
}

export async function disconnectWallet() {
  if (window.solana) {
    await window.solana.disconnect();
  }
}

export function getProvider() {
  if (!window.solana) return null;
  if (window.solana.isPhantom) return 'Phantom';
  if (window.solana.isBackpack) return 'Backpack';
  if (window.solana.isSolflare) return 'Solflare';
  return 'Unknown';
}

// Sign a message (for authentication)
export async function signMessage(wallet, message) {
  const encoded = new TextEncoder().encode(message);
  const signed = await wallet.signMessage(encoded, 'utf8');
  return signed;
}

// Listen for account changes
export function onAccountChange(callback) {
  if (window.solana) {
    window.solana.on('accountChanged', callback);
  }
}
