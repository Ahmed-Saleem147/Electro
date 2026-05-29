/* ================================================================
   ORBIVA – DATA LAYER
   Source: EGL World Cup Promo 2026.xlsx
   Generated: 2026-05-25
   Products: 334 (deduplicated)
================================================================ */

const DATA_VERSION = '2026-05-25-egl';

/* ── CATEGORIES ── */
const CATEGORIES = [
  {
    "id": "tv",
    "name": "Televisions",
    "icon": "fas fa-tv",
    "count": 44,
    "color": "#fff",
    "bg": "linear-gradient(135deg,#1d4ed8,#3b82f6)"
  },
  {
    "id": "ac",
    "name": "Air Conditioners",
    "icon": "fas fa-snowflake",
    "count": 48,
    "color": "#fff",
    "bg": "linear-gradient(135deg,#0ea5e9,#38bdf8)"
  },
  {
    "id": "fridge",
    "name": "Refrigerators",
    "icon": "fas fa-cube",
    "count": 90,
    "color": "#fff",
    "bg": "linear-gradient(135deg,#0f766e,#14b8a6)"
  },
  {
    "id": "laundry",
    "name": "Washing Machines",
    "icon": "fas fa-tint",
    "count": 34,
    "color": "#fff",
    "bg": "linear-gradient(135deg,#7c3aed,#a78bfa)"
  },
  {
    "id": "kitchen",
    "name": "Kitchen Appliances",
    "icon": "fas fa-utensils",
    "count": 14,
    "color": "#fff",
    "bg": "linear-gradient(135deg,#b45309,#f59e0b)"
  },
  {
    "id": "small",
    "name": "Other Appliances",
    "icon": "fas fa-plug",
    "count": 72,
    "color": "#fff",
    "bg": "linear-gradient(135deg,#be185d,#f472b6)"
  },
  {
    "id": "audio",
    "name": "Audio Devices",
    "icon": "fas fa-music",
    "count": 32,
    "color": "#fff",
    "bg": "linear-gradient(135deg,#6d28d9,#a78bfa)"
  }
];

/* ── BRANDS ── */
const BRANDS = [
  {
    "id": "nasco",
    "name": "Nasco",
    "logo": "https://cdn.ghanafa.org/2023/05/NASCO.png",
    "color": "#e31e25",
    "products": 108
  },
  {
    "id": "samsung",
    "name": "Samsung",
    "logo": "",
    "color": "#1428a0",
    "products": 69
  },
  {
    "id": "tcl",
    "name": "TCL",
    "logo": "",
    "color": "#d40000",
    "products": 71
  },
  {
    "id": "midea",
    "name": "Midea",
    "logo": "",
    "color": "#0066cc",
    "products": 63
  },
  {
    "id": "hifuture",
    "name": "HiFuture",
    "logo": "",
    "color": "#6d28d9",
    "products": 23
  }
];

/* ── PRODUCTS ── */
const PRODUCTS = [
  {
    "id": "samsung-ua32h5000fuxgh",
    "name": "Samsung 32'' LED FHD TV",
    "brand": "Samsung",
    "category": "tv",
    "model": "UA32H5000FUXGH",
    "price": 2799,
    "oldPrice": 3399,
    "discount": 18,
    "icon": "📺",
    "images": [],
    "description": "LED FHD TV\n32''",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "samsung-ua43f6000fuxgh",
    "name": "Samsung 43'' LED FHD TV",
    "brand": "Samsung",
    "category": "tv",
    "model": "UA43F6000FUXGH",
    "price": 3999,
    "oldPrice": 5299,
    "discount": 25,
    "icon": "📺",
    "images": [],
    "description": "LED FHD TV\n43''",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "samsung-ua43u8000fuxgh",
    "name": "Samsung 43'' UHD 4K Smart TV",
    "brand": "Samsung",
    "category": "tv",
    "model": "UA43U8000FUXGH",
    "price": 5299,
    "oldPrice": 6599,
    "discount": 20,
    "icon": "📺",
    "images": [],
    "description": "UHD 4K Smart TV\n43''",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "samsung-ua50u8000fuxgh",
    "name": "Samsung 50\" UHD 4K Smart TV",
    "brand": "Samsung",
    "category": "tv",
    "model": "UA50U8000FUXGH",
    "price": 5999,
    "oldPrice": 9199,
    "discount": 35,
    "icon": "📺",
    "images": [],
    "description": "UHD 4K Smart TV\n50\"",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "samsung-ua55u8000fuxgh",
    "name": "Samsung 55'' UHD 4K Smart TV",
    "brand": "Samsung",
    "category": "tv",
    "model": "UA55U8000FUXGH",
    "price": 6899,
    "oldPrice": 9699,
    "discount": 29,
    "icon": "📺",
    "images": [],
    "description": "UHD 4K Smart TV\n55''",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "samsung-ua65u8000fuxgh",
    "name": "Samsung 65\" UHD 4K Smart TV",
    "brand": "Samsung",
    "category": "tv",
    "model": "UA65U8000FUXGH",
    "price": 8999,
    "oldPrice": 13099,
    "discount": 31,
    "icon": "📺",
    "images": [],
    "description": "UHD 4K Smart TV\n65\"",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "samsung-ua75u8000fuxgh",
    "name": "Samsung 75\" UHD 4K Smart TV",
    "brand": "Samsung",
    "category": "tv",
    "model": "UA75U8000FUXGH",
    "price": 14499,
    "oldPrice": 21799,
    "discount": 33,
    "icon": "📺",
    "images": [],
    "description": "UHD 4K Smart TV\n75\"",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "samsung-ua85u8000fuxgh",
    "name": "Samsung 85'' UHD 4K Smart TV",
    "brand": "Samsung",
    "category": "tv",
    "model": "UA85U8000FUXGH",
    "price": 23999,
    "oldPrice": 34899,
    "discount": 31,
    "icon": "📺",
    "images": [],
    "description": "UHD 4K Smart TV\n85''",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "samsung-ua98du9000uxgh",
    "name": "Samsung 98'' UHD 4K Smart TV",
    "brand": "Samsung",
    "category": "tv",
    "model": "UA98DU9000UXGH",
    "price": 54999,
    "oldPrice": 86999,
    "discount": 37,
    "icon": "📺",
    "images": [],
    "description": "UHD 4K Smart TV\n98''",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "samsung-qa55q6faauxgh",
    "name": "Samsung 55\" LED TV",
    "brand": "Samsung",
    "category": "tv",
    "model": "QA55Q6FAAUXGH",
    "price": 8999,
    "oldPrice": 13999,
    "discount": 36,
    "icon": "📺",
    "images": [],
    "description": "LED TV\n55\"",
    "tags": [
      "new-arrivals",
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "samsung-qa55q7faauxgh",
    "name": "Samsung LED TV",
    "brand": "Samsung",
    "category": "tv",
    "model": "QA55Q7FAAUXGH",
    "price": 9999,
    "oldPrice": 13999,
    "discount": 29,
    "icon": "📺",
    "images": [],
    "description": "LED TV",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "samsung-qa65q6faauxgh",
    "name": "Samsung 65'' LED TV",
    "brand": "Samsung",
    "category": "tv",
    "model": "QA65Q6FAAUXGH",
    "price": 10499,
    "oldPrice": 30599,
    "discount": 66,
    "icon": "📺",
    "images": [],
    "description": "LED TV\n65''",
    "tags": [
      "new-arrivals",
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "samsung-qa65q7faauxgh",
    "name": "Samsung 65\" LED TV",
    "brand": "Samsung",
    "category": "tv",
    "model": "QA65Q7FAAUXGH",
    "price": 11999,
    "oldPrice": 17499,
    "discount": 31,
    "icon": "📺",
    "images": [],
    "description": "LED TV\n65\"",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "samsung-qa75q6faauxgh",
    "name": "Samsung 75\" LED TV",
    "brand": "Samsung",
    "category": "tv",
    "model": "QA75Q6FAAUXGH",
    "price": 18999,
    "oldPrice": 30599,
    "discount": 38,
    "icon": "📺",
    "images": [],
    "description": "LED TV\n75\"",
    "tags": [
      "new-arrivals",
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "samsung-qa85q7faauxgh",
    "name": "Samsung 85\" LED TV",
    "brand": "Samsung",
    "category": "tv",
    "model": "QA85Q7FAAUXGH",
    "price": 32999,
    "oldPrice": 44999,
    "discount": 27,
    "icon": "📺",
    "images": [],
    "description": "LED TV\n85\"",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "samsung-qa65qn85dbuxgh",
    "name": "Samsung 65\" QLED 4K TV",
    "brand": "Samsung",
    "category": "tv",
    "model": "QA65QN85DBUXGH",
    "price": 17999,
    "oldPrice": 39199,
    "discount": 54,
    "icon": "📺",
    "images": [],
    "description": "QLED 4K TV\n65\"",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "samsung-qa75qn85dbuxgh",
    "name": "Samsung 75'' QLED 4K TV",
    "brand": "Samsung",
    "category": "tv",
    "model": "QA75QN85DBUXGH",
    "price": 23999,
    "oldPrice": 44999,
    "discount": 47,
    "icon": "📺",
    "images": [],
    "description": "QLED 4K TV\n75''",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "samsung-qa100qn80fuxgh",
    "name": "Samsung 100'' QLED 4K TV",
    "brand": "Samsung",
    "category": "tv",
    "model": "QA100QN80FUXGH",
    "price": 99999,
    "oldPrice": 129999,
    "discount": 23,
    "icon": "📺",
    "images": [],
    "description": "QLED 4K TV\n100''",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "samsung-qa85qn800cuxzn",
    "name": "Samsung 85\" 8K QLED TV",
    "brand": "Samsung",
    "category": "tv",
    "model": "QA85QN800CUXZN",
    "price": 99999,
    "oldPrice": 130499,
    "discount": 23,
    "icon": "📺",
    "images": [],
    "description": "8K QLED TV\n85\"",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "samsung-qa85qn900fuxgh",
    "name": "Samsung 8K QLED TV",
    "brand": "Samsung",
    "category": "tv",
    "model": "QA85QN900FUXGH",
    "price": 99999,
    "oldPrice": 130499,
    "discount": 23,
    "icon": "📺",
    "images": [],
    "description": "8K QLED TV",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "samsung-qa75qn800duxke",
    "name": "Samsung 75\" 8K QLED TV",
    "brand": "Samsung",
    "category": "tv",
    "model": "QA75QN800DUXKE",
    "price": 39999,
    "oldPrice": 44999,
    "discount": 11,
    "icon": "📺",
    "images": [],
    "description": "8K QLED TV\n75\"",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "samsung-qa65qn800duxke",
    "name": "Samsung 65'' 8K QLED TV",
    "brand": "Samsung",
    "category": "tv",
    "model": "QA65QN800DUXKE",
    "price": 32999,
    "oldPrice": 34999,
    "discount": 6,
    "icon": "📺",
    "images": [],
    "description": "8K QLED TV\n65''",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "samsung-mxst40fzn",
    "name": "Samsung 160 WATT Sound Tower",
    "brand": "Samsung",
    "category": "audio",
    "model": "MX-ST40F/ZN",
    "price": 4899,
    "oldPrice": 5399,
    "discount": 9,
    "icon": "🔌",
    "images": [],
    "description": "Sound Tower\n160 WATT",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "samsung-mxst50fzn",
    "name": "Samsung 240 WATT Sound Tower",
    "brand": "Samsung",
    "category": "audio",
    "model": "MX-ST50F/ZN",
    "price": 5499,
    "oldPrice": 6299,
    "discount": 13,
    "icon": "🔌",
    "images": [],
    "description": "Sound Tower\n240 WATT",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "samsung-hwb450fke",
    "name": "Samsung 200 WATT Soundbar",
    "brand": "Samsung",
    "category": "audio",
    "model": "HW-B450F/KE",
    "price": 2899,
    "oldPrice": 3599,
    "discount": 19,
    "icon": "🔌",
    "images": [],
    "description": "Soundbar\n200 WATT",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "samsung-hwq600fke",
    "name": "Samsung 360 WATT Soundbar",
    "brand": "Samsung",
    "category": "audio",
    "model": "HW-Q600F/KE",
    "price": 5499,
    "oldPrice": 6599,
    "discount": 17,
    "icon": "🔌",
    "images": [],
    "description": "Soundbar\n360 WATT",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "samsung-rt20har2dsa",
    "name": "Samsung 203 L Top Mount Refrigerator",
    "brand": "Samsung",
    "category": "fridge",
    "model": "RT20HAR2DSA",
    "price": 5499,
    "oldPrice": 6899,
    "discount": 20,
    "icon": "🧊",
    "images": [],
    "description": "Top Mount Refrigerator\n203 L",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "samsung-rt22har4dsagh",
    "name": "Samsung 234 L Top Mount Refrigerator",
    "brand": "Samsung",
    "category": "fridge",
    "model": "RT22HAR4DSA/GH",
    "price": 5999,
    "oldPrice": 7299,
    "discount": 18,
    "icon": "🧊",
    "images": [],
    "description": "Top Mount Refrigerator\n234 L",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "samsung-rt31cg5421s9gh",
    "name": "Samsung 301 L Twin Cooling Refrigerator",
    "brand": "Samsung",
    "category": "small",
    "model": "RT31CG5421S9GH",
    "price": 7999,
    "oldPrice": 9699,
    "discount": 18,
    "icon": "🔌",
    "images": [],
    "description": "Twin Cooling Refrigerator\n301 L",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "samsung-rt35cg5421s9gh",
    "name": "Samsung 345 L Twin Cooling Refrigerator",
    "brand": "Samsung",
    "category": "small",
    "model": "RT35CG5421S9GH",
    "price": 8999,
    "oldPrice": 10899,
    "discount": 17,
    "icon": "🔌",
    "images": [],
    "description": "Twin Cooling Refrigerator\n345 L",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "samsung-rt38cg6421s9gh",
    "name": "Samsung 388 L Twin Cooling Refrigerator",
    "brand": "Samsung",
    "category": "small",
    "model": "RT38CG6421S9GH",
    "price": 9999,
    "oldPrice": 11799,
    "discount": 15,
    "icon": "🔌",
    "images": [],
    "description": "Twin Cooling Refrigerator\n388 L",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "samsung-rt42cg6621s9gh",
    "name": "Samsung 411 L Twin Cooling Refrigerator",
    "brand": "Samsung",
    "category": "small",
    "model": "RT42CG6621S9GH",
    "price": 10499,
    "oldPrice": 13499,
    "discount": 22,
    "icon": "🔌",
    "images": [],
    "description": "Twin Cooling Refrigerator\n411 L",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "samsung-rt47cg6631b1ut",
    "name": "Samsung 460 L Twin Cooling Refrigerator",
    "brand": "Samsung",
    "category": "small",
    "model": "RT47CG6631B1UT",
    "price": 10999,
    "oldPrice": 14999,
    "discount": 27,
    "icon": "🔌",
    "images": [],
    "description": "Twin Cooling Refrigerator\n460 L",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "samsung-rt53dg7b60b1ut",
    "name": "Samsung 525 L Twin Cooling Refrigerator",
    "brand": "Samsung",
    "category": "small",
    "model": "RT53DG7B60B1UT",
    "price": 15999,
    "oldPrice": 17499,
    "discount": 9,
    "icon": "🔌",
    "images": [],
    "description": "Twin Cooling Refrigerator\n525 L",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "samsung-rs57dg4000b4gh",
    "name": "Samsung 583 Side-by-Side Refrigerator",
    "brand": "Samsung",
    "category": "fridge",
    "model": "RS57DG4000B4GH",
    "price": 14999,
    "oldPrice": 16599,
    "discount": 10,
    "icon": "🧊",
    "images": [],
    "description": "Side-by-Side Refrigerator\n583",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "samsung-rs57dg4100b4gh",
    "name": "Samsung 578 Side-by-Side Refrigerator",
    "brand": "Samsung",
    "category": "fridge",
    "model": "RS57DG4100B4GH",
    "price": 15999,
    "oldPrice": 18299,
    "discount": 13,
    "icon": "🧊",
    "images": [],
    "description": "Side-by-Side Refrigerator\n578",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "samsung-rs70f65k4tgh",
    "name": "Samsung 635 L Side-by-Side Refrigerator",
    "brand": "Samsung",
    "category": "fridge",
    "model": "RS70F65K4TGH",
    "price": 19999,
    "oldPrice": 28799,
    "discount": 31,
    "icon": "🧊",
    "images": [],
    "description": "Side-by-Side Refrigerator\n635 L",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "samsung-rs80f65g4fgh",
    "name": "Samsung Side-by-Side Refrigerator",
    "brand": "Samsung",
    "category": "fridge",
    "model": "RS80F65G4FGH",
    "price": 25999,
    "oldPrice": 33099,
    "discount": 21,
    "icon": "🧊",
    "images": [],
    "description": "Side-by-Side Refrigerator",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "samsung-rf65db970e22",
    "name": "Samsung 650 L Bespoke 4-Door Refrigerator",
    "brand": "Samsung",
    "category": "fridge",
    "model": "RF65DB970E22",
    "price": 39999,
    "oldPrice": 52199,
    "discount": 23,
    "icon": "🧊",
    "images": [],
    "description": "Bespoke 4-Door Refrigerator\n650 L",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "samsung-rf65dg9h0eb1eu",
    "name": "Samsung 632 L Family Hub 4-Door Refrigerator",
    "brand": "Samsung",
    "category": "fridge",
    "model": "RF65DG9H0EB1EU",
    "price": 44999,
    "oldPrice": 59999,
    "discount": 25,
    "icon": "🧊",
    "images": [],
    "description": "Family Hub 4-Door Refrigerator\n632 L",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "samsung-rf48a4000m9gh",
    "name": "Samsung 468 L French Door Refrigerator",
    "brand": "Samsung",
    "category": "fridge",
    "model": "RF48A4000M9/GH",
    "price": 14999,
    "oldPrice": 17499,
    "discount": 14,
    "icon": "🧊",
    "images": [],
    "description": "French Door Refrigerator\n468 L",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "samsung-ri70f20v1gagh",
    "name": "Samsung 198L- GRAY Chest Freezer",
    "brand": "Samsung",
    "category": "fridge",
    "model": "RI70F20V1GAGH",
    "price": 4999,
    "oldPrice": 6499,
    "discount": 23,
    "icon": "🧊",
    "images": [],
    "description": "Chest Freezer\n198L- GRAY",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "samsung-ri70f29v1gagh",
    "name": "Samsung 287L- GRAY Chest Freezer",
    "brand": "Samsung",
    "category": "fridge",
    "model": "RI70F29V1GAGH",
    "price": 5999,
    "oldPrice": 7999,
    "discount": 25,
    "icon": "🧊",
    "images": [],
    "description": "Chest Freezer\n287L- GRAY",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "samsung-ri70f37v1gagh",
    "name": "Samsung 371L- GRAY Chest Freezer",
    "brand": "Samsung",
    "category": "fridge",
    "model": "RI70F37V1GAGH",
    "price": 6999,
    "oldPrice": 8999,
    "discount": 22,
    "icon": "🧊",
    "images": [],
    "description": "Chest Freezer\n371L- GRAY",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "samsung-nx24bg45411vgh",
    "name": "Samsung 50x60 CM Gas Cooker",
    "brand": "Samsung",
    "category": "kitchen",
    "model": "NX24BG45411VGH",
    "price": 5999,
    "oldPrice": 7899,
    "discount": 24,
    "icon": "🍳",
    "images": [],
    "description": "Gas Cooker\n50x60 CM",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "samsung-ar09crhgawkaf",
    "name": "Samsung 1.0 HP Split AC (R410)",
    "brand": "Samsung",
    "category": "ac",
    "model": "AR09CRHGAWK/AF",
    "price": 3999,
    "oldPrice": 5299,
    "discount": 25,
    "icon": "❄️",
    "images": [],
    "description": "Split AC (R410)\n1.0 HP",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "samsung-ar12crhgawkaf",
    "name": "Samsung 1.5 HP Split AC (R410)",
    "brand": "Samsung",
    "category": "ac",
    "model": "AR12CRHGAWK/AF",
    "price": 4599,
    "oldPrice": 6599,
    "discount": 30,
    "icon": "❄️",
    "images": [],
    "description": "Split AC (R410)\n1.5 HP",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "samsung-ar18crhgawkaf",
    "name": "Samsung 2.0 HP Split AC (R410)",
    "brand": "Samsung",
    "category": "ac",
    "model": "AR18CRHGAWK/AF",
    "price": 6999,
    "oldPrice": 8799,
    "discount": 20,
    "icon": "❄️",
    "images": [],
    "description": "Split AC (R410)\n2.0 HP",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "samsung-ar24crhgawkaf",
    "name": "Samsung 2.5 HP Split AC (R410)",
    "brand": "Samsung",
    "category": "ac",
    "model": "AR24CRHGAWK/AF",
    "price": 9999,
    "oldPrice": 12299,
    "discount": 19,
    "icon": "❄️",
    "images": [],
    "description": "Split AC (R410)\n2.5 HP",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "samsung-ar40f12d0agaf",
    "name": "Samsung 1.5 HP Split Inverter AC (R32)",
    "brand": "Samsung",
    "category": "ac",
    "model": "AR40F12D0AG/AF",
    "price": 5999,
    "oldPrice": 8999,
    "discount": 33,
    "icon": "❄️",
    "images": [],
    "description": "Split Inverter AC (R32)\n1.5 HP",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "samsung-ar40f18d0agaf",
    "name": "Samsung 2.0 HP Split Inverter AC (R32)",
    "brand": "Samsung",
    "category": "ac",
    "model": "AR40F18D0AG/AF",
    "price": 7999,
    "oldPrice": 14999,
    "discount": 47,
    "icon": "❄️",
    "images": [],
    "description": "Split Inverter AC (R32)\n2.0 HP",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "samsung-ar40f24d0agaf",
    "name": "Samsung 2.5 HP Split Inverter AC (R32)",
    "brand": "Samsung",
    "category": "ac",
    "model": "AR40F24D0AG/AF",
    "price": 9999,
    "oldPrice": 17499,
    "discount": 43,
    "icon": "❄️",
    "images": [],
    "description": "Split Inverter AC (R32)\n2.5 HP",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "samsung-ac036tnppehac036txqreh",
    "name": "Samsung 36,000 BTU Floor Standing AC",
    "brand": "Samsung",
    "category": "ac",
    "model": "AC036TNPPEH/AC036TXQREH",
    "price": 29999,
    "oldPrice": 32299,
    "discount": 7,
    "icon": "❄️",
    "images": [],
    "description": "Floor Standing AC\n36,000 BTU",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "samsung-ac048tnppehac048txqreh",
    "name": "Samsung 48,000 BTU Floor Standing AC",
    "brand": "Samsung",
    "category": "ac",
    "model": "AC048TNPPEH/AC048TXQREH",
    "price": 39999,
    "oldPrice": 42999,
    "discount": 7,
    "icon": "❄️",
    "images": [],
    "description": "Floor Standing AC\n48,000 BTU",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "samsung-wt60h2500",
    "name": "Samsung 6 KG Twin Tub Semi-Auto Washer",
    "brand": "Samsung",
    "category": "laundry",
    "model": "WT60H2500",
    "price": 2799,
    "oldPrice": 3499,
    "discount": 20,
    "icon": "👕",
    "images": [],
    "description": "Twin Tub Semi-Auto Washer\n6 KG",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "samsung-wt90h3230mg",
    "name": "Samsung 9 KG Twin Tub Semi-Auto Washer",
    "brand": "Samsung",
    "category": "laundry",
    "model": "WT90H3230MG",
    "price": 3499,
    "oldPrice": 4299,
    "discount": 19,
    "icon": "👕",
    "images": [],
    "description": "Twin Tub Semi-Auto Washer\n9 KG",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "samsung-wt12j4200mr",
    "name": "Samsung 12 KG Twin Tub Semi-Auto Washer",
    "brand": "Samsung",
    "category": "laundry",
    "model": "WT12J4200MR",
    "price": 4999,
    "oldPrice": 6399,
    "discount": 22,
    "icon": "👕",
    "images": [],
    "description": "Twin Tub Semi-Auto Washer\n12 KG",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "samsung-wa80f19s8bnq",
    "name": "Samsung 19 KG Top Load Washer",
    "brand": "Samsung",
    "category": "laundry",
    "model": "WA80F19S8BNQ",
    "price": 9999,
    "oldPrice": 13399,
    "discount": 25,
    "icon": "👕",
    "images": [],
    "description": "Top Load Washer\n19 KG",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "samsung-wa80f17s8cnq",
    "name": "Samsung 17 KG Top Load Washer",
    "brand": "Samsung",
    "category": "laundry",
    "model": "WA80F17S8CNQ",
    "price": 8999,
    "oldPrice": 10799,
    "discount": 17,
    "icon": "👕",
    "images": [],
    "description": "Top Load Washer\n17 KG",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "samsung-wa80f13s5cnq",
    "name": "Samsung 13 KG Top Load Washer",
    "brand": "Samsung",
    "category": "laundry",
    "model": "WA80F13S5CNQ",
    "price": 7499,
    "oldPrice": 8799,
    "discount": 15,
    "icon": "👕",
    "images": [],
    "description": "Top Load Washer\n13 KG",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "samsung-wa80cg4240bwnq",
    "name": "Samsung 8 KG Top Load Washer",
    "brand": "Samsung",
    "category": "laundry",
    "model": "WA80CG4240BWNQ",
    "price": 4499,
    "oldPrice": 5699,
    "discount": 21,
    "icon": "👕",
    "images": [],
    "description": "Top Load Washer\n8 KG",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "samsung-wf90f26adsnq",
    "name": "Samsung 26 KG Front Load Washer",
    "brand": "Samsung",
    "category": "laundry",
    "model": "WF90F26ADSNQ",
    "price": 19999,
    "oldPrice": 22999,
    "discount": 13,
    "icon": "👕",
    "images": [],
    "description": "Front Load Washer\n26 KG",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "samsung-ww11cgc04dabsg",
    "name": "Samsung 11 KG Front Load Washer",
    "brand": "Samsung",
    "category": "laundry",
    "model": "WW11CGC04DABSG",
    "price": 9499,
    "oldPrice": 13999,
    "discount": 32,
    "icon": "👕",
    "images": [],
    "description": "Front Load Washer\n11 KG",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "samsung-ww10dg6u94lbnq",
    "name": "Samsung 10.1 KG Front Load Washer",
    "brand": "Samsung",
    "category": "laundry",
    "model": "WW10DG6U94LBNQ",
    "price": 8999,
    "oldPrice": 12999,
    "discount": 31,
    "icon": "👕",
    "images": [],
    "description": "Front Load Washer\n10.1 KG",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "samsung-ww80t3040bsnq",
    "name": "Samsung 8 KG Front Load Washer",
    "brand": "Samsung",
    "category": "laundry",
    "model": "WW80T3040BS/NQ",
    "price": 5999,
    "oldPrice": 9199,
    "discount": 35,
    "icon": "👕",
    "images": [],
    "description": "Front Load Washer\n8 KG",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "samsung-ww70t3010bsnq",
    "name": "Samsung 7 KG Front Load Washer",
    "brand": "Samsung",
    "category": "laundry",
    "model": "WW70T3010BS/NQ",
    "price": 4999,
    "oldPrice": 7499,
    "discount": 33,
    "icon": "👕",
    "images": [],
    "description": "Front Load Washer\n7 KG",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "samsung-wd90f22bcsnq",
    "name": "Samsung 22 KG WASH / 11 KG DRY Washer & Dryer",
    "brand": "Samsung",
    "category": "laundry",
    "model": "WD90F22BCSNQ",
    "price": 22999,
    "oldPrice": 26999,
    "discount": 15,
    "icon": "👕",
    "images": [],
    "description": "Washer & Dryer\n22 KG WASH / 11 KG DRY",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "samsung-wd21t6300gvnq",
    "name": "Samsung 21 KG WASH / 12 KG DRY Washer & Dryer",
    "brand": "Samsung",
    "category": "laundry",
    "model": "WD21T6300GV/NQ",
    "price": 18999,
    "oldPrice": 25299,
    "discount": 25,
    "icon": "👕",
    "images": [],
    "description": "Washer & Dryer\n21 KG WASH / 12 KG DRY",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "samsung-wd17t6300gpsp",
    "name": "Samsung 17 KGS WASH / 10 KGS DRY Washer & Dryer",
    "brand": "Samsung",
    "category": "laundry",
    "model": "WD17T6300GP/SP",
    "price": 16999,
    "oldPrice": 21799,
    "discount": 22,
    "icon": "👕",
    "images": [],
    "description": "Washer & Dryer\n17 KGS WASH / 10 KGS DRY",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "tcl-32s5k",
    "name": "TCL 32\" LED FHD Smart TV",
    "brand": "TCL",
    "category": "tv",
    "model": "32S5K",
    "price": 2299,
    "oldPrice": 2799,
    "discount": 18,
    "icon": "📺",
    "images": [],
    "description": "LED FHD Smart TV\n32\"",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "tcl-43s5k",
    "name": "TCL 43\" LED FHD Smart TV",
    "brand": "TCL",
    "category": "tv",
    "model": "43S5K",
    "price": 2999,
    "oldPrice": 4199,
    "discount": 29,
    "icon": "📺",
    "images": [],
    "description": "LED FHD Smart TV\n43\"",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "tcl-50s5k",
    "name": "TCL 50'' LED FHD Smart TV",
    "brand": "TCL",
    "category": "tv",
    "model": "50S5K",
    "price": 3999,
    "oldPrice": 4499,
    "discount": 11,
    "icon": "📺",
    "images": [],
    "description": "LED FHD Smart TV\n50''",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "tcl-55p6l",
    "name": "TCL 55\" UHD 4K Smart TV",
    "brand": "TCL",
    "category": "tv",
    "model": "55P6L",
    "price": 5999,
    "oldPrice": 7099,
    "discount": 15,
    "icon": "📺",
    "images": [],
    "description": "UHD 4K Smart TV\n55\"",
    "tags": [
      "new-arrivals",
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "tcl-65p755",
    "name": "TCL 65'' UHD 4K Smart TV",
    "brand": "TCL",
    "category": "tv",
    "model": "65P755",
    "price": 7999,
    "oldPrice": 10499,
    "discount": 24,
    "icon": "📺",
    "images": [],
    "description": "UHD 4K Smart TV\n65''",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "tcl-75p6l",
    "name": "TCL 75'' UHD 4K Smart TV",
    "brand": "TCL",
    "category": "tv",
    "model": "75P6L",
    "price": 9999,
    "oldPrice": 16599,
    "discount": 40,
    "icon": "📺",
    "images": [],
    "description": "UHD 4K Smart TV\n75''",
    "tags": [
      "new-arrivals",
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "tcl-55t6d",
    "name": "TCL 55'' QLED 4K TV",
    "brand": "TCL",
    "category": "tv",
    "model": "55T6D",
    "price": 6799,
    "oldPrice": 9699,
    "discount": 30,
    "icon": "📺",
    "images": [],
    "description": "QLED 4K TV\n55''",
    "tags": [
      "new-arrivals",
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "tcl-65t6d",
    "name": "TCL 65'' QLED 4K TV",
    "brand": "TCL",
    "category": "tv",
    "model": "65T6D",
    "price": 8999,
    "oldPrice": 12299,
    "discount": 27,
    "icon": "📺",
    "images": [],
    "description": "QLED 4K TV\n65''",
    "tags": [
      "new-arrivals",
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "tcl-75p7k",
    "name": "TCL 75\" QLED 4K TV",
    "brand": "TCL",
    "category": "tv",
    "model": "75P7K",
    "price": 11999,
    "oldPrice": 19199,
    "discount": 38,
    "icon": "📺",
    "images": [],
    "description": "QLED 4K TV\n75\"",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "tcl-85p7l",
    "name": "TCL 85\" QLED 4K TV",
    "brand": "TCL",
    "category": "tv",
    "model": "85P7L",
    "price": 19999,
    "oldPrice": 28799,
    "discount": 31,
    "icon": "📺",
    "images": [],
    "description": "QLED 4K TV\n85\"",
    "tags": [
      "new-arrivals",
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "tcl-98p8k",
    "name": "TCL 98'' QLED 4K TV",
    "brand": "TCL",
    "category": "tv",
    "model": "98P8K",
    "price": 29999,
    "oldPrice": 60999,
    "discount": 51,
    "icon": "📺",
    "images": [],
    "description": "QLED 4K TV\n98''",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "tcl-65c6k",
    "name": "TCL 65\" QD-Mini LED 4K TV",
    "brand": "TCL",
    "category": "tv",
    "model": "65C6K",
    "price": 10999,
    "oldPrice": 15799,
    "discount": 30,
    "icon": "📺",
    "images": [],
    "description": "QD-Mini LED 4K TV\n65\"",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "tcl-75c6k",
    "name": "TCL 75\" QD-Mini LED 4K TV",
    "brand": "TCL",
    "category": "tv",
    "model": "75C6K",
    "price": 14999,
    "oldPrice": 27899,
    "discount": 46,
    "icon": "📺",
    "images": [],
    "description": "QD-Mini LED 4K TV\n75\"",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "tcl-85c6k",
    "name": "TCL 85\" QD-Mini LED 4K TV",
    "brand": "TCL",
    "category": "tv",
    "model": "85C6K",
    "price": 24999,
    "oldPrice": 37499,
    "discount": 33,
    "icon": "📺",
    "images": [],
    "description": "QD-Mini LED 4K TV\n85\"",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "tcl-98c6k",
    "name": "TCL 98\" QD-Mini LED 4K TV",
    "brand": "TCL",
    "category": "tv",
    "model": "98C6K",
    "price": 39999,
    "oldPrice": 78299,
    "discount": 49,
    "icon": "📺",
    "images": [],
    "description": "QD-Mini LED 4K TV\n98\"",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "tcl-115c7k",
    "name": "TCL 115'' QD-Mini LED 4K TV",
    "brand": "TCL",
    "category": "tv",
    "model": "115C7K",
    "price": 199999,
    "oldPrice": 299999,
    "discount": 33,
    "icon": "📺",
    "images": [],
    "description": "QD-Mini LED 4K TV\n115''",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "tcl-27r73q",
    "name": "TCL 27'' Gaming Monitor",
    "brand": "TCL",
    "category": "small",
    "model": "27R73Q",
    "price": 7999,
    "oldPrice": 11699,
    "discount": 32,
    "icon": "🔌",
    "images": [],
    "description": "Gaming Monitor\n27''",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "tcl-34r83q",
    "name": "TCL 34'' Gaming Monitor",
    "brand": "TCL",
    "category": "small",
    "model": "34R83Q",
    "price": 11999,
    "oldPrice": 16599,
    "discount": 28,
    "icon": "🔌",
    "images": [],
    "description": "Gaming Monitor\n34''",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "tcl-s45h",
    "name": "TCL 100W Soundbar",
    "brand": "TCL",
    "category": "audio",
    "model": "S45H",
    "price": 1399,
    "oldPrice": 1799,
    "discount": 22,
    "icon": "🔌",
    "images": [],
    "description": "Soundbar\n100W",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "tcl-s55h",
    "name": "TCL 220W Soundbar",
    "brand": "TCL",
    "category": "audio",
    "model": "S55H",
    "price": 2199,
    "oldPrice": 2699,
    "discount": 19,
    "icon": "🔌",
    "images": [],
    "description": "Soundbar\n220W",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "tcl-q65h",
    "name": "TCL 580 W Soundbar",
    "brand": "TCL",
    "category": "audio",
    "model": "Q65H",
    "price": 4299,
    "oldPrice": 5399,
    "discount": 20,
    "icon": "🔌",
    "images": [],
    "description": "Soundbar\n580 W",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "tcl-q75h",
    "name": "TCL 620 W Soundbar",
    "brand": "TCL",
    "category": "audio",
    "model": "Q75H",
    "price": 6999,
    "oldPrice": 8999,
    "discount": 22,
    "icon": "🔌",
    "images": [],
    "description": "Soundbar\n620 W",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "tcl-q85h",
    "name": "TCL 860 W Soundbar",
    "brand": "TCL",
    "category": "audio",
    "model": "Q85H",
    "price": 8999,
    "oldPrice": 10799,
    "discount": 17,
    "icon": "🔌",
    "images": [],
    "description": "Soundbar\n860 W",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "tcl-tp200k",
    "name": "TCL 220 W Sound Tower",
    "brand": "TCL",
    "category": "small",
    "model": "TP200K",
    "price": 3499,
    "oldPrice": 4499,
    "discount": 22,
    "icon": "🔌",
    "images": [],
    "description": "Sound Tower\n220 W",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "tcl-tp300k",
    "name": "TCL 340W Sound Tower",
    "brand": "TCL",
    "category": "small",
    "model": "TP300K",
    "price": 5499,
    "oldPrice": 6299,
    "discount": 13,
    "icon": "🔌",
    "images": [],
    "description": "Sound Tower\n340W",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "tcl-tylyr47w",
    "name": "TCL 2 TAP COMPRESSOR COOLING",
    "brand": "TCL",
    "category": "kitchen",
    "model": "TY-LYR47W",
    "price": 1399,
    "oldPrice": 1899,
    "discount": 26,
    "icon": "🍳",
    "images": [],
    "description": "COMPRESSOR COOLING\n2 TAP",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "tcl-tylwyr109w",
    "name": "TCL 3 TAPS COMPRESSOR COOLING",
    "brand": "TCL",
    "category": "kitchen",
    "model": "TY-LWYR109W",
    "price": 1599,
    "oldPrice": 2099,
    "discount": 24,
    "icon": "🍳",
    "images": [],
    "description": "COMPRESSOR COOLING\n3 TAPS",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "tcl-tac12csdzg11",
    "name": "TCL 1.5 HP Split AC (R32)",
    "brand": "TCL",
    "category": "ac",
    "model": "TAC-12CSD/ZG11",
    "price": 3499,
    "oldPrice": 3999,
    "discount": 13,
    "icon": "❄️",
    "images": [],
    "description": "Split AC (R32)\n1.5 HP",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "tcl-tac18csdzg11",
    "name": "TCL 2.0 HP Split AC (R32)",
    "brand": "TCL",
    "category": "ac",
    "model": "TAC-18CSD/ZG11",
    "price": 5499,
    "oldPrice": 5999,
    "discount": 8,
    "icon": "❄️",
    "images": [],
    "description": "Split AC (R32)\n2.0 HP",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "tcl-tac24csdzg11",
    "name": "TCL 2.5 HP Split AC (R32)",
    "brand": "TCL",
    "category": "ac",
    "model": "TAC-24CSD/ZG11",
    "price": 7999,
    "oldPrice": 8999,
    "discount": 11,
    "icon": "❄️",
    "images": [],
    "description": "Split AC (R32)\n2.5 HP",
    "tags": [
      "new-arrivals",
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "tcl-tac12csdzg21i",
    "name": "TCL 1.5 HP Split Inverter AC (R32)",
    "brand": "TCL",
    "category": "ac",
    "model": "TAC-12CSD/ZG21I",
    "price": 3999,
    "oldPrice": 5499,
    "discount": 27,
    "icon": "❄️",
    "images": [],
    "description": "Split Inverter AC (R32)\n1.5 HP",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "tcl-tac18csdzg21i",
    "name": "TCL 2.0 HP Split Inverter AC (R32)",
    "brand": "TCL",
    "category": "ac",
    "model": "TAC-18CSD/ZG21I",
    "price": 5999,
    "oldPrice": 8299,
    "discount": 28,
    "icon": "❄️",
    "images": [],
    "description": "Split Inverter AC (R32)\n2.0 HP",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "tcl-tac24csdzg21i",
    "name": "TCL 2.5 HP Split Inverter AC (R32)",
    "brand": "TCL",
    "category": "ac",
    "model": "TAC-24CSD/ZG21I",
    "price": 7499,
    "oldPrice": 11399,
    "discount": 34,
    "icon": "❄️",
    "images": [],
    "description": "Split Inverter AC (R32)\n2.5 HP",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "tcl-tac12csaxa82i",
    "name": "TCL 1.5 HP Split Inverter AC (R410)",
    "brand": "TCL",
    "category": "ac",
    "model": "TAC-12CSA/XA82I",
    "price": 4999,
    "oldPrice": 7099,
    "discount": 30,
    "icon": "❄️",
    "images": [],
    "description": "Split Inverter AC (R410)\n1.5 HP",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "tcl-tac18csaxa82i",
    "name": "TCL 2.0 HP Split Inverter AC (R410)",
    "brand": "TCL",
    "category": "ac",
    "model": "TAC-18CSA/XA82I",
    "price": 6999,
    "oldPrice": 9699,
    "discount": 28,
    "icon": "❄️",
    "images": [],
    "description": "Split Inverter AC (R410)\n2.0 HP",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "tcl-tac24csaxa82i",
    "name": "TCL 2.5 HP Split Inverter AC (R410)",
    "brand": "TCL",
    "category": "ac",
    "model": "TAC-24CSA/XA82I",
    "price": 8999,
    "oldPrice": 11799,
    "discount": 24,
    "icon": "❄️",
    "images": [],
    "description": "Split Inverter AC (R410)\n2.5 HP",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "tcl-tac18cfdmci",
    "name": "TCL 2.0 HP Floor Standing AC",
    "brand": "TCL",
    "category": "ac",
    "model": "TAC-18CFD/MCI",
    "price": 9999,
    "oldPrice": 12699,
    "discount": 21,
    "icon": "❄️",
    "images": [],
    "description": "Floor Standing AC\n2.0 HP",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "tcl-tac24cfdv7i",
    "name": "TCL 2.5 HP Floor Standing AC",
    "brand": "TCL",
    "category": "ac",
    "model": "TAC-24CFD/V7I",
    "price": 11999,
    "oldPrice": 12999,
    "discount": 8,
    "icon": "❄️",
    "images": [],
    "description": "Floor Standing AC\n2.5 HP",
    "tags": [
      "new-arrivals",
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "tcl-tac36cfac",
    "name": "TCL 3.5 HP Split AC (R410)",
    "brand": "TCL",
    "category": "ac",
    "model": "TAC-36CFA/C",
    "price": 17999,
    "oldPrice": 22699,
    "discount": 21,
    "icon": "❄️",
    "images": [],
    "description": "Split AC (R410)\n3.5 HP",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "tcl-tac48cfac",
    "name": "TCL 5.0 HP Split AC (R410)",
    "brand": "TCL",
    "category": "ac",
    "model": "TAC-48CFA/C",
    "price": 21999,
    "oldPrice": 28799,
    "discount": 24,
    "icon": "❄️",
    "images": [],
    "description": "Split AC (R410)\n5.0 HP",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "tcl-tac36cfafhi",
    "name": "TCL 3.5 HP Floor Standing AC",
    "brand": "TCL",
    "category": "ac",
    "model": "TAC-36CFA/FHI",
    "price": 19999,
    "oldPrice": 23999,
    "discount": 17,
    "icon": "❄️",
    "images": [],
    "description": "Floor Standing AC\n3.5 HP",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "tcl-tac48chfafhi",
    "name": "TCL 5.0 HP Floor Standing AC",
    "brand": "TCL",
    "category": "ac",
    "model": "TAC-48CHFA/FHI",
    "price": 22999,
    "oldPrice": 29999,
    "discount": 23,
    "icon": "❄️",
    "images": [],
    "description": "Floor Standing AC\n5.0 HP",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "tcl-tac60chfafdi",
    "name": "TCL 6.0 HP Floor Standing AC",
    "brand": "TCL",
    "category": "ac",
    "model": "TAC-60CHFA/FDI",
    "price": 32999,
    "oldPrice": 39999,
    "discount": 18,
    "icon": "❄️",
    "images": [],
    "description": "Floor Standing AC\n6.0 HP",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "tcl-tcc36zhradv02",
    "name": "TCL 3.5 HP - WHITE Ceiling & Floor AC",
    "brand": "TCL",
    "category": "ac",
    "model": "TCC-36ZHRA/DV(02)",
    "price": 14999,
    "oldPrice": 15999,
    "discount": 6,
    "icon": "❄️",
    "images": [],
    "description": "Ceiling & Floor AC\n3.5 HP - WHITE",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "tcl-f117sds",
    "name": "TCL 90 L Single Door Refrigerator",
    "brand": "TCL",
    "category": "small",
    "model": "F117SDS",
    "price": 1899,
    "oldPrice": 2199,
    "discount": 14,
    "icon": "🔌",
    "images": [],
    "description": "Single Door Refrigerator\n90 L",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "tcl-f216tms",
    "name": "TCL 165 L Top Mount Refrigerator",
    "brand": "TCL",
    "category": "small",
    "model": "F216TMS",
    "price": 2999,
    "oldPrice": 3999,
    "discount": 25,
    "icon": "🔌",
    "images": [],
    "description": "Top Mount Refrigerator\n165 L",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "tcl-p540tmgwd",
    "name": "TCL 413 L Top Mount Refrigerator",
    "brand": "TCL",
    "category": "small",
    "model": "P540TMGWD",
    "price": 7999,
    "oldPrice": 8999,
    "discount": 11,
    "icon": "🔌",
    "images": [],
    "description": "Top Mount Refrigerator\n413 L",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "tcl-p540tmg",
    "name": "TCL 415 L Top Mount Refrigerator",
    "brand": "TCL",
    "category": "small",
    "model": "P540TMG",
    "price": 7499,
    "oldPrice": 8999,
    "discount": 17,
    "icon": "🔌",
    "images": [],
    "description": "Top Mount Refrigerator\n415 L",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "tcl-p624tmn",
    "name": "TCL 480 L Top Mount Refrigerator",
    "brand": "TCL",
    "category": "small",
    "model": "P624TMN",
    "price": 9499,
    "oldPrice": 10499,
    "discount": 10,
    "icon": "🔌",
    "images": [],
    "description": "Top Mount Refrigerator\n480 L",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "tcl-p826tmn",
    "name": "TCL 635 L Top Mount Refrigerator",
    "brand": "TCL",
    "category": "small",
    "model": "P826TMN",
    "price": 10999,
    "oldPrice": 11999,
    "discount": 8,
    "icon": "🔌",
    "images": [],
    "description": "Top Mount Refrigerator\n635 L",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "tcl-f141bfs",
    "name": "TCL 108 L Bottom Mount Refrigerator",
    "brand": "TCL",
    "category": "small",
    "model": "F141BFS",
    "price": 2599,
    "oldPrice": 2799,
    "discount": 7,
    "icon": "🔌",
    "images": [],
    "description": "Bottom Mount Refrigerator\n108 L",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "tcl-f185bfg",
    "name": "TCL 142 L Bottom Mount Refrigerator",
    "brand": "TCL",
    "category": "small",
    "model": "F185BFG",
    "price": 2999,
    "oldPrice": 3299,
    "discount": 9,
    "icon": "🔌",
    "images": [],
    "description": "Bottom Mount Refrigerator\n142 L",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "tcl-f410bfs",
    "name": "TCL 309 L Bottom Mount Refrigerator",
    "brand": "TCL",
    "category": "small",
    "model": "F410BFS",
    "price": 5199,
    "oldPrice": 7499,
    "discount": 31,
    "icon": "🔌",
    "images": [],
    "description": "Bottom Mount Refrigerator\n309 L",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "tcl-p575sbgwd",
    "name": "TCL 433 L Side-by-Side Refrigerator",
    "brand": "TCL",
    "category": "fridge",
    "model": "P575SBGWD",
    "price": 9999,
    "oldPrice": 11499,
    "discount": 13,
    "icon": "🧊",
    "images": [],
    "description": "Side-by-Side Refrigerator\n433 L",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "tcl-p692sbnwd",
    "name": "TCL 529  L Side-by-Side Refrigerator",
    "brand": "TCL",
    "category": "fridge",
    "model": "P692SBNWD",
    "price": 9999,
    "oldPrice": 11999,
    "discount": 17,
    "icon": "🧊",
    "images": [],
    "description": "Side-by-Side Refrigerator\n529  L",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "tcl-p692sbbg",
    "name": "TCL 529 L Side-by-Side Refrigerator",
    "brand": "TCL",
    "category": "fridge",
    "model": "P692SBBG",
    "price": 10999,
    "oldPrice": 11999,
    "discount": 8,
    "icon": "🧊",
    "images": [],
    "description": "Side-by-Side Refrigerator\n529 L",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "tcl-p547fdbg",
    "name": "TCL 421  L FRENCH",
    "brand": "TCL",
    "category": "small",
    "model": "P547FDBG",
    "price": 11999,
    "oldPrice": 13499,
    "discount": 11,
    "icon": "🔌",
    "images": [],
    "description": "FRENCH\n421  L",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "tcl-f208sds",
    "name": "TCL 168 L Standing Freezer",
    "brand": "TCL",
    "category": "fridge",
    "model": "F208SDS",
    "price": 3499,
    "oldPrice": 3999,
    "discount": 13,
    "icon": "🔌",
    "images": [],
    "description": "Standing Freezer\n168 L",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "tcl-f131cfsl",
    "name": "TCL 98 L Chest Freezer",
    "brand": "TCL",
    "category": "fridge",
    "model": "F131CFSL",
    "price": 2299,
    "oldPrice": 2399,
    "discount": 4,
    "icon": "🧊",
    "images": [],
    "description": "Chest Freezer\n98 L",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "tcl-f188cfsl",
    "name": "TCL 145 L Chest Freezer",
    "brand": "TCL",
    "category": "fridge",
    "model": "F188CFSL",
    "price": 2599,
    "oldPrice": 2999,
    "discount": 13,
    "icon": "🧊",
    "images": [],
    "description": "Chest Freezer\n145 L",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "tcl-f326cfsl",
    "name": "TCL 251 L Chest Freezer",
    "brand": "TCL",
    "category": "fridge",
    "model": "F326CFSL",
    "price": 3699,
    "oldPrice": 3999,
    "discount": 8,
    "icon": "🧊",
    "images": [],
    "description": "Chest Freezer\n251 L",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "tcl-f378cfsl",
    "name": "TCL 290 L Chest Freezer",
    "brand": "TCL",
    "category": "fridge",
    "model": "F378CFSL",
    "price": 3999,
    "oldPrice": 4799,
    "discount": 17,
    "icon": "🧊",
    "images": [],
    "description": "Chest Freezer\n290 L",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "tcl-f494cfsl",
    "name": "TCL 380 L Chest Freezer",
    "brand": "TCL",
    "category": "fridge",
    "model": "F494CFSL",
    "price": 4999,
    "oldPrice": 5499,
    "discount": 9,
    "icon": "🧊",
    "images": [],
    "description": "Chest Freezer\n380 L",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "tcl-f920cfsl",
    "name": "TCL 708 L Chest Freezer",
    "brand": "TCL",
    "category": "fridge",
    "model": "F920CFSL",
    "price": 8499,
    "oldPrice": 9499,
    "discount": 11,
    "icon": "🧊",
    "images": [],
    "description": "Chest Freezer\n708 L",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "tcl-f709tl",
    "name": "TCL 9 KG Top Load Washer",
    "brand": "TCL",
    "category": "laundry",
    "model": "F709TL",
    "price": 3499,
    "oldPrice": 4899,
    "discount": 29,
    "icon": "👕",
    "images": [],
    "description": "Top Load Washer\n9 KG",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "tcl-f711tl",
    "name": "TCL 10.5 KG Top Load Washer",
    "brand": "TCL",
    "category": "laundry",
    "model": "F711TL",
    "price": 3999,
    "oldPrice": 5699,
    "discount": 30,
    "icon": "👕",
    "images": [],
    "description": "Top Load Washer\n10.5 KG",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "tcl-p607fl",
    "name": "TCL 7 KG Front Load Washer",
    "brand": "TCL",
    "category": "laundry",
    "model": "P607FL",
    "price": 3499,
    "oldPrice": 3999,
    "discount": 13,
    "icon": "👕",
    "images": [],
    "description": "Front Load Washer\n7 KG",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "tcl-p1108flg",
    "name": "TCL 8 KG Front Load Inverter Washer",
    "brand": "TCL",
    "category": "laundry",
    "model": "P1108FLG",
    "price": 5999,
    "oldPrice": 7099,
    "discount": 15,
    "icon": "👕",
    "images": [],
    "description": "Front Load Inverter Washer\n8 KG",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "tcl-p1109flg",
    "name": "TCL 9 KG Front Load Inverter Washer",
    "brand": "TCL",
    "category": "laundry",
    "model": "P1109FLG",
    "price": 6499,
    "oldPrice": 7499,
    "discount": 13,
    "icon": "👕",
    "images": [],
    "description": "Front Load Inverter Washer\n9 KG",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "tcl-p211flg",
    "name": "TCL 10.5 KG Front Load Inverter Washer",
    "brand": "TCL",
    "category": "laundry",
    "model": "P211FLG",
    "price": 6999,
    "oldPrice": 8299,
    "discount": 16,
    "icon": "👕",
    "images": [],
    "description": "Front Load Inverter Washer\n10.5 KG",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "tcl-c211wdg",
    "name": "TCL 10.5 KG\\ 6 KGS Washer & Dryer",
    "brand": "TCL",
    "category": "small",
    "model": "C211WDG",
    "price": 7999,
    "oldPrice": 9699,
    "discount": 18,
    "icon": "🔌",
    "images": [],
    "description": "Washer & Dryer\n10.5 KG\\ 6 KGS",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "midea-msaf24b12crdn1",
    "name": "Midea 1.5 HP Split Inverter AC (R410)",
    "brand": "Midea",
    "category": "ac",
    "model": "MSAF24B-12CRDN1",
    "price": 4399,
    "oldPrice": 6399,
    "discount": 31,
    "icon": "❄️",
    "images": [],
    "description": "Split Inverter AC (R410)\n1.5 HP",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "midea-msag12crdn8",
    "name": "Midea 1.5 HP Split Inverter AC (R32)",
    "brand": "Midea",
    "category": "ac",
    "model": "MSAG-12CRDN8",
    "price": 5199,
    "oldPrice": 6199,
    "discount": 16,
    "icon": "❄️",
    "images": [],
    "description": "Split Inverter AC (R32)\n1.5 HP",
    "tags": [
      "new-arrivals",
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "midea-msag18crdn8",
    "name": "Midea 2.0 HP Split Inverter AC (R32)",
    "brand": "Midea",
    "category": "ac",
    "model": "MSAG-18CRDN8",
    "price": 7499,
    "oldPrice": 8299,
    "discount": 10,
    "icon": "❄️",
    "images": [],
    "description": "Split Inverter AC (R32)\n2.0 HP",
    "tags": [
      "new-arrivals",
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "midea-msag24crdn8",
    "name": "Midea 2.5 HP Split Inverter AC (R32)",
    "brand": "Midea",
    "category": "ac",
    "model": "MSAG-24CRDN8",
    "price": 11799,
    "oldPrice": 12299,
    "discount": 4,
    "icon": "❄️",
    "images": [],
    "description": "Split Inverter AC (R32)\n2.5 HP",
    "tags": [
      "new-arrivals",
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "midea-msagbu12hrfn7",
    "name": "Midea 1.5 HP Split Inverter AC (R290)",
    "brand": "Midea",
    "category": "ac",
    "model": "MSAGBU-12HRFN7",
    "price": 5499,
    "oldPrice": 8499,
    "discount": 35,
    "icon": "❄️",
    "images": [],
    "description": "Split Inverter AC (R290)\n1.5 HP",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "midea-msafc17crdn8mox23018cdn8q",
    "name": "Midea 2.0HP Split Inverter AC (R32)",
    "brand": "Midea",
    "category": "ac",
    "model": "MSAFC-17CRDN8/MOX230-18CDN8-Q",
    "price": 6799,
    "oldPrice": 8799,
    "discount": 23,
    "icon": "❄️",
    "images": [],
    "description": "Split Inverter AC (R32)\n2.0HP",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "midea-mftj36crn1",
    "name": "Midea 36000 BTU Split AC (R410)",
    "brand": "Midea",
    "category": "ac",
    "model": "MFTJ-36CRN1",
    "price": 17999,
    "oldPrice": 19999,
    "discount": 10,
    "icon": "❄️",
    "images": [],
    "description": "Split AC (R410)\n36000 BTU",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "midea-mj248crn1",
    "name": "Midea 48000 BTU Split AC (R410)",
    "brand": "Midea",
    "category": "ac",
    "model": "MJ2-48CRN1",
    "price": 22999,
    "oldPrice": 27899,
    "discount": 18,
    "icon": "❄️",
    "images": [],
    "description": "Split AC (R410)\n48000 BTU",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "midea-mfpa40048hrfn1",
    "name": "Midea 48000 BTU/H Floor Standing AC",
    "brand": "Midea",
    "category": "ac",
    "model": "MFPA400-48HRFN1",
    "price": 26999,
    "oldPrice": 36499,
    "discount": 26,
    "icon": "❄️",
    "images": [],
    "description": "Floor Standing AC\n48000 BTU/H",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "midea-mfpa18crdn1",
    "name": "Midea 18000 btu Floor Standing AC",
    "brand": "Midea",
    "category": "ac",
    "model": "MFPA-18CRDN1",
    "price": 9999,
    "oldPrice": 13999,
    "discount": 29,
    "icon": "❄️",
    "images": [],
    "description": "Floor Standing AC\n18000 btu",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "midea-fs4019k",
    "name": "Midea Standing Freezer",
    "brand": "Midea",
    "category": "fridge",
    "model": "FS40-19K",
    "price": 399,
    "oldPrice": 699,
    "discount": 43,
    "icon": "🔌",
    "images": [],
    "description": "Standing Freezer",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "midea-fc56",
    "name": "Midea 16\" Ceiling Fan",
    "brand": "Midea",
    "category": "small",
    "model": "FC-56",
    "price": 399,
    "oldPrice": 479,
    "discount": 17,
    "icon": "🔌",
    "images": [],
    "description": "Ceiling Fan\n16\"",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "midea-fs4523mrd",
    "name": "Midea 18'' Rechargeable Fan",
    "brand": "Midea",
    "category": "small",
    "model": "FS45-23MRD",
    "price": 999,
    "oldPrice": 1099,
    "discount": 9,
    "icon": "🔌",
    "images": [],
    "description": "Rechargeable Fan\n18''",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "midea-mdrd142fgn50",
    "name": "Midea 93 L Table Top Refrigerator",
    "brand": "Midea",
    "category": "fridge",
    "model": "MDRD142FGN50",
    "price": 1999,
    "oldPrice": 2899,
    "discount": 31,
    "icon": "🧊",
    "images": [],
    "description": "Table Top Refrigerator\n93 L",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "midea-mdrt134fgn50",
    "name": "Midea 87 L Table Top Refrigerator",
    "brand": "Midea",
    "category": "fridge",
    "model": "MDRT134FGN50",
    "price": 1699,
    "oldPrice": 3499,
    "discount": 51,
    "icon": "🧊",
    "images": [],
    "description": "Table Top Refrigerator\n87 L",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "midea-mdrb424fgf02",
    "name": "Midea 302 L Table Top Refrigerator",
    "brand": "Midea",
    "category": "fridge",
    "model": "MDRB424FGF02",
    "price": 7999,
    "oldPrice": 10799,
    "discount": 26,
    "icon": "🧊",
    "images": [],
    "description": "Table Top Refrigerator\n302 L",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "midea-mdrt241ftgn50",
    "name": "Midea 174 L Bottom Mount Refrigerator",
    "brand": "Midea",
    "category": "fridge",
    "model": "MDRT241FTGN50",
    "price": 3299,
    "oldPrice": 4899,
    "discount": 33,
    "icon": "🧊",
    "images": [],
    "description": "Bottom Mount Refrigerator\n174 L",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "midea-mdrt645mtn46d",
    "name": "Midea 463 L DEFROST  TOP FREEZER",
    "brand": "Midea",
    "category": "fridge",
    "model": "MDRT645MTN46D",
    "price": 7999,
    "oldPrice": 11399,
    "discount": 30,
    "icon": "🧊",
    "images": [],
    "description": "DEFROST  TOP FREEZER\n463 L",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "midea-mdrt489mtn46",
    "name": "Midea 360 L DEFROST  TOP FREEZER",
    "brand": "Midea",
    "category": "fridge",
    "model": "MDRT489MTN46",
    "price": 6999,
    "oldPrice": 9199,
    "discount": 24,
    "icon": "🧊",
    "images": [],
    "description": "DEFROST  TOP FREEZER\n360 L",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "midea-mdrt294fgn28",
    "name": "Midea 207 L DEFROST  TOP FREEZER",
    "brand": "Midea",
    "category": "fridge",
    "model": "MDRT294FGN28",
    "price": 3499,
    "oldPrice": 4599,
    "discount": 24,
    "icon": "🧊",
    "images": [],
    "description": "DEFROST  TOP FREEZER\n207 L",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "midea-mdrt187fgg28",
    "name": "Midea 128 L DEFROST  TOP FREEZER",
    "brand": "Midea",
    "category": "fridge",
    "model": "MDRT187FGG28",
    "price": 2499,
    "oldPrice": 3599,
    "discount": 31,
    "icon": "🧊",
    "images": [],
    "description": "DEFROST  TOP FREEZER\n128 L",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "midea-mdrz302fzg21",
    "name": "Midea 211 L Single Door Refrigerator",
    "brand": "Midea",
    "category": "small",
    "model": "MDRZ302FZG21",
    "price": 4999,
    "oldPrice": 7099,
    "discount": 30,
    "icon": "🔌",
    "images": [],
    "description": "Single Door Refrigerator\n211 L",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "midea-mdrz432fzg21",
    "name": "Midea 316 L Single Door Refrigerator",
    "brand": "Midea",
    "category": "small",
    "model": "MDRZ432FZG21",
    "price": 5999,
    "oldPrice": 7899,
    "discount": 24,
    "icon": "🔌",
    "images": [],
    "description": "Single Door Refrigerator\n316 L",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "midea-mdrs710fgf46d",
    "name": "Midea 548 L Side-by-Side Refrigerator",
    "brand": "Midea",
    "category": "fridge",
    "model": "MDRS710FGF46D",
    "price": 9999,
    "oldPrice": 15699,
    "discount": 36,
    "icon": "🧊",
    "images": [],
    "description": "Side-by-Side Refrigerator\n548 L",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "midea-mdrc193fzg43d",
    "name": "Midea 99 L INVERTER",
    "brand": "Midea",
    "category": "small",
    "model": "MDRC193FZG43D",
    "price": 2099,
    "oldPrice": 2499,
    "discount": 16,
    "icon": "🔌",
    "images": [],
    "description": "INVERTER\n99 L",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "midea-mdrc265fzg43d",
    "name": "Midea 143 L INVERTER",
    "brand": "Midea",
    "category": "small",
    "model": "MDRC265FZG43D",
    "price": 2599,
    "oldPrice": 2899,
    "discount": 10,
    "icon": "🔌",
    "images": [],
    "description": "INVERTER\n143 L",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "midea-mdrc362fzg43d",
    "name": "Midea 198 L INVERTER",
    "brand": "Midea",
    "category": "small",
    "model": "MDRC362FZG43D",
    "price": 2999,
    "oldPrice": 3499,
    "discount": 14,
    "icon": "🔌",
    "images": [],
    "description": "INVERTER\n198 L",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "midea-mdrc407fzn43d",
    "name": "Midea 294 L INVERTER",
    "brand": "Midea",
    "category": "small",
    "model": "MDRC407FZN43D",
    "price": 4499,
    "oldPrice": 5399,
    "discount": 17,
    "icon": "🔌",
    "images": [],
    "description": "INVERTER\n294 L",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "midea-mf110w80bt",
    "name": "Midea 8 KG Front Load Washer",
    "brand": "Midea",
    "category": "laundry",
    "model": "MF110W80B/T",
    "price": 4999,
    "oldPrice": 6399,
    "discount": 22,
    "icon": "👕",
    "images": [],
    "description": "Front Load Washer\n8 KG",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "midea-mf110w70t",
    "name": "Midea 7 KG Front Load Washer",
    "brand": "Midea",
    "category": "laundry",
    "model": "MF110W70/T",
    "price": 3999,
    "oldPrice": 5499,
    "discount": 27,
    "icon": "👕",
    "images": [],
    "description": "Front Load Washer\n7 KG",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "midea-yl1674sb",
    "name": "Midea 16 ltr Water Dispenser",
    "brand": "Midea",
    "category": "kitchen",
    "model": "YL1674S-B",
    "price": 2199,
    "oldPrice": 2499,
    "discount": 12,
    "icon": "🍳",
    "images": [],
    "description": "Water Dispenser\n16 ltr",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "midea-yl2037sw",
    "name": "Midea Water Dispenser",
    "brand": "Midea",
    "category": "kitchen",
    "model": "YL2037S-W",
    "price": 1799,
    "oldPrice": 1999,
    "discount": 10,
    "icon": "🍳",
    "images": [],
    "description": "Water Dispenser",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "midea-sp5055t082b",
    "name": "Midea 4 BURNERS 4 BURNER",
    "brand": "Midea",
    "category": "small",
    "model": "SP5055T082-B",
    "price": 1499,
    "oldPrice": 2599,
    "discount": 42,
    "icon": "🔌",
    "images": [],
    "description": "4 BURNER\n4 BURNERS",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "midea-sp5055t082s",
    "name": "Midea 4 BURNER",
    "brand": "Midea",
    "category": "small",
    "model": "SP5055T082-S",
    "price": 1599,
    "oldPrice": 2699,
    "discount": 41,
    "icon": "🔌",
    "images": [],
    "description": "4 BURNER",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "midea-36lmg5g080v",
    "name": "Midea 5 BURNER",
    "brand": "Midea",
    "category": "small",
    "model": "36LMG5G080V",
    "price": 6499,
    "oldPrice": 9199,
    "discount": 29,
    "icon": "🔌",
    "images": [],
    "description": "5 BURNER",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "midea-eg925eff",
    "name": "Midea 25 LTRS GRILL",
    "brand": "Midea",
    "category": "small",
    "model": "EG925EFF",
    "price": 1699,
    "oldPrice": 1999,
    "discount": 15,
    "icon": "🔌",
    "images": [],
    "description": "GRILL\n25 LTRS",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "midea-eg9p032mxs",
    "name": "Midea 30 LTRS GRILL",
    "brand": "Midea",
    "category": "small",
    "model": "EG9P032MX-S",
    "price": 1799,
    "oldPrice": 1899,
    "discount": 5,
    "icon": "🔌",
    "images": [],
    "description": "GRILL\n30 LTRS",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "midea-mm7p012mzb",
    "name": "Midea 20 LTRS SOLO",
    "brand": "Midea",
    "category": "small",
    "model": "MM7P012MZ-B",
    "price": 699,
    "oldPrice": 1099,
    "discount": 36,
    "icon": "🔌",
    "images": [],
    "description": "SOLO\n20 LTRS",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "midea-em9p032mos",
    "name": "Midea 30 LTRS - SILVER SOLO",
    "brand": "Midea",
    "category": "small",
    "model": "EM9P032MO-S",
    "price": 1499,
    "oldPrice": 1799,
    "discount": 17,
    "icon": "🔌",
    "images": [],
    "description": "SOLO\n30 LTRS - SILVER",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "midea-em9p032mob",
    "name": "Midea 30 LTRS - BLACK SOLO",
    "brand": "Midea",
    "category": "small",
    "model": "EM9P032MO-B",
    "price": 1399,
    "oldPrice": 1699,
    "discount": 18,
    "icon": "🔌",
    "images": [],
    "description": "SOLO\n30 LTRS - BLACK",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "midea-em034a2mob",
    "name": "Midea 34 LTRS - BLACK SOLO",
    "brand": "Midea",
    "category": "small",
    "model": "EM034A2MO-B",
    "price": 1799,
    "oldPrice": 1899,
    "discount": 5,
    "icon": "🔌",
    "images": [],
    "description": "SOLO\n34 LTRS - BLACK",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "midea-em142a2mib",
    "name": "Midea 42 LTRS - SILVER SOLO",
    "brand": "Midea",
    "category": "small",
    "model": "EM142A2MI-B",
    "price": 1999,
    "oldPrice": 2299,
    "discount": 13,
    "icon": "🔌",
    "images": [],
    "description": "SOLO\n42 LTRS - SILVER",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "midea-mdre353fgn01",
    "name": "Midea 238 LTRS FRDIGE BUILT IN",
    "brand": "Midea",
    "category": "small",
    "model": "MDRE353FGN01",
    "price": 8999,
    "oldPrice": 9999,
    "discount": 10,
    "icon": "🔌",
    "images": [],
    "description": "FRDIGE BUILT IN\n238 LTRS",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "midea-mfa06d80bw",
    "name": "Midea 8 KG/ 6KG Washer & Dryer",
    "brand": "Midea",
    "category": "laundry",
    "model": "MFA06D80B/W",
    "price": 6999,
    "oldPrice": 10999,
    "discount": 36,
    "icon": "👕",
    "images": [],
    "description": "Washer & Dryer\n8 KG/ 6KG",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "midea-mc68aba",
    "name": "Midea 68 LTR ELECTRIC OVEN",
    "brand": "Midea",
    "category": "kitchen",
    "model": "MC68ABA",
    "price": 1799,
    "oldPrice": 2199,
    "discount": 18,
    "icon": "🍳",
    "images": [],
    "description": "ELECTRIC OVEN\n68 LTR",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "midea-mfcn40e2",
    "name": "Midea 4 LTR - BLACK AIR FRYER",
    "brand": "Midea",
    "category": "small",
    "model": "MF-CN40E2",
    "price": 599,
    "oldPrice": 899,
    "discount": 33,
    "icon": "🔌",
    "images": [],
    "description": "AIR FRYER\n4 LTR - BLACK",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "midea-mfcn45wk",
    "name": "Midea 4.5 LTR - BLACK AIR FRYER",
    "brand": "Midea",
    "category": "small",
    "model": "MF-CN45WK",
    "price": 699,
    "oldPrice": 999,
    "discount": 30,
    "icon": "🔌",
    "images": [],
    "description": "AIR FRYER\n4.5 LTR - BLACK",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "midea-mfcy55wk",
    "name": "Midea 6 LTR - BLACK AIR FRYER",
    "brand": "Midea",
    "category": "small",
    "model": "MF-CY55WK",
    "price": 749,
    "oldPrice": 1199,
    "discount": 38,
    "icon": "🔌",
    "images": [],
    "description": "AIR FRYER\n6 LTR - BLACK",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "midea-mfcy70k",
    "name": "Midea 7 LTR - BLACK AIR FRYER",
    "brand": "Midea",
    "category": "small",
    "model": "MF-CY70K",
    "price": 1099,
    "oldPrice": 1499,
    "discount": 27,
    "icon": "🔌",
    "images": [],
    "description": "AIR FRYER\n7 LTR - BLACK",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "midea-je2802",
    "name": "Midea 0.5 LTR JUICER",
    "brand": "Midea",
    "category": "small",
    "model": "JE2802",
    "price": 399,
    "oldPrice": 799,
    "discount": 50,
    "icon": "🔌",
    "images": [],
    "description": "JUICER\n0.5 LTR",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "midea-mk17s32a2",
    "name": "Midea 1.7 LTR Electric Kettle",
    "brand": "Midea",
    "category": "small",
    "model": "MK-17S32A2",
    "price": 199,
    "oldPrice": 299,
    "discount": 33,
    "icon": "🔌",
    "images": [],
    "description": "Electric Kettle\n1.7 LTR",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "midea-hm0293a",
    "name": "Midea 2 LTRS STAND MIXER",
    "brand": "Midea",
    "category": "small",
    "model": "HM0293A",
    "price": 499,
    "oldPrice": 599,
    "discount": 17,
    "icon": "🔌",
    "images": [],
    "description": "STAND MIXER\n2 LTRS",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "midea-bl2518",
    "name": "Midea 1.5 LTR - BLACK TABLE BLENDER",
    "brand": "Midea",
    "category": "small",
    "model": "BL2518",
    "price": 249,
    "oldPrice": 329,
    "discount": 24,
    "icon": "🔌",
    "images": [],
    "description": "TABLE BLENDER\n1.5 LTR - BLACK",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "midea-mjbl40g1",
    "name": "Midea 1.5 LTR - WHITE TABLE BLENDER",
    "brand": "Midea",
    "category": "small",
    "model": "MJ-BL40G1",
    "price": 449,
    "oldPrice": 529,
    "discount": 15,
    "icon": "🔌",
    "images": [],
    "description": "TABLE BLENDER\n1.5 LTR - WHITE",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "midea-mjbh6001w",
    "name": "Midea 1.5 LTR - BLACK STAND BLENDER",
    "brand": "Midea",
    "category": "small",
    "model": "MJ-BH6001W",
    "price": 399,
    "oldPrice": 469,
    "discount": 15,
    "icon": "🔌",
    "images": [],
    "description": "STAND BLENDER\n1.5 LTR - BLACK",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "midea-mjbl6008bw",
    "name": "Midea 1 LTR - BLACK STAND BLENDER",
    "brand": "Midea",
    "category": "small",
    "model": "MJ-BL6008BW",
    "price": 299,
    "oldPrice": 399,
    "discount": 25,
    "icon": "🔌",
    "images": [],
    "description": "STAND BLENDER\n1 LTR - BLACK",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "midea-mjfp8003w",
    "name": "Midea 800W- WHITE STAND BLENDER",
    "brand": "Midea",
    "category": "small",
    "model": "MJ-FP8003W",
    "price": 599,
    "oldPrice": 699,
    "discount": 14,
    "icon": "🔌",
    "images": [],
    "description": "STAND BLENDER\n800W- WHITE",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "midea-yj308j",
    "name": "Midea 1 LTR- GOLD RICE COOKER",
    "brand": "Midea",
    "category": "kitchen",
    "model": "YJ308J",
    "price": 349,
    "oldPrice": 379,
    "discount": 8,
    "icon": "🍳",
    "images": [],
    "description": "RICE COOKER\n1 LTR- GOLD",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "midea-yj508j",
    "name": "Midea 1.8 LTR- GOLD RICE COOKER",
    "brand": "Midea",
    "category": "kitchen",
    "model": "YJ508J",
    "price": 379,
    "oldPrice": 399,
    "discount": 5,
    "icon": "🍳",
    "images": [],
    "description": "RICE COOKER\n1.8 LTR- GOLD",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "midea-mycs6037wp2",
    "name": "Midea 1000W ELECTRIC PRESSURE COOKER",
    "brand": "Midea",
    "category": "kitchen",
    "model": "MY-CS6037WP2",
    "price": 899,
    "oldPrice": 999,
    "discount": 10,
    "icon": "🍳",
    "images": [],
    "description": "ELECTRIC PRESSURE COOKER\n1000W",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "midea-mcjk2313p",
    "name": "Midea 1500W CONTACT SANDWICH GRILL",
    "brand": "Midea",
    "category": "small",
    "model": "MC-JK2313P",
    "price": 179,
    "oldPrice": 199,
    "discount": 10,
    "icon": "🔌",
    "images": [],
    "description": "CONTACT SANDWICH GRILL\n1500W",
    "tags": [
      "new-arrivals",
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "midea-ypj20a1w",
    "name": "Midea 245 STEAM IRON",
    "brand": "Midea",
    "category": "small",
    "model": "YPJ20A1W",
    "price": 279,
    "oldPrice": 299,
    "discount": 7,
    "icon": "🔌",
    "images": [],
    "description": "STEAM IRON\n245",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "midea-ypj26a1w",
    "name": "Midea 330 STEAM IRON",
    "brand": "Midea",
    "category": "small",
    "model": "YPJ26A1W",
    "price": 379,
    "oldPrice": 399,
    "discount": 5,
    "icon": "🔌",
    "images": [],
    "description": "STEAM IRON\n330",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "nasco-nasj24fb",
    "name": "Nasco 24'' LED  FLAT",
    "brand": "Nasco",
    "category": "tv",
    "model": "NAS-J24FB",
    "price": 699,
    "oldPrice": 1099,
    "discount": 36,
    "icon": "📺",
    "images": [],
    "description": "LED  FLAT\n24''",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "nasco-nasb24fba",
    "name": "Nasco LED  FLAT",
    "brand": "Nasco",
    "category": "tv",
    "model": "NAS-B24FB-A",
    "price": 649,
    "oldPrice": 1099,
    "discount": 41,
    "icon": "📺",
    "images": [],
    "description": "LED  FLAT",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "nasco-nasj32fbfl",
    "name": "Nasco 32\" LED  FLAT",
    "brand": "Nasco",
    "category": "tv",
    "model": "NAS-J32FBFL",
    "price": 999,
    "oldPrice": 1499,
    "discount": 33,
    "icon": "📺",
    "images": [],
    "description": "LED  FLAT\n32\"",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "nasco-nasb43fbfl",
    "name": "Nasco 43 '' LED  FLAT",
    "brand": "Nasco",
    "category": "tv",
    "model": "NAS-B43FBFL",
    "price": 1999,
    "oldPrice": 2699,
    "discount": 26,
    "icon": "📺",
    "images": [],
    "description": "LED  FLAT\n43 ''",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "nasco-nasj50fbfl",
    "name": "Nasco 50\" LED  FLAT",
    "brand": "Nasco",
    "category": "tv",
    "model": "NAS-J50FBFL",
    "price": 3199,
    "oldPrice": 3899,
    "discount": 18,
    "icon": "📺",
    "images": [],
    "description": "LED  FLAT\n50\"",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "nasco-nasj50fbflg",
    "name": "Nasco 50\" LED FHD Smart TV",
    "brand": "Nasco",
    "category": "tv",
    "model": "NAS-J50FBFL-G",
    "price": 3799,
    "oldPrice": 3999,
    "discount": 5,
    "icon": "📺",
    "images": [],
    "description": "LED FHD Smart TV\n50\"",
    "tags": [
      "new-arrivals",
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "nasco-nasj12n1eco",
    "name": "Nasco 12000 Btu/h Split AC (R410)",
    "brand": "Nasco",
    "category": "ac",
    "model": "NAS-J12-N1-ECO",
    "price": 2899,
    "oldPrice": 3499,
    "discount": 17,
    "icon": "❄️",
    "images": [],
    "description": "Split AC (R410)\n12000 Btu/h",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "nasco-nast18n1",
    "name": "Nasco 18000 Btu/h Split AC (R410)",
    "brand": "Nasco",
    "category": "ac",
    "model": "NAS-T18N1",
    "price": 4999,
    "oldPrice": 6549,
    "discount": 24,
    "icon": "❄️",
    "images": [],
    "description": "Split AC (R410)\n18000 Btu/h",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "nasco-nast24n1",
    "name": "Nasco 24000 Btu/h Split AC (R410)",
    "brand": "Nasco",
    "category": "ac",
    "model": "NAS-T24N1",
    "price": 6999,
    "oldPrice": 9599,
    "discount": 27,
    "icon": "❄️",
    "images": [],
    "description": "Split AC (R410)\n24000 Btu/h",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "nasco-nasm12v1",
    "name": "Nasco 12000 Btu/h Split Inverter AC (R410)",
    "brand": "Nasco",
    "category": "ac",
    "model": "NAS-M12V1",
    "price": 3499,
    "oldPrice": 3499,
    "discount": null,
    "icon": "❄️",
    "images": [],
    "description": "Split Inverter AC (R410)\n12000 Btu/h",
    "tags": [
      "new-arrivals"
    ],
    "specs": {},
    "badge": "new"
  },
  {
    "id": "nasco-nasm18v1",
    "name": "Nasco 18000 Btu/h Split Inverter AC (R410)",
    "brand": "Nasco",
    "category": "ac",
    "model": "NAS-M18V1",
    "price": 5499,
    "oldPrice": 5999,
    "discount": 8,
    "icon": "❄️",
    "images": [],
    "description": "Split Inverter AC (R410)\n18000 Btu/h",
    "tags": [
      "new-arrivals",
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "nasco-nasm24v1",
    "name": "Nasco 24000 Btu/h Split Inverter AC (R410)",
    "brand": "Nasco",
    "category": "ac",
    "model": "NAS-M24V1",
    "price": 7499,
    "oldPrice": 7999,
    "discount": 6,
    "icon": "❄️",
    "images": [],
    "description": "Split Inverter AC (R410)\n24000 Btu/h",
    "tags": [
      "new-arrivals",
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "nasco-nasa12invxr32",
    "name": "Nasco 12000 Btu/h Split Inverter AC (R32)",
    "brand": "Nasco",
    "category": "ac",
    "model": "NAS-A12INV-X-R32",
    "price": 3299,
    "oldPrice": 3799,
    "discount": 13,
    "icon": "❄️",
    "images": [],
    "description": "Split Inverter AC (R32)\n12000 Btu/h",
    "tags": [
      "new-arrivals",
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "nasco-nasa18invxr32",
    "name": "Nasco 18000 Btu/h Split Inverter AC (R32)",
    "brand": "Nasco",
    "category": "ac",
    "model": "NAS-A18INV-X-R32",
    "price": 5299,
    "oldPrice": 5999,
    "discount": 12,
    "icon": "❄️",
    "images": [],
    "description": "Split Inverter AC (R32)\n18000 Btu/h",
    "tags": [
      "new-arrivals",
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "nasco-nasa24invxr32",
    "name": "Nasco 24000 Btu/h Split Inverter AC (R32)",
    "brand": "Nasco",
    "category": "ac",
    "model": "NAS-A24INV-X-R32",
    "price": 7199,
    "oldPrice": 7499,
    "discount": 4,
    "icon": "❄️",
    "images": [],
    "description": "Split Inverter AC (R32)\n24000 Btu/h",
    "tags": [
      "new-arrivals",
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "nasco-nasjfs18n1",
    "name": "Nasco 18000 Btu/h Floor Standing AC",
    "brand": "Nasco",
    "category": "ac",
    "model": "NAS-JFS-18N1",
    "price": 6999,
    "oldPrice": 9899,
    "discount": 29,
    "icon": "❄️",
    "images": [],
    "description": "Floor Standing AC\n18000 Btu/h",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "nasco-nasmfsc36mn1",
    "name": "Nasco 36000 BTU/H Floor Standing AC",
    "brand": "Nasco",
    "category": "ac",
    "model": "NAS-MFSC36MN1",
    "price": 14499,
    "oldPrice": 14999,
    "discount": 3,
    "icon": "❄️",
    "images": [],
    "description": "Floor Standing AC\n36000 BTU/H",
    "tags": [
      "new-arrivals",
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "nasco-nasmfsc48mn1",
    "name": "Nasco 48000 BTU/H Floor Standing AC",
    "brand": "Nasco",
    "category": "ac",
    "model": "NAS-MFSC48MN1",
    "price": 18499,
    "oldPrice": 18999,
    "discount": 3,
    "icon": "❄️",
    "images": [],
    "description": "Floor Standing AC\n48000 BTU/H",
    "tags": [
      "new-arrivals",
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "nasco-nasf2400fdr",
    "name": "Nasco 360 L French Door Refrigerator",
    "brand": "Nasco",
    "category": "fridge",
    "model": "NASF2-400FDR",
    "price": 6999,
    "oldPrice": 7999,
    "discount": 13,
    "icon": "🧊",
    "images": [],
    "description": "French Door Refrigerator\n360 L",
    "tags": [
      "new-arrivals",
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "nasco-nasf255sk",
    "name": "Nasco 425 L Side-by-Side Refrigerator",
    "brand": "Nasco",
    "category": "fridge",
    "model": "NASF2-55SK",
    "price": 7999,
    "oldPrice": 10799,
    "discount": 26,
    "icon": "🧊",
    "images": [],
    "description": "Side-by-Side Refrigerator\n425 L",
    "tags": [
      "new-arrivals",
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "nasco-nasf2400sbsf",
    "name": "Nasco 360 L Side-by-Side Refrigerator",
    "brand": "Nasco",
    "category": "fridge",
    "model": "NASF2-400SBSF",
    "price": 5999,
    "oldPrice": 5999,
    "discount": null,
    "icon": "🧊",
    "images": [],
    "description": "Side-by-Side Refrigerator\n360 L",
    "tags": [
      "new-arrivals"
    ],
    "specs": {},
    "badge": "new"
  },
  {
    "id": "nasco-nasf2661ff",
    "name": "Nasco 400 L Side-by-Side Refrigerator",
    "brand": "Nasco",
    "category": "fridge",
    "model": "NASF2-66.1FF",
    "price": 6999,
    "oldPrice": 9999,
    "discount": 30,
    "icon": "🧊",
    "images": [],
    "description": "Side-by-Side Refrigerator\n400 L",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "nasco-nasf2500wd",
    "name": "Nasco 401 L Top Mount Refrigerator",
    "brand": "Nasco",
    "category": "fridge",
    "model": "NASF2-500WD",
    "price": 7999,
    "oldPrice": 8999,
    "discount": 11,
    "icon": "🧊",
    "images": [],
    "description": "Top Mount Refrigerator\n401 L",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "nasco-nasf2600wd",
    "name": "Nasco 430 L Top Mount Refrigerator",
    "brand": "Nasco",
    "category": "fridge",
    "model": "NASF2-600WD",
    "price": 8499,
    "oldPrice": 9999,
    "discount": 15,
    "icon": "🧊",
    "images": [],
    "description": "Top Mount Refrigerator\n430 L",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "nasco-nasf245",
    "name": "Nasco 320 L Top Mount Refrigerator",
    "brand": "Nasco",
    "category": "fridge",
    "model": "NASF2-45",
    "price": 4499,
    "oldPrice": 6599,
    "discount": 32,
    "icon": "🧊",
    "images": [],
    "description": "Top Mount Refrigerator\n320 L",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "nasco-nasf2320fld",
    "name": "Nasco 280 L Top Mount Refrigerator",
    "brand": "Nasco",
    "category": "fridge",
    "model": "NASF2-320FLD",
    "price": 3999,
    "oldPrice": 4999,
    "discount": 20,
    "icon": "🧊",
    "images": [],
    "description": "Top Mount Refrigerator\n280 L",
    "tags": [
      "new-arrivals",
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "nasco-nasf2320flb",
    "name": "Nasco Top Mount Refrigerator",
    "brand": "Nasco",
    "category": "fridge",
    "model": "NASF2-320FL-B",
    "price": 3799,
    "oldPrice": 3999,
    "discount": 5,
    "icon": "🧊",
    "images": [],
    "description": "Top Mount Refrigerator",
    "tags": [
      "new-arrivals",
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "nasco-nasf2250fld",
    "name": "Nasco 210 L Top Mount Refrigerator",
    "brand": "Nasco",
    "category": "fridge",
    "model": "NASF2-250FLD",
    "price": 3799,
    "oldPrice": 4599,
    "discount": 17,
    "icon": "🧊",
    "images": [],
    "description": "Top Mount Refrigerator\n210 L",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "nasco-nasf230",
    "name": "Nasco 207 L Top Mount Refrigerator",
    "brand": "Nasco",
    "category": "fridge",
    "model": "NASF2-30",
    "price": 3299,
    "oldPrice": 3699,
    "discount": 11,
    "icon": "🧊",
    "images": [],
    "description": "Top Mount Refrigerator\n207 L",
    "tags": [
      "new-arrivals",
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "nasco-nasf222",
    "name": "Nasco 166 L Top Mount Refrigerator",
    "brand": "Nasco",
    "category": "fridge",
    "model": "NASF2-22",
    "price": 2899,
    "oldPrice": 4349,
    "discount": 33,
    "icon": "🧊",
    "images": [],
    "description": "Top Mount Refrigerator\n166 L",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "nasco-nasf215s",
    "name": "Nasco 118 L Top Mount Refrigerator",
    "brand": "Nasco",
    "category": "fridge",
    "model": "NASF2-15S",
    "price": 1999,
    "oldPrice": 2899,
    "discount": 31,
    "icon": "🧊",
    "images": [],
    "description": "Top Mount Refrigerator\n118 L",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "nasco-nasf212s",
    "name": "Nasco 95 L Top Mount Refrigerator",
    "brand": "Nasco",
    "category": "fridge",
    "model": "NASF2-12S",
    "price": 1849,
    "oldPrice": 2349,
    "discount": 21,
    "icon": "🧊",
    "images": [],
    "description": "Top Mount Refrigerator\n95 L",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "nasco-dd220",
    "name": "Nasco 147 L Bottom Mount Refrigerator",
    "brand": "Nasco",
    "category": "fridge",
    "model": "DD2-20",
    "price": 2899,
    "oldPrice": 3799,
    "discount": 24,
    "icon": "🧊",
    "images": [],
    "description": "Bottom Mount Refrigerator\n147 L",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "nasco-nasd223sk",
    "name": "Nasco 170 L Bottom Mount Refrigerator",
    "brand": "Nasco",
    "category": "fridge",
    "model": "NASD2-23-SK",
    "price": 2999,
    "oldPrice": 3799,
    "discount": 21,
    "icon": "🧊",
    "images": [],
    "description": "Bottom Mount Refrigerator\n170 L",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "nasco-nasd229sk",
    "name": "Nasco 251 L Bottom Mount Refrigerator",
    "brand": "Nasco",
    "category": "fridge",
    "model": "NASD2-29SK",
    "price": 4499,
    "oldPrice": 5399,
    "discount": 17,
    "icon": "🧊",
    "images": [],
    "description": "Bottom Mount Refrigerator\n251 L",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "nasco-nasd230",
    "name": "Nasco 258 L Bottom Mount Refrigerator",
    "brand": "Nasco",
    "category": "fridge",
    "model": "NASD2-30",
    "price": 4499,
    "oldPrice": 5849,
    "discount": 23,
    "icon": "🧊",
    "images": [],
    "description": "Bottom Mount Refrigerator\n258 L",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "nasco-nasd244",
    "name": "Nasco 287 L Bottom Mount Refrigerator",
    "brand": "Nasco",
    "category": "fridge",
    "model": "NASD2-44",
    "price": 5199,
    "oldPrice": 7149,
    "discount": 27,
    "icon": "🧊",
    "images": [],
    "description": "Bottom Mount Refrigerator\n287 L",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "nasco-nasd240wd",
    "name": "Nasco 307 L Bottom Mount Refrigerator",
    "brand": "Nasco",
    "category": "fridge",
    "model": "NASD2-40WD",
    "price": 4999,
    "oldPrice": 8299,
    "discount": 40,
    "icon": "🧊",
    "images": [],
    "description": "Bottom Mount Refrigerator\n307 L",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "nasco-nasf106",
    "name": "Nasco 41 L Bedside Refrigerator",
    "brand": "Nasco",
    "category": "fridge",
    "model": "NASF1-06",
    "price": 1299,
    "oldPrice": 1599,
    "discount": 19,
    "icon": "🧊",
    "images": [],
    "description": "Bedside Refrigerator\n41 L",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "nasco-nasf195fl",
    "name": "Nasco 76 L Table Top Refrigerator",
    "brand": "Nasco",
    "category": "fridge",
    "model": "NASF1-95FL",
    "price": 1199,
    "oldPrice": 1799,
    "discount": 33,
    "icon": "🧊",
    "images": [],
    "description": "Table Top Refrigerator\n76 L",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "nasco-nasf1110flb",
    "name": "Nasco 92 L Table Top Refrigerator",
    "brand": "Nasco",
    "category": "fridge",
    "model": "NASF1-110FL-B",
    "price": 1299,
    "oldPrice": 1899,
    "discount": 32,
    "icon": "🧊",
    "images": [],
    "description": "Table Top Refrigerator\n92 L",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "nasco-nasf111s",
    "name": "Nasco 91 L Table Top Refrigerator",
    "brand": "Nasco",
    "category": "fridge",
    "model": "NASF1-11S",
    "price": 1399,
    "oldPrice": 1899,
    "discount": 26,
    "icon": "🧊",
    "images": [],
    "description": "Table Top Refrigerator\n91 L",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "nasco-nasf211flbmirror",
    "name": "Nasco 86 L Refrigerator",
    "brand": "Nasco",
    "category": "fridge",
    "model": "NASF2-11FL-B-MIRROR",
    "price": 1799,
    "oldPrice": 2199,
    "discount": 18,
    "icon": "🧊",
    "images": [],
    "description": "Refrigerator\n86 L",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "nasco-nasf212flb",
    "name": "Nasco 102 L Refrigerator",
    "brand": "Nasco",
    "category": "fridge",
    "model": "NASF2-12FL-B",
    "price": 1899,
    "oldPrice": 2399,
    "discount": 21,
    "icon": "🧊",
    "images": [],
    "description": "Refrigerator\n102 L",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "nasco-nasf2110rt",
    "name": "Nasco 86 L Table Top Refrigerator",
    "brand": "Nasco",
    "category": "fridge",
    "model": "NASF2-110RT",
    "price": 2299,
    "oldPrice": 2349,
    "discount": 2,
    "icon": "🧊",
    "images": [],
    "description": "Table Top Refrigerator\n86 L",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "nasco-nasf2130",
    "name": "Nasco 110 L Refrigerator",
    "brand": "Nasco",
    "category": "fridge",
    "model": "NASF2-130",
    "price": 1749,
    "oldPrice": 2349,
    "discount": 26,
    "icon": "🧊",
    "images": [],
    "description": "Refrigerator\n110 L",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "nasco-nasf213fl",
    "name": "Nasco 112 L Refrigerator",
    "brand": "Nasco",
    "category": "fridge",
    "model": "NASF2-13FL",
    "price": 1799,
    "oldPrice": 2649,
    "discount": 32,
    "icon": "🧊",
    "images": [],
    "description": "Refrigerator\n112 L",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "nasco-nasf216fl",
    "name": "Nasco 138 L Refrigerator",
    "brand": "Nasco",
    "category": "fridge",
    "model": "NASF2-16FL",
    "price": 1999,
    "oldPrice": 2999,
    "discount": 33,
    "icon": "🧊",
    "images": [],
    "description": "Refrigerator\n138 L",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "nasco-nasf218fl",
    "name": "Nasco 158 L Refrigerator",
    "brand": "Nasco",
    "category": "fridge",
    "model": "NASF2-18FL",
    "price": 2099,
    "oldPrice": 3249,
    "discount": 35,
    "icon": "🧊",
    "images": [],
    "description": "Refrigerator\n158 L",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "nasco-nasd210fl",
    "name": "Nasco 106 L Bottom Mount Refrigerator",
    "brand": "Nasco",
    "category": "fridge",
    "model": "NASD2-10FL",
    "price": 1899,
    "oldPrice": 2649,
    "discount": 28,
    "icon": "🧊",
    "images": [],
    "description": "Bottom Mount Refrigerator\n106 L",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "nasco-nasd214fl",
    "name": "Nasco 116 L Bottom Mount Refrigerator",
    "brand": "Nasco",
    "category": "fridge",
    "model": "NASD2-14FL",
    "price": 2099,
    "oldPrice": 2799,
    "discount": 25,
    "icon": "🧊",
    "images": [],
    "description": "Bottom Mount Refrigerator\n116 L",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "nasco-nasd218flg",
    "name": "Nasco 136 L Bottom Mount Refrigerator",
    "brand": "Nasco",
    "category": "fridge",
    "model": "NASD2-18Fl-G",
    "price": 2399,
    "oldPrice": 3249,
    "discount": 26,
    "icon": "🧊",
    "images": [],
    "description": "Bottom Mount Refrigerator\n136 L",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "nasco-nasd220fl",
    "name": "Nasco 158 L Bottom Mount Refrigerator",
    "brand": "Nasco",
    "category": "fridge",
    "model": "NASD2-20FL",
    "price": 2699,
    "oldPrice": 3449,
    "discount": 22,
    "icon": "🧊",
    "images": [],
    "description": "Bottom Mount Refrigerator\n158 L",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "nasco-nasd224fl",
    "name": "Nasco 196 L Bottom Mount Refrigerator",
    "brand": "Nasco",
    "category": "fridge",
    "model": "NASD2-24FL",
    "price": 3499,
    "oldPrice": 4049,
    "discount": 14,
    "icon": "🧊",
    "images": [],
    "description": "Bottom Mount Refrigerator\n196 L",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "nasco-nasd1225fl",
    "name": "Nasco 150 L Standing Freezer",
    "brand": "Nasco",
    "category": "fridge",
    "model": "NASD1-225FL",
    "price": 2999,
    "oldPrice": 3599,
    "discount": 17,
    "icon": "🧊",
    "images": [],
    "description": "Standing Freezer\n150 L",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "nasco-nasd1200sk",
    "name": "Nasco 166 L Standing Freezer",
    "brand": "Nasco",
    "category": "fridge",
    "model": "NASD1-200SK",
    "price": 3499,
    "oldPrice": 3599,
    "discount": 3,
    "icon": "🧊",
    "images": [],
    "description": "Standing Freezer\n166 L",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "nasco-dd133",
    "name": "Nasco 225 L Standing Freezer",
    "brand": "Nasco",
    "category": "fridge",
    "model": "DD1-33",
    "price": 4899,
    "oldPrice": 6849,
    "discount": 28,
    "icon": "🧊",
    "images": [],
    "description": "Standing Freezer\n225 L",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "nasco-nasfl110sc",
    "name": "Nasco 110 L Display Refrigerator",
    "brand": "Nasco",
    "category": "small",
    "model": "NAS-FL110SC",
    "price": 1999,
    "oldPrice": 2999,
    "discount": 33,
    "icon": "🔌",
    "images": [],
    "description": "Display Refrigerator\n110 L",
    "tags": [
      "new-arrivals",
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "nasco-nasfl3501dr",
    "name": "Nasco 288L Display Refrigerator",
    "brand": "Nasco",
    "category": "small",
    "model": "NAS-FL350-1DR",
    "price": 4499,
    "oldPrice": 6149,
    "discount": 27,
    "icon": "🔌",
    "images": [],
    "description": "Display Refrigerator\n288L",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "nasco-nasfl3601dr",
    "name": "Nasco 298L Display Refrigerator",
    "brand": "Nasco",
    "category": "small",
    "model": "NAS-FL360-1DR",
    "price": 4799,
    "oldPrice": 6699,
    "discount": 28,
    "icon": "🔌",
    "images": [],
    "description": "Display Refrigerator\n298L",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "nasco-nasfl4001dr",
    "name": "Nasco 358L Display Refrigerator",
    "brand": "Nasco",
    "category": "small",
    "model": "NAS-FL400-1DR",
    "price": 5699,
    "oldPrice": 7149,
    "discount": 20,
    "icon": "🔌",
    "images": [],
    "description": "Display Refrigerator\n358L",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "nasco-nas375dfg",
    "name": "Nasco 350 L Display Refrigerator",
    "brand": "Nasco",
    "category": "small",
    "model": "NAS-375DFG",
    "price": 5999,
    "oldPrice": 7499,
    "discount": 20,
    "icon": "🔌",
    "images": [],
    "description": "Display Refrigerator\n350 L",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "nasco-nasfl8502dr",
    "name": "Nasco 728 L Display Refrigerator",
    "brand": "Nasco",
    "category": "small",
    "model": "NAS-FL850-2DR",
    "price": 11999,
    "oldPrice": 14999,
    "discount": 20,
    "icon": "🔌",
    "images": [],
    "description": "Display Refrigerator\n728 L",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "nasco-nasfl13002dr",
    "name": "Nasco 1080 L Display Refrigerator",
    "brand": "Nasco",
    "category": "small",
    "model": "NAS-FL1300-2DR",
    "price": 15999,
    "oldPrice": 16999,
    "discount": 6,
    "icon": "🔌",
    "images": [],
    "description": "Display Refrigerator\n1080 L",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "nasco-nasfl14003dr",
    "name": "Nasco 1200 L Display Refrigerator",
    "brand": "Nasco",
    "category": "small",
    "model": "NAS-FL1400-3DR",
    "price": 17999,
    "oldPrice": 18999,
    "discount": 5,
    "icon": "🔌",
    "images": [],
    "description": "Display Refrigerator\n1200 L",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "nasco-nas150flg",
    "name": "Nasco 100 L Chest Freezer",
    "brand": "Nasco",
    "category": "fridge",
    "model": "NAS-150FL-G",
    "price": 1799,
    "oldPrice": 2249,
    "discount": 20,
    "icon": "🧊",
    "images": [],
    "description": "Chest Freezer\n100 L",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "nasco-nas200sk",
    "name": "Nasco 142 L Chest Freezer",
    "brand": "Nasco",
    "category": "fridge",
    "model": "NAS-200SK",
    "price": 2199,
    "oldPrice": 3149,
    "discount": 30,
    "icon": "🧊",
    "images": [],
    "description": "Chest Freezer\n142 L",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "nasco-nas200flg",
    "name": "Nasco 150L Chest Freezer",
    "brand": "Nasco",
    "category": "fridge",
    "model": "NAS-200FL-G",
    "price": 1999,
    "oldPrice": 3149,
    "discount": 37,
    "icon": "🧊",
    "images": [],
    "description": "Chest Freezer\n150L",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "nasco-nas160",
    "name": "Nasco 145 L Chest Freezer",
    "brand": "Nasco",
    "category": "fridge",
    "model": "NAS-160",
    "price": 2099,
    "oldPrice": 3099,
    "discount": 32,
    "icon": "🧊",
    "images": [],
    "description": "Chest Freezer\n145 L",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "nasco-nas210",
    "name": "Nasco 200 L Chest Freezer",
    "brand": "Nasco",
    "category": "fridge",
    "model": "NAS-210",
    "price": 2799,
    "oldPrice": 3899,
    "discount": 28,
    "icon": "🧊",
    "images": [],
    "description": "Chest Freezer\n200 L",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "nasco-nas230sk",
    "name": "Nasco 198 l Chest Freezer",
    "brand": "Nasco",
    "category": "fridge",
    "model": "NAS-230SK",
    "price": 2899,
    "oldPrice": 3449,
    "discount": 16,
    "icon": "🧊",
    "images": [],
    "description": "Chest Freezer\n198 l",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "nasco-nas350fl",
    "name": "Nasco 250 L Chest Freezer",
    "brand": "Nasco",
    "category": "fridge",
    "model": "NAS-350FL",
    "price": 3199,
    "oldPrice": 4599,
    "discount": 30,
    "icon": "🧊",
    "images": [],
    "description": "Chest Freezer\n250 L",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "nasco-nas380sk",
    "name": "Nasco 244 L Chest Freezer",
    "brand": "Nasco",
    "category": "fridge",
    "model": "NAS-380SK",
    "price": 3199,
    "oldPrice": 4449,
    "discount": 28,
    "icon": "🧊",
    "images": [],
    "description": "Chest Freezer\n244 L",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "nasco-nas400flg",
    "name": "Nasco 288L Chest Freezer",
    "brand": "Nasco",
    "category": "fridge",
    "model": "NAS-400FL-G",
    "price": 3799,
    "oldPrice": 5049,
    "discount": 25,
    "icon": "🧊",
    "images": [],
    "description": "Chest Freezer\n288L",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "nasco-nas370sk",
    "name": "Nasco 270 L Chest Freezer",
    "brand": "Nasco",
    "category": "fridge",
    "model": "NAS-370-SK",
    "price": 3999,
    "oldPrice": 4899,
    "discount": 18,
    "icon": "🧊",
    "images": [],
    "description": "Chest Freezer\n270 L",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "nasco-nas360sk",
    "name": "Nasco 335 L Chest Freezer",
    "brand": "Nasco",
    "category": "fridge",
    "model": "NAS-360-SK",
    "price": 4199,
    "oldPrice": 5399,
    "discount": 22,
    "icon": "🧊",
    "images": [],
    "description": "Chest Freezer\n335 L",
    "tags": [
      "new-arrivals",
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "nasco-nas420ssk",
    "name": "Nasco 392 L Chest Freezer",
    "brand": "Nasco",
    "category": "fridge",
    "model": "NAS-420S-SK",
    "price": 4999,
    "oldPrice": 6499,
    "discount": 23,
    "icon": "🧊",
    "images": [],
    "description": "Chest Freezer\n392 L",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "nasco-nas475flb",
    "name": "Nasco 400L Chest Freezer",
    "brand": "Nasco",
    "category": "fridge",
    "model": "NAS-475FL-B",
    "price": 5299,
    "oldPrice": 5999,
    "discount": 12,
    "icon": "🧊",
    "images": [],
    "description": "Chest Freezer\n400L",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "nasco-nas500fldd",
    "name": "Nasco 425 L Chest Freezer",
    "brand": "Nasco",
    "category": "fridge",
    "model": "NAS-500FL-DD",
    "price": 5499,
    "oldPrice": 7149,
    "discount": 23,
    "icon": "🧊",
    "images": [],
    "description": "Chest Freezer\n425 L",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "nasco-nas800fldd",
    "name": "Nasco 545L Chest Freezer",
    "brand": "Nasco",
    "category": "fridge",
    "model": "NAS-800FL-DD",
    "price": 7999,
    "oldPrice": 9199,
    "discount": 13,
    "icon": "🧊",
    "images": [],
    "description": "Chest Freezer\n545L",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "nasco-nas850fldd",
    "name": "Nasco 600L Chest Freezer",
    "brand": "Nasco",
    "category": "fridge",
    "model": "NAS-850FL-DD",
    "price": 8499,
    "oldPrice": 9999,
    "discount": 15,
    "icon": "🧊",
    "images": [],
    "description": "Chest Freezer\n600L",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "nasco-nas1200fldd",
    "name": "Nasco 800L Chest Freezer",
    "brand": "Nasco",
    "category": "fridge",
    "model": "NAS-1200FL-DD",
    "price": 9999,
    "oldPrice": 11799,
    "discount": 15,
    "icon": "🧊",
    "images": [],
    "description": "Chest Freezer\n800L",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "nasco-nasfs305fl",
    "name": "Nasco 239L Display Refrigerator",
    "brand": "Nasco",
    "category": "fridge",
    "model": "NAS-FS305FL",
    "price": 4999,
    "oldPrice": 6699,
    "discount": 25,
    "icon": "🧊",
    "images": [],
    "description": "Display Refrigerator\n239L",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "nasco-nasfs405fl",
    "name": "Nasco 360L Display Refrigerator",
    "brand": "Nasco",
    "category": "fridge",
    "model": "NAS-FS405FL",
    "price": 5499,
    "oldPrice": 7499,
    "discount": 27,
    "icon": "🧊",
    "images": [],
    "description": "Display Refrigerator\n360L",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "nasco-nasyd200w",
    "name": "Nasco Water Dispenser",
    "brand": "Nasco",
    "category": "kitchen",
    "model": "NAS-YD200-W",
    "price": 999,
    "oldPrice": 1299,
    "discount": 23,
    "icon": "🍳",
    "images": [],
    "description": "Water Dispenser",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "nasco-ag036afk",
    "name": "Nasco 36 LTRS Microwave (Grill)",
    "brand": "Nasco",
    "category": "small",
    "model": "AG036AFK",
    "price": 1799,
    "oldPrice": 2099,
    "discount": 14,
    "icon": "🔌",
    "images": [],
    "description": "Microwave (Grill)\n36 LTRS",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "nasco-mwo20nas2lvb",
    "name": "Nasco 20 LTRS Microwave",
    "brand": "Nasco",
    "category": "small",
    "model": "MWO20NAS-2LV-B",
    "price": 679,
    "oldPrice": 999,
    "discount": 32,
    "icon": "🔌",
    "images": [],
    "description": "Microwave\n20 LTRS",
    "tags": [
      "new-arrivals",
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "nasco-nas05tw",
    "name": "Nasco 5 KGS Twin Tub Semi-Auto Washer",
    "brand": "Nasco",
    "category": "laundry",
    "model": "NAS-05-TW",
    "price": 999,
    "oldPrice": 1649,
    "discount": 39,
    "icon": "👕",
    "images": [],
    "description": "Twin Tub Semi-Auto Washer\n5 KGS",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "nasco-nas07tw",
    "name": "Nasco 7 KGS Twin Tub Semi-Auto Washer",
    "brand": "Nasco",
    "category": "laundry",
    "model": "NAS-07-TW",
    "price": 1699,
    "oldPrice": 1999,
    "discount": 15,
    "icon": "👕",
    "images": [],
    "description": "Twin Tub Semi-Auto Washer\n7 KGS",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "nasco-nasttjs80",
    "name": "Nasco 8 KGS Twin Tub Semi-Auto Washer",
    "brand": "Nasco",
    "category": "laundry",
    "model": "NASTT-JS80",
    "price": 1999,
    "oldPrice": 2199,
    "discount": 9,
    "icon": "👕",
    "images": [],
    "description": "Twin Tub Semi-Auto Washer\n8 KGS",
    "tags": [
      "new-arrivals",
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "nasco-nas15tw",
    "name": "Nasco 15 KGS Twin Tub Semi-Auto Washer",
    "brand": "Nasco",
    "category": "laundry",
    "model": "NAS-15-TW",
    "price": 2999,
    "oldPrice": 3549,
    "discount": 15,
    "icon": "👕",
    "images": [],
    "description": "Twin Tub Semi-Auto Washer\n15 KGS",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "nasco-nastlb120fl",
    "name": "Nasco 12 KGS Top Load Washer",
    "brand": "Nasco",
    "category": "laundry",
    "model": "NASTL-B120FL",
    "price": 3799,
    "oldPrice": 3999,
    "discount": 5,
    "icon": "👕",
    "images": [],
    "description": "Top Load Washer\n12 KGS",
    "tags": [
      "new-arrivals",
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "nasco-nastlb80",
    "name": "Nasco 8 KGS Top Load Washer",
    "brand": "Nasco",
    "category": "laundry",
    "model": "NASTL-B80",
    "price": 2799,
    "oldPrice": 2999,
    "discount": 7,
    "icon": "👕",
    "images": [],
    "description": "Top Load Washer\n8 KGS",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "nasco-nasfljs12kgs",
    "name": "Nasco 12 KGS Front Load Washer",
    "brand": "Nasco",
    "category": "laundry",
    "model": "NASFL-JS12KG-S",
    "price": 4999,
    "oldPrice": 5399,
    "discount": 7,
    "icon": "👕",
    "images": [],
    "description": "Front Load Washer\n12 KGS",
    "tags": [
      "new-arrivals",
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "nasco-nasfljs10kgs",
    "name": "Nasco 10 KGS Front Load Washer",
    "brand": "Nasco",
    "category": "laundry",
    "model": "NASFL-JS10KG-S",
    "price": 4299,
    "oldPrice": 5049,
    "discount": 15,
    "icon": "👕",
    "images": [],
    "description": "Front Load Washer\n10 KGS",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "nasco-nasflj8kgs",
    "name": "Nasco 8 KGS Front Load Washer",
    "brand": "Nasco",
    "category": "laundry",
    "model": "NASFL-J8KG-S",
    "price": 3399,
    "oldPrice": 4599,
    "discount": 26,
    "icon": "👕",
    "images": [],
    "description": "Front Load Washer\n8 KGS",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "nasco-nasflj6kgs",
    "name": "Nasco 6 KGS Front Load Washer",
    "brand": "Nasco",
    "category": "laundry",
    "model": "NASFL-J6KG-S",
    "price": 2999,
    "oldPrice": 3699,
    "discount": 19,
    "icon": "👕",
    "images": [],
    "description": "Front Load Washer\n6 KGS",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "nasco-nasgcsniper50tb",
    "name": "Nasco 4 BURNNER Gas Cooker",
    "brand": "Nasco",
    "category": "kitchen",
    "model": "NASGC-SNIPER50TB",
    "price": 1499,
    "oldPrice": 2099,
    "discount": 29,
    "icon": "🍳",
    "images": [],
    "description": "Gas Cooker\n4 BURNNER",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "nasco-nasgcsniper50tbg",
    "name": "Nasco Gas Cooker",
    "brand": "Nasco",
    "category": "kitchen",
    "model": "NASGC-SNIPER50TB-G",
    "price": 1699,
    "oldPrice": 2499,
    "discount": 32,
    "icon": "🍳",
    "images": [],
    "description": "Gas Cooker",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "nasco-nasgclme90i",
    "name": "Nasco 5 BURNERS Gas Cooker",
    "brand": "Nasco",
    "category": "kitchen",
    "model": "NASGC-LME90I",
    "price": 5199,
    "oldPrice": 8199,
    "discount": 37,
    "icon": "🍳",
    "images": [],
    "description": "Gas Cooker\n5 BURNERS",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "nasco-nasdm4h109",
    "name": "Nasco 4 HOBS Electric Cooker",
    "brand": "Nasco",
    "category": "kitchen",
    "model": "NAS-DM4H109",
    "price": 2999,
    "oldPrice": 4599,
    "discount": 35,
    "icon": "🍳",
    "images": [],
    "description": "Electric Cooker\n4 HOBS",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "nasco-kec1798a",
    "name": "Nasco Electric Kettle",
    "brand": "Nasco",
    "category": "small",
    "model": "KEC-1798A",
    "price": 129,
    "oldPrice": 149,
    "discount": 13,
    "icon": "🔌",
    "images": [],
    "description": "Electric Kettle",
    "tags": [
      "new-arrivals",
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "nasco-imb1008gs",
    "name": "Nasco 26 LB - BLACK Ice Maker",
    "brand": "Nasco",
    "category": "small",
    "model": "IMB1008-GS",
    "price": 999,
    "oldPrice": 1299,
    "discount": 23,
    "icon": "🔌",
    "images": [],
    "description": "Ice Maker\n26 LB - BLACK",
    "tags": [
      "new-arrivals",
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "nasco-nasavr2000",
    "name": "Nasco 2000VA Voltage Regulator",
    "brand": "Nasco",
    "category": "small",
    "model": "NAS-AVR-2000",
    "price": 399,
    "oldPrice": 599,
    "discount": 33,
    "icon": "🔌",
    "images": [],
    "description": "Voltage Regulator\n2000VA",
    "tags": [
      "new-arrivals",
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "nasco-nasavr5000",
    "name": "Nasco 5000VA Voltage Regulator",
    "brand": "Nasco",
    "category": "small",
    "model": "NAS-AVR-5000",
    "price": 999,
    "oldPrice": 1499,
    "discount": 33,
    "icon": "🔌",
    "images": [],
    "description": "Voltage Regulator\n5000VA",
    "tags": [
      "new-arrivals",
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "nasco-nasavr3000wm",
    "name": "Nasco 3000VA Voltage Regulator",
    "brand": "Nasco",
    "category": "small",
    "model": "NAS-AVR-3000WM",
    "price": 999,
    "oldPrice": 1299,
    "discount": 23,
    "icon": "🔌",
    "images": [],
    "description": "Voltage Regulator\n3000VA",
    "tags": [
      "new-arrivals",
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "nasco-nassg10a",
    "name": "Nasco 10 Amps Voltage Regulator",
    "brand": "Nasco",
    "category": "small",
    "model": "NAS-SG10A",
    "price": 149,
    "oldPrice": 199,
    "discount": 25,
    "icon": "🔌",
    "images": [],
    "description": "Voltage Regulator\n10 Amps",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "nasco-nassg16a",
    "name": "Nasco 16 Amps Voltage Regulator",
    "brand": "Nasco",
    "category": "small",
    "model": "NAS-SG16A",
    "price": 169,
    "oldPrice": 239,
    "discount": 29,
    "icon": "🔌",
    "images": [],
    "description": "Voltage Regulator\n16 Amps",
    "tags": [
      "top-deals"
    ],
    "specs": {},
    "badge": "sale"
  },
  {
    "id": "hifuture-flybuds4b",
    "name": "HiFuture FlyBuds4 AI – Black",
    "brand": "HiFuture",
    "category": "audio",
    "model": "FLYBUDS4B",
    "price": 449,
    "oldPrice": null,
    "discount": null,
    "icon": "🎧",
    "images": [],
    "description": "HiFuture FlyBuds4 AI\nBlack Colour",
    "tags": [
      "new-arrivals"
    ],
    "specs": {},
    "badge": null
  },
  {
    "id": "hifuture-flybudsg",
    "name": "HiFuture FlyBuds4 AI – Matcha Green",
    "brand": "HiFuture",
    "category": "audio",
    "model": "FLYBUDSG",
    "price": 449,
    "oldPrice": null,
    "discount": null,
    "icon": "🎧",
    "images": [],
    "description": "HiFuture FlyBuds4 AI\nMatcha Green Colour",
    "tags": [
      "new-arrivals"
    ],
    "specs": {},
    "badge": null
  },
  {
    "id": "hifuture-flybudsp",
    "name": "HiFuture FlyBuds4 AI – Hot Pink",
    "brand": "HiFuture",
    "category": "audio",
    "model": "FLYBUDSP",
    "price": 449,
    "oldPrice": null,
    "discount": null,
    "icon": "🎧",
    "images": [],
    "description": "HiFuture FlyBuds4 AI\nHot Pink Colour",
    "tags": [
      "new-arrivals"
    ],
    "specs": {},
    "badge": null
  },
  {
    "id": "hifuture-flybuds4l",
    "name": "HiFuture FlyBuds4 AI – Latte",
    "brand": "HiFuture",
    "category": "audio",
    "model": "FLYBUDS4L",
    "price": 449,
    "oldPrice": null,
    "discount": null,
    "icon": "🎧",
    "images": [],
    "description": "HiFuture FlyBuds4 AI\nLatte Colour",
    "tags": [
      "new-arrivals"
    ],
    "specs": {},
    "badge": null
  },
  {
    "id": "hifuture-zone3b",
    "name": "HiFuture LUME – Black",
    "brand": "HiFuture",
    "category": "audio",
    "model": "ZONE3-B",
    "price": 349,
    "oldPrice": null,
    "discount": null,
    "icon": "🎧",
    "images": [],
    "description": "HiFuture LUME\nBlack Colour",
    "tags": [
      "new-arrivals"
    ],
    "specs": {},
    "badge": null
  },
  {
    "id": "hifuture-zone3s",
    "name": "HiFuture LUME – Silver",
    "brand": "HiFuture",
    "category": "audio",
    "model": "ZONE3-S",
    "price": 349,
    "oldPrice": null,
    "discount": null,
    "icon": "🎧",
    "images": [],
    "description": "HiFuture LUME\nSilver Colour",
    "tags": [
      "new-arrivals"
    ],
    "specs": {},
    "badge": null
  },
  {
    "id": "hifuture-zone3rg",
    "name": "HiFuture LUME – Rose Gold",
    "brand": "HiFuture",
    "category": "audio",
    "model": "ZONE3-RG",
    "price": 349,
    "oldPrice": null,
    "discount": null,
    "icon": "🎧",
    "images": [],
    "description": "HiFuture LUME\nRose Gold Colour",
    "tags": [
      "new-arrivals"
    ],
    "specs": {},
    "badge": null
  },
  {
    "id": "hifuture-lumesg",
    "name": "HiFuture LUME – Silver Grey",
    "brand": "HiFuture",
    "category": "audio",
    "model": "LUME-SG",
    "price": 399,
    "oldPrice": null,
    "discount": null,
    "icon": "🎧",
    "images": [],
    "description": "HiFuture LUME\nSilver Grey Colour",
    "tags": [
      "new-arrivals"
    ],
    "specs": {},
    "badge": null
  },
  {
    "id": "hifuture-lumedg",
    "name": "HiFuture LUME – Dark Green",
    "brand": "HiFuture",
    "category": "audio",
    "model": "LUME-DG",
    "price": 399,
    "oldPrice": null,
    "discount": null,
    "icon": "🎧",
    "images": [],
    "description": "HiFuture LUME\nDark Green Colour",
    "tags": [
      "new-arrivals"
    ],
    "specs": {},
    "badge": null
  },
  {
    "id": "hifuture-aura2s",
    "name": "HiFuture AURA2 – Silver",
    "brand": "HiFuture",
    "category": "audio",
    "model": "AURA2-S",
    "price": 799,
    "oldPrice": null,
    "discount": null,
    "icon": "🎧",
    "images": [],
    "description": "HiFuture AURA2\nSilver Colour",
    "tags": [
      "new-arrivals"
    ],
    "specs": {},
    "badge": null
  },
  {
    "id": "hifuture-aura2rg",
    "name": "HiFuture AURA2 – Rose Gold",
    "brand": "HiFuture",
    "category": "audio",
    "model": "AURA2-RG",
    "price": 799,
    "oldPrice": null,
    "discount": null,
    "icon": "🎧",
    "images": [],
    "description": "HiFuture AURA2\nRose Gold Colour",
    "tags": [
      "new-arrivals"
    ],
    "specs": {},
    "badge": null
  },
  {
    "id": "hifuture-gopro2s",
    "name": "HiFuture GO PRO2 – Silver",
    "brand": "HiFuture",
    "category": "audio",
    "model": "GOPRO2-S",
    "price": 999,
    "oldPrice": null,
    "discount": null,
    "icon": "🎧",
    "images": [],
    "description": "HiFuture GO PRO2\nSilver Colour",
    "tags": [
      "new-arrivals"
    ],
    "specs": {},
    "badge": null
  },
  {
    "id": "hifuture-gopro2sg",
    "name": "HiFuture GO PRO2 – Silver Green",
    "brand": "HiFuture",
    "category": "audio",
    "model": "GOPRO2-SG",
    "price": 999,
    "oldPrice": null,
    "discount": null,
    "icon": "🎧",
    "images": [],
    "description": "HiFuture GO PRO2\nSilver Green Colour",
    "tags": [
      "new-arrivals"
    ],
    "specs": {},
    "badge": null
  },
  {
    "id": "hifuture-aixs",
    "name": "HiFuture AIX – Silver",
    "brand": "HiFuture",
    "category": "audio",
    "model": "AIX-S",
    "price": 999,
    "oldPrice": null,
    "discount": null,
    "icon": "🎧",
    "images": [],
    "description": "HiFuture AIX\nSilver Colour",
    "tags": [
      "new-arrivals"
    ],
    "specs": {},
    "badge": null
  },
  {
    "id": "hifuture-aixliteb",
    "name": "HiFuture AIX Lite – Black",
    "brand": "HiFuture",
    "category": "audio",
    "model": "AIXLITE-B",
    "price": 899,
    "oldPrice": null,
    "discount": null,
    "icon": "🎧",
    "images": [],
    "description": "HiFuture AIX Lite\nBlack Colour",
    "tags": [
      "new-arrivals"
    ],
    "specs": {},
    "badge": null
  },
  {
    "id": "hifuture-aixlitecg",
    "name": "HiFuture AIX Lite – Champagne Gold",
    "brand": "HiFuture",
    "category": "audio",
    "model": "AIXLITE-CG",
    "price": 899,
    "oldPrice": null,
    "discount": null,
    "icon": "🎧",
    "images": [],
    "description": "HiFuture AIX Lite\nChampagne Gold Colour",
    "tags": [
      "new-arrivals"
    ],
    "specs": {},
    "badge": null
  },
  {
    "id": "hifuture-aixliteg",
    "name": "HiFuture AIX Lite – Green",
    "brand": "HiFuture",
    "category": "audio",
    "model": "AIXLITE-G",
    "price": 899,
    "oldPrice": null,
    "discount": null,
    "icon": "🎧",
    "images": [],
    "description": "HiFuture AIX Lite\nGreen Colour",
    "tags": [
      "new-arrivals"
    ],
    "specs": {},
    "badge": null
  },
  {
    "id": "hifuture-ultra3prob",
    "name": "HiFuture ULTRA3 PRO – Black",
    "brand": "HiFuture",
    "category": "audio",
    "model": "ULTRA3PRO-B",
    "price": 949,
    "oldPrice": null,
    "discount": null,
    "icon": "🎧",
    "images": [],
    "description": "HiFuture ULTRA3 PRO\nBlack Colour",
    "tags": [
      "new-arrivals"
    ],
    "specs": {},
    "badge": null
  },
  {
    "id": "hifuture-ultra3pros",
    "name": "HiFuture ULTRA3 PRO – Silver",
    "brand": "HiFuture",
    "category": "audio",
    "model": "ULTRA3PRO-S",
    "price": 949,
    "oldPrice": null,
    "discount": null,
    "icon": "🎧",
    "images": [],
    "description": "HiFuture ULTRA3 PRO\nSilver Colour",
    "tags": [
      "new-arrivals"
    ],
    "specs": {},
    "badge": null
  },
  {
    "id": "hifuture-velal",
    "name": "HiFuture VELA – Latte",
    "brand": "HiFuture",
    "category": "audio",
    "model": "VELA-L",
    "price": 1199,
    "oldPrice": null,
    "discount": null,
    "icon": "🎧",
    "images": [],
    "description": "HiFuture VELA\nLatte Colour",
    "tags": [
      "new-arrivals"
    ],
    "specs": {},
    "badge": null
  },
  {
    "id": "hifuture-veladg",
    "name": "HiFuture VELA – Dark Green",
    "brand": "HiFuture",
    "category": "audio",
    "model": "VELA-DG",
    "price": 1199,
    "oldPrice": null,
    "discount": null,
    "icon": "🎧",
    "images": [],
    "description": "HiFuture VELA\nDark Green Colour",
    "tags": [
      "new-arrivals"
    ],
    "specs": {},
    "badge": null
  },
  {
    "id": "hifuture-activebr",
    "name": "HiFuture ACTIVE – Black Red",
    "brand": "HiFuture",
    "category": "audio",
    "model": "ACTIVE-BR",
    "price": 1499,
    "oldPrice": null,
    "discount": null,
    "icon": "🎧",
    "images": [],
    "description": "HiFuture ACTIVE\nBlack Red Colour",
    "tags": [
      "new-arrivals"
    ],
    "specs": {},
    "badge": null
  },
  {
    "id": "hifuture-activeby",
    "name": "HiFuture ACTIVE – Black Yellow",
    "brand": "HiFuture",
    "category": "audio",
    "model": "ACTIVE-BY",
    "price": 1499,
    "oldPrice": null,
    "discount": null,
    "icon": "🎧",
    "images": [],
    "description": "HiFuture ACTIVE\nBlack Yellow Colour",
    "tags": [
      "new-arrivals"
    ],
    "specs": {},
    "badge": null
  }
];

/* ── FLASH SALE ── */
const FLASH_PRODUCTS = [
  {
    "id": "samsung-ua32h5000fuxgh",
    "discount": "18%",
    "originalPrice": 3399,
    "salePrice": 2799
  },
  {
    "id": "samsung-ua43f6000fuxgh",
    "discount": "25%",
    "originalPrice": 5299,
    "salePrice": 3999
  },
  {
    "id": "samsung-ua43u8000fuxgh",
    "discount": "20%",
    "originalPrice": 6599,
    "salePrice": 5299
  },
  {
    "id": "samsung-ua50u8000fuxgh",
    "discount": "35%",
    "originalPrice": 9199,
    "salePrice": 5999
  },
  {
    "id": "samsung-ua55u8000fuxgh",
    "discount": "29%",
    "originalPrice": 9699,
    "salePrice": 6899
  },
  {
    "id": "samsung-ua65u8000fuxgh",
    "discount": "31%",
    "originalPrice": 13099,
    "salePrice": 8999
  }
];

/* ── BLOG POSTS ── */
const BLOG_POSTS = [
  {
    "id": "blog-001",
    "title": "Top 5 Energy-Saving Tips for Your Home Appliances",
    "category": "Tips & Guides",
    "date": "May 1, 2026",
    "excerpt": "Learn how to reduce your electricity bill while getting the most out of your home appliances.",
    "icon": "💡",
    "bgColor": "linear-gradient(135deg, #1d4ed8, #3b82f6)",
    "readTime": "4 min read"
  },
  {
    "id": "blog-002",
    "title": "How to Choose the Right Air Conditioner for Your Space",
    "category": "Buying Guide",
    "date": "April 20, 2026",
    "excerpt": "BTU ratings, inverter vs. non-inverter, and everything else you need to know before buying an AC.",
    "icon": "❄️",
    "bgColor": "linear-gradient(135deg, #0ea5e9, #38bdf8)",
    "readTime": "5 min read"
  },
  {
    "id": "blog-003",
    "title": "Samsung vs. TCL: Which TV Brand Is Right for You?",
    "category": "Comparisons",
    "date": "April 10, 2026",
    "excerpt": "We compare picture quality, smart features, and value for money across Samsung and TCL TV ranges.",
    "icon": "📺",
    "bgColor": "linear-gradient(135deg, #1428a0, #d40000)",
    "readTime": "6 min read"
  }
];

/* ── SEARCH INDEX ── */
const SEARCH_INDEX = [
  ...PRODUCTS.map(p => ({ type: 'product', id: p.id, text: p.name, sub: p.brand, icon: p.icon })),
  ...CATEGORIES.map(c => ({ type: 'category', id: c.id, text: c.name, sub: c.count + ' products', icon: '📂' })),
  ...BRANDS.map(b => ({ type: 'brand', id: b.id, text: b.name, sub: b.products + ' products', icon: '🏷️' })),
];
