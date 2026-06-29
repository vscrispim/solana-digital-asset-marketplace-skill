// Supabase Integration — Auth, Database, File Storage
// Install: npm install @supabase/supabase-js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.warn('Supabase credentials missing. Set SUPABASE_URL and SUPABASE_ANON_KEY in .env');
}

export const supabase = createClient(supabaseUrl, supabaseKey);

// Database tables (run in Supabase SQL Editor):
/*
CREATE TABLE assets (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  creator_id uuid REFERENCES auth.users,
  title text NOT NULL,
  description text,
  price_sol numeric(10,6),
  license_type text CHECK (license_type IN ('CC0','CC_BY','CC_BY_SA','CC_BY_NC','COMMERCIAL','CUSTOM')),
  file_url text,
  thumbnail_url text,
  format text,
  resolution text,
  created_at timestamptz DEFAULT now(),
  published boolean DEFAULT false
);

CREATE TABLE licenses (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  asset_id uuid REFERENCES assets(id),
  buyer_id uuid REFERENCES auth.users,
  transaction_signature text,
  license_type text,
  purchased_at timestamptz DEFAULT now(),
  expires_at timestamptz
);

CREATE TABLE events (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  title text NOT NULL,
  venue text,
  event_date timestamptz,
  capacity integer,
  poap_mint_address text,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE predictions (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  title text NOT NULL,
  description text,
  status text CHECK (status IN ('open','voting','resolved')) DEFAULT 'open',
  oracle_source text,
  resolved_at timestamptz,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE assets ENABLE ROW LEVEL SECURITY;
ALTER TABLE licenses ENABLE ROW LEVEL SECURITY;

-- Public can read published assets
CREATE POLICY "Public read assets" ON assets FOR SELECT USING (published = true);
-- Creators can manage their own assets
CREATE POLICY "Creator manage assets" ON assets FOR ALL USING (creator_id = auth.uid());
-- Buyers can read their own licenses
CREATE POLICY "Buyer read licenses" ON licenses FOR SELECT USING (buyer_id = auth.uid());
*/

// Usage in HTML: <div data-db="supabase" data-table="assets" data-filter="published:true">
export async function fetchPublished(filters = {}) {
  let query = supabase.from('assets').select('*').eq('published', true);
  if (filters.creator) query = query.eq('creator_id', filters.creator);
  if (filters.license) query = query.eq('license_type', filters.license);
  const { data, error } = await query.order('created_at', { ascending: false }).limit(20);
  if (error) throw error;
  return data;
}

export async function purchaseAsset(assetId, buyerId, txSignature) {
  const { data: asset } = await supabase.from('assets').select('license_type').eq('id', assetId).single();
  const { error } = await supabase.from('licenses').insert({
    asset_id: assetId,
    buyer_id: buyerId,
    transaction_signature: txSignature,
    license_type: asset.license_type
  });
  if (error) throw error;
  return { success: true };
}

export async function signIn(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) throw error;
  return data;
}

export async function signUp(email, password) {
  const { data, error } = await supabase.auth.signUp({ email, password });
  if (error) throw error;
  return data;
}
