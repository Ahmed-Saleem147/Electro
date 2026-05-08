/* ================================================================
   ORBIVA – DATA LAYER
   Sources: Electroland (images) + EGL Easter Promo + EGL April 2026
            + Samsung Mobile April 2026,
   Prices: All at RETAIL price
================================================================ */

/* ── CATEGORIES ── */
const CATEGORIES = [
  {
    "id": "tv",
    "name": "Televisions",
    "icon": "fas fa-tv",
    count: 0,
    "color": "#fff",
    "bg": "linear-gradient(135deg,#1d4ed8,#3b82f6)"
  },
  {
    "id": "ac",
    "name": "Air Conditioners",
    "icon": "fas fa-snowflake",
    count: 0,
    "color": "#fff",
    "bg": "linear-gradient(135deg,#0ea5e9,#38bdf8)"
  },
  {
    "id": "fridge",
    "name": "Refrigerators",
    "icon": "fas fa-cube",
    count: 0,
    "color": "#fff",
    "bg": "linear-gradient(135deg,#0891b2,#06b6d4)"
  },
  {
    "id": "laundry",
    "name": "Washing Machines",
    "icon": "fas fa-tshirt",
    count: 0,
    "color": "#fff",
    "bg": "linear-gradient(135deg,#7c3aed,#a855f7)"
  },
  {
    "id": "kitchen",
    "name": "Kitchen Appliances",
    "icon": "fas fa-blender",
    count: 0,
    "color": "#fff",
    "bg": "linear-gradient(135deg,#dc2626,#f87171)"
  },
  {
    "id": "small",
    "name": "Small Appliances",
    "icon": "fas fa-fan",
    count: 0,
    "color": "#fff",
    "bg": "linear-gradient(135deg,#d97706,#fbbf24)"
  },
  {
    "id": "phones",
    "name": "Mobile & Tablets",
    "icon": "fas fa-mobile-alt",
    count: 0,
    "color": "#fff",
    "bg": "linear-gradient(135deg,#0f172a,#1e293b)"
  },
  {
    "id": "commercial",
    "name": "Commercial Displays",
    "icon": "fas fa-desktop",
    count: 0,
    "color": "#fff",
    "bg": "linear-gradient(135deg,#1e293b,#334155)"
  }
];

/* ── BRANDS ── */
const BRANDS = [
  {
    "id": "samsung",
    "name": "Samsung",
    "shortName": "SAMSUNG",
    products: 0,
    "color": "#1428a0",
    "bg": "linear-gradient(135deg,#1428a0,#0049a0)",
    "logoStyle": "font-size:13px;letter-spacing:-0.5px"
  },
  {
    "id": "tcl",
    "name": "TCL",
    "shortName": "TCL",
    products: 0,
    "color": "#cc0000",
    "bg": "linear-gradient(135deg,#cc0000,#990000)",
    "logoStyle": "font-size:18px;font-style:italic"
  },
  {
    "id": "midea",
    "name": "Midea",
    "shortName": "Midea",
    products: 0,
    "color": "#00a0e9",
    "bg": "linear-gradient(135deg,#00a0e9,#007dc5)",
    "logoStyle": "font-size:14px"
  },
  {
    "id": "nasco",
    "name": "NASCO",
    "shortName": "NASCO",
    products: 0,
    "color": "#003087",
    "bg": "linear-gradient(135deg,#003087,#001a5c)",
    "logoStyle": "font-size:13px;letter-spacing:1px"
  }
];

/* ── FLASH SALE ── */
const FLASH_PRODUCTS = [
];


/* ── PRODUCTS ── */
const PRODUCTS = [];

/* ── BLOG POSTS ── */
const BLOG_POSTS = [
  {
    id: 1,
    "title": "Best NASCO TVs to Buy in Ghana – 2025 Guide",
    "category": "Televisions",
    "date": "April 15, 2025",
    "excerpt": "NASCO offers some of the best value TVs in Ghana. From 24-inch bedroom sets to stunning 55-inch UHD Smart displays — here is what to look for.",
    "icon": "📺",
    "bgColor": "linear-gradient(135deg, #0f172a, #1e3a5f)",
    "readTime": "6 min read"
  },
  {
    id: 2,
    "title": "How to Choose the Right Air Conditioner for Your Home",
    "category": "Air Conditioners",
    "date": "April 10, 2025",
    "excerpt": "BTU ratings, inverter vs non-inverter, R32 vs R410 — we break down everything you need to know before buying your next Midea AC unit.",
    "icon": "❄️",
    "bgColor": "linear-gradient(135deg, #0d2137, #0a4a6b)",
    "readTime": "6 min read"
  },
  {
    id: 3,
    "title": "Chest Freezer vs. Fridge Freezer: Which Is Right for You?",
    "category": "Refrigerators",
    "date": "April 5, 2025",
    "excerpt": "Deciding between a chest freezer and a fridge-freezer combo? We compare capacity, energy use, and cost to help you choose the best Midea model.",
    "icon": "🧊",
    "bgColor": "linear-gradient(135deg, #1a0a2e, #0a4a6b)",
    "readTime": "5 min read"
  }
];

/* ── SEARCH INDEX ── */
const SEARCH_INDEX = [
  ...PRODUCTS.map(p => ({ type: 'product', id: p.id, text: p.name, sub: p.brand, icon: p.icon })),
  ...CATEGORIES.map(c => ({ type: 'category', id: c.id, text: c.name, sub: `${c.count} products`, icon: '📂' })),
  ...BRANDS.map(b => ({ type: 'brand', id: b.id, text: b.name, sub: `${b.products} products`, icon: '🏷️' })),
];