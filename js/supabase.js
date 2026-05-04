/* ================================================================
   ORBIVA – SUPABASE SYNC
   Shared key-value store so admin changes reach all visitors.
================================================================ */
const SB_URL = 'https://mcsjjqdxrafpqkqnpyvj.supabase.co';
const SB_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1jc2pqcWR4cmFmcHFrcW5weXZqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc5MjYyNDQsImV4cCI6MjA5MzUwMjI0NH0.erAIp_9Ef3xXfpyIIt8cLm17_Fo55o4fpcZNjvSGvFM';

/* Pull all rows from kv_store into localStorage, then resolve. */
async function sbSync() {
  try {
    const res = await fetch(`${SB_URL}/rest/v1/kv_store?select=*`, {
      headers: {
        'apikey': SB_KEY,
        'Authorization': `Bearer ${SB_KEY}`
      }
    });
    if (!res.ok) return;
    const rows = await res.json();
    rows.forEach(r => localStorage.setItem(r.key, r.value));
  } catch(e) {}
}

/* Write current localStorage value for key to Supabase (fire-and-forget). */
function sbPush(key) {
  const value = localStorage.getItem(key);
  if (value === null) return;
  fetch(`${SB_URL}/rest/v1/kv_store`, {
    method: 'POST',
    headers: {
      'apikey': SB_KEY,
      'Authorization': `Bearer ${SB_KEY}`,
      'Content-Type': 'application/json',
      'Prefer': 'resolution=merge-duplicates'
    },
    body: JSON.stringify({ key, value })
  }).catch(() => {});
}

/* Kick off sync immediately so it's ready by DOMContentLoaded. */
window.obvSyncPromise = sbSync();
