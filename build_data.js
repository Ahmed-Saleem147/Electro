/**
 * Converts electroland_products.json → js/data.js
 * Run: node build_data.js
 */
const fs = require('fs');
const raw = JSON.parse(fs.readFileSync('C:/Users/Ahmed/scraped_detailed.json', 'utf8'));

/* ── Deduplicate: first by SKU, then by name ───────────────────── */
const seenSku  = new Set();
const seenName = new Set();
const products = [];
for (const p of raw) {
  const skuKey  = (p.sku || '').trim().toUpperCase();
  const nameKey = p.name.trim().toLowerCase();
  if (skuKey && seenSku.has(skuKey))   continue;
  if (seenName.has(nameKey))           continue;
  if (skuKey)  seenSku.add(skuKey);
  seenName.add(nameKey);
  products.push(p);
}

/* ── Category config ──────────────────────────────────────────── */
const CAT_META = {
  tv:          { name: 'Televisions',        icon: 'fas fa-tv',            color: '#fff', bg: 'linear-gradient(135deg,#1d4ed8,#3b82f6)', emoji: '📺' },
  ac:          { name: 'Air Conditioners',   icon: 'fas fa-snowflake',      color: '#fff', bg: 'linear-gradient(135deg,#0ea5e9,#38bdf8)', emoji: '❄️' },
  fridge:      { name: 'Refrigerators',      icon: 'fas fa-cube',           color: '#fff', bg: 'linear-gradient(135deg,#0f766e,#14b8a6)', emoji: '🧊' },
  laundry:     { name: 'Washing Machines',   icon: 'fas fa-tint',           color: '#fff', bg: 'linear-gradient(135deg,#7c3aed,#a78bfa)', emoji: '👕' },
  kitchen:     { name: 'Kitchen Appliances', icon: 'fas fa-utensils',       color: '#fff', bg: 'linear-gradient(135deg,#b45309,#f59e0b)', emoji: '🍳' },
  small:       { name: 'Small Appliances',   icon: 'fas fa-plug',           color: '#fff', bg: 'linear-gradient(135deg,#be185d,#f472b6)', emoji: '🔌' },
  accessories: { name: 'Accessories',        icon: 'fas fa-headphones',     color: '#fff', bg: 'linear-gradient(135deg,#374151,#6b7280)', emoji: '🎧' },
  phones:      { name: 'Phones',             icon: 'fas fa-mobile-alt',     color: '#fff', bg: 'linear-gradient(135deg,#1d4ed8,#6366f1)', emoji: '📱' },
  tablets:     { name: 'Tablets',            icon: 'fas fa-tablet-alt',     color: '#fff', bg: 'linear-gradient(135deg,#0f766e,#06b6d4)', emoji: '📱' },
};


/* ── Brand config ─────────────────────────────────────────────── */
const BRAND_META = {
  Nasco:    { id: 'nasco',    name: 'Nasco',    logo: '', color: '#e31e25' },
  Samsung:  { id: 'samsung',  name: 'Samsung',  logo: '', color: '#1428a0' },
  TCL:      { id: 'tcl',      name: 'TCL',      logo: '', color: '#d40000' },
  Midea:    { id: 'midea',    name: 'Midea',    logo: '', color: '#0066cc' },
  HiFuture: { id: 'hifuture', name: 'HiFuture', logo: '', color: '#6d28d9' },
};

/* ── Build stable ID from SKU so IDs survive data rebuilds ──── */
function makeId(brand, sku) {
  const prefix = (BRAND_META[brand]?.id || brand.toLowerCase().replace(/\s+/g,'').slice(0,6));
  const safeSku = (sku || '').replace(/[^a-zA-Z0-9]/g, '').toLowerCase() || Math.random().toString(36).slice(2,8);
  return `${prefix}-${safeSku}`;
}

/* ── Compute discount ─────────────────────────────────────────── */
function disc(price, old) {
  if (!old || old <= price) return null;
  return Math.round((1 - price / old) * 100);
}

/* ── Assign badge ─────────────────────────────────────────────── */
function badge(p) {
  if (p.oldPrice && p.oldPrice > p.price) return 'sale';
  if (p.isNew) return 'new';
  return null;
}

/* ── Assign tags ──────────────────────────────────────────────── */
function tags(p) {
  const t = [];
  if (p.isNew) t.push('new-arrivals');
  if (p.oldPrice && p.oldPrice > p.price) t.push('top-deals');
  return t.length ? t : ['new-arrivals'];
}

/* ── Convert products ─────────────────────────────────────────── */
const converted = products.map(p => {
  const d = disc(p.price, p.oldPrice);
  return {
    id:          makeId(p.brand, p.sku),
    name:        p.name,
    brand:       p.brand,
    category:    p.category,
    model:       p.sku || '',
    price:       p.price,
    oldPrice:    p.oldPrice || null,
    discount:    d,
    icon:        CAT_META[p.category]?.emoji || '📦',
    images:      [],
    description: p.description || '',
    tags:        tags(p),
    specs:       p.specs || {},
    badge:       badge(p),
  };
});

/* ── Count by category & brand ────────────────────────────────── */
const catCounts   = {};
const brandCounts = {};
converted.forEach(p => {
  catCounts[p.category]   = (catCounts[p.category]   || 0) + 1;
  brandCounts[p.brand]    = (brandCounts[p.brand]    || 0) + 1;
});

/* ── Build CATEGORIES array ───────────────────────────────────── */
const CATEGORIES = Object.entries(CAT_META)
  .filter(([id]) => catCounts[id])
  .map(([id, m]) => ({
    id, name: m.name, icon: m.icon,
    count: catCounts[id] || 0,
    color: m.color, bg: m.bg
  }));

/* ── Build BRANDS array ────────────────────────────────────────── */
const BRANDS = Object.values(BRAND_META)
  .filter(b => brandCounts[b.name])
  .map(b => ({
    id: b.id, name: b.name, logo: b.logo,
    color: b.color,
    products: brandCounts[b.name] || 0
  }));

/* ── FLASH_PRODUCTS (pick first 6 sale items) ─────────────────── */
const saleProds = converted.filter(p => p.badge === 'sale').slice(0, 6);
const FLASH_PRODUCTS = saleProds.map(p => ({
  id: p.id,
  discount: p.discount + '%',
  originalPrice: p.oldPrice,
  salePrice: p.price
}));

/* ── BLOG_POSTS (keep generic) ────────────────────────────────── */
const BLOG_POSTS = [
  {
    id: 'blog-001',
    title: 'Top 5 Energy-Saving Tips for Your Home Appliances',
    category: 'Tips & Guides',
    date: 'May 1, 2026',
    excerpt: 'Learn how to reduce your electricity bill while getting the most out of your home appliances.',
    icon: '💡',
    bgColor: 'linear-gradient(135deg, #1d4ed8, #3b82f6)',
    readTime: '4 min read'
  },
  {
    id: 'blog-002',
    title: 'How to Choose the Right Air Conditioner for Your Space',
    category: 'Buying Guide',
    date: 'April 20, 2026',
    excerpt: 'BTU ratings, inverter vs. non-inverter, and everything else you need to know before buying an AC.',
    icon: '❄️',
    bgColor: 'linear-gradient(135deg, #0ea5e9, #38bdf8)',
    readTime: '5 min read'
  },
  {
    id: 'blog-003',
    title: 'Samsung vs. TCL: Which TV Brand Is Right for You?',
    category: 'Comparisons',
    date: 'April 10, 2026',
    excerpt: 'We compare picture quality, smart features, and value for money across Samsung and TCL TV ranges.',
    icon: '📺',
    bgColor: 'linear-gradient(135deg, #1428a0, #d40000)',
    readTime: '6 min read'
  },
];

/* ── Assemble data.js ─────────────────────────────────────────── */
const BUILD_DATE = new Date().toISOString().split('T')[0];
const out = `/* ================================================================
   ORBIVA – DATA LAYER
   Source: EGL World Cup Promo 2026.xlsx
   Generated: ${BUILD_DATE}
   Products: ${converted.length} (deduplicated)
================================================================ */

const DATA_VERSION = '${BUILD_DATE}-egl';

/* ── CATEGORIES ── */
const CATEGORIES = ${JSON.stringify(CATEGORIES, null, 2)};

/* ── BRANDS ── */
const BRANDS = ${JSON.stringify(BRANDS, null, 2)};

/* ── PRODUCTS ── */
const PRODUCTS = ${JSON.stringify(converted, null, 2)};

/* ── FLASH SALE ── */
const FLASH_PRODUCTS = ${JSON.stringify(FLASH_PRODUCTS, null, 2)};

/* ── BLOG POSTS ── */
const BLOG_POSTS = ${JSON.stringify(BLOG_POSTS, null, 2)};

/* ── SEARCH INDEX ── */
const SEARCH_INDEX = [
  ...PRODUCTS.map(p => ({ type: 'product', id: p.id, text: p.name, sub: p.brand, icon: p.icon })),
  ...CATEGORIES.map(c => ({ type: 'category', id: c.id, text: c.name, sub: c.count + ' products', icon: '📂' })),
  ...BRANDS.map(b => ({ type: 'brand', id: b.id, text: b.name, sub: b.products + ' products', icon: '🏷️' })),
];
`;

fs.writeFileSync('C:/Users/Ahmed/Downloads/Electronics/js/data.js', out, 'utf8');
console.log(`✅ Written ${converted.length} products to js/data.js`);
console.log('Category counts:', catCounts);
console.log('Brand counts:', brandCounts);
