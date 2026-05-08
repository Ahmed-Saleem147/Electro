/* ================================================================
   ORBIVA – DATA LAYER
   Sources: EGL Easter Promo 2026 + EGL Pricelist April 2026
            + Samsung Mobile April 2026
   Prices: Retail (promo where available)
   Generated: 2026-05-08
================================================================ */

/* ── CATEGORIES ── */
const CATEGORIES = [
  {
    "id": "tv",
    "name": "Televisions",
    "icon": "fas fa-tv",
    "count": 36,
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
    "count": 99,
    "color": "#fff",
    "bg": "linear-gradient(135deg,#0891b2,#06b6d4)"
  },
  {
    "id": "laundry",
    "name": "Washing Machines",
    "icon": "fas fa-tshirt",
    "count": 44,
    "color": "#fff",
    "bg": "linear-gradient(135deg,#7c3aed,#a855f7)"
  },
  {
    "id": "kitchen",
    "name": "Kitchen Appliances",
    "icon": "fas fa-blender",
    "count": 67,
    "color": "#fff",
    "bg": "linear-gradient(135deg,#dc2626,#f87171)"
  },
  {
    "id": "small",
    "name": "Small Appliances",
    "icon": "fas fa-fan",
    "count": 78,
    "color": "#fff",
    "bg": "linear-gradient(135deg,#d97706,#fbbf24)"
  },
  {
    "id": "phones",
    "name": "Mobile & Tablets",
    "icon": "fas fa-mobile-alt",
    "count": 6,
    "color": "#fff",
    "bg": "linear-gradient(135deg,#0f172a,#1e293b)"
  },
  {
    "id": "commercial",
    "name": "Commercial Displays",
    "icon": "fas fa-desktop",
    "count": 38,
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
    "products": 107,
    "color": "#1428a0",
    "bg": "linear-gradient(135deg,#1428a0,#0049a0)",
    "logoStyle": "font-size:13px;letter-spacing:-0.5px"
  },
  {
    "id": "tcl",
    "name": "TCL",
    "shortName": "TCL",
    "products": 80,
    "color": "#cc0000",
    "bg": "linear-gradient(135deg,#cc0000,#990000)",
    "logoStyle": "font-size:18px;font-style:italic"
  },
  {
    "id": "midea",
    "name": "Midea",
    "shortName": "Midea",
    "products": 112,
    "color": "#00a0e9",
    "bg": "linear-gradient(135deg,#00a0e9,#007dc5)",
    "logoStyle": "font-size:14px"
  },
  {
    "id": "nasco",
    "name": "NASCO",
    "shortName": "NASCO",
    "products": 116,
    "color": "#003087",
    "bg": "linear-gradient(135deg,#003087,#001a5c)",
    "logoStyle": "font-size:13px;letter-spacing:1px"
  },
  {
    "id": "alcatel",
    "name": "Alcatel",
    "shortName": "ALCATEL",
    "products": 1,
    "color": "#e62b1e",
    "bg": "linear-gradient(135deg,#e62b1e,#c0392b)",
    "logoStyle": "font-size:13px;letter-spacing:0.5px"
  }
];

/* ── FLASH SALE ── */
const FLASH_PRODUCTS = [
  {
    "id": "midea-038",
    "discount": 92
  },
  {
    "id": "midea-073",
    "discount": 53
  },
  {
    "id": "midea-032",
    "discount": 51
  },
  {
    "id": "midea-025",
    "discount": 50
  },
  {
    "id": "midea-090",
    "discount": 50
  },
  {
    "id": "tcl-018",
    "discount": 49
  },
  {
    "id": "tcl-016",
    "discount": 46
  },
  {
    "id": "nasco-022",
    "discount": 44
  }
];

/* ── PRODUCTS ── */
const PRODUCTS = [
  {
    "id": "samsung-001",
    "name": "Samsung Led Fhd Smart 32\"",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "UA32H5000FUXGH",
    "category": "tv",
    "images": [],
    "price": 2999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "📺",
    "color": "#1428a0",
    "tags": [
      "samsung",
      "tv"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "32\""
    },
    "oldPrice": 3399,
    "discount": 12
  },
  {
    "id": "samsung-002",
    "name": "Samsung Led Fhd Smart 32\"",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "UA32T5300",
    "category": "tv",
    "images": [],
    "price": 2999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "📺",
    "color": "#1428a0",
    "tags": [
      "samsung",
      "tv"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "32\""
    },
    "oldPrice": 3399,
    "discount": 12
  },
  {
    "id": "samsung-003",
    "name": "Samsung Led Fhd Smart 43''",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "UA43F6000FUXGH",
    "category": "tv",
    "images": [],
    "price": 4499,
    "rating": 4.5,
    "reviews": 0,
    "icon": "📺",
    "color": "#1428a0",
    "tags": [
      "samsung",
      "tv"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "43\""
    },
    "oldPrice": 5299,
    "discount": 15
  },
  {
    "id": "samsung-004",
    "name": "Samsung Uhd Smart 4K 43''",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "UA43U8000FUXGH",
    "category": "tv",
    "images": [],
    "price": 5499,
    "rating": 4.5,
    "reviews": 0,
    "icon": "📺",
    "color": "#1428a0",
    "tags": [
      "samsung",
      "tv"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "43\""
    },
    "oldPrice": 6599,
    "discount": 17
  },
  {
    "id": "samsung-005",
    "name": "Samsung Uhd Smart 4K 50\"",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "UA50U8000FUXGH",
    "category": "tv",
    "images": [],
    "price": 6999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "📺",
    "color": "#1428a0",
    "tags": [
      "samsung",
      "tv"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "50\""
    },
    "oldPrice": 9199,
    "discount": 24
  },
  {
    "id": "samsung-006",
    "name": "Samsung Uhd Smart 4K 55''",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "UA55U8000FUXGH",
    "category": "tv",
    "images": [],
    "price": 7999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "📺",
    "color": "#1428a0",
    "tags": [
      "samsung",
      "tv"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "55\""
    },
    "oldPrice": 9699,
    "discount": 18
  },
  {
    "id": "samsung-007",
    "name": "Samsung Uhd Smart 4K 65''",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "UA65U8000FUXGH",
    "category": "tv",
    "images": [],
    "price": 10999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "📺",
    "color": "#1428a0",
    "tags": [
      "samsung",
      "tv"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "65\""
    },
    "oldPrice": 13099,
    "discount": 16
  },
  {
    "id": "samsung-008",
    "name": "Samsung Uhd Smart 4K 75''",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "UA75U8000FUXGH",
    "category": "tv",
    "images": [],
    "price": 17999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "📺",
    "color": "#1428a0",
    "tags": [
      "samsung",
      "tv"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "75\""
    },
    "oldPrice": 21799,
    "discount": 17
  },
  {
    "id": "samsung-009",
    "name": "Samsung Uhd Smart 4K 85''",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "UA85U8000FUXGH",
    "category": "tv",
    "images": [],
    "price": 24999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "📺",
    "color": "#1428a0",
    "tags": [
      "samsung",
      "tv"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "85\""
    },
    "oldPrice": 34899,
    "discount": 28
  },
  {
    "id": "samsung-010",
    "name": "Samsung Uhd Smart 4K 98''",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "UA98DU9000UXGH",
    "category": "tv",
    "images": [],
    "price": 54999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "📺",
    "color": "#1428a0",
    "tags": [
      "samsung",
      "tv"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "98\""
    },
    "oldPrice": 86999,
    "discount": 37
  },
  {
    "id": "samsung-011",
    "name": "Samsung Q-Led 4K 55\"",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "QA55Q7FAAUXGH",
    "category": "small",
    "images": [],
    "price": 10999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "⚡",
    "color": "#1428a0",
    "tags": [
      "samsung",
      "small"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "55\""
    },
    "oldPrice": 13999,
    "discount": 21
  },
  {
    "id": "samsung-012",
    "name": "Samsung Q-Led 4K 65\"",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "QA65Q7FAAUXGH",
    "category": "small",
    "images": [],
    "price": 14499,
    "rating": 4.5,
    "reviews": 0,
    "icon": "⚡",
    "color": "#1428a0",
    "tags": [
      "samsung",
      "small"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "65\""
    },
    "oldPrice": 17499,
    "discount": 17
  },
  {
    "id": "samsung-013",
    "name": "Samsung Q-Led 4K 75\"",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "QA75Q7FAAUXGH",
    "category": "small",
    "images": [],
    "price": 22999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "⚡",
    "color": "#1428a0",
    "tags": [
      "samsung",
      "small"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "75\""
    },
    "oldPrice": 30599,
    "discount": 25
  },
  {
    "id": "samsung-014",
    "name": "Samsung Q-Led 4K 85\"",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "QA85Q7FAAUXGH",
    "category": "small",
    "images": [],
    "price": 32999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "⚡",
    "color": "#1428a0",
    "tags": [
      "samsung",
      "small"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "85\""
    },
    "oldPrice": 44999,
    "discount": 27
  },
  {
    "id": "samsung-015",
    "name": "Samsung Regrigerators - Duracool Top Mounted Freezer 203 L",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "RT20HAR2DSA",
    "category": "fridge",
    "images": [],
    "price": 5499,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🧊",
    "color": "#1428a0",
    "tags": [
      "samsung",
      "fridge"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "203 L"
    },
    "oldPrice": 6899,
    "discount": 20
  },
  {
    "id": "samsung-016",
    "name": "Samsung Regrigerators - Duracool Top Mounted Freezer 203 L",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "RT26HAR2DSA",
    "category": "fridge",
    "images": [],
    "price": 5499,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🧊",
    "color": "#1428a0",
    "tags": [
      "samsung",
      "fridge"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "203 L"
    },
    "oldPrice": 6899,
    "discount": 20
  },
  {
    "id": "samsung-017",
    "name": "Samsung Regrigerators - Duracool Top Mounted Freezer 234 L",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "RT22HAR4DSA/GH",
    "category": "fridge",
    "images": [],
    "price": 5999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🧊",
    "color": "#1428a0",
    "tags": [
      "samsung",
      "fridge"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "234 L"
    },
    "oldPrice": 7299,
    "discount": 18
  },
  {
    "id": "samsung-018",
    "name": "Samsung Regrigerators - Duracool Top Mounted Freezer 234 L",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "RT28HAR4DSA",
    "category": "fridge",
    "images": [],
    "price": 5999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🧊",
    "color": "#1428a0",
    "tags": [
      "samsung",
      "fridge"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "234 L"
    },
    "oldPrice": 7299,
    "discount": 18
  },
  {
    "id": "samsung-019",
    "name": "Samsung Regrigerators - Duracool Top Mounted Freezer 255 L",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "RT25HAR4DSA/GH",
    "category": "fridge",
    "images": [],
    "price": 6999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🧊",
    "color": "#1428a0",
    "tags": [
      "samsung",
      "fridge"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "255 L"
    },
    "oldPrice": 8299,
    "discount": 16
  },
  {
    "id": "samsung-020",
    "name": "Samsung Regrigerators - Duracool Top Mounted Freezer 255 L",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "RT31HAR4DSA",
    "category": "fridge",
    "images": [],
    "price": 6999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🧊",
    "color": "#1428a0",
    "tags": [
      "samsung",
      "fridge"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "255 L"
    },
    "oldPrice": 8299,
    "discount": 16
  },
  {
    "id": "samsung-021",
    "name": "Samsung Regrigerators - Duracool Twin Cooling Plus - New 301 L",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "RT31CG5421S9GH",
    "category": "small",
    "images": [],
    "price": 7999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "⚡",
    "color": "#1428a0",
    "tags": [
      "samsung",
      "small"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "301 L"
    },
    "oldPrice": 9699,
    "discount": 18
  },
  {
    "id": "samsung-022",
    "name": "Samsung Regrigerators - Duracool Twin Cooling Plus - New 345 L",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "RT35CG5421S9GH",
    "category": "small",
    "images": [],
    "price": 9449,
    "rating": 4.5,
    "reviews": 0,
    "icon": "⚡",
    "color": "#1428a0",
    "tags": [
      "samsung",
      "small"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "345 L"
    },
    "oldPrice": 10899,
    "discount": 13
  },
  {
    "id": "samsung-023",
    "name": "Samsung Regrigerators - Duracool Twin Cooling Plus - New 411 L",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "RT42CG6621S9GH",
    "category": "small",
    "images": [],
    "price": 10999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "⚡",
    "color": "#1428a0",
    "tags": [
      "samsung",
      "small"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "411 L"
    },
    "oldPrice": 13499,
    "discount": 19
  },
  {
    "id": "samsung-024",
    "name": "Samsung Regrigerators - Duracool Twin Cooling Plus - New 460 L",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "RT47CG6631B1UT",
    "category": "small",
    "images": [],
    "price": 12999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "⚡",
    "color": "#1428a0",
    "tags": [
      "samsung",
      "small"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "460 L"
    },
    "oldPrice": 14999,
    "discount": 13
  },
  {
    "id": "samsung-025",
    "name": "Samsung Regrigerators - Duracool Twin Cooling Plus - New 525 L",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "RT53DG7B60B1UT",
    "category": "small",
    "images": [],
    "price": 15999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "⚡",
    "color": "#1428a0",
    "tags": [
      "samsung",
      "small"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "525 L"
    },
    "oldPrice": 17499,
    "discount": 9
  },
  {
    "id": "samsung-026",
    "name": "Samsung Refrigerators - Side By Side 583",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "RS57DG4000B4GH",
    "category": "fridge",
    "images": [],
    "price": 15999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🧊",
    "color": "#1428a0",
    "tags": [
      "samsung",
      "fridge"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "583"
    },
    "oldPrice": 16599,
    "discount": 4
  },
  {
    "id": "samsung-027",
    "name": "Samsung Refrigerators - Side By Side 578",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "RS57DG4100B4GH",
    "category": "fridge",
    "images": [],
    "price": 17499,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🧊",
    "color": "#1428a0",
    "tags": [
      "samsung",
      "fridge"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "578"
    },
    "oldPrice": 18299,
    "discount": 4
  },
  {
    "id": "samsung-028",
    "name": "Samsung Refrigerators- 4 Doors Bespoke 650 L",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "RF65DB970E22",
    "category": "fridge",
    "images": [],
    "price": 49999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🧊",
    "color": "#1428a0",
    "tags": [
      "samsung",
      "fridge"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "650 L"
    },
    "oldPrice": 52199,
    "discount": 4
  },
  {
    "id": "samsung-029",
    "name": "Samsung Refrigerators- 4 Doors Bespoke 650 L",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "RF65DB960E22EF",
    "category": "fridge",
    "images": [],
    "price": 45999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🧊",
    "color": "#1428a0",
    "tags": [
      "samsung",
      "fridge"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "650 L"
    },
    "oldPrice": 52199,
    "discount": 12
  },
  {
    "id": "samsung-030",
    "name": "Samsung Refrigerators- 4 Doors Family Hub 632 L",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "RF65DG9H0EB1EU",
    "category": "fridge",
    "images": [],
    "price": 54999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🧊",
    "color": "#1428a0",
    "tags": [
      "samsung",
      "fridge"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "632 L"
    },
    "oldPrice": 59999,
    "discount": 8
  },
  {
    "id": "samsung-031",
    "name": "Samsung Glass Panel WHITE",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "RA-F18DBB12GG",
    "category": "fridge",
    "images": [],
    "price": 599,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🧊",
    "color": "#1428a0",
    "tags": [
      "samsung",
      "fridge"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "WHITE"
    },
    "oldPrice": 899,
    "discount": 33
  },
  {
    "id": "samsung-032",
    "name": "Samsung Glass Panel SATIN BEIGE",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "RA-F18DBB39GG",
    "category": "fridge",
    "images": [],
    "price": 599,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🧊",
    "color": "#1428a0",
    "tags": [
      "samsung",
      "fridge"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "SATIN BEIGE"
    },
    "oldPrice": 899,
    "discount": 33
  },
  {
    "id": "samsung-033",
    "name": "Samsung Glass Panel WHITE",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "RA-F18DUU12GG",
    "category": "fridge",
    "images": [],
    "price": 599,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🧊",
    "color": "#1428a0",
    "tags": [
      "samsung",
      "fridge"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "WHITE"
    },
    "oldPrice": 899,
    "discount": 33
  },
  {
    "id": "samsung-034",
    "name": "Samsung Glass Panel SATIN BEIGE",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "RA-F18DUU39GG",
    "category": "fridge",
    "images": [],
    "price": 599,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🧊",
    "color": "#1428a0",
    "tags": [
      "samsung",
      "fridge"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "SATIN BEIGE"
    },
    "oldPrice": 899,
    "discount": 33
  },
  {
    "id": "samsung-035",
    "name": "Samsung Chest Freezer 198L- GRAY",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "RI70F20V1GAGH",
    "category": "fridge",
    "images": [],
    "price": 4999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🧊",
    "color": "#1428a0",
    "tags": [
      "samsung",
      "fridge"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "198L- GRAY"
    },
    "oldPrice": 6499,
    "discount": 23
  },
  {
    "id": "samsung-036",
    "name": "Samsung Chest Freezer 287L- GRAY",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "RI70F29V1GAGH",
    "category": "fridge",
    "images": [],
    "price": 5999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🧊",
    "color": "#1428a0",
    "tags": [
      "samsung",
      "fridge"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "287L- GRAY"
    },
    "oldPrice": 7999,
    "discount": 25
  },
  {
    "id": "samsung-037",
    "name": "Samsung Chest Freezer 371L- GRAY",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "RI70F37V1GAGH",
    "category": "fridge",
    "images": [],
    "price": 6999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🧊",
    "color": "#1428a0",
    "tags": [
      "samsung",
      "fridge"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "371L- GRAY"
    },
    "oldPrice": 8999,
    "discount": 22
  },
  {
    "id": "samsung-038",
    "name": "Samsung Split Acs - R410 1.0 HP",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "AR09CRHGAWK/AF",
    "category": "ac",
    "images": [],
    "price": 4499,
    "rating": 4.5,
    "reviews": 0,
    "icon": "❄️",
    "color": "#1428a0",
    "tags": [
      "samsung",
      "ac"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "1.0 HP"
    },
    "oldPrice": 5299,
    "discount": 15
  },
  {
    "id": "samsung-039",
    "name": "Samsung Split Acs - R410 1.5 HP",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "AR12CRHGAWK/AF",
    "category": "ac",
    "images": [],
    "price": 5499,
    "rating": 4.5,
    "reviews": 0,
    "icon": "❄️",
    "color": "#1428a0",
    "tags": [
      "samsung",
      "ac"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "1.5 HP"
    },
    "oldPrice": 6599,
    "discount": 17
  },
  {
    "id": "samsung-040",
    "name": "Samsung Split Acs - R410 2.0 HP",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "AR18CRHGAWK/AF",
    "category": "ac",
    "images": [],
    "price": 7999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "❄️",
    "color": "#1428a0",
    "tags": [
      "samsung",
      "ac"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "2.0 HP"
    },
    "oldPrice": 8799,
    "discount": 9
  },
  {
    "id": "samsung-041",
    "name": "Samsung Split Acs - R410 2.5 HP",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "AR24CRHGAWK/AF",
    "category": "ac",
    "images": [],
    "price": 10499,
    "rating": 4.5,
    "reviews": 0,
    "icon": "❄️",
    "color": "#1428a0",
    "tags": [
      "samsung",
      "ac"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "2.5 HP"
    },
    "oldPrice": 12299,
    "discount": 15
  },
  {
    "id": "samsung-042",
    "name": "Samsung Split Acs - Inverter R32 1.5 HP",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "AR40F12D0AG/AF",
    "category": "ac",
    "images": [],
    "price": 6999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "❄️",
    "color": "#1428a0",
    "tags": [
      "samsung",
      "ac"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "1.5 HP"
    },
    "oldPrice": 8999,
    "discount": 22
  },
  {
    "id": "samsung-043",
    "name": "Samsung Split Acs - Inverter R32 2.0 HP",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "AR40F18D0AG/AF",
    "category": "ac",
    "images": [],
    "price": 9499,
    "rating": 4.5,
    "reviews": 0,
    "icon": "❄️",
    "color": "#1428a0",
    "tags": [
      "samsung",
      "ac"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "2.0 HP"
    },
    "oldPrice": 14999,
    "discount": 37
  },
  {
    "id": "samsung-044",
    "name": "Samsung Split Acs - Inverter R32 2.5 HP",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "AR40F24D0AG/AF",
    "category": "ac",
    "images": [],
    "price": 11499,
    "rating": 4.5,
    "reviews": 0,
    "icon": "❄️",
    "color": "#1428a0",
    "tags": [
      "samsung",
      "ac"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "2.5 HP"
    },
    "oldPrice": 17499,
    "discount": 34
  },
  {
    "id": "samsung-045",
    "name": "Samsung Floor Standing Acs 36,000 BTU",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "AC036TNPPEH/AC036TXQREH",
    "category": "ac",
    "images": [],
    "price": 29999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "❄️",
    "color": "#1428a0",
    "tags": [
      "samsung",
      "ac"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "36,000 BTU"
    },
    "oldPrice": 32299,
    "discount": 7
  },
  {
    "id": "samsung-046",
    "name": "Samsung Floor Standing Acs 48,000 BTU",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "AC048TNPPEH/AC048TXQREH",
    "category": "ac",
    "images": [],
    "price": 39999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "❄️",
    "color": "#1428a0",
    "tags": [
      "samsung",
      "ac"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "48,000 BTU"
    },
    "oldPrice": 42999,
    "discount": 7
  },
  {
    "id": "samsung-047",
    "name": "Samsung Washing Machines - Twin Top Semi Auto Washer 6 KG",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "WT60H2500",
    "category": "laundry",
    "images": [],
    "price": 2999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🫧",
    "color": "#1428a0",
    "tags": [
      "samsung",
      "laundry"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "6 KG"
    },
    "oldPrice": 3499,
    "discount": 14
  },
  {
    "id": "samsung-048",
    "name": "Samsung Washing Machines - Top Load Active Wash 19 KG",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "WA80F19S8BNQ",
    "category": "laundry",
    "images": [],
    "price": 10499,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🫧",
    "color": "#1428a0",
    "tags": [
      "samsung",
      "laundry"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "19 KG"
    },
    "oldPrice": 13399,
    "discount": 22
  },
  {
    "id": "samsung-049",
    "name": "Samsung Washing Machines - Top Load Active Wash 17 KG",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "WA80F17S8CNQ",
    "category": "laundry",
    "images": [],
    "price": 9499,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🫧",
    "color": "#1428a0",
    "tags": [
      "samsung",
      "laundry"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "17 KG"
    },
    "oldPrice": 10799,
    "discount": 12
  },
  {
    "id": "samsung-050",
    "name": "Samsung Washing Machines - Top Load Active Wash 16 KG",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "WA16CG6745BDNQ",
    "category": "laundry",
    "images": [],
    "price": 9699,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🫧",
    "color": "#1428a0",
    "tags": [
      "samsung",
      "laundry"
    ],
    "badge": "",
    "description": "",
    "specs": {
      "Size": "16 KG"
    }
  },
  {
    "id": "samsung-051",
    "name": "Samsung Washing Machines - Top Load Active Wash 13 KG",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "WA13CG5441BYNQ",
    "category": "laundry",
    "images": [],
    "price": 8799,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🫧",
    "color": "#1428a0",
    "tags": [
      "samsung",
      "laundry"
    ],
    "badge": "",
    "description": "",
    "specs": {
      "Size": "13 KG"
    }
  },
  {
    "id": "samsung-052",
    "name": "Samsung Washing Machines - Top Load Active Wash 13 KG",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "WA80F13S5CNQ",
    "category": "laundry",
    "images": [],
    "price": 7499,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🫧",
    "color": "#1428a0",
    "tags": [
      "samsung",
      "laundry"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "13 KG"
    },
    "oldPrice": 8799,
    "discount": 15
  },
  {
    "id": "samsung-053",
    "name": "Samsung Washing Machines - Top Load Active Wash 8 KG",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "WA80CG4240BWNQ",
    "category": "laundry",
    "images": [],
    "price": 4799,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🫧",
    "color": "#1428a0",
    "tags": [
      "samsung",
      "laundry"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "8 KG"
    },
    "oldPrice": 5699,
    "discount": 16
  },
  {
    "id": "samsung-054",
    "name": "Samsung Washing Machines - Front Load Full Auto Washer 11 KG",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "WW11CGC04DABSG",
    "category": "laundry",
    "images": [],
    "price": 9499,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🫧",
    "color": "#1428a0",
    "tags": [
      "samsung",
      "laundry"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "11 KG"
    },
    "oldPrice": 13999,
    "discount": 32
  },
  {
    "id": "samsung-055",
    "name": "Samsung Washing Machines - Front Load Full Auto Washer 10.1 KG",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "WW10DG6U94LBNQ",
    "category": "laundry",
    "images": [],
    "price": 8999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🫧",
    "color": "#1428a0",
    "tags": [
      "samsung",
      "laundry"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "10.1 KG"
    },
    "oldPrice": 12999,
    "discount": 31
  },
  {
    "id": "samsung-056",
    "name": "Samsung Washing Machines - Front Load Full Auto Washer",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "WW80FG3M05AWNQ",
    "category": "laundry",
    "images": [],
    "price": 5999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🫧",
    "color": "#1428a0",
    "tags": [
      "samsung",
      "laundry"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {},
    "oldPrice": 6499,
    "discount": 8
  },
  {
    "id": "samsung-057",
    "name": "Samsung Washing Machines - Front Load Full Auto Washer",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "WW80T3040BS/NQ",
    "category": "laundry",
    "images": [],
    "price": 6999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🫧",
    "color": "#1428a0",
    "tags": [
      "samsung",
      "laundry"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {},
    "oldPrice": 9199,
    "discount": 24
  },
  {
    "id": "samsung-058",
    "name": "Samsung Washing Machines - Front Load Full Auto Washer 7 KG",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "WW70T3010BS/NQ",
    "category": "laundry",
    "images": [],
    "price": 5999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🫧",
    "color": "#1428a0",
    "tags": [
      "samsung",
      "laundry"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "7 KG"
    },
    "oldPrice": 7499,
    "discount": 20
  },
  {
    "id": "samsung-059",
    "name": "Samsung Washing Machines - Front Load Full Auto Washer",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "WW70FG3M05AWNQ",
    "category": "laundry",
    "images": [],
    "price": 4999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🫧",
    "color": "#1428a0",
    "tags": [
      "samsung",
      "laundry"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {},
    "oldPrice": 5999,
    "discount": 17
  },
  {
    "id": "samsung-060",
    "name": "Samsung Washing Machines - Washer & Dryer 22 KG WASH / 11 KG DRY",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "WD90F22BCSNQ",
    "category": "laundry",
    "images": [],
    "price": 24999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🫧",
    "color": "#1428a0",
    "tags": [
      "samsung",
      "laundry"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "22 KG WASH / 11 KG DRY"
    },
    "oldPrice": 26999,
    "discount": 7
  },
  {
    "id": "samsung-061",
    "name": "Samsung Washing Machines - Washer & Dryer 21 KG WASH / 12 KG DRY",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "WD21T6300GV/NQ",
    "category": "laundry",
    "images": [],
    "price": 19999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🫧",
    "color": "#1428a0",
    "tags": [
      "samsung",
      "laundry"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "21 KG WASH / 12 KG DRY"
    },
    "oldPrice": 25299,
    "discount": 21
  },
  {
    "id": "samsung-062",
    "name": "Samsung Washing Machines - Washer & Dryer 17 KGS WASH / 10 KGS DRY",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "WD17T6300GP/SP",
    "category": "laundry",
    "images": [],
    "price": 17999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🫧",
    "color": "#1428a0",
    "tags": [
      "samsung",
      "laundry"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "17 KGS WASH / 10 KGS DRY"
    },
    "oldPrice": 21799,
    "discount": 17
  },
  {
    "id": "samsung-063",
    "name": "Samsung Washing Machines - Washer & Dryer 12KG WASH/ 8KG DRY",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "WD12T504DBN/NQ",
    "category": "laundry",
    "images": [],
    "price": 20899,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🫧",
    "color": "#1428a0",
    "tags": [
      "samsung",
      "laundry"
    ],
    "badge": "",
    "description": "",
    "specs": {
      "Size": "12KG WASH/ 8KG DRY"
    }
  },
  {
    "id": "samsung-064",
    "name": "Samsung Washing Machines - Washer & Dryer 11KG WASH/ 7KG DRY",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "WD11DB7B85GBNQ",
    "category": "laundry",
    "images": [],
    "price": 13999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🫧",
    "color": "#1428a0",
    "tags": [
      "samsung",
      "laundry"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "11KG WASH/ 7KG DRY"
    },
    "oldPrice": 15799,
    "discount": 11
  },
  {
    "id": "samsung-065",
    "name": "Samsung Bespoke - Washing Machines 12 KG",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "WW12BB944DGMNQ",
    "category": "laundry",
    "images": [],
    "price": 13999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🫧",
    "color": "#1428a0",
    "tags": [
      "samsung",
      "laundry"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "12 KG"
    },
    "oldPrice": 17499,
    "discount": 20
  },
  {
    "id": "samsung-066",
    "name": "Samsung Bespoke - Washing Machines 12KG WASH/ 7KG DRY",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "WD12BB944DGBNQ",
    "category": "laundry",
    "images": [],
    "price": 15999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🫧",
    "color": "#1428a0",
    "tags": [
      "samsung",
      "laundry"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "12KG WASH/ 7KG DRY"
    },
    "oldPrice": 20099,
    "discount": 20
  },
  {
    "id": "samsung-067",
    "name": "Samsung Bespoke - Washing Machines 25KG WASH / 15KGS DRY",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "WD25DB8995BZNQ",
    "category": "laundry",
    "images": [],
    "price": 39999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🫧",
    "color": "#1428a0",
    "tags": [
      "samsung",
      "laundry"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "25KG WASH / 15KGS DRY"
    },
    "oldPrice": 49699,
    "discount": 20
  },
  {
    "id": "samsung-068",
    "name": "Samsung Microwaves - Grill MG30T5018AK/EF",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "MG30T5018AK/EF",
    "category": "kitchen",
    "images": [],
    "price": 2999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🍳",
    "color": "#1428a0",
    "tags": [
      "samsung",
      "kitchen"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "MG30T5018AK/EF"
    },
    "oldPrice": 3299,
    "discount": 9
  },
  {
    "id": "samsung-069",
    "name": "Samsung Microwaves - Grill",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "MG32DG4524AGSG",
    "category": "kitchen",
    "images": [],
    "price": 3299,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🍳",
    "color": "#1428a0",
    "tags": [
      "samsung",
      "kitchen"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {},
    "oldPrice": 3499,
    "discount": 6
  },
  {
    "id": "tcl-001",
    "name": "TCL Qled 2K 32\"",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "32S5K",
    "category": "tv",
    "images": [],
    "price": 2299,
    "rating": 4.5,
    "reviews": 0,
    "icon": "📺",
    "color": "#cc0000",
    "tags": [
      "tcl",
      "tv"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "32\""
    },
    "oldPrice": 2799,
    "discount": 18
  },
  {
    "id": "tcl-002",
    "name": "TCL Qled 2K 43\"",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "43S5K",
    "category": "tv",
    "images": [],
    "price": 2999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "📺",
    "color": "#cc0000",
    "tags": [
      "tcl",
      "tv"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "43\""
    },
    "oldPrice": 4199,
    "discount": 29
  },
  {
    "id": "tcl-003",
    "name": "TCL Qled 2K 50''",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "50S5K",
    "category": "tv",
    "images": [],
    "price": 3999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "📺",
    "color": "#cc0000",
    "tags": [
      "tcl",
      "tv"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "50\""
    },
    "oldPrice": 4499,
    "discount": 11
  },
  {
    "id": "tcl-004",
    "name": "TCL Uhd Smart Tvs 55\"",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "55P6K",
    "category": "tv",
    "images": [],
    "price": 5499,
    "rating": 4.5,
    "reviews": 0,
    "icon": "📺",
    "color": "#cc0000",
    "tags": [
      "tcl",
      "tv"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "55\""
    },
    "oldPrice": 7099,
    "discount": 23
  },
  {
    "id": "tcl-005",
    "name": "TCL Uhd Smart Tvs 55''",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "55P755",
    "category": "tv",
    "images": [],
    "price": 5999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "📺",
    "color": "#cc0000",
    "tags": [
      "tcl",
      "tv"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "55\""
    },
    "oldPrice": 8299,
    "discount": 28
  },
  {
    "id": "tcl-006",
    "name": "TCL Uhd Smart Tvs 65''",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "65P755",
    "category": "tv",
    "images": [],
    "price": 7999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "📺",
    "color": "#cc0000",
    "tags": [
      "tcl",
      "tv"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "65\""
    },
    "oldPrice": 10499,
    "discount": 24
  },
  {
    "id": "tcl-007",
    "name": "TCL Uhd Smart Tvs 75''",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "75P6K",
    "category": "tv",
    "images": [],
    "price": 9999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "📺",
    "color": "#cc0000",
    "tags": [
      "tcl",
      "tv"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "75\""
    },
    "oldPrice": 16599,
    "discount": 40
  },
  {
    "id": "tcl-008",
    "name": "TCL Uhd Smart Tvs 75''",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "75P755",
    "category": "tv",
    "images": [],
    "price": 10999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "📺",
    "color": "#cc0000",
    "tags": [
      "tcl",
      "tv"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "75\""
    },
    "oldPrice": 16599,
    "discount": 34
  },
  {
    "id": "tcl-009",
    "name": "TCL Qled Pro 4K Smart Android 50\"",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "50P7K",
    "category": "tv",
    "images": [],
    "price": 5299,
    "rating": 4.5,
    "reviews": 0,
    "icon": "📺",
    "color": "#cc0000",
    "tags": [
      "tcl",
      "tv"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "50\""
    },
    "oldPrice": 8799,
    "discount": 40
  },
  {
    "id": "tcl-010",
    "name": "TCL Qled Pro 4K Smart Android 55''",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "55P7K",
    "category": "tv",
    "images": [],
    "price": 6799,
    "rating": 4.5,
    "reviews": 0,
    "icon": "📺",
    "color": "#cc0000",
    "tags": [
      "tcl",
      "tv"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "55\""
    },
    "oldPrice": 9699,
    "discount": 30
  },
  {
    "id": "tcl-011",
    "name": "TCL Qled Pro 4K Smart Android 65''",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "65P7K",
    "category": "tv",
    "images": [],
    "price": 8999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "📺",
    "color": "#cc0000",
    "tags": [
      "tcl",
      "tv"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "65\""
    },
    "oldPrice": 12299,
    "discount": 27
  },
  {
    "id": "tcl-012",
    "name": "TCL Qled Pro 4K Smart Android",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "75P7K",
    "category": "tv",
    "images": [],
    "price": 12999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "📺",
    "color": "#cc0000",
    "tags": [
      "tcl",
      "tv"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {},
    "oldPrice": 19199,
    "discount": 32
  },
  {
    "id": "tcl-013",
    "name": "TCL Qled Pro 4K Smart Android 85\"",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "85P8K",
    "category": "tv",
    "images": [],
    "price": 21999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "📺",
    "color": "#cc0000",
    "tags": [
      "tcl",
      "tv"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "85\""
    },
    "oldPrice": 28799,
    "discount": 24
  },
  {
    "id": "tcl-014",
    "name": "TCL Qled Pro 4K Smart Android",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "98P8k",
    "category": "tv",
    "images": [],
    "price": 34999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "📺",
    "color": "#cc0000",
    "tags": [
      "tcl",
      "tv"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {},
    "oldPrice": 49999,
    "discount": 30
  },
  {
    "id": "tcl-015",
    "name": "TCL Qd-Mini Led 4K Tv 65\"",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "65C6K",
    "category": "tv",
    "images": [],
    "price": 10999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "📺",
    "color": "#cc0000",
    "tags": [
      "tcl",
      "tv"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "65\""
    },
    "oldPrice": 15799,
    "discount": 30
  },
  {
    "id": "tcl-016",
    "name": "TCL Qd-Mini Led 4K Tv 75\"",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "75C6K",
    "category": "tv",
    "images": [],
    "price": 14999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "📺",
    "color": "#cc0000",
    "tags": [
      "tcl",
      "tv"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "75\""
    },
    "oldPrice": 27899,
    "discount": 46
  },
  {
    "id": "tcl-017",
    "name": "TCL Qd-Mini Led 4K Tv 85\"",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "85C6K",
    "category": "tv",
    "images": [],
    "price": 24999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "📺",
    "color": "#cc0000",
    "tags": [
      "tcl",
      "tv"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "85\""
    },
    "oldPrice": 37499,
    "discount": 33
  },
  {
    "id": "tcl-018",
    "name": "TCL Qd-Mini Led 4K Tv 98\"",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "98C6K",
    "category": "tv",
    "images": [],
    "price": 39999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "📺",
    "color": "#cc0000",
    "tags": [
      "tcl",
      "tv"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "98\""
    },
    "oldPrice": 78299,
    "discount": 49
  },
  {
    "id": "tcl-019",
    "name": "TCL Qd-Mini Led 4K Tv 115''",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "115X955",
    "category": "tv",
    "images": [],
    "price": 299999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "📺",
    "color": "#cc0000",
    "tags": [
      "tcl",
      "tv"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "115\""
    },
    "oldPrice": 434699,
    "discount": 31
  },
  {
    "id": "tcl-020",
    "name": "TCL Qd-Mini Led 4K Tv 115''",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "115C7K",
    "category": "tv",
    "images": [],
    "price": 199999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "📺",
    "color": "#cc0000",
    "tags": [
      "tcl",
      "tv"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "115\""
    },
    "oldPrice": 299999,
    "discount": 33
  },
  {
    "id": "tcl-021",
    "name": "TCL Curved -Gaming Monitors 27''",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "27R73Q",
    "category": "small",
    "images": [],
    "price": 7999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "⚡",
    "color": "#cc0000",
    "tags": [
      "tcl",
      "small"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "27\""
    },
    "oldPrice": 11699,
    "discount": 32
  },
  {
    "id": "tcl-022",
    "name": "TCL Curved -Gaming Monitors 34''",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "34R83Q",
    "category": "small",
    "images": [],
    "price": 11999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "⚡",
    "color": "#cc0000",
    "tags": [
      "tcl",
      "small"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "34\""
    },
    "oldPrice": 16599,
    "discount": 28
  },
  {
    "id": "tcl-023",
    "name": "TCL Sound Bar 100W",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "S45H",
    "category": "small",
    "images": [],
    "price": 1399,
    "rating": 4.5,
    "reviews": 0,
    "icon": "⚡",
    "color": "#cc0000",
    "tags": [
      "tcl",
      "small"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "100W"
    },
    "oldPrice": 1799,
    "discount": 22
  },
  {
    "id": "tcl-024",
    "name": "TCL Sound Bar 220W",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "S55H",
    "category": "small",
    "images": [],
    "price": 2199,
    "rating": 4.5,
    "reviews": 0,
    "icon": "⚡",
    "color": "#cc0000",
    "tags": [
      "tcl",
      "small"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "220W"
    },
    "oldPrice": 2699,
    "discount": 19
  },
  {
    "id": "tcl-025",
    "name": "TCL Sound Bar 580 W",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "Q65H",
    "category": "small",
    "images": [],
    "price": 4299,
    "rating": 4.5,
    "reviews": 0,
    "icon": "⚡",
    "color": "#cc0000",
    "tags": [
      "tcl",
      "small"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "580 W"
    },
    "oldPrice": 5399,
    "discount": 20
  },
  {
    "id": "tcl-026",
    "name": "TCL Sound Bar 620 W",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "Q75H",
    "category": "small",
    "images": [],
    "price": 6999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "⚡",
    "color": "#cc0000",
    "tags": [
      "tcl",
      "small"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "620 W"
    },
    "oldPrice": 8999,
    "discount": 22
  },
  {
    "id": "tcl-027",
    "name": "TCL Sound Bar 860 W",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "Q85H",
    "category": "small",
    "images": [],
    "price": 8999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "⚡",
    "color": "#cc0000",
    "tags": [
      "tcl",
      "small"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "860 W"
    },
    "oldPrice": 10799,
    "discount": 17
  },
  {
    "id": "tcl-028",
    "name": "TCL Sound Tower 220 W",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "TP200K",
    "category": "small",
    "images": [],
    "price": 3499,
    "rating": 4.5,
    "reviews": 0,
    "icon": "⚡",
    "color": "#cc0000",
    "tags": [
      "tcl",
      "small"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "220 W"
    },
    "oldPrice": 4499,
    "discount": 22
  },
  {
    "id": "tcl-029",
    "name": "TCL Sound Tower 340W",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "TP300K",
    "category": "small",
    "images": [],
    "price": 5499,
    "rating": 4.5,
    "reviews": 0,
    "icon": "⚡",
    "color": "#cc0000",
    "tags": [
      "tcl",
      "small"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "340W"
    },
    "oldPrice": 6299,
    "discount": 13
  },
  {
    "id": "tcl-030",
    "name": "TCL Compressor Cooling 2 TAP",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "TY-LYR47W",
    "category": "small",
    "images": [],
    "price": 1399,
    "rating": 4.5,
    "reviews": 0,
    "icon": "⚡",
    "color": "#cc0000",
    "tags": [
      "tcl",
      "small"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "2 TAP"
    },
    "oldPrice": 1899,
    "discount": 26
  },
  {
    "id": "tcl-031",
    "name": "TCL Compressor Cooling 3 TAPS",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "TY-LWYR109W",
    "category": "small",
    "images": [],
    "price": 1599,
    "rating": 4.5,
    "reviews": 0,
    "icon": "⚡",
    "color": "#cc0000",
    "tags": [
      "tcl",
      "small"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "3 TAPS"
    },
    "oldPrice": 2099,
    "discount": 24
  },
  {
    "id": "tcl-032",
    "name": "TCL Compressor Cooling 3 TAPS",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "TY-LWYR107T",
    "category": "small",
    "images": [],
    "price": 2199,
    "rating": 4.5,
    "reviews": 0,
    "icon": "⚡",
    "color": "#cc0000",
    "tags": [
      "tcl",
      "small"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "3 TAPS"
    },
    "oldPrice": 2699,
    "discount": 19
  },
  {
    "id": "tcl-033",
    "name": "TCL Split On/Off R32 Gas- Silver 1.5 HP",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "TAC-12CSD/ZG11",
    "category": "small",
    "images": [],
    "price": 3499,
    "rating": 4.5,
    "reviews": 0,
    "icon": "⚡",
    "color": "#cc0000",
    "tags": [
      "tcl",
      "small"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "1.5 HP"
    },
    "oldPrice": 3999,
    "discount": 13
  },
  {
    "id": "tcl-034",
    "name": "TCL Split On/Off R32 Gas- Silver 2.0 HP",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "TAC-18CSD/ZG11",
    "category": "small",
    "images": [],
    "price": 5499,
    "rating": 4.5,
    "reviews": 0,
    "icon": "⚡",
    "color": "#cc0000",
    "tags": [
      "tcl",
      "small"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "2.0 HP"
    },
    "oldPrice": 5999,
    "discount": 8
  },
  {
    "id": "tcl-035",
    "name": "TCL Split Inverter R32 Gas 1.5 HP",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "TAC-12CSD/XA73I",
    "category": "small",
    "images": [],
    "price": 3799,
    "rating": 4.5,
    "reviews": 0,
    "icon": "⚡",
    "color": "#cc0000",
    "tags": [
      "tcl",
      "small"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "1.5 HP"
    },
    "oldPrice": 5499,
    "discount": 31
  },
  {
    "id": "tcl-036",
    "name": "TCL Split Inverter R410 Gas- Black Mirror 1.5 HP",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "TAC-12CSA/XA82I",
    "category": "small",
    "images": [],
    "price": 4999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "⚡",
    "color": "#cc0000",
    "tags": [
      "tcl",
      "small"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "1.5 HP"
    },
    "oldPrice": 7099,
    "discount": 30
  },
  {
    "id": "tcl-037",
    "name": "TCL Split Inverter R410 Gas- Black Mirror 2.0 HP",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "TAC-18CSA/XA82I",
    "category": "small",
    "images": [],
    "price": 6999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "⚡",
    "color": "#cc0000",
    "tags": [
      "tcl",
      "small"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "2.0 HP"
    },
    "oldPrice": 9699,
    "discount": 28
  },
  {
    "id": "tcl-038",
    "name": "TCL Split Inverter R410 Gas- Black Mirror 2.5 HP",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "TAC-24CSA/XA82I",
    "category": "small",
    "images": [],
    "price": 8999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "⚡",
    "color": "#cc0000",
    "tags": [
      "tcl",
      "small"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "2.5 HP"
    },
    "oldPrice": 11799,
    "discount": 24
  },
  {
    "id": "tcl-039",
    "name": "TCL Split Freshin Inverter R32 Gas- Silver 1.5 HP",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "TAC-12CSD/FCI",
    "category": "small",
    "images": [],
    "price": 6799,
    "rating": 4.5,
    "reviews": 0,
    "icon": "⚡",
    "color": "#cc0000",
    "tags": [
      "tcl",
      "small"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "1.5 HP"
    },
    "oldPrice": 7299,
    "discount": 7
  },
  {
    "id": "tcl-040",
    "name": "TCL Split Freshin Inverter R32 Gas- Silver 2.0 HP",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "TAC-18CSD/FCI",
    "category": "small",
    "images": [],
    "price": 7799,
    "rating": 4.5,
    "reviews": 0,
    "icon": "⚡",
    "color": "#cc0000",
    "tags": [
      "tcl",
      "small"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "2.0 HP"
    },
    "oldPrice": 8999,
    "discount": 13
  },
  {
    "id": "tcl-041",
    "name": "TCL Split Inverter R410 Gas- Breeze In White 1.5 HP",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "TAC-12CSA/TPH11I",
    "category": "small",
    "images": [],
    "price": 3999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "⚡",
    "color": "#cc0000",
    "tags": [
      "tcl",
      "small"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "1.5 HP"
    },
    "oldPrice": 5499,
    "discount": 27
  },
  {
    "id": "tcl-042",
    "name": "TCL Split Inverter R410 Gas- Breeze In White 2.0 HP",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "TAC-18CSA/TPH11I",
    "category": "small",
    "images": [],
    "price": 5999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "⚡",
    "color": "#cc0000",
    "tags": [
      "tcl",
      "small"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "2.0 HP"
    },
    "oldPrice": 8299,
    "discount": 28
  },
  {
    "id": "tcl-043",
    "name": "TCL Split Inverter R410 Gas- Breeze In White 2.5 HP",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "TAC-24CSA/TPH11I",
    "category": "small",
    "images": [],
    "price": 7499,
    "rating": 4.5,
    "reviews": 0,
    "icon": "⚡",
    "color": "#cc0000",
    "tags": [
      "tcl",
      "small"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "2.5 HP"
    },
    "oldPrice": 11399,
    "discount": 34
  },
  {
    "id": "tcl-044",
    "name": "TCL Round Floor Standing Inverter - R32 Gas 2.0 HP",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "TAC-18CFD/MCI",
    "category": "small",
    "images": [],
    "price": 9999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "⚡",
    "color": "#cc0000",
    "tags": [
      "tcl",
      "small"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "2.0 HP"
    },
    "oldPrice": 12699,
    "discount": 21
  },
  {
    "id": "tcl-045",
    "name": "TCL Floor Standing Inverter R32 Gas 2.5 HP",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "TAC-24CFD/V7I",
    "category": "small",
    "images": [],
    "price": 11999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "⚡",
    "color": "#cc0000",
    "tags": [
      "tcl",
      "small"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "2.5 HP"
    },
    "oldPrice": 12999,
    "discount": 8
  },
  {
    "id": "tcl-046",
    "name": "TCL Cassette - Inverter/R410 Gas 2.5 HP -WHITE",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "TCC-24CHRA/DV(02)",
    "category": "small",
    "images": [],
    "price": 13999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "⚡",
    "color": "#cc0000",
    "tags": [
      "tcl",
      "small"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "2.5 HP -WHITE"
    },
    "oldPrice": 14999,
    "discount": 7
  },
  {
    "id": "tcl-047",
    "name": "TCL Cassette - Inverter/R410 Gas 3.5 HP - WHITE",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "TCC-36CHRA/DV(02)",
    "category": "small",
    "images": [],
    "price": 15999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "⚡",
    "color": "#cc0000",
    "tags": [
      "tcl",
      "small"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "3.5 HP - WHITE"
    },
    "oldPrice": 16999,
    "discount": 6
  },
  {
    "id": "tcl-048",
    "name": "TCL Cassette - Inverter/R410 Gas 5 HP - WHITE",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "TCC-48CHRA/DV7(02)",
    "category": "small",
    "images": [],
    "price": 23999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "⚡",
    "color": "#cc0000",
    "tags": [
      "tcl",
      "small"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "5 HP - WHITE"
    },
    "oldPrice": 24999,
    "discount": 4
  },
  {
    "id": "tcl-049",
    "name": "TCL Cassette - Inverter/R410 Gas 6 HP - WHITE",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "TCC-60CHRA/DV7(02)",
    "category": "small",
    "images": [],
    "price": 27999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "⚡",
    "color": "#cc0000",
    "tags": [
      "tcl",
      "small"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "6 HP - WHITE"
    },
    "oldPrice": 29999,
    "discount": 7
  },
  {
    "id": "tcl-050",
    "name": "TCL Ceiling & Floor / R410 Gas 3.5 HP - WHITE",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "TCC-36ZHRA/DV(02)",
    "category": "small",
    "images": [],
    "price": 14999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "⚡",
    "color": "#cc0000",
    "tags": [
      "tcl",
      "small"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "3.5 HP - WHITE"
    },
    "oldPrice": 15999,
    "discount": 6
  },
  {
    "id": "tcl-051",
    "name": "TCL Single Door 90 L",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "F117SDS",
    "category": "small",
    "images": [],
    "price": 1899,
    "rating": 4.5,
    "reviews": 0,
    "icon": "⚡",
    "color": "#cc0000",
    "tags": [
      "tcl",
      "small"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "90 L"
    },
    "oldPrice": 2199,
    "discount": 14
  },
  {
    "id": "tcl-052",
    "name": "TCL Single Door 117 L",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "F152TMS",
    "category": "small",
    "images": [],
    "price": 2499,
    "rating": 4.5,
    "reviews": 0,
    "icon": "⚡",
    "color": "#cc0000",
    "tags": [
      "tcl",
      "small"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "117 L"
    },
    "oldPrice": 2999,
    "discount": 17
  },
  {
    "id": "tcl-053",
    "name": "TCL Single Door 165 L",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "F216TMS",
    "category": "small",
    "images": [],
    "price": 2999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "⚡",
    "color": "#cc0000",
    "tags": [
      "tcl",
      "small"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "165 L"
    },
    "oldPrice": 3999,
    "discount": 25
  },
  {
    "id": "tcl-054",
    "name": "TCL Single Door 413 L",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "P540TMGWD",
    "category": "small",
    "images": [],
    "price": 7999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "⚡",
    "color": "#cc0000",
    "tags": [
      "tcl",
      "small"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "413 L"
    },
    "oldPrice": 8999,
    "discount": 11
  },
  {
    "id": "tcl-055",
    "name": "TCL Single Door 635 L",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "P826TMN",
    "category": "small",
    "images": [],
    "price": 10999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "⚡",
    "color": "#cc0000",
    "tags": [
      "tcl",
      "small"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "635 L"
    },
    "oldPrice": 11999,
    "discount": 8
  },
  {
    "id": "tcl-056",
    "name": "TCL Bottom Mount 108 L",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "F141BFS",
    "category": "small",
    "images": [],
    "price": 2599,
    "rating": 4.5,
    "reviews": 0,
    "icon": "⚡",
    "color": "#cc0000",
    "tags": [
      "tcl",
      "small"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "108 L"
    },
    "oldPrice": 2799,
    "discount": 7
  },
  {
    "id": "tcl-057",
    "name": "TCL Bottom Mount 142 L",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "F185BFS",
    "category": "small",
    "images": [],
    "price": 2999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "⚡",
    "color": "#cc0000",
    "tags": [
      "tcl",
      "small"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "142 L"
    },
    "oldPrice": 3299,
    "discount": 9
  },
  {
    "id": "tcl-058",
    "name": "TCL Bottom Mount 309 L",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "F410BFS",
    "category": "small",
    "images": [],
    "price": 5199,
    "rating": 4.5,
    "reviews": 0,
    "icon": "⚡",
    "color": "#cc0000",
    "tags": [
      "tcl",
      "small"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "309 L"
    },
    "oldPrice": 7499,
    "discount": 31
  },
  {
    "id": "tcl-059",
    "name": "TCL Side By Side 433 L",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "P575SBGWD",
    "category": "small",
    "images": [],
    "price": 9999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "⚡",
    "color": "#cc0000",
    "tags": [
      "tcl",
      "small"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "433 L"
    },
    "oldPrice": 11499,
    "discount": 13
  },
  {
    "id": "tcl-060",
    "name": "TCL Side By Side 529 L",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "P692SBNWD",
    "category": "small",
    "images": [],
    "price": 9999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "⚡",
    "color": "#cc0000",
    "tags": [
      "tcl",
      "small"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "529  L"
    },
    "oldPrice": 11999,
    "discount": 17
  },
  {
    "id": "tcl-061",
    "name": "TCL Side By Side 529 L",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "P692SBBG",
    "category": "small",
    "images": [],
    "price": 10999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "⚡",
    "color": "#cc0000",
    "tags": [
      "tcl",
      "small"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "529 L"
    },
    "oldPrice": 11999,
    "discount": 8
  },
  {
    "id": "tcl-062",
    "name": "TCL Standing 168 L",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "F208SDS",
    "category": "fridge",
    "images": [],
    "price": 3699,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🧊",
    "color": "#cc0000",
    "tags": [
      "tcl",
      "fridge"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "168 L"
    },
    "oldPrice": 3999,
    "discount": 8
  },
  {
    "id": "tcl-063",
    "name": "TCL Chest 145 L",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "F188CFSL",
    "category": "fridge",
    "images": [],
    "price": 2499,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🧊",
    "color": "#cc0000",
    "tags": [
      "tcl",
      "fridge"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "145 L"
    },
    "oldPrice": 2999,
    "discount": 17
  },
  {
    "id": "tcl-064",
    "name": "TCL Chest 200 L",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "F257CFSL",
    "category": "fridge",
    "images": [],
    "price": 2999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🧊",
    "color": "#cc0000",
    "tags": [
      "tcl",
      "fridge"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "200 L"
    },
    "oldPrice": 3399,
    "discount": 12
  },
  {
    "id": "tcl-065",
    "name": "TCL Chest 380 L",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "F494CFSL",
    "category": "fridge",
    "images": [],
    "price": 5299,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🧊",
    "color": "#cc0000",
    "tags": [
      "tcl",
      "fridge"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "380 L"
    },
    "oldPrice": 5499,
    "discount": 4
  },
  {
    "id": "tcl-066",
    "name": "TCL Chest 508 L",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "F660CFSL",
    "category": "fridge",
    "images": [],
    "price": 6999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🧊",
    "color": "#cc0000",
    "tags": [
      "tcl",
      "fridge"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "508 L"
    },
    "oldPrice": 7999,
    "discount": 13
  },
  {
    "id": "tcl-067",
    "name": "TCL Twin Top 7 KG",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "F207TT",
    "category": "laundry",
    "images": [],
    "price": 1899,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🫧",
    "color": "#cc0000",
    "tags": [
      "tcl",
      "laundry"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "7 KG"
    },
    "oldPrice": 2299,
    "discount": 17
  },
  {
    "id": "tcl-068",
    "name": "TCL Twin Top 10.1 KG",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "F211TT",
    "category": "laundry",
    "images": [],
    "price": 2399,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🫧",
    "color": "#cc0000",
    "tags": [
      "tcl",
      "laundry"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "10.1 KG"
    },
    "oldPrice": 2999,
    "discount": 20
  },
  {
    "id": "tcl-069",
    "name": "TCL Top Load 9 KG",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "F709TL",
    "category": "laundry",
    "images": [],
    "price": 3499,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🫧",
    "color": "#cc0000",
    "tags": [
      "tcl",
      "laundry"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "9 KG"
    },
    "oldPrice": 4899,
    "discount": 29
  },
  {
    "id": "tcl-070",
    "name": "TCL Top Load 10.5 KG",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "F711TL",
    "category": "laundry",
    "images": [],
    "price": 3999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🫧",
    "color": "#cc0000",
    "tags": [
      "tcl",
      "laundry"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "10.5 KG"
    },
    "oldPrice": 5699,
    "discount": 30
  },
  {
    "id": "tcl-071",
    "name": "TCL Front Load 7KGS",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "P607FL",
    "category": "laundry",
    "images": [],
    "price": 3999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🫧",
    "color": "#cc0000",
    "tags": [
      "tcl",
      "laundry"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "7KGS"
    },
    "oldPrice": 4999,
    "discount": 20
  },
  {
    "id": "tcl-072",
    "name": "TCL Front Load- Inverter 8 KG",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "P1108FLG",
    "category": "laundry",
    "images": [],
    "price": 5999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🫧",
    "color": "#cc0000",
    "tags": [
      "tcl",
      "laundry"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "8 KG"
    },
    "oldPrice": 7099,
    "discount": 15
  },
  {
    "id": "tcl-073",
    "name": "TCL Front Load- Inverter 9 KG",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "P1109FLG",
    "category": "laundry",
    "images": [],
    "price": 6499,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🫧",
    "color": "#cc0000",
    "tags": [
      "tcl",
      "laundry"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "9 KG"
    },
    "oldPrice": 7499,
    "discount": 13
  },
  {
    "id": "tcl-074",
    "name": "TCL Front Load- Inverter 10.5 KG",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "P211FLG",
    "category": "laundry",
    "images": [],
    "price": 6999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🫧",
    "color": "#cc0000",
    "tags": [
      "tcl",
      "laundry"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "10.5 KG"
    },
    "oldPrice": 8299,
    "discount": 16
  },
  {
    "id": "tcl-075",
    "name": "TCL Combo 10.5 KG\\ 6 KGS",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "C211WDG",
    "category": "laundry",
    "images": [],
    "price": 7999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🫧",
    "color": "#cc0000",
    "tags": [
      "tcl",
      "laundry"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "10.5 KG\\ 6 KGS"
    },
    "oldPrice": 9699,
    "discount": 18
  },
  {
    "id": "midea-001",
    "name": "Midea Split Acs Inverter R410-Unicool 1.5 HP",
    "brand": "Midea",
    "brandId": "midea",
    "model": "MSAF24B-12CRDN1",
    "category": "ac",
    "images": [],
    "price": 4399,
    "rating": 4.5,
    "reviews": 0,
    "icon": "❄️",
    "color": "#00a0e9",
    "tags": [
      "midea",
      "ac"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "1.5 HP"
    },
    "oldPrice": 6399,
    "discount": 31
  },
  {
    "id": "midea-002",
    "name": "Midea Split Acs Inverter R32 Gas-Unicool + 1.5 HP",
    "brand": "Midea",
    "brandId": "midea",
    "model": "MSAF24B-12CRDN1-R32",
    "category": "ac",
    "images": [],
    "price": 4999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "❄️",
    "color": "#00a0e9",
    "tags": [
      "midea",
      "ac"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "1.5 HP"
    },
    "oldPrice": 6399,
    "discount": 22
  },
  {
    "id": "midea-003",
    "name": "Midea Split Acs Inverter R32 Gas-Unicool + 2.0 HP",
    "brand": "Midea",
    "brandId": "midea",
    "model": "MSAF24C-18CRDN1-R32",
    "category": "ac",
    "images": [],
    "price": 6999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "❄️",
    "color": "#00a0e9",
    "tags": [
      "midea",
      "ac"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "2.0 HP"
    },
    "oldPrice": 8299,
    "discount": 16
  },
  {
    "id": "midea-004",
    "name": "Midea Split Acs Inverter R32 Gas-Unicool + 2.5 HP",
    "brand": "Midea",
    "brandId": "midea",
    "model": "MSAF-24CRDN1-R32",
    "category": "ac",
    "images": [],
    "price": 9999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "❄️",
    "color": "#00a0e9",
    "tags": [
      "midea",
      "ac"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "2.5 HP"
    },
    "oldPrice": 12999,
    "discount": 23
  },
  {
    "id": "midea-005",
    "name": "Midea Split Inverter - R290 1.5 HP",
    "brand": "Midea",
    "brandId": "midea",
    "model": "MSAGBU-12HRFN7",
    "category": "ac",
    "images": [],
    "price": 5499,
    "rating": 4.5,
    "reviews": 0,
    "icon": "❄️",
    "color": "#00a0e9",
    "tags": [
      "midea",
      "ac"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "1.5 HP"
    },
    "oldPrice": 8499,
    "discount": 35
  },
  {
    "id": "midea-006",
    "name": "Midea Split Acs Inverter R32 1.5 HP",
    "brand": "Midea",
    "brandId": "midea",
    "model": "MSAFB-12CRDN8-QD2",
    "category": "ac",
    "images": [],
    "price": 5999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "❄️",
    "color": "#00a0e9",
    "tags": [
      "midea",
      "ac"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "1.5 HP"
    },
    "oldPrice": 6199,
    "discount": 3
  },
  {
    "id": "midea-007",
    "name": "Midea Split Acs Inverter R32 2.0HP",
    "brand": "Midea",
    "brandId": "midea",
    "model": "MSAFC-17CRDN8/MOX230-18CDN8-Q",
    "category": "ac",
    "images": [],
    "price": 8799,
    "rating": 4.5,
    "reviews": 0,
    "icon": "❄️",
    "color": "#00a0e9",
    "tags": [
      "midea",
      "ac"
    ],
    "badge": "",
    "description": "",
    "specs": {
      "Size": "2.0HP"
    }
  },
  {
    "id": "midea-008",
    "name": "Midea Split Acs Inverter R32 2.5 HP",
    "brand": "Midea",
    "brandId": "midea",
    "model": "MSAFD-22CRFN8/MOX330-22CFN8-Q",
    "category": "ac",
    "images": [],
    "price": 11999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "❄️",
    "color": "#00a0e9",
    "tags": [
      "midea",
      "ac"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "2.5 HP"
    },
    "oldPrice": 12799,
    "discount": 6
  },
  {
    "id": "midea-009",
    "name": "Midea Split Acs Inverter -Breezeless-R32 1.5 hp",
    "brand": "Midea",
    "brandId": "midea",
    "model": "MSCB1B-12CRFN8",
    "category": "ac",
    "images": [],
    "price": 6299,
    "rating": 4.5,
    "reviews": 0,
    "icon": "❄️",
    "color": "#00a0e9",
    "tags": [
      "midea",
      "ac"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "1.5 hp"
    },
    "oldPrice": 6699,
    "discount": 6
  },
  {
    "id": "midea-010",
    "name": "Midea Split Acs Inverter -Breezeless-R32 2.0 HP",
    "brand": "Midea",
    "brandId": "midea",
    "model": "MSCB1CU-18HRFN8",
    "category": "ac",
    "images": [],
    "price": 9499,
    "rating": 4.5,
    "reviews": 0,
    "icon": "❄️",
    "color": "#00a0e9",
    "tags": [
      "midea",
      "ac"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "2.0 HP"
    },
    "oldPrice": 9999,
    "discount": 5
  },
  {
    "id": "midea-011",
    "name": "Midea Split Acs Inverter -Breezeless-R32 2.5 HP",
    "brand": "Midea",
    "brandId": "midea",
    "model": "MSCB1DU-24HRFN8",
    "category": "ac",
    "images": [],
    "price": 11999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "❄️",
    "color": "#00a0e9",
    "tags": [
      "midea",
      "ac"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "2.5 HP"
    },
    "oldPrice": 14199,
    "discount": 15
  },
  {
    "id": "midea-012",
    "name": "Midea Split Acs R410 1.5 HP",
    "brand": "Midea",
    "brandId": "midea",
    "model": "MSAF-12CRN1",
    "category": "ac",
    "images": [],
    "price": 3999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "❄️",
    "color": "#00a0e9",
    "tags": [
      "midea",
      "ac"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "1.5 HP"
    },
    "oldPrice": 5299,
    "discount": 25
  },
  {
    "id": "midea-013",
    "name": "Midea Split Acs R410 2.0 HP",
    "brand": "Midea",
    "brandId": "midea",
    "model": "MSAF-18CRN1",
    "category": "ac",
    "images": [],
    "price": 6499,
    "rating": 4.5,
    "reviews": 0,
    "icon": "❄️",
    "color": "#00a0e9",
    "tags": [
      "midea",
      "ac"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "2.0 HP"
    },
    "oldPrice": 7899,
    "discount": 18
  },
  {
    "id": "midea-014",
    "name": "Midea Split Acs R410 2.5 HP",
    "brand": "Midea",
    "brandId": "midea",
    "model": "MSAF-24CRN1",
    "category": "ac",
    "images": [],
    "price": 8999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "❄️",
    "color": "#00a0e9",
    "tags": [
      "midea",
      "ac"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "2.5 HP"
    },
    "oldPrice": 11399,
    "discount": 21
  },
  {
    "id": "midea-015",
    "name": "Midea Floor Standing - R410 48000 BTU",
    "brand": "Midea",
    "brandId": "midea",
    "model": "MJ2-48CRN1",
    "category": "ac",
    "images": [],
    "price": 22999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "❄️",
    "color": "#00a0e9",
    "tags": [
      "midea",
      "ac"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "48000 BTU"
    },
    "oldPrice": 27899,
    "discount": 18
  },
  {
    "id": "midea-016",
    "name": "Midea Floor Standing - Inverter R410 24000 BTU/H",
    "brand": "Midea",
    "brandId": "midea",
    "model": "MFYA400-24ARFN1",
    "category": "ac",
    "images": [],
    "price": 13999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "❄️",
    "color": "#00a0e9",
    "tags": [
      "midea",
      "ac"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "24000 BTU/H"
    },
    "oldPrice": 18299,
    "discount": 23
  },
  {
    "id": "midea-017",
    "name": "Midea Floor Standing - Inverter R410 48000 BTU/H",
    "brand": "Midea",
    "brandId": "midea",
    "model": "MFPA400-48HRFN1",
    "category": "ac",
    "images": [],
    "price": 29999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "❄️",
    "color": "#00a0e9",
    "tags": [
      "midea",
      "ac"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "48000 BTU/H"
    },
    "oldPrice": 36499,
    "discount": 18
  },
  {
    "id": "midea-018",
    "name": "Midea Floor Standing - Inverter R410 24000 BTU/H",
    "brand": "Midea",
    "brandId": "midea",
    "model": "MPA-24CRDN1",
    "category": "ac",
    "images": [],
    "price": 11999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "❄️",
    "color": "#00a0e9",
    "tags": [
      "midea",
      "ac"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "24000 BTU/H"
    },
    "oldPrice": 14499,
    "discount": 17
  },
  {
    "id": "midea-019",
    "name": "Midea Floor Standing - Inverter R410 18000 btu",
    "brand": "Midea",
    "brandId": "midea",
    "model": "MFPA-18CRDN1",
    "category": "ac",
    "images": [],
    "price": 9999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "❄️",
    "color": "#00a0e9",
    "tags": [
      "midea",
      "ac"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "18000 btu"
    },
    "oldPrice": 13999,
    "discount": 29
  },
  {
    "id": "midea-020",
    "name": "Midea Cassette Inverter R410 2.5 HP",
    "brand": "Midea",
    "brandId": "midea",
    "model": "MCD-24HRND1",
    "category": "ac",
    "images": [],
    "price": 15999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "❄️",
    "color": "#00a0e9",
    "tags": [
      "midea",
      "ac"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "2.5 HP"
    },
    "oldPrice": 18499,
    "discount": 14
  },
  {
    "id": "midea-021",
    "name": "Midea Cassette Inverter R410 3.5 HP",
    "brand": "Midea",
    "brandId": "midea",
    "model": "MCD-36HRDN1",
    "category": "ac",
    "images": [],
    "price": 23999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "❄️",
    "color": "#00a0e9",
    "tags": [
      "midea",
      "ac"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "3.5 HP"
    },
    "oldPrice": 26999,
    "discount": 11
  },
  {
    "id": "midea-022",
    "name": "Midea Cassette Inverter R410 5.0 HP",
    "brand": "Midea",
    "brandId": "midea",
    "model": "MCD-48HRDN1",
    "category": "ac",
    "images": [],
    "price": 29999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "❄️",
    "color": "#00a0e9",
    "tags": [
      "midea",
      "ac"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "5.0 HP"
    },
    "oldPrice": 31999,
    "discount": 6
  },
  {
    "id": "midea-023",
    "name": "Midea Air Purifier 220 M³/hr",
    "brand": "Midea",
    "brandId": "midea",
    "model": "KJ200G-D41",
    "category": "small",
    "images": [],
    "price": 1299,
    "rating": 4.5,
    "reviews": 0,
    "icon": "⚡",
    "color": "#00a0e9",
    "tags": [
      "midea",
      "small"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "220 M³/hr"
    },
    "oldPrice": 1599,
    "discount": 19
  },
  {
    "id": "midea-024",
    "name": "Midea Standing Air Cooler 60W",
    "brand": "Midea",
    "brandId": "midea",
    "model": "AC120-15F",
    "category": "small",
    "images": [],
    "price": 1499,
    "rating": 4.5,
    "reviews": 0,
    "icon": "⚡",
    "color": "#00a0e9",
    "tags": [
      "midea",
      "small"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "60W"
    },
    "oldPrice": 2099,
    "discount": 29
  },
  {
    "id": "midea-025",
    "name": "Midea Standing Air Cooler 50W",
    "brand": "Midea",
    "brandId": "midea",
    "model": "AC100-18B",
    "category": "small",
    "images": [],
    "price": 899,
    "rating": 4.5,
    "reviews": 0,
    "icon": "⚡",
    "color": "#00a0e9",
    "tags": [
      "midea",
      "small"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "50W"
    },
    "oldPrice": 1799,
    "discount": 50
  },
  {
    "id": "midea-026",
    "name": "Midea Standing Fan",
    "brand": "Midea",
    "brandId": "midea",
    "model": "FS40-19K",
    "category": "small",
    "images": [],
    "price": 399,
    "rating": 4.5,
    "reviews": 0,
    "icon": "⚡",
    "color": "#00a0e9",
    "tags": [
      "midea",
      "small"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {},
    "oldPrice": 699,
    "discount": 43
  },
  {
    "id": "midea-027",
    "name": "Midea Standing Fan",
    "brand": "Midea",
    "brandId": "midea",
    "model": "FS40-21M",
    "category": "small",
    "images": [],
    "price": 249,
    "rating": 4.5,
    "reviews": 0,
    "icon": "⚡",
    "color": "#00a0e9",
    "tags": [
      "midea",
      "small"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {},
    "oldPrice": 279,
    "discount": 11
  },
  {
    "id": "midea-028",
    "name": "Midea Standing Fan 16\"",
    "brand": "Midea",
    "brandId": "midea",
    "model": "FS40-13QRA",
    "category": "small",
    "images": [],
    "price": 1099,
    "rating": 4.5,
    "reviews": 0,
    "icon": "⚡",
    "color": "#00a0e9",
    "tags": [
      "midea",
      "small"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "16\""
    },
    "oldPrice": 1299,
    "discount": 15
  },
  {
    "id": "midea-029",
    "name": "Midea Recharghable Fan 18''",
    "brand": "Midea",
    "brandId": "midea",
    "model": "FS45-23MRD",
    "category": "small",
    "images": [],
    "price": 999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "⚡",
    "color": "#00a0e9",
    "tags": [
      "midea",
      "small"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "18\""
    },
    "oldPrice": 1099,
    "discount": 9
  },
  {
    "id": "midea-030",
    "name": "Midea Dehumidifier 30 L",
    "brand": "Midea",
    "brandId": "midea",
    "model": "MDDP-30DEN7",
    "category": "small",
    "images": [],
    "price": 2999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "⚡",
    "color": "#00a0e9",
    "tags": [
      "midea",
      "small"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "30 L"
    },
    "oldPrice": 3599,
    "discount": 17
  },
  {
    "id": "midea-031",
    "name": "Midea Table Top 93 L",
    "brand": "Midea",
    "brandId": "midea",
    "model": "MDRD142FGN50",
    "category": "fridge",
    "images": [],
    "price": 1999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🧊",
    "color": "#00a0e9",
    "tags": [
      "midea",
      "fridge"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "93 L"
    },
    "oldPrice": 2899,
    "discount": 31
  },
  {
    "id": "midea-032",
    "name": "Midea Dd Table Top 87 L",
    "brand": "Midea",
    "brandId": "midea",
    "model": "MDRT134FGN50",
    "category": "fridge",
    "images": [],
    "price": 1699,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🧊",
    "color": "#00a0e9",
    "tags": [
      "midea",
      "fridge"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "87 L"
    },
    "oldPrice": 3499,
    "discount": 51
  },
  {
    "id": "midea-033",
    "name": "Midea Defrost- Top Freezer 463 L",
    "brand": "Midea",
    "brandId": "midea",
    "model": "MDRT645MTN46D",
    "category": "fridge",
    "images": [],
    "price": 7999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🧊",
    "color": "#00a0e9",
    "tags": [
      "midea",
      "fridge"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "463 L"
    },
    "oldPrice": 11399,
    "discount": 30
  },
  {
    "id": "midea-034",
    "name": "Midea Defrost- Top Freezer 360 L",
    "brand": "Midea",
    "brandId": "midea",
    "model": "MDRT489MTN46",
    "category": "fridge",
    "images": [],
    "price": 6999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🧊",
    "color": "#00a0e9",
    "tags": [
      "midea",
      "fridge"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "360 L"
    },
    "oldPrice": 9199,
    "discount": 24
  },
  {
    "id": "midea-035",
    "name": "Midea Defrost- Top Freezer 207 L",
    "brand": "Midea",
    "brandId": "midea",
    "model": "MDRT294FGN28",
    "category": "fridge",
    "images": [],
    "price": 3499,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🧊",
    "color": "#00a0e9",
    "tags": [
      "midea",
      "fridge"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "207 L"
    },
    "oldPrice": 4599,
    "discount": 24
  },
  {
    "id": "midea-036",
    "name": "Midea Defrost- Top Freezer 128 L",
    "brand": "Midea",
    "brandId": "midea",
    "model": "MDRT187FGG28",
    "category": "fridge",
    "images": [],
    "price": 2499,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🧊",
    "color": "#00a0e9",
    "tags": [
      "midea",
      "fridge"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "128 L"
    },
    "oldPrice": 3599,
    "discount": 31
  },
  {
    "id": "midea-037",
    "name": "Midea Single Door Display 211 L",
    "brand": "Midea",
    "brandId": "midea",
    "model": "MDRZ302FZG21",
    "category": "fridge",
    "images": [],
    "price": 4999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🧊",
    "color": "#00a0e9",
    "tags": [
      "midea",
      "fridge"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "211 L"
    },
    "oldPrice": 7099,
    "discount": 30
  },
  {
    "id": "midea-038",
    "name": "Midea Side By Side 548 L",
    "brand": "Midea",
    "brandId": "midea",
    "model": "MDRS710FGN02D",
    "category": "fridge",
    "images": [],
    "price": 1199,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🧊",
    "color": "#00a0e9",
    "tags": [
      "midea",
      "fridge"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "548 L"
    },
    "oldPrice": 15699,
    "discount": 92
  },
  {
    "id": "midea-039",
    "name": "Midea Side By Side",
    "brand": "Midea",
    "brandId": "midea",
    "model": "MDRC207FZN43",
    "category": "fridge",
    "images": [],
    "price": 2399,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🧊",
    "color": "#00a0e9",
    "tags": [
      "midea",
      "fridge"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {},
    "oldPrice": 3599,
    "discount": 33
  },
  {
    "id": "midea-040",
    "name": "Midea Side By Side 198 L",
    "brand": "Midea",
    "brandId": "midea",
    "model": "MDRC280FZN43",
    "category": "fridge",
    "images": [],
    "price": 2899,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🧊",
    "color": "#00a0e9",
    "tags": [
      "midea",
      "fridge"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "198 L"
    },
    "oldPrice": 4499,
    "discount": 36
  },
  {
    "id": "midea-041",
    "name": "Midea Chest Freezer 249 L",
    "brand": "Midea",
    "brandId": "midea",
    "model": "MDRC345FZG43",
    "category": "fridge",
    "images": [],
    "price": 3999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🧊",
    "color": "#00a0e9",
    "tags": [
      "midea",
      "fridge"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "249 L"
    },
    "oldPrice": 5299,
    "discount": 25
  },
  {
    "id": "midea-042",
    "name": "Midea Chest Freezer 418 L",
    "brand": "Midea",
    "brandId": "midea",
    "model": "MDRC564FZN01",
    "category": "fridge",
    "images": [],
    "price": 6499,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🧊",
    "color": "#00a0e9",
    "tags": [
      "midea",
      "fridge"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "418 L"
    },
    "oldPrice": 8799,
    "discount": 26
  },
  {
    "id": "midea-043",
    "name": "Midea Dd-Chest Freezer 508 L",
    "brand": "Midea",
    "brandId": "midea",
    "model": "MDRC698FZN01",
    "category": "fridge",
    "images": [],
    "price": 7999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🧊",
    "color": "#00a0e9",
    "tags": [
      "midea",
      "fridge"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "508 L"
    },
    "oldPrice": 9699,
    "discount": 18
  },
  {
    "id": "midea-044",
    "name": "Midea Inverter 99 L",
    "brand": "Midea",
    "brandId": "midea",
    "model": "MDRC193FZG43D",
    "category": "fridge",
    "images": [],
    "price": 2099,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🧊",
    "color": "#00a0e9",
    "tags": [
      "midea",
      "fridge"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "99 L"
    },
    "oldPrice": 2499,
    "discount": 16
  },
  {
    "id": "midea-045",
    "name": "Midea Inverter 143 L",
    "brand": "Midea",
    "brandId": "midea",
    "model": "MDRC265FZG43D",
    "category": "fridge",
    "images": [],
    "price": 2599,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🧊",
    "color": "#00a0e9",
    "tags": [
      "midea",
      "fridge"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "143 L"
    },
    "oldPrice": 2899,
    "discount": 10
  },
  {
    "id": "midea-046",
    "name": "Midea Inverter 198 L",
    "brand": "Midea",
    "brandId": "midea",
    "model": "MDRC362FZG43D",
    "category": "fridge",
    "images": [],
    "price": 2999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🧊",
    "color": "#00a0e9",
    "tags": [
      "midea",
      "fridge"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "198 L"
    },
    "oldPrice": 3499,
    "discount": 14
  },
  {
    "id": "midea-047",
    "name": "Midea Front Load 12 KG",
    "brand": "Midea",
    "brandId": "midea",
    "model": "MF200W120WB/T",
    "category": "laundry",
    "images": [],
    "price": 6999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🫧",
    "color": "#00a0e9",
    "tags": [
      "midea",
      "laundry"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "12 KG"
    },
    "oldPrice": 8799,
    "discount": 20
  },
  {
    "id": "midea-048",
    "name": "Midea Front Load 8 KG",
    "brand": "Midea",
    "brandId": "midea",
    "model": "MF110W80B/T",
    "category": "laundry",
    "images": [],
    "price": 4999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🫧",
    "color": "#00a0e9",
    "tags": [
      "midea",
      "laundry"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "8 KG"
    },
    "oldPrice": 6399,
    "discount": 22
  },
  {
    "id": "midea-049",
    "name": "Midea Front Load 7 KG",
    "brand": "Midea",
    "brandId": "midea",
    "model": "MF110W70/T",
    "category": "laundry",
    "images": [],
    "price": 3999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🫧",
    "color": "#00a0e9",
    "tags": [
      "midea",
      "laundry"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "7 KG"
    },
    "oldPrice": 5499,
    "discount": 27
  },
  {
    "id": "midea-050",
    "name": "Midea Twin Top 12 KG",
    "brand": "Midea",
    "brandId": "midea",
    "model": "MT100W120/WG",
    "category": "laundry",
    "images": [],
    "price": 2999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🫧",
    "color": "#00a0e9",
    "tags": [
      "midea",
      "laundry"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "12 KG"
    },
    "oldPrice": 3399,
    "discount": 12
  },
  {
    "id": "midea-051",
    "name": "Midea Twin Top 7 KGS",
    "brand": "Midea",
    "brandId": "midea",
    "model": "MT100W70/WG",
    "category": "laundry",
    "images": [],
    "price": 1999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🫧",
    "color": "#00a0e9",
    "tags": [
      "midea",
      "laundry"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "7 KGS"
    },
    "oldPrice": 2199,
    "discount": 9
  },
  {
    "id": "midea-052",
    "name": "Midea 4 Burner 4 BURNERS",
    "brand": "Midea",
    "brandId": "midea",
    "model": "SP5055T082-B",
    "category": "kitchen",
    "images": [],
    "price": 1499,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🍳",
    "color": "#00a0e9",
    "tags": [
      "midea",
      "kitchen"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "4 BURNERS"
    },
    "oldPrice": 2599,
    "discount": 42
  },
  {
    "id": "midea-053",
    "name": "Midea 4 Burner",
    "brand": "Midea",
    "brandId": "midea",
    "model": "SP5055T082-S",
    "category": "kitchen",
    "images": [],
    "price": 1599,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🍳",
    "color": "#00a0e9",
    "tags": [
      "midea",
      "kitchen"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {},
    "oldPrice": 2699,
    "discount": 41
  },
  {
    "id": "midea-054",
    "name": "Midea 4 Burner",
    "brand": "Midea",
    "brandId": "midea",
    "model": "SP5055T082-BG",
    "category": "kitchen",
    "images": [],
    "price": 1699,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🍳",
    "color": "#00a0e9",
    "tags": [
      "midea",
      "kitchen"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {},
    "oldPrice": 2699,
    "discount": 37
  },
  {
    "id": "midea-055",
    "name": "Midea 4 Burner",
    "brand": "Midea",
    "brandId": "midea",
    "model": "SP5055T082-SGH",
    "category": "kitchen",
    "images": [],
    "price": 1799,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🍳",
    "color": "#00a0e9",
    "tags": [
      "midea",
      "kitchen"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {},
    "oldPrice": 2699,
    "discount": 33
  },
  {
    "id": "midea-056",
    "name": "Midea 4 Burner",
    "brand": "Midea",
    "brandId": "midea",
    "model": "24TMG4G081-S",
    "category": "kitchen",
    "images": [],
    "price": 2799,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🍳",
    "color": "#00a0e9",
    "tags": [
      "midea",
      "kitchen"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {},
    "oldPrice": 3799,
    "discount": 26
  },
  {
    "id": "midea-057",
    "name": "Midea 4 Burner",
    "brand": "Midea",
    "brandId": "midea",
    "model": "24TMG4G081-B",
    "category": "kitchen",
    "images": [],
    "price": 2899,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🍳",
    "color": "#00a0e9",
    "tags": [
      "midea",
      "kitchen"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {},
    "oldPrice": 3899,
    "discount": 26
  },
  {
    "id": "midea-058",
    "name": "Midea 4 Burner",
    "brand": "Midea",
    "brandId": "midea",
    "model": "24TMG4G081-WD",
    "category": "kitchen",
    "images": [],
    "price": 2999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🍳",
    "color": "#00a0e9",
    "tags": [
      "midea",
      "kitchen"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {},
    "oldPrice": 3999,
    "discount": 25
  },
  {
    "id": "midea-059",
    "name": "Midea 4 Burner",
    "brand": "Midea",
    "brandId": "midea",
    "model": "24LMG4G027",
    "category": "kitchen",
    "images": [],
    "price": 3999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🍳",
    "color": "#00a0e9",
    "tags": [
      "midea",
      "kitchen"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {},
    "oldPrice": 5699,
    "discount": 30
  },
  {
    "id": "midea-060",
    "name": "Midea 5 Burner 5 BURNERS",
    "brand": "Midea",
    "brandId": "midea",
    "model": "30AMG5G027-SILVER",
    "category": "kitchen",
    "images": [],
    "price": 4799,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🍳",
    "color": "#00a0e9",
    "tags": [
      "midea",
      "kitchen"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "5 BURNERS"
    },
    "oldPrice": 7499,
    "discount": 36
  },
  {
    "id": "midea-061",
    "name": "Midea 5 Burner",
    "brand": "Midea",
    "brandId": "midea",
    "model": "36LMG5G080V",
    "category": "kitchen",
    "images": [],
    "price": 6499,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🍳",
    "color": "#00a0e9",
    "tags": [
      "midea",
      "kitchen"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {},
    "oldPrice": 9199,
    "discount": 29
  },
  {
    "id": "midea-062",
    "name": "Midea 5 Burner",
    "brand": "Midea",
    "brandId": "midea",
    "model": "36LMG5G027-C",
    "category": "kitchen",
    "images": [],
    "price": 5999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🍳",
    "color": "#00a0e9",
    "tags": [
      "midea",
      "kitchen"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {},
    "oldPrice": 9199,
    "discount": 35
  },
  {
    "id": "midea-063",
    "name": "Midea 5 Burner",
    "brand": "Midea",
    "brandId": "midea",
    "model": "LMG90030",
    "category": "kitchen",
    "images": [],
    "price": 6499,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🍳",
    "color": "#00a0e9",
    "tags": [
      "midea",
      "kitchen"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {},
    "oldPrice": 8999,
    "discount": 28
  },
  {
    "id": "midea-064",
    "name": "Midea 5 Burner",
    "brand": "Midea",
    "brandId": "midea",
    "model": "VESTA-P48C",
    "category": "kitchen",
    "images": [],
    "price": 9999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🍳",
    "color": "#00a0e9",
    "tags": [
      "midea",
      "kitchen"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {},
    "oldPrice": 11399,
    "discount": 12
  },
  {
    "id": "midea-065",
    "name": "Midea Solo 30 LTRS",
    "brand": "Midea",
    "brandId": "midea",
    "model": "EM9P032MO-B",
    "category": "kitchen",
    "images": [],
    "price": 1499,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🍳",
    "color": "#00a0e9",
    "tags": [
      "midea",
      "kitchen"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "30 LTRS"
    },
    "oldPrice": 1699,
    "discount": 12
  },
  {
    "id": "midea-066",
    "name": "Midea Solo 20 LTRS",
    "brand": "Midea",
    "brandId": "midea",
    "model": "MM7P012MZ-B",
    "category": "kitchen",
    "images": [],
    "price": 699,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🍳",
    "color": "#00a0e9",
    "tags": [
      "midea",
      "kitchen"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "20 LTRS"
    },
    "oldPrice": 1199,
    "discount": 42
  },
  {
    "id": "midea-067",
    "name": "Midea Microwave 17 LTRS",
    "brand": "Midea",
    "brandId": "midea",
    "model": "AM717BS7",
    "category": "kitchen",
    "images": [],
    "price": 2999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🍳",
    "color": "#00a0e9",
    "tags": [
      "midea",
      "kitchen"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "17 LTRS"
    },
    "oldPrice": 3599,
    "discount": 17
  },
  {
    "id": "midea-068",
    "name": "Midea Microwave 25 LTRS",
    "brand": "Midea",
    "brandId": "midea",
    "model": "AM925BVE",
    "category": "kitchen",
    "images": [],
    "price": 3999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🍳",
    "color": "#00a0e9",
    "tags": [
      "midea",
      "kitchen"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "25 LTRS"
    },
    "oldPrice": 4899,
    "discount": 18
  },
  {
    "id": "midea-069",
    "name": "Midea Electric Oven 60 CM",
    "brand": "Midea",
    "brandId": "midea",
    "model": "65M80M1-012",
    "category": "kitchen",
    "images": [],
    "price": 4499,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🍳",
    "color": "#00a0e9",
    "tags": [
      "midea",
      "kitchen"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "60 CM"
    },
    "oldPrice": 5699,
    "discount": 21
  },
  {
    "id": "midea-070",
    "name": "Midea Electric Oven 60 CM",
    "brand": "Midea",
    "brandId": "midea",
    "model": "65M80M1-004BK",
    "category": "kitchen",
    "images": [],
    "price": 4999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🍳",
    "color": "#00a0e9",
    "tags": [
      "midea",
      "kitchen"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "60 CM"
    },
    "oldPrice": 5999,
    "discount": 17
  },
  {
    "id": "midea-071",
    "name": "Midea Gas Hob 4 BURNER - 60CM",
    "brand": "Midea",
    "brandId": "midea",
    "model": "60G40ME",
    "category": "kitchen",
    "images": [],
    "price": 2499,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🍳",
    "color": "#00a0e9",
    "tags": [
      "midea",
      "kitchen"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "4 BURNER - 60CM"
    },
    "oldPrice": 3099,
    "discount": 19
  },
  {
    "id": "midea-072",
    "name": "Midea Gas Hob",
    "brand": "Midea",
    "brandId": "midea",
    "model": "90G50ME",
    "category": "kitchen",
    "images": [],
    "price": 3499,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🍳",
    "color": "#00a0e9",
    "tags": [
      "midea",
      "kitchen"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {},
    "oldPrice": 4299,
    "discount": 19
  },
  {
    "id": "midea-073",
    "name": "Midea Electric Hob 2 HOBS",
    "brand": "Midea",
    "brandId": "midea",
    "model": "MC-HD301",
    "category": "kitchen",
    "images": [],
    "price": 1799,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🍳",
    "color": "#00a0e9",
    "tags": [
      "midea",
      "kitchen"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "2 HOBS"
    },
    "oldPrice": 3799,
    "discount": 53
  },
  {
    "id": "midea-074",
    "name": "Midea Electric Hob 4 HOBS",
    "brand": "Midea",
    "brandId": "midea",
    "model": "MC-HF605",
    "category": "kitchen",
    "images": [],
    "price": 4499,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🍳",
    "color": "#00a0e9",
    "tags": [
      "midea",
      "kitchen"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "4 HOBS"
    },
    "oldPrice": 5099,
    "discount": 12
  },
  {
    "id": "midea-075",
    "name": "Midea Electric Hob 5 HOBS",
    "brand": "Midea",
    "brandId": "midea",
    "model": "MC-HV848",
    "category": "kitchen",
    "images": [],
    "price": 4999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🍳",
    "color": "#00a0e9",
    "tags": [
      "midea",
      "kitchen"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "5 HOBS"
    },
    "oldPrice": 7099,
    "discount": 30
  },
  {
    "id": "midea-076",
    "name": "Midea Electric Hob 60 CM",
    "brand": "Midea",
    "brandId": "midea",
    "model": "60M21-S",
    "category": "kitchen",
    "images": [],
    "price": 2199,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🍳",
    "color": "#00a0e9",
    "tags": [
      "midea",
      "kitchen"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "60 CM"
    },
    "oldPrice": 2899,
    "discount": 24
  },
  {
    "id": "midea-077",
    "name": "Midea Electric Hob 90 CM",
    "brand": "Midea",
    "brandId": "midea",
    "model": "90M21",
    "category": "kitchen",
    "images": [],
    "price": 2499,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🍳",
    "color": "#00a0e9",
    "tags": [
      "midea",
      "kitchen"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "90 CM"
    },
    "oldPrice": 3799,
    "discount": 34
  },
  {
    "id": "midea-078",
    "name": "Midea Electric Hob 90 CM",
    "brand": "Midea",
    "brandId": "midea",
    "model": "90M21-S",
    "category": "kitchen",
    "images": [],
    "price": 2499,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🍳",
    "color": "#00a0e9",
    "tags": [
      "midea",
      "kitchen"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "90 CM"
    },
    "oldPrice": 3799,
    "discount": 34
  },
  {
    "id": "midea-079",
    "name": "Midea Electric Hob 60 CM - BLACK",
    "brand": "Midea",
    "brandId": "midea",
    "model": "60L03-B",
    "category": "kitchen",
    "images": [],
    "price": 1999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🍳",
    "color": "#00a0e9",
    "tags": [
      "midea",
      "kitchen"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "60 CM - BLACK"
    },
    "oldPrice": 2799,
    "discount": 29
  },
  {
    "id": "midea-080",
    "name": "Midea Dishwahsher 14 PLATES- SILVER CONTROL BOARD",
    "brand": "Midea",
    "brandId": "midea",
    "model": "WQP14-7713F",
    "category": "kitchen",
    "images": [],
    "price": 5999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🍳",
    "color": "#00a0e9",
    "tags": [
      "midea",
      "kitchen"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "14 PLATES- SILVER CONTROL BOARD"
    },
    "oldPrice": 6999,
    "discount": 14
  },
  {
    "id": "midea-081",
    "name": "Midea Dishwahsher 14 PLATES-BLACK CONTROL BOARD",
    "brand": "Midea",
    "brandId": "midea",
    "model": "WQP14-W7703L(B)",
    "category": "kitchen",
    "images": [],
    "price": 6499,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🍳",
    "color": "#00a0e9",
    "tags": [
      "midea",
      "kitchen"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "14 PLATES-BLACK CONTROL BOARD"
    },
    "oldPrice": 7499,
    "discount": 13
  },
  {
    "id": "midea-082",
    "name": "Midea Dishwahsher 12 PLATES- SILVER BODY",
    "brand": "Midea",
    "brandId": "midea",
    "model": "WQP12-5201G(S)",
    "category": "kitchen",
    "images": [],
    "price": 4999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🍳",
    "color": "#00a0e9",
    "tags": [
      "midea",
      "kitchen"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "12 PLATES- SILVER BODY"
    },
    "oldPrice": 5999,
    "discount": 17
  },
  {
    "id": "midea-083",
    "name": "Midea Washer/Dryer Built-In 8 KG/ 6KG",
    "brand": "Midea",
    "brandId": "midea",
    "model": "MFA06D80B/W",
    "category": "laundry",
    "images": [],
    "price": 6999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🫧",
    "color": "#00a0e9",
    "tags": [
      "midea",
      "laundry"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "8 KG/ 6KG"
    },
    "oldPrice": 10999,
    "discount": 36
  },
  {
    "id": "midea-084",
    "name": "Midea Electric Oven 68 LTR",
    "brand": "Midea",
    "brandId": "midea",
    "model": "MC68ABA",
    "category": "kitchen",
    "images": [],
    "price": 1799,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🍳",
    "color": "#00a0e9",
    "tags": [
      "midea",
      "kitchen"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "68 LTR"
    },
    "oldPrice": 2199,
    "discount": 18
  },
  {
    "id": "midea-085",
    "name": "Midea Air Fryer 4 LTR - BLACK",
    "brand": "Midea",
    "brandId": "midea",
    "model": "MF-CN40E2",
    "category": "kitchen",
    "images": [],
    "price": 599,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🍳",
    "color": "#00a0e9",
    "tags": [
      "midea",
      "kitchen"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "4 LTR - BLACK"
    },
    "oldPrice": 899,
    "discount": 33
  },
  {
    "id": "midea-086",
    "name": "Midea Air Fryer 4.5 LTR - BLACK",
    "brand": "Midea",
    "brandId": "midea",
    "model": "MF-CN45WK",
    "category": "kitchen",
    "images": [],
    "price": 699,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🍳",
    "color": "#00a0e9",
    "tags": [
      "midea",
      "kitchen"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "4.5 LTR - BLACK"
    },
    "oldPrice": 999,
    "discount": 30
  },
  {
    "id": "midea-087",
    "name": "Midea Air Fryer 6 LTR - BLACK",
    "brand": "Midea",
    "brandId": "midea",
    "model": "MF-CY55WK",
    "category": "kitchen",
    "images": [],
    "price": 749,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🍳",
    "color": "#00a0e9",
    "tags": [
      "midea",
      "kitchen"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "6 LTR - BLACK"
    },
    "oldPrice": 1199,
    "discount": 38
  },
  {
    "id": "midea-088",
    "name": "Midea Air Fryer 7 LTR - BLACK",
    "brand": "Midea",
    "brandId": "midea",
    "model": "MF-CY70K",
    "category": "kitchen",
    "images": [],
    "price": 1099,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🍳",
    "color": "#00a0e9",
    "tags": [
      "midea",
      "kitchen"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "7 LTR - BLACK"
    },
    "oldPrice": 1499,
    "discount": 27
  },
  {
    "id": "midea-089",
    "name": "Midea Air Fryer 7 LTR - BLACK",
    "brand": "Midea",
    "brandId": "midea",
    "model": "MF-CY85WK",
    "category": "kitchen",
    "images": [],
    "price": 1199,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🍳",
    "color": "#00a0e9",
    "tags": [
      "midea",
      "kitchen"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "7 LTR - BLACK"
    },
    "oldPrice": 1599,
    "discount": 25
  },
  {
    "id": "midea-090",
    "name": "Midea Juicer 0.5 LTR",
    "brand": "Midea",
    "brandId": "midea",
    "model": "JE2802",
    "category": "kitchen",
    "images": [],
    "price": 399,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🍳",
    "color": "#00a0e9",
    "tags": [
      "midea",
      "kitchen"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "0.5 LTR"
    },
    "oldPrice": 799,
    "discount": 50
  },
  {
    "id": "midea-091",
    "name": "Midea Kettle 1.7 LTR",
    "brand": "Midea",
    "brandId": "midea",
    "model": "MK-17S32A2",
    "category": "kitchen",
    "images": [],
    "price": 199,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🍳",
    "color": "#00a0e9",
    "tags": [
      "midea",
      "kitchen"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "1.7 LTR"
    },
    "oldPrice": 299,
    "discount": 33
  },
  {
    "id": "midea-092",
    "name": "Midea Kettle 1.7 LTR",
    "brand": "Midea",
    "brandId": "midea",
    "model": "MK-17G02A2",
    "category": "kitchen",
    "images": [],
    "price": 279,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🍳",
    "color": "#00a0e9",
    "tags": [
      "midea",
      "kitchen"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "1.7 LTR"
    },
    "oldPrice": 299,
    "discount": 7
  },
  {
    "id": "midea-093",
    "name": "Midea Stand Mixer 2 LTRS",
    "brand": "Midea",
    "brandId": "midea",
    "model": "HM0293A",
    "category": "kitchen",
    "images": [],
    "price": 499,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🍳",
    "color": "#00a0e9",
    "tags": [
      "midea",
      "kitchen"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "2 LTRS"
    },
    "oldPrice": 599,
    "discount": 17
  },
  {
    "id": "midea-094",
    "name": "Midea Table Blender 1.5 LTR - BLACK",
    "brand": "Midea",
    "brandId": "midea",
    "model": "BL2518",
    "category": "kitchen",
    "images": [],
    "price": 249,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🍳",
    "color": "#00a0e9",
    "tags": [
      "midea",
      "kitchen"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "1.5 LTR - BLACK"
    },
    "oldPrice": 329,
    "discount": 24
  },
  {
    "id": "midea-095",
    "name": "Midea Table Blender 1.5 LTR - WHITE",
    "brand": "Midea",
    "brandId": "midea",
    "model": "MJ-BL40G1",
    "category": "kitchen",
    "images": [],
    "price": 449,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🍳",
    "color": "#00a0e9",
    "tags": [
      "midea",
      "kitchen"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "1.5 LTR - WHITE"
    },
    "oldPrice": 529,
    "discount": 15
  },
  {
    "id": "midea-096",
    "name": "Midea Table Blender 1.5 LTR - WHITE",
    "brand": "Midea",
    "brandId": "midea",
    "model": "MJ-BL2516CEE-MP01S",
    "category": "kitchen",
    "images": [],
    "price": 299,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🍳",
    "color": "#00a0e9",
    "tags": [
      "midea",
      "kitchen"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "1.5 LTR - WHITE"
    },
    "oldPrice": 499,
    "discount": 40
  },
  {
    "id": "midea-097",
    "name": "Midea Stand Blender 1.5 LTR - BLACK",
    "brand": "Midea",
    "brandId": "midea",
    "model": "MJ-BL6006W",
    "category": "kitchen",
    "images": [],
    "price": 399,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🍳",
    "color": "#00a0e9",
    "tags": [
      "midea",
      "kitchen"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "1.5 LTR - BLACK"
    },
    "oldPrice": 469,
    "discount": 15
  },
  {
    "id": "midea-098",
    "name": "Midea Stand Blender 1 LTR - BLACK",
    "brand": "Midea",
    "brandId": "midea",
    "model": "MJ-BL6008BW",
    "category": "kitchen",
    "images": [],
    "price": 299,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🍳",
    "color": "#00a0e9",
    "tags": [
      "midea",
      "kitchen"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "1 LTR - BLACK"
    },
    "oldPrice": 399,
    "discount": 25
  },
  {
    "id": "midea-099",
    "name": "Midea Stand Blender 800W- WHITE",
    "brand": "Midea",
    "brandId": "midea",
    "model": "MJ-FP8003W",
    "category": "kitchen",
    "images": [],
    "price": 599,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🍳",
    "color": "#00a0e9",
    "tags": [
      "midea",
      "kitchen"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "800W- WHITE"
    },
    "oldPrice": 699,
    "discount": 14
  },
  {
    "id": "midea-100",
    "name": "Midea Rice Cooker 1 LTR- GOLD",
    "brand": "Midea",
    "brandId": "midea",
    "model": "YJ308J",
    "category": "kitchen",
    "images": [],
    "price": 349,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🍳",
    "color": "#00a0e9",
    "tags": [
      "midea",
      "kitchen"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "1 LTR- GOLD"
    },
    "oldPrice": 379,
    "discount": 8
  },
  {
    "id": "midea-101",
    "name": "Midea Rice Cooker 1.8 LTR- GOLD",
    "brand": "Midea",
    "brandId": "midea",
    "model": "YJ508J",
    "category": "kitchen",
    "images": [],
    "price": 379,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🍳",
    "color": "#00a0e9",
    "tags": [
      "midea",
      "kitchen"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "1.8 LTR- GOLD"
    },
    "oldPrice": 399,
    "discount": 5
  },
  {
    "id": "midea-102",
    "name": "Midea Hand Blender 600W-BLACK",
    "brand": "Midea",
    "brandId": "midea",
    "model": "MJ-BH6001W",
    "category": "kitchen",
    "images": [],
    "price": 399,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🍳",
    "color": "#00a0e9",
    "tags": [
      "midea",
      "kitchen"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "600W-BLACK"
    },
    "oldPrice": 449,
    "discount": 11
  },
  {
    "id": "midea-103",
    "name": "Midea Electric Pressure Cooker 1000W",
    "brand": "Midea",
    "brandId": "midea",
    "model": "MY-CS6037WP2",
    "category": "kitchen",
    "images": [],
    "price": 899,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🍳",
    "color": "#00a0e9",
    "tags": [
      "midea",
      "kitchen"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "1000W"
    },
    "oldPrice": 999,
    "discount": 10
  },
  {
    "id": "midea-104",
    "name": "Midea Electric Pressure Cooker 1000W",
    "brand": "Midea",
    "brandId": "midea",
    "model": "MY-CS8037WP2",
    "category": "kitchen",
    "images": [],
    "price": 999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🍳",
    "color": "#00a0e9",
    "tags": [
      "midea",
      "kitchen"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "1000W"
    },
    "oldPrice": 1199,
    "discount": 17
  },
  {
    "id": "nasco-001",
    "name": "NASCO Led Flat 24''",
    "brand": "NASCO",
    "brandId": "nasco",
    "model": "NAS-J24FB",
    "category": "tv",
    "images": [],
    "price": 699,
    "rating": 4.5,
    "reviews": 0,
    "icon": "📺",
    "color": "#003087",
    "tags": [
      "nasco",
      "tv"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "24\""
    },
    "oldPrice": 1099,
    "discount": 36
  },
  {
    "id": "nasco-002",
    "name": "NASCO Led Flat",
    "brand": "NASCO",
    "brandId": "nasco",
    "model": "NAS-B24FB-A",
    "category": "tv",
    "images": [],
    "price": 649,
    "rating": 4.5,
    "reviews": 0,
    "icon": "📺",
    "color": "#003087",
    "tags": [
      "nasco",
      "tv"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {},
    "oldPrice": 1099,
    "discount": 41
  },
  {
    "id": "nasco-003",
    "name": "NASCO Led Flat 32\"",
    "brand": "NASCO",
    "brandId": "nasco",
    "model": "NAS-J32FBFL",
    "category": "tv",
    "images": [],
    "price": 999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "📺",
    "color": "#003087",
    "tags": [
      "nasco",
      "tv"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "32\""
    },
    "oldPrice": 1499,
    "discount": 33
  },
  {
    "id": "nasco-004",
    "name": "NASCO Led Flat",
    "brand": "NASCO",
    "brandId": "nasco",
    "model": "NAS-B32FBFL",
    "category": "tv",
    "images": [],
    "price": 999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "📺",
    "color": "#003087",
    "tags": [
      "nasco",
      "tv"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {},
    "oldPrice": 1499,
    "discount": 33
  },
  {
    "id": "nasco-005",
    "name": "NASCO Led Flat 43 ''",
    "brand": "NASCO",
    "brandId": "nasco",
    "model": "NAS-B43FBFL",
    "category": "tv",
    "images": [],
    "price": 1999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "📺",
    "color": "#003087",
    "tags": [
      "nasco",
      "tv"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "43 \""
    },
    "oldPrice": 2699,
    "discount": 26
  },
  {
    "id": "nasco-006",
    "name": "NASCO Led Flat 43 ''",
    "brand": "NASCO",
    "brandId": "nasco",
    "model": "NAS-J43FBFL",
    "category": "tv",
    "images": [],
    "price": 1999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "📺",
    "color": "#003087",
    "tags": [
      "nasco",
      "tv"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "43 \""
    },
    "oldPrice": 2699,
    "discount": 26
  },
  {
    "id": "nasco-007",
    "name": "NASCO Split Ac - R410 Gas-Eco 12000 Btu/h",
    "brand": "NASCO",
    "brandId": "nasco",
    "model": "NAS-J12-N1-ECO",
    "category": "ac",
    "images": [],
    "price": 2899,
    "rating": 4.5,
    "reviews": 0,
    "icon": "❄️",
    "color": "#003087",
    "tags": [
      "nasco",
      "ac"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "12000 Btu/h"
    },
    "oldPrice": 3499,
    "discount": 17
  },
  {
    "id": "nasco-008",
    "name": "NASCO Split Ac - R32 Gas 12000 Btu/h",
    "brand": "NASCO",
    "brandId": "nasco",
    "model": "NAS-T12V1-NI",
    "category": "ac",
    "images": [],
    "price": 2899,
    "rating": 4.5,
    "reviews": 0,
    "icon": "❄️",
    "color": "#003087",
    "tags": [
      "nasco",
      "ac"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "12000 Btu/h"
    },
    "oldPrice": 3499,
    "discount": 17
  },
  {
    "id": "nasco-009",
    "name": "NASCO Split Ac - R32 Mirror 12000 Btu/h",
    "brand": "NASCO",
    "brandId": "nasco",
    "model": "NAS-MR12N1-MIRROR",
    "category": "ac",
    "images": [],
    "price": 3199,
    "rating": 4.5,
    "reviews": 0,
    "icon": "❄️",
    "color": "#003087",
    "tags": [
      "nasco",
      "ac"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "12000 Btu/h"
    },
    "oldPrice": 4149,
    "discount": 23
  },
  {
    "id": "nasco-010",
    "name": "NASCO Split Ac - R32 Mirror 18000 Btu/h",
    "brand": "NASCO",
    "brandId": "nasco",
    "model": "NAS-MR18N1-MIRROR",
    "category": "ac",
    "images": [],
    "price": 5199,
    "rating": 4.5,
    "reviews": 0,
    "icon": "❄️",
    "color": "#003087",
    "tags": [
      "nasco",
      "ac"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "18000 Btu/h"
    },
    "oldPrice": 6749,
    "discount": 23
  },
  {
    "id": "nasco-011",
    "name": "NASCO Split Ac - R32 Mirror 24000 Btu/h",
    "brand": "NASCO",
    "brandId": "nasco",
    "model": "NAS-MR24N1-MIRROR",
    "category": "ac",
    "images": [],
    "price": 6999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "❄️",
    "color": "#003087",
    "tags": [
      "nasco",
      "ac"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "24000 Btu/h"
    },
    "oldPrice": 8549,
    "discount": 18
  },
  {
    "id": "nasco-012",
    "name": "NASCO Split Ac- R410 Gas White 12000 Btu/h",
    "brand": "NASCO",
    "brandId": "nasco",
    "model": "NAS-T12N1",
    "category": "ac",
    "images": [],
    "price": 2999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "❄️",
    "color": "#003087",
    "tags": [
      "nasco",
      "ac"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "12000 Btu/h"
    },
    "oldPrice": 3949,
    "discount": 24
  },
  {
    "id": "nasco-013",
    "name": "NASCO Split Ac- R410 Gas White 18000 Btu/h",
    "brand": "NASCO",
    "brandId": "nasco",
    "model": "NAS-T18N1",
    "category": "ac",
    "images": [],
    "price": 4899,
    "rating": 4.5,
    "reviews": 0,
    "icon": "❄️",
    "color": "#003087",
    "tags": [
      "nasco",
      "ac"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "18000 Btu/h"
    },
    "oldPrice": 6549,
    "discount": 25
  },
  {
    "id": "nasco-014",
    "name": "NASCO Split Ac- R410 Gas White 24000 Btu/h",
    "brand": "NASCO",
    "brandId": "nasco",
    "model": "NAS-T24N1",
    "category": "ac",
    "images": [],
    "price": 6999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "❄️",
    "color": "#003087",
    "tags": [
      "nasco",
      "ac"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "24000 Btu/h"
    },
    "oldPrice": 9599,
    "discount": 27
  },
  {
    "id": "nasco-015",
    "name": "NASCO Split Ac- R410- Black 18000 Btu/h",
    "brand": "NASCO",
    "brandId": "nasco",
    "model": "NAS-J18-V1B",
    "category": "ac",
    "images": [],
    "price": 4899,
    "rating": 4.5,
    "reviews": 0,
    "icon": "❄️",
    "color": "#003087",
    "tags": [
      "nasco",
      "ac"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "18000 Btu/h"
    },
    "oldPrice": 5999,
    "discount": 18
  },
  {
    "id": "nasco-016",
    "name": "NASCO Split Ac- R410 Dual Inverter 18000 Btu/h",
    "brand": "NASCO",
    "brandId": "nasco",
    "model": "NAS-J18-V1",
    "category": "ac",
    "images": [],
    "price": 4999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "❄️",
    "color": "#003087",
    "tags": [
      "nasco",
      "ac"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "18000 Btu/h"
    },
    "oldPrice": 6499,
    "discount": 23
  },
  {
    "id": "nasco-017",
    "name": "NASCO Split Ac- R32 Inverter 12000 Btu/h",
    "brand": "NASCO",
    "brandId": "nasco",
    "model": "NAS-A12INV-X-R32",
    "category": "ac",
    "images": [],
    "price": 3299,
    "rating": 4.5,
    "reviews": 0,
    "icon": "❄️",
    "color": "#003087",
    "tags": [
      "nasco",
      "ac"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "12000 Btu/h"
    },
    "oldPrice": 4599,
    "discount": 28
  },
  {
    "id": "nasco-018",
    "name": "NASCO Split Ac- R32 Inverter 18000 Btu/h",
    "brand": "NASCO",
    "brandId": "nasco",
    "model": "NAS-A18INV-X-R32",
    "category": "ac",
    "images": [],
    "price": 4999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "❄️",
    "color": "#003087",
    "tags": [
      "nasco",
      "ac"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "18000 Btu/h"
    },
    "oldPrice": 6499,
    "discount": 23
  },
  {
    "id": "nasco-019",
    "name": "NASCO Split Ac- R32 Inverter 24000 Btu/h",
    "brand": "NASCO",
    "brandId": "nasco",
    "model": "NAS-A24INV-X-R32",
    "category": "ac",
    "images": [],
    "price": 6999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "❄️",
    "color": "#003087",
    "tags": [
      "nasco",
      "ac"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "24000 Btu/h"
    },
    "oldPrice": 9149,
    "discount": 23
  },
  {
    "id": "nasco-020",
    "name": "NASCO Floor Standing Acs 18000 Btu/h",
    "brand": "NASCO",
    "brandId": "nasco",
    "model": "NAS-JFS-18N1",
    "category": "ac",
    "images": [],
    "price": 6799,
    "rating": 4.5,
    "reviews": 0,
    "icon": "❄️",
    "color": "#003087",
    "tags": [
      "nasco",
      "ac"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "18000 Btu/h"
    },
    "oldPrice": 9899,
    "discount": 31
  },
  {
    "id": "nasco-021",
    "name": "NASCO Floor Standing Acs 24000 BTU/H",
    "brand": "NASCO",
    "brandId": "nasco",
    "model": "NAS-JFS-24N1",
    "category": "ac",
    "images": [],
    "price": 8999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "❄️",
    "color": "#003087",
    "tags": [
      "nasco",
      "ac"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "24000 BTU/H"
    },
    "oldPrice": 12449,
    "discount": 28
  },
  {
    "id": "nasco-022",
    "name": "NASCO Round Floor Standing Acs - Inverter 18000 Btu/h",
    "brand": "NASCO",
    "brandId": "nasco",
    "model": "NAS-TFSI-18N1",
    "category": "ac",
    "images": [],
    "price": 5999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "❄️",
    "color": "#003087",
    "tags": [
      "nasco",
      "ac"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "18000 Btu/h"
    },
    "oldPrice": 10749,
    "discount": 44
  },
  {
    "id": "nasco-023",
    "name": "NASCO Round Floor Standing Acs - Inverter 24000 Btu/h",
    "brand": "NASCO",
    "brandId": "nasco",
    "model": "NAS-TFSI-24N1",
    "category": "ac",
    "images": [],
    "price": 6999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "❄️",
    "color": "#003087",
    "tags": [
      "nasco",
      "ac"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "24000 Btu/h"
    },
    "oldPrice": 12449,
    "discount": 44
  },
  {
    "id": "nasco-024",
    "name": "NASCO Refrigerators-French Door 421 L",
    "brand": "NASCO",
    "brandId": "nasco",
    "model": "NASF2-68FDR",
    "category": "fridge",
    "images": [],
    "price": 8999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🧊",
    "color": "#003087",
    "tags": [
      "nasco",
      "fridge"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "421 L"
    },
    "oldPrice": 10999,
    "discount": 18
  },
  {
    "id": "nasco-025",
    "name": "NASCO Refrigerators-French Door 360 L",
    "brand": "NASCO",
    "brandId": "nasco",
    "model": "NASF2-400FDR",
    "category": "fridge",
    "images": [],
    "price": 6999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🧊",
    "color": "#003087",
    "tags": [
      "nasco",
      "fridge"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "360 L"
    },
    "oldPrice": 7999,
    "discount": 13
  },
  {
    "id": "nasco-026",
    "name": "NASCO Refrigerators-Side By Side 425 L",
    "brand": "NASCO",
    "brandId": "nasco",
    "model": "NASF2-55SK",
    "category": "fridge",
    "images": [],
    "price": 7999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🧊",
    "color": "#003087",
    "tags": [
      "nasco",
      "fridge"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "425 L"
    },
    "oldPrice": 10799,
    "discount": 26
  },
  {
    "id": "nasco-027",
    "name": "NASCO Refrigerators-Side By Side 400 L",
    "brand": "NASCO",
    "brandId": "nasco",
    "model": "NASF2-66.1FF",
    "category": "fridge",
    "images": [],
    "price": 6999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🧊",
    "color": "#003087",
    "tags": [
      "nasco",
      "fridge"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "400 L"
    },
    "oldPrice": 9999,
    "discount": 30
  },
  {
    "id": "nasco-028",
    "name": "NASCO Refregerator- Top Mount - No Frost 401 L",
    "brand": "NASCO",
    "brandId": "nasco",
    "model": "NASF2-500WD",
    "category": "fridge",
    "images": [],
    "price": 7999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🧊",
    "color": "#003087",
    "tags": [
      "nasco",
      "fridge"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "401 L"
    },
    "oldPrice": 8999,
    "discount": 11
  },
  {
    "id": "nasco-029",
    "name": "NASCO Refregerator- Top Mount 320 L",
    "brand": "NASCO",
    "brandId": "nasco",
    "model": "NASF2-45",
    "category": "fridge",
    "images": [],
    "price": 4499,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🧊",
    "color": "#003087",
    "tags": [
      "nasco",
      "fridge"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "320 L"
    },
    "oldPrice": 6599,
    "discount": 32
  },
  {
    "id": "nasco-030",
    "name": "NASCO Refregerator- Top Mount 280 L",
    "brand": "NASCO",
    "brandId": "nasco",
    "model": "NASF2-320FLD",
    "category": "fridge",
    "images": [],
    "price": 3999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🧊",
    "color": "#003087",
    "tags": [
      "nasco",
      "fridge"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "280 L"
    },
    "oldPrice": 4999,
    "discount": 20
  },
  {
    "id": "nasco-031",
    "name": "NASCO Refregerator- Top Mount 210 L",
    "brand": "NASCO",
    "brandId": "nasco",
    "model": "NASF2-250FLD",
    "category": "fridge",
    "images": [],
    "price": 3799,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🧊",
    "color": "#003087",
    "tags": [
      "nasco",
      "fridge"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "210 L"
    },
    "oldPrice": 4599,
    "discount": 17
  },
  {
    "id": "nasco-032",
    "name": "NASCO Refregerator- Top Mount 207 L",
    "brand": "NASCO",
    "brandId": "nasco",
    "model": "NASF2-30",
    "category": "fridge",
    "images": [],
    "price": 3399,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🧊",
    "color": "#003087",
    "tags": [
      "nasco",
      "fridge"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "207 L"
    },
    "oldPrice": 3699,
    "discount": 8
  },
  {
    "id": "nasco-033",
    "name": "NASCO Refregerator- Top Mount 166 L",
    "brand": "NASCO",
    "brandId": "nasco",
    "model": "DF2-22",
    "category": "fridge",
    "images": [],
    "price": 2999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🧊",
    "color": "#003087",
    "tags": [
      "nasco",
      "fridge"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "166 L"
    },
    "oldPrice": 4349,
    "discount": 31
  },
  {
    "id": "nasco-034",
    "name": "NASCO Refregerator- Top Mount 166 L",
    "brand": "NASCO",
    "brandId": "nasco",
    "model": "NASF2-24",
    "category": "fridge",
    "images": [],
    "price": 2499,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🧊",
    "color": "#003087",
    "tags": [
      "nasco",
      "fridge"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "166 L"
    },
    "oldPrice": 2999,
    "discount": 17
  },
  {
    "id": "nasco-035",
    "name": "NASCO Refregerator- Top Mount 118 L",
    "brand": "NASCO",
    "brandId": "nasco",
    "model": "NASF2-15S",
    "category": "fridge",
    "images": [],
    "price": 1999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🧊",
    "color": "#003087",
    "tags": [
      "nasco",
      "fridge"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "118 L"
    },
    "oldPrice": 2899,
    "discount": 31
  },
  {
    "id": "nasco-036",
    "name": "NASCO Refregerator- Top Mount 95 L",
    "brand": "NASCO",
    "brandId": "nasco",
    "model": "NASF2-12S",
    "category": "fridge",
    "images": [],
    "price": 1849,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🧊",
    "color": "#003087",
    "tags": [
      "nasco",
      "fridge"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "95 L"
    },
    "oldPrice": 2349,
    "discount": 21
  },
  {
    "id": "nasco-037",
    "name": "NASCO Refrigerators-Bottom Freezer 147 L",
    "brand": "NASCO",
    "brandId": "nasco",
    "model": "DD2-20",
    "category": "fridge",
    "images": [],
    "price": 2899,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🧊",
    "color": "#003087",
    "tags": [
      "nasco",
      "fridge"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "147 L"
    },
    "oldPrice": 3799,
    "discount": 24
  },
  {
    "id": "nasco-038",
    "name": "NASCO Refrigerators-Bottom Freezer 268 L",
    "brand": "NASCO",
    "brandId": "nasco",
    "model": "NASD2-36",
    "category": "fridge",
    "images": [],
    "price": 6699,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🧊",
    "color": "#003087",
    "tags": [
      "nasco",
      "fridge"
    ],
    "badge": "",
    "description": "",
    "specs": {
      "Size": "268 L"
    }
  },
  {
    "id": "nasco-039",
    "name": "NASCO Refrigerators-Bottom Freezer 287 L",
    "brand": "NASCO",
    "brandId": "nasco",
    "model": "NASD2-44",
    "category": "fridge",
    "images": [],
    "price": 5199,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🧊",
    "color": "#003087",
    "tags": [
      "nasco",
      "fridge"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "287 L"
    },
    "oldPrice": 7149,
    "discount": 27
  },
  {
    "id": "nasco-040",
    "name": "NASCO Refrigerators-Bottom Freezer 307 L",
    "brand": "NASCO",
    "brandId": "nasco",
    "model": "NASD2-40WD",
    "category": "fridge",
    "images": [],
    "price": 4999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🧊",
    "color": "#003087",
    "tags": [
      "nasco",
      "fridge"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "307 L"
    },
    "oldPrice": 8299,
    "discount": 40
  },
  {
    "id": "nasco-041",
    "name": "NASCO Bed Side Fridge 41 L",
    "brand": "NASCO",
    "brandId": "nasco",
    "model": "NASF1-06",
    "category": "fridge",
    "images": [],
    "price": 1299,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🧊",
    "color": "#003087",
    "tags": [
      "nasco",
      "fridge"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "41 L"
    },
    "oldPrice": 1599,
    "discount": 19
  },
  {
    "id": "nasco-042",
    "name": "NASCO Refrigerator-Table Top 70 L",
    "brand": "NASCO",
    "brandId": "nasco",
    "model": "NASF1-09S",
    "category": "fridge",
    "images": [],
    "price": 1199,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🧊",
    "color": "#003087",
    "tags": [
      "nasco",
      "fridge"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "70 L"
    },
    "oldPrice": 1749,
    "discount": 31
  },
  {
    "id": "nasco-043",
    "name": "NASCO Refrigerator-Table Top 76 L",
    "brand": "NASCO",
    "brandId": "nasco",
    "model": "NASF1-95FL",
    "category": "fridge",
    "images": [],
    "price": 1199,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🧊",
    "color": "#003087",
    "tags": [
      "nasco",
      "fridge"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "76 L"
    },
    "oldPrice": 1799,
    "discount": 33
  },
  {
    "id": "nasco-044",
    "name": "NASCO Refrigerator-Table Top 92 L",
    "brand": "NASCO",
    "brandId": "nasco",
    "model": "NASF1-110FL-B",
    "category": "fridge",
    "images": [],
    "price": 1299,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🧊",
    "color": "#003087",
    "tags": [
      "nasco",
      "fridge"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "92 L"
    },
    "oldPrice": 1899,
    "discount": 32
  },
  {
    "id": "nasco-045",
    "name": "NASCO Refrigerator-Table Top 91 L",
    "brand": "NASCO",
    "brandId": "nasco",
    "model": "NASF1-11S",
    "category": "fridge",
    "images": [],
    "price": 1399,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🧊",
    "color": "#003087",
    "tags": [
      "nasco",
      "fridge"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "91 L"
    },
    "oldPrice": 1899,
    "discount": 26
  },
  {
    "id": "nasco-046",
    "name": "NASCO Refrigerator New Models - Top Freezer 86 L",
    "brand": "NASCO",
    "brandId": "nasco",
    "model": "NASF2-11FL-B-MIRROR",
    "category": "fridge",
    "images": [],
    "price": 1799,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🧊",
    "color": "#003087",
    "tags": [
      "nasco",
      "fridge"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "86 L"
    },
    "oldPrice": 2199,
    "discount": 18
  },
  {
    "id": "nasco-047",
    "name": "NASCO Refrigerator New Models - Top Freezer 102 L",
    "brand": "NASCO",
    "brandId": "nasco",
    "model": "NASF2-12FL-B",
    "category": "fridge",
    "images": [],
    "price": 1899,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🧊",
    "color": "#003087",
    "tags": [
      "nasco",
      "fridge"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "102 L"
    },
    "oldPrice": 2399,
    "discount": 21
  },
  {
    "id": "nasco-048",
    "name": "NASCO Retro New Models - Table Top 86 L",
    "brand": "NASCO",
    "brandId": "nasco",
    "model": "NASF2-110RT",
    "category": "fridge",
    "images": [],
    "price": 2299,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🧊",
    "color": "#003087",
    "tags": [
      "nasco",
      "fridge"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "86 L"
    },
    "oldPrice": 2349,
    "discount": 2
  },
  {
    "id": "nasco-049",
    "name": "NASCO Refrigerator New Models - Top Freezer 112 L",
    "brand": "NASCO",
    "brandId": "nasco",
    "model": "NASF2-13FL",
    "category": "fridge",
    "images": [],
    "price": 1799,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🧊",
    "color": "#003087",
    "tags": [
      "nasco",
      "fridge"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "112 L"
    },
    "oldPrice": 2649,
    "discount": 32
  },
  {
    "id": "nasco-050",
    "name": "NASCO Refrigerator New Models - Top Freezer 138 L",
    "brand": "NASCO",
    "brandId": "nasco",
    "model": "NASF2-16FL",
    "category": "fridge",
    "images": [],
    "price": 1899,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🧊",
    "color": "#003087",
    "tags": [
      "nasco",
      "fridge"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "138 L"
    },
    "oldPrice": 2999,
    "discount": 37
  },
  {
    "id": "nasco-051",
    "name": "NASCO Refrigerator New Models - Top Freezer 158 L",
    "brand": "NASCO",
    "brandId": "nasco",
    "model": "NASF2-18FL",
    "category": "fridge",
    "images": [],
    "price": 1999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🧊",
    "color": "#003087",
    "tags": [
      "nasco",
      "fridge"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "158 L"
    },
    "oldPrice": 3249,
    "discount": 38
  },
  {
    "id": "nasco-052",
    "name": "NASCO Refrigerator New Models - Bottom Freezer 106 L",
    "brand": "NASCO",
    "brandId": "nasco",
    "model": "NASD2-10FL",
    "category": "fridge",
    "images": [],
    "price": 1799,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🧊",
    "color": "#003087",
    "tags": [
      "nasco",
      "fridge"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "106 L"
    },
    "oldPrice": 2649,
    "discount": 32
  },
  {
    "id": "nasco-053",
    "name": "NASCO Refrigerator New Models - Bottom Freezer 106 L",
    "brand": "NASCO",
    "brandId": "nasco",
    "model": "NASD2-10FL-B",
    "category": "fridge",
    "images": [],
    "price": 1799,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🧊",
    "color": "#003087",
    "tags": [
      "nasco",
      "fridge"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "106 L"
    },
    "oldPrice": 2649,
    "discount": 32
  },
  {
    "id": "nasco-054",
    "name": "NASCO Refrigerator New Models - Bottom Freezer 116 L",
    "brand": "NASCO",
    "brandId": "nasco",
    "model": "NASD2-14FL",
    "category": "fridge",
    "images": [],
    "price": 2299,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🧊",
    "color": "#003087",
    "tags": [
      "nasco",
      "fridge"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "116 L"
    },
    "oldPrice": 2799,
    "discount": 18
  },
  {
    "id": "nasco-055",
    "name": "NASCO Refrigerator New Models - Bottom Freezer 136 L",
    "brand": "NASCO",
    "brandId": "nasco",
    "model": "NASD2-18FL-B",
    "category": "fridge",
    "images": [],
    "price": 2599,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🧊",
    "color": "#003087",
    "tags": [
      "nasco",
      "fridge"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "136 L"
    },
    "oldPrice": 3249,
    "discount": 20
  },
  {
    "id": "nasco-056",
    "name": "NASCO Refrigerator New Models - Bottom Freezer 136 L",
    "brand": "NASCO",
    "brandId": "nasco",
    "model": "NASD2-18Fl-G",
    "category": "fridge",
    "images": [],
    "price": 2399,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🧊",
    "color": "#003087",
    "tags": [
      "nasco",
      "fridge"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "136 L"
    },
    "oldPrice": 3249,
    "discount": 26
  },
  {
    "id": "nasco-057",
    "name": "NASCO Refrigerator New Models - Bottom Freezer 158 L",
    "brand": "NASCO",
    "brandId": "nasco",
    "model": "NASD2-20FL",
    "category": "fridge",
    "images": [],
    "price": 2699,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🧊",
    "color": "#003087",
    "tags": [
      "nasco",
      "fridge"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "158 L"
    },
    "oldPrice": 3449,
    "discount": 22
  },
  {
    "id": "nasco-058",
    "name": "NASCO Refrigerator New Models - Bottom Freezer 196 L",
    "brand": "NASCO",
    "brandId": "nasco",
    "model": "NASD2-24FL",
    "category": "fridge",
    "images": [],
    "price": 3499,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🧊",
    "color": "#003087",
    "tags": [
      "nasco",
      "fridge"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "196 L"
    },
    "oldPrice": 4049,
    "discount": 14
  },
  {
    "id": "nasco-059",
    "name": "NASCO Standing Freezer 150 L",
    "brand": "NASCO",
    "brandId": "nasco",
    "model": "NASD1-225FL",
    "category": "fridge",
    "images": [],
    "price": 2999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🧊",
    "color": "#003087",
    "tags": [
      "nasco",
      "fridge"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "150 L"
    },
    "oldPrice": 3599,
    "discount": 17
  },
  {
    "id": "nasco-060",
    "name": "NASCO Standing Freezer 166 L",
    "brand": "NASCO",
    "brandId": "nasco",
    "model": "NASD1-200SK",
    "category": "fridge",
    "images": [],
    "price": 3499,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🧊",
    "color": "#003087",
    "tags": [
      "nasco",
      "fridge"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "166 L"
    },
    "oldPrice": 3599,
    "discount": 3
  },
  {
    "id": "nasco-061",
    "name": "NASCO Standing Freezer 225 L",
    "brand": "NASCO",
    "brandId": "nasco",
    "model": "DD1-33",
    "category": "fridge",
    "images": [],
    "price": 4899,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🧊",
    "color": "#003087",
    "tags": [
      "nasco",
      "fridge"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "225 L"
    },
    "oldPrice": 6849,
    "discount": 28
  },
  {
    "id": "nasco-062",
    "name": "NASCO Display Fridges 110 L",
    "brand": "NASCO",
    "brandId": "nasco",
    "model": "NAS-FL110SC",
    "category": "fridge",
    "images": [],
    "price": 2299,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🧊",
    "color": "#003087",
    "tags": [
      "nasco",
      "fridge"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "110 L"
    },
    "oldPrice": 2999,
    "discount": 23
  },
  {
    "id": "nasco-063",
    "name": "NASCO Display Fridges 200 L",
    "brand": "NASCO",
    "brandId": "nasco",
    "model": "NAS-FL200SC",
    "category": "fridge",
    "images": [],
    "price": 3599,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🧊",
    "color": "#003087",
    "tags": [
      "nasco",
      "fridge"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "200 L"
    },
    "oldPrice": 3999,
    "discount": 10
  },
  {
    "id": "nasco-064",
    "name": "NASCO Display Fridges 288L",
    "brand": "NASCO",
    "brandId": "nasco",
    "model": "NAS-FL350-1DR",
    "category": "fridge",
    "images": [],
    "price": 4499,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🧊",
    "color": "#003087",
    "tags": [
      "nasco",
      "fridge"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "288L"
    },
    "oldPrice": 6149,
    "discount": 27
  },
  {
    "id": "nasco-065",
    "name": "NASCO Display Fridges 298L",
    "brand": "NASCO",
    "brandId": "nasco",
    "model": "NAS-FL360-1DR",
    "category": "fridge",
    "images": [],
    "price": 4799,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🧊",
    "color": "#003087",
    "tags": [
      "nasco",
      "fridge"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "298L"
    },
    "oldPrice": 6699,
    "discount": 28
  },
  {
    "id": "nasco-066",
    "name": "NASCO Display Fridges 358L",
    "brand": "NASCO",
    "brandId": "nasco",
    "model": "NAS-FL400-1DR",
    "category": "fridge",
    "images": [],
    "price": 5699,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🧊",
    "color": "#003087",
    "tags": [
      "nasco",
      "fridge"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "358L"
    },
    "oldPrice": 7149,
    "discount": 20
  },
  {
    "id": "nasco-067",
    "name": "NASCO Display Fridges 350 L",
    "brand": "NASCO",
    "brandId": "nasco",
    "model": "NAS-375DFG",
    "category": "fridge",
    "images": [],
    "price": 5999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🧊",
    "color": "#003087",
    "tags": [
      "nasco",
      "fridge"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "350 L"
    },
    "oldPrice": 7499,
    "discount": 20
  },
  {
    "id": "nasco-068",
    "name": "NASCO Display Fridges 728 L",
    "brand": "NASCO",
    "brandId": "nasco",
    "model": "NAS-FL850-2DR",
    "category": "fridge",
    "images": [],
    "price": 11999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🧊",
    "color": "#003087",
    "tags": [
      "nasco",
      "fridge"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "728 L"
    },
    "oldPrice": 14999,
    "discount": 20
  },
  {
    "id": "nasco-069",
    "name": "NASCO Display Fridges 1080 L",
    "brand": "NASCO",
    "brandId": "nasco",
    "model": "NAS-FL1300-2DR",
    "category": "fridge",
    "images": [],
    "price": 15999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🧊",
    "color": "#003087",
    "tags": [
      "nasco",
      "fridge"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "1080 L"
    },
    "oldPrice": 16999,
    "discount": 6
  },
  {
    "id": "nasco-070",
    "name": "NASCO Display Fridges 1200 L",
    "brand": "NASCO",
    "brandId": "nasco",
    "model": "NAS-FL1400-3DR",
    "category": "fridge",
    "images": [],
    "price": 17999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🧊",
    "color": "#003087",
    "tags": [
      "nasco",
      "fridge"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "1200 L"
    },
    "oldPrice": 18999,
    "discount": 5
  },
  {
    "id": "nasco-071",
    "name": "NASCO Chest Freezers 150L",
    "brand": "NASCO",
    "brandId": "nasco",
    "model": "NAS-200FL-G",
    "category": "fridge",
    "images": [],
    "price": 1999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🧊",
    "color": "#003087",
    "tags": [
      "nasco",
      "fridge"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "150L"
    },
    "oldPrice": 3149,
    "discount": 37
  },
  {
    "id": "nasco-072",
    "name": "NASCO Chest Freezers 145 L",
    "brand": "NASCO",
    "brandId": "nasco",
    "model": "NAS-160",
    "category": "fridge",
    "images": [],
    "price": 2099,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🧊",
    "color": "#003087",
    "tags": [
      "nasco",
      "fridge"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "145 L"
    },
    "oldPrice": 3099,
    "discount": 32
  },
  {
    "id": "nasco-073",
    "name": "NASCO Chest Freezers 200 L",
    "brand": "NASCO",
    "brandId": "nasco",
    "model": "NAS-210",
    "category": "fridge",
    "images": [],
    "price": 2899,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🧊",
    "color": "#003087",
    "tags": [
      "nasco",
      "fridge"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "200 L"
    },
    "oldPrice": 3899,
    "discount": 26
  },
  {
    "id": "nasco-074",
    "name": "NASCO Chest Freezers 200 L",
    "brand": "NASCO",
    "brandId": "nasco",
    "model": "NAS-250FL",
    "category": "fridge",
    "images": [],
    "price": 2799,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🧊",
    "color": "#003087",
    "tags": [
      "nasco",
      "fridge"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "200 L"
    },
    "oldPrice": 3549,
    "discount": 21
  },
  {
    "id": "nasco-075",
    "name": "NASCO Chest Freezers 250 L",
    "brand": "NASCO",
    "brandId": "nasco",
    "model": "NAS-350FL",
    "category": "fridge",
    "images": [],
    "price": 3199,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🧊",
    "color": "#003087",
    "tags": [
      "nasco",
      "fridge"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "250 L"
    },
    "oldPrice": 4599,
    "discount": 30
  },
  {
    "id": "nasco-076",
    "name": "NASCO Chest Freezers 251 L",
    "brand": "NASCO",
    "brandId": "nasco",
    "model": "NAS-300",
    "category": "fridge",
    "images": [],
    "price": 3199,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🧊",
    "color": "#003087",
    "tags": [
      "nasco",
      "fridge"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "251 L"
    },
    "oldPrice": 4799,
    "discount": 33
  },
  {
    "id": "nasco-077",
    "name": "NASCO Chest Freezers 288L",
    "brand": "NASCO",
    "brandId": "nasco",
    "model": "NAS-400FL-G",
    "category": "fridge",
    "images": [],
    "price": 3799,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🧊",
    "color": "#003087",
    "tags": [
      "nasco",
      "fridge"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "288L"
    },
    "oldPrice": 5099,
    "discount": 25
  },
  {
    "id": "nasco-078",
    "name": "NASCO Chest Freezers 290 L",
    "brand": "NASCO",
    "brandId": "nasco",
    "model": "NAS-360",
    "category": "fridge",
    "images": [],
    "price": 3999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🧊",
    "color": "#003087",
    "tags": [
      "nasco",
      "fridge"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "290 L"
    },
    "oldPrice": 5399,
    "discount": 26
  },
  {
    "id": "nasco-079",
    "name": "NASCO Chest Freezers 318 L",
    "brand": "NASCO",
    "brandId": "nasco",
    "model": "NAS-425FL-G",
    "category": "fridge",
    "images": [],
    "price": 3999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🧊",
    "color": "#003087",
    "tags": [
      "nasco",
      "fridge"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "318 L"
    },
    "oldPrice": 5399,
    "discount": 26
  },
  {
    "id": "nasco-080",
    "name": "NASCO Chest Freezers 380 L",
    "brand": "NASCO",
    "brandId": "nasco",
    "model": "NAS-420",
    "category": "fridge",
    "images": [],
    "price": 4999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🧊",
    "color": "#003087",
    "tags": [
      "nasco",
      "fridge"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "380 L"
    },
    "oldPrice": 6249,
    "discount": 20
  },
  {
    "id": "nasco-081",
    "name": "NASCO Chest Freezers 400L",
    "brand": "NASCO",
    "brandId": "nasco",
    "model": "NAS-475FL-B",
    "category": "fridge",
    "images": [],
    "price": 5299,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🧊",
    "color": "#003087",
    "tags": [
      "nasco",
      "fridge"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "400L"
    },
    "oldPrice": 5999,
    "discount": 12
  },
  {
    "id": "nasco-082",
    "name": "NASCO Display Chest Freezer 239L",
    "brand": "NASCO",
    "brandId": "nasco",
    "model": "NAS-FS305FL",
    "category": "fridge",
    "images": [],
    "price": 5499,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🧊",
    "color": "#003087",
    "tags": [
      "nasco",
      "fridge"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "239L"
    },
    "oldPrice": 6699,
    "discount": 18
  },
  {
    "id": "nasco-083",
    "name": "NASCO Display Chest Freezer 360L",
    "brand": "NASCO",
    "brandId": "nasco",
    "model": "NAS-FS405FL",
    "category": "fridge",
    "images": [],
    "price": 6299,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🧊",
    "color": "#003087",
    "tags": [
      "nasco",
      "fridge"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "360L"
    },
    "oldPrice": 7499,
    "discount": 16
  },
  {
    "id": "nasco-084",
    "name": "NASCO Microwaves - Grill 25 LTRS",
    "brand": "NASCO",
    "brandId": "nasco",
    "model": "EG925EFF",
    "category": "kitchen",
    "images": [],
    "price": 1499,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🍳",
    "color": "#003087",
    "tags": [
      "nasco",
      "kitchen"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "25 LTRS"
    },
    "oldPrice": 1999,
    "discount": 25
  },
  {
    "id": "nasco-085",
    "name": "NASCO Microwaves - Grill 36 LTRS",
    "brand": "NASCO",
    "brandId": "nasco",
    "model": "AG036AFK",
    "category": "kitchen",
    "images": [],
    "price": 1799,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🍳",
    "color": "#003087",
    "tags": [
      "nasco",
      "kitchen"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "36 LTRS"
    },
    "oldPrice": 2099,
    "discount": 14
  },
  {
    "id": "nasco-086",
    "name": "NASCO Microwaves - Solo 20 LTRS",
    "brand": "NASCO",
    "brandId": "nasco",
    "model": "MWO20NAS-2LV(B)",
    "category": "kitchen",
    "images": [],
    "price": 679,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🍳",
    "color": "#003087",
    "tags": [
      "nasco",
      "kitchen"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "20 LTRS"
    },
    "oldPrice": 849,
    "discount": 20
  },
  {
    "id": "nasco-087",
    "name": "NASCO Washing Machines ( Twin Top ) 5 KGS",
    "brand": "NASCO",
    "brandId": "nasco",
    "model": "NAS-05-TW",
    "category": "laundry",
    "images": [],
    "price": 999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🫧",
    "color": "#003087",
    "tags": [
      "nasco",
      "laundry"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "5 KGS"
    },
    "oldPrice": 1649,
    "discount": 39
  },
  {
    "id": "nasco-088",
    "name": "NASCO Washing Machines ( Twin Top ) 10 KGS",
    "brand": "NASCO",
    "brandId": "nasco",
    "model": "NASTT-JS100",
    "category": "laundry",
    "images": [],
    "price": 2199,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🫧",
    "color": "#003087",
    "tags": [
      "nasco",
      "laundry"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "10 KGS"
    },
    "oldPrice": 2399,
    "discount": 8
  },
  {
    "id": "nasco-089",
    "name": "NASCO Washing Machines (Top Load) 12 KGS",
    "brand": "NASCO",
    "brandId": "nasco",
    "model": "NASTL-B120FL",
    "category": "laundry",
    "images": [],
    "price": 3799,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🫧",
    "color": "#003087",
    "tags": [
      "nasco",
      "laundry"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "12 KGS"
    },
    "oldPrice": 3999,
    "discount": 5
  },
  {
    "id": "nasco-090",
    "name": "NASCO Washing Machines (Top Load) 8 KGS",
    "brand": "NASCO",
    "brandId": "nasco",
    "model": "NASTL-B80",
    "category": "laundry",
    "images": [],
    "price": 2799,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🫧",
    "color": "#003087",
    "tags": [
      "nasco",
      "laundry"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "8 KGS"
    },
    "oldPrice": 2999,
    "discount": 7
  },
  {
    "id": "nasco-091",
    "name": "NASCO Washing Machines (Front Load) 12 KGS",
    "brand": "NASCO",
    "brandId": "nasco",
    "model": "NASFL-JS12KG-S",
    "category": "laundry",
    "images": [],
    "price": 4999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🫧",
    "color": "#003087",
    "tags": [
      "nasco",
      "laundry"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "12 KGS"
    },
    "oldPrice": 5399,
    "discount": 7
  },
  {
    "id": "nasco-092",
    "name": "NASCO Washing Machines (Front Load) 10 KGS",
    "brand": "NASCO",
    "brandId": "nasco",
    "model": "NASFL-JS10KG-S",
    "category": "laundry",
    "images": [],
    "price": 4299,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🫧",
    "color": "#003087",
    "tags": [
      "nasco",
      "laundry"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "10 KGS"
    },
    "oldPrice": 5049,
    "discount": 15
  },
  {
    "id": "nasco-093",
    "name": "NASCO Washing Machines (Front Load) 8 KGS",
    "brand": "NASCO",
    "brandId": "nasco",
    "model": "NASFL-J8KG-S",
    "category": "laundry",
    "images": [],
    "price": 3399,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🫧",
    "color": "#003087",
    "tags": [
      "nasco",
      "laundry"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "8 KGS"
    },
    "oldPrice": 4599,
    "discount": 26
  },
  {
    "id": "nasco-094",
    "name": "NASCO Washing Machines (Front Load) 6 KGS",
    "brand": "NASCO",
    "brandId": "nasco",
    "model": "NASFL-J6KG-S",
    "category": "laundry",
    "images": [],
    "price": 2999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🫧",
    "color": "#003087",
    "tags": [
      "nasco",
      "laundry"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "6 KGS"
    },
    "oldPrice": 3699,
    "discount": 19
  },
  {
    "id": "nasco-095",
    "name": "NASCO Gas Cooker 4 BURNER",
    "brand": "NASCO",
    "brandId": "nasco",
    "model": "NASGC-50X50S-CTZ",
    "category": "kitchen",
    "images": [],
    "price": 1399,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🍳",
    "color": "#003087",
    "tags": [
      "nasco",
      "kitchen"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "4 BURNER"
    },
    "oldPrice": 2099,
    "discount": 33
  },
  {
    "id": "nasco-096",
    "name": "NASCO Gas Cooker",
    "brand": "NASCO",
    "brandId": "nasco",
    "model": "NASGC-50MO+ST-CTZ",
    "category": "kitchen",
    "images": [],
    "price": 1199,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🍳",
    "color": "#003087",
    "tags": [
      "nasco",
      "kitchen"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {},
    "oldPrice": 1749,
    "discount": 31
  },
  {
    "id": "nasco-097",
    "name": "NASCO Gas Cooker",
    "brand": "NASCO",
    "brandId": "nasco",
    "model": "NASGC-50MO-CTZ",
    "category": "kitchen",
    "images": [],
    "price": 999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🍳",
    "color": "#003087",
    "tags": [
      "nasco",
      "kitchen"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {},
    "oldPrice": 1649,
    "discount": 39
  },
  {
    "id": "nasco-098",
    "name": "NASCO Gas Cooker",
    "brand": "NASCO",
    "brandId": "nasco",
    "model": "NASGC-SNIPER50TB",
    "category": "kitchen",
    "images": [],
    "price": 1699,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🍳",
    "color": "#003087",
    "tags": [
      "nasco",
      "kitchen"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {},
    "oldPrice": 2099,
    "discount": 19
  },
  {
    "id": "nasco-099",
    "name": "NASCO Gas Cooker",
    "brand": "NASCO",
    "brandId": "nasco",
    "model": "NASGC-SNIPER50TS-G",
    "category": "kitchen",
    "images": [],
    "price": 1999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🍳",
    "color": "#003087",
    "tags": [
      "nasco",
      "kitchen"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {},
    "oldPrice": 2499,
    "discount": 20
  },
  {
    "id": "nasco-100",
    "name": "NASCO Gas Cooker",
    "brand": "NASCO",
    "brandId": "nasco",
    "model": "NASGC-LME60I",
    "category": "kitchen",
    "images": [],
    "price": 3299,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🍳",
    "color": "#003087",
    "tags": [
      "nasco",
      "kitchen"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {},
    "oldPrice": 4499,
    "discount": 27
  },
  {
    "id": "nasco-101",
    "name": "NASCO Gas Cooker 5 BURNERS",
    "brand": "NASCO",
    "brandId": "nasco",
    "model": "NASGC-LME90I",
    "category": "kitchen",
    "images": [],
    "price": 5199,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🍳",
    "color": "#003087",
    "tags": [
      "nasco",
      "kitchen"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "5 BURNERS"
    },
    "oldPrice": 8199,
    "discount": 37
  },
  {
    "id": "nasco-102",
    "name": "NASCO Gas Cooker",
    "brand": "NASCO",
    "brandId": "nasco",
    "model": "NASGC-LME90B",
    "category": "kitchen",
    "images": [],
    "price": 4999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🍳",
    "color": "#003087",
    "tags": [
      "nasco",
      "kitchen"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {},
    "oldPrice": 7849,
    "discount": 36
  },
  {
    "id": "nasco-103",
    "name": "NASCO Gas Cooker 5 BURNERS",
    "brand": "NASCO",
    "brandId": "nasco",
    "model": "NASGC-AMG80S",
    "category": "kitchen",
    "images": [],
    "price": 3799,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🍳",
    "color": "#003087",
    "tags": [
      "nasco",
      "kitchen"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "5 BURNERS"
    },
    "oldPrice": 5249,
    "discount": 28
  },
  {
    "id": "nasco-104",
    "name": "NASCO Electric Cooker 4 HOBS",
    "brand": "NASCO",
    "brandId": "nasco",
    "model": "NAS-DM4H109",
    "category": "kitchen",
    "images": [],
    "price": 2999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🍳",
    "color": "#003087",
    "tags": [
      "nasco",
      "kitchen"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "4 HOBS"
    },
    "oldPrice": 4599,
    "discount": 35
  },
  {
    "id": "nasco-105",
    "name": "NASCO Ice Maker 26 LB - BLACK",
    "brand": "NASCO",
    "brandId": "nasco",
    "model": "IMB1008-GS",
    "category": "small",
    "images": [],
    "price": 999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "⚡",
    "color": "#003087",
    "tags": [
      "nasco",
      "small"
    ],
    "badge": "PROMO",
    "description": "",
    "specs": {
      "Size": "26 LB - BLACK"
    },
    "oldPrice": 1299,
    "discount": 23
  },
  {
    "id": "nasco-106",
    "name": "NASCO Ice Maker 5 WATT",
    "brand": "NASCO",
    "brandId": "nasco",
    "model": "MKNAS-200",
    "category": "small",
    "images": [],
    "price": 249,
    "rating": 4.5,
    "reviews": 0,
    "icon": "⚡",
    "color": "#003087",
    "tags": [
      "nasco",
      "small"
    ],
    "badge": "",
    "description": "",
    "specs": {
      "Size": "5 WATT"
    }
  },
  {
    "id": "samsung-070",
    "name": "Samsung Video Wall 46''",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "LH46VMBUBGBXUE",
    "category": "commercial",
    "images": [],
    "price": 33299,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🖥️",
    "color": "#1428a0",
    "tags": [
      "samsung",
      "commercial"
    ],
    "badge": "",
    "description": "",
    "specs": {
      "Size": "46\""
    }
  },
  {
    "id": "samsung-071",
    "name": "Samsung Video Wall 55''",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "LH55VMBUBGBXEN",
    "category": "commercial",
    "images": [],
    "price": 37299,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🖥️",
    "color": "#1428a0",
    "tags": [
      "samsung",
      "commercial"
    ],
    "badge": "",
    "description": "",
    "specs": {
      "Size": "55\""
    }
  },
  {
    "id": "samsung-072",
    "name": "Samsung Video Wall",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "LH55VMCEBGBXUE",
    "category": "commercial",
    "images": [],
    "price": 39999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🖥️",
    "color": "#1428a0",
    "tags": [
      "samsung",
      "commercial"
    ],
    "badge": "",
    "description": "",
    "specs": {}
  },
  {
    "id": "samsung-073",
    "name": "Samsung Video Wall",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "LH55UDEBLBB/UE",
    "category": "commercial",
    "images": [],
    "price": 37299,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🖥️",
    "color": "#1428a0",
    "tags": [
      "samsung",
      "commercial"
    ],
    "badge": "",
    "description": "",
    "specs": {}
  },
  {
    "id": "samsung-074",
    "name": "Samsung Video Wall",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "LH55UDEHLBB/NG",
    "category": "commercial",
    "images": [],
    "price": 37299,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🖥️",
    "color": "#1428a0",
    "tags": [
      "samsung",
      "commercial"
    ],
    "badge": "",
    "description": "",
    "specs": {}
  },
  {
    "id": "samsung-075",
    "name": "Samsung Video Wall",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "LH55VMTUBGBXUE",
    "category": "commercial",
    "images": [],
    "price": 37299,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🖥️",
    "color": "#1428a0",
    "tags": [
      "samsung",
      "commercial"
    ],
    "badge": "",
    "description": "",
    "specs": {}
  },
  {
    "id": "samsung-076",
    "name": "Samsung Standalone - Touch 13''",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "LH13QBRTBGCXEN",
    "category": "commercial",
    "images": [],
    "price": 13199,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🖥️",
    "color": "#1428a0",
    "tags": [
      "samsung",
      "commercial"
    ],
    "badge": "",
    "description": "",
    "specs": {
      "Size": "13\""
    }
  },
  {
    "id": "samsung-077",
    "name": "Samsung Standalone - Touch 55''",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "LH55QMRTBGCXEN",
    "category": "commercial",
    "images": [],
    "price": 33199,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🖥️",
    "color": "#1428a0",
    "tags": [
      "samsung",
      "commercial"
    ],
    "badge": "",
    "description": "",
    "specs": {
      "Size": "55\""
    }
  },
  {
    "id": "samsung-078",
    "name": "Samsung Standalone - Touch",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "LH55WMBWBGCXUE",
    "category": "commercial",
    "images": [],
    "price": 26599,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🖥️",
    "color": "#1428a0",
    "tags": [
      "samsung",
      "commercial"
    ],
    "badge": "",
    "description": "",
    "specs": {}
  },
  {
    "id": "samsung-079",
    "name": "Samsung Standalone - Touch",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "LH55WMRWBGCXUE",
    "category": "commercial",
    "images": [],
    "price": 26599,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🖥️",
    "color": "#1428a0",
    "tags": [
      "samsung",
      "commercial"
    ],
    "badge": "",
    "description": "",
    "specs": {}
  },
  {
    "id": "samsung-080",
    "name": "Samsung Standalone - Touch 65''",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "LH65WMBWBGCXUE",
    "category": "commercial",
    "images": [],
    "price": 33199,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🖥️",
    "color": "#1428a0",
    "tags": [
      "samsung",
      "commercial"
    ],
    "badge": "",
    "description": "",
    "specs": {
      "Size": "65\""
    }
  },
  {
    "id": "samsung-081",
    "name": "Samsung Standalone - Touch",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "LH65WMRWBGCXUE",
    "category": "commercial",
    "images": [],
    "price": 33199,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🖥️",
    "color": "#1428a0",
    "tags": [
      "samsung",
      "commercial"
    ],
    "badge": "",
    "description": "",
    "specs": {}
  },
  {
    "id": "samsung-082",
    "name": "Samsung Standalone - Touch 75''",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "LH75WMAWLGCXUE",
    "category": "commercial",
    "images": [],
    "price": 57999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🖥️",
    "color": "#1428a0",
    "tags": [
      "samsung",
      "commercial"
    ],
    "badge": "",
    "description": "",
    "specs": {
      "Size": "75\""
    }
  },
  {
    "id": "samsung-083",
    "name": "Samsung Standalone - Touch",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "LH75WMBWLGCXUE",
    "category": "commercial",
    "images": [],
    "price": 57999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🖥️",
    "color": "#1428a0",
    "tags": [
      "samsung",
      "commercial"
    ],
    "badge": "",
    "description": "",
    "specs": {}
  },
  {
    "id": "samsung-084",
    "name": "Samsung Standalone - Touch 85''",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "LH85WMBWLGCXUE",
    "category": "commercial",
    "images": [],
    "price": 74599,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🖥️",
    "color": "#1428a0",
    "tags": [
      "samsung",
      "commercial"
    ],
    "badge": "",
    "description": "",
    "specs": {
      "Size": "85\""
    }
  },
  {
    "id": "samsung-085",
    "name": "Samsung Standalone - None Touch 13''",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "LH13QBREBGCXEN",
    "category": "commercial",
    "images": [],
    "price": 5399,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🖥️",
    "color": "#1428a0",
    "tags": [
      "samsung",
      "commercial"
    ],
    "badge": "",
    "description": "",
    "specs": {
      "Size": "13\""
    }
  },
  {
    "id": "samsung-086",
    "name": "Samsung Standalone - None Touch 43''",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "LH43QMBEBGCXUE",
    "category": "commercial",
    "images": [],
    "price": 13199,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🖥️",
    "color": "#1428a0",
    "tags": [
      "samsung",
      "commercial"
    ],
    "badge": "",
    "description": "",
    "specs": {
      "Size": "43\""
    }
  },
  {
    "id": "samsung-087",
    "name": "Samsung Standalone - None Touch 49''",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "LH49QMREBGCXUE",
    "category": "commercial",
    "images": [],
    "price": 11699,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🖥️",
    "color": "#1428a0",
    "tags": [
      "samsung",
      "commercial"
    ],
    "badge": "",
    "description": "",
    "specs": {
      "Size": "49\""
    }
  },
  {
    "id": "samsung-088",
    "name": "Samsung Standalone - None Touch 50''",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "LH50QMBEBGCXUE",
    "category": "commercial",
    "images": [],
    "price": 14199,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🖥️",
    "color": "#1428a0",
    "tags": [
      "samsung",
      "commercial"
    ],
    "badge": "",
    "description": "",
    "specs": {
      "Size": "50\""
    }
  },
  {
    "id": "samsung-089",
    "name": "Samsung Standalone - None Touch 55''",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "LH55MEB",
    "category": "commercial",
    "images": [],
    "price": 16599,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🖥️",
    "color": "#1428a0",
    "tags": [
      "samsung",
      "commercial"
    ],
    "badge": "",
    "description": "",
    "specs": {
      "Size": "55\""
    }
  },
  {
    "id": "samsung-090",
    "name": "Samsung Standalone - None Touch",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "LH55OHFPVBC/UE",
    "category": "commercial",
    "images": [],
    "price": 66299,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🖥️",
    "color": "#1428a0",
    "tags": [
      "samsung",
      "commercial"
    ],
    "badge": "",
    "description": "",
    "specs": {}
  },
  {
    "id": "samsung-091",
    "name": "Samsung Standalone - None Touch",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "LH55QHBEBGCXEN",
    "category": "commercial",
    "images": [],
    "price": 16599,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🖥️",
    "color": "#1428a0",
    "tags": [
      "samsung",
      "commercial"
    ],
    "badge": "",
    "description": "",
    "specs": {}
  },
  {
    "id": "samsung-092",
    "name": "Samsung Standalone - None Touch",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "LH55QMCEBGCXEN",
    "category": "commercial",
    "images": [],
    "price": 16599,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🖥️",
    "color": "#1428a0",
    "tags": [
      "samsung",
      "commercial"
    ],
    "badge": "",
    "description": "",
    "specs": {}
  },
  {
    "id": "samsung-093",
    "name": "Samsung Standalone - None Touch 65''",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "LH65MDCPLG",
    "category": "commercial",
    "images": [],
    "price": 52299,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🖥️",
    "color": "#1428a0",
    "tags": [
      "samsung",
      "commercial"
    ],
    "badge": "",
    "description": "",
    "specs": {
      "Size": "65\""
    }
  },
  {
    "id": "samsung-094",
    "name": "Samsung Standalone - None Touch",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "LH65QBBEBGCXUE",
    "category": "commercial",
    "images": [],
    "price": 30099,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🖥️",
    "color": "#1428a0",
    "tags": [
      "samsung",
      "commercial"
    ],
    "badge": "",
    "description": "",
    "specs": {}
  },
  {
    "id": "samsung-095",
    "name": "Samsung Standalone - None Touch",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "LH65QMRABGCXUE",
    "category": "commercial",
    "images": [],
    "price": 30099,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🖥️",
    "color": "#1428a0",
    "tags": [
      "samsung",
      "commercial"
    ],
    "badge": "",
    "description": "",
    "specs": {}
  },
  {
    "id": "samsung-096",
    "name": "Samsung Standalone - None Touch 75''",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "LH75QBBEBGCXUE",
    "category": "commercial",
    "images": [],
    "price": 41899,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🖥️",
    "color": "#1428a0",
    "tags": [
      "samsung",
      "commercial"
    ],
    "badge": "",
    "description": "",
    "specs": {
      "Size": "75\""
    }
  },
  {
    "id": "samsung-097",
    "name": "Samsung Standalone - None Touch",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "LH75QMRABGCXUE",
    "category": "commercial",
    "images": [],
    "price": 52299,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🖥️",
    "color": "#1428a0",
    "tags": [
      "samsung",
      "commercial"
    ],
    "badge": "",
    "description": "",
    "specs": {}
  },
  {
    "id": "samsung-098",
    "name": "Samsung Standalone - None Touch",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "LH75QMREBGCXUE",
    "category": "commercial",
    "images": [],
    "price": 37299,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🖥️",
    "color": "#1428a0",
    "tags": [
      "samsung",
      "commercial"
    ],
    "badge": "",
    "description": "",
    "specs": {}
  },
  {
    "id": "samsung-099",
    "name": "Samsung Standalone - None Touch 85''",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "LH85QBRBBGCXUE",
    "category": "commercial",
    "images": [],
    "price": 57999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🖥️",
    "color": "#1428a0",
    "tags": [
      "samsung",
      "commercial"
    ],
    "badge": "",
    "description": "",
    "specs": {
      "Size": "85\""
    }
  },
  {
    "id": "samsung-100",
    "name": "Samsung Standalone - None Touch",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "LH85QMNEBGC/UE",
    "category": "commercial",
    "images": [],
    "price": 69999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🖥️",
    "color": "#1428a0",
    "tags": [
      "samsung",
      "commercial"
    ],
    "badge": "",
    "description": "",
    "specs": {}
  },
  {
    "id": "samsung-101",
    "name": "Samsung Hospitality 43",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "HG43AU800EEXEN",
    "category": "commercial",
    "images": [],
    "price": 13399,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🖥️",
    "color": "#1428a0",
    "tags": [
      "samsung",
      "commercial"
    ],
    "badge": "",
    "description": "",
    "specs": {
      "Size": "43"
    }
  },
  {
    "id": "samsung-102",
    "name": "Samsung Hospitality 50",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "HG50BU800AUXUE",
    "category": "commercial",
    "images": [],
    "price": 14999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🖥️",
    "color": "#1428a0",
    "tags": [
      "samsung",
      "commercial"
    ],
    "badge": "",
    "description": "",
    "specs": {
      "Size": "50"
    }
  },
  {
    "id": "samsung-103",
    "name": "Samsung Hospitality 55\"",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "HG55AU800AUXUE",
    "category": "commercial",
    "images": [],
    "price": 15799,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🖥️",
    "color": "#1428a0",
    "tags": [
      "samsung",
      "commercial"
    ],
    "badge": "",
    "description": "",
    "specs": {
      "Size": "55\""
    }
  },
  {
    "id": "samsung-104",
    "name": "Samsung Hospitality",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "HG55AU800EEXEN",
    "category": "commercial",
    "images": [],
    "price": 15799,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🖥️",
    "color": "#1428a0",
    "tags": [
      "samsung",
      "commercial"
    ],
    "badge": "",
    "description": "",
    "specs": {}
  },
  {
    "id": "samsung-105",
    "name": "Samsung Hospitality 65\"",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "HG65AU800AUXUE",
    "category": "commercial",
    "images": [],
    "price": 19099,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🖥️",
    "color": "#1428a0",
    "tags": [
      "samsung",
      "commercial"
    ],
    "badge": "",
    "description": "",
    "specs": {
      "Size": "65\""
    }
  },
  {
    "id": "samsung-106",
    "name": "Samsung Hospitality",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "HG65AU800EEXEN",
    "category": "commercial",
    "images": [],
    "price": 19099,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🖥️",
    "color": "#1428a0",
    "tags": [
      "samsung",
      "commercial"
    ],
    "badge": "",
    "description": "",
    "specs": {}
  },
  {
    "id": "samsung-107",
    "name": "Samsung Hospitality 75\"",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "HG75BU800AUXUE",
    "category": "commercial",
    "images": [],
    "price": 20699,
    "rating": 4.5,
    "reviews": 0,
    "icon": "🖥️",
    "color": "#1428a0",
    "tags": [
      "samsung",
      "commercial"
    ],
    "badge": "",
    "description": "",
    "specs": {
      "Size": "75\""
    }
  },
  {
    "id": "alcatel-001",
    "name": "Alcatel A31 6.5''",
    "brand": "Alcatel",
    "brandId": "alcatel",
    "model": "ALCATEL-A31",
    "category": "phones",
    "images": [],
    "price": 1099,
    "rating": 4.5,
    "reviews": 0,
    "icon": "📱",
    "color": "#e62b1e",
    "tags": [
      "alcatel",
      "phones"
    ],
    "badge": "",
    "description": "",
    "specs": {
      "Size": "6.5\""
    }
  },
  {
    "id": "tcl-076",
    "name": "TCL 503 6.6''",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "TCL-503",
    "category": "phones",
    "images": [],
    "price": 1199,
    "rating": 4.5,
    "reviews": 0,
    "icon": "📱",
    "color": "#cc0000",
    "tags": [
      "tcl",
      "phones"
    ],
    "badge": "",
    "description": "",
    "specs": {
      "Size": "6.6\""
    }
  },
  {
    "id": "tcl-077",
    "name": "TCL 605 6.7''",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "TCL-605(128GB)",
    "category": "phones",
    "images": [],
    "price": 1599,
    "rating": 4.5,
    "reviews": 0,
    "icon": "📱",
    "color": "#cc0000",
    "tags": [
      "tcl",
      "phones"
    ],
    "badge": "",
    "description": "",
    "specs": {
      "Size": "6.7\""
    }
  },
  {
    "id": "tcl-078",
    "name": "TCL 60SE NEXTPAPER 5G 6.7''",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "TCL-60SENXTPAPER-5G",
    "category": "phones",
    "images": [],
    "price": 3499,
    "rating": 4.5,
    "reviews": 0,
    "icon": "📱",
    "color": "#cc0000",
    "tags": [
      "tcl",
      "phones"
    ],
    "badge": "",
    "description": "",
    "specs": {
      "Size": "6.7\""
    }
  },
  {
    "id": "tcl-079",
    "name": "TCL TAB 10L 10''",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "TCL-TAB10L-GEN4(64GB) CASE)_8183A2",
    "category": "phones",
    "images": [],
    "price": 1999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "📱",
    "color": "#cc0000",
    "tags": [
      "tcl",
      "phones"
    ],
    "badge": "",
    "description": "",
    "specs": {
      "Size": "10\""
    }
  },
  {
    "id": "tcl-080",
    "name": "TCL TAB 11FE LTE 11''",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "TCL-TAB11/FE-LTE",
    "category": "phones",
    "images": [],
    "price": 2699,
    "rating": 4.5,
    "reviews": 0,
    "icon": "📱",
    "color": "#cc0000",
    "tags": [
      "tcl",
      "phones"
    ],
    "badge": "",
    "description": "",
    "specs": {
      "Size": "11\""
    }
  },
  {
    "id": "midea-105",
    "name": "Midea Midea 16A Extension Board,3 Sockets With 2M Cable",
    "brand": "Midea",
    "brandId": "midea",
    "model": "MDL-3K3B-2M-U",
    "category": "small",
    "images": [],
    "price": 135,
    "rating": 4.5,
    "reviews": 0,
    "icon": "⚡",
    "color": "#00a0e9",
    "tags": [
      "midea",
      "small"
    ],
    "badge": "",
    "description": "",
    "specs": {}
  },
  {
    "id": "midea-106",
    "name": "Midea Midea 16A Extension Board,3 Sockets With 5M Cable",
    "brand": "Midea",
    "brandId": "midea",
    "model": "MDL-3K3B-5M-U",
    "category": "small",
    "images": [],
    "price": 200,
    "rating": 4.5,
    "reviews": 0,
    "icon": "⚡",
    "color": "#00a0e9",
    "tags": [
      "midea",
      "small"
    ],
    "badge": "",
    "description": "",
    "specs": {}
  },
  {
    "id": "midea-107",
    "name": "Midea Midea 16A Extension Board,5 Sockets With 2M Cable",
    "brand": "Midea",
    "brandId": "midea",
    "model": "MDL-5K5B-2M-U",
    "category": "small",
    "images": [],
    "price": 155,
    "rating": 4.5,
    "reviews": 0,
    "icon": "⚡",
    "color": "#00a0e9",
    "tags": [
      "midea",
      "small"
    ],
    "badge": "",
    "description": "",
    "specs": {}
  },
  {
    "id": "midea-108",
    "name": "Midea Midea 16A Extension Board,5 Sockets With 5M Cable",
    "brand": "Midea",
    "brandId": "midea",
    "model": "MDL-5K5B-5M-U",
    "category": "small",
    "images": [],
    "price": 220,
    "rating": 4.5,
    "reviews": 0,
    "icon": "⚡",
    "color": "#00a0e9",
    "tags": [
      "midea",
      "small"
    ],
    "badge": "",
    "description": "",
    "specs": {}
  },
  {
    "id": "midea-109",
    "name": "Midea Midea 16A Extension Board,3 Sockets Usb Type C 2M",
    "brand": "Midea",
    "brandId": "midea",
    "model": "MDL-4K3B2U1C-2M-U",
    "category": "small",
    "images": [],
    "price": 190,
    "rating": 4.5,
    "reviews": 0,
    "icon": "⚡",
    "color": "#00a0e9",
    "tags": [
      "midea",
      "small"
    ],
    "badge": "",
    "description": "",
    "specs": {}
  },
  {
    "id": "midea-110",
    "name": "Midea Midea 16A Extension Board,3 Sockets Usb Type C 5M",
    "brand": "Midea",
    "brandId": "midea",
    "model": "MDL-4K3B2U1C-5M-U",
    "category": "small",
    "images": [],
    "price": 260,
    "rating": 4.5,
    "reviews": 0,
    "icon": "⚡",
    "color": "#00a0e9",
    "tags": [
      "midea",
      "small"
    ],
    "badge": "",
    "description": "",
    "specs": {}
  },
  {
    "id": "midea-111",
    "name": "Midea Midea 16A Extension Board,4 Sockets Usb Type C 2M",
    "brand": "Midea",
    "brandId": "midea",
    "model": "MDL-5K4B2U1C-2M-U",
    "category": "small",
    "images": [],
    "price": 200,
    "rating": 4.5,
    "reviews": 0,
    "icon": "⚡",
    "color": "#00a0e9",
    "tags": [
      "midea",
      "small"
    ],
    "badge": "",
    "description": "",
    "specs": {}
  },
  {
    "id": "midea-112",
    "name": "Midea Midea 16A Extension Board,4 Sockets Usb Type C 5M",
    "brand": "Midea",
    "brandId": "midea",
    "model": "MDL-5K4B2U1C-5M-U",
    "category": "small",
    "images": [],
    "price": 270,
    "rating": 4.5,
    "reviews": 0,
    "icon": "⚡",
    "color": "#00a0e9",
    "tags": [
      "midea",
      "small"
    ],
    "badge": "",
    "description": "",
    "specs": {}
  },
  {
    "id": "nasco-107",
    "name": "NASCO TV Wall Bracket 32\"-63\"",
    "brand": "NASCO",
    "brandId": "nasco",
    "model": "MCR-Y3260",
    "category": "small",
    "images": [],
    "price": 99,
    "rating": 4.5,
    "reviews": 0,
    "icon": "⚡",
    "color": "#003087",
    "tags": [
      "nasco",
      "small"
    ],
    "badge": "",
    "description": "",
    "specs": {
      "Size": "32\"-63\""
    }
  },
  {
    "id": "nasco-108",
    "name": "NASCO TV Wall Bracket 40\"-80\"",
    "brand": "NASCO",
    "brandId": "nasco",
    "model": "MCR-Y4080",
    "category": "small",
    "images": [],
    "price": 199,
    "rating": 4.5,
    "reviews": 0,
    "icon": "⚡",
    "color": "#003087",
    "tags": [
      "nasco",
      "small"
    ],
    "badge": "",
    "description": "",
    "specs": {
      "Size": "40\"-80\""
    }
  },
  {
    "id": "nasco-109",
    "name": "NASCO TV Wall Bracket 32\"-70\"",
    "brand": "NASCO",
    "brandId": "nasco",
    "model": "MCR-WG09",
    "category": "small",
    "images": [],
    "price": 189,
    "rating": 4.5,
    "reviews": 0,
    "icon": "⚡",
    "color": "#003087",
    "tags": [
      "nasco",
      "small"
    ],
    "badge": "",
    "description": "",
    "specs": {
      "Size": "32\"-70\""
    }
  },
  {
    "id": "nasco-110",
    "name": "NASCO TV Wall Bracket 26\"-55\"",
    "brand": "NASCO",
    "brandId": "nasco",
    "model": "MCR-500",
    "category": "small",
    "images": [],
    "price": 399,
    "rating": 4.5,
    "reviews": 0,
    "icon": "⚡",
    "color": "#003087",
    "tags": [
      "nasco",
      "small"
    ],
    "badge": "",
    "description": "",
    "specs": {
      "Size": "26\"-55\""
    }
  },
  {
    "id": "nasco-111",
    "name": "NASCO TV Wall Bracket 32\"-70\"",
    "brand": "NASCO",
    "brandId": "nasco",
    "model": "NS-P800",
    "category": "small",
    "images": [],
    "price": 999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "⚡",
    "color": "#003087",
    "tags": [
      "nasco",
      "small"
    ],
    "badge": "",
    "description": "",
    "specs": {
      "Size": "32\"-70\""
    }
  },
  {
    "id": "nasco-112",
    "name": "NASCO TV Wall Bracket 32“-65”",
    "brand": "NASCO",
    "brandId": "nasco",
    "model": "MCR-1500",
    "category": "small",
    "images": [],
    "price": 1199,
    "rating": 4.5,
    "reviews": 0,
    "icon": "⚡",
    "color": "#003087",
    "tags": [
      "nasco",
      "small"
    ],
    "badge": "",
    "description": "",
    "specs": {
      "Size": "32“-65”"
    }
  },
  {
    "id": "nasco-113",
    "name": "NASCO TV Wall Bracket 50“-80”",
    "brand": "NASCO",
    "brandId": "nasco",
    "model": "MCR-1800",
    "category": "small",
    "images": [],
    "price": 1999,
    "rating": 4.5,
    "reviews": 0,
    "icon": "⚡",
    "color": "#003087",
    "tags": [
      "nasco",
      "small"
    ],
    "badge": "",
    "description": "",
    "specs": {
      "Size": "50“-80”"
    }
  },
  {
    "id": "nasco-114",
    "name": "NASCO TV Wall Bracket 60“-100”",
    "brand": "NASCO",
    "brandId": "nasco",
    "model": "MCR-2100",
    "category": "small",
    "images": [],
    "price": 3299,
    "rating": 4.5,
    "reviews": 0,
    "icon": "⚡",
    "color": "#003087",
    "tags": [
      "nasco",
      "small"
    ],
    "badge": "",
    "description": "",
    "specs": {
      "Size": "60“-100”"
    }
  },
  {
    "id": "nasco-115",
    "name": "NASCO TV Wall Bracket 32\"-75\"",
    "brand": "NASCO",
    "brandId": "nasco",
    "model": "MCR-AVA1500",
    "category": "small",
    "images": [],
    "price": 1499,
    "rating": 4.5,
    "reviews": 0,
    "icon": "⚡",
    "color": "#003087",
    "tags": [
      "nasco",
      "small"
    ],
    "badge": "",
    "description": "",
    "specs": {
      "Size": "32\"-75\""
    }
  },
  {
    "id": "nasco-116",
    "name": "NASCO TV Wall Bracket 55\"-100\"",
    "brand": "NASCO",
    "brandId": "nasco",
    "model": "MCR-R9",
    "category": "small",
    "images": [],
    "price": 2399,
    "rating": 4.5,
    "reviews": 0,
    "icon": "⚡",
    "color": "#003087",
    "tags": [
      "nasco",
      "small"
    ],
    "badge": "",
    "description": "",
    "specs": {
      "Size": "55\"-100\""
    }
  }
];

/* ── BLOG POSTS ── */
const BLOG_POSTS = [
  {
    "id": 1,
    "title": "Best NASCO TVs to Buy in Ghana – 2025 Guide",
    "category": "Televisions",
    "date": "April 15, 2025",
    "excerpt": "NASCO offers some of the best value TVs in Ghana. From 24-inch bedroom sets to stunning 55-inch UHD Smart displays — here is what to look for.",
    "icon": "📺",
    "bgColor": "linear-gradient(135deg, #0f172a, #1e3a5f)",
    "readTime": "6 min read"
  },
  {
    "id": 2,
    "title": "How to Choose the Right Air Conditioner for Your Home",
    "category": "Air Conditioners",
    "date": "April 10, 2025",
    "excerpt": "BTU ratings, inverter vs non-inverter, R32 vs R410 — we break down everything you need to know before buying your next Midea AC unit.",
    "icon": "❄️",
    "bgColor": "linear-gradient(135deg, #0d2137, #0a4a6b)",
    "readTime": "6 min read"
  },
  {
    "id": 3,
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
