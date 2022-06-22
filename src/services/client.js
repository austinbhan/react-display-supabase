import { createClient } from '@supabase/supabase-js';
export const client = createClient(
  process.env.REACT_APP_SUPABASE_URL,
  process.env.REACT_APP_SUPABASE_KEY
);

export function checkError({ data, error }) {
  if (error) {
    throw error;
  }
  return data;
}

export async function getFruits() {
  const response = await client
    .from('Fruits')
    .select('*');

  return response.body;
}

export async function getGrains() {
  const response = await client.from('Grains').select('*');

  return response.body;
}

export async function getVegetables() {
  const response = await client.from('Vegetables').select('*');

  return response.body;
}

export async function getCatchPhrases() {
  const response = await client.from('Catchphrases').select('*');

  return response.body;
}