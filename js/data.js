/* ================================================================
   ORBIVA – DATA LAYER
   Sources: Electroland (images) + EGL Easter Promo + EGL April 2026
            + Samsung Mobile April 2026,
   Prices: All at RETAIL price
================================================================ */

/* ── CATEGORIES ── */
const CATEGORIES = [
  {
    id: "tv",
    name: "Televisions",
    icon: "fas fa-tv",
    count: 59,
    color: "#fff",
    bg: "linear-gradient(135deg,#1d4ed8,#3b82f6)"
  },
  {
    id: "ac",
    name: "Air Conditioners",
    icon: "fas fa-snowflake",
    count: 69,
    color: "#fff",
    bg: "linear-gradient(135deg,#0ea5e9,#38bdf8)"
  },
  {
    id: "fridge",
    name: "Refrigerators",
    icon: "fas fa-cube",
    count: 121,
    color: "#fff",
    bg: "linear-gradient(135deg,#0891b2,#06b6d4)"
  },
  {
    id: "laundry",
    name: "Washing Machines",
    icon: "fas fa-tshirt",
    count: 49,
    color: "#fff",
    bg: "linear-gradient(135deg,#7c3aed,#a855f7)"
  },
  {
    id: "kitchen",
    name: "Kitchen Appliances",
    icon: "fas fa-blender",
    count: 43,
    color: "#fff",
    bg: "linear-gradient(135deg,#dc2626,#f87171)"
  },
  {
    id: "small",
    name: "Small Appliances",
    icon: "fas fa-fan",
    count: 80,
    color: "#fff",
    bg: "linear-gradient(135deg,#d97706,#fbbf24)"
  },
  {
    id: "phones",
    name: "Mobile & Tablets",
    icon: "fas fa-mobile-alt",
    count: 68,
    color: "#fff",
    bg: "linear-gradient(135deg,#0f172a,#1e293b)"
  },
  {
    id: "commercial",
    name: "Commercial Displays",
    icon: "fas fa-desktop",
    count: 28,
    color: "#fff",
    bg: "linear-gradient(135deg,#1e293b,#334155)"
  }
];

/* ── BRANDS ── */
const BRANDS = [
  {
    id: "samsung",
    name: "Samsung",
    shortName: "SAMSUNG",
    products: 159,
    color: "#1428a0",
    bg: "linear-gradient(135deg,#1428a0,#0049a0)",
    logoStyle: "font-size:13px;letter-spacing:-0.5px"
  },
  {
    id: "tcl",
    name: "TCL",
    shortName: "TCL",
    products: 80,
    color: "#cc0000",
    bg: "linear-gradient(135deg,#cc0000,#990000)",
    logoStyle: "font-size:18px;font-style:italic"
  },
  {
    id: "midea",
    name: "Midea",
    shortName: "Midea",
    products: 149,
    color: "#00a0e9",
    bg: "linear-gradient(135deg,#00a0e9,#007dc5)",
    logoStyle: "font-size:14px"
  },
  {
    id: "nasco",
    name: "NASCO",
    shortName: "NASCO",
    products: 128,
    color: "#003087",
    bg: "linear-gradient(135deg,#003087,#001a5c)",
    logoStyle: "font-size:13px;letter-spacing:1px"
  },
  {
    id: "alcatel",
    name: "Alcatel",
    shortName: "Alcatel",
    products: 1,
    color: "#0099dd",
    bg: "linear-gradient(135deg,#0099dd,#006699)",
    logoStyle: "font-size:14px"
  }
];

/* ── FLASH SALE ── */
const FLASH_PRODUCTS = [
  {
    id: 1,
    name: "NASCO 24\" LED FHD Satellite TV",
    icon: "📺",
    price: 699,
    oldPrice: 1099,
    discount: 36,
    soldPct: 68,
    brand: "NASCO"
  },
  {
    id: 11,
    name: "Midea 1.5HP R410 Split AC",
    icon: "❄️",
    price: 3999,
    oldPrice: 5299,
    discount: 25,
    soldPct: 55,
    brand: "Midea"
  },
  {
    id: 35,
    name: "Midea 1.5Ltrs Table Blender",
    icon: "🍳",
    price: 299,
    oldPrice: 499,
    discount: 40,
    soldPct: 82,
    brand: "Midea"
  },
  {
    id: 36,
    name: "Midea 20Ltrs Solo Microwave",
    icon: "🍳",
    price: 699,
    oldPrice: 1099,
    discount: 36,
    soldPct: 47,
    brand: "Midea"
  }
];

/* ── PRODUCTS ── */
const PRODUCTS = [
  {
    id: 1,
    name: "NASCO 24\" LED FHD Digital Satellite TV",
    brand: "NASCO",
    brandId: "nasco",
    model: "",
    category: "tv",
    image: "/img/products/1NASCO-24-LED-FHD-DIGITAL-SATELLITE-TV.jpg",
    images: ["/img/products/1NASCO-24-LED-FHD-DIGITAL-SATELLITE-TV.jpg"],
    price: 699,
    oldPrice: 1099,
    discount: 36,
    rating: 4.3,
    reviews: 87,
    icon: "📺",
    color: "#003087",
    tags: [
      "top-deals",
      "best-sellers"
    ],
    badge: "sale",
    flashSale: true,
    featured: true,
    description: "24\" Full HD LED TV with built-in digital satellite receiver. Perfect for bedrooms and small spaces.",
    specs: {
      Size: "24\"",
      Resolution: "Full HD 1080p",
      Type: "LED",
      Tuner: "Digital Satellite",
      HDMI: "2"
    }
  },
  {
    id: 2,
    name: "Nasco 32\" LED Digital Satellite TV",
    brand: "NASCO",
    brandId: "nasco",
    model: "",
    category: "tv",
    image: "/img/products/1NASCO-32-LED-FHD-SATELLITE-SMART-TV-1.jpg",
    images: ["/img/products/1NASCO-32-LED-FHD-SATELLITE-SMART-TV-1.jpg"],
    price: 999,
    oldPrice: 1499,
    discount: 33,
    rating: 4.4,
    reviews: 143,
    icon: "📺",
    color: "#003087",
    tags: [
      "top-deals",
      "new-arrivals"
    ],
    badge: "sale",
    description: "32\" LED Full HD Digital Satellite TV with crisp picture quality and built-in satellite decoder.",
    specs: {
      Size: "32\"",
      Resolution: "Full HD",
      Type: "LED",
      Tuner: "Digital Satellite",
      HDMI: "2"
    }
  },
  {
    id: 3,
    name: "Nasco 32\" LED Satellite Smart TV",
    brand: "NASCO",
    brandId: "nasco",
    model: "",
    category: "tv",
    image: "/img/products/1NASCO-32-LED-FHD-SATELLITE-SMART-TV-1.jpg",
    images: ["/img/products/1NASCO-32-LED-FHD-SATELLITE-SMART-TV-1.jpg"],
    price: 2099,
    oldPrice: null,
    discount: 0,
    rating: 4.5,
    reviews: 98,
    icon: "📺",
    color: "#003087",
    tags: [
      "new-arrivals",
      "trending"
    ],
    badge: "new",
    description: "32\" Smart LED TV with Android OS, built-in Wi-Fi, Google Play Store, and digital satellite tuner.",
    specs: {
      Size: "32\"",
      Resolution: "Full HD",
      "Smart OS": "Android",
      WiFi: "Yes",
      Tuner: "Digital Satellite"
    }
  },
  {
    id: 4,
    name: "Nasco 32\" UHD Smart Flat TV",
    brand: "NASCO",
    brandId: "nasco",
    model: "",
    category: "tv",
    image: "/img/products/NASCO-32UHD-SMART-FLAT-VIDAA-NAS-J32FBFL-VID-FRONT-jpg-768x768.webp",
    images: ["/img/products/NASCO-32UHD-SMART-FLAT-VIDAA-NAS-J32FBFL-VID-FRONT-jpg-768x768.webp"],
    price: 2299,
    oldPrice: null,
    discount: 0,
    rating: 4.5,
    reviews: 76,
    icon: "📺",
    color: "#003087",
    tags: [
      "new-arrivals",
      "trending"
    ],
    badge: "new",
    description: "32\" UHD Smart TV with VIDAA OS, stunning picture clarity, and seamless streaming apps.",
    specs: {
      Size: "32\"",
      Resolution: "UHD 4K",
      "Smart OS": "VIDAA",
      WiFi: "Yes"
    }
  },
  {
    id: 5,
    name: "Nasco 40\" LED Digital Satellite TV",
    brand: "NASCO",
    brandId: "nasco",
    model: "",
    category: "tv",
    image: "/img/products/NAS-J40FBFL-768x768.png",
    images: ["/img/products/NAS-J40FBFL-768x768.png"],
    price: 2099,
    oldPrice: null,
    discount: 0,
    rating: 4.4,
    reviews: 112,
    icon: "📺",
    color: "#003087",
    tags: [
      "best-sellers"
    ],
    description: "40\" Full HD LED TV with digital satellite tuner. Great for living rooms with vibrant colour display.",
    specs: {
      Size: "40\"",
      Resolution: "Full HD",
      Type: "LED",
      Tuner: "Digital Satellite"
    }
  },
  {
    id: 6,
    name: "Nasco 43\" LED Digital Satellite TV",
    brand: "NASCO",
    brandId: "nasco",
    model: "",
    category: "tv",
    image: "/img/products/NAS-J43FBF-jpg-768x768.webp",
    images: ["/img/products/NAS-J43FBF-jpg-768x768.webp"],
    price: 1999,
    oldPrice: 2699,
    discount: 26,
    rating: 4.4,
    reviews: 167,
    icon: "📺",
    color: "#003087",
    tags: [
      "top-deals",
      "best-sellers"
    ],
    badge: "sale",
    flashSale: true,
    featured: true,
    description: "43\" Full HD LED Digital Satellite TV with wide-angle display and multiple connectivity options.",
    specs: {
      Size: "43\"",
      Resolution: "Full HD",
      Type: "LED",
      Tuner: "Digital Satellite",
      HDMI: "2",
      USB: "2"
    }
  },
  {
    id: 7,
    name: "Nasco 43\" LED Satellite Smart TV",
    brand: "NASCO",
    brandId: "nasco",
    model: "",
    category: "tv",
    image: "/img/products/NAS-J43FBFL-AND-768x768.jpg",
    images: ["/img/products/NAS-J43FBFL-AND-768x768.jpg"],
    price: 3499,
    oldPrice: null,
    discount: 0,
    rating: 4.6,
    reviews: 134,
    icon: "📺",
    color: "#003087",
    tags: [
      "new-arrivals",
      "trending"
    ],
    badge: "new",
    featured: true,
    description: "43\" Android Smart TV with satellite decoder, Google Play Store, YouTube, Netflix & Wi-Fi built in.",
    specs: {
      Size: "43\"",
      Resolution: "Full HD",
      "Smart OS": "Android",
      WiFi: "Yes",
      Tuner: "Satellite"
    }
  },
  {
    id: 8,
    name: "Nasco 50\" LED Digital Satellite TV",
    brand: "NASCO",
    brandId: "nasco",
    model: "",
    category: "tv",
    image: "/img/products/1NASCO-50-LED-DIGITAL-SATELLITE-TV.jpg",
    images: ["/img/products/1NASCO-50-LED-DIGITAL-SATELLITE-TV.jpg"],
    price: 3899,
    oldPrice: null,
    discount: 0,
    rating: 4.5,
    reviews: 89,
    icon: "📺",
    color: "#003087",
    tags: [
      "best-sellers"
    ],
    description: "50\" Full HD LED TV with built-in digital satellite tuner for the ultimate big-screen experience.",
    specs: {
      Size: "50\"",
      Resolution: "Full HD",
      Type: "LED",
      Tuner: "Digital Satellite",
      HDMI: "3"
    }
  },
  {
    id: 9,
    name: "Nasco 50\" UHD 4K Smart TV",
    brand: "NASCO",
    brandId: "nasco",
    model: "",
    category: "tv",
    image: "/img/products/NAS-J50FUS-AND-CI-1-scaled-1-768x768.jpg",
    images: ["/img/products/NAS-J50FUS-AND-CI-1-scaled-1-768x768.jpg"],
    price: 4999,
    oldPrice: null,
    discount: 0,
    rating: 4.7,
    reviews: 201,
    icon: "📺",
    color: "#003087",
    tags: [
      "new-arrivals",
      "trending",
      "best-sellers"
    ],
    badge: "new",
    featured: true,
    description: "50\" 4K UHD Android Smart TV with satellite decoder, Dolby Audio, and seamless smart home integration.",
    specs: {
      Size: "50\"",
      Resolution: "4K UHD",
      "Smart OS": "Android",
      WiFi: "Yes",
      Tuner: "Satellite",
      HDR: "Yes"
    }
  },
  {
    id: 10,
    name: "Nasco 55\" UHD Smart Flat TV",
    brand: "NASCO",
    brandId: "nasco",
    model: "",
    category: "tv",
    image: "/img/products/1drfv-jpg-768x768.webp",
    images: ["/img/products/1drfv-jpg-768x768.webp"],
    price: 6249,
    oldPrice: null,
    discount: 0,
    rating: 4.8,
    reviews: 156,
    icon: "📺",
    color: "#003087",
    tags: [
      "new-arrivals",
      "trending"
    ],
    badge: "new",
    featured: true,
    description: "55\" UHD Smart Flat TV delivering breathtaking 4K clarity with smart streaming capabilities.",
    specs: {
      Size: "55\"",
      Resolution: "4K UHD",
      Type: "Smart Flat",
      WiFi: "Yes"
    }
  },
  {
    id: 11,
    name: "Midea 1.5HP R410 Split Air Conditioner",
    brand: "Midea",
    brandId: "midea",
    model: "",
    category: "ac",
    image: "/img/products/MIDEA-1.5HP-R410-SPLIT-AIR-CONDITIONER1.jpg",
    images: ["/img/products/MIDEA-1.5HP-R410-SPLIT-AIR-CONDITIONER1.jpg"],
    price: 8999,
    oldPrice: 5299,
    discount: 25,
    rating: 4.5,
    reviews: 234,
    icon: "❄️",
    color: "#00a0e9",
    tags: [
      "top-deals",
      "best-sellers"
    ],
    badge: "sale",
    flashSale: true,
    featured: true,
    description: "1.5HP split AC with R410 refrigerant, fast cooling, auto-restart, and energy-saving operation.",
    specs: {
      Capacity: "1.5HP",
      Refrigerant: "R410",
      Type: "Split",
      Coverage: "Up to 20 m²",
      Warranty: "3 Years"
    }
  },
  {
    id: 12,
    name: "Midea 15Ltrs Air Cooler",
    brand: "Midea",
    brandId: "midea",
    model: "",
    category: "ac",
    image: "/img/products/1-1-768x768.png",
    images: ["/img/products/1-1-768x768.png"],
    price: 1499,
    oldPrice: 2099,
    discount: 29,
    rating: 4.2,
    reviews: 178,
    icon: "❄️",
    color: "#00a0e9",
    tags: [
      "top-deals",
      "trending"
    ],
    badge: "sale",
    description: "15-litre portable air cooler with 3-speed fan, humidifier function, and remote control.",
    specs: {
      Tank: "15 Litres",
      Type: "Evaporative Cooler",
      Speeds: "3",
      Remote: "Yes"
    }
  },
  {
    id: 13,
    name: "Midea 1.0HP Split AC R32 Inverter 5 Stars",
    brand: "Midea",
    brandId: "midea",
    model: "",
    category: "ac",
    image: "/img/products/Midea-1.0hp-Ac-R32-Inverter-MSEP-5-Stars-MSEP-09CRFN8-768x768.jpg",
    images: ["/img/products/Midea-1.0hp-Ac-R32-Inverter-MSEP-5-Stars-MSEP-09CRFN8-768x768.jpg"],
    price: 6999,
    oldPrice: null,
    discount: 0,
    rating: 4.7,
    reviews: 112,
    icon: "❄️",
    color: "#00a0e9",
    tags: [
      "new-arrivals",
      "best-sellers"
    ],
    badge: "new",
    featured: true,
    description: "1.0HP 5-star inverter split AC with R32 refrigerant for superior energy efficiency and quiet operation.",
    specs: {
      Capacity: "1.0HP",
      Refrigerant: "R32",
      "Energy Stars": "5",
      Type: "Inverter Split",
      Coverage: "Up to 15 m²"
    }
  },
  {
    id: 14,
    name: "Midea 1.5HP Split AC R32 Inverter 5 Stars",
    brand: "Midea",
    brandId: "midea",
    model: "",
    category: "ac",
    image: "/img/products/MIDEA-1.5HP-SPLIT-AC-R32-INVERTER-MSEP-5-STARS-MSEP-12CRFN8-FRONT-768x768.jpg",
    images: ["/img/products/MIDEA-1.5HP-SPLIT-AC-R32-INVERTER-MSEP-5-STARS-MSEP-12CRFN8-FRONT-768x768.jpg"],
    price: 7299,
    oldPrice: null,
    discount: 0,
    rating: 4.8,
    reviews: 143,
    icon: "❄️",
    color: "#00a0e9",
    tags: [
      "new-arrivals",
      "best-sellers"
    ],
    badge: "new",
    featured: true,
    description: "1.5HP 5-star R32 inverter AC with ultra-quiet mode, WiFi control, and self-cleaning filter.",
    specs: {
      Capacity: "1.5HP",
      Refrigerant: "R32",
      "Energy Stars": "5",
      Type: "Inverter Split",
      Coverage: "Up to 25 m²",
      WiFi: "Yes"
    }
  },
  {
    id: 15,
    name: "Midea 2.0HP R410 Split Air Conditioner",
    brand: "Midea",
    brandId: "midea",
    model: "",
    category: "ac",
    image: "/img/products/MIDEA-1.5HP-R410-SPLIT-AIR-CONDITIONER1.jpg",
    images: ["/img/products/MIDEA-1.5HP-R410-SPLIT-AIR-CONDITIONER1.jpg"],
    price: 6499,
    oldPrice: 7899,
    discount: 18,
    rating: 4.5,
    reviews: 198,
    icon: "❄️",
    color: "#00a0e9",
    tags: [
      "top-deals"
    ],
    badge: "sale",
    description: "2.0HP split air conditioner with R410 refrigerant, rapid cooling, and auto-restart after power outage.",
    specs: {
      Capacity: "2.0HP",
      Refrigerant: "R410",
      Type: "Split",
      Coverage: "Up to 30 m²",
      Warranty: "3 Years"
    }
  },
  {
    id: 16,
    name: "Midea 2.0HP Split AC R32 Inverter 5 Stars",
    brand: "Midea",
    brandId: "midea",
    model: "",
    category: "ac",
    image: "/img/products/MIDEA-2.0HP-SPLIT-AC-R32-INVERTER-MSEP-5-STARS-MSEP-18HRFN8-FRONT-768x768.jpg",
    images: ["/img/products/MIDEA-2.0HP-SPLIT-AC-R32-INVERTER-MSEP-5-STARS-MSEP-18HRFN8-FRONT-768x768.jpg"],
    price: 9999,
    oldPrice: null,
    discount: 0,
    rating: 4.8,
    reviews: 89,
    icon: "❄️",
    color: "#00a0e9",
    tags: [
      "new-arrivals",
      "trending"
    ],
    badge: "new",
    description: "2.0HP 5-star R32 inverter split AC — the ultimate in energy efficiency and powerful cooling performance.",
    specs: {
      Capacity: "2.0HP",
      Refrigerant: "R32",
      "Energy Stars": "5",
      Type: "Inverter Split",
      Coverage: "Up to 35 m²"
    }
  },
  {
    id: 17,
    name: "Midea 2.5HP Floor Standing Air Conditioner",
    brand: "Midea",
    brandId: "midea",
    model: "",
    category: "ac",
    image: "/img/products/MIDEA-3.0HP-FLOOR-STANDING-AIR-CONDITIONER-1.jpg",
    images: ["/img/products/MIDEA-3.0HP-FLOOR-STANDING-AIR-CONDITIONER-1.jpg"],
    price: 13999,
    oldPrice: null,
    discount: 0,
    rating: 4.7,
    reviews: 67,
    icon: "❄️",
    color: "#00a0e9",
    tags: [
      "trending"
    ],
    description: "2.5HP floor-standing AC ideal for large open-plan spaces, with powerful airflow and auto-swing.",
    specs: {
      Capacity: "2.5HP",
      Type: "Floor Standing",
      Coverage: "Up to 50 m²",
      Swing: "Auto 4-Way"
    }
  },
  {
    id: 18,
    name: "Midea 2.5HP Inverter R410 Cassette Unit",
    brand: "Midea",
    brandId: "midea",
    model: "",
    category: "ac",
    image: "/img/products/MIDEA-2.5HP-INVERTER-R410-CASSETTE-UNIT.jpg",
    images: ["/img/products/MIDEA-2.5HP-INVERTER-R410-CASSETTE-UNIT.jpg"],
    price: 23999,
    oldPrice: 18499,
    discount: 14,
    rating: 4.6,
    reviews: 43,
    icon: "❄️",
    color: "#00a0e9",
    tags: [
      "top-deals"
    ],
    badge: "sale",
    description: "2.5HP ceiling cassette inverter unit for commercial and large residential spaces with 360° air distribution.",
    specs: {
      Capacity: "2.5HP",
      Type: "Cassette Inverter",
      Refrigerant: "R410",
      Coverage: "Up to 60 m²",
      Airflow: "360°"
    }
  },
  {
    id: 19,
    name: "Midea 128Ltrs Double Door Top Mount Fridge",
    brand: "Midea",
    brandId: "midea",
    model: "",
    category: "fridge",
    image: "/img/products/MDRT197FGG28-FRONT-768x768.png",
    images: ["/img/products/MDRT197FGG28-FRONT-768x768.png"],
    price: 2499,
    oldPrice: 3599,
    discount: 31,
    rating: 4.3,
    reviews: 189,
    icon: "🧊",
    color: "#00a0e9",
    tags: [
      "top-deals",
      "best-sellers"
    ],
    badge: "sale",
    flashSale: true,
    featured: true,
    description: "128-litre double door fridge with top-mount freezer, fast freeze, and LED interior lighting.",
    specs: {
      Capacity: "128 Litres",
      Type: "Double Door",
      Freezer: "Top Mount",
      Interior: "LED",
      Energy: "A+"
    }
  },
  {
    id: 20,
    name: "Midea 142Ltrs Chest Freezer",
    brand: "Midea",
    brandId: "midea",
    model: "",
    category: "fridge",
    image: "/img/products/3V7A0191-1.png",
    images: ["/img/products/3V7A0191-1.png"],
    price: 3599,
    oldPrice: 3599,
    discount: 33,
    rating: 4.4,
    reviews: 234,
    icon: "🧊",
    color: "#00a0e9",
    tags: [
      "top-deals",
      "best-sellers"
    ],
    badge: "sale",
    featured: true,
    description: "142-litre chest freezer with fast freeze function, durable interior, and low energy consumption.",
    specs: {
      Capacity: "142 Litres",
      Type: "Chest Freezer",
      "Fast Freeze": "Yes",
      Energy: "A+"
    }
  },
  {
    id: 21,
    name: "Midea 173Ltrs Double Door Top Freezer Fridge",
    brand: "Midea",
    brandId: "midea",
    model: "",
    category: "fridge",
    image: "/img/products/MDRT237FGG28-1-768x768.jpg",
    images: ["/img/products/MDRT237FGG28-1-768x768.jpg"],
    price: 4499,
    oldPrice: null,
    discount: 0,
    rating: 4.5,
    reviews: 156,
    icon: "🧊",
    color: "#00a0e9",
    tags: [
      "new-arrivals",
      "trending"
    ],
    badge: "new",
    description: "173-litre double door fridge with separate freezer, multi-airflow cooling, and adjustable shelves.",
    specs: {
      Capacity: "173 Litres",
      Type: "Double Door",
      Freezer: "Top",
      Cooling: "Multi-airflow"
    }
  },
  {
    id: 22,
    name: "Midea 198Ltrs Chest Freezer",
    brand: "Midea",
    brandId: "midea",
    model: "",
    category: "fridge",
    image: "/img/products/MIDEA-198LTRS-CHEST-FREEZER-MDRC280FZN43-FRONT-768x768.jpg",
    images: ["/img/products/MIDEA-198LTRS-CHEST-FREEZER-MDRC280FZN43-FRONT-768x768.jpg"],
    price: 2899,
    oldPrice: 4499,
    discount: 36,
    rating: 4.5,
    reviews: 267,
    icon: "🧊",
    color: "#00a0e9",
    tags: [
      "top-deals",
      "best-sellers"
    ],
    badge: "sale",
    flashSale: true,
    featured: true,
    description: "198-litre chest freezer ideal for bulk storage with quick-freeze capability and strong insulation.",
    specs: {
      Capacity: "198 Litres",
      Type: "Chest Freezer",
      "Fast Freeze": "Yes",
      Energy: "A+"
    }
  },
  {
    id: 23,
    name: "Midea 211Ltrs Display Fridge",
    brand: "Midea",
    brandId: "midea",
    model: "",
    category: "fridge",
    image: "/img/products/MIDEA-281LTR-DISPLAY-FRIDGE1-1.jpg",
    images: ["/img/products/MIDEA-281LTR-DISPLAY-FRIDGE1-1.jpg"],
    price: 4999,
    oldPrice: 7099,
    discount: 30,
    rating: 4.4,
    reviews: 98,
    icon: "🧊",
    color: "#00a0e9",
    tags: [
      "top-deals"
    ],
    badge: "sale",
    description: "211-litre glass-door display fridge — perfect for businesses, cafes, and homes for visible cold storage.",
    specs: {
      Capacity: "211 Litres",
      Type: "Display Fridge",
      Door: "Glass",
      Lighting: "LED"
    }
  },
  {
    id: 24,
    name: "Midea 249Ltrs Chest Freezer",
    brand: "Midea",
    brandId: "midea",
    model: "",
    category: "fridge",
    image: "/img/products/MIDEA-198LTR-CHEST-FREEZER1-1.jpg",
    images: ["/img/products/MIDEA-198LTR-CHEST-FREEZER1-1.jpg"],
    price: 3999,
    oldPrice: 5299,
    discount: 25,
    rating: 4.5,
    reviews: 143,
    icon: "🧊",
    color: "#00a0e9",
    tags: [
      "top-deals"
    ],
    badge: "sale",
    description: "249-litre large chest freezer with wire baskets, lockable lid, and eco-friendly compressor.",
    specs: {
      Capacity: "249 Litres",
      Type: "Chest Freezer",
      Baskets: "Yes",
      Lock: "Yes"
    }
  },
  {
    id: 25,
    name: "Midea 302Ltrs Double Door Bottom Freezer",
    brand: "Midea",
    brandId: "midea",
    model: "",
    category: "fridge",
    image: "/img/products/MIDEA-302LTR-DOUBLE-DOOR-BOTTOM-FREEZER-MDRB424FGF02-FRONT-768x768.jpg",
    images: ["/img/products/MIDEA-302LTR-DOUBLE-DOOR-BOTTOM-FREEZER-MDRB424FGF02-FRONT-768x768.jpg"],
    price: 10799,
    oldPrice: null,
    discount: 0,
    rating: 4.7,
    reviews: 78,
    icon: "🧊",
    color: "#00a0e9",
    tags: [
      "new-arrivals",
      "trending"
    ],
    badge: "new",
    description: "302-litre 4-star double door fridge with bottom freezer, inverter compressor, and water dispenser.",
    specs: {
      Capacity: "302 Litres",
      Type: "Bottom Freezer",
      "Energy Stars": "4",
      Inverter: "Yes"
    }
  },
  {
    id: 26,
    name: "Midea 418Ltrs Chest Freezer",
    brand: "Midea",
    brandId: "midea",
    model: "",
    category: "fridge",
    image: "/img/products/MIDEA-418LTRS-CHEST-FREEZER-MDRC564FZF01-FRONT-768x768.jpg",
    images: ["/img/products/MIDEA-418LTRS-CHEST-FREEZER-MDRC564FZF01-FRONT-768x768.jpg"],
    price: 8799,
    oldPrice: null,
    discount: 0,
    rating: 4.6,
    reviews: 54,
    icon: "🧊",
    color: "#00a0e9",
    tags: [
      "trending"
    ],
    description: "418-litre commercial-grade chest freezer for heavy-duty bulk storage with dual-layer insulation.",
    specs: {
      Capacity: "418 Litres",
      Type: "Chest Freezer",
      Use: "Commercial/Home",
      Energy: "A+"
    }
  },
  {
    id: 27,
    name: "Midea 7KG Twin Top Washing Machine",
    brand: "Midea",
    brandId: "midea",
    model: "",
    category: "laundry",
    image: "/img/products/MT100W70W-GH-5-768x768.jpg",
    images: ["/img/products/MT100W70W-GH-5-768x768.jpg"],
    price: 1999,
    oldPrice: 2199,
    discount: 9,
    rating: 4.3,
    reviews: 198,
    icon: "🫧",
    color: "#00a0e9",
    tags: [
      "top-deals",
      "best-sellers"
    ],
    badge: "sale",
    description: "7kg twin-tub washing machine with separate wash and spin tubs for fast, efficient laundry.",
    specs: {
      Capacity: "7 kg",
      Type: "Twin Top",
      "Spin Speed": "1300 RPM",
      Programs: "5"
    }
  },
  {
    id: 28,
    name: "Midea 8KG Top Load Washing Machine",
    brand: "Midea",
    brandId: "midea",
    model: "",
    category: "laundry",
    image: "/img/products/MIDEA-8KG-TOP-LOAD-FULL-AUTO-WASHING-MACHINE-MA200W80G-FRONT-768x768.jpg",
    images: ["/img/products/MIDEA-8KG-TOP-LOAD-FULL-AUTO-WASHING-MACHINE-MA200W80G-FRONT-768x768.jpg"],
    price: 4499,
    oldPrice: null,
    discount: 0,
    rating: 4.5,
    reviews: 167,
    icon: "🫧",
    color: "#00a0e9",
    tags: [
      "new-arrivals",
      "best-sellers"
    ],
    badge: "new",
    featured: true,
    description: "8kg fully automatic top load washer with smart fuzzy logic control and multiple wash programs.",
    specs: {
      Capacity: "8 kg",
      Type: "Top Load Full Auto",
      Programs: "8",
      "Spin Speed": "800 RPM"
    }
  },
  {
    id: 29,
    name: "Midea 10.5KG Top Load Washing Machine",
    brand: "Midea",
    brandId: "midea",
    model: "",
    category: "laundry",
    image: "/img/products/4-5-768x768.jpg",
    images: ["/img/products/4-5-768x768.jpg"],
    price: 5299,
    oldPrice: null,
    discount: 0,
    rating: 4.6,
    reviews: 123,
    icon: "🫧",
    color: "#00a0e9",
    tags: [
      "new-arrivals",
      "trending"
    ],
    badge: "new",
    description: "10.5kg large capacity top load washer — ideal for big families, with 10 wash programs and child lock.",
    specs: {
      Capacity: "10.5 kg",
      Type: "Top Load",
      Programs: "10",
      "Child Lock": "Yes"
    }
  },
  {
    id: 30,
    name: "Midea 12KG Front Load Washing Machine",
    brand: "Midea",
    brandId: "midea",
    model: "",
    category: "laundry",
    image: "/img/products/MIDEA-FRONT-LOAD-12K-WASHING-MACHINE-MF200W120WBT-FRONT-768x768.jpg",
    images: ["/img/products/MIDEA-FRONT-LOAD-12K-WASHING-MACHINE-MF200W120WBT-FRONT-768x768.jpg"],
    price: 6999,
    oldPrice: 8799,
    discount: 20,
    rating: 4.7,
    reviews: 201,
    icon: "🫧",
    color: "#00a0e9",
    tags: [
      "top-deals",
      "best-sellers"
    ],
    badge: "sale",
    featured: true,
    description: "12kg front load washer with inverter motor, steam refresh, allergy care cycle, and app control.",
    specs: {
      Capacity: "12 kg",
      Type: "Front Load",
      Motor: "Inverter",
      Steam: "Yes",
      WiFi: "Yes"
    }
  },
  {
    id: 31,
    name: "Midea 8KG Washer 6KG Dryer Combo",
    brand: "Midea",
    brandId: "midea",
    model: "",
    category: "laundry",
    image: "/img/products/mf200d-768x768.jpg",
    images: ["/img/products/mf200d-768x768.jpg"],
    price: 8299,
    oldPrice: null,
    discount: 0,
    rating: 4.6,
    reviews: 87,
    icon: "🫧",
    color: "#00a0e9",
    tags: [
      "new-arrivals",
      "trending"
    ],
    badge: "new",
    description: "8kg wash + 6kg dry combo washer-dryer — wash and dry in one machine, no separate dryer needed.",
    specs: {
      "Wash Capacity": "8 kg",
      "Dry Capacity": "6 kg",
      Type: "Washer-Dryer Combo",
      Motor: "Inverter"
    }
  },
  {
    id: 32,
    name: "Nasco 10Kg Front Load Washing Machine",
    brand: "NASCO",
    brandId: "nasco",
    model: "",
    category: "laundry",
    image: "/img/products/NASFL-JS10KG-S-FRONT-768x768.png",
    images: ["/img/products/NASFL-JS10KG-S-FRONT-768x768.png"],
    price: 4299,
    oldPrice: 5049,
    discount: 15,
    rating: 4.4,
    reviews: 143,
    icon: "🫧",
    color: "#003087",
    tags: [
      "top-deals"
    ],
    badge: "sale",
    description: "NASCO 10kg front loader with multiple wash cycles, child lock, and energy-efficient inverter motor.",
    specs: {
      Capacity: "10 kg",
      Type: "Front Load",
      Motor: "Inverter",
      Programs: "15",
      "Child Lock": "Yes"
    }
  },
  {
    id: 33,
    name: "Nasco 11KG Front Load Washing Machine",
    brand: "NASCO",
    brandId: "nasco",
    model: "",
    category: "laundry",
    image: "/img/products/NASCO-11KG-FRONT-LOAD-WASHER-MFC110-U1401B-FRONT-768x768.jpg",
    images: ["/img/products/NASCO-11KG-FRONT-LOAD-WASHER-MFC110-U1401B-FRONT-768x768.jpg"],
    price: 7499,
    oldPrice: null,
    discount: 0,
    rating: 4.6,
    reviews: 98,
    icon: "🫧",
    color: "#003087",
    tags: [
      "new-arrivals"
    ],
    badge: "new",
    description: "NASCO 11kg front load washer with high spin speed, steam hygiene, and smart delay start function.",
    specs: {
      Capacity: "11 kg",
      Type: "Front Load",
      "Spin Speed": "1400 RPM",
      Steam: "Yes"
    }
  },
  {
    id: 34,
    name: "Midea 12kg Washer 8KG Dryer Combo",
    brand: "Midea",
    brandId: "midea",
    model: "",
    category: "laundry",
    image: "/img/products/MIDEA-12KG-WASH-8KG-DRY-COMBO-WASHING-MACHINE-MF200D120WB-T-FRONT-768x768.jpg",
    images: ["/img/products/MIDEA-12KG-WASH-8KG-DRY-COMBO-WASHING-MACHINE-MF200D120WB-T-FRONT-768x768.jpg"],
    price: 10099,
    oldPrice: null,
    discount: 0,
    rating: 4.7,
    reviews: 56,
    icon: "🫧",
    color: "#00a0e9",
    tags: [
      "trending"
    ],
    description: "Premium 12kg wash + 8kg dry all-in-one machine with inverter motor and smart cycle selection.",
    specs: {
      "Wash Capacity": "12 kg",
      "Dry Capacity": "8 kg",
      Type: "Combo",
      Motor: "Inverter"
    }
  },
  {
    id: 35,
    name: "Midea 1.5Ltrs Table Blender",
    brand: "Midea",
    brandId: "midea",
    model: "",
    category: "kitchen",
    image: "/img/products/MIDEA-1.5LTR-WHITE-BLENDER-MJ-BL2516CEE-MP01S-768x768.jpg",
    images: ["/img/products/MIDEA-1.5LTR-WHITE-BLENDER-MJ-BL2516CEE-MP01S-768x768.jpg"],
    price: 299,
    oldPrice: 499,
    discount: 40,
    rating: 4.2,
    reviews: 312,
    icon: "🍳",
    color: "#00a0e9",
    tags: [
      "top-deals",
      "best-sellers"
    ],
    badge: "sale",
    flashSale: true,
    description: "1.5-litre table blender with stainless steel blades, 3-speed control, and easy-clean design.",
    specs: {
      Capacity: "1.5 Litres",
      Speeds: "3",
      Blades: "Stainless Steel",
      Power: "350W"
    }
  },
  {
    id: 36,
    name: "Midea 20Ltrs Microwave Solo",
    brand: "Midea",
    brandId: "midea",
    model: "",
    category: "kitchen",
    image: "/img/products/MM7P012MZ-B-2-jpg-768x768.webp",
    images: ["/img/products/MM7P012MZ-B-2-jpg-768x768.webp"],
    price: 699,
    oldPrice: 1099,
    discount: 36,
    rating: 4.3,
    reviews: 267,
    icon: "🍳",
    color: "#00a0e9",
    tags: [
      "top-deals",
      "best-sellers"
    ],
    badge: "sale",
    flashSale: true,
    featured: true,
    description: "20-litre solo microwave with 5 power levels, digital display, auto-defrost, and child lock.",
    specs: {
      Capacity: "20 Litres",
      Power: "700W",
      Levels: "5",
      Functions: "Solo Microwave",
      Control: "Digital"
    }
  },
  {
    id: 37,
    name: "Midea 20Ltrs Grill Microwave Silver",
    brand: "Midea",
    brandId: "midea",
    model: "",
    category: "kitchen",
    image: "/img/products/1-24.jpg",
    images: ["/img/products/1-24.jpg"],
    price: 1299,
    oldPrice: null,
    discount: 0,
    rating: 4.4,
    reviews: 189,
    icon: "🍳",
    color: "#00a0e9",
    tags: [
      "new-arrivals"
    ],
    badge: "new",
    description: "20-litre grill microwave with combined microwave and grill cooking for crispy, browned results.",
    specs: {
      Capacity: "20 Litres",
      Functions: "Microwave + Grill",
      Finish: "Silver",
      Control: "Digital"
    }
  },
  {
    id: 38,
    name: "Midea 4 Burner Gas Cooker",
    brand: "Midea",
    brandId: "midea",
    model: "",
    category: "kitchen",
    image: "/img/products/MIDEA-4-BURNER-GAS-COOKER-BLACK-MIRROR-GRILL-SP5055T082-BG-FRONT-768x768.jpg",
    images: ["/img/products/MIDEA-4-BURNER-GAS-COOKER-BLACK-MIRROR-GRILL-SP5055T082-BG-FRONT-768x768.jpg"],
    price: 2799,
    oldPrice: 2699,
    discount: 37,
    rating: 4.4,
    reviews: 312,
    icon: "🍳",
    color: "#00a0e9",
    tags: [
      "top-deals",
      "best-sellers"
    ],
    badge: "sale",
    featured: true,
    description: "4-burner black mirror gas cooker with automatic ignition, cast iron pan supports, and glass lid.",
    specs: {
      Burners: "4",
      Type: "Gas Cooker",
      Ignition: "Automatic",
      "Pan Support": "Cast Iron",
      Finish: "Black Mirror"
    }
  },
  {
    id: 39,
    name: "Midea 25Ltrs Grill Microwave",
    brand: "Midea",
    brandId: "midea",
    model: "",
    category: "kitchen",
    image: "/img/products/MIDEA-25LTR-GRILL-MICROWAVE.jpg",
    images: ["/img/products/MIDEA-25LTR-GRILL-MICROWAVE.jpg"],
    price: 1999,
    oldPrice: null,
    discount: 0,
    rating: 4.5,
    reviews: 145,
    icon: "🍳",
    color: "#00a0e9",
    tags: [
      "trending"
    ],
    description: "25-litre grill microwave with 800W grill element, quick-start one-touch cooking, and easy clean interior.",
    specs: {
      Capacity: "25 Litres",
      Functions: "Microwave + Grill",
      "Grill Power": "800W"
    }
  },
  {
    id: 40,
    name: "Midea 4 Burner Gas Cooker With Grill",
    brand: "Midea",
    brandId: "midea",
    model: "",
    category: "kitchen",
    image: "/img/products/BMG6060-WD-side-768x768.png",
    images: ["/img/products/BMG6060-WD-side-768x768.png"],
    price: 4499,
    oldPrice: null,
    discount: 0,
    rating: 4.6,
    reviews: 98,
    icon: "🍳",
    color: "#00a0e9",
    tags: [
      "new-arrivals"
    ],
    badge: "new",
    description: "4-burner freestanding gas cooker with full oven, integrated grill, and stainless steel finish.",
    specs: {
      Burners: "4",
      Oven: "Yes",
      Grill: "Yes",
      Finish: "Stainless Steel",
      Ignition: "Automatic"
    }
  },
  {
    id: 41,
    name: "Midea 10 Plates Dishwasher",
    brand: "Midea",
    brandId: "midea",
    model: "",
    category: "kitchen",
    image: "/img/products/WQP10-W7704L-1-768x768.png",
    images: ["/img/products/WQP10-W7704L-1-768x768.png"],
    price: 6499,
    oldPrice: null,
    discount: 0,
    rating: 4.5,
    reviews: 67,
    icon: "🍳",
    color: "#00a0e9",
    tags: [
      "trending"
    ],
    description: "10-place setting dishwasher with 5 wash programs, half-load option, and delay start function.",
    specs: {
      "Place Settings": "10",
      Programs: "5",
      "Half Load": "Yes",
      "Delay Start": "Yes",
      Energy: "A+"
    }
  },
  {
    id: 42,
    name: "Midea 12 Plates Dishwasher",
    brand: "Midea",
    brandId: "midea",
    model: "",
    category: "kitchen",
    image: "/img/products/MIDEA-12-PLATES-DISHWASHER-WQP12-7713E1-1.jpg",
    images: ["/img/products/MIDEA-12-PLATES-DISHWASHER-WQP12-7713E1-1.jpg"],
    price: 6599,
    oldPrice: null,
    discount: 0,
    rating: 4.6,
    reviews: 54,
    icon: "🍳",
    color: "#00a0e9",
    tags: [
      "new-arrivals"
    ],
    badge: "new",
    description: "12-place setting freestanding dishwasher with intensive, eco, and quick-wash programs.",
    specs: {
      "Place Settings": "12",
      Programs: "6",
      "Noise Level": "47dB",
      Energy: "A+"
    }
  },
  {
    id: 43,
    name: "Midea 16\" Standing Fan",
    brand: "Midea",
    brandId: "midea",
    model: "",
    category: "small",
    image: "/img/products/FS40-21M-768x768.png",
    images: ["/img/products/FS40-21M-768x768.png"],
    price: 249,
    oldPrice: 279,
    discount: 11,
    rating: 4.2,
    reviews: 423,
    icon: "💨",
    color: "#00a0e9",
    tags: [
      "top-deals",
      "best-sellers"
    ],
    badge: "sale",
    flashSale: true,
    description: "16-inch 3-speed standing fan with adjustable height, oscillation, and quiet operation.",
    specs: {
      Blade: "16\"",
      Speeds: "3",
      Oscillation: "Yes",
      Height: "Adjustable"
    }
  },
  {
    id: 44,
    name: "Midea 16 Ceiling Fan",
    brand: "Midea",
    brandId: "midea",
    model: "",
    category: "small",
    image: "/img/products/MIDEA-16-CEILING-FAN.jpg",
    images: ["/img/products/MIDEA-16-CEILING-FAN.jpg"],
    price: 479,
    oldPrice: null,
    discount: 0,
    rating: 4.3,
    reviews: 198,
    icon: "💨",
    color: "#00a0e9",
    tags: [
      "best-sellers"
    ],
    description: "16-inch ceiling fan with 3 speed settings, pull-chain control, and energy-saving motor.",
    specs: {
      Blade: "16\"",
      Speeds: "3",
      Control: "Pull Chain",
      Motor: "Energy Saving"
    }
  },
  {
    id: 45,
    name: "Midea 16 Mist Fan",
    brand: "Midea",
    brandId: "midea",
    model: "",
    category: "small",
    image: "/img/products/MIDEA-16-MIST-FAN.jpg",
    images: ["/img/products/MIDEA-16-MIST-FAN.jpg"],
    price: 1099,
    oldPrice: 1299,
    discount: 15,
    rating: 4.4,
    reviews: 167,
    icon: "💨",
    color: "#00a0e9",
    tags: [
      "top-deals",
      "trending"
    ],
    badge: "sale",
    description: "16-inch mist fan with built-in water tank, 3 speeds, 70° oscillation, and cool mist spray for hot days.",
    specs: {
      Blade: "16\"",
      Speeds: "3",
      Mist: "Yes",
      Oscillation: "70°"
    }
  },
  {
    id: 46,
    name: "Midea 10Ltrs Water Heater",
    brand: "Midea",
    brandId: "midea",
    model: "",
    category: "small",
    image: "/img/products/UYKKR-768x768.jpg",
    images: ["/img/products/UYKKR-768x768.jpg"],
    price: 1199,
    oldPrice: null,
    discount: 0,
    rating: 4.3,
    reviews: 145,
    icon: "🚿",
    color: "#00a0e9",
    tags: [
      "best-sellers"
    ],
    description: "10-litre instant electric water heater with safety valve, thermostat control, and anti-scale protection.",
    specs: {
      Capacity: "10 Litres",
      Type: "Storage Electric",
      "Safety Valve": "Yes",
      Thermostat: "Yes"
    }
  },
  {
    id: 47,
    name: "Midea 15Ltrs Water Heater",
    brand: "Midea",
    brandId: "midea",
    model: "",
    category: "small",
    image: "/img/products/WATER-HEATER-768x768.png",
    images: ["/img/products/WATER-HEATER-768x768.png"],
    price: 1299,
    oldPrice: null,
    discount: 0,
    rating: 4.4,
    reviews: 198,
    icon: "🚿",
    color: "#00a0e9",
    tags: [
      "best-sellers"
    ],
    description: "15-litre storage water heater with digital thermostat, rapid heating, and anti-dry protection.",
    specs: {
      Capacity: "15 Litres",
      Type: "Storage Electric",
      Thermostat: "Digital",
      Protection: "Anti-dry"
    }
  },
  {
    id: 48,
    name: "Midea 15Ltrs Air Cooler",
    brand: "Midea",
    brandId: "midea",
    model: "",
    category: "small",
    image: "/img/products/1-1-768x768.png",
    images: ["/img/products/1-1-768x768.png"],
    price: 1499,
    oldPrice: 2099,
    discount: 29,
    rating: 4.3,
    reviews: 213,
    icon: "❄️",
    color: "#00a0e9",
    tags: [
      "top-deals"
    ],
    badge: "sale",
    description: "15-litre portable evaporative air cooler with 3 speeds, remote control, and 8-hour timer.",
    specs: {
      Tank: "15 Litres",
      Speeds: "3",
      Remote: "Yes",
      Timer: "8 Hours"
    }
  },
  {
    id: 49,
    name: "Midea 16Ltrs Water Dispenser",
    brand: "Midea",
    brandId: "midea",
    model: "",
    category: "small",
    image: "/img/products/MIDEA-16-LTRS-3-TAPS-STORAGE-CABINET-WHITE-YL2037S-FRONT-OPEN-768x768.png",
    images: ["/img/products/MIDEA-16-LTRS-3-TAPS-STORAGE-CABINET-WHITE-YL2037S-FRONT-OPEN-768x768.png"],
    price: 2599,
    oldPrice: null,
    discount: 0,
    rating: 4.5,
    reviews: 178,
    icon: "💧",
    color: "#00a0e9",
    tags: [
      "new-arrivals",
      "trending"
    ],
    badge: "new",
    description: "16-litre 3-tap water dispenser with storage cabinet — hot, warm & cold water at the push of a button.",
    specs: {
      Capacity: "16 Litres",
      Taps: "3 (Hot/Warm/Cold)",
      Cabinet: "Yes",
      Finish: "White"
    }
  },
  {
    id: 50,
    name: "Midea 50Ltrs Water Heater",
    brand: "Midea",
    brandId: "midea",
    model: "",
    category: "small",
    image: "/img/products/D50-15FN-150x150.png",
    images: ["/img/products/D50-15FN-150x150.png"],
    price: 1499,
    oldPrice: null,
    discount: 0,
    rating: 4.4,
    reviews: 112,
    icon: "🚿",
    color: "#00a0e9",
    tags: [
      "best-sellers"
    ],
    description: "50-litre large storage electric water heater suitable for families, with magnesium anode protection.",
    specs: {
      Capacity: "50 Litres",
      Type: "Storage Electric",
      Protection: "Magnesium Anode",
      Safety: "Pressure Relief Valve"
    }
  },
  {
    id: 51,
    name: "Samsung 32\" LED FHD Smart TV (UA32H5000FUXGH)",
    brand: "Samsung",
    brandId: "samsung",
    model: "UA32H5000FUXGH",
    category: "tv",
    image: "/img/products/UA43CU7000UXGH-1-jpg.webp",
    images: ["/img/products/UA43CU7000UXGH-1-jpg.webp"],
    price: 3399,
    oldPrice: null,
    discount: 0,
    rating: 4.7,
    reviews: 89,
    icon: "📺",
    color: "",
    tags: [
      "samsung",
      "tv",
      "smart"
    ],
    featured: true,
    description: "Samsung 32\" LED FHD SMART. Smart TV with digital satellite receiver, vibrant display and built-in streaming apps.",
    specs: {
      "Screen Size": "32\"",
      Resolution: "Full HD",
      "Smart TV": "Yes",
      Model: "UA32H5000FUXGH"
    }
  },
  {
    id: 52,
    name: "Samsung 32\" LED FHD Smart TV (UA32T5300)",
    brand: "Samsung",
    brandId: "samsung",
    model: "UA32T5300",
    category: "tv",
    image: "/img/products/SAMSUNG-32-INCH-LED-FHD-SMART-TELEVISION1-1.jpg",
    images: ["/img/products/SAMSUNG-32-INCH-LED-FHD-SMART-TELEVISION1-1.jpg"],
    price: 3399,
    oldPrice: null,
    discount: 0,
    rating: 4.2,
    reviews: 267,
    icon: "📺",
    color: "",
    tags: [
      "samsung",
      "tv",
      "smart"
    ],
    featured: true,
    description: "Samsung 32\" LED FHD SMART. Smart TV with digital satellite receiver, vibrant display and built-in streaming apps.",
    specs: {
      "Screen Size": "32\"",
      Resolution: "Full HD",
      "Smart TV": "Yes",
      Model: "UA32T5300"
    }
  },
  {
    id: 53,
    name: "Samsung 43'' LED FHD Smart TV",
    brand: "Samsung",
    brandId: "samsung",
    model: "UA43F6000FUXGH",
    category: "tv",
    image: "/img/products/SAMSUNG-43-INCH-DIGITAL-SATELLITE-LED-FULL-HD-TV.jpg",
    images: ["/img/products/SAMSUNG-43-INCH-DIGITAL-SATELLITE-LED-FULL-HD-TV.jpg"],
    price: 5299,
    oldPrice: null,
    discount: 0,
    rating: 4.4,
    reviews: 67,
    icon: "📺",
    color: "",
    tags: [
      "samsung",
      "tv",
      "smart"
    ],
    badge: "hot",
    featured: true,
    description: "Samsung 43'' LED FHD SMART. Smart TV with digital satellite receiver, vibrant display and built-in streaming apps.",
    specs: {
      "Screen Size": "43''",
      Resolution: "Full HD",
      "Smart TV": "Yes",
      Model: "UA43F6000FUXGH"
    }
  },
  {
    id: 54,
    name: "Samsung 43'' UHD Smart 4K TV",
    brand: "Samsung",
    brandId: "samsung",
    model: "UA43U8000FUXGH",
    category: "tv",
    image: "/img/products/africa-en-oled-tv-qa65s90dauxke-front-black-542481692.png",
    images: ["/img/products/africa-en-oled-tv-qa65s90dauxke-front-black-542481692.png"],
    price: 6599,
    oldPrice: null,
    discount: 0,
    rating: 4.3,
    reviews: 234,
    icon: "📺",
    color: "",
    tags: [
      "samsung",
      "tv",
      "smart",
      "4k"
    ],
    badge: "hot",
    featured: true,
    description: "Samsung 43'' UHD SMART 4K. Smart TV with digital satellite receiver, vibrant display and built-in streaming apps.",
    specs: {
      "Screen Size": "43''",
      Resolution: "4K UHD",
      "Smart TV": "Yes",
      Model: "UA43U8000FUXGH"
    }
  },
  {
    id: 55,
    name: "Samsung 50\" UHD Smart 4K TV",
    brand: "Samsung",
    brandId: "samsung",
    model: "UA50U8000FUXGH",
    category: "tv",
    image: "/img/products/ua50u8000fuxgh_brandpng",
    images: ["/img/products/ua50u8000fuxgh_brandpng"],
    price: 9199,
    oldPrice: null,
    discount: 0,
    rating: 4.7,
    reviews: 89,
    icon: "📺",
    color: "",
    tags: [
      "samsung",
      "tv",
      "smart",
      "4k"
    ],
    badge: "hot",
    featured: true,
    description: "Samsung 50\" UHD SMART 4K. Smart TV with digital satellite receiver, vibrant display and built-in streaming apps.",
    specs: {
      "Screen Size": "50\"",
      Resolution: "4K UHD",
      "Smart TV": "Yes",
      Model: "UA50U8000FUXGH"
    }
  },
  {
    id: 56,
    name: "Samsung 55'' UHD Smart 4K TV",
    brand: "Samsung",
    brandId: "samsung",
    model: "UA55U8000FUXGH",
    category: "tv",
    image: "/img/products/ua55u8000fuxgh_brandpng",
    images: ["/img/products/ua55u8000fuxgh_brandpng"],
    price: 9699,
    oldPrice: null,
    discount: 0,
    rating: 4.7,
    reviews: 267,
    icon: "📺",
    color: "",
    tags: [
      "samsung",
      "tv",
      "smart",
      "4k"
    ],
    badge: "hot",
    featured: true,
    description: "Samsung 55'' UHD SMART 4K. Smart TV with digital satellite receiver, vibrant display and built-in streaming apps.",
    specs: {
      "Screen Size": "55''",
      Resolution: "4K UHD",
      "Smart TV": "Yes",
      Model: "UA55U8000FUXGH"
    }
  },
  {
    id: 57,
    name: "Samsung 65'' UHD Smart 4K TV",
    brand: "Samsung",
    brandId: "samsung",
    model: "UA65U8000FUXGH",
    category: "tv",
    image: "/img/products/ua65u8000fuxgh_brandpng",
    images: ["/img/products/ua65u8000fuxgh_brandpng"],
    price: 13099,
    oldPrice: null,
    discount: 0,
    rating: 4.6,
    reviews: 89,
    icon: "📺",
    color: "",
    tags: [
      "samsung",
      "tv",
      "smart",
      "4k"
    ],
    badge: "hot",
    featured: true,
    description: "Samsung 65'' UHD SMART 4K. Smart TV with digital satellite receiver, vibrant display and built-in streaming apps.",
    specs: {
      "Screen Size": "65''",
      Resolution: "4K UHD",
      "Smart TV": "Yes",
      Model: "UA65U8000FUXGH"
    }
  },
  {
    id: 58,
    name: "Samsung 75'' UHD Smart 4K TV",
    brand: "Samsung",
    brandId: "samsung",
    model: "UA75U8000FUXGH",
    category: "tv",
    image: "/img/products/ua75u8000fuxgh_brandpng",
    images: ["/img/products/ua75u8000fuxgh_brandpng"],
    price: 21799,
    oldPrice: null,
    discount: 0,
    rating: 4.6,
    reviews: 445,
    icon: "📺",
    color: "",
    tags: [
      "samsung",
      "tv",
      "smart",
      "4k"
    ],
    badge: "hot",
    featured: true,
    description: "Samsung 75'' UHD SMART 4K. Smart TV with digital satellite receiver, vibrant display and built-in streaming apps.",
    specs: {
      "Screen Size": "75''",
      Resolution: "4K UHD",
      "Smart TV": "Yes",
      Model: "UA75U8000FUXGH"
    }
  },
  {
    id: 59,
    name: "Samsung 85'' UHD Smart 4K TV",
    brand: "Samsung",
    brandId: "samsung",
    model: "UA85U8000FUXGH",
    category: "tv",
    image: "/img/products/ua85u8000fuxgh_brandpng",
    images: ["/img/products/ua85u8000fuxgh_brandpng"],
    price: 34899,
    oldPrice: null,
    discount: 0,
    rating: 4.2,
    reviews: 124,
    icon: "📺",
    color: "",
    tags: [
      "samsung",
      "tv",
      "smart",
      "4k"
    ],
    badge: "hot",
    flashSale: true,
    featured: true,
    description: "Samsung 85'' UHD SMART 4K. Smart TV with digital satellite receiver, vibrant display and built-in streaming apps.",
    specs: {
      "Screen Size": "85''",
      Resolution: "4K UHD",
      "Smart TV": "Yes",
      Model: "UA85U8000FUXGH"
    }
  },
  {
    id: 60,
    name: "Samsung 98'' UHD Smart 4K TV",
    brand: "Samsung",
    brandId: "samsung",
    model: "UA98DU9000UXGH",
    category: "tv",
    image: "/img/products/ua98du9000uxgh_brandpng",
    images: ["/img/products/ua98du9000uxgh_brandpng"],
    price: 86999,
    oldPrice: null,
    discount: 0,
    rating: 4.2,
    reviews: 67,
    icon: "📺",
    color: "",
    tags: [
      "samsung",
      "tv",
      "smart",
      "4k"
    ],
    badge: "sale",
    flashSale: true,
    featured: true,
    description: "Samsung 98'' UHD SMART 4K. Smart TV with digital satellite receiver, vibrant display and built-in streaming apps.",
    specs: {
      "Screen Size": "98''",
      Resolution: "4K UHD",
      "Smart TV": "Yes",
      Model: "UA98DU9000UXGH"
    }
  },
  {
    id: 61,
    name: "Samsung 55\" Q-led 4K",
    brand: "Samsung",
    brandId: "samsung",
    model: "QA55Q7FAAUXGH",
    category: "small",
    image: "/img/products/qa55q7faauxgh_brandpng",
    images: ["/img/products/qa55q7faauxgh_brandpng"],
    price: 13999,
    oldPrice: null,
    discount: 0,
    rating: 4.3,
    reviews: 203,
    icon: "⚡",
    color: "",
    tags: [
      "samsung",
      "small",
      "4k"
    ],
    badge: "hot",
    featured: true,
    description: "Samsung 55\" Q-LED  4K. Compact and efficient appliance for everyday household needs.",
    specs: {
      "Size/Capacity": "55\"",
      Model: "QA55Q7FAAUXGH"
    }
  },
  {
    id: 62,
    name: "Samsung 65\" Q-led 4K",
    brand: "Samsung",
    brandId: "samsung",
    model: "QA65Q7FAAUXGH",
    category: "small",
    image: "/img/products/qa65q7faauxgh_brandpng",
    images: ["/img/products/qa65q7faauxgh_brandpng"],
    price: 17499,
    oldPrice: null,
    discount: 0,
    rating: 4.6,
    reviews: 124,
    icon: "⚡",
    color: "",
    tags: [
      "samsung",
      "small",
      "4k"
    ],
    badge: "hot",
    featured: true,
    description: "Samsung 65\" Q-LED  4K. Compact and efficient appliance for everyday household needs.",
    specs: {
      "Size/Capacity": "65\"",
      Model: "QA65Q7FAAUXGH"
    }
  },
  {
    id: 63,
    name: "Samsung 75\" Q-led 4K",
    brand: "Samsung",
    brandId: "samsung",
    model: "QA75Q7FAAUXGH",
    category: "small",
    image: "/img/products/qa75q7faauxgh_brandpng",
    images: ["/img/products/qa75q7faauxgh_brandpng"],
    price: 30599,
    oldPrice: null,
    discount: 0,
    rating: 4.6,
    reviews: 67,
    icon: "⚡",
    color: "",
    tags: [
      "samsung",
      "small",
      "4k"
    ],
    badge: "hot",
    featured: true,
    description: "Samsung 75\" Q-LED  4K. Compact and efficient appliance for everyday household needs.",
    specs: {
      "Size/Capacity": "75\"",
      Model: "QA75Q7FAAUXGH"
    }
  },
  {
    id: 64,
    name: "Samsung 85\" Q-led 4K",
    brand: "Samsung",
    brandId: "samsung",
    model: "QA85Q7FAAUXGH",
    category: "small",
    image: "/img/products/qa85q7faauxgh_brandpng",
    images: ["/img/products/qa85q7faauxgh_brandpng"],
    price: 44999,
    oldPrice: null,
    discount: 0,
    rating: 4.7,
    reviews: 145,
    icon: "⚡",
    color: "",
    tags: [
      "samsung",
      "small",
      "4k"
    ],
    badge: "hot",
    featured: true,
    description: "Samsung 85\" Q-LED  4K. Compact and efficient appliance for everyday household needs.",
    specs: {
      "Size/Capacity": "85\"",
      Model: "QA85Q7FAAUXGH"
    }
  },
  {
    id: 65,
    name: "Samsung 203 L Regrigerators - Duracool Top Mounted Freezer (RT20HAR2DSA)",
    brand: "Samsung",
    brandId: "samsung",
    model: "RT20HAR2DSA",
    category: "fridge",
    image: "/img/products/SAMSUNG-DURACOOL-TWIN-COOLING-PLUS-REGRIGERATOR1.jpg",
    images: ["/img/products/SAMSUNG-DURACOOL-TWIN-COOLING-PLUS-REGRIGERATOR1.jpg"],
    price: 6899,
    oldPrice: null,
    discount: 0,
    rating: 4.7,
    reviews: 203,
    icon: "🧊",
    color: "",
    tags: [
      "samsung",
      "fridge"
    ],
    badge: "hot",
    featured: true,
    description: "Samsung 203 L REGRIGERATORS - DURACOOL TOP MOUNTED FREEZER. High-capacity refrigerator with efficient cooling and spacious storage.",
    specs: {
      Capacity: "203 L",
      Type: "Top Freezer",
      Model: "RT20HAR2DSA"
    }
  },
  {
    id: 66,
    name: "Samsung 203 L Regrigerators - Duracool Top Mounted Freezer (RT26HAR2DSA)",
    brand: "Samsung",
    brandId: "samsung",
    model: "RT26HAR2DSA",
    category: "fridge",
    image: "/img/products/rt26har2dsa_brandpng",
    images: ["/img/products/rt26har2dsa_brandpng"],
    price: 6899,
    oldPrice: null,
    discount: 0,
    rating: 4.5,
    reviews: 67,
    icon: "🧊",
    color: "",
    tags: [
      "samsung",
      "fridge"
    ],
    badge: "hot",
    featured: true,
    description: "Samsung 203 L REGRIGERATORS - DURACOOL TOP MOUNTED FREEZER. High-capacity refrigerator with efficient cooling and spacious storage.",
    specs: {
      Capacity: "203 L",
      Type: "Top Freezer",
      Model: "RT26HAR2DSA"
    }
  },
  {
    id: 67,
    name: "Samsung 234 L Regrigerators - Duracool Top Mounted Freezer (RT22HAR4DSA/GH)",
    brand: "Samsung",
    brandId: "samsung",
    model: "RT22HAR4DSA/GH",
    category: "fridge",
    image: "/img/products/africa-en-top-mount-freezer-rt28har4dsa-rt22har4dsa-gh-462839667-1.jpg",
    images: ["/img/products/africa-en-top-mount-freezer-rt28har4dsa-rt22har4dsa-gh-462839667-1.jpg"],
    price: 7299,
    oldPrice: null,
    discount: 0,
    rating: 4.5,
    reviews: 389,
    icon: "🧊",
    color: "",
    tags: [
      "samsung",
      "fridge"
    ],
    badge: "hot",
    featured: true,
    description: "Samsung 234 L REGRIGERATORS - DURACOOL TOP MOUNTED FREEZER. High-capacity refrigerator with efficient cooling and spacious storage.",
    specs: {
      Capacity: "234 L",
      Type: "Top Freezer",
      Model: "RT22HAR4DSA/GH"
    }
  },
  {
    id: 68,
    name: "Samsung 234 L Regrigerators - Duracool Top Mounted Freezer (RT28HAR4DSA)",
    brand: "Samsung",
    brandId: "samsung",
    model: "RT28HAR4DSA",
    category: "fridge",
    image: "/img/products/africa-en-top-mount-freezer-rt28har4dsa-rt22har4dsa-gh-462839667-1.jpg",
    images: ["/img/products/africa-en-top-mount-freezer-rt28har4dsa-rt22har4dsa-gh-462839667-1.jpg"],
    price: 7299,
    oldPrice: null,
    discount: 0,
    rating: 4.4,
    reviews: 124,
    icon: "🧊",
    color: "",
    tags: [
      "samsung",
      "fridge"
    ],
    badge: "hot",
    featured: true,
    description: "Samsung 234 L REGRIGERATORS - DURACOOL TOP MOUNTED FREEZER. High-capacity refrigerator with efficient cooling and spacious storage.",
    specs: {
      Capacity: "234 L",
      Type: "Top Freezer",
      Model: "RT28HAR4DSA"
    }
  },
  {
    id: 69,
    name: "Samsung 255 L Regrigerators - Duracool Top Mounted Freezer (RT25HAR4DSA/GH)",
    brand: "Samsung",
    brandId: "samsung",
    model: "RT25HAR4DSA/GH",
    category: "fridge",
    image: "/img/products/rt25har4dsa_gh_brandpng",
    images: ["/img/products/rt25har4dsa_gh_brandpng"],
    price: 8299,
    oldPrice: null,
    discount: 0,
    rating: 4.8,
    reviews: 234,
    icon: "🧊",
    color: "",
    tags: [
      "samsung",
      "fridge"
    ],
    badge: "hot",
    featured: true,
    description: "Samsung 255 L REGRIGERATORS - DURACOOL TOP MOUNTED FREEZER. High-capacity refrigerator with efficient cooling and spacious storage.",
    specs: {
      Capacity: "255 L",
      Type: "Top Freezer",
      Model: "RT25HAR4DSA/GH"
    }
  },
  {
    id: 70,
    name: "Samsung 255 L Regrigerators - Duracool Top Mounted Freezer (RT31HAR4DSA)",
    brand: "Samsung",
    brandId: "samsung",
    model: "RT31HAR4DSA",
    category: "fridge",
    image: "/img/products/rt31har4dsa_brandpng",
    images: ["/img/products/rt31har4dsa_brandpng"],
    price: 8299,
    oldPrice: null,
    discount: 0,
    rating: 4.7,
    reviews: 445,
    icon: "🧊",
    color: "",
    tags: [
      "samsung",
      "fridge"
    ],
    badge: "hot",
    featured: true,
    description: "Samsung 255 L REGRIGERATORS - DURACOOL TOP MOUNTED FREEZER. High-capacity refrigerator with efficient cooling and spacious storage.",
    specs: {
      Capacity: "255 L",
      Type: "Top Freezer",
      Model: "RT31HAR4DSA"
    }
  },
  {
    id: 71,
    name: "Samsung 301 L Regrigerators - Duracool Twin Cooling Plus - New",
    brand: "Samsung",
    brandId: "samsung",
    model: "RT31CG5421S9GH",
    category: "fridge",
    image: "/img/products/RT31CG5421S9GH-3-jpg.webp",
    images: ["/img/products/RT31CG5421S9GH-3-jpg.webp"],
    price: 9699,
    oldPrice: null,
    discount: 0,
    rating: 4.4,
    reviews: 312,
    icon: "🧊",
    color: "",
    tags: [
      "samsung",
      "fridge"
    ],
    badge: "new",
    description: "Samsung 301 L REGRIGERATORS - DURACOOL TWIN COOLING PLUS - NEW. High-capacity refrigerator with efficient cooling and spacious storage.",
    specs: {
      Capacity: "301 L",
      Model: "RT31CG5421S9GH"
    }
  },
  {
    id: 72,
    name: "Samsung 345 L Regrigerators - Duracool Twin Cooling Plus - New",
    brand: "Samsung",
    brandId: "samsung",
    model: "RT35CG5421S9GH",
    category: "fridge",
    image: "/img/products/rt35cg5421s9gh_brandpng",
    images: ["/img/products/rt35cg5421s9gh_brandpng"],
    price: 10899,
    oldPrice: null,
    discount: 0,
    rating: 4.3,
    reviews: 67,
    icon: "🧊",
    color: "",
    tags: [
      "samsung",
      "fridge"
    ],
    badge: "new",
    description: "Samsung 345 L REGRIGERATORS - DURACOOL TWIN COOLING PLUS - NEW. High-capacity refrigerator with efficient cooling and spacious storage.",
    specs: {
      Capacity: "345 L",
      Model: "RT35CG5421S9GH"
    }
  },
  {
    id: 73,
    name: "Samsung 411 L Regrigerators - Duracool Twin Cooling Plus - New",
    brand: "Samsung",
    brandId: "samsung",
    model: "RT42CG6621S9GH",
    category: "fridge",
    image: "/img/products/rt42cg6621s9gh_brandpng",
    images: ["/img/products/rt42cg6621s9gh_brandpng"],
    price: 13499,
    oldPrice: null,
    discount: 0,
    rating: 4.8,
    reviews: 178,
    icon: "🧊",
    color: "",
    tags: [
      "samsung",
      "fridge"
    ],
    badge: "new",
    description: "Samsung 411 L REGRIGERATORS - DURACOOL TWIN COOLING PLUS - NEW. High-capacity refrigerator with efficient cooling and spacious storage.",
    specs: {
      Capacity: "411 L",
      Model: "RT42CG6621S9GH"
    }
  },
  {
    id: 74,
    name: "Samsung 460 L Regrigerators - Duracool Twin Cooling Plus - New",
    brand: "Samsung",
    brandId: "samsung",
    model: "RT47CG6631B1UT",
    category: "fridge",
    image: "/img/products/q-1.jpg",
    images: ["/img/products/q-1.jpg"],
    price: 14999,
    oldPrice: null,
    discount: 0,
    rating: 4.2,
    reviews: 89,
    icon: "🧊",
    color: "",
    tags: [
      "samsung",
      "fridge"
    ],
    badge: "new",
    description: "Samsung 460 L REGRIGERATORS - DURACOOL TWIN COOLING PLUS - NEW. High-capacity refrigerator with efficient cooling and spacious storage.",
    specs: {
      Capacity: "460 L",
      Model: "RT47CG6631B1UT"
    }
  },
  {
    id: 75,
    name: "Samsung 525 L Regrigerators - Duracool Twin Cooling Plus - New",
    brand: "Samsung",
    brandId: "samsung",
    model: "RT53DG7B60B1UT",
    category: "fridge",
    image: "/img/products/RT53DG7B60B1UT-1.png",
    images: ["/img/products/RT53DG7B60B1UT-1.png"],
    price: 17499,
    oldPrice: null,
    discount: 0,
    rating: 4.5,
    reviews: 89,
    icon: "🧊",
    color: "",
    tags: [
      "samsung",
      "fridge"
    ],
    badge: "new",
    description: "Samsung 525 L REGRIGERATORS - DURACOOL TWIN COOLING PLUS - NEW. High-capacity refrigerator with efficient cooling and spacious storage.",
    specs: {
      Capacity: "525 L",
      Model: "RT53DG7B60B1UT"
    }
  },
  {
    id: 76,
    name: "Samsung 583 Refrigerators - Side By Side",
    brand: "Samsung",
    brandId: "samsung",
    model: "RS57DG4000B4GH",
    category: "fridge",
    image: "/img/products/br-rs4000dc-side-by-side-with-large-capacity-rs57dg4100m9bz-544181303-300x300-1.jpg",
    images: ["/img/products/br-rs4000dc-side-by-side-with-large-capacity-rs57dg4100m9bz-544181303-300x300-1.jpg"],
    price: 16599,
    oldPrice: null,
    discount: 0,
    rating: 4.4,
    reviews: 178,
    icon: "🧊",
    color: "",
    tags: [
      "samsung",
      "fridge",
      "side-by-side"
    ],
    description: "Samsung 583 REFRIGERATORS - SIDE BY SIDE. High-capacity refrigerator with efficient cooling and spacious storage.",
    specs: {
      Capacity: "583",
      Type: "Side by Side",
      Model: "RS57DG4000B4GH"
    }
  },
  {
    id: 77,
    name: "Samsung 578 Refrigerators - Side By Side",
    brand: "Samsung",
    brandId: "samsung",
    model: "RS57DG4100B4GH",
    category: "fridge",
    image: "/img/products/br-rs4000dc-side-by-side-with-large-capacity-rs57dg4100m9bz-544181303-300x300-1.jpg",
    images: ["/img/products/br-rs4000dc-side-by-side-with-large-capacity-rs57dg4100m9bz-544181303-300x300-1.jpg"],
    price: 18299,
    oldPrice: null,
    discount: 0,
    rating: 4.6,
    reviews: 312,
    icon: "🧊",
    color: "",
    tags: [
      "samsung",
      "fridge",
      "side-by-side"
    ],
    description: "Samsung 578 REFRIGERATORS - SIDE BY SIDE. High-capacity refrigerator with efficient cooling and spacious storage.",
    specs: {
      Capacity: "578",
      Type: "Side by Side",
      Model: "RS57DG4100B4GH"
    }
  },
  {
    id: 78,
    name: "Samsung 650 L Refrigerators- 4 Doors Bespoke (RF65DB970E22)",
    brand: "Samsung",
    brandId: "samsung",
    model: "RF65DB970E22",
    category: "fridge",
    image: "/img/products/uk-t-style-french-door-see-thru-door-rf65db970e22eu-540378321-1.jpg",
    images: ["/img/products/uk-t-style-french-door-see-thru-door-rf65db970e22eu-540378321-1.jpg"],
    price: 52199,
    oldPrice: null,
    discount: 0,
    rating: 4.8,
    reviews: 124,
    icon: "🧊",
    color: "",
    tags: [
      "samsung",
      "fridge"
    ],
    badge: "new",
    description: "Samsung 650 L REFRIGERATORS- 4 DOORS BESPOKE. High-capacity refrigerator with efficient cooling and spacious storage.",
    specs: {
      Capacity: "650 L",
      Model: "RF65DB970E22"
    }
  },
  {
    id: 79,
    name: "Samsung 650 L Refrigerators- 4 Doors Bespoke (RF65DB960E22EF)",
    brand: "Samsung",
    brandId: "samsung",
    model: "RF65DB960E22EF",
    category: "fridge",
    image: "/img/products/uk-4-door-beverage-center-rf65db960e22eu-540091199.jpg",
    images: ["/img/products/uk-4-door-beverage-center-rf65db960e22eu-540091199.jpg"],
    price: 52199,
    oldPrice: null,
    discount: 0,
    rating: 4.7,
    reviews: 56,
    icon: "🧊",
    color: "",
    tags: [
      "samsung",
      "fridge"
    ],
    badge: "new",
    description: "Samsung 650 L REFRIGERATORS- 4 DOORS BESPOKE. High-capacity refrigerator with efficient cooling and spacious storage.",
    specs: {
      Capacity: "650 L",
      Model: "RF65DB960E22EF"
    }
  },
  {
    id: 80,
    name: "Samsung 632 L Refrigerators- 4 Doors Family Hub",
    brand: "Samsung",
    brandId: "samsung",
    model: "RF65DG9H0EB1EU",
    category: "fridge",
    image: "/img/products/RF65DG9H0EB1EU-1.png",
    images: ["/img/products/RF65DG9H0EB1EU-1.png"],
    price: 59999,
    oldPrice: null,
    discount: 0,
    rating: 4.6,
    reviews: 89,
    icon: "🧊",
    color: "",
    tags: [
      "samsung",
      "fridge"
    ],
    description: "Samsung 632 L REFRIGERATORS- 4 DOORS FAMILY HUB. High-capacity refrigerator with efficient cooling and spacious storage.",
    specs: {
      Capacity: "632 L",
      Model: "RF65DG9H0EB1EU"
    }
  },
  {
    id: 81,
    name: "Samsung WHITE Glass Panel (RA-F18DBB12GG)",
    brand: "Samsung",
    brandId: "samsung",
    model: "RA-F18DBB12GG",
    category: "fridge",
    image: "/img/products/ae-bespoke-panels-459137-ra-f18dbb12gg-536473800.jpg",
    images: ["/img/products/ae-bespoke-panels-459137-ra-f18dbb12gg-536473800.jpg"],
    price: 899,
    oldPrice: null,
    discount: 0,
    rating: 4.5,
    reviews: 89,
    icon: "🧊",
    color: "",
    tags: [
      "samsung",
      "fridge"
    ],
    badge: "sale",
    description: "Samsung WHITE GLASS PANEL. High-capacity refrigerator with efficient cooling and spacious storage.",
    specs: {
      Model: "RA-F18DBB12GG"
    }
  },
  {
    id: 82,
    name: "Samsung SATIN BEIGE Glass Panel (RA-F18DBB39GG)",
    brand: "Samsung",
    brandId: "samsung",
    model: "RA-F18DBB39GG",
    category: "fridge",
    image: "/img/products/ra-f18dbb39gg_brandpng",
    images: ["/img/products/ra-f18dbb39gg_brandpng"],
    price: 899,
    oldPrice: null,
    discount: 0,
    rating: 4.6,
    reviews: 312,
    icon: "🧊",
    color: "",
    tags: [
      "samsung",
      "fridge"
    ],
    badge: "sale",
    description: "Samsung SATIN BEIGE GLASS PANEL. High-capacity refrigerator with efficient cooling and spacious storage.",
    specs: {
      Model: "RA-F18DBB39GG"
    }
  },
  {
    id: 83,
    name: "Samsung WHITE Glass Panel (RA-F18DUU12GG)",
    brand: "Samsung",
    brandId: "samsung",
    model: "RA-F18DUU12GG",
    category: "fridge",
    image: "/img/products/ra-f18duu12gg_brandpng",
    images: ["/img/products/ra-f18duu12gg_brandpng"],
    price: 899,
    oldPrice: null,
    discount: 0,
    rating: 4.8,
    reviews: 145,
    icon: "🧊",
    color: "",
    tags: [
      "samsung",
      "fridge"
    ],
    badge: "sale",
    description: "Samsung WHITE GLASS PANEL. High-capacity refrigerator with efficient cooling and spacious storage.",
    specs: {
      Model: "RA-F18DUU12GG"
    }
  },
  {
    id: 84,
    name: "Samsung SATIN BEIGE Glass Panel (RA-F18DUU39GG)",
    brand: "Samsung",
    brandId: "samsung",
    model: "RA-F18DUU39GG",
    category: "fridge",
    image: "/img/products/ra-f18duu39gg_brandpng",
    images: ["/img/products/ra-f18duu39gg_brandpng"],
    price: 899,
    oldPrice: null,
    discount: 0,
    rating: 4.6,
    reviews: 178,
    icon: "🧊",
    color: "",
    tags: [
      "samsung",
      "fridge"
    ],
    badge: "sale",
    description: "Samsung SATIN BEIGE GLASS PANEL. High-capacity refrigerator with efficient cooling and spacious storage.",
    specs: {
      Model: "RA-F18DUU39GG"
    }
  },
  {
    id: 85,
    name: "Samsung 198L- GRAY Chest Freezer",
    brand: "Samsung",
    brandId: "samsung",
    model: "RI70F20V1GAGH",
    category: "fridge",
    image: "/img/products/RI70F20V1GAGH-FRONT-1.png",
    images: ["/img/products/RI70F20V1GAGH-FRONT-1.png"],
    price: 6499,
    oldPrice: null,
    discount: 0,
    rating: 4.6,
    reviews: 67,
    icon: "🧊",
    color: "",
    tags: [
      "samsung",
      "fridge"
    ],
    badge: "hot",
    description: "Samsung 198L- GRAY CHEST FREEZER. High-capacity refrigerator with efficient cooling and spacious storage.",
    specs: {
      Capacity: "198L- GRAY",
      Type: "Chest Freezer",
      Model: "RI70F20V1GAGH"
    }
  },
  {
    id: 86,
    name: "Samsung 287L- GRAY Chest Freezer",
    brand: "Samsung",
    brandId: "samsung",
    model: "RI70F29V1GAGH",
    category: "fridge",
    image: "/img/products/ri70f29v1gagh_brandpng",
    images: ["/img/products/ri70f29v1gagh_brandpng"],
    price: 7999,
    oldPrice: null,
    discount: 0,
    rating: 4.7,
    reviews: 89,
    icon: "🧊",
    color: "",
    tags: [
      "samsung",
      "fridge"
    ],
    badge: "hot",
    description: "Samsung 287L- GRAY CHEST FREEZER. High-capacity refrigerator with efficient cooling and spacious storage.",
    specs: {
      Capacity: "287L- GRAY",
      Type: "Chest Freezer",
      Model: "RI70F29V1GAGH"
    }
  },
  {
    id: 87,
    name: "Samsung 371L- GRAY Chest Freezer",
    brand: "Samsung",
    brandId: "samsung",
    model: "RI70F37V1GAGH",
    category: "fridge",
    image: "/img/products/ri70f37v1gagh_brandpng",
    images: ["/img/products/ri70f37v1gagh_brandpng"],
    price: 8999,
    oldPrice: null,
    discount: 0,
    rating: 4.2,
    reviews: 145,
    icon: "🧊",
    color: "",
    tags: [
      "samsung",
      "fridge"
    ],
    badge: "hot",
    description: "Samsung 371L- GRAY CHEST FREEZER. High-capacity refrigerator with efficient cooling and spacious storage.",
    specs: {
      Capacity: "371L- GRAY",
      Type: "Chest Freezer",
      Model: "RI70F37V1GAGH"
    }
  },
  {
    id: 88,
    name: "Samsung 1.0 HP Split Acs - R410 AC",
    brand: "Samsung",
    brandId: "samsung",
    model: "AR09CRHGAWK/AF",
    category: "ac",
    image: "/img/products/SAMSUNG-1.5HP-SPLIT-ACS-INVERTER-R410.jpg",
    images: ["/img/products/SAMSUNG-1.5HP-SPLIT-ACS-INVERTER-R410.jpg"],
    price: 5299,
    oldPrice: null,
    discount: 0,
    rating: 4.3,
    reviews: 312,
    icon: "❄️",
    color: "",
    tags: [
      "samsung",
      "ac"
    ],
    badge: "hot",
    description: "Samsung 1.0 HP SPLIT ACS - R410. Energy-efficient air conditioner with fast cooling and quiet operation.",
    specs: {
      Capacity: "1.0 HP",
      Refrigerant: "R410",
      Model: "AR09CRHGAWK/AF"
    }
  },
  {
    id: 89,
    name: "Samsung 1.5 HP Split Acs - R410 AC",
    brand: "Samsung",
    brandId: "samsung",
    model: "AR12CRHGAWK/AF",
    category: "ac",
    image: "/img/products/ar12crhgawk_af_brandpng",
    images: ["/img/products/ar12crhgawk_af_brandpng"],
    price: 6599,
    oldPrice: null,
    discount: 0,
    rating: 4.2,
    reviews: 67,
    icon: "❄️",
    color: "",
    tags: [
      "samsung",
      "ac"
    ],
    badge: "hot",
    description: "Samsung 1.5 HP SPLIT ACS - R410. Energy-efficient air conditioner with fast cooling and quiet operation.",
    specs: {
      Capacity: "1.5 HP",
      Refrigerant: "R410",
      Model: "AR12CRHGAWK/AF"
    }
  },
  {
    id: 90,
    name: "Samsung 2.0 HP Split Acs - R410 AC",
    brand: "Samsung",
    brandId: "samsung",
    model: "AR18CRHGAWK/AF",
    category: "ac",
    image: "/img/products/ar18crhgawk_af_brandpng",
    images: ["/img/products/ar18crhgawk_af_brandpng"],
    price: 8799,
    oldPrice: null,
    discount: 0,
    rating: 4.8,
    reviews: 89,
    icon: "❄️",
    color: "",
    tags: [
      "samsung",
      "ac"
    ],
    description: "Samsung 2.0 HP SPLIT ACS - R410. Energy-efficient air conditioner with fast cooling and quiet operation.",
    specs: {
      Capacity: "2.0 HP",
      Refrigerant: "R410",
      Model: "AR18CRHGAWK/AF"
    }
  },
  {
    id: 91,
    name: "Samsung 2.5 HP Split Acs - R410 AC",
    brand: "Samsung",
    brandId: "samsung",
    model: "AR24CRHGAWK/AF",
    category: "ac",
    image: "/img/products/ar24crhgawk_af_brandpng",
    images: ["/img/products/ar24crhgawk_af_brandpng"],
    price: 12299,
    oldPrice: null,
    discount: 0,
    rating: 4.5,
    reviews: 312,
    icon: "❄️",
    color: "",
    tags: [
      "samsung",
      "ac"
    ],
    badge: "hot",
    description: "Samsung 2.5 HP SPLIT ACS - R410. Energy-efficient air conditioner with fast cooling and quiet operation.",
    specs: {
      Capacity: "2.5 HP",
      Refrigerant: "R410",
      Model: "AR24CRHGAWK/AF"
    }
  },
  {
    id: 92,
    name: "Samsung 1.5 HP Split Acs - Inverter R32 AC",
    brand: "Samsung",
    brandId: "samsung",
    model: "AR40F12D0AG/AF",
    category: "ac",
    image: "/img/products/AR40F12D0AGAF-FRONT.png",
    images: ["/img/products/AR40F12D0AGAF-FRONT.png"],
    price: 8999,
    oldPrice: null,
    discount: 0,
    rating: 4.5,
    reviews: 145,
    icon: "❄️",
    color: "",
    tags: [
      "samsung",
      "ac",
      "inverter"
    ],
    badge: "hot",
    description: "Samsung 1.5 HP SPLIT ACS - INVERTER R32. Energy-efficient air conditioner with fast cooling and quiet operation.",
    specs: {
      Capacity: "1.5 HP",
      Type: "Inverter",
      Refrigerant: "R32",
      Model: "AR40F12D0AG/AF"
    }
  },
  {
    id: 93,
    name: "Samsung 2.0 HP Split Acs - Inverter R32 AC",
    brand: "Samsung",
    brandId: "samsung",
    model: "AR40F18D0AG/AF",
    category: "ac",
    image: "/img/products/AR40F18D0AGAF-FRONT.png",
    images: ["/img/products/AR40F18D0AGAF-FRONT.png"],
    price: 14999,
    oldPrice: null,
    discount: 0,
    rating: 4.8,
    reviews: 178,
    icon: "❄️",
    color: "",
    tags: [
      "samsung",
      "ac",
      "inverter"
    ],
    badge: "sale",
    description: "Samsung 2.0 HP SPLIT ACS - INVERTER R32. Energy-efficient air conditioner with fast cooling and quiet operation.",
    specs: {
      Capacity: "2.0 HP",
      Type: "Inverter",
      Refrigerant: "R32",
      Model: "AR40F18D0AG/AF"
    }
  },
  {
    id: 94,
    name: "Samsung 2.5 HP Split Acs - Inverter R32 AC",
    brand: "Samsung",
    brandId: "samsung",
    model: "AR40F24D0AG/AF",
    category: "ac",
    image: "/img/products/ar40f24d0ag_af_brandpng",
    images: ["/img/products/ar40f24d0ag_af_brandpng"],
    price: 17499,
    oldPrice: null,
    discount: 0,
    rating: 4.3,
    reviews: 178,
    icon: "❄️",
    color: "",
    tags: [
      "samsung",
      "ac",
      "inverter"
    ],
    badge: "sale",
    description: "Samsung 2.5 HP SPLIT ACS - INVERTER R32. Energy-efficient air conditioner with fast cooling and quiet operation.",
    specs: {
      Capacity: "2.5 HP",
      Type: "Inverter",
      Refrigerant: "R32",
      Model: "AR40F24D0AG/AF"
    }
  },
  {
    id: 95,
    name: "Samsung 36,000 BTU Floor Standing Acs AC",
    brand: "Samsung",
    brandId: "samsung",
    model: "AC036TNPPEH/AC036TXQREH",
    category: "ac",
    image: "/img/products/ac036tnppeh_ac036txqreh_brandpng",
    images: ["/img/products/ac036tnppeh_ac036txqreh_brandpng"],
    price: 32299,
    oldPrice: null,
    discount: 0,
    rating: 4.4,
    reviews: 67,
    icon: "❄️",
    color: "",
    tags: [
      "samsung",
      "ac"
    ],
    description: "Samsung 36,000 BTU FLOOR STANDING ACS. Energy-efficient air conditioner with fast cooling and quiet operation.",
    specs: {
      BTU: "36,000 BTU",
      Model: "AC036TNPPEH/AC036TXQREH"
    }
  },
  {
    id: 96,
    name: "Samsung 48,000 BTU Floor Standing Acs AC",
    brand: "Samsung",
    brandId: "samsung",
    model: "AC048TNPPEH/AC048TXQREH",
    category: "ac",
    image: "/img/products/AC048TNPPEH-FRONT.png",
    images: ["/img/products/AC048TNPPEH-FRONT.png"],
    price: 42999,
    oldPrice: null,
    discount: 0,
    rating: 4.7,
    reviews: 312,
    icon: "❄️",
    color: "",
    tags: [
      "samsung",
      "ac"
    ],
    description: "Samsung 48,000 BTU FLOOR STANDING ACS. Energy-efficient air conditioner with fast cooling and quiet operation.",
    specs: {
      BTU: "48,000 BTU",
      Model: "AC048TNPPEH/AC048TXQREH"
    }
  },
  {
    id: 97,
    name: "Samsung 6 KG Washing Machines - Twin Top Semi Auto Washer Washing Machine",
    brand: "Samsung",
    brandId: "samsung",
    model: "WT60H2500",
    category: "laundry",
    image: "/img/products/1SAMSUNG-6KG-TWIN-TOP-SEMI-AUTO-WASHER-WASHING-MACHINE.jpg",
    images: ["/img/products/1SAMSUNG-6KG-TWIN-TOP-SEMI-AUTO-WASHER-WASHING-MACHINE.jpg"],
    price: 6399,
    oldPrice: null,
    discount: 0,
    rating: 4.7,
    reviews: 145,
    icon: "🫧",
    color: "",
    tags: [
      "samsung",
      "laundry"
    ],
    description: "Samsung 6 KG WASHING MACHINES - TWIN TOP SEMI AUTO WASHER. Powerful washing machine with multiple wash programs and energy-saving motor.",
    specs: {
      Capacity: "6 KG",
      Type: "Twin Tub",
      Model: "WT60H2500"
    }
  },
  {
    id: 98,
    name: "Samsung 19 KG Washing Machines - Top Load Active Wash Washing Machine",
    brand: "Samsung",
    brandId: "samsung",
    model: "WA80F19S8BNQ",
    category: "laundry",
    image: "/img/products/WA13CG5441BYNQ-3-jpg.webp",
    images: ["/img/products/WA13CG5441BYNQ-3-jpg.webp"],
    price: 13399,
    oldPrice: null,
    discount: 0,
    rating: 4.7,
    reviews: 89,
    icon: "🫧",
    color: "",
    tags: [
      "samsung",
      "laundry"
    ],
    badge: "hot",
    description: "Samsung 19 KG WASHING MACHINES - TOP LOAD ACTIVE WASH. Powerful washing machine with multiple wash programs and energy-saving motor.",
    specs: {
      Capacity: "19 KG",
      Type: "Top Load",
      Model: "WA80F19S8BNQ"
    }
  },
  {
    id: 99,
    name: "Samsung 17 KG Washing Machines - Top Load Active Wash Washing Machine",
    brand: "Samsung",
    brandId: "samsung",
    model: "WA80F17S8CNQ",
    category: "laundry",
    image: "/img/products/WA80F17S8CNQ.png",
    images: ["/img/products/WA80F17S8CNQ.png"],
    price: 10799,
    oldPrice: null,
    discount: 0,
    rating: 4.6,
    reviews: 145,
    icon: "🫧",
    color: "",
    tags: [
      "samsung",
      "laundry"
    ],
    description: "Samsung 17 KG WASHING MACHINES - TOP LOAD ACTIVE WASH. Powerful washing machine with multiple wash programs and energy-saving motor.",
    specs: {
      Capacity: "17 KG",
      Type: "Top Load",
      Model: "WA80F17S8CNQ"
    }
  },
  {
    id: 100,
    name: "Samsung 16 KG Washing Machines - Top Load Active Wash Washing Machine",
    brand: "Samsung",
    brandId: "samsung",
    model: "WA16CG6745BDNQ",
    category: "laundry",
    image: "/img/products/WA16CG6745BDNQ-jpg.webp",
    images: ["/img/products/WA16CG6745BDNQ-jpg.webp"],
    price: 9699,
    oldPrice: null,
    discount: 0,
    rating: 4.3,
    reviews: 203,
    icon: "🫧",
    color: "",
    tags: [
      "samsung",
      "laundry"
    ],
    description: "Samsung 16 KG WASHING MACHINES - TOP LOAD ACTIVE WASH. Powerful washing machine with multiple wash programs and energy-saving motor.",
    specs: {
      Capacity: "16 KG",
      Type: "Top Load",
      Model: "WA16CG6745BDNQ"
    }
  },
  {
    id: 101,
    name: "Samsung 13 KG Washing Machines - Top Load Active Wash Washing Machine (WA13CG5441BYNQ)",
    brand: "Samsung",
    brandId: "samsung",
    model: "WA13CG5441BYNQ",
    category: "laundry",
    image: "/img/products/WA13CG5441BYNQ-3-jpg.webp",
    images: ["/img/products/WA13CG5441BYNQ-3-jpg.webp"],
    price: 8799,
    oldPrice: null,
    discount: 0,
    rating: 4.7,
    reviews: 67,
    icon: "🫧",
    color: "",
    tags: [
      "samsung",
      "laundry"
    ],
    description: "Samsung 13 KG WASHING MACHINES - TOP LOAD ACTIVE WASH. Powerful washing machine with multiple wash programs and energy-saving motor.",
    specs: {
      Capacity: "13 KG",
      Type: "Top Load",
      Model: "WA13CG5441BYNQ"
    }
  },
  {
    id: 102,
    name: "Samsung 13 KG Washing Machines - Top Load Active Wash Washing Machine (WA80F13S5CNQ)",
    brand: "Samsung",
    brandId: "samsung",
    model: "WA80F13S5CNQ",
    category: "laundry",
    image: "/img/products/WA80F13S5CNQ.png",
    images: ["/img/products/WA80F13S5CNQ.png"],
    price: 8799,
    oldPrice: null,
    discount: 0,
    rating: 4.3,
    reviews: 56,
    icon: "🫧",
    color: "",
    tags: [
      "samsung",
      "laundry"
    ],
    badge: "hot",
    description: "Samsung 13 KG WASHING MACHINES - TOP LOAD ACTIVE WASH. Powerful washing machine with multiple wash programs and energy-saving motor.",
    specs: {
      Capacity: "13 KG",
      Type: "Top Load",
      Model: "WA80F13S5CNQ"
    }
  },
  {
    id: 103,
    name: "Samsung 8 KG Washing Machines - Top Load Active Wash Washing Machine",
    brand: "Samsung",
    brandId: "samsung",
    model: "WA80CG4240BWNQ",
    category: "laundry",
    image: "/img/products/WA80CG4240BWNQ-jpg.webp",
    images: ["/img/products/WA80CG4240BWNQ-jpg.webp"],
    price: 5699,
    oldPrice: null,
    discount: 0,
    rating: 4.5,
    reviews: 312,
    icon: "🫧",
    color: "",
    tags: [
      "samsung",
      "laundry"
    ],
    badge: "hot",
    description: "Samsung 8 KG WASHING MACHINES - TOP LOAD ACTIVE WASH. Powerful washing machine with multiple wash programs and energy-saving motor.",
    specs: {
      Capacity: "8 KG",
      Type: "Top Load",
      Model: "WA80CG4240BWNQ"
    }
  },
  {
    id: 104,
    name: "Samsung 11 KG Washing Machines - Front Load Full Auto Washer Washing Machine",
    brand: "Samsung",
    brandId: "samsung",
    model: "WW11CGC04DABSG",
    category: "laundry",
    image: "/img/products/Artboard-3-2.jpg",
    images: ["/img/products/Artboard-3-2.jpg"],
    price: 13999,
    oldPrice: null,
    discount: 0,
    rating: 4.7,
    reviews: 267,
    icon: "🫧",
    color: "",
    tags: [
      "samsung",
      "laundry",
      "front-load"
    ],
    badge: "sale",
    description: "Samsung 11 KG WASHING MACHINES - FRONT LOAD FULL AUTO WASHER. Powerful washing machine with multiple wash programs and energy-saving motor.",
    specs: {
      Capacity: "11 KG",
      Type: "Front Load",
      Model: "WW11CGC04DABSG"
    }
  },
  {
    id: 105,
    name: "Samsung 10.1 KG Washing Machines - Front Load Full Auto Washer Washing Machine",
    brand: "Samsung",
    brandId: "samsung",
    model: "WW10DG6U94LBNQ",
    category: "laundry",
    image: "/img/products/WW10DG6U94LBNQ-FRONT.png",
    images: ["/img/products/WW10DG6U94LBNQ-FRONT.png"],
    price: 12999,
    oldPrice: null,
    discount: 0,
    rating: 4.6,
    reviews: 67,
    icon: "🫧",
    color: "",
    tags: [
      "samsung",
      "laundry",
      "front-load"
    ],
    badge: "sale",
    description: "Samsung 10.1 KG WASHING MACHINES - FRONT LOAD FULL AUTO WASHER. Powerful washing machine with multiple wash programs and energy-saving motor.",
    specs: {
      Capacity: "10.1 KG",
      Type: "Front Load",
      Model: "WW10DG6U94LBNQ"
    }
  },
  {
    id: 106,
    name: "Samsung Washing Machines - Front Load Full Auto Washer Washing Machine (WW80FG3M05AWNQ)",
    brand: "Samsung",
    brandId: "samsung",
    model: "WW80FG3M05AWNQ",
    category: "laundry",
    image: "/img/products/ww80fg3m05awnq_brandpng",
    images: ["/img/products/ww80fg3m05awnq_brandpng"],
    price: 6499,
    oldPrice: null,
    discount: 0,
    rating: 4.7,
    reviews: 178,
    icon: "🫧",
    color: "",
    tags: [
      "samsung",
      "laundry",
      "front-load"
    ],
    description: "Samsung WASHING MACHINES - FRONT LOAD FULL AUTO WASHER. Powerful washing machine with multiple wash programs and energy-saving motor.",
    specs: {
      Type: "Front Load",
      Model: "WW80FG3M05AWNQ"
    }
  },
  {
    id: 107,
    name: "Samsung Washing Machines - Front Load Full Auto Washer Washing Machine (WW80T3040BS/NQ)",
    brand: "Samsung",
    brandId: "samsung",
    model: "WW80T3040BS/NQ",
    category: "laundry",
    image: "/img/products/ww80t3040bs_nq_brandpng",
    images: ["/img/products/ww80t3040bs_nq_brandpng"],
    price: 9199,
    oldPrice: null,
    discount: 0,
    rating: 4.8,
    reviews: 124,
    icon: "🫧",
    color: "",
    tags: [
      "samsung",
      "laundry",
      "front-load"
    ],
    badge: "hot",
    description: "Samsung WASHING MACHINES - FRONT LOAD FULL AUTO WASHER. Powerful washing machine with multiple wash programs and energy-saving motor.",
    specs: {
      Type: "Front Load",
      Model: "WW80T3040BS/NQ"
    }
  },
  {
    id: 108,
    name: "Samsung 7 KG Washing Machines - Front Load Full Auto Washer Washing Machine",
    brand: "Samsung",
    brandId: "samsung",
    model: "WW70T3010BS/NQ",
    category: "laundry",
    image: "/img/products/africa-en-front-loading-washer-ww70t301mbwle-ww70t3010bs-nq-462165959.webp",
    images: ["/img/products/africa-en-front-loading-washer-ww70t301mbwle-ww70t3010bs-nq-462165959.webp"],
    price: 7499,
    oldPrice: null,
    discount: 0,
    rating: 4.3,
    reviews: 124,
    icon: "🫧",
    color: "",
    tags: [
      "samsung",
      "laundry",
      "front-load"
    ],
    badge: "hot",
    description: "Samsung 7 KG WASHING MACHINES - FRONT LOAD FULL AUTO WASHER. Powerful washing machine with multiple wash programs and energy-saving motor.",
    specs: {
      Capacity: "7 KG",
      Type: "Front Load",
      Model: "WW70T3010BS/NQ"
    }
  },
  {
    id: 109,
    name: "Samsung Washing Machines - Front Load Full Auto Washer Washing Machine (WW70FG3M05AWNQ)",
    brand: "Samsung",
    brandId: "samsung",
    model: "WW70FG3M05AWNQ",
    category: "laundry",
    image: "/img/products/ww70fg3m05awnq_brandpng",
    images: ["/img/products/ww70fg3m05awnq_brandpng"],
    price: 5999,
    oldPrice: null,
    discount: 0,
    rating: 4.8,
    reviews: 178,
    icon: "🫧",
    color: "",
    tags: [
      "samsung",
      "laundry",
      "front-load"
    ],
    badge: "hot",
    description: "Samsung WASHING MACHINES - FRONT LOAD FULL AUTO WASHER. Powerful washing machine with multiple wash programs and energy-saving motor.",
    specs: {
      Type: "Front Load",
      Model: "WW70FG3M05AWNQ"
    }
  },
  {
    id: 110,
    name: "Samsung 22 KG WASH / 11 KG DRY Washing Machines - Washer & Dryer Washing Machine",
    brand: "Samsung",
    brandId: "samsung",
    model: "WD90F22BCSNQ",
    category: "laundry",
    image: "/img/products/africa-en-wd6000t-wd22t6500gvco-wd21t6300gv-nq-400244833.webp.webp",
    images: ["/img/products/africa-en-wd6000t-wd22t6500gvco-wd21t6300gv-nq-400244833.webp.webp"],
    price: 26999,
    oldPrice: null,
    discount: 0,
    rating: 4.5,
    reviews: 312,
    icon: "🫧",
    color: "",
    tags: [
      "samsung",
      "laundry"
    ],
    description: "Samsung 22 KG WASH / 11 KG DRY WASHING MACHINES - WASHER & DRYER. Powerful washing machine with multiple wash programs and energy-saving motor.",
    specs: {
      Capacity: "22 KG WASH / 11 KG DRY",
      Model: "WD90F22BCSNQ"
    }
  },
  {
    id: 111,
    name: "Samsung 21 KG WASH / 12 KG DRY Washing Machines - Washer & Dryer Washing Machine",
    brand: "Samsung",
    brandId: "samsung",
    model: "WD21T6300GV/NQ",
    category: "laundry",
    image: "/img/products/africa-en-wd6000t-wd22t6500gvco-wd21t6300gv-nq-400244833.webp.webp",
    images: ["/img/products/africa-en-wd6000t-wd22t6500gvco-wd21t6300gv-nq-400244833.webp.webp"],
    price: 25299,
    oldPrice: null,
    discount: 0,
    rating: 4.2,
    reviews: 67,
    icon: "🫧",
    color: "",
    tags: [
      "samsung",
      "laundry"
    ],
    badge: "hot",
    description: "Samsung 21 KG WASH / 12 KG DRY WASHING MACHINES - WASHER & DRYER. Powerful washing machine with multiple wash programs and energy-saving motor.",
    specs: {
      Capacity: "21 KG WASH / 12 KG DRY",
      Model: "WD21T6300GV/NQ"
    }
  },
  {
    id: 112,
    name: "Samsung 17 KGS WASH / 10 KGS DRY Washing Machines - Washer & Dryer Washing Ma...",
    brand: "Samsung",
    brandId: "samsung",
    model: "WD17T6300GP/SP",
    category: "laundry",
    image: "/img/products/my-wd6000t-wd22t6500gvco-431584-wd17t6300gp-sp-533231073.jpg",
    images: ["/img/products/my-wd6000t-wd22t6500gvco-431584-wd17t6300gp-sp-533231073.jpg"],
    price: 21799,
    oldPrice: null,
    discount: 0,
    rating: 4.6,
    reviews: 267,
    icon: "🫧",
    color: "",
    tags: [
      "samsung",
      "laundry"
    ],
    badge: "hot",
    description: "Samsung 17 KGS WASH / 10 KGS DRY WASHING MACHINES - WASHER & DRYER. Powerful washing machine with multiple wash programs and energy-saving motor.",
    specs: {
      Capacity: "17 KGS WASH / 10 KGS DRY",
      Model: "WD17T6300GP/SP"
    }
  },
  {
    id: 113,
    name: "Samsung 12KG WASH/ 8KG DRY Washing Machines - Washer & Dryer Washing Machine",
    brand: "Samsung",
    brandId: "samsung",
    model: "WD12T504DBN/NQ",
    category: "laundry",
    image: "/img/products/AE7XSamsung-WASHER-DRYER-WD70J5410AX-NQ-7-KG-WASH-5-KG-DRY.png",
    images: ["/img/products/AE7XSamsung-WASHER-DRYER-WD70J5410AX-NQ-7-KG-WASH-5-KG-DRY.png"],
    price: 20899,
    oldPrice: null,
    discount: 0,
    rating: 4.4,
    reviews: 67,
    icon: "🫧",
    color: "",
    tags: [
      "samsung",
      "laundry"
    ],
    description: "Samsung 12KG WASH/ 8KG DRY WASHING MACHINES - WASHER & DRYER. Powerful washing machine with multiple wash programs and energy-saving motor.",
    specs: {
      Capacity: "12KG WASH/ 8KG DRY",
      Model: "WD12T504DBN/NQ"
    }
  },
  {
    id: 114,
    name: "Samsung 11KG WASH/ 7KG DRY Washing Machines - Washer & Dryer Washing Machine",
    brand: "Samsung",
    brandId: "samsung",
    model: "WD11DB7B85GBNQ",
    category: "laundry",
    image: "/img/products/wasl.jpg",
    images: ["/img/products/wasl.jpg"],
    price: 15799,
    oldPrice: null,
    discount: 0,
    rating: 4.7,
    reviews: 56,
    icon: "🫧",
    color: "",
    tags: [
      "samsung",
      "laundry"
    ],
    description: "Samsung 11KG WASH/ 7KG DRY WASHING MACHINES - WASHER & DRYER. Powerful washing machine with multiple wash programs and energy-saving motor.",
    specs: {
      Capacity: "11KG WASH/ 7KG DRY",
      Model: "WD11DB7B85GBNQ"
    }
  },
  {
    id: 115,
    name: "Samsung 12 KG Bespoke - Washing Machines",
    brand: "Samsung",
    brandId: "samsung",
    model: "WW12BB944DGMNQ",
    category: "fridge",
    image: "/img/products/2-16-jpg.webp",
    images: ["/img/products/2-16-jpg.webp"],
    price: 17499,
    oldPrice: null,
    discount: 0,
    rating: 4.5,
    reviews: 145,
    icon: "🧊",
    color: "",
    tags: [
      "samsung",
      "fridge"
    ],
    badge: "new",
    description: "Samsung 12 KG BESPOKE - WASHING MACHINES. High-capacity refrigerator with efficient cooling and spacious storage.",
    specs: {
      Capacity: "12 KG",
      Model: "WW12BB944DGMNQ"
    }
  },
  {
    id: 116,
    name: "Samsung 12KG WASH/ 7KG DRY Bespoke - Washing Machines",
    brand: "Samsung",
    brandId: "samsung",
    model: "WD12BB944DGBNQ",
    category: "fridge",
    image: "/img/products/11.jpg",
    images: ["/img/products/11.jpg"],
    price: 20099,
    oldPrice: null,
    discount: 0,
    rating: 4.5,
    reviews: 234,
    icon: "🧊",
    color: "",
    tags: [
      "samsung",
      "fridge"
    ],
    badge: "new",
    description: "Samsung 12KG WASH/ 7KG DRY BESPOKE - WASHING MACHINES. High-capacity refrigerator with efficient cooling and spacious storage.",
    specs: {
      Capacity: "12KG WASH/ 7KG DRY",
      Model: "WD12BB944DGBNQ"
    }
  },
  {
    id: 117,
    name: "Samsung 25KG WASH / 15KGS DRY Bespoke - Washing Machines",
    brand: "Samsung",
    brandId: "samsung",
    model: "WD25DB8995BZNQ",
    category: "fridge",
    image: "/img/products/WD25DB8995BZNQ.png",
    images: ["/img/products/WD25DB8995BZNQ.png"],
    price: 49699,
    oldPrice: null,
    discount: 0,
    rating: 4.4,
    reviews: 234,
    icon: "🧊",
    color: "",
    tags: [
      "samsung",
      "fridge"
    ],
    badge: "new",
    description: "Samsung 25KG WASH / 15KGS DRY BESPOKE - WASHING MACHINES. High-capacity refrigerator with efficient cooling and spacious storage.",
    specs: {
      Capacity: "25KG WASH / 15KGS DRY",
      Model: "WD25DB8995BZNQ"
    }
  },
  {
    id: 118,
    name: "Samsung MG30T5018AK/EF Microwaves - Grill",
    brand: "Samsung",
    brandId: "samsung",
    model: "MG30T5018AK/EF",
    category: "kitchen",
    image: "/img/products/MG30T5018AKEF-FRONT-2.png",
    images: ["/img/products/MG30T5018AKEF-FRONT-2.png"],
    price: 3299,
    oldPrice: null,
    discount: 0,
    rating: 4.3,
    reviews: 267,
    icon: "🍳",
    color: "",
    tags: [
      "samsung",
      "kitchen"
    ],
    description: "Samsung MG30T5018AK/EF MICROWAVES - GRILL. Reliable kitchen appliance built for everyday use with easy controls.",
    specs: {
      "Size/Capacity": "MG30T5018AK/EF",
      Model: "MG30T5018AK/EF"
    }
  },
  {
    id: 119,
    name: "Samsung Microwaves - Grill",
    brand: "Samsung",
    brandId: "samsung",
    model: "MG32DG4524AGSG",
    category: "kitchen",
    image: "/img/products/MG32DG4524AGSG.png",
    images: ["/img/products/MG32DG4524AGSG.png"],
    price: 3499,
    oldPrice: null,
    discount: 0,
    rating: 4.6,
    reviews: 203,
    icon: "🍳",
    color: "",
    tags: [
      "samsung",
      "kitchen"
    ],
    description: "Samsung MICROWAVES - GRILL. Reliable kitchen appliance built for everyday use with easy controls.",
    specs: {
      Model: "MG32DG4524AGSG"
    }
  },
  {
    id: 120,
    name: "TCL 32\" QLED 2K TV",
    brand: "TCL",
    brandId: "tcl",
    model: "32S5K",
    category: "tv",
    image: "/img/products/32s5k_brandjpg",
    images: ["/img/products/32s5k_brandjpg"],
    price: 2799,
    oldPrice: null,
    discount: 0,
    rating: 4.4,
    reviews: 267,
    icon: "📺",
    color: "",
    tags: [
      "tcl",
      "tv",
      "qled"
    ],
    badge: "hot",
    description: "TCL 32\" QLED 2K. Smart TV with digital satellite receiver, vibrant display and built-in streaming apps.",
    specs: {
      "Screen Size": "32\"",
      Resolution: "QLED 4K",
      Model: "32S5K"
    }
  },
  {
    id: 121,
    name: "TCL 43\" QLED 2K TV",
    brand: "TCL",
    brandId: "tcl",
    model: "43S5K",
    category: "tv",
    image: "/img/products/43s5k_brandjpg",
    images: ["/img/products/43s5k_brandjpg"],
    price: 4199,
    oldPrice: null,
    discount: 0,
    rating: 4.6,
    reviews: 445,
    icon: "📺",
    color: "",
    tags: [
      "tcl",
      "tv",
      "qled"
    ],
    badge: "hot",
    description: "TCL 43\" QLED 2K. Smart TV with digital satellite receiver, vibrant display and built-in streaming apps.",
    specs: {
      "Screen Size": "43\"",
      Resolution: "QLED 4K",
      Model: "43S5K"
    }
  },
  {
    id: 122,
    name: "TCL 50'' QLED 2K TV",
    brand: "TCL",
    brandId: "tcl",
    model: "50S5K",
    category: "tv",
    image: "/img/products/50s5k_brandjpg",
    images: ["/img/products/50s5k_brandjpg"],
    price: 4499,
    oldPrice: null,
    discount: 0,
    rating: 4.6,
    reviews: 445,
    icon: "📺",
    color: "",
    tags: [
      "tcl",
      "tv",
      "qled"
    ],
    description: "TCL 50'' QLED 2K. Smart TV with digital satellite receiver, vibrant display and built-in streaming apps.",
    specs: {
      "Screen Size": "50''",
      Resolution: "QLED 4K",
      Model: "50S5K"
    }
  },
  {
    id: 123,
    name: "TCL 55\" UHD Smart Tvs TV",
    brand: "TCL",
    brandId: "tcl",
    model: "55P6K",
    category: "tv",
    image: "/img/products/Tcl-75″-UHD-4K-Smart-Andriod-Television-75P6K-FRONT.png",
    images: ["/img/products/Tcl-75″-UHD-4K-Smart-Andriod-Television-75P6K-FRONT.png"],
    price: 7099,
    oldPrice: null,
    discount: 0,
    rating: 4.4,
    reviews: 67,
    icon: "📺",
    color: "",
    tags: [
      "tcl",
      "tv",
      "smart",
      "4k"
    ],
    badge: "hot",
    description: "TCL 55\" UHD SMART TVS. Smart TV with digital satellite receiver, vibrant display and built-in streaming apps.",
    specs: {
      "Screen Size": "55\"",
      Resolution: "4K UHD",
      "Smart TV": "Yes",
      Model: "55P6K"
    }
  },
  {
    id: 124,
    name: "TCL 55'' UHD Smart Tvs TV",
    brand: "TCL",
    brandId: "tcl",
    model: "55P755",
    category: "tv",
    image: "/img/products/TCL-65P635-1-jpg.webp",
    images: ["/img/products/TCL-65P635-1-jpg.webp"],
    price: 8299,
    oldPrice: null,
    discount: 0,
    rating: 4.3,
    reviews: 203,
    icon: "📺",
    color: "",
    tags: [
      "tcl",
      "tv",
      "smart",
      "4k"
    ],
    badge: "hot",
    description: "TCL 55'' UHD SMART TVS. Smart TV with digital satellite receiver, vibrant display and built-in streaming apps.",
    specs: {
      "Screen Size": "55''",
      Resolution: "4K UHD",
      "Smart TV": "Yes",
      Model: "55P755"
    }
  },
  {
    id: 125,
    name: "TCL 65'' UHD Smart Tvs TV",
    brand: "TCL",
    brandId: "tcl",
    model: "65P755",
    category: "tv",
    image: "/img/products/65p755_brandjpg",
    images: ["/img/products/65p755_brandjpg"],
    price: 10499,
    oldPrice: null,
    discount: 0,
    rating: 4.5,
    reviews: 89,
    icon: "📺",
    color: "",
    tags: [
      "tcl",
      "tv",
      "smart",
      "4k"
    ],
    badge: "hot",
    description: "TCL 65'' UHD SMART TVS. Smart TV with digital satellite receiver, vibrant display and built-in streaming apps.",
    specs: {
      "Screen Size": "65''",
      Resolution: "4K UHD",
      "Smart TV": "Yes",
      Model: "65P755"
    }
  },
  {
    id: 126,
    name: "TCL 75'' UHD Smart Tvs TV (75P6K)",
    brand: "TCL",
    brandId: "tcl",
    model: "75P6K",
    category: "tv",
    image: "/img/products/Tcl-75″-UHD-4K-Smart-Andriod-Television-75P6K-FRONT.png",
    images: ["/img/products/Tcl-75″-UHD-4K-Smart-Andriod-Television-75P6K-FRONT.png"],
    price: 16599,
    oldPrice: null,
    discount: 0,
    rating: 4.8,
    reviews: 124,
    icon: "📺",
    color: "",
    tags: [
      "tcl",
      "tv",
      "smart",
      "4k"
    ],
    badge: "sale",
    description: "TCL 75'' UHD SMART TVS. Smart TV with digital satellite receiver, vibrant display and built-in streaming apps.",
    specs: {
      "Screen Size": "75''",
      Resolution: "4K UHD",
      "Smart TV": "Yes",
      Model: "75P6K"
    }
  },
  {
    id: 127,
    name: "TCL 75'' UHD Smart Tvs TV (75P755)",
    brand: "TCL",
    brandId: "tcl",
    model: "75P755",
    category: "tv",
    image: "/img/products/75p755_brandjpg",
    images: ["/img/products/75p755_brandjpg"],
    price: 16599,
    oldPrice: null,
    discount: 0,
    rating: 4.8,
    reviews: 89,
    icon: "📺",
    color: "",
    tags: [
      "tcl",
      "tv",
      "smart",
      "4k"
    ],
    badge: "sale",
    description: "TCL 75'' UHD SMART TVS. Smart TV with digital satellite receiver, vibrant display and built-in streaming apps.",
    specs: {
      "Screen Size": "75''",
      Resolution: "4K UHD",
      "Smart TV": "Yes",
      Model: "75P755"
    }
  },
  {
    id: 128,
    name: "TCL 50\" QLED Pro 4K Smart Android TV",
    brand: "TCL",
    brandId: "tcl",
    model: "50P7K",
    category: "tv",
    image: "/img/products/121-jpg.webp",
    images: ["/img/products/121-jpg.webp"],
    price: 8799,
    oldPrice: null,
    discount: 0,
    rating: 4.3,
    reviews: 145,
    icon: "📺",
    color: "",
    tags: [
      "tcl",
      "tv",
      "smart",
      "4k",
      "qled"
    ],
    badge: "sale",
    description: "TCL 50\" QLED PRO 4K SMART ANDROID. Smart TV with digital satellite receiver, vibrant display and built-in streaming apps.",
    specs: {
      "Screen Size": "50\"",
      Resolution: "4K UHD",
      "Smart TV": "Yes",
      Model: "50P7K"
    }
  },
  {
    id: 129,
    name: "TCL 55'' QLED Pro 4K Smart Android TV",
    brand: "TCL",
    brandId: "tcl",
    model: "55P7K",
    category: "tv",
    image: "/img/products/55P7K-SIDE-1.png",
    images: ["/img/products/55P7K-SIDE-1.png"],
    price: 9699,
    oldPrice: null,
    discount: 0,
    rating: 4.3,
    reviews: 145,
    icon: "📺",
    color: "",
    tags: [
      "tcl",
      "tv",
      "smart",
      "4k",
      "qled"
    ],
    badge: "sale",
    description: "TCL 55'' QLED PRO 4K SMART ANDROID. Smart TV with digital satellite receiver, vibrant display and built-in streaming apps.",
    specs: {
      "Screen Size": "55''",
      Resolution: "4K UHD",
      "Smart TV": "Yes",
      Model: "55P7K"
    }
  },
  {
    id: 130,
    name: "TCL 65'' QLED Pro 4K Smart Android TV",
    brand: "TCL",
    brandId: "tcl",
    model: "65P7K",
    category: "tv",
    image: "/img/products/TCL-TV-QLED-GOOGLE-65-AIPQ-PROCESSOR-65P7K-FRONT.png",
    images: ["/img/products/TCL-TV-QLED-GOOGLE-65-AIPQ-PROCESSOR-65P7K-FRONT.png"],
    price: 12299,
    oldPrice: null,
    discount: 0,
    rating: 4.5,
    reviews: 389,
    icon: "📺",
    color: "",
    tags: [
      "tcl",
      "tv",
      "smart",
      "4k",
      "qled"
    ],
    badge: "hot",
    description: "TCL 65'' QLED PRO 4K SMART ANDROID. Smart TV with digital satellite receiver, vibrant display and built-in streaming apps.",
    specs: {
      "Screen Size": "65''",
      Resolution: "4K UHD",
      "Smart TV": "Yes",
      Model: "65P7K"
    }
  },
  {
    id: 131,
    name: "TCL QLED Pro 4K Smart Android TV (75P7K)",
    brand: "TCL",
    brandId: "tcl",
    model: "75P7K",
    category: "tv",
    image: "/img/products/75p7k_brandjpg",
    images: ["/img/products/75p7k_brandjpg"],
    price: 19199,
    oldPrice: null,
    discount: 0,
    rating: 4.2,
    reviews: 445,
    icon: "📺",
    color: "",
    tags: [
      "tcl",
      "tv",
      "smart",
      "4k",
      "qled"
    ],
    badge: "sale",
    description: "TCL QLED PRO 4K SMART ANDROID. Smart TV with digital satellite receiver, vibrant display and built-in streaming apps.",
    specs: {
      Resolution: "4K UHD",
      "Smart TV": "Yes",
      Model: "75P7K"
    }
  },
  {
    id: 132,
    name: "TCL 85\" QLED Pro 4K Smart Android TV",
    brand: "TCL",
    brandId: "tcl",
    model: "85P8K",
    category: "tv",
    image: "/img/products/85p8k_brandjpg",
    images: ["/img/products/85p8k_brandjpg"],
    price: 28799,
    oldPrice: null,
    discount: 0,
    rating: 4.5,
    reviews: 389,
    icon: "📺",
    color: "",
    tags: [
      "tcl",
      "tv",
      "smart",
      "4k",
      "qled"
    ],
    badge: "hot",
    description: "TCL 85\" QLED PRO 4K SMART ANDROID. Smart TV with digital satellite receiver, vibrant display and built-in streaming apps.",
    specs: {
      "Screen Size": "85\"",
      Resolution: "4K UHD",
      "Smart TV": "Yes",
      Model: "85P8K"
    }
  },
  {
    id: 133,
    name: "TCL QLED Pro 4K Smart Android TV (98P8k)",
    brand: "TCL",
    brandId: "tcl",
    model: "98P8k",
    category: "tv",
    image: "/img/products/98P8K.png",
    images: ["/img/products/98P8K.png"],
    price: 49999,
    oldPrice: null,
    discount: 0,
    rating: 4.5,
    reviews: 203,
    icon: "📺",
    color: "",
    tags: [
      "tcl",
      "tv",
      "smart",
      "4k",
      "qled"
    ],
    badge: "sale",
    description: "TCL QLED PRO 4K SMART ANDROID. Smart TV with digital satellite receiver, vibrant display and built-in streaming apps.",
    specs: {
      Resolution: "4K UHD",
      "Smart TV": "Yes",
      Model: "98P8k"
    }
  },
  {
    id: 134,
    name: "TCL 65\" Qd-mini LED 4K TV",
    brand: "TCL",
    brandId: "tcl",
    model: "65C6K",
    category: "tv",
    image: "/img/products/75C755-front-jpg.webp",
    images: ["/img/products/75C755-front-jpg.webp"],
    price: 15799,
    oldPrice: null,
    discount: 0,
    rating: 4.4,
    reviews: 203,
    icon: "📺",
    color: "",
    tags: [
      "tcl",
      "tv",
      "4k"
    ],
    badge: "sale",
    description: "TCL 65\" QD-Mini LED 4K TV. Smart TV with digital satellite receiver, vibrant display and built-in streaming apps.",
    specs: {
      "Screen Size": "65\"",
      Resolution: "4K UHD",
      Model: "65C6K"
    }
  },
  {
    id: 135,
    name: "TCL 75\" Qd-mini LED 4K TV",
    brand: "TCL",
    brandId: "tcl",
    model: "75C6K",
    category: "tv",
    image: "/img/products/TCL-TV-QLED-75-QD-MINI-LED-ONKYO-75C6K-FRONT.png",
    images: ["/img/products/TCL-TV-QLED-75-QD-MINI-LED-ONKYO-75C6K-FRONT.png"],
    price: 27899,
    oldPrice: null,
    discount: 0,
    rating: 4.8,
    reviews: 124,
    icon: "📺",
    color: "",
    tags: [
      "tcl",
      "tv",
      "4k"
    ],
    badge: "sale",
    description: "TCL 75\" QD-Mini LED 4K TV. Smart TV with digital satellite receiver, vibrant display and built-in streaming apps.",
    specs: {
      "Screen Size": "75\"",
      Resolution: "4K UHD",
      Model: "75C6K"
    }
  },
  {
    id: 136,
    name: "TCL 85\" Qd-mini LED 4K TV",
    brand: "TCL",
    brandId: "tcl",
    model: "85C6K",
    category: "tv",
    image: "/img/products/85c6k_brandjpg",
    images: ["/img/products/85c6k_brandjpg"],
    price: 37499,
    oldPrice: null,
    discount: 0,
    rating: 4.7,
    reviews: 267,
    icon: "📺",
    color: "",
    tags: [
      "tcl",
      "tv",
      "4k"
    ],
    badge: "sale",
    description: "TCL 85\" QD-Mini LED 4K TV. Smart TV with digital satellite receiver, vibrant display and built-in streaming apps.",
    specs: {
      "Screen Size": "85\"",
      Resolution: "4K UHD",
      Model: "85C6K"
    }
  },
  {
    id: 137,
    name: "TCL 98\" Qd-mini LED 4K TV",
    brand: "TCL",
    brandId: "tcl",
    model: "98C6K",
    category: "tv",
    image: "/img/products/98c6k_brandjpg",
    images: ["/img/products/98c6k_brandjpg"],
    price: 78299,
    oldPrice: null,
    discount: 0,
    rating: 4.2,
    reviews: 145,
    icon: "📺",
    color: "",
    tags: [
      "tcl",
      "tv",
      "4k"
    ],
    badge: "sale",
    description: "TCL 98\" QD-Mini LED 4K TV. Smart TV with digital satellite receiver, vibrant display and built-in streaming apps.",
    specs: {
      "Screen Size": "98\"",
      Resolution: "4K UHD",
      Model: "98C6K"
    }
  },
  {
    id: 138,
    name: "TCL 115'' Qd-mini LED 4K TV (115X955)",
    brand: "TCL",
    brandId: "tcl",
    model: "115X955",
    category: "tv",
    image: "/img/products/115X955.jpg.jpeg",
    images: ["/img/products/115X955.jpg.jpeg"],
    price: 434699,
    oldPrice: null,
    discount: 0,
    rating: 4.6,
    reviews: 312,
    icon: "📺",
    color: "",
    tags: [
      "tcl",
      "tv",
      "4k"
    ],
    badge: "sale",
    description: "TCL 115'' QD-Mini LED 4K TV. Smart TV with digital satellite receiver, vibrant display and built-in streaming apps.",
    specs: {
      "Screen Size": "115''",
      Resolution: "4K UHD",
      Model: "115X955"
    }
  },
  {
    id: 139,
    name: "TCL 115'' Qd-mini LED 4K TV (115C7K)",
    brand: "TCL",
    brandId: "tcl",
    model: "115C7K",
    category: "tv",
    image: "/img/products/115C7K.png",
    images: ["/img/products/115C7K.png"],
    price: 299999,
    oldPrice: null,
    discount: 0,
    rating: 4.8,
    reviews: 145,
    icon: "📺",
    color: "",
    tags: [
      "tcl",
      "tv",
      "4k"
    ],
    badge: "sale",
    description: "TCL 115'' QD-Mini LED 4K TV. Smart TV with digital satellite receiver, vibrant display and built-in streaming apps.",
    specs: {
      "Screen Size": "115''",
      Resolution: "4K UHD",
      Model: "115C7K"
    }
  },
  {
    id: 140,
    name: "TCL 27'' Curved -gaming Monitors TV",
    brand: "TCL",
    brandId: "tcl",
    model: "27R73Q",
    category: "tv",
    image: "/img/products/TCL-27_-HDR-PROFESSIONAL-MONITOR-27R73Q-SIDE.png",
    images: ["/img/products/TCL-27_-HDR-PROFESSIONAL-MONITOR-27R73Q-SIDE.png"],
    price: 11699,
    oldPrice: null,
    discount: 0,
    rating: 4.4,
    reviews: 89,
    icon: "📺",
    color: "",
    tags: [
      "tcl",
      "tv"
    ],
    badge: "sale",
    description: "TCL 27'' CURVED -GAMING MONITORS. Smart TV with digital satellite receiver, vibrant display and built-in streaming apps.",
    specs: {
      "Screen Size": "27''",
      Model: "27R73Q"
    }
  },
  {
    id: 141,
    name: "TCL 34'' Curved -gaming Monitors TV",
    brand: "TCL",
    brandId: "tcl",
    model: "34R83Q",
    category: "tv",
    image: "/img/products/TCL-34__-HDR-PROFESSIONAL-MONITOR-34R83Q-FRONT.png",
    images: ["/img/products/TCL-34__-HDR-PROFESSIONAL-MONITOR-34R83Q-FRONT.png"],
    price: 16599,
    oldPrice: null,
    discount: 0,
    rating: 4.4,
    reviews: 445,
    icon: "📺",
    color: "",
    tags: [
      "tcl",
      "tv"
    ],
    badge: "hot",
    description: "TCL 34'' CURVED -GAMING MONITORS. Smart TV with digital satellite receiver, vibrant display and built-in streaming apps.",
    specs: {
      "Screen Size": "34''",
      Model: "34R83Q"
    }
  },
  {
    id: 142,
    name: "TCL 100W Sound Bar TV",
    brand: "TCL",
    brandId: "tcl",
    model: "S45H",
    category: "tv",
    image: "/img/products/TS8111-GHA-1-jpg.webp",
    images: ["/img/products/TS8111-GHA-1-jpg.webp"],
    price: 1799,
    oldPrice: null,
    discount: 0,
    rating: 4.3,
    reviews: 56,
    icon: "📺",
    color: "",
    tags: [
      "tcl",
      "tv"
    ],
    badge: "hot",
    description: "TCL 100W SOUND BAR. Smart TV with digital satellite receiver, vibrant display and built-in streaming apps.",
    specs: {
      Model: "S45H"
    }
  },
  {
    id: 143,
    name: "TCL 220W Sound Bar TV",
    brand: "TCL",
    brandId: "tcl",
    model: "S55H",
    category: "tv",
    image: "/img/products/s55h_brandjpg",
    images: ["/img/products/s55h_brandjpg"],
    price: 2699,
    oldPrice: null,
    discount: 0,
    rating: 4.2,
    reviews: 267,
    icon: "📺",
    color: "",
    tags: [
      "tcl",
      "tv"
    ],
    badge: "hot",
    description: "TCL 220W SOUND BAR. Smart TV with digital satellite receiver, vibrant display and built-in streaming apps.",
    specs: {
      Model: "S55H"
    }
  },
  {
    id: 144,
    name: "TCL 580 W Sound Bar TV",
    brand: "TCL",
    brandId: "tcl",
    model: "Q65H",
    category: "tv",
    image: "/img/products/q65h_brandjpg",
    images: ["/img/products/q65h_brandjpg"],
    price: 5399,
    oldPrice: null,
    discount: 0,
    rating: 4.7,
    reviews: 312,
    icon: "📺",
    color: "",
    tags: [
      "tcl",
      "tv"
    ],
    badge: "hot",
    description: "TCL 580 W SOUND BAR. Smart TV with digital satellite receiver, vibrant display and built-in streaming apps.",
    specs: {
      Model: "Q65H"
    }
  },
  {
    id: 145,
    name: "TCL 620 W Sound Bar TV",
    brand: "TCL",
    brandId: "tcl",
    model: "Q75H",
    category: "tv",
    image: "/img/products/q75h_brandjpg",
    images: ["/img/products/q75h_brandjpg"],
    price: 8999,
    oldPrice: null,
    discount: 0,
    rating: 4.6,
    reviews: 234,
    icon: "📺",
    color: "",
    tags: [
      "tcl",
      "tv"
    ],
    badge: "hot",
    description: "TCL 620 W SOUND BAR. Smart TV with digital satellite receiver, vibrant display and built-in streaming apps.",
    specs: {
      Model: "Q75H"
    }
  },
  {
    id: 146,
    name: "TCL 860 W Sound Bar TV",
    brand: "TCL",
    brandId: "tcl",
    model: "Q85H",
    category: "tv",
    image: "/img/products/q85h_brandjpg",
    images: ["/img/products/q85h_brandjpg"],
    price: 10799,
    oldPrice: null,
    discount: 0,
    rating: 4.6,
    reviews: 89,
    icon: "📺",
    color: "",
    tags: [
      "tcl",
      "tv"
    ],
    badge: "hot",
    description: "TCL 860 W SOUND BAR. Smart TV with digital satellite receiver, vibrant display and built-in streaming apps.",
    specs: {
      Model: "Q85H"
    }
  },
  {
    id: 147,
    name: "TCL 220 W Sound Tower TV",
    brand: "TCL",
    brandId: "tcl",
    model: "TP200K",
    category: "tv",
    image: "/img/products/TP200K.png",
    images: ["/img/products/TP200K.png"],
    price: 4499,
    oldPrice: null,
    discount: 0,
    rating: 4.8,
    reviews: 145,
    icon: "📺",
    color: "",
    tags: [
      "tcl",
      "tv"
    ],
    badge: "hot",
    description: "TCL 220 W SOUND TOWER. Smart TV with digital satellite receiver, vibrant display and built-in streaming apps.",
    specs: {
      Model: "TP200K"
    }
  },
  {
    id: 148,
    name: "TCL 340W Sound Tower TV",
    brand: "TCL",
    brandId: "tcl",
    model: "TP300K",
    category: "tv",
    image: "/img/products/TP300K.png",
    images: ["/img/products/TP300K.png"],
    price: 6299,
    oldPrice: null,
    discount: 0,
    rating: 4.4,
    reviews: 145,
    icon: "📺",
    color: "",
    tags: [
      "tcl",
      "tv"
    ],
    description: "TCL 340W SOUND TOWER. Smart TV with digital satellite receiver, vibrant display and built-in streaming apps.",
    specs: {
      Model: "TP300K"
    }
  },
  {
    id: 149,
    name: "TCL 2 TAP Compressor Cooling",
    brand: "TCL",
    brandId: "tcl",
    model: "TY-LYR47W",
    category: "small",
    image: "/img/products/ty-lyr47w_brandjpg",
    images: ["/img/products/ty-lyr47w_brandjpg"],
    price: 1899,
    oldPrice: null,
    discount: 0,
    rating: 4.6,
    reviews: 389,
    icon: "⚡",
    color: "",
    tags: [
      "tcl",
      "small"
    ],
    badge: "hot",
    description: "TCL 2 TAP COMPRESSOR COOLING. Compact and efficient appliance for everyday household needs.",
    specs: {
      "Size/Capacity": "2 TAP",
      Model: "TY-LYR47W"
    }
  },
  {
    id: 150,
    name: "TCL 3 TAPS Compressor Cooling (TY-LWYR109W)",
    brand: "TCL",
    brandId: "tcl",
    model: "TY-LWYR109W",
    category: "small",
    image: "/img/products/ty-lwyr109w_brandjpg",
    images: ["/img/products/ty-lwyr109w_brandjpg"],
    price: 2099,
    oldPrice: null,
    discount: 0,
    rating: 4.3,
    reviews: 234,
    icon: "⚡",
    color: "",
    tags: [
      "tcl",
      "small"
    ],
    badge: "hot",
    description: "TCL 3 TAPS COMPRESSOR COOLING. Compact and efficient appliance for everyday household needs.",
    specs: {
      "Size/Capacity": "3 TAPS",
      Model: "TY-LWYR109W"
    }
  },
  {
    id: 151,
    name: "TCL 3 TAPS Compressor Cooling (TY-LWYR107T)",
    brand: "TCL",
    brandId: "tcl",
    model: "TY-LWYR107T",
    category: "small",
    image: "/img/products/ty-lwyr107t_brandjpg",
    images: ["/img/products/ty-lwyr107t_brandjpg"],
    price: 2699,
    oldPrice: null,
    discount: 0,
    rating: 4.4,
    reviews: 234,
    icon: "⚡",
    color: "",
    tags: [
      "tcl",
      "small"
    ],
    badge: "hot",
    description: "TCL 3 TAPS COMPRESSOR COOLING. Compact and efficient appliance for everyday household needs.",
    specs: {
      "Size/Capacity": "3 TAPS",
      Model: "TY-LWYR107T"
    }
  },
  {
    id: 152,
    name: "TCL 1.5 HP Split On/off R32 Gas- Silver AC",
    brand: "TCL",
    brandId: "tcl",
    model: "TAC-12CSD/ZG11",
    category: "ac",
    image: "/img/products/tac-12csd_zg11_brandjpg",
    images: ["/img/products/tac-12csd_zg11_brandjpg"],
    price: 3999,
    oldPrice: null,
    discount: 0,
    rating: 4.6,
    reviews: 203,
    icon: "❄️",
    color: "",
    tags: [
      "tcl",
      "ac"
    ],
    description: "TCL 1.5 HP SPLIT ON/OFF R32 GAS- SILVER. Energy-efficient air conditioner with fast cooling and quiet operation.",
    specs: {
      Capacity: "1.5 HP",
      Refrigerant: "R32",
      Model: "TAC-12CSD/ZG11"
    }
  },
  {
    id: 153,
    name: "TCL 2.0 HP Split On/off R32 Gas- Silver AC",
    brand: "TCL",
    brandId: "tcl",
    model: "TAC-18CSD/ZG11",
    category: "ac",
    image: "/img/products/tac-18csd_zg11_brandjpg",
    images: ["/img/products/tac-18csd_zg11_brandjpg"],
    price: 5999,
    oldPrice: null,
    discount: 0,
    rating: 4.2,
    reviews: 389,
    icon: "❄️",
    color: "",
    tags: [
      "tcl",
      "ac"
    ],
    description: "TCL 2.0 HP SPLIT ON/OFF R32 GAS- SILVER. Energy-efficient air conditioner with fast cooling and quiet operation.",
    specs: {
      Capacity: "2.0 HP",
      Refrigerant: "R32",
      Model: "TAC-18CSD/ZG11"
    }
  },
  {
    id: 154,
    name: "TCL 1.5 HP Split Inverter R32 Gas AC",
    brand: "TCL",
    brandId: "tcl",
    model: "TAC-12CSD/XA73I",
    category: "ac",
    image: "/img/products/TCL-FreshIN-3.0-TAC-18CSD_FCI-FRONT.png",
    images: ["/img/products/TCL-FreshIN-3.0-TAC-18CSD_FCI-FRONT.png"],
    price: 5499,
    oldPrice: null,
    discount: 0,
    rating: 4.4,
    reviews: 56,
    icon: "❄️",
    color: "",
    tags: [
      "tcl",
      "ac",
      "inverter"
    ],
    badge: "sale",
    description: "TCL 1.5 HP SPLIT INVERTER R32 GAS. Energy-efficient air conditioner with fast cooling and quiet operation.",
    specs: {
      Capacity: "1.5 HP",
      Type: "Inverter",
      Refrigerant: "R32",
      Model: "TAC-12CSD/XA73I"
    }
  },
  {
    id: 155,
    name: "TCL 1.5 HP Split Inverter R410 Gas- Black Mirror AC",
    brand: "TCL",
    brandId: "tcl",
    model: "TAC-12CSA/XA82I",
    category: "ac",
    image: "/img/products/TCL-SPLIT-INVERTER-R410-AIR-CONDITIONER-2.0HP-TAC-18CSAXA821-FRONT-jpg.webp",
    images: ["/img/products/TCL-SPLIT-INVERTER-R410-AIR-CONDITIONER-2.0HP-TAC-18CSAXA821-FRONT-jpg.webp"],
    price: 7099,
    oldPrice: null,
    discount: 0,
    rating: 4.2,
    reviews: 89,
    icon: "❄️",
    color: "",
    tags: [
      "tcl",
      "ac",
      "inverter"
    ],
    badge: "sale",
    description: "TCL 1.5 HP SPLIT INVERTER R410 GAS- Black MIRROR. Energy-efficient air conditioner with fast cooling and quiet operation.",
    specs: {
      Capacity: "1.5 HP",
      Type: "Inverter",
      Refrigerant: "R410",
      Model: "TAC-12CSA/XA82I"
    }
  },
  {
    id: 156,
    name: "TCL 2.0 HP Split Inverter R410 Gas- Black Mirror AC",
    brand: "TCL",
    brandId: "tcl",
    model: "TAC-18CSA/XA82I",
    category: "ac",
    image: "/img/products/tac-18csa_xa82i_brandjpg",
    images: ["/img/products/tac-18csa_xa82i_brandjpg"],
    price: 9699,
    oldPrice: null,
    discount: 0,
    rating: 4.4,
    reviews: 312,
    icon: "❄️",
    color: "",
    tags: [
      "tcl",
      "ac",
      "inverter"
    ],
    badge: "hot",
    description: "TCL 2.0 HP SPLIT INVERTER R410 GAS- Black MIRROR. Energy-efficient air conditioner with fast cooling and quiet operation.",
    specs: {
      Capacity: "2.0 HP",
      Type: "Inverter",
      Refrigerant: "R410",
      Model: "TAC-18CSA/XA82I"
    }
  },
  {
    id: 157,
    name: "TCL 2.5 HP Split Inverter R410 Gas- Black Mirror AC",
    brand: "TCL",
    brandId: "tcl",
    model: "TAC-24CSA/XA82I",
    category: "ac",
    image: "/img/products/tac-24csa_xa82i_brandjpg",
    images: ["/img/products/tac-24csa_xa82i_brandjpg"],
    price: 11799,
    oldPrice: null,
    discount: 0,
    rating: 4.3,
    reviews: 124,
    icon: "❄️",
    color: "",
    tags: [
      "tcl",
      "ac",
      "inverter"
    ],
    badge: "hot",
    description: "TCL 2.5 HP SPLIT INVERTER R410 GAS- Black MIRROR. Energy-efficient air conditioner with fast cooling and quiet operation.",
    specs: {
      Capacity: "2.5 HP",
      Type: "Inverter",
      Refrigerant: "R410",
      Model: "TAC-24CSA/XA82I"
    }
  },
  {
    id: 158,
    name: "TCL 1.5 HP Split Freshin Inverter R32 Gas- Silver AC",
    brand: "TCL",
    brandId: "tcl",
    model: "TAC-12CSD/FCI",
    category: "ac",
    image: "/img/products/tac-12csd_fci_brandjpg",
    images: ["/img/products/tac-12csd_fci_brandjpg"],
    price: 7299,
    oldPrice: null,
    discount: 0,
    rating: 4.3,
    reviews: 389,
    icon: "❄️",
    color: "",
    tags: [
      "tcl",
      "ac",
      "inverter"
    ],
    description: "TCL 1.5 HP SPLIT FRESHIN INVERTER R32 GAS- SILVER. Energy-efficient air conditioner with fast cooling and quiet operation.",
    specs: {
      Capacity: "1.5 HP",
      Type: "Inverter",
      Refrigerant: "R32",
      Model: "TAC-12CSD/FCI"
    }
  },
  {
    id: 159,
    name: "TCL 2.0 HP Split Freshin Inverter R32 Gas- Silver AC",
    brand: "TCL",
    brandId: "tcl",
    model: "TAC-18CSD/FCI",
    category: "ac",
    image: "/img/products/tac-18csd_fci_brandjpg",
    images: ["/img/products/tac-18csd_fci_brandjpg"],
    price: 8999,
    oldPrice: null,
    discount: 0,
    rating: 4.2,
    reviews: 89,
    icon: "❄️",
    color: "",
    tags: [
      "tcl",
      "ac",
      "inverter"
    ],
    description: "TCL 2.0 HP SPLIT FRESHIN INVERTER R32 GAS- SILVER. Energy-efficient air conditioner with fast cooling and quiet operation.",
    specs: {
      Capacity: "2.0 HP",
      Type: "Inverter",
      Refrigerant: "R32",
      Model: "TAC-18CSD/FCI"
    }
  },
  {
    id: 160,
    name: "TCL 1.5 HP Split Inverter R410 Gas- Breeze In White AC",
    brand: "TCL",
    brandId: "tcl",
    model: "TAC-12CSA/TPH11I",
    category: "ac",
    image: "/img/products/tac-12csa_tph11i_brandjpg",
    images: ["/img/products/tac-12csa_tph11i_brandjpg"],
    price: 5499,
    oldPrice: null,
    discount: 0,
    rating: 4.7,
    reviews: 56,
    icon: "❄️",
    color: "",
    tags: [
      "tcl",
      "ac",
      "inverter"
    ],
    badge: "hot",
    description: "TCL 1.5 HP SPLIT INVERTER R410 GAS- BREEZE IN WHITE. Energy-efficient air conditioner with fast cooling and quiet operation.",
    specs: {
      Capacity: "1.5 HP",
      Type: "Inverter",
      Refrigerant: "R410",
      Model: "TAC-12CSA/TPH11I"
    }
  },
  {
    id: 161,
    name: "TCL 2.0 HP Split Inverter R410 Gas- Breeze In White AC",
    brand: "TCL",
    brandId: "tcl",
    model: "TAC-18CSA/TPH11I",
    category: "ac",
    image: "/img/products/tac-18csa_tph11i_brandjpg",
    images: ["/img/products/tac-18csa_tph11i_brandjpg"],
    price: 8299,
    oldPrice: null,
    discount: 0,
    rating: 4.8,
    reviews: 89,
    icon: "❄️",
    color: "",
    tags: [
      "tcl",
      "ac",
      "inverter"
    ],
    badge: "hot",
    description: "TCL 2.0 HP SPLIT INVERTER R410 GAS- BREEZE IN WHITE. Energy-efficient air conditioner with fast cooling and quiet operation.",
    specs: {
      Capacity: "2.0 HP",
      Type: "Inverter",
      Refrigerant: "R410",
      Model: "TAC-18CSA/TPH11I"
    }
  },
  {
    id: 162,
    name: "TCL 2.5 HP Split Inverter R410 Gas- Breeze In White AC",
    brand: "TCL",
    brandId: "tcl",
    model: "TAC-24CSA/TPH11I",
    category: "ac",
    image: "/img/products/tac-24csa_tph11i_brandjpg",
    images: ["/img/products/tac-24csa_tph11i_brandjpg"],
    price: 11399,
    oldPrice: null,
    discount: 0,
    rating: 4.8,
    reviews: 203,
    icon: "❄️",
    color: "",
    tags: [
      "tcl",
      "ac",
      "inverter"
    ],
    badge: "sale",
    description: "TCL 2.5 HP SPLIT INVERTER R410 GAS- BREEZE IN WHITE. Energy-efficient air conditioner with fast cooling and quiet operation.",
    specs: {
      Capacity: "2.5 HP",
      Type: "Inverter",
      Refrigerant: "R410",
      Model: "TAC-24CSA/TPH11I"
    }
  },
  {
    id: 163,
    name: "TCL 2.0 HP Round Floor Standing Inverter - R32 Gas AC",
    brand: "TCL",
    brandId: "tcl",
    model: "TAC-18CFD/MCI",
    category: "ac",
    image: "/img/products/TCL-ROUND-FLOOR-STANDING-AC-R32-2.5-TAC-24CFD-MCI-FRONT-jpg.webp",
    images: ["/img/products/TCL-ROUND-FLOOR-STANDING-AC-R32-2.5-TAC-24CFD-MCI-FRONT-jpg.webp"],
    price: 12699,
    oldPrice: null,
    discount: 0,
    rating: 4.8,
    reviews: 234,
    icon: "❄️",
    color: "",
    tags: [
      "tcl",
      "ac",
      "inverter"
    ],
    badge: "hot",
    description: "TCL 2.0 HP ROUND FLOOR STANDING INVERTER - R32 GAS. Energy-efficient air conditioner with fast cooling and quiet operation.",
    specs: {
      Capacity: "2.0 HP",
      Type: "Inverter",
      Refrigerant: "R32",
      Model: "TAC-18CFD/MCI"
    }
  },
  {
    id: 164,
    name: "TCL 2.5 HP Floor Standing Inverter R32 Gas",
    brand: "TCL",
    brandId: "tcl",
    model: "TAC-24CFD/V7I",
    category: "small",
    image: "/img/products/tac-24cfd_v7i_brandjpg",
    images: ["/img/products/tac-24cfd_v7i_brandjpg"],
    price: 12999,
    oldPrice: null,
    discount: 0,
    rating: 4.3,
    reviews: 145,
    icon: "⚡",
    color: "",
    tags: [
      "tcl",
      "small",
      "inverter"
    ],
    description: "TCL 2.5 HP FLOOR STANDING INVERTER  R32 GAS. Compact and efficient appliance for everyday household needs.",
    specs: {
      "Size/Capacity": "2.5 HP",
      Model: "TAC-24CFD/V7I"
    }
  },
  {
    id: 165,
    name: "TCL 2.5 HP -WHITE Cassette - Inverter/r410 Gas AC",
    brand: "TCL",
    brandId: "tcl",
    model: "TCC-24CHRA/DV(02)",
    category: "ac",
    image: "/img/products/tcc-24chra_dv_02__brandjpg",
    images: ["/img/products/tcc-24chra_dv_02__brandjpg"],
    price: 14999,
    oldPrice: null,
    discount: 0,
    rating: 4.5,
    reviews: 203,
    icon: "❄️",
    color: "",
    tags: [
      "tcl",
      "ac",
      "inverter"
    ],
    description: "TCL 2.5 HP -WHITE CASSETTE - INVERTER/R410 GAS. Energy-efficient air conditioner with fast cooling and quiet operation.",
    specs: {
      Capacity: "2.5 HP -WHITE",
      Type: "Inverter",
      Refrigerant: "R410",
      Model: "TCC-24CHRA/DV(02)"
    }
  },
  {
    id: 166,
    name: "TCL 3.5 HP - WHITE Cassette - Inverter/r410 Gas AC",
    brand: "TCL",
    brandId: "tcl",
    model: "TCC-36CHRA/DV(02)",
    category: "ac",
    image: "/img/products/tcc-36chra_dv_02__brandjpg",
    images: ["/img/products/tcc-36chra_dv_02__brandjpg"],
    price: 16999,
    oldPrice: null,
    discount: 0,
    rating: 4.3,
    reviews: 312,
    icon: "❄️",
    color: "",
    tags: [
      "tcl",
      "ac",
      "inverter"
    ],
    description: "TCL 3.5 HP - WHITE CASSETTE - INVERTER/R410 GAS. Energy-efficient air conditioner with fast cooling and quiet operation.",
    specs: {
      Capacity: "3.5 HP - WHITE",
      Type: "Inverter",
      Refrigerant: "R410",
      Model: "TCC-36CHRA/DV(02)"
    }
  },
  {
    id: 167,
    name: "TCL 5 HP - WHITE Cassette - Inverter/r410 Gas AC",
    brand: "TCL",
    brandId: "tcl",
    model: "TCC-48CHRA/DV7(02)",
    category: "ac",
    image: "/img/products/tcc-48chra_dv7_02__brandjpg",
    images: ["/img/products/tcc-48chra_dv7_02__brandjpg"],
    price: 24999,
    oldPrice: null,
    discount: 0,
    rating: 4.6,
    reviews: 389,
    icon: "❄️",
    color: "",
    tags: [
      "tcl",
      "ac",
      "inverter"
    ],
    description: "TCL 5 HP - WHITE CASSETTE - INVERTER/R410 GAS. Energy-efficient air conditioner with fast cooling and quiet operation.",
    specs: {
      Capacity: "5 HP - WHITE",
      Type: "Inverter",
      Refrigerant: "R410",
      Model: "TCC-48CHRA/DV7(02)"
    }
  },
  {
    id: 168,
    name: "TCL 6 HP - WHITE Cassette - Inverter/r410 Gas AC",
    brand: "TCL",
    brandId: "tcl",
    model: "TCC-60CHRA/DV7(02)",
    category: "ac",
    image: "/img/products/tcc-60chra_dv7_02__brandjpg",
    images: ["/img/products/tcc-60chra_dv7_02__brandjpg"],
    price: 29999,
    oldPrice: null,
    discount: 0,
    rating: 4.5,
    reviews: 67,
    icon: "❄️",
    color: "",
    tags: [
      "tcl",
      "ac",
      "inverter"
    ],
    description: "TCL 6 HP - WHITE CASSETTE - INVERTER/R410 GAS. Energy-efficient air conditioner with fast cooling and quiet operation.",
    specs: {
      Capacity: "6 HP - WHITE",
      Type: "Inverter",
      Refrigerant: "R410",
      Model: "TCC-60CHRA/DV7(02)"
    }
  },
  {
    id: 169,
    name: "TCL 3.5 HP - WHITE Ceiling & Floor / R410 Gas AC",
    brand: "TCL",
    brandId: "tcl",
    model: "TCC-36ZHRA/DV(02)",
    category: "ac",
    image: "/img/products/tcc-36zhra_dv_02__brandjpg",
    images: ["/img/products/tcc-36zhra_dv_02__brandjpg"],
    price: 15999,
    oldPrice: null,
    discount: 0,
    rating: 4.6,
    reviews: 267,
    icon: "❄️",
    color: "",
    tags: [
      "tcl",
      "ac"
    ],
    description: "TCL 3.5 HP - WHITE CEILING & FLOOR / R410 GAS. Energy-efficient air conditioner with fast cooling and quiet operation.",
    specs: {
      Capacity: "3.5 HP - WHITE",
      Refrigerant: "R410",
      Model: "TCC-36ZHRA/DV(02)"
    }
  },
  {
    id: 170,
    name: "TCL 90 L Single Door",
    brand: "TCL",
    brandId: "tcl",
    model: "F117SDS",
    category: "fridge",
    image: "/img/products/TCL-SINGLE-DOOR-REFRIGERATOR-F117SDS-FRONT.png",
    images: ["/img/products/TCL-SINGLE-DOOR-REFRIGERATOR-F117SDS-FRONT.png"],
    price: 2199,
    oldPrice: null,
    discount: 0,
    rating: 4.7,
    reviews: 67,
    icon: "🧊",
    color: "",
    tags: [
      "tcl",
      "fridge"
    ],
    description: "TCL 90 L SINGLE DOOR. High-capacity refrigerator with efficient cooling and spacious storage.",
    specs: {
      Capacity: "90 L",
      Model: "F117SDS"
    }
  },
  {
    id: 171,
    name: "TCL 117 L Single Door",
    brand: "TCL",
    brandId: "tcl",
    model: "F152TMS",
    category: "fridge",
    image: "/img/products/f152tms_brandjpg",
    images: ["/img/products/f152tms_brandjpg"],
    price: 2999,
    oldPrice: null,
    discount: 0,
    rating: 4.7,
    reviews: 312,
    icon: "🧊",
    color: "",
    tags: [
      "tcl",
      "fridge"
    ],
    badge: "hot",
    description: "TCL 117 L SINGLE DOOR. High-capacity refrigerator with efficient cooling and spacious storage.",
    specs: {
      Capacity: "117 L",
      Model: "F152TMS"
    }
  },
  {
    id: 172,
    name: "TCL 165 L Single Door",
    brand: "TCL",
    brandId: "tcl",
    model: "F216TMS",
    category: "fridge",
    image: "/img/products/f216tms_brandjpg",
    images: ["/img/products/f216tms_brandjpg"],
    price: 3999,
    oldPrice: null,
    discount: 0,
    rating: 4.5,
    reviews: 145,
    icon: "🧊",
    color: "",
    tags: [
      "tcl",
      "fridge"
    ],
    badge: "hot",
    description: "TCL 165 L SINGLE DOOR. High-capacity refrigerator with efficient cooling and spacious storage.",
    specs: {
      Capacity: "165 L",
      Model: "F216TMS"
    }
  },
  {
    id: 173,
    name: "TCL 413 L Single Door",
    brand: "TCL",
    brandId: "tcl",
    model: "P540TMGWD",
    category: "fridge",
    image: "/img/products/P540TMGWD-FRONT.png",
    images: ["/img/products/P540TMGWD-FRONT.png"],
    price: 8999,
    oldPrice: null,
    discount: 0,
    rating: 4.7,
    reviews: 178,
    icon: "🧊",
    color: "",
    tags: [
      "tcl",
      "fridge"
    ],
    description: "TCL 413 L SINGLE DOOR. High-capacity refrigerator with efficient cooling and spacious storage.",
    specs: {
      Capacity: "413 L",
      Model: "P540TMGWD"
    }
  },
  {
    id: 174,
    name: "TCL 635 L Single Door",
    brand: "TCL",
    brandId: "tcl",
    model: "P826TMN",
    category: "fridge",
    image: "/img/products/p826tmn_brandjpg",
    images: ["/img/products/p826tmn_brandjpg"],
    price: 11999,
    oldPrice: null,
    discount: 0,
    rating: 4.5,
    reviews: 203,
    icon: "🧊",
    color: "",
    tags: [
      "tcl",
      "fridge"
    ],
    description: "TCL 635 L SINGLE DOOR. High-capacity refrigerator with efficient cooling and spacious storage.",
    specs: {
      Capacity: "635 L",
      Model: "P826TMN"
    }
  },
  {
    id: 175,
    name: "TCL 108 L Bottom Mount",
    brand: "TCL",
    brandId: "tcl",
    model: "F141BFS",
    category: "fridge",
    image: "/img/products/2-8-jpg.webp",
    images: ["/img/products/2-8-jpg.webp"],
    price: 2799,
    oldPrice: null,
    discount: 0,
    rating: 4.5,
    reviews: 89,
    icon: "🧊",
    color: "",
    tags: [
      "tcl",
      "fridge"
    ],
    description: "TCL 108 L BOTTOM MOUNT. High-capacity refrigerator with efficient cooling and spacious storage.",
    specs: {
      Capacity: "108 L",
      Type: "Bottom Freezer",
      Model: "F141BFS"
    }
  },
  {
    id: 176,
    name: "TCL 142 L Bottom Mount",
    brand: "TCL",
    brandId: "tcl",
    model: "F185BFS",
    category: "fridge",
    image: "/img/products/f185bfs_brandjpg",
    images: ["/img/products/f185bfs_brandjpg"],
    price: 3299,
    oldPrice: null,
    discount: 0,
    rating: 4.3,
    reviews: 67,
    icon: "🧊",
    color: "",
    tags: [
      "tcl",
      "fridge"
    ],
    description: "TCL 142 L BOTTOM MOUNT. High-capacity refrigerator with efficient cooling and spacious storage.",
    specs: {
      Capacity: "142 L",
      Type: "Bottom Freezer",
      Model: "F185BFS"
    }
  },
  {
    id: 177,
    name: "TCL 309 L Bottom Mount",
    brand: "TCL",
    brandId: "tcl",
    model: "F410BFS",
    category: "fridge",
    image: "/img/products/TCL-309L-Bottom-Mount-Fridge-F410BFS-Front.png",
    images: ["/img/products/TCL-309L-Bottom-Mount-Fridge-F410BFS-Front.png"],
    price: 7499,
    oldPrice: null,
    discount: 0,
    rating: 4.2,
    reviews: 178,
    icon: "🧊",
    color: "",
    tags: [
      "tcl",
      "fridge"
    ],
    badge: "sale",
    description: "TCL 309 L BOTTOM MOUNT. High-capacity refrigerator with efficient cooling and spacious storage.",
    specs: {
      Capacity: "309 L",
      Type: "Bottom Freezer",
      Model: "F410BFS"
    }
  },
  {
    id: 178,
    name: "TCL 433 L Side By Side",
    brand: "TCL",
    brandId: "tcl",
    model: "P575SBGWD",
    category: "fridge",
    image: "/img/products/187bbdf3-3150-441f-9264-51d8b166669e-jpg.webp",
    images: ["/img/products/187bbdf3-3150-441f-9264-51d8b166669e-jpg.webp"],
    price: 11499,
    oldPrice: null,
    discount: 0,
    rating: 4.2,
    reviews: 389,
    icon: "🧊",
    color: "",
    tags: [
      "tcl",
      "fridge",
      "side-by-side"
    ],
    description: "TCL 433 L SIDE BY SIDE. High-capacity refrigerator with efficient cooling and spacious storage.",
    specs: {
      Capacity: "433 L",
      Type: "Side by Side",
      Model: "P575SBGWD"
    }
  },
  {
    id: 179,
    name: "TCL 529 L Side By Side (P692SBNWD)",
    brand: "TCL",
    brandId: "tcl",
    model: "P692SBNWD",
    category: "fridge",
    image: "/img/products/TCL-Side-By-Side-Refrigerator-P692SBNWD-FRONT.png",
    images: ["/img/products/TCL-Side-By-Side-Refrigerator-P692SBNWD-FRONT.png"],
    price: 11999,
    oldPrice: null,
    discount: 0,
    rating: 4.6,
    reviews: 67,
    icon: "🧊",
    color: "",
    tags: [
      "tcl",
      "fridge",
      "side-by-side"
    ],
    badge: "hot",
    description: "TCL 529  L SIDE BY SIDE. High-capacity refrigerator with efficient cooling and spacious storage.",
    specs: {
      Capacity: "529  L",
      Type: "Side by Side",
      Model: "P692SBNWD"
    }
  },
  {
    id: 180,
    name: "TCL 529 L Side By Side (P692SBBG)",
    brand: "TCL",
    brandId: "tcl",
    model: "P692SBBG",
    category: "fridge",
    image: "/img/products/TCL-Side-By-Side-Refrigerator-P692SBBG-FRONT.png",
    images: ["/img/products/TCL-Side-By-Side-Refrigerator-P692SBBG-FRONT.png"],
    price: 11999,
    oldPrice: null,
    discount: 0,
    rating: 4.6,
    reviews: 67,
    icon: "🧊",
    color: "",
    tags: [
      "tcl",
      "fridge",
      "side-by-side"
    ],
    description: "TCL 529 L SIDE BY SIDE. High-capacity refrigerator with efficient cooling and spacious storage.",
    specs: {
      Capacity: "529 L",
      Type: "Side by Side",
      Model: "P692SBBG"
    }
  },
  {
    id: 181,
    name: "TCL 168 L Standing",
    brand: "TCL",
    brandId: "tcl",
    model: "F208SDS",
    category: "small",
    image: "/img/products/F293SDS-FRONT.png",
    images: ["/img/products/F293SDS-FRONT.png"],
    price: 3999,
    oldPrice: null,
    discount: 0,
    rating: 4.2,
    reviews: 89,
    icon: "⚡",
    color: "",
    tags: [
      "tcl",
      "small"
    ],
    description: "TCL 168 L STANDING. Compact and efficient appliance for everyday household needs.",
    specs: {
      "Size/Capacity": "168 L",
      Model: "F208SDS"
    }
  },
  {
    id: 182,
    name: "TCL 145 L Chest",
    brand: "TCL",
    brandId: "tcl",
    model: "F188CFSL",
    category: "fridge",
    image: "/img/products/TCL-Chest-Freezer-200Ltrs-Front.png",
    images: ["/img/products/TCL-Chest-Freezer-200Ltrs-Front.png"],
    price: 2999,
    oldPrice: null,
    discount: 0,
    rating: 4.7,
    reviews: 145,
    icon: "🧊",
    color: "",
    tags: [
      "tcl",
      "fridge"
    ],
    badge: "hot",
    description: "TCL 145 L CHEST. High-capacity refrigerator with efficient cooling and spacious storage.",
    specs: {
      Capacity: "145 L",
      Type: "Chest Freezer",
      Model: "F188CFSL"
    }
  },
  {
    id: 183,
    name: "TCL 200 L Chest",
    brand: "TCL",
    brandId: "tcl",
    model: "F257CFSL",
    category: "fridge",
    image: "/img/products/f257cfsl_brandjpg",
    images: ["/img/products/f257cfsl_brandjpg"],
    price: 3399,
    oldPrice: null,
    discount: 0,
    rating: 4.2,
    reviews: 67,
    icon: "🧊",
    color: "",
    tags: [
      "tcl",
      "fridge"
    ],
    description: "TCL 200 L CHEST. High-capacity refrigerator with efficient cooling and spacious storage.",
    specs: {
      Capacity: "200 L",
      Type: "Chest Freezer",
      Model: "F257CFSL"
    }
  },
  {
    id: 184,
    name: "TCL 380 L Chest",
    brand: "TCL",
    brandId: "tcl",
    model: "F494CFSL",
    category: "fridge",
    image: "/img/products/TCL-308-Chest-Freezer-F494CFSL-SPECS-1.png",
    images: ["/img/products/TCL-308-Chest-Freezer-F494CFSL-SPECS-1.png"],
    price: 5499,
    oldPrice: null,
    discount: 0,
    rating: 4.2,
    reviews: 124,
    icon: "🧊",
    color: "",
    tags: [
      "tcl",
      "fridge"
    ],
    description: "TCL 380 L CHEST. High-capacity refrigerator with efficient cooling and spacious storage.",
    specs: {
      Capacity: "380 L",
      Type: "Chest Freezer",
      Model: "F494CFSL"
    }
  },
  {
    id: 185,
    name: "TCL 508 L Chest",
    brand: "TCL",
    brandId: "tcl",
    model: "F660CFSL",
    category: "fridge",
    image: "/img/products/f660cfsl_brandjpg",
    images: ["/img/products/f660cfsl_brandjpg"],
    price: 7999,
    oldPrice: null,
    discount: 0,
    rating: 4.8,
    reviews: 178,
    icon: "🧊",
    color: "",
    tags: [
      "tcl",
      "fridge"
    ],
    description: "TCL 508 L CHEST. High-capacity refrigerator with efficient cooling and spacious storage.",
    specs: {
      Capacity: "508 L",
      Type: "Chest Freezer",
      Model: "F660CFSL"
    }
  },
  {
    id: 186,
    name: "TCL 7 KG Twin Top Washing Machine",
    brand: "TCL",
    brandId: "tcl",
    model: "F207TT",
    category: "laundry",
    image: "/img/products/3-13-jpg.webp",
    images: ["/img/products/3-13-jpg.webp"],
    price: 2299,
    oldPrice: null,
    discount: 0,
    rating: 4.2,
    reviews: 203,
    icon: "🫧",
    color: "",
    tags: [
      "tcl",
      "laundry"
    ],
    badge: "hot",
    description: "TCL 7 KG TWIN TOP. Powerful washing machine with multiple wash programs and energy-saving motor.",
    specs: {
      Capacity: "7 KG",
      Type: "Twin Tub",
      Model: "F207TT"
    }
  },
  {
    id: 187,
    name: "TCL 10.1 KG Twin Top Washing Machine",
    brand: "TCL",
    brandId: "tcl",
    model: "F211TT",
    category: "laundry",
    image: "/img/products/F211TT_front.png",
    images: ["/img/products/F211TT_front.png"],
    price: 2999,
    oldPrice: null,
    discount: 0,
    rating: 4.3,
    reviews: 312,
    icon: "🫧",
    color: "",
    tags: [
      "tcl",
      "laundry"
    ],
    badge: "hot",
    description: "TCL 10.1 KG TWIN TOP. Powerful washing machine with multiple wash programs and energy-saving motor.",
    specs: {
      Capacity: "10.1 KG",
      Type: "Twin Tub",
      Model: "F211TT"
    }
  },
  {
    id: 188,
    name: "TCL 9 KG Top Load Washing Machine",
    brand: "TCL",
    brandId: "tcl",
    model: "F709TL",
    category: "laundry",
    image: "/img/products/C-front-1-jpg.webp",
    images: ["/img/products/C-front-1-jpg.webp"],
    price: 4899,
    oldPrice: null,
    discount: 0,
    rating: 4.7,
    reviews: 56,
    icon: "🫧",
    color: "",
    tags: [
      "tcl",
      "laundry"
    ],
    badge: "hot",
    description: "TCL 9 KG TOP LOAD. Powerful washing machine with multiple wash programs and energy-saving motor.",
    specs: {
      Capacity: "9 KG",
      Type: "Top Load",
      Model: "F709TL"
    }
  },
  {
    id: 189,
    name: "TCL 10.5 KG Top Load Washing Machine",
    brand: "TCL",
    brandId: "tcl",
    model: "F711TL",
    category: "laundry",
    image: "/img/products/f711tl_brandjpg",
    images: ["/img/products/f711tl_brandjpg"],
    price: 5699,
    oldPrice: null,
    discount: 0,
    rating: 4.3,
    reviews: 203,
    icon: "🫧",
    color: "",
    tags: [
      "tcl",
      "laundry"
    ],
    badge: "sale",
    description: "TCL 10.5 KG TOP LOAD. Powerful washing machine with multiple wash programs and energy-saving motor.",
    specs: {
      Capacity: "10.5 KG",
      Type: "Top Load",
      Model: "F711TL"
    }
  },
  {
    id: 190,
    name: "TCL 7KGS Front Load Washing Machine",
    brand: "TCL",
    brandId: "tcl",
    model: "P607FL",
    category: "laundry",
    image: "/img/products/1-16-jpg.webp",
    images: ["/img/products/1-16-jpg.webp"],
    price: 4999,
    oldPrice: null,
    discount: 0,
    rating: 4.3,
    reviews: 267,
    icon: "🫧",
    color: "",
    tags: [
      "tcl",
      "laundry",
      "front-load"
    ],
    badge: "hot",
    description: "TCL 7KGS FRONT LOAD. Powerful washing machine with multiple wash programs and energy-saving motor.",
    specs: {
      Capacity: "7KGS",
      Type: "Front Load",
      Model: "P607FL"
    }
  },
  {
    id: 191,
    name: "TCL 8 KG Front Load- Inverter Washing Machine",
    brand: "TCL",
    brandId: "tcl",
    model: "P1108FLG",
    category: "laundry",
    image: "/img/products/TCL-FRONT-LOAD-INVERTER-8KG-WASHING-MACHINE-P1108FLG-FRONT.jpg",
    images: ["/img/products/TCL-FRONT-LOAD-INVERTER-8KG-WASHING-MACHINE-P1108FLG-FRONT.jpg"],
    price: 6999,
    oldPrice: null,
    discount: 0,
    rating: 4.6,
    reviews: 389,
    icon: "🫧",
    color: "",
    tags: [
      "tcl",
      "laundry",
      "inverter",
      "front-load"
    ],
    badge: "hot",
    description: "TCL 8 KG FRONT LOAD- INVERTER. Powerful washing machine with multiple wash programs and energy-saving motor.",
    specs: {
      Capacity: "8 KG",
      Type: "Front Load",
      Motor: "Inverter",
      Model: "P1108FLG"
    }
  },
  {
    id: 192,
    name: "TCL 9 KG Front Load- Inverter Washing Machine",
    brand: "TCL",
    brandId: "tcl",
    model: "P1109FLG",
    category: "laundry",
    image: "/img/products/TCL-FRONT-LOAD-INVERTER-9KG-WASHING-MACHINE-P1109FLG-FRONT.jpg",
    images: ["/img/products/TCL-FRONT-LOAD-INVERTER-9KG-WASHING-MACHINE-P1109FLG-FRONT.jpg"],
    price: 7499,
    oldPrice: null,
    discount: 0,
    rating: 4.5,
    reviews: 67,
    icon: "🫧",
    color: "",
    tags: [
      "tcl",
      "laundry",
      "inverter",
      "front-load"
    ],
    description: "TCL 9 KG FRONT LOAD- INVERTER. Powerful washing machine with multiple wash programs and energy-saving motor.",
    specs: {
      Capacity: "9 KG",
      Type: "Front Load",
      Motor: "Inverter",
      Model: "P1109FLG"
    }
  },
  {
    id: 193,
    name: "TCL 10.5 KG Front Load- Inverter Washing Machine",
    brand: "TCL",
    brandId: "tcl",
    model: "P211FLG",
    category: "laundry",
    image: "/img/products/TCL-FRONT-LOAD-INVERTER-10.5KG-WASHING-MACHINE-P211FLG-FRONT.jpg",
    images: ["/img/products/TCL-FRONT-LOAD-INVERTER-10.5KG-WASHING-MACHINE-P211FLG-FRONT.jpg"],
    price: 8299,
    oldPrice: null,
    discount: 0,
    rating: 4.8,
    reviews: 56,
    icon: "🫧",
    color: "",
    tags: [
      "tcl",
      "laundry",
      "inverter",
      "front-load"
    ],
    badge: "hot",
    description: "TCL 10.5 KG FRONT LOAD- INVERTER. Powerful washing machine with multiple wash programs and energy-saving motor.",
    specs: {
      Capacity: "10.5 KG",
      Type: "Front Load",
      Motor: "Inverter",
      Model: "P211FLG"
    }
  },
  {
    id: 194,
    name: "TCL 10.5 KG 6 KGS Combo Washing Machine",
    brand: "TCL",
    brandId: "tcl",
    model: "C211WDG",
    category: "laundry",
    image: "/img/products/TCL-COMBO-10.5-KG-6-KGS-WASHING-MACHINE-C211WDG-FRONT.jpg",
    images: ["/img/products/TCL-COMBO-10.5-KG-6-KGS-WASHING-MACHINE-C211WDG-FRONT.jpg"],
    price: 9699,
    oldPrice: null,
    discount: 0,
    rating: 4.8,
    reviews: 445,
    icon: "🫧",
    color: "",
    tags: [
      "tcl",
      "laundry"
    ],
    badge: "hot",
    description: "TCL 10.5 KG 6 KGS COMBO. Powerful washing machine with multiple wash programs and energy-saving motor.",
    specs: {
      Capacity: "10.5 KG\\ 6 KGS",
      Model: "C211WDG"
    }
  },
  {
    id: 195,
    name: "Midea 1.5 HP Split Acs Inverter R410-unicool AC",
    brand: "Midea",
    brandId: "midea",
    model: "MSAF24B-12CRDN1",
    category: "ac",
    image: "/img/products/MIDEA-SPLIT-INVERTER-R410-UNICOOL-1.5HP-AC-MSAF24B-12CRDN1-FRONT.jpg",
    images: ["/img/products/MIDEA-SPLIT-INVERTER-R410-UNICOOL-1.5HP-AC-MSAF24B-12CRDN1-FRONT.jpg"],
    price: 6399,
    oldPrice: null,
    discount: 0,
    rating: 4.3,
    reviews: 89,
    icon: "❄️",
    color: "",
    tags: [
      "midea",
      "ac",
      "inverter"
    ],
    badge: "sale",
    description: "Midea 1.5 HP SPLIT  ACS  INVERTER R410-UNICOOL. Energy-efficient air conditioner with fast cooling and quiet operation.",
    specs: {
      Capacity: "1.5 HP",
      Type: "Inverter",
      Refrigerant: "R410",
      Model: "MSAF24B-12CRDN1"
    }
  },
  {
    id: 196,
    name: "Midea 1.5 HP Split Acs Inverter R32 Gas-unicool + AC",
    brand: "Midea",
    brandId: "midea",
    model: "MSAF24B-12CRDN1-R32",
    category: "ac",
    image: "/img/products/msaf24b-12crdn1-r32_brandpng",
    images: ["/img/products/msaf24b-12crdn1-r32_brandpng"],
    price: 6399,
    oldPrice: null,
    discount: 0,
    rating: 4.2,
    reviews: 145,
    icon: "❄️",
    color: "",
    tags: [
      "midea",
      "ac",
      "inverter"
    ],
    badge: "hot",
    description: "Midea 1.5 HP SPLIT  ACS  INVERTER R32 GAS-UNICOOL +. Energy-efficient air conditioner with fast cooling and quiet operation.",
    specs: {
      Capacity: "1.5 HP",
      Type: "Inverter",
      Refrigerant: "R32",
      Model: "MSAF24B-12CRDN1-R32"
    }
  },
  {
    id: 197,
    name: "Midea 2.0 HP Split Acs Inverter R32 Gas-unicool + AC",
    brand: "Midea",
    brandId: "midea",
    model: "MSAF24C-18CRDN1-R32",
    category: "ac",
    image: "/img/products/msaf24c-18crdn1-r32_brandpng",
    images: ["/img/products/msaf24c-18crdn1-r32_brandpng"],
    price: 8299,
    oldPrice: null,
    discount: 0,
    rating: 4.5,
    reviews: 178,
    icon: "❄️",
    color: "",
    tags: [
      "midea",
      "ac",
      "inverter"
    ],
    badge: "hot",
    description: "Midea 2.0 HP SPLIT  ACS  INVERTER R32 GAS-UNICOOL +. Energy-efficient air conditioner with fast cooling and quiet operation.",
    specs: {
      Capacity: "2.0 HP",
      Type: "Inverter",
      Refrigerant: "R32",
      Model: "MSAF24C-18CRDN1-R32"
    }
  },
  {
    id: 198,
    name: "Midea 2.5 HP Split Acs Inverter R32 Gas-unicool + AC",
    brand: "Midea",
    brandId: "midea",
    model: "MSAF-24CRDN1-R32",
    category: "ac",
    image: "/img/products/msaf-24crdn1-r32_brandpng",
    images: ["/img/products/msaf-24crdn1-r32_brandpng"],
    price: 12999,
    oldPrice: null,
    discount: 0,
    rating: 4.5,
    reviews: 445,
    icon: "❄️",
    color: "",
    tags: [
      "midea",
      "ac",
      "inverter"
    ],
    badge: "hot",
    description: "Midea 2.5 HP SPLIT  ACS  INVERTER R32 GAS-UNICOOL +. Energy-efficient air conditioner with fast cooling and quiet operation.",
    specs: {
      Capacity: "2.5 HP",
      Type: "Inverter",
      Refrigerant: "R32",
      Model: "MSAF-24CRDN1-R32"
    }
  },
  {
    id: 199,
    name: "Midea 1.5 HP Split Inverter - R290 AC",
    brand: "Midea",
    brandId: "midea",
    model: "MSAGBU-12HRFN7",
    category: "ac",
    image: "/img/products/MSAFD-22CRFN8-MOX330-22CFN8-Q-1.png",
    images: ["/img/products/MSAFD-22CRFN8-MOX330-22CFN8-Q-1.png"],
    price: 8499,
    oldPrice: null,
    discount: 0,
    rating: 4.5,
    reviews: 267,
    icon: "❄️",
    color: "",
    tags: [
      "midea",
      "ac",
      "inverter"
    ],
    badge: "sale",
    description: "Midea 1.5 HP SPLIT INVERTER - R290. Energy-efficient air conditioner with fast cooling and quiet operation.",
    specs: {
      Capacity: "1.5 HP",
      Type: "Inverter",
      Model: "MSAGBU-12HRFN7"
    }
  },
  {
    id: 200,
    name: "Midea 1.5 HP Split Acs Inverter R32 AC",
    brand: "Midea",
    brandId: "midea",
    model: "MSAFB-12CRDN8-QD2",
    category: "ac",
    image: "/img/products/msafb-12crdn8-qd2_brandpng",
    images: ["/img/products/msafb-12crdn8-qd2_brandpng"],
    price: 6199,
    oldPrice: null,
    discount: 0,
    rating: 4.2,
    reviews: 145,
    icon: "❄️",
    color: "",
    tags: [
      "midea",
      "ac",
      "inverter"
    ],
    description: "Midea 1.5 HP SPLIT ACS INVERTER R32. Energy-efficient air conditioner with fast cooling and quiet operation.",
    specs: {
      Capacity: "1.5 HP",
      Type: "Inverter",
      Refrigerant: "R32",
      Model: "MSAFB-12CRDN8-QD2"
    }
  },
  {
    id: 201,
    name: "Midea 2.0HP Split Acs Inverter R32 AC",
    brand: "Midea",
    brandId: "midea",
    model: "MSAFC-17CRDN8/MOX230-18CDN8-Q",
    category: "ac",
    image: "/img/products/msafc-17crdn8_mox230-18cdn8-q_brandpng",
    images: ["/img/products/msafc-17crdn8_mox230-18cdn8-q_brandpng"],
    price: 8799,
    oldPrice: null,
    discount: 0,
    rating: 4.7,
    reviews: 145,
    icon: "❄️",
    color: "",
    tags: [
      "midea",
      "ac",
      "inverter"
    ],
    description: "Midea 2.0HP SPLIT ACS INVERTER R32. Energy-efficient air conditioner with fast cooling and quiet operation.",
    specs: {
      Capacity: "2.0HP",
      Type: "Inverter",
      Refrigerant: "R32",
      Model: "MSAFC-17CRDN8/MOX230-18CDN8-Q"
    }
  },
  {
    id: 202,
    name: "Midea 2.5 HP Split Acs Inverter R32 AC",
    brand: "Midea",
    brandId: "midea",
    model: "MSAFD-22CRFN8/MOX330-22CFN8-Q",
    category: "ac",
    image: "/img/products/msafd-22crfn8_mox330-22cfn8-q_brandpng",
    images: ["/img/products/msafd-22crfn8_mox330-22cfn8-q_brandpng"],
    price: 12799,
    oldPrice: null,
    discount: 0,
    rating: 4.2,
    reviews: 124,
    icon: "❄️",
    color: "",
    tags: [
      "midea",
      "ac",
      "inverter"
    ],
    description: "Midea 2.5 HP SPLIT ACS INVERTER R32. Energy-efficient air conditioner with fast cooling and quiet operation.",
    specs: {
      Capacity: "2.5 HP",
      Type: "Inverter",
      Refrigerant: "R32",
      Model: "MSAFD-22CRFN8/MOX330-22CFN8-Q"
    }
  },
  {
    id: 203,
    name: "Midea 1.5 hp Split Acs Inverter -breezeless-r32 AC",
    brand: "Midea",
    brandId: "midea",
    model: "MSCB1B-12CRFN8",
    category: "ac",
    image: "/img/products/mscb1b-12crfn8_brandpng",
    images: ["/img/products/mscb1b-12crfn8_brandpng"],
    price: 6699,
    oldPrice: null,
    discount: 0,
    rating: 4.5,
    reviews: 267,
    icon: "❄️",
    color: "",
    tags: [
      "midea",
      "ac",
      "inverter"
    ],
    description: "Midea 1.5 hp SPLIT  ACS  INVERTER -BREEZELESS-R32. Energy-efficient air conditioner with fast cooling and quiet operation.",
    specs: {
      Capacity: "1.5 hp",
      Type: "Inverter",
      Refrigerant: "R32",
      Model: "MSCB1B-12CRFN8"
    }
  },
  {
    id: 204,
    name: "Midea 2.0 HP Split Acs Inverter -breezeless-r32 AC",
    brand: "Midea",
    brandId: "midea",
    model: "MSCB1CU-18HRFN8",
    category: "ac",
    image: "/img/products/mscb1cu-18hrfn8_brandpng",
    images: ["/img/products/mscb1cu-18hrfn8_brandpng"],
    price: 9999,
    oldPrice: null,
    discount: 0,
    rating: 4.4,
    reviews: 89,
    icon: "❄️",
    color: "",
    tags: [
      "midea",
      "ac",
      "inverter"
    ],
    description: "Midea 2.0 HP SPLIT  ACS  INVERTER -BREEZELESS-R32. Energy-efficient air conditioner with fast cooling and quiet operation.",
    specs: {
      Capacity: "2.0 HP",
      Type: "Inverter",
      Refrigerant: "R32",
      Model: "MSCB1CU-18HRFN8"
    }
  },
  {
    id: 205,
    name: "Midea 2.5 HP Split Acs Inverter -breezeless-r32 AC",
    brand: "Midea",
    brandId: "midea",
    model: "MSCB1DU-24HRFN8",
    category: "ac",
    image: "/img/products/mscb1du-24hrfn8_brandpng",
    images: ["/img/products/mscb1du-24hrfn8_brandpng"],
    price: 14199,
    oldPrice: null,
    discount: 0,
    rating: 4.3,
    reviews: 67,
    icon: "❄️",
    color: "",
    tags: [
      "midea",
      "ac",
      "inverter"
    ],
    badge: "hot",
    description: "Midea 2.5 HP SPLIT  ACS  INVERTER -BREEZELESS-R32. Energy-efficient air conditioner with fast cooling and quiet operation.",
    specs: {
      Capacity: "2.5 HP",
      Type: "Inverter",
      Refrigerant: "R32",
      Model: "MSCB1DU-24HRFN8"
    }
  },
  {
    id: 206,
    name: "Midea 1.5 HP Split Acs R410 AC",
    brand: "Midea",
    brandId: "midea",
    model: "MSAF-12CRN1",
    category: "ac",
    image: "/img/products/msaf-12crn1_brandpng",
    images: ["/img/products/msaf-12crn1_brandpng"],
    price: 5299,
    oldPrice: null,
    discount: 0,
    rating: 4.3,
    reviews: 203,
    icon: "❄️",
    color: "",
    tags: [
      "midea",
      "ac"
    ],
    badge: "hot",
    description: "Midea 1.5 HP SPLIT ACS R410. Energy-efficient air conditioner with fast cooling and quiet operation.",
    specs: {
      Capacity: "1.5 HP",
      Refrigerant: "R410",
      Model: "MSAF-12CRN1"
    }
  },
  {
    id: 207,
    name: "Midea 2.0 HP Split Acs R410 AC",
    brand: "Midea",
    brandId: "midea",
    model: "MSAF-18CRN1",
    category: "ac",
    image: "/img/products/msaf-18crn1_brandpng",
    images: ["/img/products/msaf-18crn1_brandpng"],
    price: 7899,
    oldPrice: null,
    discount: 0,
    rating: 4.5,
    reviews: 234,
    icon: "❄️",
    color: "",
    tags: [
      "midea",
      "ac"
    ],
    badge: "hot",
    description: "Midea 2.0 HP SPLIT ACS R410. Energy-efficient air conditioner with fast cooling and quiet operation.",
    specs: {
      Capacity: "2.0 HP",
      Refrigerant: "R410",
      Model: "MSAF-18CRN1"
    }
  },
  {
    id: 208,
    name: "Midea 2.5 HP Split Acs R410 AC",
    brand: "Midea",
    brandId: "midea",
    model: "MSAF-24CRN1",
    category: "ac",
    image: "/img/products/msaf-24crn1_brandpng",
    images: ["/img/products/msaf-24crn1_brandpng"],
    price: 11399,
    oldPrice: null,
    discount: 0,
    rating: 4.5,
    reviews: 234,
    icon: "❄️",
    color: "",
    tags: [
      "midea",
      "ac"
    ],
    badge: "hot",
    description: "Midea 2.5 HP SPLIT ACS R410. Energy-efficient air conditioner with fast cooling and quiet operation.",
    specs: {
      Capacity: "2.5 HP",
      Refrigerant: "R410",
      Model: "MSAF-24CRN1"
    }
  },
  {
    id: 209,
    name: "Midea 48000 BTU Floor Standing - R410 AC",
    brand: "Midea",
    brandId: "midea",
    model: "MJ2-48CRN1",
    category: "ac",
    image: "/img/products/mj2-48crn1_brandpng",
    images: ["/img/products/mj2-48crn1_brandpng"],
    price: 27899,
    oldPrice: null,
    discount: 0,
    rating: 4.4,
    reviews: 56,
    icon: "❄️",
    color: "",
    tags: [
      "midea",
      "ac"
    ],
    badge: "hot",
    description: "Midea 48000 BTU FLOOR STANDING - R410. Energy-efficient air conditioner with fast cooling and quiet operation.",
    specs: {
      BTU: "48000 BTU",
      Refrigerant: "R410",
      Model: "MJ2-48CRN1"
    }
  },
  {
    id: 210,
    name: "Midea 24000 BTU/H Floor Standing - Inverter R410 (MFYA400-24ARFN1)",
    brand: "Midea",
    brandId: "midea",
    model: "MFYA400-24ARFN1",
    category: "small",
    image: "/img/products/mfya400-24arfn1_brandpng",
    images: ["/img/products/mfya400-24arfn1_brandpng"],
    price: 18299,
    oldPrice: null,
    discount: 0,
    rating: 4.3,
    reviews: 89,
    icon: "⚡",
    color: "",
    tags: [
      "midea",
      "small",
      "inverter"
    ],
    badge: "hot",
    description: "Midea 24000 BTU/H FLOOR STANDING - INVERTER R410. Compact and efficient appliance for everyday household needs.",
    specs: {
      "Size/Capacity": "24000 BTU/H",
      Model: "MFYA400-24ARFN1"
    }
  },
  {
    id: 211,
    name: "Midea 48000 BTU/H Floor Standing - Inverter R410",
    brand: "Midea",
    brandId: "midea",
    model: "MFPA400-48HRFN1",
    category: "small",
    image: "/img/products/AC036BXPDKC-AC036BNPDKC-GH-300x300-1.png",
    images: ["/img/products/AC036BXPDKC-AC036BNPDKC-GH-300x300-1.png"],
    price: 36499,
    oldPrice: null,
    discount: 0,
    rating: 4.5,
    reviews: 203,
    icon: "⚡",
    color: "",
    tags: [
      "midea",
      "small",
      "inverter"
    ],
    badge: "hot",
    description: "Midea 48000 BTU/H FLOOR STANDING - INVERTER R410. Compact and efficient appliance for everyday household needs.",
    specs: {
      "Size/Capacity": "48000 BTU/H",
      Model: "MFPA400-48HRFN1"
    }
  },
  {
    id: 212,
    name: "Midea 24000 BTU/H Floor Standing - Inverter R410 (MPA-24CRDN1)",
    brand: "Midea",
    brandId: "midea",
    model: "MPA-24CRDN1",
    category: "small",
    image: "/img/products/mpa-24crdn1_brandpng",
    images: ["/img/products/mpa-24crdn1_brandpng"],
    price: 14499,
    oldPrice: null,
    discount: 0,
    rating: 4.2,
    reviews: 124,
    icon: "⚡",
    color: "",
    tags: [
      "midea",
      "small",
      "inverter"
    ],
    badge: "hot",
    description: "Midea 24000 BTU/H FLOOR STANDING - INVERTER R410. Compact and efficient appliance for everyday household needs.",
    specs: {
      "Size/Capacity": "24000 BTU/H",
      Model: "MPA-24CRDN1"
    }
  },
  {
    id: 213,
    name: "Midea 18000 btu Floor Standing - Inverter R410",
    brand: "Midea",
    brandId: "midea",
    model: "MFPA-18CRDN1",
    category: "small",
    image: "/img/products/mfpa-18crdn1_brandpng",
    images: ["/img/products/mfpa-18crdn1_brandpng"],
    price: 13999,
    oldPrice: null,
    discount: 0,
    rating: 4.7,
    reviews: 203,
    icon: "⚡",
    color: "",
    tags: [
      "midea",
      "small",
      "inverter"
    ],
    badge: "hot",
    description: "Midea 18000 btu FLOOR STANDING - INVERTER R410. Compact and efficient appliance for everyday household needs.",
    specs: {
      "Size/Capacity": "18000 btu",
      Model: "MFPA-18CRDN1"
    }
  },
  {
    id: 214,
    name: "Midea 2.5 HP Cassette Inverter R410 AC",
    brand: "Midea",
    brandId: "midea",
    model: "MCD-24HRND1",
    category: "ac",
    image: "/img/products/mcd-24hrnd1_brandpng",
    images: ["/img/products/mcd-24hrnd1_brandpng"],
    price: 18499,
    oldPrice: null,
    discount: 0,
    rating: 4.8,
    reviews: 124,
    icon: "❄️",
    color: "",
    tags: [
      "midea",
      "ac",
      "inverter"
    ],
    description: "Midea 2.5 HP CASSETTE INVERTER R410. Energy-efficient air conditioner with fast cooling and quiet operation.",
    specs: {
      Capacity: "2.5 HP",
      Type: "Inverter",
      Refrigerant: "R410",
      Model: "MCD-24HRND1"
    }
  },
  {
    id: 215,
    name: "Midea 3.5 HP Cassette Inverter R410 AC",
    brand: "Midea",
    brandId: "midea",
    model: "MCD-36HRDN1",
    category: "ac",
    image: "/img/products/mcd-36hrdn1_brandpng",
    images: ["/img/products/mcd-36hrdn1_brandpng"],
    price: 26999,
    oldPrice: null,
    discount: 0,
    rating: 4.2,
    reviews: 67,
    icon: "❄️",
    color: "",
    tags: [
      "midea",
      "ac",
      "inverter"
    ],
    description: "Midea 3.5 HP CASSETTE INVERTER R410. Energy-efficient air conditioner with fast cooling and quiet operation.",
    specs: {
      Capacity: "3.5 HP",
      Type: "Inverter",
      Refrigerant: "R410",
      Model: "MCD-36HRDN1"
    }
  },
  {
    id: 216,
    name: "Midea 5.0 HP Cassette Inverter R410 AC",
    brand: "Midea",
    brandId: "midea",
    model: "MCD-48HRDN1",
    category: "ac",
    image: "/img/products/mcd-48hrdn1_brandpng",
    images: ["/img/products/mcd-48hrdn1_brandpng"],
    price: 31999,
    oldPrice: null,
    discount: 0,
    rating: 4.3,
    reviews: 445,
    icon: "❄️",
    color: "",
    tags: [
      "midea",
      "ac",
      "inverter"
    ],
    description: "Midea 5.0 HP CASSETTE INVERTER R410. Energy-efficient air conditioner with fast cooling and quiet operation.",
    specs: {
      Capacity: "5.0 HP",
      Type: "Inverter",
      Refrigerant: "R410",
      Model: "MCD-48HRDN1"
    }
  },
  {
    id: 217,
    name: "Midea 220 M³/hr Air Purifier",
    brand: "Midea",
    brandId: "midea",
    model: "KJ200G-D41",
    category: "small",
    image: "/img/products/BHFGHB.jpg",
    images: ["/img/products/BHFGHB.jpg"],
    price: 1599,
    oldPrice: null,
    discount: 0,
    rating: 4.5,
    reviews: 56,
    icon: "⚡",
    color: "",
    tags: [
      "midea",
      "small"
    ],
    badge: "hot",
    description: "Midea 220 M³/hr Air Purifier. Compact and efficient appliance for everyday household needs.",
    specs: {
      "Size/Capacity": "220 M³/hr",
      Model: "KJ200G-D41"
    }
  },
  {
    id: 218,
    name: "Midea 60W Standing Air Cooler",
    brand: "Midea",
    brandId: "midea",
    model: "AC120-15F",
    category: "small",
    image: "/img/products/AIR-COOLER.jpeg",
    images: ["/img/products/AIR-COOLER.jpeg"],
    price: 2099,
    oldPrice: null,
    discount: 0,
    rating: 4.3,
    reviews: 445,
    icon: "⚡",
    color: "",
    tags: [
      "midea",
      "small"
    ],
    badge: "hot",
    description: "Midea 60W STANDING AIR COOLER. Compact and efficient appliance for everyday household needs.",
    specs: {
      "Size/Capacity": "60W",
      Model: "AC120-15F"
    }
  },
  {
    id: 219,
    name: "Midea 50W Standing Air Cooler",
    brand: "Midea",
    brandId: "midea",
    model: "AC100-18B",
    category: "small",
    image: "/img/products/ac100-18b_brandpng",
    images: ["/img/products/ac100-18b_brandpng"],
    price: 1799,
    oldPrice: null,
    discount: 0,
    rating: 4.2,
    reviews: 234,
    icon: "⚡",
    color: "",
    tags: [
      "midea",
      "small"
    ],
    badge: "sale",
    description: "Midea 50W STANDING AIR COOLER. Compact and efficient appliance for everyday household needs.",
    specs: {
      "Size/Capacity": "50W",
      Model: "AC100-18B"
    }
  },
  {
    id: 220,
    name: "Midea Standing Fan (FS40-19K)",
    brand: "Midea",
    brandId: "midea",
    model: "FS40-19K",
    category: "small",
    image: "/img/products/fs40-19k_brandpng",
    images: ["/img/products/fs40-19k_brandpng"],
    price: 699,
    oldPrice: null,
    discount: 0,
    rating: 4.5,
    reviews: 124,
    icon: "⚡",
    color: "",
    tags: [
      "midea",
      "small"
    ],
    badge: "sale",
    description: "Midea STANDING FAN. Compact and efficient appliance for everyday household needs.",
    specs: {
      Model: "FS40-19K"
    }
  },
  {
    id: 221,
    name: "Midea Standing Fan (FS40-21M)",
    brand: "Midea",
    brandId: "midea",
    model: "FS40-21M",
    category: "small",
    image: "/img/products/fs40-21m_brandpng",
    images: ["/img/products/fs40-21m_brandpng"],
    price: 279,
    oldPrice: null,
    discount: 0,
    rating: 4.5,
    reviews: 312,
    icon: "⚡",
    color: "",
    tags: [
      "midea",
      "small"
    ],
    description: "Midea STANDING FAN. Compact and efficient appliance for everyday household needs.",
    specs: {
      Model: "FS40-21M"
    }
  },
  {
    id: 222,
    name: "Midea 16\" Standing Fan",
    brand: "Midea",
    brandId: "midea",
    model: "FS40-13QRA",
    category: "small",
    image: "/img/products/fs40-13qra_brandpng",
    images: ["/img/products/fs40-13qra_brandpng"],
    price: 1299,
    oldPrice: null,
    discount: 0,
    rating: 4.8,
    reviews: 56,
    icon: "⚡",
    color: "",
    tags: [
      "midea",
      "small"
    ],
    badge: "hot",
    description: "Midea 16\" STANDING FAN. Compact and efficient appliance for everyday household needs.",
    specs: {
      "Size/Capacity": "16\"",
      Model: "FS40-13QRA"
    }
  },
  {
    id: 223,
    name: "Midea 18'' Recharghable Fan",
    brand: "Midea",
    brandId: "midea",
    model: "FS45-23MRD",
    category: "small",
    image: "/img/products/fs45-23mrd_brandpng",
    images: ["/img/products/fs45-23mrd_brandpng"],
    price: 1099,
    oldPrice: null,
    discount: 0,
    rating: 4.4,
    reviews: 445,
    icon: "⚡",
    color: "",
    tags: [
      "midea",
      "small"
    ],
    description: "Midea 18'' RECHARGHABLE FAN. Compact and efficient appliance for everyday household needs.",
    specs: {
      "Size/Capacity": "18''",
      Model: "FS45-23MRD"
    }
  },
  {
    id: 224,
    name: "Midea 30 L Dehumidifier",
    brand: "Midea",
    brandId: "midea",
    model: "MDDP-30DEN7",
    category: "small",
    image: "/img/products/DFHBDFH.jpg",
    images: ["/img/products/DFHBDFH.jpg"],
    price: 3599,
    oldPrice: null,
    discount: 0,
    rating: 4.7,
    reviews: 267,
    icon: "⚡",
    color: "",
    tags: [
      "midea",
      "small"
    ],
    badge: "hot",
    description: "Midea 30 L DEHUMIDIFIER. Compact and efficient appliance for everyday household needs.",
    specs: {
      "Size/Capacity": "30 L",
      Model: "MDDP-30DEN7"
    }
  },
  {
    id: 225,
    name: "Midea 93 L Table Top",
    brand: "Midea",
    brandId: "midea",
    model: "MDRD142FGN50",
    category: "fridge",
    image: "/img/products/AA.jpg",
    images: ["/img/products/AA.jpg"],
    price: 2899,
    oldPrice: null,
    discount: 0,
    rating: 4.8,
    reviews: 203,
    icon: "🧊",
    color: "",
    tags: [
      "midea",
      "fridge"
    ],
    badge: "sale",
    description: "Midea 93 L TABLE TOP. High-capacity refrigerator with efficient cooling and spacious storage.",
    specs: {
      Capacity: "93 L",
      Type: "Top Freezer",
      Model: "MDRD142FGN50"
    }
  },
  {
    id: 226,
    name: "Midea 87 L DD Table Top",
    brand: "Midea",
    brandId: "midea",
    model: "MDRT134FGN50",
    category: "fridge",
    image: "/img/products/MDRT134FGN50-2.png",
    images: ["/img/products/MDRT134FGN50-2.png"],
    price: 3499,
    oldPrice: null,
    discount: 0,
    rating: 4.7,
    reviews: 267,
    icon: "🧊",
    color: "",
    tags: [
      "midea",
      "fridge"
    ],
    badge: "sale",
    description: "Midea 87 L DD TABLE TOP. High-capacity refrigerator with efficient cooling and spacious storage.",
    specs: {
      Capacity: "87 L",
      Type: "Top Freezer",
      Model: "MDRT134FGN50"
    }
  },
  {
    id: 227,
    name: "Midea 463 L Defrost- Top Freezer",
    brand: "Midea",
    brandId: "midea",
    model: "MDRT645MTN46D",
    category: "fridge",
    image: "/img/products/MIDEA-463LTR-DEFROST-TOP-FREEZER-FRIDGE-MDRT645MTN46D-FRONT.jpg",
    images: ["/img/products/MIDEA-463LTR-DEFROST-TOP-FREEZER-FRIDGE-MDRT645MTN46D-FRONT.jpg"],
    price: 11399,
    oldPrice: null,
    discount: 0,
    rating: 4.5,
    reviews: 234,
    icon: "🧊",
    color: "",
    tags: [
      "midea",
      "fridge"
    ],
    badge: "sale",
    description: "Midea 463 L DEFROST- TOP FREEZER. High-capacity refrigerator with efficient cooling and spacious storage.",
    specs: {
      Capacity: "463 L",
      Type: "Top Freezer",
      Model: "MDRT645MTN46D"
    }
  },
  {
    id: 228,
    name: "Midea 360 L Defrost- Top Freezer",
    brand: "Midea",
    brandId: "midea",
    model: "MDRT489MTN46",
    category: "fridge",
    image: "/img/products/MDRT489MTN46-2.png",
    images: ["/img/products/MDRT489MTN46-2.png"],
    price: 9199,
    oldPrice: null,
    discount: 0,
    rating: 4.3,
    reviews: 312,
    icon: "🧊",
    color: "",
    tags: [
      "midea",
      "fridge"
    ],
    badge: "hot",
    description: "Midea 360 L DEFROST- TOP FREEZER. High-capacity refrigerator with efficient cooling and spacious storage.",
    specs: {
      Capacity: "360 L",
      Type: "Top Freezer",
      Model: "MDRT489MTN46"
    }
  },
  {
    id: 229,
    name: "Midea 207 L Defrost- Top Freezer",
    brand: "Midea",
    brandId: "midea",
    model: "MDRT294FGN28",
    category: "fridge",
    image: "/img/products/mdrt294fgn28_brandpng",
    images: ["/img/products/mdrt294fgn28_brandpng"],
    price: 4599,
    oldPrice: null,
    discount: 0,
    rating: 4.3,
    reviews: 124,
    icon: "🧊",
    color: "",
    tags: [
      "midea",
      "fridge"
    ],
    badge: "hot",
    description: "Midea 207 L DEFROST- TOP FREEZER. High-capacity refrigerator with efficient cooling and spacious storage.",
    specs: {
      Capacity: "207 L",
      Type: "Top Freezer",
      Model: "MDRT294FGN28"
    }
  },
  {
    id: 230,
    name: "Midea 128 L Defrost- Top Freezer",
    brand: "Midea",
    brandId: "midea",
    model: "MDRT187FGG28",
    category: "fridge",
    image: "/img/products/mdrt187fgg28_brandpng",
    images: ["/img/products/mdrt187fgg28_brandpng"],
    price: 3599,
    oldPrice: null,
    discount: 0,
    rating: 4.6,
    reviews: 267,
    icon: "🧊",
    color: "",
    tags: [
      "midea",
      "fridge"
    ],
    badge: "sale",
    description: "Midea 128 L DEFROST- TOP FREEZER. High-capacity refrigerator with efficient cooling and spacious storage.",
    specs: {
      Capacity: "128 L",
      Type: "Top Freezer",
      Model: "MDRT187FGG28"
    }
  },
  {
    id: 231,
    name: "Midea 211 L Single Door Display",
    brand: "Midea",
    brandId: "midea",
    model: "MDRZ302FZG21",
    category: "fridge",
    image: "/img/products/MIDEA-400LTR-SINGLE-DOOR-DISPLAY-FRIDGE1-1.jpg",
    images: ["/img/products/MIDEA-400LTR-SINGLE-DOOR-DISPLAY-FRIDGE1-1.jpg"],
    price: 7099,
    oldPrice: null,
    discount: 0,
    rating: 4.6,
    reviews: 124,
    icon: "🧊",
    color: "",
    tags: [
      "midea",
      "fridge"
    ],
    badge: "sale",
    description: "Midea 211 L SINGLE DOOR DISPLAY. High-capacity refrigerator with efficient cooling and spacious storage.",
    specs: {
      Capacity: "211 L",
      Model: "MDRZ302FZG21"
    }
  },
  {
    id: 232,
    name: "Midea Side By Side",
    brand: "Midea",
    brandId: "midea",
    model: "MDRC207FZN43",
    category: "fridge",
    image: "/img/products/5-3.jpg",
    images: ["/img/products/5-3.jpg"],
    price: 3599,
    oldPrice: null,
    discount: 0,
    rating: 4.7,
    reviews: 178,
    icon: "🧊",
    color: "",
    tags: [
      "midea",
      "fridge",
      "side-by-side"
    ],
    badge: "sale",
    description: "Midea SIDE BY SIDE. High-capacity refrigerator with efficient cooling and spacious storage.",
    specs: {
      Type: "Side by Side",
      Model: "MDRC207FZN43"
    }
  },
  {
    id: 233,
    name: "Midea 198 L Side By Side",
    brand: "Midea",
    brandId: "midea",
    model: "MDRC280FZN43",
    category: "fridge",
    image: "/img/products/MIDEA-198LTRS-CHEST-FREEZER-MDRC280FZN43-FRONT.jpg",
    images: ["/img/products/MIDEA-198LTRS-CHEST-FREEZER-MDRC280FZN43-FRONT.jpg"],
    price: 4499,
    oldPrice: null,
    discount: 0,
    rating: 4.2,
    reviews: 124,
    icon: "🧊",
    color: "",
    tags: [
      "midea",
      "fridge",
      "side-by-side"
    ],
    badge: "sale",
    description: "Midea 198 L SIDE BY SIDE. High-capacity refrigerator with efficient cooling and spacious storage.",
    specs: {
      Capacity: "198 L",
      Type: "Side by Side",
      Model: "MDRC280FZN43"
    }
  },
  {
    id: 234,
    name: "Midea 249 L Chest Freezer",
    brand: "Midea",
    brandId: "midea",
    model: "MDRC345FZG43",
    category: "fridge",
    image: "/img/products/mdrc345fzg43_brandpng",
    images: ["/img/products/mdrc345fzg43_brandpng"],
    price: 5299,
    oldPrice: null,
    discount: 0,
    rating: 4.6,
    reviews: 56,
    icon: "🧊",
    color: "",
    tags: [
      "midea",
      "fridge"
    ],
    badge: "hot",
    description: "Midea 249 L CHEST FREEZER. High-capacity refrigerator with efficient cooling and spacious storage.",
    specs: {
      Capacity: "249 L",
      Type: "Chest Freezer",
      Model: "MDRC345FZG43"
    }
  },
  {
    id: 235,
    name: "Midea 418 L Chest Freezer",
    brand: "Midea",
    brandId: "midea",
    model: "MDRC564FZN01",
    category: "fridge",
    image: "/img/products/MDRC564FZN01-2.png",
    images: ["/img/products/MDRC564FZN01-2.png"],
    price: 8799,
    oldPrice: null,
    discount: 0,
    rating: 4.6,
    reviews: 203,
    icon: "🧊",
    color: "",
    tags: [
      "midea",
      "fridge"
    ],
    badge: "hot",
    description: "Midea 418 L CHEST FREEZER. High-capacity refrigerator with efficient cooling and spacious storage.",
    specs: {
      Capacity: "418 L",
      Type: "Chest Freezer",
      Model: "MDRC564FZN01"
    }
  },
  {
    id: 236,
    name: "Midea 508 L Dd-chest Freezer",
    brand: "Midea",
    brandId: "midea",
    model: "MDRC698FZN01",
    category: "fridge",
    image: "/img/products/MIDEA-508LTRS-CHEST-FREEZER-MDRC698FZN01-FRONT.jpg",
    images: ["/img/products/MIDEA-508LTRS-CHEST-FREEZER-MDRC698FZN01-FRONT.jpg"],
    price: 9699,
    oldPrice: null,
    discount: 0,
    rating: 4.3,
    reviews: 124,
    icon: "🧊",
    color: "",
    tags: [
      "midea",
      "fridge"
    ],
    badge: "hot",
    description: "Midea 508 L DD-CHEST FREEZER. High-capacity refrigerator with efficient cooling and spacious storage.",
    specs: {
      Capacity: "508 L",
      Type: "Chest Freezer",
      Model: "MDRC698FZN01"
    }
  },
  {
    id: 237,
    name: "Midea 99 L Inverter",
    brand: "Midea",
    brandId: "midea",
    model: "MDRC193FZG43D",
    category: "small",
    image: "/img/products/MDRC193FZG43D-3.png",
    images: ["/img/products/MDRC193FZG43D-3.png"],
    price: 2499,
    oldPrice: null,
    discount: 0,
    rating: 4.6,
    reviews: 89,
    icon: "⚡",
    color: "",
    tags: [
      "midea",
      "small",
      "inverter"
    ],
    badge: "hot",
    description: "Midea 99 L INVERTER. Compact and efficient appliance for everyday household needs.",
    specs: {
      "Size/Capacity": "99 L",
      Model: "MDRC193FZG43D"
    }
  },
  {
    id: 238,
    name: "Midea 143 L Inverter",
    brand: "Midea",
    brandId: "midea",
    model: "MDRC265FZG43D",
    category: "small",
    image: "/img/products/mdrc265fzg43d_brandpng",
    images: ["/img/products/mdrc265fzg43d_brandpng"],
    price: 2899,
    oldPrice: null,
    discount: 0,
    rating: 4.8,
    reviews: 234,
    icon: "⚡",
    color: "",
    tags: [
      "midea",
      "small",
      "inverter"
    ],
    description: "Midea 143 L INVERTER. Compact and efficient appliance for everyday household needs.",
    specs: {
      "Size/Capacity": "143 L",
      Model: "MDRC265FZG43D"
    }
  },
  {
    id: 239,
    name: "Midea 198 L Inverter",
    brand: "Midea",
    brandId: "midea",
    model: "MDRC362FZG43D",
    category: "small",
    image: "/img/products/mdrc362fzg43d_brandpng",
    images: ["/img/products/mdrc362fzg43d_brandpng"],
    price: 3499,
    oldPrice: null,
    discount: 0,
    rating: 4.2,
    reviews: 389,
    icon: "⚡",
    color: "",
    tags: [
      "midea",
      "small",
      "inverter"
    ],
    description: "Midea 198 L INVERTER. Compact and efficient appliance for everyday household needs.",
    specs: {
      "Size/Capacity": "198 L",
      Model: "MDRC362FZG43D"
    }
  },
  {
    id: 240,
    name: "Midea 12 KG Front Load Washing Machine",
    brand: "Midea",
    brandId: "midea",
    model: "MF200W120WB/T",
    category: "laundry",
    image: "/img/products/MF110W70-OPENED.png",
    images: ["/img/products/MF110W70-OPENED.png"],
    price: 8799,
    oldPrice: null,
    discount: 0,
    rating: 4.2,
    reviews: 145,
    icon: "🫧",
    color: "",
    tags: [
      "midea",
      "laundry",
      "front-load"
    ],
    badge: "hot",
    description: "Midea 12 KG FRONT LOAD. Powerful washing machine with multiple wash programs and energy-saving motor.",
    specs: {
      Capacity: "12 KG",
      Type: "Front Load",
      Model: "MF200W120WB/T"
    }
  },
  {
    id: 241,
    name: "Midea 8 KG Front Load Washing Machine",
    brand: "Midea",
    brandId: "midea",
    model: "MF110W80B/T",
    category: "laundry",
    image: "/img/products/mf110w80b_t_brandpng",
    images: ["/img/products/mf110w80b_t_brandpng"],
    price: 6399,
    oldPrice: null,
    discount: 0,
    rating: 4.8,
    reviews: 67,
    icon: "🫧",
    color: "",
    tags: [
      "midea",
      "laundry",
      "front-load"
    ],
    badge: "hot",
    description: "Midea 8 KG FRONT LOAD. Powerful washing machine with multiple wash programs and energy-saving motor.",
    specs: {
      Capacity: "8 KG",
      Type: "Front Load",
      Model: "MF110W80B/T"
    }
  },
  {
    id: 242,
    name: "Midea 7 KG Front Load Washing Machine",
    brand: "Midea",
    brandId: "midea",
    model: "MF110W70/T",
    category: "laundry",
    image: "/img/products/MF110W70-OPENED.png",
    images: ["/img/products/MF110W70-OPENED.png"],
    price: 5499,
    oldPrice: null,
    discount: 0,
    rating: 4.5,
    reviews: 89,
    icon: "🫧",
    color: "",
    tags: [
      "midea",
      "laundry",
      "front-load"
    ],
    badge: "hot",
    description: "Midea 7 KG FRONT LOAD. Powerful washing machine with multiple wash programs and energy-saving motor.",
    specs: {
      Capacity: "7 KG",
      Type: "Front Load",
      Model: "MF110W70/T"
    }
  },
  {
    id: 243,
    name: "Midea 12 KG Twin Top Washing Machine",
    brand: "Midea",
    brandId: "midea",
    model: "MT100W120/WG",
    category: "laundry",
    image: "/img/products/mt100w120_wg_brandpng",
    images: ["/img/products/mt100w120_wg_brandpng"],
    price: 3399,
    oldPrice: null,
    discount: 0,
    rating: 4.6,
    reviews: 67,
    icon: "🫧",
    color: "",
    tags: [
      "midea",
      "laundry"
    ],
    description: "Midea 12 KG TWIN TOP. Powerful washing machine with multiple wash programs and energy-saving motor.",
    specs: {
      Capacity: "12 KG",
      Type: "Twin Tub",
      Model: "MT100W120/WG"
    }
  },
  {
    id: 244,
    name: "Midea 7 KGS Twin Top Washing Machine",
    brand: "Midea",
    brandId: "midea",
    model: "MT100W70/WG",
    category: "laundry",
    image: "/img/products/MT100W70W-GH-3.jpg",
    images: ["/img/products/MT100W70W-GH-3.jpg"],
    price: 2199,
    oldPrice: null,
    discount: 0,
    rating: 4.6,
    reviews: 389,
    icon: "🫧",
    color: "",
    tags: [
      "midea",
      "laundry"
    ],
    description: "Midea 7 KGS TWIN TOP. Powerful washing machine with multiple wash programs and energy-saving motor.",
    specs: {
      Capacity: "7 KGS",
      Type: "Twin Tub",
      Model: "MT100W70/WG"
    }
  },
  {
    id: 245,
    name: "Midea 4 BURNERS 4 Burner",
    brand: "Midea",
    brandId: "midea",
    model: "SP5055T082-B",
    category: "small",
    image: "/img/products/136LMG5G027-C.15.png",
    images: ["/img/products/136LMG5G027-C.15.png"],
    price: 2599,
    oldPrice: null,
    discount: 0,
    rating: 4.2,
    reviews: 389,
    icon: "⚡",
    color: "",
    tags: [
      "midea",
      "small"
    ],
    badge: "sale",
    description: "Midea 4 BURNERS 4 BURNER. Compact and efficient appliance for everyday household needs.",
    specs: {
      "Size/Capacity": "4 BURNERS",
      Model: "SP5055T082-B"
    }
  },
  {
    id: 246,
    name: "Midea 4 Burner (SP5055T082-S)",
    brand: "Midea",
    brandId: "midea",
    model: "SP5055T082-S",
    category: "small",
    image: "/img/products/MIDEA-4-BURNER-GAS-COOKER-BLACK-MIRROR-GRILL-SP5055T082-BG-FRONT.jpg",
    images: ["/img/products/MIDEA-4-BURNER-GAS-COOKER-BLACK-MIRROR-GRILL-SP5055T082-BG-FRONT.jpg"],
    price: 2699,
    oldPrice: null,
    discount: 0,
    rating: 4.2,
    reviews: 445,
    icon: "⚡",
    color: "",
    tags: [
      "midea",
      "small"
    ],
    badge: "sale",
    description: "Midea 4 BURNER. Compact and efficient appliance for everyday household needs.",
    specs: {
      Model: "SP5055T082-S"
    }
  },
  {
    id: 247,
    name: "Midea 4 Burner (SP5055T082-BG)",
    brand: "Midea",
    brandId: "midea",
    model: "SP5055T082-BG",
    category: "small",
    image: "/img/products/MIDEA-4-BURNER-GAS-COOKER-BLACK-MIRROR-GRILL-SP5055T082-BG-FRONT.jpg",
    images: ["/img/products/MIDEA-4-BURNER-GAS-COOKER-BLACK-MIRROR-GRILL-SP5055T082-BG-FRONT.jpg"],
    price: 2699,
    oldPrice: null,
    discount: 0,
    rating: 4.7,
    reviews: 389,
    icon: "⚡",
    color: "",
    tags: [
      "midea",
      "small"
    ],
    badge: "sale",
    description: "Midea 4 BURNER. Compact and efficient appliance for everyday household needs.",
    specs: {
      Model: "SP5055T082-BG"
    }
  },
  {
    id: 248,
    name: "Midea 4 Burner (SP5055T082-SGH)",
    brand: "Midea",
    brandId: "midea",
    model: "SP5055T082-SGH",
    category: "small",
    image: "/img/products/MIDEA-4-BURNER-GAS-COOKER-BLACK-MIRROR-GRILL-SP5055T082-BG-FRONT.jpg",
    images: ["/img/products/MIDEA-4-BURNER-GAS-COOKER-BLACK-MIRROR-GRILL-SP5055T082-BG-FRONT.jpg"],
    price: 2699,
    oldPrice: null,
    discount: 0,
    rating: 4.6,
    reviews: 203,
    icon: "⚡",
    color: "",
    tags: [
      "midea",
      "small"
    ],
    badge: "sale",
    description: "Midea 4 BURNER. Compact and efficient appliance for everyday household needs.",
    specs: {
      Model: "SP5055T082-SGH"
    }
  },
  {
    id: 249,
    name: "Midea 4 Burner (24TMG4G081-S)",
    brand: "Midea",
    brandId: "midea",
    model: "24TMG4G081-S",
    category: "small",
    image: "/img/products/24TMG4G081-B-1.png",
    images: ["/img/products/24TMG4G081-B-1.png"],
    price: 3799,
    oldPrice: null,
    discount: 0,
    rating: 4.4,
    reviews: 312,
    icon: "⚡",
    color: "",
    tags: [
      "midea",
      "small"
    ],
    badge: "hot",
    description: "Midea 4 BURNER. Compact and efficient appliance for everyday household needs.",
    specs: {
      Model: "24TMG4G081-S"
    }
  },
  {
    id: 250,
    name: "Midea 4 Burner (24TMG4G081-B)",
    brand: "Midea",
    brandId: "midea",
    model: "24TMG4G081-B",
    category: "small",
    image: "/img/products/24TMG4G081-B-1.png",
    images: ["/img/products/24TMG4G081-B-1.png"],
    price: 3899,
    oldPrice: null,
    discount: 0,
    rating: 4.3,
    reviews: 145,
    icon: "⚡",
    color: "",
    tags: [
      "midea",
      "small"
    ],
    badge: "hot",
    description: "Midea 4 BURNER. Compact and efficient appliance for everyday household needs.",
    specs: {
      Model: "24TMG4G081-B"
    }
  },
  {
    id: 251,
    name: "Midea 4 Burner (24TMG4G081-WD)",
    brand: "Midea",
    brandId: "midea",
    model: "24TMG4G081-WD",
    category: "small",
    image: "/img/products/24TMG4G081-B-1.png",
    images: ["/img/products/24TMG4G081-B-1.png"],
    price: 3999,
    oldPrice: null,
    discount: 0,
    rating: 4.7,
    reviews: 178,
    icon: "⚡",
    color: "",
    tags: [
      "midea",
      "small"
    ],
    badge: "hot",
    description: "Midea 4 BURNER. Compact and efficient appliance for everyday household needs.",
    specs: {
      Model: "24TMG4G081-WD"
    }
  },
  {
    id: 252,
    name: "Midea 4 Burner (24LMG4G027)",
    brand: "Midea",
    brandId: "midea",
    model: "24LMG4G027",
    category: "small",
    image: "/img/products/24lmg4g027_brandpng",
    images: ["/img/products/24lmg4g027_brandpng"],
    price: 5699,
    oldPrice: null,
    discount: 0,
    rating: 4.3,
    reviews: 312,
    icon: "⚡",
    color: "",
    tags: [
      "midea",
      "small"
    ],
    badge: "sale",
    description: "Midea 4 BURNER. Compact and efficient appliance for everyday household needs.",
    specs: {
      Model: "24LMG4G027"
    }
  },
  {
    id: 253,
    name: "Midea 5 BURNERS 5 Burner",
    brand: "Midea",
    brandId: "midea",
    model: "30AMG5G027-SILVER",
    category: "small",
    image: "/img/products/30AMG5G027-SILVER.jpg",
    images: ["/img/products/30AMG5G027-SILVER.jpg"],
    price: 7499,
    oldPrice: null,
    discount: 0,
    rating: 4.5,
    reviews: 234,
    icon: "⚡",
    color: "",
    tags: [
      "midea",
      "small"
    ],
    badge: "sale",
    description: "Midea 5 BURNERS 5 BURNER. Compact and efficient appliance for everyday household needs.",
    specs: {
      "Size/Capacity": "5 BURNERS",
      Model: "30AMG5G027-SILVER"
    }
  },
  {
    id: 254,
    name: "Midea 5 Burner (36LMG5G080V)",
    brand: "Midea",
    brandId: "midea",
    model: "36LMG5G080V",
    category: "small",
    image: "/img/products/36LMG5G080V.png",
    images: ["/img/products/36LMG5G080V.png"],
    price: 9199,
    oldPrice: null,
    discount: 0,
    rating: 4.7,
    reviews: 145,
    icon: "⚡",
    color: "",
    tags: [
      "midea",
      "small"
    ],
    badge: "hot",
    description: "Midea 5 BURNER. Compact and efficient appliance for everyday household needs.",
    specs: {
      Model: "36LMG5G080V"
    }
  },
  {
    id: 255,
    name: "Midea 5 Burner (36LMG5G027-C)",
    brand: "Midea",
    brandId: "midea",
    model: "36LMG5G027-C",
    category: "small",
    image: "/img/products/136LMG5G027-C.15.png",
    images: ["/img/products/136LMG5G027-C.15.png"],
    price: 9199,
    oldPrice: null,
    discount: 0,
    rating: 4.4,
    reviews: 56,
    icon: "⚡",
    color: "",
    tags: [
      "midea",
      "small"
    ],
    badge: "sale",
    description: "Midea 5 BURNER. Compact and efficient appliance for everyday household needs.",
    specs: {
      Model: "36LMG5G027-C"
    }
  },
  {
    id: 256,
    name: "Midea 5 Burner (LMG90030)",
    brand: "Midea",
    brandId: "midea",
    model: "LMG90030",
    category: "small",
    image: "/img/products/LMG90030-3-1.png",
    images: ["/img/products/LMG90030-3-1.png"],
    price: 8999,
    oldPrice: null,
    discount: 0,
    rating: 4.4,
    reviews: 89,
    icon: "⚡",
    color: "",
    tags: [
      "midea",
      "small"
    ],
    badge: "hot",
    description: "Midea 5 BURNER. Compact and efficient appliance for everyday household needs.",
    specs: {
      Model: "LMG90030"
    }
  },
  {
    id: 257,
    name: "Midea 5 Burner (VESTA-P48C)",
    brand: "Midea",
    brandId: "midea",
    model: "VESTA-P48C",
    category: "small",
    image: "/img/products/vesta-p48c_brandpng",
    images: ["/img/products/vesta-p48c_brandpng"],
    price: 11399,
    oldPrice: null,
    discount: 0,
    rating: 4.2,
    reviews: 56,
    icon: "⚡",
    color: "",
    tags: [
      "midea",
      "small"
    ],
    description: "Midea 5 BURNER. Compact and efficient appliance for everyday household needs.",
    specs: {
      Model: "VESTA-P48C"
    }
  },
  {
    id: 258,
    name: "Midea 30 LTRS Solo",
    brand: "Midea",
    brandId: "midea",
    model: "EM9P032MO-B",
    category: "small",
    image: "/img/products/EM9P032MO-B-1.png",
    images: ["/img/products/EM9P032MO-B-1.png"],
    price: 1699,
    oldPrice: null,
    discount: 0,
    rating: 4.6,
    reviews: 389,
    icon: "⚡",
    color: "",
    tags: [
      "midea",
      "small"
    ],
    description: "Midea 30 LTRS SOLO. Compact and efficient appliance for everyday household needs.",
    specs: {
      "Size/Capacity": "30 LTRS",
      Model: "EM9P032MO-B"
    }
  },
  {
    id: 259,
    name: "Midea 20 LTRS Solo",
    brand: "Midea",
    brandId: "midea",
    model: "MM7P012MZ-B",
    category: "small",
    image: "/img/products/MM7P012MZ-B-2-jpg.webp",
    images: ["/img/products/MM7P012MZ-B-2-jpg.webp"],
    price: 1199,
    oldPrice: null,
    discount: 0,
    rating: 4.2,
    reviews: 89,
    icon: "⚡",
    color: "",
    tags: [
      "midea",
      "small"
    ],
    badge: "sale",
    description: "Midea 20 LTRS SOLO. Compact and efficient appliance for everyday household needs.",
    specs: {
      "Size/Capacity": "20 LTRS",
      Model: "MM7P012MZ-B"
    }
  },
  {
    id: 260,
    name: "Midea 17 LTRS Microwave",
    brand: "Midea",
    brandId: "midea",
    model: "AM717BS7",
    category: "kitchen",
    image: "/img/products/AM925BVE-B.png",
    images: ["/img/products/AM925BVE-B.png"],
    price: 3599,
    oldPrice: null,
    discount: 0,
    rating: 4.6,
    reviews: 67,
    icon: "🍳",
    color: "",
    tags: [
      "midea",
      "kitchen"
    ],
    badge: "hot",
    description: "Midea 17 LTRS MICROWAVE. Reliable kitchen appliance built for everyday use with easy controls.",
    specs: {
      "Size/Capacity": "17 LTRS",
      Model: "AM717BS7"
    }
  },
  {
    id: 261,
    name: "Midea 25 LTRS Microwave",
    brand: "Midea",
    brandId: "midea",
    model: "AM925BVE",
    category: "kitchen",
    image: "/img/products/AM925BVE-B.png",
    images: ["/img/products/AM925BVE-B.png"],
    price: 4899,
    oldPrice: null,
    discount: 0,
    rating: 4.6,
    reviews: 312,
    icon: "🍳",
    color: "",
    tags: [
      "midea",
      "kitchen"
    ],
    badge: "hot",
    description: "Midea 25 LTRS MICROWAVE. Reliable kitchen appliance built for everyday use with easy controls.",
    specs: {
      "Size/Capacity": "25 LTRS",
      Model: "AM925BVE"
    }
  },
  {
    id: 262,
    name: "Midea 60 CM Electric Oven (65M80M1-012)",
    brand: "Midea",
    brandId: "midea",
    model: "65M80M1-012",
    category: "kitchen",
    image: "/img/products/65m80m1-012_brandpng",
    images: ["/img/products/65m80m1-012_brandpng"],
    price: 5699,
    oldPrice: null,
    discount: 0,
    rating: 4.3,
    reviews: 178,
    icon: "🍳",
    color: "",
    tags: [
      "midea",
      "kitchen"
    ],
    badge: "hot",
    description: "Midea 60 CM ELECTRIC OVEN. Reliable kitchen appliance built for everyday use with easy controls.",
    specs: {
      "Size/Capacity": "60 CM",
      Model: "65M80M1-012"
    }
  },
  {
    id: 263,
    name: "Midea 60 CM Electric Oven (65M80M1-004BK)",
    brand: "Midea",
    brandId: "midea",
    model: "65M80M1-004BK",
    category: "kitchen",
    image: "/img/products/65m80m1-004bk_brandpng",
    images: ["/img/products/65m80m1-004bk_brandpng"],
    price: 5999,
    oldPrice: null,
    discount: 0,
    rating: 4.2,
    reviews: 67,
    icon: "🍳",
    color: "",
    tags: [
      "midea",
      "kitchen"
    ],
    badge: "hot",
    description: "Midea 60 CM ELECTRIC OVEN. Reliable kitchen appliance built for everyday use with easy controls.",
    specs: {
      "Size/Capacity": "60 CM",
      Model: "65M80M1-004BK"
    }
  },
  {
    id: 264,
    name: "Midea 4 BURNER - 60CM Gas Hob",
    brand: "Midea",
    brandId: "midea",
    model: "60G40ME",
    category: "kitchen",
    image: "/img/products/1-34.jpg",
    images: ["/img/products/1-34.jpg"],
    price: 3099,
    oldPrice: null,
    discount: 0,
    rating: 4.4,
    reviews: 312,
    icon: "🍳",
    color: "",
    tags: [
      "midea",
      "kitchen"
    ],
    badge: "hot",
    description: "Midea 4 BURNER - 60CM GAS HOB. Reliable kitchen appliance built for everyday use with easy controls.",
    specs: {
      "Size/Capacity": "4 BURNER - 60CM",
      Model: "60G40ME"
    }
  },
  {
    id: 265,
    name: "Midea Gas Hob",
    brand: "Midea",
    brandId: "midea",
    model: "90G50ME",
    category: "kitchen",
    image: "/img/products/60GJ084-3.png",
    images: ["/img/products/60GJ084-3.png"],
    price: 3299,
    oldPrice: null,
    discount: 0,
    rating: 4.3,
    reviews: 56,
    icon: "🍳",
    color: "",
    tags: [
      "midea",
      "kitchen"
    ],
    badge: "hot",
    description: "Midea GAS HOB. Reliable kitchen appliance built for everyday use with easy controls.",
    specs: {
      Model: "90G50ME"
    }
  },
  {
    id: 266,
    name: "Midea 2 HOBS Electric Hob",
    brand: "Midea",
    brandId: "midea",
    model: "MC-HD301",
    category: "kitchen",
    image: "/img/products/MIDEA-4-BURNER-ELECTRIC-HOB1.jpg",
    images: ["/img/products/MIDEA-4-BURNER-ELECTRIC-HOB1.jpg"],
    price: 3799,
    oldPrice: null,
    discount: 0,
    rating: 4.8,
    reviews: 203,
    icon: "🍳",
    color: "",
    tags: [
      "midea",
      "kitchen"
    ],
    badge: "sale",
    description: "Midea 2 HOBS ELECTRIC HOB. Reliable kitchen appliance built for everyday use with easy controls.",
    specs: {
      "Size/Capacity": "2 HOBS",
      Model: "MC-HD301"
    }
  },
  {
    id: 267,
    name: "Midea 4 HOBS Electric Hob",
    brand: "Midea",
    brandId: "midea",
    model: "MC-HF605",
    category: "kitchen",
    image: "/img/products/mc-hf605_brandpng",
    images: ["/img/products/mc-hf605_brandpng"],
    price: 5099,
    oldPrice: null,
    discount: 0,
    rating: 4.7,
    reviews: 312,
    icon: "🍳",
    color: "",
    tags: [
      "midea",
      "kitchen"
    ],
    description: "Midea 4 HOBS ELECTRIC HOB. Reliable kitchen appliance built for everyday use with easy controls.",
    specs: {
      "Size/Capacity": "4 HOBS",
      Model: "MC-HF605"
    }
  },
  {
    id: 268,
    name: "Midea 5 HOBS Electric Hob",
    brand: "Midea",
    brandId: "midea",
    model: "MC-HV848",
    category: "kitchen",
    image: "/img/products/mc-hv848_brandpng",
    images: ["/img/products/mc-hv848_brandpng"],
    price: 7099,
    oldPrice: null,
    discount: 0,
    rating: 4.6,
    reviews: 145,
    icon: "🍳",
    color: "",
    tags: [
      "midea",
      "kitchen"
    ],
    badge: "sale",
    description: "Midea 5 HOBS ELECTRIC HOB. Reliable kitchen appliance built for everyday use with easy controls.",
    specs: {
      "Size/Capacity": "5 HOBS",
      Model: "MC-HV848"
    }
  },
  {
    id: 269,
    name: "Midea 60 CM Electric Hob",
    brand: "Midea",
    brandId: "midea",
    model: "60M21-S",
    category: "kitchen",
    image: "/img/products/60m21-s_brandpng",
    images: ["/img/products/60m21-s_brandpng"],
    price: 2899,
    oldPrice: null,
    discount: 0,
    rating: 4.6,
    reviews: 124,
    icon: "🍳",
    color: "",
    tags: [
      "midea",
      "kitchen"
    ],
    badge: "hot",
    description: "Midea 60 CM ELECTRIC HOB. Reliable kitchen appliance built for everyday use with easy controls.",
    specs: {
      "Size/Capacity": "60 CM",
      Model: "60M21-S"
    }
  },
  {
    id: 270,
    name: "Midea 90 CM Electric Hob (90M21)",
    brand: "Midea",
    brandId: "midea",
    model: "90M21",
    category: "kitchen",
    image: "/img/products/90M21-S-1.png",
    images: ["/img/products/90M21-S-1.png"],
    price: 3799,
    oldPrice: null,
    discount: 0,
    rating: 4.7,
    reviews: 203,
    icon: "🍳",
    color: "",
    tags: [
      "midea",
      "kitchen"
    ],
    badge: "sale",
    description: "Midea 90 CM ELECTRIC HOB. Reliable kitchen appliance built for everyday use with easy controls.",
    specs: {
      "Size/Capacity": "90 CM",
      Model: "90M21"
    }
  },
  {
    id: 271,
    name: "Midea 90 CM Electric Hob (90M21-S)",
    brand: "Midea",
    brandId: "midea",
    model: "90M21-S",
    category: "kitchen",
    image: "/img/products/90m21-s_brandpng",
    images: ["/img/products/90m21-s_brandpng"],
    price: 3799,
    oldPrice: null,
    discount: 0,
    rating: 4.4,
    reviews: 145,
    icon: "🍳",
    color: "",
    tags: [
      "midea",
      "kitchen"
    ],
    badge: "sale",
    description: "Midea 90 CM ELECTRIC HOB. Reliable kitchen appliance built for everyday use with easy controls.",
    specs: {
      "Size/Capacity": "90 CM",
      Model: "90M21-S"
    }
  },
  {
    id: 272,
    name: "Midea 60 CM - BLACK Electric Hob",
    brand: "Midea",
    brandId: "midea",
    model: "60L03-B",
    category: "kitchen",
    image: "/img/products/60l03-b_brandpng",
    images: ["/img/products/60l03-b_brandpng"],
    price: 2799,
    oldPrice: null,
    discount: 0,
    rating: 4.2,
    reviews: 234,
    icon: "🍳",
    color: "",
    tags: [
      "midea",
      "kitchen"
    ],
    badge: "hot",
    description: "Midea 60 CM - BLACK ELECTRIC HOB. Reliable kitchen appliance built for everyday use with easy controls.",
    specs: {
      "Size/Capacity": "60 CM - BLACK",
      Model: "60L03-B"
    }
  },
  {
    id: 273,
    name: "Midea 14 PLATES- SILVER CONTROL BOARD Dishwahsher",
    brand: "Midea",
    brandId: "midea",
    model: "WQP14-7713F",
    category: "small",
    image: "/img/products/wqp14-7713f_brandpng",
    images: ["/img/products/wqp14-7713f_brandpng"],
    price: 6999,
    oldPrice: null,
    discount: 0,
    rating: 4.4,
    reviews: 89,
    icon: "⚡",
    color: "",
    tags: [
      "midea",
      "small"
    ],
    description: "Midea 14 PLATES- SILVER CONTROL BOARD DISHWAHSHER. Compact and efficient appliance for everyday household needs.",
    specs: {
      "Size/Capacity": "14 PLATES- SILVER CONTROL BOARD",
      Model: "WQP14-7713F"
    }
  },
  {
    id: 274,
    name: "Midea 14 PLATES-BLACK CONTROL BOARD Dishwahsher",
    brand: "Midea",
    brandId: "midea",
    model: "WQP14-W7703L(B)",
    category: "small",
    image: "/img/products/wqp14-w7703l_b__brandpng",
    images: ["/img/products/wqp14-w7703l_b__brandpng"],
    price: 7499,
    oldPrice: null,
    discount: 0,
    rating: 4.2,
    reviews: 267,
    icon: "⚡",
    color: "",
    tags: [
      "midea",
      "small"
    ],
    description: "Midea 14 PLATES-BLACK CONTROL BOARD DISHWAHSHER. Compact and efficient appliance for everyday household needs.",
    specs: {
      "Size/Capacity": "14 PLATES-BLACK CONTROL BOARD",
      Model: "WQP14-W7703L(B)"
    }
  },
  {
    id: 275,
    name: "Midea 12 PLATES- SILVER BODY Dishwahsher",
    brand: "Midea",
    brandId: "midea",
    model: "WQP12-5201G(S)",
    category: "small",
    image: "/img/products/wqp12-5201g_s__brandpng",
    images: ["/img/products/wqp12-5201g_s__brandpng"],
    price: 5999,
    oldPrice: null,
    discount: 0,
    rating: 4.6,
    reviews: 234,
    icon: "⚡",
    color: "",
    tags: [
      "midea",
      "small"
    ],
    badge: "hot",
    description: "Midea 12 PLATES- SILVER BODY DISHWAHSHER. Compact and efficient appliance for everyday household needs.",
    specs: {
      "Size/Capacity": "12 PLATES- SILVER BODY",
      Model: "WQP12-5201G(S)"
    }
  },
  {
    id: 276,
    name: "Midea 8 KG/ 6KG Washer/dryer Built-in Washing Machine",
    brand: "Midea",
    brandId: "midea",
    model: "MFA06D80B/W",
    category: "laundry",
    image: "/img/products/mf200d.jpg",
    images: ["/img/products/mf200d.jpg"],
    price: 8299,
    oldPrice: null,
    discount: 0,
    rating: 4.4,
    reviews: 312,
    icon: "🫧",
    color: "",
    tags: [
      "midea",
      "laundry"
    ],
    badge: "sale",
    description: "Midea 8 KG/ 6KG WASHER/DRYER BUILT-IN. Powerful washing machine with multiple wash programs and energy-saving motor.",
    specs: {
      Capacity: "8 KG/ 6KG",
      Model: "MFA06D80B/W"
    }
  },
  {
    id: 277,
    name: "Midea 68 LTR Electric Oven",
    brand: "Midea",
    brandId: "midea",
    model: "MC68ABA",
    category: "kitchen",
    image: "/img/products/65M80M1-004BK-3.png",
    images: ["/img/products/65M80M1-004BK-3.png"],
    price: 2199,
    oldPrice: null,
    discount: 0,
    rating: 4.6,
    reviews: 67,
    icon: "🍳",
    color: "",
    tags: [
      "midea",
      "kitchen"
    ],
    badge: "hot",
    description: "Midea 68 LTR ELECTRIC OVEN. Reliable kitchen appliance built for everyday use with easy controls.",
    specs: {
      "Size/Capacity": "68 LTR",
      Model: "MC68ABA"
    }
  },
  {
    id: 278,
    name: "Midea 4 LTR - BLACK Air Fryer",
    brand: "Midea",
    brandId: "midea",
    model: "MF-CN40E2",
    category: "small",
    image: "/img/products/MIDEA-7LTR-AIR-FRYER-MF-CY70K.jpg",
    images: ["/img/products/MIDEA-7LTR-AIR-FRYER-MF-CY70K.jpg"],
    price: 899,
    oldPrice: null,
    discount: 0,
    rating: 4.7,
    reviews: 178,
    icon: "⚡",
    color: "",
    tags: [
      "midea",
      "small"
    ],
    badge: "sale",
    description: "Midea 4 LTR - BLACK AIR FRYER. Compact and efficient appliance for everyday household needs.",
    specs: {
      "Size/Capacity": "4 LTR - BLACK",
      Model: "MF-CN40E2"
    }
  },
  {
    id: 279,
    name: "Midea 4.5 LTR - BLACK Air Fryer",
    brand: "Midea",
    brandId: "midea",
    model: "MF-CN45WK",
    category: "small",
    image: "/img/products/mf-cn45wk_brandpng",
    images: ["/img/products/mf-cn45wk_brandpng"],
    price: 999,
    oldPrice: null,
    discount: 0,
    rating: 4.3,
    reviews: 145,
    icon: "⚡",
    color: "",
    tags: [
      "midea",
      "small"
    ],
    badge: "sale",
    description: "Midea 4.5 LTR - BLACK AIR FRYER. Compact and efficient appliance for everyday household needs.",
    specs: {
      "Size/Capacity": "4.5 LTR - BLACK",
      Model: "MF-CN45WK"
    }
  },
  {
    id: 280,
    name: "Midea 6 LTR - BLACK Air Fryer",
    brand: "Midea",
    brandId: "midea",
    model: "MF-CY55WK",
    category: "small",
    image: "/img/products/mf-cy55wk_brandpng",
    images: ["/img/products/mf-cy55wk_brandpng"],
    price: 1199,
    oldPrice: null,
    discount: 0,
    rating: 4.7,
    reviews: 312,
    icon: "⚡",
    color: "",
    tags: [
      "midea",
      "small"
    ],
    badge: "sale",
    description: "Midea 6 LTR - BLACK AIR FRYER. Compact and efficient appliance for everyday household needs.",
    specs: {
      "Size/Capacity": "6 LTR - BLACK",
      Model: "MF-CY55WK"
    }
  },
  {
    id: 281,
    name: "Midea 7 LTR - BLACK Air Fryer (MF-CY70K)",
    brand: "Midea",
    brandId: "midea",
    model: "MF-CY70K",
    category: "small",
    image: "/img/products/mf-cy70k_brandpng",
    images: ["/img/products/mf-cy70k_brandpng"],
    price: 1499,
    oldPrice: null,
    discount: 0,
    rating: 4.6,
    reviews: 56,
    icon: "⚡",
    color: "",
    tags: [
      "midea",
      "small"
    ],
    badge: "hot",
    description: "Midea 7 LTR - BLACK AIR FRYER. Compact and efficient appliance for everyday household needs.",
    specs: {
      "Size/Capacity": "7 LTR - BLACK",
      Model: "MF-CY70K"
    }
  },
  {
    id: 282,
    name: "Midea 7 LTR - BLACK Air Fryer (MF-CY85WK)",
    brand: "Midea",
    brandId: "midea",
    model: "MF-CY85WK",
    category: "small",
    image: "/img/products/mf-cy85wk_brandpng",
    images: ["/img/products/mf-cy85wk_brandpng"],
    price: 1599,
    oldPrice: null,
    discount: 0,
    rating: 4.4,
    reviews: 124,
    icon: "⚡",
    color: "",
    tags: [
      "midea",
      "small"
    ],
    badge: "hot",
    description: "Midea 7 LTR - BLACK AIR FRYER. Compact and efficient appliance for everyday household needs.",
    specs: {
      "Size/Capacity": "7 LTR - BLACK",
      Model: "MF-CY85WK"
    }
  },
  {
    id: 283,
    name: "Midea 0.5 LTR Juicer",
    brand: "Midea",
    brandId: "midea",
    model: "JE2802",
    category: "small",
    image: "/img/products/je2802_brandpng",
    images: ["/img/products/je2802_brandpng"],
    price: 799,
    oldPrice: null,
    discount: 0,
    rating: 4.2,
    reviews: 145,
    icon: "⚡",
    color: "",
    tags: [
      "midea",
      "small"
    ],
    badge: "sale",
    description: "Midea 0.5 LTR JUICER. Compact and efficient appliance for everyday household needs.",
    specs: {
      "Size/Capacity": "0.5 LTR",
      Model: "JE2802"
    }
  },
  {
    id: 284,
    name: "Midea 1.7 LTR Kettle (MK-17S32A2)",
    brand: "Midea",
    brandId: "midea",
    model: "MK-17S32A2",
    category: "small",
    image: "/img/products/mk-17s32a2_brandpng",
    images: ["/img/products/mk-17s32a2_brandpng"],
    price: 299,
    oldPrice: null,
    discount: 0,
    rating: 4.5,
    reviews: 312,
    icon: "⚡",
    color: "",
    tags: [
      "midea",
      "small"
    ],
    badge: "sale",
    description: "Midea 1.7 LTR KETTLE. Compact and efficient appliance for everyday household needs.",
    specs: {
      "Size/Capacity": "1.7 LTR",
      Model: "MK-17S32A2"
    }
  },
  {
    id: 285,
    name: "Midea 1.7 LTR Kettle (MK-17G02A2)",
    brand: "Midea",
    brandId: "midea",
    model: "MK-17G02A2",
    category: "small",
    image: "/img/products/mk-17g02a2_brandpng",
    images: ["/img/products/mk-17g02a2_brandpng"],
    price: 299,
    oldPrice: null,
    discount: 0,
    rating: 4.2,
    reviews: 124,
    icon: "⚡",
    color: "",
    tags: [
      "midea",
      "small"
    ],
    description: "Midea 1.7 LTR KETTLE. Compact and efficient appliance for everyday household needs.",
    specs: {
      "Size/Capacity": "1.7 LTR",
      Model: "MK-17G02A2"
    }
  },
  {
    id: 286,
    name: "Midea 2 LTRS Stand Mixer",
    brand: "Midea",
    brandId: "midea",
    model: "HM0293A",
    category: "small",
    image: "/img/products/MIDEA-400W-STAND-MIXER1-1.jpg",
    images: ["/img/products/MIDEA-400W-STAND-MIXER1-1.jpg"],
    price: 599,
    oldPrice: null,
    discount: 0,
    rating: 4.4,
    reviews: 234,
    icon: "⚡",
    color: "",
    tags: [
      "midea",
      "small"
    ],
    badge: "hot",
    description: "Midea 2 LTRS STAND MIXER. Compact and efficient appliance for everyday household needs.",
    specs: {
      "Size/Capacity": "2 LTRS",
      Model: "HM0293A"
    }
  },
  {
    id: 287,
    name: "Midea 1.5 LTR - BLACK Table Blender",
    brand: "Midea",
    brandId: "midea",
    model: "BL2518",
    category: "small",
    image: "/img/products/UKYGUION.jpg",
    images: ["/img/products/UKYGUION.jpg"],
    price: 329,
    oldPrice: null,
    discount: 0,
    rating: 4.7,
    reviews: 312,
    icon: "⚡",
    color: "",
    tags: [
      "midea",
      "small"
    ],
    badge: "hot",
    description: "Midea 1.5 LTR - BLACK TABLE BLENDER. Compact and efficient appliance for everyday household needs.",
    specs: {
      "Size/Capacity": "1.5 LTR - BLACK",
      Model: "BL2518"
    }
  },
  {
    id: 288,
    name: "Midea 1.5 LTR - WHITE Table Blender (MJ-BL40G1)",
    brand: "Midea",
    brandId: "midea",
    model: "MJ-BL40G1",
    category: "small",
    image: "/img/products/mj-bl40g1_brandpng",
    images: ["/img/products/mj-bl40g1_brandpng"],
    price: 529,
    oldPrice: null,
    discount: 0,
    rating: 4.3,
    reviews: 267,
    icon: "⚡",
    color: "",
    tags: [
      "midea",
      "small"
    ],
    badge: "hot",
    description: "Midea 1.5 LTR - WHITE TABLE BLENDER. Compact and efficient appliance for everyday household needs.",
    specs: {
      "Size/Capacity": "1.5 LTR - WHITE",
      Model: "MJ-BL40G1"
    }
  },
  {
    id: 289,
    name: "Midea 1.5 LTR - WHITE Table Blender (MJ-BL2516CEE-MP01S)",
    brand: "Midea",
    brandId: "midea",
    model: "MJ-BL2516CEE-MP01S",
    category: "small",
    image: "/img/products/mj-bl2516cee-mp01s_brandpng",
    images: ["/img/products/mj-bl2516cee-mp01s_brandpng"],
    price: 499,
    oldPrice: null,
    discount: 0,
    rating: 4.5,
    reviews: 203,
    icon: "⚡",
    color: "",
    tags: [
      "midea",
      "small"
    ],
    badge: "sale",
    description: "Midea 1.5 LTR - WHITE TABLE BLENDER. Compact and efficient appliance for everyday household needs.",
    specs: {
      "Size/Capacity": "1.5 LTR - WHITE",
      Model: "MJ-BL2516CEE-MP01S"
    }
  },
  {
    id: 290,
    name: "Midea 1.5 LTR - BLACK Stand Blender",
    brand: "Midea",
    brandId: "midea",
    model: "MJ-BL6006W",
    category: "small",
    image: "/img/products/MJ-BL6008BW.jpg",
    images: ["/img/products/MJ-BL6008BW.jpg"],
    price: 469,
    oldPrice: null,
    discount: 0,
    rating: 4.7,
    reviews: 445,
    icon: "⚡",
    color: "",
    tags: [
      "midea",
      "small"
    ],
    badge: "hot",
    description: "Midea 1.5 LTR - BLACK STAND BLENDER. Compact and efficient appliance for everyday household needs.",
    specs: {
      "Size/Capacity": "1.5 LTR - BLACK",
      Model: "MJ-BL6006W"
    }
  },
  {
    id: 291,
    name: "Midea 1 LTR - BLACK Stand Blender",
    brand: "Midea",
    brandId: "midea",
    model: "MJ-BL6008BW",
    category: "small",
    image: "/img/products/mj-bl6008bw_brandpng",
    images: ["/img/products/mj-bl6008bw_brandpng"],
    price: 399,
    oldPrice: null,
    discount: 0,
    rating: 4.6,
    reviews: 124,
    icon: "⚡",
    color: "",
    tags: [
      "midea",
      "small"
    ],
    badge: "hot",
    description: "Midea 1 LTR - BLACK STAND BLENDER. Compact and efficient appliance for everyday household needs.",
    specs: {
      "Size/Capacity": "1 LTR - BLACK",
      Model: "MJ-BL6008BW"
    }
  },
  {
    id: 292,
    name: "Midea 800W- WHITE Stand Blender",
    brand: "Midea",
    brandId: "midea",
    model: "MJ-FP8003W",
    category: "small",
    image: "/img/products/mj-fp8003w_brandpng",
    images: ["/img/products/mj-fp8003w_brandpng"],
    price: 699,
    oldPrice: null,
    discount: 0,
    rating: 4.2,
    reviews: 89,
    icon: "⚡",
    color: "",
    tags: [
      "midea",
      "small"
    ],
    description: "Midea 800W- WHITE STAND BLENDER. Compact and efficient appliance for everyday household needs.",
    specs: {
      "Size/Capacity": "800W- WHITE",
      Model: "MJ-FP8003W"
    }
  },
  {
    id: 293,
    name: "Midea 1 LTR- GOLD Rice Cooker",
    brand: "Midea",
    brandId: "midea",
    model: "YJ308J",
    category: "kitchen",
    image: "/img/products/YJ508J.png",
    images: ["/img/products/YJ508J.png"],
    price: 379,
    oldPrice: null,
    discount: 0,
    rating: 4.7,
    reviews: 234,
    icon: "🍳",
    color: "",
    tags: [
      "midea",
      "kitchen"
    ],
    description: "Midea 1 LTR- GOLD RICE COOKER. Reliable kitchen appliance built for everyday use with easy controls.",
    specs: {
      "Size/Capacity": "1 LTR- GOLD",
      Model: "YJ308J"
    }
  },
  {
    id: 294,
    name: "Midea 1.8 LTR- GOLD Rice Cooker",
    brand: "Midea",
    brandId: "midea",
    model: "YJ508J",
    category: "kitchen",
    image: "/img/products/YJ508J.png",
    images: ["/img/products/YJ508J.png"],
    price: 399,
    oldPrice: null,
    discount: 0,
    rating: 4.6,
    reviews: 124,
    icon: "🍳",
    color: "",
    tags: [
      "midea",
      "kitchen"
    ],
    description: "Midea 1.8 LTR- GOLD RICE COOKER. Reliable kitchen appliance built for everyday use with easy controls.",
    specs: {
      "Size/Capacity": "1.8 LTR- GOLD",
      Model: "YJ508J"
    }
  },
  {
    id: 295,
    name: "Midea 600W-BLACK Hand Blender",
    brand: "Midea",
    brandId: "midea",
    model: "MJ-BH6001W",
    category: "small",
    image: "/img/products/MIDEA-300WATT-HAND-BLENDER1.jpg",
    images: ["/img/products/MIDEA-300WATT-HAND-BLENDER1.jpg"],
    price: 449,
    oldPrice: null,
    discount: 0,
    rating: 4.8,
    reviews: 178,
    icon: "⚡",
    color: "",
    tags: [
      "midea",
      "small"
    ],
    description: "Midea 600W-BLACK HAND BLENDER. Compact and efficient appliance for everyday household needs.",
    specs: {
      "Size/Capacity": "600W-BLACK",
      Model: "MJ-BH6001W"
    }
  },
  {
    id: 296,
    name: "Midea 1000W Electric Pressure Cooker (MY-CS6037WP2)",
    brand: "Midea",
    brandId: "midea",
    model: "MY-CS6037WP2",
    category: "kitchen",
    image: "/img/products/MIDEA-5.7LTR-ELECTRIC-COOKER-MY-CS6037WP2.jpg",
    images: ["/img/products/MIDEA-5.7LTR-ELECTRIC-COOKER-MY-CS6037WP2.jpg"],
    price: 999,
    oldPrice: null,
    discount: 0,
    rating: 4.6,
    reviews: 203,
    icon: "🍳",
    color: "",
    tags: [
      "midea",
      "kitchen"
    ],
    description: "Midea 1000W ELECTRIC PRESSURE COOKER. Reliable kitchen appliance built for everyday use with easy controls.",
    specs: {
      "Size/Capacity": "1000W",
      Model: "MY-CS6037WP2"
    }
  },
  {
    id: 297,
    name: "Midea 1000W Electric Pressure Cooker (MY-CS8037WP2)",
    brand: "Midea",
    brandId: "midea",
    model: "MY-CS8037WP2",
    category: "kitchen",
    image: "/img/products/my-cs8037wp2_brandpng",
    images: ["/img/products/my-cs8037wp2_brandpng"],
    price: 1199,
    oldPrice: null,
    discount: 0,
    rating: 4.3,
    reviews: 445,
    icon: "🍳",
    color: "",
    tags: [
      "midea",
      "kitchen"
    ],
    badge: "hot",
    description: "Midea 1000W ELECTRIC PRESSURE COOKER. Reliable kitchen appliance built for everyday use with easy controls.",
    specs: {
      "Size/Capacity": "1000W",
      Model: "MY-CS8037WP2"
    }
  },
  {
    id: 298,
    name: "NASCO 24'' LED Flat",
    brand: "NASCO",
    brandId: "nasco",
    model: "NAS-J24FB",
    category: "small",
    image: "/img/products/NAS-B43FBFL-G.png",
    images: ["/img/products/NAS-B43FBFL-G.png"],
    price: 1099,
    oldPrice: null,
    discount: 0,
    rating: 4.3,
    reviews: 124,
    icon: "⚡",
    color: "",
    tags: [
      "nasco",
      "small"
    ],
    badge: "sale",
    description: "NASCO 24'' LED  FLAT. Compact and efficient appliance for everyday household needs.",
    specs: {
      "Size/Capacity": "24''",
      Model: "NAS-J24FB"
    }
  },
  {
    id: 299,
    name: "NASCO LED Flat (NAS-B24FB-A)",
    brand: "NASCO",
    brandId: "nasco",
    model: "NAS-B24FB-A",
    category: "small",
    image: null,
    images: ["/img/products/NASCO-32″-LED-FHD-DIGITAL-SATELLITE-NAS-B32FBFL-FRONT.jpg", "/img/products/NASCO-100-WATTS-STEAM-IRON-NAS-2203-DI-FRONT.png", "/img/products/NASCO-100LTR-CHEST-FREEZER-NAS-150FL-FRONT.jpg", "/img/products/NASCO-200-LTRS-CHEST-FREEZER-NAS-210-FRONT.jpg"],
    price: 1099,
    oldPrice: null,
    discount: 0,
    rating: 4.4,
    reviews: 178,
    icon: "⚡",
    color: "",
    tags: [
      "nasco",
      "small"
    ],
    badge: "sale",
    description: "NASCO LED  FLAT. Compact and efficient appliance for everyday household needs.",
    specs: {
      Model: "NAS-B24FB-A"
    }
  },
  {
    id: 300,
    name: "NASCO 32\" LED Flat",
    brand: "NASCO",
    brandId: "nasco",
    model: "NAS-J32FBFL",
    category: "small",
    image: null,
    images: ["/img/products/nasco-wine.jpg"],
    price: 1499,
    oldPrice: null,
    discount: 0,
    rating: 4.8,
    reviews: 124,
    icon: "⚡",
    color: "",
    tags: [
      "nasco",
      "small"
    ],
    badge: "sale",
    description: "NASCO 32\" LED  FLAT. Compact and efficient appliance for everyday household needs.",
    specs: {
      "Size/Capacity": "32\"",
      Model: "NAS-J32FBFL"
    }
  },
  {
    id: 301,
    name: "NASCO LED Flat (NAS-B32FBFL)",
    brand: "NASCO",
    brandId: "nasco",
    model: "NAS-B32FBFL",
    category: "small",
    image: null,
    images: ["/img/products/NASCO-32″-LED-FHD-DIGITAL-SATELLITE-NAS-B32FBFL-FRONT.jpg", "/img/products/NASCO-100-WATTS-STEAM-IRON-NAS-2203-DI-FRONT.png", "/img/products/NASCO-100LTR-CHEST-FREEZER-NAS-150FL-FRONT.jpg", "/img/products/NASCO-200-LTRS-CHEST-FREEZER-NAS-210-FRONT.jpg"],
    price: 1499,
    oldPrice: null,
    discount: 0,
    rating: 4.4,
    reviews: 67,
    icon: "⚡",
    color: "",
    tags: [
      "nasco",
      "small"
    ],
    badge: "sale",
    description: "NASCO LED  FLAT. Compact and efficient appliance for everyday household needs.",
    specs: {
      Model: "NAS-B32FBFL"
    }
  },
  {
    id: 302,
    name: "NASCO 43 '' LED Flat (NAS-B43FBFL)",
    brand: "NASCO",
    brandId: "nasco",
    model: "NAS-B43FBFL",
    category: "small",
    image: null,
    images: [],
    price: 2699,
    oldPrice: null,
    discount: 0,
    rating: 4.7,
    reviews: 67,
    icon: "⚡",
    color: "",
    tags: [
      "nasco",
      "small"
    ],
    badge: "hot",
    description: "NASCO 43 '' LED  FLAT. Compact and efficient appliance for everyday household needs.",
    specs: {
      "Size/Capacity": "43 ''",
      Model: "NAS-B43FBFL"
    }
  },
  {
    id: 303,
    name: "NASCO 43 '' LED Flat (NAS-J43FBFL)",
    brand: "NASCO",
    brandId: "nasco",
    model: "NAS-J43FBFL",
    category: "small",
    image: null,
    images: [],
    price: 2699,
    oldPrice: null,
    discount: 0,
    rating: 4.7,
    reviews: 89,
    icon: "⚡",
    color: "",
    tags: [
      "nasco",
      "small"
    ],
    badge: "hot",
    description: "NASCO 43 '' LED  FLAT. Compact and efficient appliance for everyday household needs.",
    specs: {
      "Size/Capacity": "43 ''",
      Model: "NAS-J43FBFL"
    }
  },
  {
    id: 304,
    name: "NASCO 12000 Btu/h Split AC - R410 Gas-eco",
    brand: "NASCO",
    brandId: "nasco",
    model: "NAS-J12-N1-ECO",
    category: "ac",
    image: null,
    images: [],
    price: 3499,
    oldPrice: null,
    discount: 0,
    rating: 4.4,
    reviews: 203,
    icon: "❄️",
    color: "",
    tags: [
      "nasco",
      "ac"
    ],
    badge: "hot",
    description: "NASCO 12000 Btu/h SPLIT AC - R410 GAS-ECO. Energy-efficient air conditioner with fast cooling and quiet operation.",
    specs: {
      BTU: "12000 Btu/h",
      Refrigerant: "R410",
      Model: "NAS-J12-N1-ECO"
    }
  },
  {
    id: 305,
    name: "NASCO 12000 Btu/h Split AC - R32 Gas",
    brand: "NASCO",
    brandId: "nasco",
    model: "NAS-T12V1-NI",
    category: "ac",
    image: null,
    images: [],
    price: 3499,
    oldPrice: null,
    discount: 0,
    rating: 4.8,
    reviews: 445,
    icon: "❄️",
    color: "",
    tags: [
      "nasco",
      "ac"
    ],
    badge: "hot",
    description: "NASCO 12000 Btu/h SPLIT AC - R32 GAS. Energy-efficient air conditioner with fast cooling and quiet operation.",
    specs: {
      BTU: "12000 Btu/h",
      Refrigerant: "R32",
      Model: "NAS-T12V1-NI"
    }
  },
  {
    id: 306,
    name: "NASCO 12000 Btu/h Split AC - R32 Mirror",
    brand: "NASCO",
    brandId: "nasco",
    model: "NAS-MR12N1-MIRROR",
    category: "ac",
    image: null,
    images: [],
    price: 4149,
    oldPrice: null,
    discount: 0,
    rating: 4.6,
    reviews: 267,
    icon: "❄️",
    color: "",
    tags: [
      "nasco",
      "ac"
    ],
    badge: "hot",
    description: "NASCO 12000 Btu/h SPLIT AC - R32  MIRROR. Energy-efficient air conditioner with fast cooling and quiet operation.",
    specs: {
      BTU: "12000 Btu/h",
      Refrigerant: "R32",
      Model: "NAS-MR12N1-MIRROR"
    }
  },
  {
    id: 307,
    name: "NASCO 18000 Btu/h Split AC - R32 Mirror",
    brand: "NASCO",
    brandId: "nasco",
    model: "NAS-MR18N1-MIRROR",
    category: "ac",
    image: null,
    images: [],
    price: 6749,
    oldPrice: null,
    discount: 0,
    rating: 4.3,
    reviews: 67,
    icon: "❄️",
    color: "",
    tags: [
      "nasco",
      "ac"
    ],
    badge: "hot",
    description: "NASCO 18000 Btu/h SPLIT AC - R32  MIRROR. Energy-efficient air conditioner with fast cooling and quiet operation.",
    specs: {
      BTU: "18000 Btu/h",
      Refrigerant: "R32",
      Model: "NAS-MR18N1-MIRROR"
    }
  },
  {
    id: 308,
    name: "NASCO 24000 Btu/h Split AC - R32 Mirror",
    brand: "NASCO",
    brandId: "nasco",
    model: "NAS-MR24N1-MIRROR",
    category: "ac",
    image: null,
    images: [],
    price: 8549,
    oldPrice: null,
    discount: 0,
    rating: 4.8,
    reviews: 234,
    icon: "❄️",
    color: "",
    tags: [
      "nasco",
      "ac"
    ],
    badge: "hot",
    description: "NASCO 24000 Btu/h SPLIT AC - R32  MIRROR. Energy-efficient air conditioner with fast cooling and quiet operation.",
    specs: {
      BTU: "24000 Btu/h",
      Refrigerant: "R32",
      Model: "NAS-MR24N1-MIRROR"
    }
  },
  {
    id: 309,
    name: "NASCO 12000 Btu/h Split Ac- R410 Gas White AC",
    brand: "NASCO",
    brandId: "nasco",
    model: "NAS-T12N1",
    category: "ac",
    image: "/img/products/NASCO-1.5HP-R410-SPLIT-AIR-CONDITIONER-NAS-T12N1-FRONT.jpg",
    images: ["/img/products/NASCO-1.5HP-R410-SPLIT-AIR-CONDITIONER-NAS-T12N1-FRONT.jpg"],
    price: 3949,
    oldPrice: null,
    discount: 0,
    rating: 4.8,
    reviews: 234,
    icon: "❄️",
    color: "",
    tags: [
      "nasco",
      "ac"
    ],
    badge: "hot",
    description: "NASCO 12000 Btu/h SPLIT AC- R410 GAS WHITE. Energy-efficient air conditioner with fast cooling and quiet operation.",
    specs: {
      BTU: "12000 Btu/h",
      Refrigerant: "R410",
      Model: "NAS-T12N1"
    }
  },
  {
    id: 310,
    name: "NASCO 18000 Btu/h Split Ac- R410 Gas White AC",
    brand: "NASCO",
    brandId: "nasco",
    model: "NAS-T18N1",
    category: "ac",
    image: null,
    images: [],
    price: 6549,
    oldPrice: null,
    discount: 0,
    rating: 4.5,
    reviews: 124,
    icon: "❄️",
    color: "",
    tags: [
      "nasco",
      "ac"
    ],
    badge: "hot",
    description: "NASCO 18000 Btu/h SPLIT AC- R410 GAS WHITE. Energy-efficient air conditioner with fast cooling and quiet operation.",
    specs: {
      BTU: "18000 Btu/h",
      Refrigerant: "R410",
      Model: "NAS-T18N1"
    }
  },
  {
    id: 311,
    name: "NASCO 24000 Btu/h Split Ac- R410 Gas White AC",
    brand: "NASCO",
    brandId: "nasco",
    model: "NAS-T24N1",
    category: "ac",
    image: null,
    images: [],
    price: 9599,
    oldPrice: null,
    discount: 0,
    rating: 4.3,
    reviews: 267,
    icon: "❄️",
    color: "",
    tags: [
      "nasco",
      "ac"
    ],
    badge: "hot",
    description: "NASCO 24000 Btu/h SPLIT AC- R410 GAS WHITE. Energy-efficient air conditioner with fast cooling and quiet operation.",
    specs: {
      BTU: "24000 Btu/h",
      Refrigerant: "R410",
      Model: "NAS-T24N1"
    }
  },
  {
    id: 312,
    name: "NASCO 18000 Btu/h Split Ac- R410- Black AC",
    brand: "NASCO",
    brandId: "nasco",
    model: "NAS-J18-V1B",
    category: "ac",
    image: null,
    images: [],
    price: 5999,
    oldPrice: null,
    discount: 0,
    rating: 4.4,
    reviews: 445,
    icon: "❄️",
    color: "",
    tags: [
      "nasco",
      "ac"
    ],
    badge: "hot",
    description: "NASCO 18000 Btu/h SPLIT AC- R410- BLACK. Energy-efficient air conditioner with fast cooling and quiet operation.",
    specs: {
      BTU: "18000 Btu/h",
      Refrigerant: "R410",
      Model: "NAS-J18-V1B"
    }
  },
  {
    id: 313,
    name: "NASCO 18000 Btu/h Split Ac- R410 Dual Inverter AC",
    brand: "NASCO",
    brandId: "nasco",
    model: "NAS-J18-V1",
    category: "ac",
    image: "/img/products/FRONT.jpg",
    images: ["/img/products/FRONT.jpg"],
    price: 6499,
    oldPrice: null,
    discount: 0,
    rating: 4.8,
    reviews: 145,
    icon: "❄️",
    color: "",
    tags: [
      "nasco",
      "ac",
      "inverter"
    ],
    badge: "hot",
    description: "NASCO 18000 Btu/h SPLIT AC- R410 DUAL INVERTER. Energy-efficient air conditioner with fast cooling and quiet operation.",
    specs: {
      BTU: "18000 Btu/h",
      Type: "Inverter",
      Refrigerant: "R410",
      Model: "NAS-J18-V1"
    }
  },
  {
    id: 314,
    name: "NASCO 12000 Btu/h Split Ac- R32 Inverter AC",
    brand: "NASCO",
    brandId: "nasco",
    model: "NAS-A12INV-X-R32",
    category: "ac",
    image: null,
    images: [],
    price: 4599,
    oldPrice: null,
    discount: 0,
    rating: 4.8,
    reviews: 267,
    icon: "❄️",
    color: "",
    tags: [
      "nasco",
      "ac",
      "inverter"
    ],
    badge: "hot",
    description: "NASCO 12000 Btu/h SPLIT AC- R32 INVERTER. Energy-efficient air conditioner with fast cooling and quiet operation.",
    specs: {
      BTU: "12000 Btu/h",
      Type: "Inverter",
      Refrigerant: "R32",
      Model: "NAS-A12INV-X-R32"
    }
  },
  {
    id: 315,
    name: "NASCO 18000 Btu/h Split Ac- R32 Inverter AC",
    brand: "NASCO",
    brandId: "nasco",
    model: "NAS-A18INV-X-R32",
    category: "ac",
    image: null,
    images: [],
    price: 6499,
    oldPrice: null,
    discount: 0,
    rating: 4.8,
    reviews: 67,
    icon: "❄️",
    color: "",
    tags: [
      "nasco",
      "ac",
      "inverter"
    ],
    badge: "hot",
    description: "NASCO 18000 Btu/h SPLIT AC- R32 INVERTER. Energy-efficient air conditioner with fast cooling and quiet operation.",
    specs: {
      BTU: "18000 Btu/h",
      Type: "Inverter",
      Refrigerant: "R32",
      Model: "NAS-A18INV-X-R32"
    }
  },
  {
    id: 316,
    name: "NASCO 24000 Btu/h Split Ac- R32 Inverter AC",
    brand: "NASCO",
    brandId: "nasco",
    model: "NAS-A24INV-X-R32",
    category: "ac",
    image: null,
    images: [],
    price: 9149,
    oldPrice: null,
    discount: 0,
    rating: 4.4,
    reviews: 234,
    icon: "❄️",
    color: "",
    tags: [
      "nasco",
      "ac",
      "inverter"
    ],
    badge: "hot",
    description: "NASCO 24000 Btu/h SPLIT AC- R32 INVERTER. Energy-efficient air conditioner with fast cooling and quiet operation.",
    specs: {
      BTU: "24000 Btu/h",
      Type: "Inverter",
      Refrigerant: "R32",
      Model: "NAS-A24INV-X-R32"
    }
  },
  {
    id: 317,
    name: "NASCO 18000 Btu/h Floor Standing Acs AC",
    brand: "NASCO",
    brandId: "nasco",
    model: "NAS-JFS-18N1",
    category: "ac",
    image: null,
    images: ["/img/products/NASCO-16inches-METAL-STANDING-FAN.jpg"],
    price: 9899,
    oldPrice: null,
    discount: 0,
    rating: 4.8,
    reviews: 267,
    icon: "❄️",
    color: "",
    tags: [
      "nasco",
      "ac"
    ],
    badge: "sale",
    description: "NASCO 18000 Btu/h FLOOR STANDING ACS. Energy-efficient air conditioner with fast cooling and quiet operation.",
    specs: {
      BTU: "18000 Btu/h",
      Model: "NAS-JFS-18N1"
    }
  },
  {
    id: 318,
    name: "NASCO 24000 BTU/H Floor Standing Acs AC",
    brand: "NASCO",
    brandId: "nasco",
    model: "NAS-JFS-24N1",
    category: "ac",
    image: null,
    images: ["/img/products/NASCO-16inches-METAL-STANDING-FAN.jpg"],
    price: 12449,
    oldPrice: null,
    discount: 0,
    rating: 4.2,
    reviews: 445,
    icon: "❄️",
    color: "",
    tags: [
      "nasco",
      "ac"
    ],
    badge: "hot",
    description: "NASCO 24000 BTU/H FLOOR STANDING ACS. Energy-efficient air conditioner with fast cooling and quiet operation.",
    specs: {
      BTU: "24000 BTU/H",
      Model: "NAS-JFS-24N1"
    }
  },
  {
    id: 319,
    name: "NASCO 18000 Btu/h Round Floor Standing Acs - Inverter AC",
    brand: "NASCO",
    brandId: "nasco",
    model: "NAS-TFSI-18N1",
    category: "ac",
    image: null,
    images: [],
    price: 10749,
    oldPrice: null,
    discount: 0,
    rating: 4.8,
    reviews: 124,
    icon: "❄️",
    color: "",
    tags: [
      "nasco",
      "ac",
      "inverter"
    ],
    badge: "sale",
    description: "NASCO 18000 Btu/h ROUND FLOOR STANDING ACS - INVERTER. Energy-efficient air conditioner with fast cooling and quiet operation.",
    specs: {
      BTU: "18000 Btu/h",
      Type: "Inverter",
      Model: "NAS-TFSI-18N1"
    }
  },
  {
    id: 320,
    name: "NASCO 24000 Btu/h Round Floor Standing Acs - Inverter AC",
    brand: "NASCO",
    brandId: "nasco",
    model: "NAS-TFSI-24N1",
    category: "ac",
    image: null,
    images: [],
    price: 12449,
    oldPrice: null,
    discount: 0,
    rating: 4.8,
    reviews: 56,
    icon: "❄️",
    color: "",
    tags: [
      "nasco",
      "ac",
      "inverter"
    ],
    badge: "sale",
    description: "NASCO 24000 Btu/h ROUND FLOOR STANDING ACS - INVERTER. Energy-efficient air conditioner with fast cooling and quiet operation.",
    specs: {
      BTU: "24000 Btu/h",
      Type: "Inverter",
      Model: "NAS-TFSI-24N1"
    }
  },
  {
    id: 321,
    name: "NASCO 421 L Refrigerators-french Door",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASF2-68FDR",
    category: "fridge",
    image: "/img/products/NASCO-522LTR-FRENCH-DOOR-REFRIGERATOR-NASFDR-62S-FRONT-scaled-1.jpg",
    images: ["/img/products/NASCO-522LTR-FRENCH-DOOR-REFRIGERATOR-NASFDR-62S-FRONT-scaled-1.jpg"],
    price: 10999,
    oldPrice: null,
    discount: 0,
    rating: 4.3,
    reviews: 67,
    icon: "🧊",
    color: "",
    tags: [
      "nasco",
      "fridge"
    ],
    badge: "hot",
    description: "NASCO 421 L REFRIGERATORS-FRENCH DOOR. High-capacity refrigerator with efficient cooling and spacious storage.",
    specs: {
      Capacity: "421 L",
      Type: "French Door",
      Model: "NASF2-68FDR"
    }
  },
  {
    id: 322,
    name: "NASCO 360 L Refrigerators-french Door",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASF2-400FDR",
    category: "fridge",
    image: null,
    images: [],
    price: 7999,
    oldPrice: null,
    discount: 0,
    rating: 4.8,
    reviews: 56,
    icon: "🧊",
    color: "",
    tags: [
      "nasco",
      "fridge"
    ],
    description: "NASCO 360 L REFRIGERATORS-FRENCH DOOR. High-capacity refrigerator with efficient cooling and spacious storage.",
    specs: {
      Capacity: "360 L",
      Type: "French Door",
      Model: "NASF2-400FDR"
    }
  },
  {
    id: 323,
    name: "NASCO 425 L Refrigerators-side By Side",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASF2-55SK",
    category: "fridge",
    image: "/img/products/NASF2-66.1-FRONT.png",
    images: ["/img/products/NASF2-66.1-FRONT.png"],
    price: 10799,
    oldPrice: null,
    discount: 0,
    rating: 4.4,
    reviews: 312,
    icon: "🧊",
    color: "",
    tags: [
      "nasco",
      "fridge",
      "side-by-side"
    ],
    badge: "hot",
    description: "NASCO 425 L REFRIGERATORS-SIDE BY SIDE. High-capacity refrigerator with efficient cooling and spacious storage.",
    specs: {
      Capacity: "425 L",
      Type: "Side by Side",
      Model: "NASF2-55SK"
    }
  },
  {
    id: 324,
    name: "NASCO 400 L Refrigerators-side By Side",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASF2-66.1FF",
    category: "fridge",
    image: null,
    images: ["/img/products/NASCO-400WATTS-BLENDER1.jpg", "/img/products/nasco-wine.jpg"],
    price: 9999,
    oldPrice: null,
    discount: 0,
    rating: 4.8,
    reviews: 67,
    icon: "🧊",
    color: "",
    tags: [
      "nasco",
      "fridge",
      "side-by-side"
    ],
    badge: "sale",
    description: "NASCO 400 L REFRIGERATORS-SIDE BY SIDE. High-capacity refrigerator with efficient cooling and spacious storage.",
    specs: {
      Capacity: "400 L",
      Type: "Side by Side",
      Model: "NASF2-66.1FF"
    }
  },
  {
    id: 325,
    name: "NASCO 401 L Refregerator- Top Mount - No Frost",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASF2-500WD",
    category: "fridge",
    image: "/img/products/NASCO-440-LTR-TOP-MOUNT-NO-FROST-REFRIGERATOR-NASF2-660TM-FRONT.jpg",
    images: ["/img/products/NASCO-440-LTR-TOP-MOUNT-NO-FROST-REFRIGERATOR-NASF2-660TM-FRONT.jpg"],
    price: 8999,
    oldPrice: null,
    discount: 0,
    rating: 4.3,
    reviews: 124,
    icon: "🧊",
    color: "",
    tags: [
      "nasco",
      "fridge"
    ],
    description: "NASCO 401 L REFREGERATOR- TOP MOUNT - NO FROST. High-capacity refrigerator with efficient cooling and spacious storage.",
    specs: {
      Capacity: "401 L",
      Type: "Top Freezer",
      Model: "NASF2-500WD"
    }
  },
  {
    id: 326,
    name: "NASCO 320 L Refregerator- Top Mount",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASF2-45",
    category: "fridge",
    image: "/img/products/NASCO-200LTR-TOP-MOUNT-REFRIGERATOR.jpg",
    images: ["/img/products/NASCO-200LTR-TOP-MOUNT-REFRIGERATOR.jpg"],
    price: 6599,
    oldPrice: null,
    discount: 0,
    rating: 4.7,
    reviews: 67,
    icon: "🧊",
    color: "",
    tags: [
      "nasco",
      "fridge"
    ],
    badge: "sale",
    description: "NASCO 320 L REFREGERATOR- TOP MOUNT. High-capacity refrigerator with efficient cooling and spacious storage.",
    specs: {
      Capacity: "320 L",
      Type: "Top Freezer",
      Model: "NASF2-45"
    }
  },
  {
    id: 327,
    name: "NASCO 280 L Refregerator- Top Mount",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASF2-320FLD",
    category: "fridge",
    image: null,
    images: [],
    price: 4999,
    oldPrice: null,
    discount: 0,
    rating: 4.5,
    reviews: 178,
    icon: "🧊",
    color: "",
    tags: [
      "nasco",
      "fridge"
    ],
    badge: "hot",
    description: "NASCO 280 L REFREGERATOR- TOP MOUNT. High-capacity refrigerator with efficient cooling and spacious storage.",
    specs: {
      Capacity: "280 L",
      Type: "Top Freezer",
      Model: "NASF2-320FLD"
    }
  },
  {
    id: 328,
    name: "NASCO 210 L Refregerator- Top Mount",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASF2-250FLD",
    category: "fridge",
    image: null,
    images: [],
    price: 4599,
    oldPrice: null,
    discount: 0,
    rating: 4.4,
    reviews: 89,
    icon: "🧊",
    color: "",
    tags: [
      "nasco",
      "fridge"
    ],
    badge: "hot",
    description: "NASCO 210 L REFREGERATOR- TOP MOUNT. High-capacity refrigerator with efficient cooling and spacious storage.",
    specs: {
      Capacity: "210 L",
      Type: "Top Freezer",
      Model: "NASF2-250FLD"
    }
  },
  {
    id: 329,
    name: "NASCO 207 L Refregerator- Top Mount",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASF2-30",
    category: "fridge",
    image: null,
    images: [],
    price: 3699,
    oldPrice: null,
    discount: 0,
    rating: 4.8,
    reviews: 312,
    icon: "🧊",
    color: "",
    tags: [
      "nasco",
      "fridge"
    ],
    description: "NASCO 207 L REFREGERATOR- TOP MOUNT. High-capacity refrigerator with efficient cooling and spacious storage.",
    specs: {
      Capacity: "207 L",
      Type: "Top Freezer",
      Model: "NASF2-30"
    }
  },
  {
    id: 330,
    name: "NASCO 166 L Refregerator- Top Mount (DF2-22)",
    brand: "NASCO",
    brandId: "nasco",
    model: "DF2-22",
    category: "fridge",
    image: null,
    images: [],
    price: 4349,
    oldPrice: null,
    discount: 0,
    rating: 4.4,
    reviews: 145,
    icon: "🧊",
    color: "",
    tags: [
      "nasco",
      "fridge"
    ],
    badge: "sale",
    description: "NASCO 166 L REFREGERATOR- TOP MOUNT. High-capacity refrigerator with efficient cooling and spacious storage.",
    specs: {
      Capacity: "166 L",
      Type: "Top Freezer",
      Model: "DF2-22"
    }
  },
  {
    id: 331,
    name: "NASCO 166 L Refregerator- Top Mount (NASF2-24)",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASF2-24",
    category: "fridge",
    image: null,
    images: ["/img/products/NASCO-NASF2-250FLD-FRONT-VIEW.jpg"],
    price: 2999,
    oldPrice: null,
    discount: 0,
    rating: 4.6,
    reviews: 445,
    icon: "🧊",
    color: "",
    tags: [
      "nasco",
      "fridge"
    ],
    badge: "hot",
    description: "NASCO 166 L REFREGERATOR- TOP MOUNT. High-capacity refrigerator with efficient cooling and spacious storage.",
    specs: {
      Capacity: "166 L",
      Type: "Top Freezer",
      Model: "NASF2-24"
    }
  },
  {
    id: 332,
    name: "NASCO 118 L Refregerator- Top Mount",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASF2-15S",
    category: "fridge",
    image: null,
    images: ["/img/products/NASCO-118LTRS-TOP-FREEZER-NASF2-15S-FRONT.jpg"],
    price: 2899,
    oldPrice: null,
    discount: 0,
    rating: 4.7,
    reviews: 203,
    icon: "🧊",
    color: "",
    tags: [
      "nasco",
      "fridge"
    ],
    badge: "sale",
    description: "NASCO 118 L REFREGERATOR- TOP MOUNT. High-capacity refrigerator with efficient cooling and spacious storage.",
    specs: {
      Capacity: "118 L",
      Type: "Top Freezer",
      Model: "NASF2-15S"
    }
  },
  {
    id: 333,
    name: "NASCO 95 L Refregerator- Top Mount",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASF2-12S",
    category: "fridge",
    image: "/img/products/NASF2-600WD-FRONT.png",
    images: ["/img/products/NASF2-600WD-FRONT.png"],
    price: 2349,
    oldPrice: null,
    discount: 0,
    rating: 4.4,
    reviews: 124,
    icon: "🧊",
    color: "",
    tags: [
      "nasco",
      "fridge"
    ],
    badge: "hot",
    description: "NASCO 95 L REFREGERATOR- TOP MOUNT. High-capacity refrigerator with efficient cooling and spacious storage.",
    specs: {
      Capacity: "95 L",
      Type: "Top Freezer",
      Model: "NASF2-12S"
    }
  },
  {
    id: 334,
    name: "NASCO 147 L Refrigerators-bottom Freezer",
    brand: "NASCO",
    brandId: "nasco",
    model: "DD2-20",
    category: "fridge",
    image: "/img/products/GCHK.jpg",
    images: ["/img/products/GCHK.jpg"],
    price: 3799,
    oldPrice: null,
    discount: 0,
    rating: 4.2,
    reviews: 312,
    icon: "🧊",
    color: "",
    tags: [
      "nasco",
      "fridge"
    ],
    badge: "hot",
    description: "NASCO 147 L REFRIGERATORS-BOTTOM FREEZER. High-capacity refrigerator with efficient cooling and spacious storage.",
    specs: {
      Capacity: "147 L",
      Type: "Bottom Freezer",
      Model: "DD2-20"
    }
  },
  {
    id: 335,
    name: "NASCO 268 L Refrigerators-bottom Freezer",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASD2-36",
    category: "fridge",
    image: null,
    images: [],
    price: 6699,
    oldPrice: null,
    discount: 0,
    rating: 4.3,
    reviews: 389,
    icon: "🧊",
    color: "",
    tags: [
      "nasco",
      "fridge"
    ],
    description: "NASCO 268 L REFRIGERATORS-BOTTOM FREEZER. High-capacity refrigerator with efficient cooling and spacious storage.",
    specs: {
      Capacity: "268 L",
      Type: "Bottom Freezer",
      Model: "NASD2-36"
    }
  },
  {
    id: 336,
    name: "NASCO 287 L Refrigerators-bottom Freezer",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASD2-44",
    category: "fridge",
    image: null,
    images: [],
    price: 7149,
    oldPrice: null,
    discount: 0,
    rating: 4.4,
    reviews: 124,
    icon: "🧊",
    color: "",
    tags: [
      "nasco",
      "fridge"
    ],
    badge: "hot",
    description: "NASCO 287 L REFRIGERATORS-BOTTOM FREEZER. High-capacity refrigerator with efficient cooling and spacious storage.",
    specs: {
      Capacity: "287 L",
      Type: "Bottom Freezer",
      Model: "NASD2-44"
    }
  },
  {
    id: 337,
    name: "NASCO 307 L Refrigerators-bottom Freezer",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASD2-40WD",
    category: "fridge",
    image: null,
    images: [],
    price: 8299,
    oldPrice: null,
    discount: 0,
    rating: 4.2,
    reviews: 389,
    icon: "🧊",
    color: "",
    tags: [
      "nasco",
      "fridge"
    ],
    badge: "sale",
    description: "NASCO 307 L REFRIGERATORS-BOTTOM FREEZER. High-capacity refrigerator with efficient cooling and spacious storage.",
    specs: {
      Capacity: "307 L",
      Type: "Bottom Freezer",
      Model: "NASD2-40WD"
    }
  },
  {
    id: 338,
    name: "NASCO 41 L Bed Side Fridge",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASF1-06",
    category: "fridge",
    image: "/img/products/NASF1-06-FRONT.png",
    images: ["/img/products/NASF1-06-FRONT.png"],
    price: 1299,
    oldPrice: null,
    discount: 0,
    rating: 4.5,
    reviews: 178,
    icon: "🧊",
    color: "",
    tags: [
      "nasco",
      "fridge"
    ],
    badge: "hot",
    description: "NASCO 41 L BED SIDE FRIDGE. High-capacity refrigerator with efficient cooling and spacious storage.",
    specs: {
      Capacity: "41 L",
      Model: "NASF1-06"
    }
  },
  {
    id: 339,
    name: "NASCO 70 L Refrigerator-table Top",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASF1-09S",
    category: "fridge",
    image: "/img/products/NASF1-10S-FRONT.jpg",
    images: ["/img/products/NASF1-10S-FRONT.jpg"],
    price: 1749,
    oldPrice: null,
    discount: 0,
    rating: 4.7,
    reviews: 178,
    icon: "🧊",
    color: "",
    tags: [
      "nasco",
      "fridge"
    ],
    badge: "sale",
    description: "NASCO 70 L REFRIGERATOR-TABLE TOP. High-capacity refrigerator with efficient cooling and spacious storage.",
    specs: {
      Capacity: "70 L",
      Type: "Top Freezer",
      Model: "NASF1-09S"
    }
  },
  {
    id: 340,
    name: "NASCO 76 L Refrigerator-table Top",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASF1-95FL",
    category: "fridge",
    image: null,
    images: [],
    price: 1799,
    oldPrice: null,
    discount: 0,
    rating: 4.5,
    reviews: 389,
    icon: "🧊",
    color: "",
    tags: [
      "nasco",
      "fridge"
    ],
    badge: "sale",
    description: "NASCO 76 L REFRIGERATOR-TABLE TOP. High-capacity refrigerator with efficient cooling and spacious storage.",
    specs: {
      Capacity: "76 L",
      Type: "Top Freezer",
      Model: "NASF1-95FL"
    }
  },
  {
    id: 341,
    name: "NASCO 92 L Refrigerator-table Top",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASF1-110FL-B",
    category: "fridge",
    image: null,
    images: [],
    price: 1899,
    oldPrice: null,
    discount: 0,
    rating: 4.6,
    reviews: 89,
    icon: "🧊",
    color: "",
    tags: [
      "nasco",
      "fridge"
    ],
    badge: "sale",
    description: "NASCO 92 L REFRIGERATOR-TABLE TOP. High-capacity refrigerator with efficient cooling and spacious storage.",
    specs: {
      Capacity: "92 L",
      Type: "Top Freezer",
      Model: "NASF1-110FL-B"
    }
  },
  {
    id: 342,
    name: "NASCO 91 L Refrigerator-table Top",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASF1-11S",
    category: "fridge",
    image: null,
    images: [],
    price: 1899,
    oldPrice: null,
    discount: 0,
    rating: 4.5,
    reviews: 389,
    icon: "🧊",
    color: "",
    tags: [
      "nasco",
      "fridge"
    ],
    badge: "hot",
    description: "NASCO 91 L REFRIGERATOR-TABLE TOP. High-capacity refrigerator with efficient cooling and spacious storage.",
    specs: {
      Capacity: "91 L",
      Type: "Top Freezer",
      Model: "NASF1-11S"
    }
  },
  {
    id: 343,
    name: "NASCO 86 L Refrigerator New Models - Top Freezer",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASF2-11FL-B-MIRROR",
    category: "fridge",
    image: "/img/products/2-1-2.jpg",
    images: ["/img/products/2-1-2.jpg"],
    price: 2199,
    oldPrice: null,
    discount: 0,
    rating: 4.3,
    reviews: 312,
    icon: "🧊",
    color: "",
    tags: [
      "nasco",
      "fridge"
    ],
    badge: "new",
    description: "NASCO 86 L REFRIGERATOR NEW MODELS - TOP FREEZER. High-capacity refrigerator with efficient cooling and spacious storage.",
    specs: {
      Capacity: "86 L",
      Type: "Top Freezer",
      Model: "NASF2-11FL-B-MIRROR"
    }
  },
  {
    id: 344,
    name: "NASCO 102 L Refrigerator New Models - Top Freezer",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASF2-12FL-B",
    category: "fridge",
    image: null,
    images: [],
    price: 2399,
    oldPrice: null,
    discount: 0,
    rating: 4.2,
    reviews: 267,
    icon: "🧊",
    color: "",
    tags: [
      "nasco",
      "fridge"
    ],
    badge: "new",
    description: "NASCO 102 L REFRIGERATOR NEW MODELS - TOP FREEZER. High-capacity refrigerator with efficient cooling and spacious storage.",
    specs: {
      Capacity: "102 L",
      Type: "Top Freezer",
      Model: "NASF2-12FL-B"
    }
  },
  {
    id: 345,
    name: "NASCO 86 L Retro New Models - Table Top",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASF2-110RT",
    category: "fridge",
    image: "/img/products/110RT-jpg.webp",
    images: ["/img/products/110RT-jpg.webp"],
    price: 2349,
    oldPrice: null,
    discount: 0,
    rating: 4.5,
    reviews: 124,
    icon: "🧊",
    color: "",
    tags: [
      "nasco",
      "fridge"
    ],
    badge: "new",
    description: "NASCO 86 L RETRO NEW MODELS - TABLE TOP. High-capacity refrigerator with efficient cooling and spacious storage.",
    specs: {
      Capacity: "86 L",
      Type: "Top Freezer",
      Model: "NASF2-110RT"
    }
  },
  {
    id: 346,
    name: "NASCO 112 L Refrigerator New Models - Top Freezer",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASF2-13FL",
    category: "fridge",
    image: null,
    images: [],
    price: 2649,
    oldPrice: null,
    discount: 0,
    rating: 4.6,
    reviews: 203,
    icon: "🧊",
    color: "",
    tags: [
      "nasco",
      "fridge"
    ],
    badge: "sale",
    description: "NASCO 112 L REFRIGERATOR NEW MODELS - TOP FREEZER. High-capacity refrigerator with efficient cooling and spacious storage.",
    specs: {
      Capacity: "112 L",
      Type: "Top Freezer",
      Model: "NASF2-13FL"
    }
  },
  {
    id: 347,
    name: "NASCO 138 L Refrigerator New Models - Top Freezer",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASF2-16FL",
    category: "fridge",
    image: null,
    images: [],
    price: 2999,
    oldPrice: null,
    discount: 0,
    rating: 4.7,
    reviews: 267,
    icon: "🧊",
    color: "",
    tags: [
      "nasco",
      "fridge"
    ],
    badge: "sale",
    description: "NASCO 138 L REFRIGERATOR NEW MODELS - TOP FREEZER. High-capacity refrigerator with efficient cooling and spacious storage.",
    specs: {
      Capacity: "138 L",
      Type: "Top Freezer",
      Model: "NASF2-16FL"
    }
  },
  {
    id: 348,
    name: "NASCO 158 L Refrigerator New Models - Top Freezer",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASF2-18FL",
    category: "fridge",
    image: null,
    images: [],
    price: 3249,
    oldPrice: null,
    discount: 0,
    rating: 4.7,
    reviews: 267,
    icon: "🧊",
    color: "",
    tags: [
      "nasco",
      "fridge"
    ],
    badge: "sale",
    description: "NASCO 158 L REFRIGERATOR NEW MODELS - TOP FREEZER. High-capacity refrigerator with efficient cooling and spacious storage.",
    specs: {
      Capacity: "158 L",
      Type: "Top Freezer",
      Model: "NASF2-18FL"
    }
  },
  {
    id: 349,
    name: "NASCO 106 L Refrigerator New Models - Bottom Freezer (NASD2-10FL)",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASD2-10FL",
    category: "fridge",
    image: null,
    images: [],
    price: 2649,
    oldPrice: null,
    discount: 0,
    rating: 4.7,
    reviews: 67,
    icon: "🧊",
    color: "",
    tags: [
      "nasco",
      "fridge"
    ],
    badge: "sale",
    description: "NASCO 106 L REFRIGERATOR NEW MODELS - BOTTOM FREEZER. High-capacity refrigerator with efficient cooling and spacious storage.",
    specs: {
      Capacity: "106 L",
      Type: "Bottom Freezer",
      Model: "NASD2-10FL"
    }
  },
  {
    id: 350,
    name: "NASCO 106 L Refrigerator New Models - Bottom Freezer (NASD2-10FL-B)",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASD2-10FL-B",
    category: "fridge",
    image: null,
    images: [],
    price: 2649,
    oldPrice: null,
    discount: 0,
    rating: 4.4,
    reviews: 445,
    icon: "🧊",
    color: "",
    tags: [
      "nasco",
      "fridge"
    ],
    badge: "sale",
    description: "NASCO 106 L REFRIGERATOR NEW MODELS - BOTTOM FREEZER. High-capacity refrigerator with efficient cooling and spacious storage.",
    specs: {
      Capacity: "106 L",
      Type: "Bottom Freezer",
      Model: "NASD2-10FL-B"
    }
  },
  {
    id: 351,
    name: "NASCO 116 L Refrigerator New Models - Bottom Freezer",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASD2-14FL",
    category: "fridge",
    image: null,
    images: ["/img/products/NASCO-116LTR-BOTTOM-FREEZER-REFRIGERATOR-NASD2-14FL-FRONT.jpg"],
    price: 2799,
    oldPrice: null,
    discount: 0,
    rating: 4.2,
    reviews: 145,
    icon: "🧊",
    color: "",
    tags: [
      "nasco",
      "fridge"
    ],
    badge: "new",
    description: "NASCO 116 L REFRIGERATOR NEW MODELS - BOTTOM FREEZER. High-capacity refrigerator with efficient cooling and spacious storage.",
    specs: {
      Capacity: "116 L",
      Type: "Bottom Freezer",
      Model: "NASD2-14FL"
    }
  },
  {
    id: 352,
    name: "NASCO 136 L Refrigerator New Models - Bottom Freezer (NASD2-18FL-B)",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASD2-18FL-B",
    category: "fridge",
    image: null,
    images: [],
    price: 3249,
    oldPrice: null,
    discount: 0,
    rating: 4.4,
    reviews: 389,
    icon: "🧊",
    color: "",
    tags: [
      "nasco",
      "fridge"
    ],
    badge: "new",
    description: "NASCO 136 L REFRIGERATOR NEW MODELS - BOTTOM FREEZER. High-capacity refrigerator with efficient cooling and spacious storage.",
    specs: {
      Capacity: "136 L",
      Type: "Bottom Freezer",
      Model: "NASD2-18FL-B"
    }
  },
  {
    id: 353,
    name: "NASCO 136 L Refrigerator New Models - Bottom Freezer (NASD2-18Fl-G)",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASD2-18Fl-G",
    category: "fridge",
    image: null,
    images: [],
    price: 3249,
    oldPrice: null,
    discount: 0,
    rating: 4.4,
    reviews: 145,
    icon: "🧊",
    color: "",
    tags: [
      "nasco",
      "fridge"
    ],
    badge: "new",
    description: "NASCO 136 L REFRIGERATOR NEW MODELS - BOTTOM FREEZER. High-capacity refrigerator with efficient cooling and spacious storage.",
    specs: {
      Capacity: "136 L",
      Type: "Bottom Freezer",
      Model: "NASD2-18Fl-G"
    }
  },
  {
    id: 354,
    name: "NASCO 158 L Refrigerator New Models - Bottom Freezer",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASD2-20FL",
    category: "fridge",
    image: null,
    images: [],
    price: 3449,
    oldPrice: null,
    discount: 0,
    rating: 4.8,
    reviews: 89,
    icon: "🧊",
    color: "",
    tags: [
      "nasco",
      "fridge"
    ],
    badge: "new",
    description: "NASCO 158 L REFRIGERATOR NEW MODELS - BOTTOM FREEZER. High-capacity refrigerator with efficient cooling and spacious storage.",
    specs: {
      Capacity: "158 L",
      Type: "Bottom Freezer",
      Model: "NASD2-20FL"
    }
  },
  {
    id: 355,
    name: "NASCO 196 L Refrigerator New Models - Bottom Freezer",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASD2-24FL",
    category: "fridge",
    image: null,
    images: [],
    price: 4049,
    oldPrice: null,
    discount: 0,
    rating: 4.7,
    reviews: 312,
    icon: "🧊",
    color: "",
    tags: [
      "nasco",
      "fridge"
    ],
    badge: "new",
    description: "NASCO 196 L REFRIGERATOR NEW MODELS - BOTTOM FREEZER. High-capacity refrigerator with efficient cooling and spacious storage.",
    specs: {
      Capacity: "196 L",
      Type: "Bottom Freezer",
      Model: "NASD2-24FL"
    }
  },
  {
    id: 356,
    name: "NASCO 150 L Standing Freezer",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASD1-225FL",
    category: "fridge",
    image: "/img/products/NASCO-260LTR-STANDING-FREEZER1.jpg",
    images: ["/img/products/NASCO-260LTR-STANDING-FREEZER1.jpg"],
    price: 3599,
    oldPrice: null,
    discount: 0,
    rating: 4.6,
    reviews: 312,
    icon: "🧊",
    color: "",
    tags: [
      "nasco",
      "fridge"
    ],
    badge: "hot",
    description: "NASCO 150 L STANDING FREEZER. High-capacity refrigerator with efficient cooling and spacious storage.",
    specs: {
      Capacity: "150 L",
      Model: "NASD1-225FL"
    }
  },
  {
    id: 357,
    name: "NASCO 166 L Standing Freezer",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASD1-200SK",
    category: "fridge",
    image: null,
    images: ["/img/products/NASCO-16inches-METAL-STANDING-FAN.jpg"],
    price: 3599,
    oldPrice: null,
    discount: 0,
    rating: 4.7,
    reviews: 445,
    icon: "🧊",
    color: "",
    tags: [
      "nasco",
      "fridge"
    ],
    description: "NASCO 166 L STANDING FREEZER. High-capacity refrigerator with efficient cooling and spacious storage.",
    specs: {
      Capacity: "166 L",
      Model: "NASD1-200SK"
    }
  },
  {
    id: 358,
    name: "NASCO 225 L Standing Freezer",
    brand: "NASCO",
    brandId: "nasco",
    model: "DD1-33",
    category: "fridge",
    image: null,
    images: ["/img/products/NASCO-16inches-METAL-STANDING-FAN.jpg"],
    price: 6849,
    oldPrice: null,
    discount: 0,
    rating: 4.4,
    reviews: 445,
    icon: "🧊",
    color: "",
    tags: [
      "nasco",
      "fridge"
    ],
    badge: "hot",
    description: "NASCO 225 L STANDING FREEZER. High-capacity refrigerator with efficient cooling and spacious storage.",
    specs: {
      Capacity: "225 L",
      Model: "DD1-33"
    }
  },
  {
    id: 359,
    name: "NASCO 110 L Display Fridges",
    brand: "NASCO",
    brandId: "nasco",
    model: "NAS-FL110SC",
    category: "fridge",
    image: null,
    images: [],
    price: 2999,
    oldPrice: null,
    discount: 0,
    rating: 4.7,
    reviews: 312,
    icon: "🧊",
    color: "",
    tags: [
      "nasco",
      "fridge"
    ],
    badge: "hot",
    description: "NASCO 110 L DISPLAY FRIDGES. High-capacity refrigerator with efficient cooling and spacious storage.",
    specs: {
      Capacity: "110 L",
      Model: "NAS-FL110SC"
    }
  },
  {
    id: 360,
    name: "NASCO 200 L Display Fridges",
    brand: "NASCO",
    brandId: "nasco",
    model: "NAS-FL200SC",
    category: "fridge",
    image: null,
    images: [],
    price: 3999,
    oldPrice: null,
    discount: 0,
    rating: 4.6,
    reviews: 234,
    icon: "🧊",
    color: "",
    tags: [
      "nasco",
      "fridge"
    ],
    description: "NASCO 200 L DISPLAY FRIDGES. High-capacity refrigerator with efficient cooling and spacious storage.",
    specs: {
      Capacity: "200 L",
      Model: "NAS-FL200SC"
    }
  },
  {
    id: 361,
    name: "NASCO 288L Display Fridges",
    brand: "NASCO",
    brandId: "nasco",
    model: "NAS-FL350-1DR",
    category: "fridge",
    image: null,
    images: ["/img/products/NASCO-288-LTRS-DISPLAY-FRIDGE-NAS-FL350-1DR-FRONT-OPEN.jpg"],
    price: 6149,
    oldPrice: null,
    discount: 0,
    rating: 4.3,
    reviews: 445,
    icon: "🧊",
    color: "",
    tags: [
      "nasco",
      "fridge"
    ],
    badge: "hot",
    description: "NASCO 288L DISPLAY FRIDGES. High-capacity refrigerator with efficient cooling and spacious storage.",
    specs: {
      Capacity: "288L",
      Model: "NAS-FL350-1DR"
    }
  },
  {
    id: 362,
    name: "NASCO 298L Display Fridges",
    brand: "NASCO",
    brandId: "nasco",
    model: "NAS-FL360-1DR",
    category: "fridge",
    image: null,
    images: [],
    price: 6699,
    oldPrice: null,
    discount: 0,
    rating: 4.7,
    reviews: 445,
    icon: "🧊",
    color: "",
    tags: [
      "nasco",
      "fridge"
    ],
    badge: "hot",
    description: "NASCO 298L DISPLAY FRIDGES. High-capacity refrigerator with efficient cooling and spacious storage.",
    specs: {
      Capacity: "298L",
      Model: "NAS-FL360-1DR"
    }
  },
  {
    id: 363,
    name: "NASCO 358L Display Fridges",
    brand: "NASCO",
    brandId: "nasco",
    model: "NAS-FL400-1DR",
    category: "fridge",
    image: null,
    images: [],
    price: 7149,
    oldPrice: null,
    discount: 0,
    rating: 4.7,
    reviews: 267,
    icon: "🧊",
    color: "",
    tags: [
      "nasco",
      "fridge"
    ],
    badge: "hot",
    description: "NASCO 358L DISPLAY FRIDGES. High-capacity refrigerator with efficient cooling and spacious storage.",
    specs: {
      Capacity: "358L",
      Model: "NAS-FL400-1DR"
    }
  },
  {
    id: 364,
    name: "NASCO 350 L Display Fridges",
    brand: "NASCO",
    brandId: "nasco",
    model: "NAS-375DFG",
    category: "fridge",
    image: null,
    images: [],
    price: 7499,
    oldPrice: null,
    discount: 0,
    rating: 4.3,
    reviews: 389,
    icon: "🧊",
    color: "",
    tags: [
      "nasco",
      "fridge"
    ],
    badge: "hot",
    description: "NASCO 350 L DISPLAY FRIDGES. High-capacity refrigerator with efficient cooling and spacious storage.",
    specs: {
      Capacity: "350 L",
      Model: "NAS-375DFG"
    }
  },
  {
    id: 365,
    name: "NASCO 728 L Display Fridges",
    brand: "NASCO",
    brandId: "nasco",
    model: "NAS-FL850-2DR",
    category: "fridge",
    image: null,
    images: ["/img/products/NASCO-728LTR-DISPLAY-FRIDGE-NAS-850-2DR-FRONT.png"],
    price: 14999,
    oldPrice: null,
    discount: 0,
    rating: 4.6,
    reviews: 312,
    icon: "🧊",
    color: "",
    tags: [
      "nasco",
      "fridge"
    ],
    badge: "hot",
    description: "NASCO 728 L DISPLAY FRIDGES. High-capacity refrigerator with efficient cooling and spacious storage.",
    specs: {
      Capacity: "728 L",
      Model: "NAS-FL850-2DR"
    }
  },
  {
    id: 366,
    name: "NASCO 1080 L Display Fridges",
    brand: "NASCO",
    brandId: "nasco",
    model: "NAS-FL1300-2DR",
    category: "fridge",
    image: null,
    images: [],
    price: 16999,
    oldPrice: null,
    discount: 0,
    rating: 4.5,
    reviews: 203,
    icon: "🧊",
    color: "",
    tags: [
      "nasco",
      "fridge"
    ],
    description: "NASCO 1080 L DISPLAY FRIDGES. High-capacity refrigerator with efficient cooling and spacious storage.",
    specs: {
      Capacity: "1080 L",
      Model: "NAS-FL1300-2DR"
    }
  },
  {
    id: 367,
    name: "NASCO 1200 L Display Fridges",
    brand: "NASCO",
    brandId: "nasco",
    model: "NAS-FL1400-3DR",
    category: "fridge",
    image: null,
    images: [],
    price: 18999,
    oldPrice: null,
    discount: 0,
    rating: 4.8,
    reviews: 124,
    icon: "🧊",
    color: "",
    tags: [
      "nasco",
      "fridge"
    ],
    description: "NASCO 1200 L DISPLAY FRIDGES. High-capacity refrigerator with efficient cooling and spacious storage.",
    specs: {
      Capacity: "1200 L",
      Model: "NAS-FL1400-3DR"
    }
  },
  {
    id: 368,
    name: "NASCO 150L Chest Freezers",
    brand: "NASCO",
    brandId: "nasco",
    model: "NAS-200FL-G",
    category: "fridge",
    image: null,
    images: ["/img/products/NASCO-150LTR-CHEST-FREEZER1.jpg"],
    price: 3149,
    oldPrice: null,
    discount: 0,
    rating: 4.4,
    reviews: 312,
    icon: "🧊",
    color: "",
    tags: [
      "nasco",
      "fridge"
    ],
    badge: "sale",
    description: "NASCO 150L CHEST FREEZERS. High-capacity refrigerator with efficient cooling and spacious storage.",
    specs: {
      Capacity: "150L",
      Type: "Chest Freezer",
      Model: "NAS-200FL-G"
    }
  },
  {
    id: 369,
    name: "NASCO 145 L Chest Freezers",
    brand: "NASCO",
    brandId: "nasco",
    model: "NAS-160",
    category: "fridge",
    image: null,
    images: [],
    price: 3099,
    oldPrice: null,
    discount: 0,
    rating: 4.3,
    reviews: 445,
    icon: "🧊",
    color: "",
    tags: [
      "nasco",
      "fridge"
    ],
    badge: "sale",
    description: "NASCO 145 L CHEST FREEZERS. High-capacity refrigerator with efficient cooling and spacious storage.",
    specs: {
      Capacity: "145 L",
      Type: "Chest Freezer",
      Model: "NAS-160"
    }
  },
  {
    id: 370,
    name: "NASCO 200 L Chest Freezers (NAS-210)",
    brand: "NASCO",
    brandId: "nasco",
    model: "NAS-210",
    category: "fridge",
    image: null,
    images: ["/img/products/NASCO-200-LTRS-CHEST-FREEZER-NAS-210-FRONT.jpg"],
    price: 3899,
    oldPrice: null,
    discount: 0,
    rating: 4.8,
    reviews: 389,
    icon: "🧊",
    color: "",
    tags: [
      "nasco",
      "fridge"
    ],
    badge: "hot",
    description: "NASCO 200 L CHEST FREEZERS. High-capacity refrigerator with efficient cooling and spacious storage.",
    specs: {
      Capacity: "200 L",
      Type: "Chest Freezer",
      Model: "NAS-210"
    }
  },
  {
    id: 371,
    name: "NASCO 200 L Chest Freezers (NAS-250FL)",
    brand: "NASCO",
    brandId: "nasco",
    model: "NAS-250FL",
    category: "fridge",
    image: null,
    images: ["/img/products/NASCO-200-LTRS-CHEST-FREEZER-NAS-210-FRONT.jpg"],
    price: 3549,
    oldPrice: null,
    discount: 0,
    rating: 4.6,
    reviews: 145,
    icon: "🧊",
    color: "",
    tags: [
      "nasco",
      "fridge"
    ],
    badge: "hot",
    description: "NASCO 200 L CHEST FREEZERS. High-capacity refrigerator with efficient cooling and spacious storage.",
    specs: {
      Capacity: "200 L",
      Type: "Chest Freezer",
      Model: "NAS-250FL"
    }
  },
  {
    id: 372,
    name: "NASCO 250 L Chest Freezers",
    brand: "NASCO",
    brandId: "nasco",
    model: "NAS-350FL",
    category: "fridge",
    image: null,
    images: [],
    price: 4599,
    oldPrice: null,
    discount: 0,
    rating: 4.4,
    reviews: 56,
    icon: "🧊",
    color: "",
    tags: [
      "nasco",
      "fridge"
    ],
    badge: "sale",
    description: "NASCO 250 L CHEST FREEZERS. High-capacity refrigerator with efficient cooling and spacious storage.",
    specs: {
      Capacity: "250 L",
      Type: "Chest Freezer",
      Model: "NAS-350FL"
    }
  },
  {
    id: 373,
    name: "NASCO 251 L Chest Freezers",
    brand: "NASCO",
    brandId: "nasco",
    model: "NAS-300",
    category: "fridge",
    image: null,
    images: ["/img/products/NASCO-251-LTRS-CHEST-FREEZER-NAS-300-FRONT.jpg", "/img/products/NASCO-251LTRS-BOTTOM-FREEZER-NASD2-29SK-FRONT.jpg"],
    price: 4799,
    oldPrice: null,
    discount: 0,
    rating: 4.5,
    reviews: 56,
    icon: "🧊",
    color: "",
    tags: [
      "nasco",
      "fridge"
    ],
    badge: "sale",
    description: "NASCO 251 L CHEST FREEZERS. High-capacity refrigerator with efficient cooling and spacious storage.",
    specs: {
      Capacity: "251 L",
      Type: "Chest Freezer",
      Model: "NAS-300"
    }
  },
  {
    id: 374,
    name: "NASCO 288L Chest Freezers",
    brand: "NASCO",
    brandId: "nasco",
    model: "NAS-400FL-G",
    category: "fridge",
    image: null,
    images: [],
    price: 5099,
    oldPrice: null,
    discount: 0,
    rating: 4.7,
    reviews: 67,
    icon: "🧊",
    color: "",
    tags: [
      "nasco",
      "fridge"
    ],
    badge: "hot",
    description: "NASCO 288L CHEST FREEZERS. High-capacity refrigerator with efficient cooling and spacious storage.",
    specs: {
      Capacity: "288L",
      Type: "Chest Freezer",
      Model: "NAS-400FL-G"
    }
  },
  {
    id: 375,
    name: "NASCO 290 L Chest Freezers",
    brand: "NASCO",
    brandId: "nasco",
    model: "NAS-360",
    category: "fridge",
    image: null,
    images: [],
    price: 5399,
    oldPrice: null,
    discount: 0,
    rating: 4.6,
    reviews: 56,
    icon: "🧊",
    color: "",
    tags: [
      "nasco",
      "fridge"
    ],
    badge: "hot",
    description: "NASCO 290 L CHEST FREEZERS. High-capacity refrigerator with efficient cooling and spacious storage.",
    specs: {
      Capacity: "290 L",
      Type: "Chest Freezer",
      Model: "NAS-360"
    }
  },
  {
    id: 376,
    name: "NASCO 318 L Chest Freezers",
    brand: "NASCO",
    brandId: "nasco",
    model: "NAS-425FL-G",
    category: "fridge",
    image: null,
    images: ["/img/products/NASCO-318LTR-CHEST-FREEZER-NAS-425FL-G-FRONT.jpg", "/img/products/NASCO-318-LTRS-CHEST-FREEZER-NAS-425FL-FRONT.jpg"],
    price: 5399,
    oldPrice: null,
    discount: 0,
    rating: 4.8,
    reviews: 267,
    icon: "🧊",
    color: "",
    tags: [
      "nasco",
      "fridge"
    ],
    badge: "hot",
    description: "NASCO 318 L CHEST FREEZERS. High-capacity refrigerator with efficient cooling and spacious storage.",
    specs: {
      Capacity: "318 L",
      Type: "Chest Freezer",
      Model: "NAS-425FL-G"
    }
  },
  {
    id: 377,
    name: "NASCO 380 L Chest Freezers",
    brand: "NASCO",
    brandId: "nasco",
    model: "NAS-420",
    category: "fridge",
    image: null,
    images: ["/img/products/NASCO-380LTRS-CHEST-FREEZER1.jpg"],
    price: 6249,
    oldPrice: null,
    discount: 0,
    rating: 4.3,
    reviews: 145,
    icon: "🧊",
    color: "",
    tags: [
      "nasco",
      "fridge"
    ],
    badge: "hot",
    description: "NASCO 380 L CHEST FREEZERS. High-capacity refrigerator with efficient cooling and spacious storage.",
    specs: {
      Capacity: "380 L",
      Type: "Chest Freezer",
      Model: "NAS-420"
    }
  },
  {
    id: 378,
    name: "NASCO 400L Chest Freezers",
    brand: "NASCO",
    brandId: "nasco",
    model: "NAS-475FL-B",
    category: "fridge",
    image: null,
    images: [],
    price: 5999,
    oldPrice: null,
    discount: 0,
    rating: 4.2,
    reviews: 312,
    icon: "🧊",
    color: "",
    tags: [
      "nasco",
      "fridge"
    ],
    description: "NASCO 400L CHEST FREEZERS. High-capacity refrigerator with efficient cooling and spacious storage.",
    specs: {
      Capacity: "400L",
      Type: "Chest Freezer",
      Model: "NAS-475FL-B"
    }
  },
  {
    id: 379,
    name: "NASCO 239L Display Chest Freezer",
    brand: "NASCO",
    brandId: "nasco",
    model: "NAS-FS305FL",
    category: "fridge",
    image: "/img/products/NASCO-320LTRS-CHEST-FREEZER1.jpg",
    images: ["/img/products/NASCO-320LTRS-CHEST-FREEZER1.jpg"],
    price: 6699,
    oldPrice: null,
    discount: 0,
    rating: 4.6,
    reviews: 145,
    icon: "🧊",
    color: "",
    tags: [
      "nasco",
      "fridge"
    ],
    badge: "hot",
    description: "NASCO 239L DISPLAY CHEST FREEZER. High-capacity refrigerator with efficient cooling and spacious storage.",
    specs: {
      Capacity: "239L",
      Type: "Chest Freezer",
      Model: "NAS-FS305FL"
    }
  },
  {
    id: 380,
    name: "NASCO 360L Display Chest Freezer",
    brand: "NASCO",
    brandId: "nasco",
    model: "NAS-FS405FL",
    category: "fridge",
    image: null,
    images: [],
    price: 7499,
    oldPrice: null,
    discount: 0,
    rating: 4.7,
    reviews: 389,
    icon: "🧊",
    color: "",
    tags: [
      "nasco",
      "fridge"
    ],
    badge: "hot",
    description: "NASCO 360L DISPLAY CHEST FREEZER. High-capacity refrigerator with efficient cooling and spacious storage.",
    specs: {
      Capacity: "360L",
      Type: "Chest Freezer",
      Model: "NAS-FS405FL"
    }
  },
  {
    id: 381,
    name: "NASCO 25 LTRS Microwaves - Grill",
    brand: "NASCO",
    brandId: "nasco",
    model: "EG925EFF",
    category: "kitchen",
    image: null,
    images: ["/img/products/NASCO-25LTR-MICROWAVE-WITH-GRILL.jpg"],
    price: 1999,
    oldPrice: null,
    discount: 0,
    rating: 4.4,
    reviews: 89,
    icon: "🍳",
    color: "",
    tags: [
      "nasco",
      "kitchen"
    ],
    badge: "hot",
    description: "NASCO 25 LTRS MICROWAVES - GRILL. Reliable kitchen appliance built for everyday use with easy controls.",
    specs: {
      "Size/Capacity": "25 LTRS",
      Model: "EG925EFF"
    }
  },
  {
    id: 382,
    name: "NASCO 36 LTRS Microwaves - Grill",
    brand: "NASCO",
    brandId: "nasco",
    model: "AG036AFK",
    category: "kitchen",
    image: null,
    images: [],
    price: 2099,
    oldPrice: null,
    discount: 0,
    rating: 4.8,
    reviews: 67,
    icon: "🍳",
    color: "",
    tags: [
      "nasco",
      "kitchen"
    ],
    description: "NASCO 36 LTRS MICROWAVES - GRILL. Reliable kitchen appliance built for everyday use with easy controls.",
    specs: {
      "Size/Capacity": "36 LTRS",
      Model: "AG036AFK"
    }
  },
  {
    id: 383,
    name: "NASCO 20 LTRS Microwaves - Solo",
    brand: "NASCO",
    brandId: "nasco",
    model: "MWO20NAS-2LV(B)",
    category: "kitchen",
    image: "/img/products/MWO20NAS-2LVB.png",
    images: ["/img/products/MWO20NAS-2LVB.png"],
    price: 849,
    oldPrice: null,
    discount: 0,
    rating: 4.7,
    reviews: 312,
    icon: "🍳",
    color: "",
    tags: [
      "nasco",
      "kitchen"
    ],
    badge: "hot",
    description: "NASCO 20 LTRS MICROWAVES - SOLO. Reliable kitchen appliance built for everyday use with easy controls.",
    specs: {
      "Size/Capacity": "20 LTRS",
      Model: "MWO20NAS-2LV(B)"
    }
  },
  {
    id: 384,
    name: "NASCO 5 KGS Washing Machines ( Twin Top ) Washing Machine",
    brand: "NASCO",
    brandId: "nasco",
    model: "NAS-05-TW",
    category: "laundry",
    image: "/img/products/1NASCO-14KG-TWIN-TUB-WASHING-MACHINE.jpg",
    images: ["/img/products/1NASCO-14KG-TWIN-TUB-WASHING-MACHINE.jpg"],
    price: 1649,
    oldPrice: null,
    discount: 0,
    rating: 4.3,
    reviews: 67,
    icon: "🫧",
    color: "",
    tags: [
      "nasco",
      "laundry"
    ],
    badge: "sale",
    description: "NASCO 5 KGS WASHING MACHINES ( TWIN TOP ). Powerful washing machine with multiple wash programs and energy-saving motor.",
    specs: {
      Capacity: "5 KGS",
      Type: "Twin Tub",
      Model: "NAS-05-TW"
    }
  },
  {
    id: 385,
    name: "NASCO 10 KGS Washing Machines ( Twin Top ) Washing Machine",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASTT-JS100",
    category: "laundry",
    image: null,
    images: [],
    price: 2399,
    oldPrice: null,
    discount: 0,
    rating: 4.3,
    reviews: 124,
    icon: "🫧",
    color: "",
    tags: [
      "nasco",
      "laundry"
    ],
    description: "NASCO 10 KGS WASHING MACHINES ( TWIN TOP ). Powerful washing machine with multiple wash programs and energy-saving motor.",
    specs: {
      Capacity: "10 KGS",
      Type: "Twin Tub",
      Model: "NASTT-JS100"
    }
  },
  {
    id: 386,
    name: "NASCO 12 KGS Washing Machines (top Load) Washing Machine",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASTL-B120FL",
    category: "laundry",
    image: "/img/products/NASCO-18KG-TOP-LOAD-WASHING-MACHINE-NAS-18TLS.png",
    images: ["/img/products/NASCO-18KG-TOP-LOAD-WASHING-MACHINE-NAS-18TLS.png"],
    price: 3999,
    oldPrice: null,
    discount: 0,
    rating: 4.2,
    reviews: 67,
    icon: "🫧",
    color: "",
    tags: [
      "nasco",
      "laundry"
    ],
    description: "NASCO 12 KGS WASHING MACHINES (TOP LOAD). Powerful washing machine with multiple wash programs and energy-saving motor.",
    specs: {
      Capacity: "12 KGS",
      Type: "Top Load",
      Model: "NASTL-B120FL"
    }
  },
  {
    id: 387,
    name: "NASCO 8 KGS Washing Machines (top Load) Washing Machine",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASTL-B80",
    category: "laundry",
    image: null,
    images: ["/img/products/NASCO-8KG-FRONT-LOAD-WASHING-MACHINE-NASFL-J8KG-S-FRONT.png", "/img/products/NASCO-8KG-TWIN-TUB-WASHING-MACHINE-NAS-08-TW-FRONT.jpg"],
    price: 2999,
    oldPrice: null,
    discount: 0,
    rating: 4.5,
    reviews: 389,
    icon: "🫧",
    color: "",
    tags: [
      "nasco",
      "laundry"
    ],
    description: "NASCO 8 KGS WASHING MACHINES (TOP LOAD). Powerful washing machine with multiple wash programs and energy-saving motor.",
    specs: {
      Capacity: "8 KGS",
      Type: "Top Load",
      Model: "NASTL-B80"
    }
  },
  {
    id: 388,
    name: "NASCO 12 KGS Washing Machines (front Load) Washing Machine",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASFL-JS12KG-S",
    category: "laundry",
    image: null,
    images: [],
    price: 5399,
    oldPrice: null,
    discount: 0,
    rating: 4.8,
    reviews: 89,
    icon: "🫧",
    color: "",
    tags: [
      "nasco",
      "laundry",
      "front-load"
    ],
    description: "NASCO 12 KGS WASHING MACHINES (FRONT LOAD). Powerful washing machine with multiple wash programs and energy-saving motor.",
    specs: {
      Capacity: "12 KGS",
      Type: "Front Load",
      Model: "NASFL-JS12KG-S"
    }
  },
  {
    id: 389,
    name: "NASCO 10 KGS Washing Machines (front Load) Washing Machine",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASFL-JS10KG-S",
    category: "laundry",
    image: null,
    images: [],
    price: 5049,
    oldPrice: null,
    discount: 0,
    rating: 4.5,
    reviews: 445,
    icon: "🫧",
    color: "",
    tags: [
      "nasco",
      "laundry",
      "front-load"
    ],
    badge: "hot",
    description: "NASCO 10 KGS WASHING MACHINES (FRONT LOAD). Powerful washing machine with multiple wash programs and energy-saving motor.",
    specs: {
      Capacity: "10 KGS",
      Type: "Front Load",
      Model: "NASFL-JS10KG-S"
    }
  },
  {
    id: 390,
    name: "NASCO 8 KGS Washing Machines (front Load) Washing Machine",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASFL-J8KG-S",
    category: "laundry",
    image: null,
    images: ["/img/products/NASCO-8KG-FRONT-LOAD-WASHING-MACHINE-NASFL-J8KG-S-FRONT.png", "/img/products/NASCO-8KG-TWIN-TUB-WASHING-MACHINE-NAS-08-TW-FRONT.jpg"],
    price: 4599,
    oldPrice: null,
    discount: 0,
    rating: 4.7,
    reviews: 389,
    icon: "🫧",
    color: "",
    tags: [
      "nasco",
      "laundry",
      "front-load"
    ],
    badge: "hot",
    description: "NASCO 8 KGS WASHING MACHINES (FRONT LOAD). Powerful washing machine with multiple wash programs and energy-saving motor.",
    specs: {
      Capacity: "8 KGS",
      Type: "Front Load",
      Model: "NASFL-J8KG-S"
    }
  },
  {
    id: 391,
    name: "NASCO 6 KGS Washing Machines (front Load) Washing Machine",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASFL-J6KG-S",
    category: "laundry",
    image: null,
    images: [],
    price: 3699,
    oldPrice: null,
    discount: 0,
    rating: 4.3,
    reviews: 267,
    icon: "🫧",
    color: "",
    tags: [
      "nasco",
      "laundry",
      "front-load"
    ],
    badge: "hot",
    description: "NASCO 6 KGS WASHING MACHINES (FRONT LOAD). Powerful washing machine with multiple wash programs and energy-saving motor.",
    specs: {
      Capacity: "6 KGS",
      Type: "Front Load",
      Model: "NASFL-J6KG-S"
    }
  },
  {
    id: 392,
    name: "NASCO 4 BURNER Gas Cooker",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASGC-50X50S-CTZ",
    category: "kitchen",
    image: "/img/products/1-75.jpg",
    images: ["/img/products/1-75.jpg"],
    price: 1699,
    oldPrice: null,
    discount: 0,
    rating: 4.7,
    reviews: 445,
    icon: "🍳",
    color: "",
    tags: [
      "nasco",
      "kitchen"
    ],
    badge: "sale",
    description: "NASCO 4 BURNER GAS COOKER. Reliable kitchen appliance built for everyday use with easy controls.",
    specs: {
      "Size/Capacity": "4 BURNER",
      Model: "NASGC-50X50S-CTZ"
    }
  },
  {
    id: 393,
    name: "NASCO Gas Cooker (NASGC-50MO+ST-CTZ)",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASGC-50MO+ST-CTZ",
    category: "kitchen",
    image: null,
    images: ["/img/products/NASCO-4-BURNER-GAS-COOKER-WITH-GRILL-NASGC-SNIPER50TB-G-FRONT-1.jpg", "/img/products/NASCO-5-BURNER-GAS-COOKER-WITH-OVEN-GRILL-NASGC-AMG80S-FRONT.jpg"],
    price: 1749,
    oldPrice: null,
    discount: 0,
    rating: 4.5,
    reviews: 445,
    icon: "🍳",
    color: "",
    tags: [
      "nasco",
      "kitchen"
    ],
    badge: "sale",
    description: "NASCO GAS COOKER. Reliable kitchen appliance built for everyday use with easy controls.",
    specs: {
      Model: "NASGC-50MO+ST-CTZ"
    }
  },
  {
    id: 394,
    name: "NASCO Gas Cooker (NASGC-50MO-CTZ)",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASGC-50MO-CTZ",
    category: "kitchen",
    image: null,
    images: ["/img/products/NASCO-4-BURNER-GAS-COOKER-WITH-GRILL-NASGC-SNIPER50TB-G-FRONT-1.jpg", "/img/products/NASCO-5-BURNER-GAS-COOKER-WITH-OVEN-GRILL-NASGC-AMG80S-FRONT.jpg"],
    price: 1649,
    oldPrice: null,
    discount: 0,
    rating: 4.3,
    reviews: 234,
    icon: "🍳",
    color: "",
    tags: [
      "nasco",
      "kitchen"
    ],
    badge: "sale",
    description: "NASCO GAS COOKER. Reliable kitchen appliance built for everyday use with easy controls.",
    specs: {
      Model: "NASGC-50MO-CTZ"
    }
  },
  {
    id: 395,
    name: "NASCO Gas Cooker (NASGC-SNIPER50TB)",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASGC-SNIPER50TB",
    category: "kitchen",
    image: null,
    images: ["/img/products/NASCO-4-BURNER-GAS-COOKER-WITH-GRILL-NASGC-SNIPER50TB-G-FRONT-1.jpg", "/img/products/NASCO-5-BURNER-GAS-COOKER-WITH-OVEN-GRILL-NASGC-AMG80S-FRONT.jpg", "/img/products/NASCO-1-BURNER-GAS-STOVE.jpg", "/img/products/NASCO-3-BURNER-GAS-STOVE-WHITE.jpg"],
    price: 2099,
    oldPrice: null,
    discount: 0,
    rating: 4.7,
    reviews: 267,
    icon: "🍳",
    color: "",
    tags: [
      "nasco",
      "kitchen"
    ],
    badge: "hot",
    description: "NASCO GAS COOKER. Reliable kitchen appliance built for everyday use with easy controls.",
    specs: {
      Model: "NASGC-SNIPER50TB"
    }
  },
  {
    id: 396,
    name: "NASCO Gas Cooker (NASGC-SNIPER50TS-G)",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASGC-SNIPER50TS-G",
    category: "kitchen",
    image: null,
    images: ["/img/products/NASCO-4-BURNER-GAS-COOKER-WITH-GRILL-NASGC-SNIPER50TB-G-FRONT-1.jpg", "/img/products/NASCO-5-BURNER-GAS-COOKER-WITH-OVEN-GRILL-NASGC-AMG80S-FRONT.jpg", "/img/products/NASCO-1-BURNER-GAS-STOVE.jpg", "/img/products/NASCO-3-BURNER-GAS-STOVE-WHITE.jpg"],
    price: 2499,
    oldPrice: null,
    discount: 0,
    rating: 4.2,
    reviews: 89,
    icon: "🍳",
    color: "",
    tags: [
      "nasco",
      "kitchen"
    ],
    badge: "hot",
    description: "NASCO GAS COOKER. Reliable kitchen appliance built for everyday use with easy controls.",
    specs: {
      Model: "NASGC-SNIPER50TS-G"
    }
  },
  {
    id: 397,
    name: "NASCO Gas Cooker (NASGC-LME60I)",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASGC-LME60I",
    category: "kitchen",
    image: null,
    images: ["/img/products/NASCO-4-BURNER-GAS-COOKER-WITH-GRILL-NASGC-SNIPER50TB-G-FRONT-1.jpg", "/img/products/NASCO-5-BURNER-GAS-COOKER-WITH-OVEN-GRILL-NASGC-AMG80S-FRONT.jpg", "/img/products/NASCO-1-BURNER-GAS-STOVE.jpg", "/img/products/NASCO-3-BURNER-GAS-STOVE-WHITE.jpg"],
    price: 4499,
    oldPrice: null,
    discount: 0,
    rating: 4.8,
    reviews: 445,
    icon: "🍳",
    color: "",
    tags: [
      "nasco",
      "kitchen"
    ],
    badge: "hot",
    description: "NASCO GAS COOKER. Reliable kitchen appliance built for everyday use with easy controls.",
    specs: {
      Model: "NASGC-LME60I"
    }
  },
  {
    id: 398,
    name: "NASCO 5 BURNERS Gas Cooker (NASGC-LME90I)",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASGC-LME90I",
    category: "kitchen",
    image: null,
    images: ["/img/products/NASCO-5-BURNER-GAS-COOKER-WITH-OVEN-GRILL-NASGC-AMG80S-FRONT.jpg"],
    price: 8199,
    oldPrice: null,
    discount: 0,
    rating: 4.3,
    reviews: 234,
    icon: "🍳",
    color: "",
    tags: [
      "nasco",
      "kitchen"
    ],
    badge: "sale",
    description: "NASCO 5 BURNERS GAS COOKER. Reliable kitchen appliance built for everyday use with easy controls.",
    specs: {
      "Size/Capacity": "5 BURNERS",
      Model: "NASGC-LME90I"
    }
  },
  {
    id: 399,
    name: "NASCO Gas Cooker (NASGC-LME90B)",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASGC-LME90B",
    category: "kitchen",
    image: null,
    images: ["/img/products/NASCO-4-BURNER-GAS-COOKER-WITH-GRILL-NASGC-SNIPER50TB-G-FRONT-1.jpg", "/img/products/NASCO-5-BURNER-GAS-COOKER-WITH-OVEN-GRILL-NASGC-AMG80S-FRONT.jpg", "/img/products/NASCO-1-BURNER-GAS-STOVE.jpg", "/img/products/NASCO-3-BURNER-GAS-STOVE-WHITE.jpg"],
    price: 7849,
    oldPrice: null,
    discount: 0,
    rating: 4.8,
    reviews: 267,
    icon: "🍳",
    color: "",
    tags: [
      "nasco",
      "kitchen"
    ],
    badge: "sale",
    description: "NASCO GAS COOKER. Reliable kitchen appliance built for everyday use with easy controls.",
    specs: {
      Model: "NASGC-LME90B"
    }
  },
  {
    id: 400,
    name: "NASCO 5 BURNERS Gas Cooker (NASGC-AMG80S)",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASGC-AMG80S",
    category: "kitchen",
    image: null,
    images: ["/img/products/NASCO-5-BURNER-GAS-COOKER-WITH-OVEN-GRILL-NASGC-AMG80S-FRONT.jpg"],
    price: 5249,
    oldPrice: null,
    discount: 0,
    rating: 4.6,
    reviews: 56,
    icon: "🍳",
    color: "",
    tags: [
      "nasco",
      "kitchen"
    ],
    badge: "hot",
    description: "NASCO 5 BURNERS GAS COOKER. Reliable kitchen appliance built for everyday use with easy controls.",
    specs: {
      "Size/Capacity": "5 BURNERS",
      Model: "NASGC-AMG80S"
    }
  },
  {
    id: 401,
    name: "NASCO 4 HOBS Electric Cooker",
    brand: "NASCO",
    brandId: "nasco",
    model: "NAS-DM4H109",
    category: "kitchen",
    image: null,
    images: [],
    price: 4599,
    oldPrice: null,
    discount: 0,
    rating: 4.2,
    reviews: 203,
    icon: "🍳",
    color: "",
    tags: [
      "nasco",
      "kitchen"
    ],
    badge: "sale",
    description: "NASCO 4 HOBS ELECTRIC COOKER. Reliable kitchen appliance built for everyday use with easy controls.",
    specs: {
      "Size/Capacity": "4 HOBS",
      Model: "NAS-DM4H109"
    }
  },
  {
    id: 402,
    name: "NASCO 26 LB - BLACK Ice Maker",
    brand: "NASCO",
    brandId: "nasco",
    model: "IMB1008-GS",
    category: "kitchen",
    image: "/img/products/NASCO-1.25LTR-NASCO-COFFEE-MAKER1.jpg",
    images: ["/img/products/NASCO-1.25LTR-NASCO-COFFEE-MAKER1.jpg"],
    price: 1299,
    oldPrice: null,
    discount: 0,
    rating: 4.3,
    reviews: 89,
    icon: "🍳",
    color: "",
    tags: [
      "nasco",
      "kitchen"
    ],
    badge: "hot",
    description: "NASCO 26 LB - BLACK ICE MAKER. Reliable kitchen appliance built for everyday use with easy controls.",
    specs: {
      "Size/Capacity": "26 LB - BLACK",
      Model: "IMB1008-GS"
    }
  },
  {
    id: 403,
    name: "NASCO 5 WATT Ice Maker",
    brand: "NASCO",
    brandId: "nasco",
    model: "MKNAS-200",
    category: "kitchen",
    image: "/img/products/NASCO-2000-WATT-SANDWICH-MAKER1-1.jpg",
    images: ["/img/products/NASCO-2000-WATT-SANDWICH-MAKER1-1.jpg"],
    price: 249,
    oldPrice: null,
    discount: 0,
    rating: 4.5,
    reviews: 234,
    icon: "🍳",
    color: "",
    tags: [
      "nasco",
      "kitchen"
    ],
    description: "NASCO 5 WATT ICE MAKER. Reliable kitchen appliance built for everyday use with easy controls.",
    specs: {
      "Size/Capacity": "5 WATT",
      Model: "MKNAS-200"
    }
  },
  {
    id: 404,
    name: "Samsung Galaxy Tab S11 (256GB+12GB)",
    brand: "Samsung",
    brandId: "samsung",
    model: "SM-X736BZAEAFA",
    category: "phones",
    image: "/img/products/1.png",
    images: ["/img/products/1.png"],
    price: 12299,
    oldPrice: null,
    discount: 0,
    rating: 4.7,
    reviews: 43,
    icon: "📱",
    color: "#1428a0",
    tags: [
      "samsung",
      "tablet",
      "new-arrivals"
    ],
    badge: "new",
    description: "11\" Galaxy Tab S11 with 4MP+13MP cameras, 256GB storage, 12GB RAM, Li-Ion 8400mAh battery.",
    specs: {
      Screen: "11\"",
      Storage: "256GB",
      RAM: "12GB",
      Battery: "8400mAh",
      Camera: "13MP"
    }
  },
  {
    id: 405,
    name: "Samsung Galaxy Tab S11 Ultra (256GB+12GB)",
    brand: "Samsung",
    brandId: "samsung",
    model: "SM-X936BZAAAFA",
    category: "phones",
    image: "/img/products/1-1.png",
    images: ["/img/products/1-1.png"],
    price: 16299,
    oldPrice: null,
    discount: 0,
    rating: 4.8,
    reviews: 31,
    icon: "📱",
    color: "#1428a0",
    tags: [
      "samsung",
      "tablet",
      "new-arrivals"
    ],
    badge: "new",
    description: "14.6\" Galaxy Tab S11 Ultra with 8+2MP/13MP cameras, 256GB+12GB, Li-Ion 11600mAh.",
    specs: {
      Screen: "14.6\"",
      Storage: "256GB",
      RAM: "12GB",
      Battery: "11600mAh",
      Camera: "8+2MP/13MP"
    }
  },
  {
    id: 406,
    name: "Samsung Galaxy Tab S11 Ultra + Keyboard (256GB+12GB)",
    brand: "Samsung",
    brandId: "samsung",
    model: "SM-X936BZADAFA",
    category: "phones",
    image: "/img/products/sm-x936bzadafa_brandpng",
    images: ["/img/products/sm-x936bzadafa_brandpng"],
    price: 17999,
    oldPrice: null,
    discount: 0,
    rating: 4.8,
    reviews: 18,
    icon: "📱",
    color: "#1428a0",
    tags: [
      "samsung",
      "tablet",
      "new-arrivals"
    ],
    badge: "new",
    description: "14.6\" Galaxy Tab S11 Ultra with keyboard cover bundle, 256GB+12GB, Li-Ion 11600mAh.",
    specs: {
      Screen: "14.6\"",
      Storage: "256GB",
      RAM: "12GB",
      Battery: "11600mAh",
      Includes: "Keyboard Cover"
    }
  },
  {
    id: 407,
    name: "Samsung Galaxy Tab S10 FE+ (256GB+12GB)",
    brand: "Samsung",
    brandId: "samsung",
    model: "SM-X626BZAEAFA",
    category: "phones",
    image: "/img/products/africa-en-galaxy-tab-s10-plus-sm-x820-sm-x826bzsdafa-543688611-1.jpg",
    images: ["/img/products/africa-en-galaxy-tab-s10-plus-sm-x820-sm-x826bzsdafa-543688611-1.jpg"],
    price: 10499,
    oldPrice: null,
    discount: 0,
    rating: 4.6,
    reviews: 67,
    icon: "📱",
    color: "#1428a0",
    tags: [
      "samsung",
      "tablet"
    ],
    description: "12.4\" Galaxy Tab S10 FE+ with 12MP camera, 256GB+12GB, Li-Ion 10090mAh battery.",
    specs: {
      Screen: "12.4\"",
      Storage: "256GB",
      RAM: "12GB",
      Battery: "10090mAh",
      Camera: "12MP"
    }
  },
  {
    id: 408,
    name: "Samsung Galaxy Tab S10 FE (256GB+12GB)",
    brand: "Samsung",
    brandId: "samsung",
    model: "SM-X526BZAEAFA",
    category: "phones",
    image: "/img/products/sm-x526bzaeafa_brandpng",
    images: ["/img/products/sm-x526bzaeafa_brandpng"],
    price: 8499,
    oldPrice: null,
    discount: 0,
    rating: 4.5,
    reviews: 89,
    icon: "📱",
    color: "#1428a0",
    tags: [
      "samsung",
      "tablet"
    ],
    description: "10.9\" Galaxy Tab S10 FE with 12MP camera, 256GB+12GB, Li-Ion 7606mAh.",
    specs: {
      Screen: "10.9\"",
      Storage: "256GB",
      RAM: "12GB",
      Battery: "7606mAh",
      Camera: "12MP"
    }
  },
  {
    id: 409,
    name: "Samsung Galaxy Tab S10 Lite (64GB+4GB)",
    brand: "Samsung",
    brandId: "samsung",
    model: "SM-X406BZAEAFA",
    category: "phones",
    image: "/img/products/SM-X406BZAEAFA-1.png",
    images: ["/img/products/SM-X406BZAEAFA-1.png"],
    price: 5999,
    oldPrice: null,
    discount: 0,
    rating: 4.3,
    reviews: 112,
    icon: "📱",
    color: "#1428a0",
    tags: [
      "samsung",
      "tablet"
    ],
    description: "10.9\" Galaxy Tab S10 Lite with 8MP camera, 64GB+4GB, Li-Ion 8000mAh.",
    specs: {
      Screen: "10.9\"",
      Storage: "64GB",
      RAM: "4GB",
      Battery: "8000mAh",
      Camera: "8MP"
    }
  },
  {
    id: 410,
    name: "Samsung Galaxy Tab S10+ (256GB+12GB)",
    brand: "Samsung",
    brandId: "samsung",
    model: "SM-X826BZADAFA",
    category: "phones",
    image: "/img/products/sm-x826bzadafa_brandpng",
    images: ["/img/products/sm-x826bzadafa_brandpng"],
    price: 17999,
    oldPrice: null,
    discount: 0,
    rating: 4.7,
    reviews: 54,
    icon: "📱",
    color: "#1428a0",
    tags: [
      "samsung",
      "tablet"
    ],
    description: "12.4\" Galaxy Tab S10+ with 8+4MP/13MP cameras, 256GB+12GB, Li-Ion 10090mAh.",
    specs: {
      Screen: "12.4\"",
      Storage: "256GB",
      RAM: "12GB",
      Battery: "10090mAh",
      Camera: "8+4MP/13MP"
    }
  },
  {
    id: 411,
    name: "Samsung Galaxy Tab S10 Ultra (256GB+12GB)",
    brand: "Samsung",
    brandId: "samsung",
    model: "SM-X926BZADAFA",
    category: "phones",
    image: "/img/products/africa-en-galaxy-tab-s10-ultra-sm-x920-sm-x926bzadafa-543688846.jpg",
    images: ["/img/products/africa-en-galaxy-tab-s10-ultra-sm-x920-sm-x926bzadafa-543688846.jpg"],
    price: 21999,
    oldPrice: null,
    discount: 0,
    rating: 4.8,
    reviews: 38,
    icon: "📱",
    color: "#1428a0",
    tags: [
      "samsung",
      "tablet"
    ],
    description: "14.6\" Galaxy Tab S10 Ultra with 8+4MP/13MP cameras, 256GB+12GB, Li-Ion 11200mAh.",
    specs: {
      Screen: "14.6\"",
      Storage: "256GB",
      RAM: "12GB",
      Battery: "11200mAh",
      Camera: "8+4MP/13MP"
    }
  },
  {
    id: 412,
    name: "Samsung Galaxy Tab A11+ (256GB+8GB)",
    brand: "Samsung",
    brandId: "samsung",
    model: "SM-X236BZAEACR",
    category: "phones",
    image: "/img/products/SM-X236BZSAACR-1.png",
    images: ["/img/products/SM-X236BZSAACR-1.png"],
    price: 3699,
    oldPrice: null,
    discount: 0,
    rating: 4.3,
    reviews: 78,
    icon: "📱",
    color: "#1428a0",
    tags: [
      "samsung",
      "tablet"
    ],
    badge: "new",
    description: "11\" Galaxy Tab A11+ with 8MP/5MP cameras, 256GB+8GB, Li-Po 7040mAh.",
    specs: {
      Screen: "11\"",
      Storage: "256GB",
      RAM: "8GB",
      Battery: "7040mAh",
      Camera: "8MP/5MP"
    }
  },
  {
    id: 413,
    name: "Samsung Galaxy Tab A11+ (128GB+6GB)",
    brand: "Samsung",
    brandId: "samsung",
    model: "SM-X236BZSAACR",
    category: "phones",
    image: "/img/products/sm-x236bzsaacr_brandpng",
    images: ["/img/products/sm-x236bzsaacr_brandpng"],
    price: 3149,
    oldPrice: null,
    discount: 0,
    rating: 4.2,
    reviews: 56,
    icon: "📱",
    color: "#1428a0",
    tags: [
      "samsung",
      "tablet"
    ],
    badge: "new",
    description: "11\" Galaxy Tab A11+ with 8MP/5MP cameras, 128GB+6GB, Li-Po 7040mAh.",
    specs: {
      Screen: "11\"",
      Storage: "128GB",
      RAM: "6GB",
      Battery: "7040mAh",
      Camera: "8MP/5MP"
    }
  },
  {
    id: 414,
    name: "Samsung Galaxy Tab A11 (64GB+4GB)",
    brand: "Samsung",
    brandId: "samsung",
    model: "SM-X135GZAAACR",
    category: "phones",
    image: "/img/products/sm-x135gzaaacr_brandpng",
    images: ["/img/products/sm-x135gzaaacr_brandpng"],
    price: 1599,
    oldPrice: null,
    discount: 0,
    rating: 4.1,
    reviews: 143,
    icon: "📱",
    color: "#1428a0",
    tags: [
      "samsung",
      "tablet"
    ],
    badge: "new",
    description: "8.7\" Galaxy Tab A11 with 8MP/5MP cameras, 64GB+4GB, Li-Po 5100mAh.",
    specs: {
      Screen: "8.7\"",
      Storage: "64GB",
      RAM: "4GB",
      Battery: "5100mAh",
      Camera: "8MP/5MP"
    }
  },
  {
    id: 415,
    name: "Samsung Galaxy Fold 7 (256GB+12GB)",
    brand: "Samsung",
    brandId: "samsung",
    model: "SM-F966BDBDAFB",
    category: "phones",
    image: "/img/products/sm-f966bdbdafb_brandpng",
    images: ["/img/products/sm-f966bdbdafb_brandpng"],
    price: 22499,
    oldPrice: null,
    discount: 0,
    rating: 4.8,
    reviews: 29,
    icon: "📱",
    color: "#1428a0",
    tags: [
      "samsung",
      "phones",
      "flagship",
      "new-arrivals"
    ],
    badge: "new",
    description: "8.0\" foldable Galaxy Fold 7 with 10+200MP/10MP/12MP cameras, 256GB+12GB, 4400mAh.",
    specs: {
      Screen: "8.0\" Foldable",
      Storage: "256GB",
      RAM: "12GB",
      Battery: "4400mAh",
      Camera: "200MP Main"
    }
  },
  {
    id: 416,
    name: "Samsung Galaxy Fold 7 (512GB+12GB)",
    brand: "Samsung",
    brandId: "samsung",
    model: "SM-F966BDBGAFB",
    category: "phones",
    image: "/img/products/sm-f966bdbgafb_brandpng",
    images: ["/img/products/sm-f966bdbgafb_brandpng"],
    price: 23999,
    oldPrice: null,
    discount: 0,
    rating: 4.8,
    reviews: 24,
    icon: "📱",
    color: "#1428a0",
    tags: [
      "samsung",
      "phones",
      "flagship",
      "new-arrivals"
    ],
    badge: "new",
    description: "8.0\" foldable Galaxy Fold 7 with 10+200MP/10MP/12MP cameras, 512GB+12GB, 4400mAh.",
    specs: {
      Screen: "8.0\" Foldable",
      Storage: "512GB",
      RAM: "12GB",
      Battery: "4400mAh",
      Camera: "200MP Main"
    }
  },
  {
    id: 417,
    name: "Samsung Galaxy Fold 7 (1TB+16GB)",
    brand: "Samsung",
    brandId: "samsung",
    model: "SM-F966BDBHAFB",
    category: "phones",
    image: "/img/products/sm-f966bdbhafb_brandpng",
    images: ["/img/products/sm-f966bdbhafb_brandpng"],
    price: 27499,
    oldPrice: null,
    discount: 0,
    rating: 4.9,
    reviews: 12,
    icon: "📱",
    color: "#1428a0",
    tags: [
      "samsung",
      "phones",
      "flagship",
      "new-arrivals"
    ],
    badge: "new",
    description: "8.0\" foldable Galaxy Fold 7 with 10+200MP/10MP/12MP cameras, 1TB+16GB, 4400mAh.",
    specs: {
      Screen: "8.0\" Foldable",
      Storage: "1TB",
      RAM: "16GB",
      Battery: "4400mAh",
      Camera: "200MP Main"
    }
  },
  {
    id: 418,
    name: "Samsung Galaxy Flip 7 FE (256GB+8GB)",
    brand: "Samsung",
    brandId: "samsung",
    model: "SM-F761BZKEAFB",
    category: "phones",
    image: "/img/products/sm-f761bzkeafb_brandpng",
    images: ["/img/products/sm-f761bzkeafb_brandpng"],
    price: 10999,
    oldPrice: null,
    discount: 0,
    rating: 4.6,
    reviews: 47,
    icon: "📱",
    color: "#1428a0",
    tags: [
      "samsung",
      "phones",
      "new-arrivals"
    ],
    badge: "new",
    description: "6.7\" flip-style Galaxy Flip 7 FE with 12+50MP/10MP cameras, 256GB+8GB, 4000mAh.",
    specs: {
      Screen: "6.7\" Flip",
      Storage: "256GB",
      RAM: "8GB",
      Battery: "4000mAh",
      Camera: "50MP Main"
    }
  },
  {
    id: 419,
    name: "Samsung Galaxy Flip 7 (256GB+12GB)",
    brand: "Samsung",
    brandId: "samsung",
    model: "SM-F766BDBAAFB",
    category: "phones",
    image: "/img/products/sm-f766bdbaafb_brandpng",
    images: ["/img/products/sm-f766bdbaafb_brandpng"],
    price: 12599,
    oldPrice: null,
    discount: 0,
    rating: 4.7,
    reviews: 38,
    icon: "📱",
    color: "#1428a0",
    tags: [
      "samsung",
      "phones",
      "flagship",
      "new-arrivals"
    ],
    badge: "new",
    description: "6.7\" flip Galaxy Flip 7 with 12+50MP/10MP cameras, 256GB+12GB, 4300mAh.",
    specs: {
      Screen: "6.7\" Flip",
      Storage: "256GB",
      RAM: "12GB",
      Battery: "4300mAh",
      Camera: "50MP Main"
    }
  },
  {
    id: 420,
    name: "Samsung Galaxy Flip 7 (512GB+12GB)",
    brand: "Samsung",
    brandId: "samsung",
    model: "SM-F766BDBEAFB",
    category: "phones",
    image: "/img/products/sm-f766bdbeafb_brandpng",
    images: ["/img/products/sm-f766bdbeafb_brandpng"],
    price: 13999,
    oldPrice: null,
    discount: 0,
    rating: 4.7,
    reviews: 22,
    icon: "📱",
    color: "#1428a0",
    tags: [
      "samsung",
      "phones",
      "flagship",
      "new-arrivals"
    ],
    badge: "new",
    description: "6.7\" flip Galaxy Flip 7 with 12+50MP/10MP cameras, 512GB+12GB, 4300mAh.",
    specs: {
      Screen: "6.7\" Flip",
      Storage: "512GB",
      RAM: "12GB",
      Battery: "4300mAh",
      Camera: "50MP Main"
    }
  },
  {
    id: 421,
    name: "Samsung Galaxy S25 FE (256GB+8GB)",
    brand: "Samsung",
    brandId: "samsung",
    model: "SM-S731BDBVAFB",
    category: "phones",
    image: "/img/products/sm-s731bdbvafb_brandpng",
    images: ["/img/products/sm-s731bdbvafb_brandpng"],
    price: 8599,
    oldPrice: null,
    discount: 0,
    rating: 4.6,
    reviews: 63,
    icon: "📱",
    color: "#1428a0",
    tags: [
      "samsung",
      "phones",
      "new-arrivals"
    ],
    badge: "new",
    description: "6.7\" Galaxy S25 FE with 50+8+12MP cameras, 256GB+8GB, 4900mAh battery.",
    specs: {
      Screen: "6.7\"",
      Storage: "256GB",
      RAM: "8GB",
      Battery: "4900mAh",
      Camera: "50MP Main"
    }
  },
  {
    id: 422,
    name: "Samsung Galaxy S26 (256GB+12GB)",
    brand: "Samsung",
    brandId: "samsung",
    model: "SM-S942BLBOAFB",
    category: "phones",
    image: "/img/products/sm-s942blboafb_brandpng",
    images: ["/img/products/sm-s942blboafb_brandpng"],
    price: 11099,
    oldPrice: null,
    discount: 0,
    rating: 4.7,
    reviews: 52,
    icon: "📱",
    color: "#1428a0",
    tags: [
      "samsung",
      "phones",
      "flagship",
      "new-arrivals"
    ],
    badge: "new",
    description: "6.3\" Galaxy S26 with 50+10+12MP/12MP cameras, 256GB+12GB, 4300mAh.",
    specs: {
      Screen: "6.3\"",
      Storage: "256GB",
      RAM: "12GB",
      Battery: "4300mAh",
      Camera: "50+10+12MP"
    }
  },
  {
    id: 423,
    name: "Samsung Galaxy S26+ (256GB+12GB)",
    brand: "Samsung",
    brandId: "samsung",
    model: "SM-S947BLBIAFB",
    category: "phones",
    image: "/img/products/sm-s947blbiafb_brandpng",
    images: ["/img/products/sm-s947blbiafb_brandpng"],
    price: 13099,
    oldPrice: null,
    discount: 0,
    rating: 4.7,
    reviews: 41,
    icon: "📱",
    color: "#1428a0",
    tags: [
      "samsung",
      "phones",
      "flagship",
      "new-arrivals"
    ],
    badge: "new",
    description: "6.7\" Galaxy S26+ with 50+10+12MP/12MP cameras, 256GB+12GB, 4900mAh.",
    specs: {
      Screen: "6.7\"",
      Storage: "256GB",
      RAM: "12GB",
      Battery: "4900mAh",
      Camera: "50+10+12MP"
    }
  },
  {
    id: 424,
    name: "Samsung Galaxy S26+ (512GB+12GB)",
    brand: "Samsung",
    brandId: "samsung",
    model: "SM-S947BLBOAFB",
    category: "phones",
    image: "/img/products/sm-s947blboafb_brandpng",
    images: ["/img/products/sm-s947blboafb_brandpng"],
    price: 15599,
    oldPrice: null,
    discount: 0,
    rating: 4.7,
    reviews: 28,
    icon: "📱",
    color: "#1428a0",
    tags: [
      "samsung",
      "phones",
      "flagship",
      "new-arrivals"
    ],
    badge: "new",
    description: "6.7\" Galaxy S26+ with 50+10+12MP/12MP cameras, 512GB+12GB, 4900mAh.",
    specs: {
      Screen: "6.7\"",
      Storage: "512GB",
      RAM: "12GB",
      Battery: "4900mAh",
      Camera: "50+10+12MP"
    }
  },
  {
    id: 425,
    name: "Samsung Galaxy S26 Ultra (256GB+12GB)",
    brand: "Samsung",
    brandId: "samsung",
    model: "SM-S948BLBIAFB",
    category: "phones",
    image: "/img/products/sm-s948blbiafb_brandpng",
    images: ["/img/products/sm-s948blbiafb_brandpng"],
    price: 15599,
    oldPrice: null,
    discount: 0,
    rating: 4.8,
    reviews: 37,
    icon: "📱",
    color: "#1428a0",
    tags: [
      "samsung",
      "phones",
      "flagship",
      "new-arrivals"
    ],
    badge: "new",
    description: "6.9\" Galaxy S26 Ultra with 200+10+50+50MP/12MP cameras, 256GB+12GB, 5000mAh.",
    specs: {
      Screen: "6.9\"",
      Storage: "256GB",
      RAM: "12GB",
      Battery: "5000mAh",
      Camera: "200MP Main"
    }
  },
  {
    id: 426,
    name: "Samsung Galaxy S26 Ultra (512GB+12GB)",
    brand: "Samsung",
    brandId: "samsung",
    model: "SM-S948BLBOAFB",
    category: "phones",
    image: "/img/products/sm-s948blboafb_brandpng",
    images: ["/img/products/sm-s948blboafb_brandpng"],
    price: 18199,
    oldPrice: null,
    discount: 0,
    rating: 4.8,
    reviews: 26,
    icon: "📱",
    color: "#1428a0",
    tags: [
      "samsung",
      "phones",
      "flagship",
      "new-arrivals"
    ],
    badge: "new",
    description: "6.9\" Galaxy S26 Ultra with 200+10+50+50MP/12MP cameras, 512GB+12GB, 5000mAh.",
    specs: {
      Screen: "6.9\"",
      Storage: "512GB",
      RAM: "12GB",
      Battery: "5000mAh",
      Camera: "200MP Main"
    }
  },
  {
    id: 427,
    name: "Samsung Galaxy S26 Ultra (1TB+12GB)",
    brand: "Samsung",
    brandId: "samsung",
    model: "SM-S948BLBPAFB",
    category: "phones",
    image: "/img/products/sm-s948blbpafb_brandpng",
    images: ["/img/products/sm-s948blbpafb_brandpng"],
    price: 21999,
    oldPrice: null,
    discount: 0,
    rating: 4.9,
    reviews: 14,
    icon: "📱",
    color: "#1428a0",
    tags: [
      "samsung",
      "phones",
      "flagship",
      "new-arrivals"
    ],
    badge: "new",
    description: "6.9\" Galaxy S26 Ultra with 200+10+50+50MP/12MP cameras, 1TB+12GB, 5000mAh.",
    specs: {
      Screen: "6.9\"",
      Storage: "1TB",
      RAM: "12GB",
      Battery: "5000mAh",
      Camera: "200MP Main"
    }
  },
  {
    id: 428,
    name: "Samsung Galaxy S25 Ultra (256GB+12GB)",
    brand: "Samsung",
    brandId: "samsung",
    model: "SM-S938BZBIAFB",
    category: "phones",
    image: "/img/products/s25-ultra.jpg",
    images: ["/img/products/s25-ultra.jpg"],
    price: 14999,
    oldPrice: null,
    discount: 0,
    rating: 4.8,
    reviews: 89,
    icon: "📱",
    color: "#1428a0",
    tags: [
      "samsung",
      "phones",
      "flagship"
    ],
    description: "6.8\" Galaxy S25 Ultra with 200+10+50+50MP/12MP cameras, 256GB+12GB, 5000mAh.",
    specs: {
      Screen: "6.8\"",
      Storage: "256GB",
      RAM: "12GB",
      Battery: "5000mAh",
      Camera: "200MP Main"
    }
  },
  {
    id: 429,
    name: "Samsung Galaxy S25 Ultra (512GB+12GB)",
    brand: "Samsung",
    brandId: "samsung",
    model: "SM-S938BZBOAFB",
    category: "phones",
    image: "/img/products/sm-s938bzboafb_brandpng",
    images: ["/img/products/sm-s938bzboafb_brandpng"],
    price: 16499,
    oldPrice: null,
    discount: 0,
    rating: 4.8,
    reviews: 67,
    icon: "📱",
    color: "#1428a0",
    tags: [
      "samsung",
      "phones",
      "flagship"
    ],
    description: "6.8\" Galaxy S25 Ultra with 200+10+50+50MP/12MP cameras, 512GB+12GB, 5000mAh.",
    specs: {
      Screen: "6.8\"",
      Storage: "512GB",
      RAM: "12GB",
      Battery: "5000mAh",
      Camera: "200MP Main"
    }
  },
  {
    id: 430,
    name: "Samsung Galaxy S25 Ultra (1TB+12GB)",
    brand: "Samsung",
    brandId: "samsung",
    model: "SM-S938BZBPAFB",
    category: "phones",
    image: "/img/products/sm-s938bzbpafb_brandpng",
    images: ["/img/products/sm-s938bzbpafb_brandpng"],
    price: 18999,
    oldPrice: null,
    discount: 0,
    rating: 4.8,
    reviews: 44,
    icon: "📱",
    color: "#1428a0",
    tags: [
      "samsung",
      "phones",
      "flagship"
    ],
    description: "6.8\" Galaxy S25 Ultra with 200+10+50+50MP/12MP cameras, 1TB+12GB, 5000mAh.",
    specs: {
      Screen: "6.8\"",
      Storage: "1TB",
      RAM: "12GB",
      Battery: "5000mAh",
      Camera: "200MP Main"
    }
  },
  {
    id: 431,
    name: "Samsung Galaxy S25+ (256GB+12GB)",
    brand: "Samsung",
    brandId: "samsung",
    model: "SM-S936BDBIAFB",
    category: "phones",
    image: "/img/products/sm-s936bdbiafb_brandpng",
    images: ["/img/products/sm-s936bdbiafb_brandpng"],
    price: 11499,
    oldPrice: null,
    discount: 0,
    rating: 4.7,
    reviews: 98,
    icon: "📱",
    color: "#1428a0",
    tags: [
      "samsung",
      "phones",
      "flagship"
    ],
    description: "6.7\" Galaxy S25+ with 50+10+12MP/12MP cameras, 256GB+12GB, 4900mAh.",
    specs: {
      Screen: "6.7\"",
      Storage: "256GB",
      RAM: "12GB",
      Battery: "4900mAh",
      Camera: "50+10+12MP"
    }
  },
  {
    id: 432,
    name: "Samsung Galaxy S25+ (512GB+12GB)",
    brand: "Samsung",
    brandId: "samsung",
    model: "SM-S936BDBOAFB",
    category: "phones",
    image: "/img/products/sm-s936bdboafb_brandpng",
    images: ["/img/products/sm-s936bdboafb_brandpng"],
    price: 12999,
    oldPrice: null,
    discount: 0,
    rating: 4.7,
    reviews: 72,
    icon: "📱",
    color: "#1428a0",
    tags: [
      "samsung",
      "phones",
      "flagship"
    ],
    description: "6.7\" Galaxy S25+ with 50+10+12MP/12MP cameras, 512GB+12GB, 4900mAh.",
    specs: {
      Screen: "6.7\"",
      Storage: "512GB",
      RAM: "12GB",
      Battery: "4900mAh",
      Camera: "50+10+12MP"
    }
  },
  {
    id: 433,
    name: "Samsung Galaxy S25 (128GB+12GB)",
    brand: "Samsung",
    brandId: "samsung",
    model: "SM-S931BDBIAFB",
    category: "phones",
    image: "/img/products/sm-s931bdbiafb_brandpng",
    images: ["/img/products/sm-s931bdbiafb_brandpng"],
    price: 9499,
    oldPrice: null,
    discount: 0,
    rating: 4.7,
    reviews: 134,
    icon: "📱",
    color: "#1428a0",
    tags: [
      "samsung",
      "phones",
      "flagship"
    ],
    description: "6.2\" Galaxy S25 with 50+10+12MP/12MP cameras, 128GB+12GB, 4000mAh.",
    specs: {
      Screen: "6.2\"",
      Storage: "128GB",
      RAM: "12GB",
      Battery: "4000mAh",
      Camera: "50+10+12MP"
    }
  },
  {
    id: 434,
    name: "Samsung Galaxy S25 (256GB+12GB)",
    brand: "Samsung",
    brandId: "samsung",
    model: "SM-S931BDBOAFB",
    category: "phones",
    image: "/img/products/sm-s931bdboafb_brandpng",
    images: ["/img/products/sm-s931bdboafb_brandpng"],
    price: 10199,
    oldPrice: null,
    discount: 0,
    rating: 4.7,
    reviews: 118,
    icon: "📱",
    color: "#1428a0",
    tags: [
      "samsung",
      "phones",
      "flagship"
    ],
    description: "6.2\" Galaxy S25 with 50+10+12MP/12MP cameras, 256GB+12GB, 4000mAh.",
    specs: {
      Screen: "6.2\"",
      Storage: "256GB",
      RAM: "12GB",
      Battery: "4000mAh",
      Camera: "50+10+12MP"
    }
  },
  {
    id: 435,
    name: "Samsung Galaxy A37 (256GB+8GB)",
    brand: "Samsung",
    brandId: "samsung",
    model: "SM-A376BDGVAFB",
    category: "phones",
    image: "/img/products/sm-a376bdgvafb_brandpng",
    images: ["/img/products/sm-a376bdgvafb_brandpng"],
    price: 5399,
    oldPrice: null,
    discount: 0,
    rating: 4.4,
    reviews: 76,
    icon: "📱",
    color: "#1428a0",
    tags: [
      "samsung",
      "phones",
      "new-arrivals"
    ],
    badge: "new",
    description: "6.7\" Galaxy A37 with 50+8+5MP cameras, 256GB+8GB, 5000mAh battery.",
    specs: {
      Screen: "6.7\"",
      Storage: "256GB",
      RAM: "8GB",
      Battery: "5000mAh",
      Camera: "50MP Main"
    }
  },
  {
    id: 436,
    name: "Samsung Galaxy A57 (256GB+8GB)",
    brand: "Samsung",
    brandId: "samsung",
    model: "SM-A576BDBPAFB",
    category: "phones",
    image: "/img/products/sm-a576bdbpafb_brandpng",
    images: ["/img/products/sm-a576bdbpafb_brandpng"],
    price: 6199,
    oldPrice: null,
    discount: 0,
    rating: 4.5,
    reviews: 61,
    icon: "📱",
    color: "#1428a0",
    tags: [
      "samsung",
      "phones",
      "new-arrivals"
    ],
    badge: "new",
    description: "6.7\" Galaxy A57 with 50+12+5MP/32MP cameras, 256GB+8GB, 5000mAh.",
    specs: {
      Screen: "6.7\"",
      Storage: "256GB",
      RAM: "8GB",
      Battery: "5000mAh",
      Camera: "50MP+32MP Front"
    }
  },
  {
    id: 437,
    name: "Samsung Galaxy A56 5G (256GB+8GB)",
    brand: "Samsung",
    brandId: "samsung",
    model: "SM-A566BLIWAFB",
    category: "phones",
    image: "/img/products/sm-a566bliwafb_brandpng",
    images: ["/img/products/sm-a566bliwafb_brandpng"],
    price: 5199,
    oldPrice: null,
    discount: 0,
    rating: 4.5,
    reviews: 143,
    icon: "📱",
    color: "#1428a0",
    tags: [
      "samsung",
      "phones",
      "5g"
    ],
    description: "6.7\" Galaxy A56 5G with 50+12+5MP/32MP cameras, 256GB+8GB, 5000mAh.",
    specs: {
      Screen: "6.7\"",
      Storage: "256GB",
      RAM: "8GB",
      Battery: "5000mAh",
      Network: "5G"
    }
  },
  {
    id: 438,
    name: "Samsung Galaxy A56 5G (128GB+8GB)",
    brand: "Samsung",
    brandId: "samsung",
    model: "SM-A566BLIVAFB",
    category: "phones",
    image: "/img/products/sm-a566blivafb_brandpng",
    images: ["/img/products/sm-a566blivafb_brandpng"],
    price: 4899,
    oldPrice: null,
    discount: 0,
    rating: 4.4,
    reviews: 112,
    icon: "📱",
    color: "#1428a0",
    tags: [
      "samsung",
      "phones",
      "5g"
    ],
    description: "6.7\" Galaxy A56 5G with 50+12+5MP/32MP cameras, 128GB+8GB, 5000mAh.",
    specs: {
      Screen: "6.7\"",
      Storage: "128GB",
      RAM: "8GB",
      Battery: "5000mAh",
      Network: "5G"
    }
  },
  {
    id: 439,
    name: "Samsung Galaxy A36 5G (256GB+8GB)",
    brand: "Samsung",
    brandId: "samsung",
    model: "SM-A366BLGVAFB",
    category: "phones",
    image: "/img/products/sm-a366blgvafb_brandpng",
    images: ["/img/products/sm-a366blgvafb_brandpng"],
    price: 4499,
    oldPrice: null,
    discount: 0,
    rating: 4.4,
    reviews: 167,
    icon: "📱",
    color: "#1428a0",
    tags: [
      "samsung",
      "phones",
      "5g"
    ],
    description: "6.7\" Galaxy A36 5G with 50+8+5MP cameras, 256GB+8GB, 5000mAh.",
    specs: {
      Screen: "6.7\"",
      Storage: "256GB",
      RAM: "8GB",
      Battery: "5000mAh",
      Network: "5G"
    }
  },
  {
    id: 440,
    name: "Samsung Galaxy A26 5G (256GB+8GB)",
    brand: "Samsung",
    brandId: "samsung",
    model: "SM-A266BLGJAFB",
    category: "phones",
    image: "/img/products/sm-a266blgjafb_brandpng",
    images: ["/img/products/sm-a266blgjafb_brandpng"],
    price: 4199,
    oldPrice: null,
    discount: 0,
    rating: 4.3,
    reviews: 198,
    icon: "📱",
    color: "#1428a0",
    tags: [
      "samsung",
      "phones",
      "5g"
    ],
    description: "6.7\" Galaxy A26 5G with 50+8+2MP/13MP cameras, 256GB+8GB, 5000mAh.",
    specs: {
      Screen: "6.7\"",
      Storage: "256GB",
      RAM: "8GB",
      Battery: "5000mAh",
      Network: "5G"
    }
  },
  {
    id: 441,
    name: "Samsung Galaxy A26 5G (128GB+6GB)",
    brand: "Samsung",
    brandId: "samsung",
    model: "SM-A266BLGIAFB",
    category: "phones",
    image: "/img/products/sm-a266blgiafb_brandpng",
    images: ["/img/products/sm-a266blgiafb_brandpng"],
    price: 3199,
    oldPrice: null,
    discount: 0,
    rating: 4.2,
    reviews: 234,
    icon: "📱",
    color: "#1428a0",
    tags: [
      "samsung",
      "phones",
      "5g"
    ],
    description: "6.7\" Galaxy A26 5G with 50+8+2MP/13MP cameras, 128GB+6GB, 5000mAh.",
    specs: {
      Screen: "6.7\"",
      Storage: "128GB",
      RAM: "6GB",
      Battery: "5000mAh",
      Network: "5G"
    }
  },
  {
    id: 442,
    name: "Samsung Galaxy A17 (128GB+4GB)",
    brand: "Samsung",
    brandId: "samsung",
    model: "SM-A175FLBNAFB",
    category: "phones",
    image: "/img/products/sm-a175flbnafb_brandpng",
    images: ["/img/products/sm-a175flbnafb_brandpng"],
    price: 1959,
    oldPrice: null,
    discount: 0,
    rating: 4.1,
    reviews: 267,
    icon: "📱",
    color: "#1428a0",
    tags: [
      "samsung",
      "phones"
    ],
    description: "6.7\" Galaxy A17 with 50+5+2MP/13MP cameras, 128GB+4GB, 5000mAh.",
    specs: {
      Screen: "6.7\"",
      Storage: "128GB",
      RAM: "4GB",
      Battery: "5000mAh",
      Camera: "50MP Main"
    }
  },
  {
    id: 443,
    name: "Samsung Galaxy A17 (128GB+6GB)",
    brand: "Samsung",
    brandId: "samsung",
    model: "SM-A175FZACAFB",
    category: "phones",
    image: "/img/products/sm-a175fzacafb_brandpng",
    images: ["/img/products/sm-a175fzacafb_brandpng"],
    price: 2199,
    oldPrice: null,
    discount: 0,
    rating: 4.2,
    reviews: 198,
    icon: "📱",
    color: "#1428a0",
    tags: [
      "samsung",
      "phones"
    ],
    description: "6.7\" Galaxy A17 with 50+5+2MP/13MP cameras, 128GB+6GB, 5000mAh.",
    specs: {
      Screen: "6.7\"",
      Storage: "128GB",
      RAM: "6GB",
      Battery: "5000mAh",
      Camera: "50MP Main"
    }
  },
  {
    id: 444,
    name: "Samsung Galaxy A17 (256GB+8GB)",
    brand: "Samsung",
    brandId: "samsung",
    model: "SM-A175FZAOAFB",
    category: "phones",
    image: "/img/products/sm-a175fzaoafb_brandpng",
    images: ["/img/products/sm-a175fzaoafb_brandpng"],
    price: 2999,
    oldPrice: null,
    discount: 0,
    rating: 4.3,
    reviews: 156,
    icon: "📱",
    color: "#1428a0",
    tags: [
      "samsung",
      "phones"
    ],
    description: "6.7\" Galaxy A17 with 50+5+2MP/13MP cameras, 256GB+8GB, 5000mAh.",
    specs: {
      Screen: "6.7\"",
      Storage: "256GB",
      RAM: "8GB",
      Battery: "5000mAh",
      Camera: "50MP Main"
    }
  },
  {
    id: 445,
    name: "Samsung Galaxy A16 (128GB+4GB)",
    brand: "Samsung",
    brandId: "samsung",
    model: "SM-A165FZKDAFB",
    category: "phones",
    image: "/img/products/africa-en-galaxy-a16-sm-a165-sm-a165fzkiafb-544252058.jpg",
    images: ["/img/products/africa-en-galaxy-a16-sm-a165-sm-a165fzkiafb-544252058.jpg"],
    price: 1749,
    oldPrice: null,
    discount: 0,
    rating: 4.1,
    reviews: 312,
    icon: "📱",
    color: "#1428a0",
    tags: [
      "samsung",
      "phones"
    ],
    description: "6.7\" Galaxy A16 with 50+5+2MP/13MP cameras, 128GB+4GB, 5000mAh.",
    specs: {
      Screen: "6.7\"",
      Storage: "128GB",
      RAM: "4GB",
      Battery: "5000mAh",
      Camera: "50MP Main"
    }
  },
  {
    id: 446,
    name: "Samsung Galaxy A07 (64GB+4GB) with Adaptor",
    brand: "Samsung",
    brandId: "samsung",
    model: "SM-A075FZKJAFB",
    category: "phones",
    image: "/img/products/sm-a075fzkjafb_brandpng",
    images: ["/img/products/sm-a075fzkjafb_brandpng"],
    price: 1229,
    oldPrice: null,
    discount: 0,
    rating: 4,
    reviews: 345,
    icon: "📱",
    color: "#1428a0",
    tags: [
      "samsung",
      "phones"
    ],
    description: "6.7\" Galaxy A07 with 50MP main camera, 64GB+4GB, 5000mAh battery, includes USB adaptor.",
    specs: {
      Screen: "6.7\"",
      Storage: "64GB",
      RAM: "4GB",
      Battery: "5000mAh",
      Includes: "USB Adaptor"
    }
  },
  {
    id: 447,
    name: "Samsung Galaxy A07 (64GB+4GB)",
    brand: "Samsung",
    brandId: "samsung",
    model: "SM-A075FZKDAFB",
    category: "phones",
    image: "/img/products/sm-a075fzkdafb_brandpng",
    images: ["/img/products/sm-a075fzkdafb_brandpng"],
    price: 1199,
    oldPrice: null,
    discount: 0,
    rating: 4,
    reviews: 423,
    icon: "📱",
    color: "#1428a0",
    tags: [
      "samsung",
      "phones"
    ],
    description: "6.7\" Galaxy A07 with 50MP main camera, 64GB+4GB, 5000mAh battery.",
    specs: {
      Screen: "6.7\"",
      Storage: "64GB",
      RAM: "4GB",
      Battery: "5000mAh",
      Camera: "50MP Main"
    }
  },
  {
    id: 448,
    name: "Samsung Galaxy A07 (128GB+4GB)",
    brand: "Samsung",
    brandId: "samsung",
    model: "SM-A075FZKGAFB",
    category: "phones",
    image: "/img/products/sm-a075fzkgafb_brandpng",
    images: ["/img/products/sm-a075fzkgafb_brandpng"],
    price: 1429,
    oldPrice: null,
    discount: 0,
    rating: 4.1,
    reviews: 312,
    icon: "📱",
    color: "#1428a0",
    tags: [
      "samsung",
      "phones"
    ],
    description: "6.7\" Galaxy A07 with 50MP main camera, 128GB+4GB, 5000mAh battery.",
    specs: {
      Screen: "6.7\"",
      Storage: "128GB",
      RAM: "4GB",
      Battery: "5000mAh",
      Camera: "50MP Main"
    }
  },
  {
    id: 449,
    name: "Samsung Galaxy A07 (128GB+6GB)",
    brand: "Samsung",
    brandId: "samsung",
    model: "SM-A075FZKHAFB",
    category: "phones",
    image: "/img/products/sm-a075fzkhafb_brandpng",
    images: ["/img/products/sm-a075fzkhafb_brandpng"],
    price: 1699,
    oldPrice: null,
    discount: 0,
    rating: 4.1,
    reviews: 276,
    icon: "📱",
    color: "#1428a0",
    tags: [
      "samsung",
      "phones"
    ],
    description: "6.7\" Galaxy A07 with 50MP main camera, 128GB+6GB, 5000mAh battery.",
    specs: {
      Screen: "6.7\"",
      Storage: "128GB",
      RAM: "6GB",
      Battery: "5000mAh",
      Camera: "50MP Main"
    }
  },
  {
    id: 450,
    name: "Samsung Galaxy A06 (64GB+4GB)",
    brand: "Samsung",
    brandId: "samsung",
    model: "SM-A065FZKDAFB",
    category: "phones",
    image: "/img/products/sm-a065fzkdafb_brandpng",
    images: ["/img/products/sm-a065fzkdafb_brandpng"],
    price: 1059,
    oldPrice: null,
    discount: 0,
    rating: 3.9,
    reviews: 387,
    icon: "📱",
    color: "#1428a0",
    tags: [
      "samsung",
      "phones"
    ],
    description: "6.7\" Galaxy A06 with 50MP main camera, 64GB+4GB, 5000mAh battery.",
    specs: {
      Screen: "6.7\"",
      Storage: "64GB",
      RAM: "4GB",
      Battery: "5000mAh",
      Camera: "50MP Main"
    }
  },
  {
    id: 451,
    name: "Samsung Galaxy Watch 8 40MM",
    brand: "Samsung",
    brandId: "samsung",
    model: "SM-L320NDAAMEA",
    category: "phones",
    image: "/img/products/sm-l320ndaamea_brandpng",
    images: ["/img/products/sm-l320ndaamea_brandpng"],
    price: 4699,
    oldPrice: null,
    discount: 0,
    rating: 4.5,
    reviews: 87,
    icon: "📱",
    color: "#1428a0",
    tags: [
      "samsung",
      "wearable"
    ],
    description: "Galaxy Watch 8 40mm with 1.47\" display, 32GB+2GB, 435mAh. Health & fitness tracking.",
    specs: {
      Size: "40mm",
      Display: "1.47\"",
      Storage: "32GB",
      Battery: "435mAh"
    }
  },
  {
    id: 452,
    name: "Samsung Galaxy Watch 8 44MM",
    brand: "Samsung",
    brandId: "samsung",
    model: "SM-L330NDAAMEA",
    category: "phones",
    image: "/img/products/sm-l330ndaamea_brandpng",
    images: ["/img/products/sm-l330ndaamea_brandpng"],
    price: 5199,
    oldPrice: null,
    discount: 0,
    rating: 4.5,
    reviews: 76,
    icon: "📱",
    color: "#1428a0",
    tags: [
      "samsung",
      "wearable"
    ],
    description: "Galaxy Watch 8 44mm with 1.47\" display, 32GB+2GB, 435mAh. Advanced health monitoring.",
    specs: {
      Size: "44mm",
      Display: "1.47\"",
      Storage: "32GB",
      Battery: "435mAh"
    }
  },
  {
    id: 453,
    name: "Samsung Galaxy Watch 8 Classic 46MM",
    brand: "Samsung",
    brandId: "samsung",
    model: "SM-L500NZWAMEA",
    category: "phones",
    image: "/img/products/sm-l500nzwamea_brandpng",
    images: ["/img/products/sm-l500nzwamea_brandpng"],
    price: 6899,
    oldPrice: null,
    discount: 0,
    rating: 4.6,
    reviews: 54,
    icon: "📱",
    color: "#1428a0",
    tags: [
      "samsung",
      "wearable"
    ],
    description: "Galaxy Watch 8 Classic 46mm with 1.34\" display, 64GB+2GB, 445mAh. Premium classic design.",
    specs: {
      Size: "46mm",
      Display: "1.34\"",
      Storage: "64GB",
      Battery: "445mAh",
      Style: "Classic"
    }
  },
  {
    id: 454,
    name: "Samsung Galaxy Watch Ultra 47MM",
    brand: "Samsung",
    brandId: "samsung",
    model: "SM-L705FZA1XFA",
    category: "phones",
    image: "/img/products/sm-l705fza1xfa_brandpng",
    images: ["/img/products/sm-l705fza1xfa_brandpng"],
    price: 8999,
    oldPrice: null,
    discount: 0,
    rating: 4.7,
    reviews: 43,
    icon: "📱",
    color: "#1428a0",
    tags: [
      "samsung",
      "wearable"
    ],
    description: "Galaxy Watch Ultra 47mm, 1.50\" display, 32GB+2GB, 590mAh. Rugged design for active lifestyles.",
    specs: {
      Size: "47mm",
      Display: "1.50\"",
      Storage: "32GB",
      Battery: "590mAh",
      Build: "Ultra Rugged"
    }
  },
  {
    id: 455,
    name: "Samsung Galaxy Watch Ultra 47MM LTE",
    brand: "Samsung",
    brandId: "samsung",
    model: "SM-L705FZTAXFA",
    category: "phones",
    image: "/img/products/za-galaxy-watch-ultra-l705-sm-l705fdaaxfa-542170189.jpg",
    images: ["/img/products/za-galaxy-watch-ultra-l705-sm-l705fdaaxfa-542170189.jpg"],
    price: 8999,
    oldPrice: null,
    discount: 0,
    rating: 4.7,
    reviews: 38,
    icon: "📱",
    color: "#1428a0",
    tags: [
      "samsung",
      "wearable"
    ],
    description: "Galaxy Watch Ultra 47mm LTE, 1.50\" display, 32GB+2GB, 590mAh. Standalone LTE connectivity.",
    specs: {
      Size: "47mm",
      Display: "1.50\"",
      Storage: "32GB",
      Battery: "590mAh",
      Network: "LTE"
    }
  },
  {
    id: 456,
    name: "Samsung Galaxy Fit 3",
    brand: "Samsung",
    brandId: "samsung",
    model: "SM-R390NZSAMEA",
    category: "phones",
    image: "/img/products/africa-en-galaxy-zflip6-f741-513164-sm-f741blbeafb-542774622.jpg",
    images: ["/img/products/africa-en-galaxy-zflip6-f741-513164-sm-f741blbeafb-542774622.jpg"],
    price: 799,
    oldPrice: null,
    discount: 0,
    rating: 4.3,
    reviews: 189,
    icon: "📱",
    color: "#1428a0",
    tags: [
      "samsung",
      "wearable"
    ],
    description: "Slim Galaxy Fit 3 fitness band with BT 5.3, 4CM display, 16MB+256MB, 208mAh.",
    specs: {
      Type: "Fitness Band",
      Bluetooth: "5.3",
      Battery: "208mAh",
      Display: "4CM"
    }
  },
  {
    id: 457,
    name: "Samsung Galaxy Buds Core",
    brand: "Samsung",
    brandId: "samsung",
    model: "SM-R410NZKAMEA",
    category: "phones",
    image: "/img/products/sm-r410nzkamea_brandpng",
    images: ["/img/products/sm-r410nzkamea_brandpng"],
    price: 659,
    oldPrice: null,
    discount: 0,
    rating: 4.2,
    reviews: 234,
    icon: "📱",
    color: "#1428a0",
    tags: [
      "samsung",
      "audio"
    ],
    description: "Galaxy Buds Core with BT 5.4, 65mAh battery, real-time interpreter. Comfortable fit.",
    specs: {
      Bluetooth: "5.4",
      Battery: "65mAh",
      Feature: "Real-time Interpreter"
    }
  },
  {
    id: 458,
    name: "Samsung Galaxy Buds 3 FE",
    brand: "Samsung",
    brandId: "samsung",
    model: "SM-R420NZAAMEA",
    category: "phones",
    image: "/img/products/SM-R530NZWAMEA.jpg",
    images: ["/img/products/SM-R530NZWAMEA.jpg"],
    price: 1399,
    oldPrice: null,
    discount: 0,
    rating: 4.3,
    reviews: 167,
    icon: "📱",
    color: "#1428a0",
    tags: [
      "samsung",
      "audio"
    ],
    description: "Galaxy Buds 3 FE with ANC, up to 20 hours battery life (with case), IPX4 water resistance.",
    specs: {
      ANC: "Yes",
      "Battery (case)": "20 hours",
      "Water Resistance": "IPX4"
    }
  },
  {
    id: 459,
    name: "Samsung Galaxy Buds 3",
    brand: "Samsung",
    brandId: "samsung",
    model: "SM-R530NZAAMEA",
    category: "phones",
    image: "/img/products/sm-r530nzaamea_brandpng",
    images: ["/img/products/sm-r530nzaamea_brandpng"],
    price: 2029,
    oldPrice: null,
    discount: 0,
    rating: 4.4,
    reviews: 143,
    icon: "📱",
    color: "#1428a0",
    tags: [
      "samsung",
      "audio"
    ],
    description: "Galaxy Buds 3 with 1-way speaker, BT 5.4, up to 24 hours playtime with case.",
    specs: {
      Bluetooth: "5.4",
      "Total Playtime": "24 hours",
      Speaker: "1-way"
    }
  },
  {
    id: 460,
    name: "Samsung Galaxy Buds 3 Pro",
    brand: "Samsung",
    brandId: "samsung",
    model: "SM-R630NZAAMEA",
    category: "phones",
    image: "/img/products/sm-r630nzaamea_brandpng",
    images: ["/img/products/sm-r630nzaamea_brandpng"],
    price: 2899,
    oldPrice: null,
    discount: 0,
    rating: 4.6,
    reviews: 98,
    icon: "📱",
    color: "#1428a0",
    tags: [
      "samsung",
      "audio"
    ],
    description: "Galaxy Buds 3 Pro with 6-hour battery, BT 5.4, IP57 water resistance. Premium audio.",
    specs: {
      Bluetooth: "5.4",
      Battery: "6 hours",
      "Water Resistance": "IP57"
    }
  },
  {
    id: 461,
    name: "Samsung A07 Silicon Cover",
    brand: "Samsung",
    brandId: "samsung",
    model: "A07-SC",
    category: "phones",
    image: "/img/products/a07-sc_brandpng",
    images: ["/img/products/a07-sc_brandpng"],
    price: 99,
    oldPrice: null,
    discount: 0,
    rating: 4.1,
    reviews: 312,
    icon: "📱",
    color: "#1428a0",
    tags: [
      "samsung",
      "accessories"
    ],
    description: "Official Samsung Galaxy A07 silicone protective cover. Flexible and shock-absorbing.",
    specs: {
      Compatible: "Galaxy A07",
      Material: "Silicone",
      Type: "Back Cover"
    }
  },
  {
    id: 462,
    name: "Samsung A07 Screen Protector",
    brand: "Samsung",
    brandId: "samsung",
    model: "A07-SP",
    category: "phones",
    image: "/img/products/a07-sp_brandpng",
    images: ["/img/products/a07-sp_brandpng"],
    price: 10,
    oldPrice: null,
    discount: 0,
    rating: 4,
    reviews: 445,
    icon: "📱",
    color: "#1428a0",
    tags: [
      "samsung",
      "accessories"
    ],
    description: "Official Samsung Galaxy A07 screen protector. Crystal-clear tempered glass protection.",
    specs: {
      Compatible: "Galaxy A07",
      Type: "Screen Protector"
    }
  },
  {
    id: 463,
    name: "Samsung Fast Charger 45W (Type-C)",
    brand: "Samsung",
    brandId: "samsung",
    model: "EP-T4511XBEGAE",
    category: "phones",
    image: "/img/products/ep-t4511xbegae_brandpng",
    images: ["/img/products/ep-t4511xbegae_brandpng"],
    price: 449,
    oldPrice: null,
    discount: 0,
    rating: 4.5,
    reviews: 267,
    icon: "📱",
    color: "#1428a0",
    tags: [
      "samsung",
      "accessories"
    ],
    description: "Samsung 45W Type-C complete fast charger. Rapid charging for compatible Galaxy devices.",
    specs: {
      Wattage: "45W",
      Connector: "Type-C",
      Includes: "Cable + Head"
    }
  },
  {
    id: 464,
    name: "Samsung Fast Charger 25W (Type-C Head Only)",
    brand: "Samsung",
    brandId: "samsung",
    model: "EP-TA800NBEGWW",
    category: "phones",
    image: "/img/products/ep-ta800nbegww_brandpng",
    images: ["/img/products/ep-ta800nbegww_brandpng"],
    price: 299,
    oldPrice: null,
    discount: 0,
    rating: 4.4,
    reviews: 312,
    icon: "📱",
    color: "#1428a0",
    tags: [
      "samsung",
      "accessories"
    ],
    description: "Samsung 25W Type-C fast charger head only. Compact and travel-friendly.",
    specs: {
      Wattage: "25W",
      Connector: "Type-C",
      Includes: "Head Only"
    }
  },
  {
    id: 465,
    name: "Samsung Type-C to Type-C Cable",
    brand: "Samsung",
    brandId: "samsung",
    model: "EP-DA705BWE",
    category: "phones",
    image: "/img/products/ep-da705bwe_brandpng",
    images: ["/img/products/ep-da705bwe_brandpng"],
    price: 149,
    oldPrice: null,
    discount: 0,
    rating: 4.3,
    reviews: 389,
    icon: "📱",
    color: "#1428a0",
    tags: [
      "samsung",
      "accessories"
    ],
    description: "Official Samsung Type-C to Type-C data and fast-charging cable, White.",
    specs: {
      Type: "USB-C to USB-C",
      Color: "White",
      Use: "Data + Charging"
    }
  },
  {
    id: 466,
    name: "Samsung Video Wall 46\" (3.5mm Bezel)",
    brand: "Samsung",
    brandId: "samsung",
    model: "LH46VMBUBGBXUE",
    category: "commercial",
    image: "/img/products/lh46vmbubgbxue_brandpng",
    images: ["/img/products/lh46vmbubgbxue_brandpng"],
    price: 33299,
    oldPrice: null,
    discount: 0,
    rating: 4.6,
    reviews: 8,
    icon: "🖥️",
    color: "",
    tags: [
      "samsung",
      "commercial",
      "video-wall"
    ],
    description: "46\" Professional Video Wall screen with ultra-narrow 3.5mm bezel for seamless multi-screen installations.",
    specs: {
      Screen: "46\"",
      Bezel: "3.5mm",
      Type: "Video Wall",
      Use: "Commercial"
    }
  },
  {
    id: 467,
    name: "Samsung Video Wall 55\" 500nit (3.5mm Bezel)",
    brand: "Samsung",
    brandId: "samsung",
    model: "LH55VMBUBGBXEN",
    category: "commercial",
    image: "/img/products/lh55vmbubgbxen_brandpng",
    images: ["/img/products/lh55vmbubgbxen_brandpng"],
    price: 37299,
    oldPrice: null,
    discount: 0,
    rating: 4.7,
    reviews: 11,
    icon: "🖥️",
    color: "",
    tags: [
      "samsung",
      "commercial",
      "video-wall"
    ],
    description: "55\" Professional Video Wall screen, 500nit brightness, 3.5mm bezel. Ideal for control rooms and retail.",
    specs: {
      Screen: "55\"",
      Brightness: "500nit",
      Bezel: "3.5mm",
      Type: "Video Wall"
    }
  },
  {
    id: 468,
    name: "Samsung Video Wall 55\" 700nit (3.5mm Bezel)",
    brand: "Samsung",
    brandId: "samsung",
    model: "LH55UDEHLBB/NG",
    category: "commercial",
    image: "/img/products/lh55udehlbb_ng_brandpng",
    images: ["/img/products/lh55udehlbb_ng_brandpng"],
    price: 37299,
    oldPrice: null,
    discount: 0,
    rating: 4.7,
    reviews: 6,
    icon: "🖥️",
    color: "",
    tags: [
      "samsung",
      "commercial",
      "video-wall"
    ],
    description: "55\" Professional Video Wall screen, 700nit high-brightness, 3.5mm bezel for bright environments.",
    specs: {
      Screen: "55\"",
      Brightness: "700nit",
      Bezel: "3.5mm",
      Type: "Video Wall"
    }
  },
  {
    id: 469,
    name: "Samsung Video Wall 55\" Premium",
    brand: "Samsung",
    brandId: "samsung",
    model: "LH55VMCEBGBXUE",
    category: "commercial",
    image: "/img/products/lh55vmcebgbxue_brandpng",
    images: ["/img/products/lh55vmcebgbxue_brandpng"],
    price: 39999,
    oldPrice: null,
    discount: 0,
    rating: 4.7,
    reviews: 5,
    icon: "🖥️",
    color: "",
    tags: [
      "samsung",
      "commercial",
      "video-wall"
    ],
    description: "55\" Premium Professional Video Wall display. Superior image quality for demanding commercial environments.",
    specs: {
      Screen: "55\"",
      Bezel: "3.5mm",
      Type: "Video Wall",
      Grade: "Premium"
    }
  },
  {
    id: 470,
    name: "Samsung Interactive Display 13\" Touch",
    brand: "Samsung",
    brandId: "samsung",
    model: "LH13QBRTBGCXEN",
    category: "commercial",
    image: "/img/products/lh13qbrtbgcxen_brandpng",
    images: ["/img/products/lh13qbrtbgcxen_brandpng"],
    price: 13199,
    oldPrice: null,
    discount: 0,
    rating: 4.5,
    reviews: 7,
    icon: "🖥️",
    color: "",
    tags: [
      "samsung",
      "commercial",
      "interactive"
    ],
    description: "13\" standalone interactive touch display for reception desks, kiosks and digital signage.",
    specs: {
      Screen: "13\"",
      Touch: "Yes",
      Type: "Standalone Interactive",
      Use: "Indoor"
    }
  },
  {
    id: 471,
    name: "Samsung Interactive Display 55\" Touch",
    brand: "Samsung",
    brandId: "samsung",
    model: "LH55QMRTBGCXEN",
    category: "commercial",
    image: "/img/products/lh55qmrtbgcxen_brandpng",
    images: ["/img/products/lh55qmrtbgcxen_brandpng"],
    price: 33199,
    oldPrice: null,
    discount: 0,
    rating: 4.6,
    reviews: 9,
    icon: "🖥️",
    color: "",
    tags: [
      "samsung",
      "commercial",
      "interactive"
    ],
    description: "55\" large-format interactive touch display for conference rooms and digital signage.",
    specs: {
      Screen: "55\"",
      Touch: "Yes",
      Type: "Standalone Interactive",
      Use: "Indoor"
    }
  },
  {
    id: 472,
    name: "Samsung Flip Chart 55\" Interactive",
    brand: "Samsung",
    brandId: "samsung",
    model: "LH55WMBWBGCXUE",
    category: "commercial",
    image: "/img/products/lh55wmbwbgcxue_brandpng",
    images: ["/img/products/lh55wmbwbgcxue_brandpng"],
    price: 26599,
    oldPrice: null,
    discount: 0,
    rating: 4.7,
    reviews: 14,
    icon: "🖥️",
    color: "",
    tags: [
      "samsung",
      "commercial",
      "interactive"
    ],
    description: "55\" Samsung Flip interactive whiteboard. Replace paper flip charts with a digital, collaborative screen.",
    specs: {
      Screen: "55\"",
      Touch: "Yes",
      Type: "Flip Interactive Whiteboard"
    }
  },
  {
    id: 473,
    name: "Samsung Flip Chart 65\" Interactive",
    brand: "Samsung",
    brandId: "samsung",
    model: "LH65WMBWBGCXUE",
    category: "commercial",
    image: "/img/products/lh65wmbwbgcxue_brandpng",
    images: ["/img/products/lh65wmbwbgcxue_brandpng"],
    price: 33199,
    oldPrice: null,
    discount: 0,
    rating: 4.7,
    reviews: 10,
    icon: "🖥️",
    color: "",
    tags: [
      "samsung",
      "commercial",
      "interactive"
    ],
    description: "65\" Samsung Flip interactive whiteboard for boardrooms, training rooms and classrooms.",
    specs: {
      Screen: "65\"",
      Touch: "Yes",
      Type: "Flip Interactive Whiteboard"
    }
  },
  {
    id: 474,
    name: "Samsung Interactive Screen 75\" Flip",
    brand: "Samsung",
    brandId: "samsung",
    model: "LH75WMAWLGCXUE",
    category: "commercial",
    image: "/img/products/lh75wmawlgcxue_brandpng",
    images: ["/img/products/lh75wmawlgcxue_brandpng"],
    price: 57999,
    oldPrice: null,
    discount: 0,
    rating: 4.8,
    reviews: 7,
    icon: "🖥️",
    color: "",
    tags: [
      "samsung",
      "commercial",
      "interactive"
    ],
    description: "75\" large format interactive Flip screen for large conference rooms and auditoriums.",
    specs: {
      Screen: "75\"",
      Touch: "Yes",
      Type: "Flip Interactive"
    }
  },
  {
    id: 475,
    name: "Samsung Interactive Screen 85\" Flip",
    brand: "Samsung",
    brandId: "samsung",
    model: "LH85WMBWLGCXUE",
    category: "commercial",
    image: "/img/products/lh85wmbwlgcxue_brandpng",
    images: ["/img/products/lh85wmbwlgcxue_brandpng"],
    price: 74599,
    oldPrice: null,
    discount: 0,
    rating: 4.8,
    reviews: 4,
    icon: "🖥️",
    color: "",
    tags: [
      "samsung",
      "commercial",
      "interactive"
    ],
    description: "85\" premium large-format interactive Flip display for corporate and educational environments.",
    specs: {
      Screen: "85\"",
      Touch: "Yes",
      Type: "Flip Interactive"
    }
  },
  {
    id: 476,
    name: "Samsung Digital Signage 13\" Indoor",
    brand: "Samsung",
    brandId: "samsung",
    model: "LH13QBREBGCXEN",
    category: "commercial",
    image: "/img/products/lh13qbrebgcxen_brandpng",
    images: ["/img/products/lh13qbrebgcxen_brandpng"],
    price: 5399,
    oldPrice: null,
    discount: 0,
    rating: 4.4,
    reviews: 12,
    icon: "🖥️",
    color: "",
    tags: [
      "samsung",
      "commercial",
      "signage"
    ],
    description: "13\" compact indoor non-touch digital signage display for menus, wayfinding and promotions.",
    specs: {
      Screen: "13\"",
      Touch: "No",
      Type: "Digital Signage",
      Use: "Indoor"
    }
  },
  {
    id: 477,
    name: "Samsung Digital Signage 43\" Indoor",
    brand: "Samsung",
    brandId: "samsung",
    model: "LH43QMBEBGCXUE",
    category: "commercial",
    image: "/img/products/lh43qmbebgcxue_brandpng",
    images: ["/img/products/lh43qmbebgcxue_brandpng"],
    price: 13199,
    oldPrice: null,
    discount: 0,
    rating: 4.5,
    reviews: 15,
    icon: "🖥️",
    color: "",
    tags: [
      "samsung",
      "commercial",
      "signage"
    ],
    description: "43\" indoor non-touch digital signage for retail, hospitality and corporate environments.",
    specs: {
      Screen: "43\"",
      Touch: "No",
      Type: "Digital Signage",
      Use: "Indoor"
    }
  },
  {
    id: 478,
    name: "Samsung Digital Signage 49\" Indoor",
    brand: "Samsung",
    brandId: "samsung",
    model: "LH49QMREBGCXUE",
    category: "commercial",
    image: "/img/products/lh49qmrebgcxue_brandpng",
    images: ["/img/products/lh49qmrebgcxue_brandpng"],
    price: 11699,
    oldPrice: null,
    discount: 0,
    rating: 4.5,
    reviews: 9,
    icon: "🖥️",
    color: "",
    tags: [
      "samsung",
      "commercial",
      "signage"
    ],
    description: "49\" indoor non-touch display for professional digital signage installations.",
    specs: {
      Screen: "49\"",
      Touch: "No",
      Type: "Digital Signage",
      Use: "Indoor"
    }
  },
  {
    id: 479,
    name: "Samsung Digital Signage 50\" Indoor",
    brand: "Samsung",
    brandId: "samsung",
    model: "LH50QMBEBGCXUE",
    category: "commercial",
    image: "/img/products/lh50qmbebgcxue_brandpng",
    images: ["/img/products/lh50qmbebgcxue_brandpng"],
    price: 14199,
    oldPrice: null,
    discount: 0,
    rating: 4.5,
    reviews: 11,
    icon: "🖥️",
    color: "",
    tags: [
      "samsung",
      "commercial",
      "signage"
    ],
    description: "50\" indoor professional display with high brightness for all-day commercial use.",
    specs: {
      Screen: "50\"",
      Touch: "No",
      Type: "Digital Signage",
      Use: "Indoor"
    }
  },
  {
    id: 480,
    name: "Samsung Digital Signage 55\" Indoor",
    brand: "Samsung",
    brandId: "samsung",
    model: "LH55MEB",
    category: "commercial",
    image: "/img/products/lh55meb_brandpng",
    images: ["/img/products/lh55meb_brandpng"],
    price: 16599,
    oldPrice: null,
    discount: 0,
    rating: 4.5,
    reviews: 18,
    icon: "🖥️",
    color: "",
    tags: [
      "samsung",
      "commercial",
      "signage"
    ],
    description: "55\" indoor non-touch professional signage display. Perfect for retail, lobbies and waiting areas.",
    specs: {
      Screen: "55\"",
      Touch: "No",
      Type: "Digital Signage",
      Use: "Indoor"
    }
  },
  {
    id: 481,
    name: "Samsung Digital Signage 55\" Full Outdoor",
    brand: "Samsung",
    brandId: "samsung",
    model: "LH55OHFPVBC/UE",
    category: "commercial",
    image: "/img/products/lh55ohfpvbc_ue_brandpng",
    images: ["/img/products/lh55ohfpvbc_ue_brandpng"],
    price: 66299,
    oldPrice: null,
    discount: 0,
    rating: 4.8,
    reviews: 5,
    icon: "🖥️",
    color: "",
    tags: [
      "samsung",
      "commercial",
      "signage"
    ],
    description: "55\" fully weatherproof outdoor digital signage. IP-rated for direct sun and rain exposure.",
    specs: {
      Screen: "55\"",
      Touch: "No",
      Type: "Digital Signage",
      Use: "Full Outdoor",
      "IP Rating": "Yes"
    }
  },
  {
    id: 482,
    name: "Samsung Digital Signage 65\" Non-Touch",
    brand: "Samsung",
    brandId: "samsung",
    model: "LH65QBBEBGCXUE",
    category: "commercial",
    image: "/img/products/lh65qbbebgcxue_brandpng",
    images: ["/img/products/lh65qbbebgcxue_brandpng"],
    price: 30099,
    oldPrice: null,
    discount: 0,
    rating: 4.6,
    reviews: 9,
    icon: "🖥️",
    color: "",
    tags: [
      "samsung",
      "commercial",
      "signage"
    ],
    description: "65\" large-format indoor digital signage for high-impact visual communications.",
    specs: {
      Screen: "65\"",
      Touch: "No",
      Type: "Digital Signage",
      Use: "Indoor"
    }
  },
  {
    id: 483,
    name: "Samsung Digital Signage 65\" 24/7 Non-Touch",
    brand: "Samsung",
    brandId: "samsung",
    model: "LH65MDCPLG",
    category: "commercial",
    image: "/img/products/lh65mdcplg_brandpng",
    images: ["/img/products/lh65mdcplg_brandpng"],
    price: 52299,
    oldPrice: null,
    discount: 0,
    rating: 4.7,
    reviews: 6,
    icon: "🖥️",
    color: "",
    tags: [
      "samsung",
      "commercial",
      "signage"
    ],
    description: "65\" 24/7 rated commercial display, engineered for round-the-clock operation.",
    specs: {
      Screen: "65\"",
      Operation: "24/7",
      Touch: "No",
      Type: "Digital Signage"
    }
  },
  {
    id: 484,
    name: "Samsung Digital Signage 75\" 16/7",
    brand: "Samsung",
    brandId: "samsung",
    model: "LH75QBBEBGCXUE",
    category: "commercial",
    image: "/img/products/lh75qbbebgcxue_brandpng",
    images: ["/img/products/lh75qbbebgcxue_brandpng"],
    price: 41899,
    oldPrice: null,
    discount: 0,
    rating: 4.7,
    reviews: 7,
    icon: "🖥️",
    color: "",
    tags: [
      "samsung",
      "commercial",
      "signage"
    ],
    description: "75\" high-performance indoor commercial display rated for 16-hour daily operation.",
    specs: {
      Screen: "75\"",
      Operation: "16/7",
      Touch: "No",
      Type: "Digital Signage"
    }
  },
  {
    id: 485,
    name: "Samsung Digital Signage 75\" 24/7",
    brand: "Samsung",
    brandId: "samsung",
    model: "LH75QMRABGCXUE",
    category: "commercial",
    image: "/img/products/lh75qmrabgcxue_brandpng",
    images: ["/img/products/lh75qmrabgcxue_brandpng"],
    price: 52299,
    oldPrice: null,
    discount: 0,
    rating: 4.7,
    reviews: 5,
    icon: "🖥️",
    color: "",
    tags: [
      "samsung",
      "commercial",
      "signage"
    ],
    description: "75\" 24/7 commercial display for uninterrupted round-the-clock digital signage.",
    specs: {
      Screen: "75\"",
      Operation: "24/7",
      Touch: "No",
      Type: "Digital Signage"
    }
  },
  {
    id: 486,
    name: "Samsung Digital Signage 75\" 24/7 (Series B)",
    brand: "Samsung",
    brandId: "samsung",
    model: "LH75QMREBGCXUE",
    category: "commercial",
    image: "/img/products/lh75qmrebgcxue_brandpng",
    images: ["/img/products/lh75qmrebgcxue_brandpng"],
    price: 37299,
    oldPrice: null,
    discount: 0,
    rating: 4.6,
    reviews: 6,
    icon: "🖥️",
    color: "",
    tags: [
      "samsung",
      "commercial",
      "signage"
    ],
    description: "75\" 24/7 rated commercial signage display, Series B — cost-effective continuous operation.",
    specs: {
      Screen: "75\"",
      Operation: "24/7",
      Touch: "No",
      Series: "B"
    }
  },
  {
    id: 487,
    name: "Samsung Digital Signage 85\" 16/7",
    brand: "Samsung",
    brandId: "samsung",
    model: "LH85QBRBBGCXUE",
    category: "commercial",
    image: "/img/products/lh85qbrbbgcxue_brandpng",
    images: ["/img/products/lh85qbrbbgcxue_brandpng"],
    price: 57999,
    oldPrice: null,
    discount: 0,
    rating: 4.8,
    reviews: 4,
    icon: "🖥️",
    color: "",
    tags: [
      "samsung",
      "commercial",
      "signage"
    ],
    description: "85\" flagship large-format commercial display for prominent boardrooms and large venues.",
    specs: {
      Screen: "85\"",
      Operation: "16/7",
      Touch: "No",
      Type: "Digital Signage"
    }
  },
  {
    id: 488,
    name: "Samsung Digital Signage 85\" 24/7",
    brand: "Samsung",
    brandId: "samsung",
    model: "LH85QMNEBGC/UE",
    category: "commercial",
    image: "/img/products/lh85qmnebgc_ue_brandpng",
    images: ["/img/products/lh85qmnebgc_ue_brandpng"],
    price: 69999,
    oldPrice: null,
    discount: 0,
    rating: 4.8,
    reviews: 3,
    icon: "🖥️",
    color: "",
    tags: [
      "samsung",
      "commercial",
      "signage"
    ],
    description: "85\" 24/7 premium commercial display. The ultimate in large-format continuous signage.",
    specs: {
      Screen: "85\"",
      Operation: "24/7",
      Touch: "No",
      Type: "Digital Signage"
    }
  },
  {
    id: 489,
    name: "Samsung Hospitality Smart UHD TV 43\"",
    brand: "Samsung",
    brandId: "samsung",
    model: "HG43AU800EEXEN",
    category: "commercial",
    image: "/img/products/hg43au800eexen_brandpng",
    images: ["/img/products/hg43au800eexen_brandpng"],
    price: 13399,
    oldPrice: null,
    discount: 0,
    rating: 4.6,
    reviews: 14,
    icon: "📺",
    color: "",
    tags: [
      "samsung",
      "commercial",
      "hospitality"
    ],
    description: "43\" Samsung Hospitality Smart UHD TV designed for hotels and serviced apartments.",
    specs: {
      Screen: "43\"",
      Resolution: "4K UHD",
      Smart: "Yes",
      Type: "Hospitality TV"
    }
  },
  {
    id: 490,
    name: "Samsung Hospitality Smart UHD TV 50\"",
    brand: "Samsung",
    brandId: "samsung",
    model: "HG50BU800AUXUE",
    category: "commercial",
    image: "/img/products/hg50bu800auxue_brandpng",
    images: ["/img/products/hg50bu800auxue_brandpng"],
    price: 14999,
    oldPrice: null,
    discount: 0,
    rating: 4.6,
    reviews: 11,
    icon: "📺",
    color: "",
    tags: [
      "samsung",
      "commercial",
      "hospitality"
    ],
    description: "50\" Samsung Hospitality Smart UHD TV for hotels with premium guest experience features.",
    specs: {
      Screen: "50\"",
      Resolution: "4K UHD",
      Smart: "Yes",
      Type: "Hospitality TV"
    }
  },
  {
    id: 491,
    name: "Samsung Hospitality Smart UHD TV 55\"",
    brand: "Samsung",
    brandId: "samsung",
    model: "HG55AU800AUXUE",
    category: "commercial",
    image: "/img/products/hg55au800auxue_brandpng",
    images: ["/img/products/hg55au800auxue_brandpng"],
    price: 15799,
    oldPrice: null,
    discount: 0,
    rating: 4.7,
    reviews: 16,
    icon: "📺",
    color: "",
    tags: [
      "samsung",
      "commercial",
      "hospitality"
    ],
    description: "55\" Samsung Hospitality Smart UHD TV. Elevate the in-room experience for your guests.",
    specs: {
      Screen: "55\"",
      Resolution: "4K UHD",
      Smart: "Yes",
      Type: "Hospitality TV"
    }
  },
  {
    id: 492,
    name: "Samsung Hospitality Smart UHD TV 65\"",
    brand: "Samsung",
    brandId: "samsung",
    model: "HG65AU800AUXUE",
    category: "commercial",
    image: "/img/products/hg65au800auxue_brandpng",
    images: ["/img/products/hg65au800auxue_brandpng"],
    price: 19099,
    oldPrice: null,
    discount: 0,
    rating: 4.7,
    reviews: 9,
    icon: "📺",
    color: "",
    tags: [
      "samsung",
      "commercial",
      "hospitality"
    ],
    description: "65\" Samsung Hospitality Smart UHD TV for suites and luxury hotel rooms.",
    specs: {
      Screen: "65\"",
      Resolution: "4K UHD",
      Smart: "Yes",
      Type: "Hospitality TV"
    }
  },
  {
    id: 493,
    name: "Samsung Hospitality Smart UHD TV 75\"",
    brand: "Samsung",
    brandId: "samsung",
    model: "HG75BU800AUXUE",
    category: "commercial",
    image: null,
    images: ["/img/products/SAMSUNG-75″-QN800A-NEO-QLED-8K-SMART-TV-2021.png"],
    price: 20699,
    oldPrice: null,
    discount: 0,
    rating: 4.8,
    reviews: 6,
    icon: "📺",
    color: "",
    tags: [
      "samsung",
      "commercial",
      "hospitality"
    ],
    description: "75\" Samsung Hospitality Smart UHD TV for premium suites and conference spaces.",
    specs: {
      Screen: "75\"",
      Resolution: "4K UHD",
      Smart: "Yes",
      Type: "Hospitality TV"
    }
  },
  {
    id: 494,
    name: "Alcatel A31 (64GB)",
    brand: "Alcatel",
    brandId: "alcatel",
    model: "ALCATEL-A31",
    category: "phones",
    image: null,
    images: [],
    price: 1099,
    oldPrice: null,
    discount: 0,
    rating: 4,
    reviews: 187,
    icon: "📱",
    color: "",
    tags: [
      "alcatel",
      "phones"
    ],
    description: "6.5\" Alcatel A31 smartphone with essential features and reliable performance for everyday use.",
    specs: {
      Screen: "6.5\"",
      Storage: "64GB",
      Battery: "5000mAh"
    }
  },
  {
    id: 495,
    name: "TCL 503",
    brand: "TCL",
    brandId: "tcl",
    model: "TCL-503",
    category: "phones",
    image: null,
    images: ["/img/products/TCL-503-Front.png", "/img/products/TCL-43S5400A.webp", "/img/products/tcl-85c645.webp"],
    price: 1199,
    oldPrice: null,
    discount: 0,
    rating: 4,
    reviews: 143,
    icon: "📱",
    color: "",
    tags: [
      "tcl",
      "phones"
    ],
    description: "6.6\" TCL 503 smartphone with large display and long-lasting battery for daily use.",
    specs: {
      Screen: "6.6\"",
      Type: "Smartphone",
      Battery: "5000mAh"
    }
  },
  {
    id: 496,
    name: "TCL 605 (128GB)",
    brand: "TCL",
    brandId: "tcl",
    model: "TCL-605",
    category: "phones",
    image: null,
    images: ["/img/products/TCL-43S5400A.webp", "/img/products/tcl-85c645.webp"],
    price: 1599,
    oldPrice: null,
    discount: 0,
    rating: 4.1,
    reviews: 112,
    icon: "📱",
    color: "",
    tags: [
      "tcl",
      "phones"
    ],
    description: "6.7\" TCL 605 with 128GB storage, designed for multimedia and productivity.",
    specs: {
      Screen: "6.7\"",
      Storage: "128GB",
      Type: "Smartphone"
    }
  },
  {
    id: 497,
    name: "TCL 60SE Nxtpaper 5G",
    brand: "TCL",
    brandId: "tcl",
    model: "TCL-60SENXTPAPER-5G",
    category: "phones",
    image: null,
    images: [],
    price: 3499,
    oldPrice: null,
    discount: 0,
    rating: 4.3,
    reviews: 67,
    icon: "📱",
    color: "",
    tags: [
      "tcl",
      "phones",
      "5g"
    ],
    description: "6.7\" TCL 60SE with revolutionary Nxtpaper eye-care display technology and 5G connectivity.",
    specs: {
      Screen: "6.7\"",
      Network: "5G",
      Display: "Nxtpaper Eye-Care",
      Storage: "128GB"
    }
  },
  {
    id: 498,
    name: "TCL Tab 10L Gen 4 (64GB)",
    brand: "TCL",
    brandId: "tcl",
    model: "TCL-TAB10L-GEN4",
    category: "phones",
    image: null,
    images: [],
    price: 1999,
    oldPrice: null,
    discount: 0,
    rating: 4.1,
    reviews: 98,
    icon: "📱",
    color: "",
    tags: [
      "tcl",
      "tablet"
    ],
    description: "10\" TCL Tab 10L Gen 4 with 64GB storage and case included. Reliable budget tablet.",
    specs: {
      Screen: "10\"",
      Storage: "64GB",
      Includes: "Case",
      Type: "Tablet"
    }
  },
  {
    id: 499,
    name: "TCL Tab 11 FE LTE",
    brand: "TCL",
    brandId: "tcl",
    model: "TCL-TAB11/FE-LTE",
    category: "phones",
    image: null,
    images: [],
    price: 2699,
    oldPrice: null,
    discount: 0,
    rating: 4.2,
    reviews: 76,
    icon: "📱",
    color: "",
    tags: [
      "tcl",
      "tablet"
    ],
    description: "11\" TCL Tab 11 FE with LTE connectivity for on-the-go productivity and entertainment.",
    specs: {
      Screen: "11\"",
      Network: "LTE",
      Type: "Tablet"
    }
  },
  {
    id: 500,
    name: "Midea Extension Board 3-Socket 2M Cable",
    brand: "Midea",
    brandId: "midea",
    model: "MDL-3K3B-2M-U",
    category: "small",
    image: null,
    images: [],
    price: 135,
    oldPrice: null,
    discount: 0,
    rating: 4.2,
    reviews: 234,
    icon: "🔌",
    color: "",
    tags: [
      "midea",
      "accessories",
      "extension"
    ],
    description: "16A extension board with 3 sockets and 2-metre cable. Surge-protected for home and office use.",
    specs: {
      Sockets: "3",
      "Cable Length": "2M",
      Amperage: "16A",
      "Surge Protection": "Yes"
    }
  },
  {
    id: 501,
    name: "Midea Extension Board 3-Socket 5M Cable",
    brand: "Midea",
    brandId: "midea",
    model: "MDL-3K3B-5M-U",
    category: "small",
    image: null,
    images: [],
    price: 200,
    oldPrice: null,
    discount: 0,
    rating: 4.2,
    reviews: 198,
    icon: "🔌",
    color: "",
    tags: [
      "midea",
      "accessories",
      "extension"
    ],
    description: "16A extension board with 3 sockets and 5-metre cable for flexible reach.",
    specs: {
      Sockets: "3",
      "Cable Length": "5M",
      Amperage: "16A"
    }
  },
  {
    id: 502,
    name: "Midea Extension Board 5-Socket 2M Cable",
    brand: "Midea",
    brandId: "midea",
    model: "MDL-5K5B-2M-U",
    category: "small",
    image: null,
    images: [],
    price: 155,
    oldPrice: null,
    discount: 0,
    rating: 4.3,
    reviews: 267,
    icon: "🔌",
    color: "",
    tags: [
      "midea",
      "accessories",
      "extension"
    ],
    description: "16A extension board with 5 sockets and 2-metre cable. More outlets for busy workspaces.",
    specs: {
      Sockets: "5",
      "Cable Length": "2M",
      Amperage: "16A"
    }
  },
  {
    id: 503,
    name: "Midea Extension Board 5-Socket 5M Cable",
    brand: "Midea",
    brandId: "midea",
    model: "MDL-5K5B-5M-U",
    category: "small",
    image: null,
    images: [],
    price: 220,
    oldPrice: null,
    discount: 0,
    rating: 4.3,
    reviews: 189,
    icon: "🔌",
    color: "",
    tags: [
      "midea",
      "accessories",
      "extension"
    ],
    description: "16A extension board with 5 sockets and 5-metre cable for maximum flexibility.",
    specs: {
      Sockets: "5",
      "Cable Length": "5M",
      Amperage: "16A"
    }
  },
  {
    id: 504,
    name: "Midea Extension Board 3-Socket + USB-C 2M",
    brand: "Midea",
    brandId: "midea",
    model: "MDL-4K3B2U1C-2M-U",
    category: "small",
    image: null,
    images: [],
    price: 190,
    oldPrice: null,
    discount: 0,
    rating: 4.4,
    reviews: 156,
    icon: "🔌",
    color: "",
    tags: [
      "midea",
      "accessories",
      "extension"
    ],
    description: "16A extension board with 3 sockets, USB-A ports and USB-C port. 2-metre cable.",
    specs: {
      Sockets: "3",
      "USB-C": "Yes",
      "Cable Length": "2M",
      Amperage: "16A"
    }
  },
  {
    id: 505,
    name: "Midea Extension Board 3-Socket + USB-C 5M",
    brand: "Midea",
    brandId: "midea",
    model: "MDL-4K3B2U1C-5M-U",
    category: "small",
    image: null,
    images: [],
    price: 260,
    oldPrice: null,
    discount: 0,
    rating: 4.4,
    reviews: 134,
    icon: "🔌",
    color: "",
    tags: [
      "midea",
      "accessories",
      "extension"
    ],
    description: "16A extension board with 3 sockets, USB ports and USB-C. 5-metre cable.",
    specs: {
      Sockets: "3",
      "USB-C": "Yes",
      "Cable Length": "5M",
      Amperage: "16A"
    }
  },
  {
    id: 506,
    name: "Midea Extension Board 4-Socket + USB-C 2M",
    brand: "Midea",
    brandId: "midea",
    model: "MDL-5K4B2U1C-2M-U",
    category: "small",
    image: null,
    images: [],
    price: 200,
    oldPrice: null,
    discount: 0,
    rating: 4.5,
    reviews: 112,
    icon: "🔌",
    color: "",
    tags: [
      "midea",
      "accessories",
      "extension"
    ],
    description: "16A extension board with 4 sockets, 2 USB-A and 1 USB-C port. 2-metre cable.",
    specs: {
      Sockets: "4",
      "USB-C": "Yes",
      "Cable Length": "2M",
      Amperage: "16A"
    }
  },
  {
    id: 507,
    name: "Midea Extension Board 4-Socket + USB-C 5M",
    brand: "Midea",
    brandId: "midea",
    model: "MDL-5K4B2U1C-5M-U",
    category: "small",
    image: null,
    images: [],
    price: 270,
    oldPrice: null,
    discount: 0,
    rating: 4.5,
    reviews: 98,
    icon: "🔌",
    color: "",
    tags: [
      "midea",
      "accessories",
      "extension"
    ],
    description: "16A extension board with 4 sockets, 2 USB-A and 1 USB-C port. 5-metre cable.",
    specs: {
      Sockets: "4",
      "USB-C": "Yes",
      "Cable Length": "5M",
      Amperage: "16A"
    }
  },
  {
    id: 508,
    name: "TV Wall Bracket 32\"-63\" Fixed",
    brand: "NASCO",
    brandId: "nasco",
    model: "MCR-Y3260",
    category: "tv",
    image: null,
    images: [],
    price: 99,
    oldPrice: null,
    discount: 0,
    rating: 4.3,
    reviews: 312,
    icon: "📌",
    color: "",
    tags: [
      "nasco",
      "accessories",
      "wall-bracket"
    ],
    description: "Fixed flat TV wall bracket. Fits 32\"-63\" screens. VESA 400×400mm, holds up to 45kg.",
    specs: {
      Fits: "32\"-63\"",
      VESA: "400×400mm",
      Load: "45kg",
      "Distance to Wall": "28mm",
      Type: "Fixed"
    }
  },
  {
    id: 509,
    name: "TV Wall Bracket 40\"-80\" Fixed",
    brand: "NASCO",
    brandId: "nasco",
    model: "MCR-Y4080",
    category: "tv",
    image: null,
    images: [],
    price: 199,
    oldPrice: null,
    discount: 0,
    rating: 4.3,
    reviews: 178,
    icon: "📌",
    color: "",
    tags: [
      "nasco",
      "accessories",
      "wall-bracket"
    ],
    description: "Fixed flat TV wall bracket for large screens 40\"-80\". VESA 600×500mm, holds up to 35kg.",
    specs: {
      Fits: "40\"-80\"",
      VESA: "600×500mm",
      Load: "35kg",
      "Distance to Wall": "28mm",
      Type: "Fixed"
    }
  },
  {
    id: 510,
    name: "TV Wall Bracket 32\"-70\" Tilt",
    brand: "NASCO",
    brandId: "nasco",
    model: "MCR-WG09",
    category: "tv",
    image: null,
    images: [],
    price: 189,
    oldPrice: null,
    discount: 0,
    rating: 4.4,
    reviews: 234,
    icon: "📌",
    color: "",
    tags: [
      "nasco",
      "accessories",
      "wall-bracket"
    ],
    description: "Tilt TV wall bracket (0-15° tilt) for 32\"-70\" screens. VESA 600×400mm, holds 40kg.",
    specs: {
      Fits: "32\"-70\"",
      VESA: "600×400mm",
      Load: "40kg",
      Tilt: "0-15°",
      Type: "Tilt"
    }
  },
  {
    id: 511,
    name: "TV Wall Bracket 26\"-55\" Full Motion",
    brand: "NASCO",
    brandId: "nasco",
    model: "MCR-500",
    category: "tv",
    image: null,
    images: [],
    price: 399,
    oldPrice: null,
    discount: 0,
    rating: 4.5,
    reviews: 389,
    icon: "📌",
    color: "",
    tags: [
      "nasco",
      "accessories",
      "wall-bracket"
    ],
    description: "Full motion articulating bracket for 26\"-55\" TVs. Extends up to 450mm, tilts and swivels 90°.",
    specs: {
      Fits: "26\"-55\"",
      VESA: "400×400mm",
      Load: "35kg",
      Tilt: "0-15°",
      Swivel: "±90°",
      Type: "Full Motion"
    }
  },
  {
    id: 512,
    name: "TV Wall Bracket 32\"-70\" Full Motion Heavy Duty",
    brand: "NASCO",
    brandId: "nasco",
    model: "NS-P800",
    category: "tv",
    image: null,
    images: [],
    price: 999,
    oldPrice: null,
    discount: 0,
    rating: 4.6,
    reviews: 198,
    icon: "📌",
    color: "",
    tags: [
      "nasco",
      "accessories",
      "wall-bracket"
    ],
    description: "Heavy-duty full motion bracket for 32\"-70\" screens. 45kg capacity, tilts and swivels 65°.",
    specs: {
      Fits: "32\"-70\"",
      VESA: "600×400mm",
      Load: "45kg",
      Tilt: "±15°",
      Swivel: "±65°",
      Type: "Full Motion"
    }
  },
  {
    id: 513,
    name: "TV Wall Bracket 32\"-65\" 360° Swivel",
    brand: "NASCO",
    brandId: "nasco",
    model: "MCR-1500",
    category: "tv",
    image: null,
    images: [],
    price: 1199,
    oldPrice: null,
    discount: 0,
    rating: 4.6,
    reviews: 143,
    icon: "📌",
    color: "",
    tags: [
      "nasco",
      "accessories",
      "wall-bracket"
    ],
    description: "Full motion bracket with 360° swivel and 15° tilt for 32\"-65\" screens. Holds 65kg.",
    specs: {
      Fits: "32\"-65\"",
      VESA: "600×400mm",
      Load: "65kg",
      Tilt: "±15°",
      Swivel: "360°",
      Type: "Full Motion"
    }
  },
  {
    id: 514,
    name: "TV Wall Bracket 50\"-80\" 360° Heavy Duty",
    brand: "NASCO",
    brandId: "nasco",
    model: "MCR-1800",
    category: "tv",
    image: null,
    images: [],
    price: 1999,
    oldPrice: null,
    discount: 0,
    rating: 4.7,
    reviews: 87,
    icon: "📌",
    color: "",
    tags: [
      "nasco",
      "accessories",
      "wall-bracket"
    ],
    description: "Extra heavy-duty 360° swivel bracket for large 50\"-80\" TVs. Supports 150kg.",
    specs: {
      Fits: "50\"-80\"",
      VESA: "900×600mm",
      Load: "150kg",
      Swivel: "360°",
      Type: "Heavy Duty"
    }
  },
  {
    id: 515,
    name: "TV Wall Bracket 60\"-100\" Commercial Grade",
    brand: "NASCO",
    brandId: "nasco",
    model: "MCR-2100",
    category: "tv",
    image: null,
    images: [],
    price: 3299,
    oldPrice: null,
    discount: 0,
    rating: 4.7,
    reviews: 43,
    icon: "📌",
    color: "",
    tags: [
      "nasco",
      "accessories",
      "wall-bracket"
    ],
    description: "Commercial-grade 360° swivel bracket for very large 60\"-100\" screens. Supports 200kg.",
    specs: {
      Fits: "60\"-100\"",
      VESA: "1200×650mm",
      Load: "200kg",
      Swivel: "360°",
      Type: "Commercial"
    }
  },
  {
    id: 516,
    name: "TV Wall Bracket 32\"-75\" 360° Premium",
    brand: "NASCO",
    brandId: "nasco",
    model: "MCR-AVA1500",
    category: "tv",
    image: null,
    images: [],
    price: 1499,
    oldPrice: null,
    discount: 0,
    rating: 4.7,
    reviews: 112,
    icon: "📌",
    color: "",
    tags: [
      "nasco",
      "accessories",
      "wall-bracket"
    ],
    description: "Premium 360° full-motion bracket for 32\"-75\" TVs. Holds 120kg with smooth articulation.",
    specs: {
      Fits: "32\"-75\"",
      VESA: "600×400mm",
      Load: "120kg",
      Swivel: "360°",
      Type: "Premium Full Motion"
    }
  },
  {
    id: 517,
    name: "TV Wall Bracket 55\"-100\" 360° Ultra Heavy",
    brand: "NASCO",
    brandId: "nasco",
    model: "MCR-R9",
    category: "tv",
    image: null,
    images: [],
    price: 2399,
    oldPrice: null,
    discount: 0,
    rating: 4.8,
    reviews: 67,
    icon: "📌",
    color: "",
    tags: [
      "nasco",
      "accessories",
      "wall-bracket"
    ],
    description: "Ultra heavy-duty 360° bracket for 55\"-100\" commercial screens. Supports 120kg.",
    specs: {
      Fits: "55\"-100\"",
      VESA: "900×600mm",
      Load: "120kg",
      Swivel: "360°",
      Type: "Ultra Heavy Duty"
    }
  },
  {
    id: 518,
    name: "TCL 1.5HP Split ON/OFF Air Condition",
    brand: "Midea",
    brandId: "midea",
    model: "TCL-SPLIT-ON_OFF-R32-GAS-SILVER-TAC-18CSD_ZG11-FRONT",
    category: "ac",
    image: null,
    images: ["/img/products/MIDEA-1.5HP-R410-SPLIT-AIR-CONDITIONER1.jpg"],
    price: 3499,
    rating: 4.4,
    reviews: 74,
    icon: "❄️",
    tags: [
      "midea",
      "ac"
    ],
    description: "1.5HP · R32 Gas · Energy Saving · 220V/50HZ · Energy Saving · Gentle Breeze · Eco-friendly · QuadruPuri Filters",
    badge: "new"
  },
  {
    id: 519,
    name: "Nasco 20L Solo Microwave",
    brand: "NASCO",
    brandId: "nasco",
    model: "MWO20NAS-2LVB",
    category: "kitchen",
    image: "/img/products/MWO20NAS-2LVB.png",
    images: ["/img/products/MWO20NAS-2LVB.png"],
    price: 679,
    rating: 4.4,
    reviews: 88,
    icon: "🍳",
    tags: [
      "nasco",
      "kitchen"
    ],
    description: "20Liters · 700 Watt · Speedy Cooking · 5 Power Levels · Black · Interior lighting",
    badge: "new"
  },
  {
    id: 520,
    name: "TCL 2.0HP Split ON/OFF Air Condition",
    brand: "TCL",
    brandId: "tcl",
    model: "TCL-SPLIT-ON_OFF-R32-GAS-SILVER-TAC-18CSD_ZG11-FRONT",
    category: "ac",
    image: "/img/products/TCL-SPLIT-ON_OFF-R32-GAS-SILVER-TAC-18CSD_ZG11-FRONT.png",
    images: ["/img/products/TCL-SPLIT-ON_OFF-R32-GAS-SILVER-TAC-18CSD_ZG11-FRONT.png"],
    price: 5499,
    rating: 4.4,
    reviews: 92,
    icon: "❄️",
    tags: [
      "tcl",
      "ac"
    ],
    description: "2.0 HP · R32 Gas · R410A · 220V/50HZ · Energy Saving · Gentle Breeze · Eco-friendly",
    badge: "new"
  },
  {
    id: 521,
    name: "TCL 6.0HP Cassette Inverter Air Condition",
    brand: "TCL",
    brandId: "tcl",
    model: "TCL-CASSETTE-INVERTER_R410-GAS-TCC-24CHRA_DV-Indoor",
    category: "ac",
    image: "/img/products/TCL-CASSETTE-INVERTER_R410-GAS-TCC-24CHRA_DV-Indoor.png",
    images: ["/img/products/TCL-CASSETTE-INVERTER_R410-GAS-TCC-24CHRA_DV-Indoor.png"],
    price: 27999,
    rating: 4.4,
    reviews: 73,
    icon: "❄️",
    tags: [
      "tcl",
      "ac"
    ],
    description: "6.0 HP · R410 Gas · High Efficiency A++ · Multi-Split Design · 85° Swing Angle · Full DC Inverter with Al · Easy to Clean Filter · Fresh Air Module",
    badge: "new"
  },
  {
    id: 522,
    name: "TCL 5.0HP Cassette Inverter Air Condition",
    brand: "TCL",
    brandId: "tcl",
    model: "TCL-CASSETTE-INVERTER_R410-GAS-TCC-24CHRA_DV-Indoor",
    category: "ac",
    image: "/img/products/TCL-CASSETTE-INVERTER_R410-GAS-TCC-24CHRA_DV-Indoor.png",
    images: ["/img/products/TCL-CASSETTE-INVERTER_R410-GAS-TCC-24CHRA_DV-Indoor.png"],
    price: 11200,
    rating: 4.4,
    reviews: 66,
    icon: "❄️",
    tags: [
      "tcl",
      "ac"
    ],
    description: "5.0 HP · R410 Gas · High Efficiency A++ · Multi-Split Design · 85° Swing Angle · Full DC Inverter with Al · Easy to Clean Filter · Fresh Air Module",
    badge: "new"
  },
  {
    id: 523,
    name: "TCL 3.5HP Cassette Inverter Air Condition",
    brand: "TCL",
    brandId: "tcl",
    model: "TCL-CASSETTE-INVERTER_R410-GAS-TCC-24CHRA_DV-Indoor",
    category: "ac",
    image: "/img/products/TCL-CASSETTE-INVERTER_R410-GAS-TCC-24CHRA_DV-Indoor.png",
    images: ["/img/products/TCL-CASSETTE-INVERTER_R410-GAS-TCC-24CHRA_DV-Indoor.png"],
    price: 15999,
    rating: 4.4,
    reviews: 72,
    icon: "❄️",
    tags: [
      "tcl",
      "ac"
    ],
    description: "3.5 HP · R410 Gas · High Efficiency A++ · Multi-Split Design · 85° Swing Angle · Full DC Inverter with Al · Easy to Clean Filter · Fresh Air Module",
    badge: "new"
  },
  {
    id: 524,
    name: "TCL 2.5HP Inverter Cassette Air Condition",
    brand: "TCL",
    brandId: "tcl",
    model: "TCL-CASSETTE-INVERTER_R410-GAS-TCC-24CHRA_DV-Indoor",
    category: "ac",
    image: "/img/products/TCL-CASSETTE-INVERTER_R410-GAS-TCC-24CHRA_DV-Indoor.png",
    images: ["/img/products/TCL-CASSETTE-INVERTER_R410-GAS-TCC-24CHRA_DV-Indoor.png"],
    price: 11200,
    rating: 4.4,
    reviews: 94,
    icon: "❄️",
    tags: [
      "tcl",
      "ac"
    ],
    description: "2.5 HP · R410 Gas · High Efficiency A++ · Multi-Split Design · 85° Swing Angle · Full DC Inverter with Al · Easy to Clean Filter · Fresh Air Module",
    badge: "new"
  },
  {
    id: 525,
    name: "TCL 2.5HP Split Inverter Air Condition",
    brand: "TCL",
    brandId: "tcl",
    model: "TCL-SPLIT-INVERTER-R32-GAS-TAC-12CSD-ZG211-FRONT",
    category: "ac",
    image: "/img/products/TCL-SPLIT-INVERTER-R32-GAS-TAC-12CSD-ZG211-FRONT.png",
    images: ["/img/products/TCL-SPLIT-INVERTER-R32-GAS-TAC-12CSD-ZG211-FRONT.png"],
    price: 11399,
    rating: 4.4,
    reviews: 58,
    icon: "❄️",
    tags: [
      "tcl",
      "ac"
    ],
    description: "2.5HP · R32 Gas · T-Al Energy Saving · Fast Cooling &amp; Heating · Smart Wi-Fi Control · Healthy Filters · Coanda Airflow",
    badge: "new"
  },
  {
    id: 526,
    name: "TCL 2.0HP Split Inverter Air Condition",
    brand: "TCL",
    brandId: "tcl",
    model: "TCL-SPLIT-INVERTER-R32-GAS-TAC-12CSD-ZG211-FRONT",
    category: "ac",
    image: "/img/products/TCL-SPLIT-INVERTER-R32-GAS-TAC-12CSD-ZG211-FRONT.png",
    images: ["/img/products/TCL-SPLIT-INVERTER-R32-GAS-TAC-12CSD-ZG211-FRONT.png"],
    price: 8299,
    rating: 4.4,
    reviews: 28,
    icon: "❄️",
    tags: [
      "tcl",
      "ac"
    ],
    description: "2.0HP · R32 Gas · T-Al Energy Saving · Fast Cooling &amp; Heating · Smart Wi-Fi Control · Healthy Filters · Coanda Airflow",
    badge: "new"
  },
  {
    id: 527,
    name: "TCL 1.5HP Split Inverter Air Condition",
    brand: "TCL",
    brandId: "tcl",
    model: "TCL-SPLIT-INVERTER-R32-GAS-TAC-12CSD-ZG211-FRONT",
    category: "ac",
    image: "/img/products/TCL-SPLIT-INVERTER-R32-GAS-TAC-12CSD-ZG211-FRONT.png",
    images: ["/img/products/TCL-SPLIT-INVERTER-R32-GAS-TAC-12CSD-ZG211-FRONT.png"],
    price: 11200,
    rating: 4.4,
    reviews: 35,
    icon: "❄️",
    tags: [
      "tcl",
      "ac"
    ],
    description: "1.5HP · R32 Gas · T-Al Energy Saving · Fast Cooling &amp; Heating · Smart Wi-Fi Control · Healthy Filters · Coanda Airflow",
    badge: "new"
  },
  {
    id: 528,
    name: "Midea Contact Sandwich Grill",
    brand: "Midea",
    brandId: "midea",
    model: "MC-JK2313P-1-1",
    category: "kitchen",
    image: "/img/products/MC-JK2313P-1-1.png",
    images: ["/img/products/MC-JK2313P-1-1.png"],
    price: 199,
    rating: 4.4,
    reviews: 97,
    icon: "🍳",
    tags: [
      "midea",
      "kitchen"
    ],
    description: "1500W · Indicator lights · Non-stick coated plates · Fast heating system · Compact design · Black · Cool-touch handle",
    badge: "new"
  },
  {
    id: 529,
    name: "Samsung 360Watt Sound Bar",
    brand: "Samsung",
    brandId: "samsung",
    model: "HW-Q600F-KE-1",
    category: "small",
    image: "/img/products/HW-Q600F-KE-1.png",
    images: ["/img/products/HW-Q600F-KE-1.png"],
    price: 6599,
    rating: 4.4,
    reviews: 34,
    icon: "⚡",
    tags: [
      "samsung",
      "small"
    ],
    description: "3.1.2ch Sound · Dolby Audio/DTS Virtual:X · Q-Symphony · Adaptive Sound · HDMI eARC · Bluetooth · Remote Control",
    badge: "new"
  },
  {
    id: 530,
    name: "Samsung 200Watt Sound Bar",
    brand: "Samsung",
    brandId: "samsung",
    model: "HW-B450F-KE.-1png",
    category: "small",
    image: "/img/products/HW-B450F-KE.-1png.png",
    images: ["/img/products/HW-B450F-KE.-1png.png"],
    price: 3599,
    rating: 4.4,
    reviews: 25,
    icon: "⚡",
    tags: [
      "samsung",
      "small"
    ],
    description: "2.1ch Sound · Dolby Audio/DTS Virtual:X · Bass Boost · Adaptive Sound · HDMI ARC · Bluetooth · Remote Control",
    badge: "new"
  },
  {
    id: 531,
    name: "Midea 34L Solo Microwave",
    brand: "NASCO",
    brandId: "nasco",
    model: "EM034A2MO-B-1",
    category: "kitchen",
    image: "/img/products/EM034A2MO-B-1.png",
    images: ["/img/products/EM034A2MO-B-1.png"],
    price: 1899,
    rating: 4.4,
    reviews: 67,
    icon: "🍳",
    tags: [
      "nasco",
      "kitchen"
    ],
    description: "34 Liters · 900 Watt · 30s Express Start · 230V / 50Hz · Large Cavity · Observation Window · Safety Interlock System · Black · ECO Mode",
    badge: "new"
  },
  {
    id: 532,
    name: "Nasco 2.5HP Split Inverter Air Condition",
    brand: "NASCO",
    brandId: "nasco",
    model: "NAS-A12INV-X-R32-FRONT",
    category: "ac",
    image: "/img/products/NAS-A12INV-X-R32-FRONT.png",
    images: ["/img/products/NAS-A12INV-X-R32-FRONT.png"],
    price: 6999,
    rating: 4.4,
    reviews: 43,
    icon: "❄️",
    tags: [
      "nasco",
      "ac"
    ],
    description: "2.5 HP · Refrigerant: R32 · Copper Condenser · White Panel Sleek Design · Inverter Compressor · 2 Stars",
    badge: "new"
  },
  {
    id: 533,
    name: "Nasco 2.0HP Split Inverter Air Condition",
    brand: "NASCO",
    brandId: "nasco",
    model: "NAS-A12INV-X-R32-FRONT",
    category: "ac",
    image: "/img/products/NAS-A12INV-X-R32-FRONT.png",
    images: ["/img/products/NAS-A12INV-X-R32-FRONT.png"],
    price: 4999,
    rating: 4.4,
    reviews: 87,
    icon: "❄️",
    tags: [
      "nasco",
      "ac"
    ],
    description: "2.0HP · Refrigerant: R32 · Copper Condenser · White Panel Sleek Design · Inverter Compressor · 2 Stars",
    badge: "new"
  },
  {
    id: 534,
    name: "Nasco 1.5HP Split Inverter Air Condition",
    brand: "NASCO",
    brandId: "nasco",
    model: "NAS-A12INV-X-R32-FRONT",
    category: "ac",
    image: "/img/products/NAS-A12INV-X-R32-FRONT.png",
    images: ["/img/products/NAS-A12INV-X-R32-FRONT.png"],
    price: 11200,
    rating: 4.4,
    reviews: 65,
    icon: "❄️",
    tags: [
      "nasco",
      "ac"
    ],
    description: "1.5 HP · Refrigerant: R32 · Copper Condenser · White Panel Sleek Design · Inverter Compressor · 2 Stars",
    badge: "new"
  },
  {
    id: 535,
    name: "Samsung 240Watt Sound Bar",
    brand: "Samsung",
    brandId: "samsung",
    model: "MX-ST50F-ZN",
    category: "small",
    image: "/img/products/MX-ST50F-ZN.png",
    images: ["/img/products/MX-ST50F-ZN.png"],
    price: 6299,
    rating: 4.4,
    reviews: 78,
    icon: "⚡",
    tags: [
      "samsung",
      "small"
    ],
    description: "240WATT · Powerful Party Sound · Party Lights+ · Up 18 hours of playtime · Grip &amp; Roll · Splash-resistant IPX4 · Bluetooth · USB input",
    badge: "new"
  },
  {
    id: 536,
    name: "Samsung 160Watt Sound Bar",
    brand: "Samsung",
    brandId: "samsung",
    model: "MX-ST40F-ZN",
    category: "small",
    image: "/img/products/MX-ST40F-ZN.png",
    images: ["/img/products/MX-ST40F-ZN.png"],
    price: 5399,
    rating: 4.4,
    reviews: 92,
    icon: "⚡",
    tags: [
      "samsung",
      "small"
    ],
    description: "160WATT · Powerful Party Sound · Party Lights+ · Up 18 hours of playtime · Grip &amp; Roll · Splash-resistant IPX4 · Bluetooth · USB input",
    badge: "new"
  },
  {
    id: 537,
    name: "Nasco 1080L Display Refrigerator",
    brand: "NASCO",
    brandId: "nasco",
    model: "NAS-FL1300-2DR-FRONT",
    category: "fridge",
    image: "/img/products/NAS-FL1300-2DR-FRONT.png",
    images: ["/img/products/NAS-FL1300-2DR-FRONT.png"],
    price: 15999,
    rating: 4.4,
    reviews: 31,
    icon: "🧊",
    tags: [
      "nasco",
      "fridge"
    ],
    description: "1080L · 2 Glass Door · 8 Shelves · Energy Saving · Child Lock · Interior Light · Frost Free · Energy Saving",
    badge: "new"
  },
  {
    id: 538,
    name: "Nasco 1200L Display Refrigerator",
    brand: "NASCO",
    brandId: "nasco",
    model: "FL1400-3DR-FRONT",
    category: "fridge",
    image: "/img/products/FL1400-3DR-FRONT.png",
    images: ["/img/products/FL1400-3DR-FRONT.png"],
    price: 17999,
    rating: 4.4,
    reviews: 32,
    icon: "🧊",
    tags: [
      "nasco",
      "fridge"
    ],
    description: "1200L · 3 Glass Door · 12 Shelves · Energy Saving · Child Lock · Interior Light · Frost Free ·  · &nbsp; · &nbsp;",
    badge: "new"
  },
  {
    id: 539,
    name: "TCL 415L Top Mount Refrigerator",
    brand: "TCL",
    brandId: "tcl",
    model: "TCL-Top-Mount-Fridge-415Ltrs-P540TMG-FRONT",
    category: "fridge",
    image: "/img/products/TCL-Top-Mount-Fridge-415Ltrs-P540TMG-FRONT.png",
    images: ["/img/products/TCL-Top-Mount-Fridge-415Ltrs-P540TMG-FRONT.png"],
    price: 8999,
    rating: 4.4,
    reviews: 37,
    icon: "🧊",
    tags: [
      "tcl",
      "fridge"
    ],
    description: "415L · No Frost · Fast Cooling · Silver Grey · Manual Temperature · Crisper Drawer with · Efficient Compressor · 8 Drawer Panels",
    badge: "new"
  },
  {
    id: 540,
    name: "TCL 528L Top Mount Refrigerator",
    brand: "TCL",
    brandId: "tcl",
    model: "TCL-Top-Mount-Fridge-528Ltrs-P687TMN-FRONT",
    category: "fridge",
    image: "/img/products/TCL-Top-Mount-Fridge-528Ltrs-P687TMN-FRONT.png",
    images: ["/img/products/TCL-Top-Mount-Fridge-528Ltrs-P687TMN-FRONT.png"],
    price: 11999,
    rating: 4.4,
    reviews: 93,
    icon: "🧊",
    tags: [
      "tcl",
      "fridge"
    ],
    description: "528L · Fast cooling · Manual Temperature · Silver Grey · Interior Led Light · Twin Eco Inverter",
    badge: "new"
  },
  {
    id: 541,
    name: "Midea Steam Iron",
    brand: "Midea",
    brandId: "midea",
    model: "YPJ26A1W",
    category: "small",
    image: "/img/products/YPJ26A1W.png",
    images: ["/img/products/YPJ26A1W.png"],
    price: 399,
    rating: 4.4,
    reviews: 66,
    icon: "⚡",
    tags: [
      "midea",
      "small"
    ],
    description: "380ML · Dry Burn · Variable Level Steaming · Overheat Protection · Fast Heating Up · Dry &amp; Wet Ironing",
    badge: "new"
  },
  {
    id: 542,
    name: "Midea Steam Iron",
    brand: "Midea",
    brandId: "midea",
    model: "YPJ20A1W",
    category: "small",
    image: "/img/products/YPJ20A1W.png",
    images: ["/img/products/YPJ20A1W.png"],
    price: 4600,
    rating: 4.4,
    reviews: 78,
    icon: "⚡",
    tags: [
      "midea",
      "small"
    ],
    description: "330ML · Dry Burn · Variable Level Steaming · Overheat Protection · Fast Heating Up · Dry &amp; Wet Ironing ·  · &nbsp;",
    badge: "new"
  },
  {
    id: 543,
    name: "TCL 108L Bottom Freezer",
    brand: "TCL",
    brandId: "tcl",
    model: "TCL-108L-Bottom-Mount-Fridge-F141BFS-Front",
    category: "fridge",
    image: "/img/products/TCL-108L-Bottom-Mount-Fridge-F141BFS-Front.png",
    images: ["/img/products/TCL-108L-Bottom-Mount-Fridge-F141BFS-Front.png"],
    price: 2599,
    rating: 4.4,
    reviews: 72,
    icon: "🧊",
    tags: [
      "tcl",
      "fridge"
    ],
    description: "108 Liters · Frost Free · Led Light · Silver · Electronic Control",
    badge: "new"
  },
  {
    id: 544,
    name: "Nasco 2.5HP Split Mirror Air Condition",
    brand: "NASCO",
    brandId: "nasco",
    model: "NAS-MR12N1-MIRROR",
    category: "ac",
    image: "/img/products/NAS-MR12N1-MIRROR.png",
    images: ["/img/products/NAS-MR12N1-MIRROR.png"],
    price: 6999,
    rating: 4.4,
    reviews: 35,
    icon: "❄️",
    tags: [
      "nasco",
      "ac"
    ],
    description: "2.5HP · Fast Cooling · Mirror · 3M Copper Pipes · Led Display Panel · R410 Gas · 1 Star Energy Rating",
    badge: "new"
  },
  {
    id: 545,
    name: "Nasco 2.0HP Split Mirror Air Condition",
    brand: "NASCO",
    brandId: "nasco",
    model: "NAS-MR12N1-MIRROR",
    category: "ac",
    image: "/img/products/NAS-MR12N1-MIRROR.png",
    images: ["/img/products/NAS-MR12N1-MIRROR.png"],
    price: 5199,
    rating: 4.4,
    reviews: 61,
    icon: "❄️",
    tags: [
      "nasco",
      "ac"
    ],
    description: "2.0HP · Fast Cooling · Mirror · 3M Copper Pipes · Led Display Panel · R410 Gas · 1 Star Energy Rating",
    badge: "new"
  },
  {
    id: 546,
    name: "Nasco 1.5HP Split Mirror Air Condition",
    brand: "NASCO",
    brandId: "nasco",
    model: "NAS-MR12N1-MIRROR",
    category: "ac",
    image: "/img/products/NAS-MR12N1-MIRROR.png",
    images: ["/img/products/NAS-MR12N1-MIRROR.png"],
    price: 11200,
    rating: 4.4,
    reviews: 90,
    icon: "❄️",
    tags: [
      "nasco",
      "ac"
    ],
    description: "1.5HP · Fast Cooling · Mirror · 3M Copper Pipes · Led Display Panel · R410 Gas · 1 Star Energy Rating",
    badge: "new"
  },
  {
    id: 547,
    name: "TCL 290L Chest Freezer",
    brand: "TCL",
    brandId: "tcl",
    model: "F378CFSL-Front",
    category: "fridge",
    image: "/img/products/F378CFSL-Front.png",
    images: ["/img/products/F378CFSL-Front.png"],
    price: 4799,
    rating: 4.4,
    reviews: 98,
    icon: "🧊",
    tags: [
      "tcl",
      "fridge"
    ],
    description: "290 Liters · Power Indicator · Storage Bucket · White · Mechanical Control · Led Light",
    badge: "new"
  },
  {
    id: 548,
    name: "Samsung 22L Built-In Microwave Grill",
    brand: "Samsung",
    brandId: "samsung",
    model: "MG22M8274AT-E3-1",
    category: "kitchen",
    image: "/img/products/MG22M8274AT-E3-1.png",
    images: ["/img/products/MG22M8274AT-E3-1.png"],
    price: 6999,
    rating: 4.4,
    reviews: 97,
    icon: "🍳",
    tags: [
      "samsung",
      "kitchen"
    ],
    description: "22 Liters · Quick Defrost · Touch Control · Auto Cook · Eco Mode · Ceramic Enamel · Child lock · Stylish Black Design",
    badge: "new"
  },
  {
    id: 549,
    name: "Samsung 32L Microwave Grill",
    brand: "Samsung",
    brandId: "samsung",
    model: "MC32DG7646CKE1",
    category: "kitchen",
    image: "/img/products/MC32DG7646CKE1.png",
    images: ["/img/products/MC32DG7646CKE1.png"],
    price: 5199,
    rating: 4.4,
    reviews: 39,
    icon: "🍳",
    tags: [
      "samsung",
      "kitchen"
    ],
    description: "32 Liters · Large Grill · Smart Control · All-in-one Microwave Oven · Air Fry · Auto Cook · Ceramic Enamel · Quick Defrost",
    badge: "new"
  },
  {
    id: 550,
    name: "TCL 168L Standing Freezer",
    brand: "TCL",
    brandId: "tcl",
    model: "F208SDS-Front",
    category: "fridge",
    image: "/img/products/F208SDS-Front.png",
    images: ["/img/products/F208SDS-Front.png"],
    price: 3699,
    rating: 4.4,
    reviews: 85,
    icon: "🧊",
    tags: [
      "tcl",
      "fridge"
    ],
    description: "168 Liters · Upright Freezer · Frost Free · Electronic Temperature Control · Large capacity storage drawers · 7 Drawers · Silver · Fast Cooling",
    badge: "new"
  },
  {
    id: 551,
    name: "TCL 480L Top Mount Refrigerator",
    brand: "TCL",
    brandId: "tcl",
    model: "P642TMN-Front",
    category: "fridge",
    image: "/img/products/P642TMN-Front.png",
    images: ["/img/products/P642TMN-Front.png"],
    price: 10499,
    rating: 4.4,
    reviews: 91,
    icon: "🧊",
    tags: [
      "tcl",
      "fridge"
    ],
    description: "480 Liters · Flexible Space · Adjustable Shelves · 2L Bottle Space · Tempered Shelves · 90° Accessible · Twin Eco Inverter · Power Cool · Total No Frost",
    badge: "new"
  },
  {
    id: 552,
    name: "Midea T-Shape Chimney Hood",
    brand: "Midea",
    brandId: "midea",
    model: "90M21-S-1",
    category: "kitchen",
    image: "/img/products/90M21-S-1.png",
    images: ["/img/products/90M21-S-1.png"],
    price: 2499,
    rating: 4.4,
    reviews: 29,
    icon: "🍳",
    tags: [
      "midea",
      "kitchen"
    ],
    description: "90cm · Push Button Control · In Built Motor and Fan · 3 Speed Extracts · 2 LED bulbs · Stainless Steel",
    badge: "new"
  },
  {
    id: 553,
    name: "Samsung 23L Solo Microwave",
    brand: "Samsung",
    brandId: "samsung",
    model: "MS23K3513AK-EU",
    category: "kitchen",
    image: "/img/products/MS23K3513AK-EU.png",
    images: ["/img/products/MS23K3513AK-EU.png"],
    price: 2099,
    rating: 4.4,
    reviews: 74,
    icon: "🍳",
    tags: [
      "samsung",
      "kitchen"
    ],
    description: "23 Liters · Quick Defrost · Child Safety Lock · Auto Cook · Stylish &amp; Durable · Deodorization · ECO Mode",
    badge: "new"
  },
  {
    id: 554,
    name: "Samsung 23L Solo Microwave",
    brand: "Samsung",
    brandId: "samsung",
    model: "MS23DG4504ATE3-1",
    category: "kitchen",
    image: "/img/products/MS23DG4504ATE3-1.png",
    images: ["/img/products/MS23DG4504ATE3-1.png"],
    price: 3200,
    rating: 4.4,
    reviews: 75,
    icon: "🍳",
    tags: [
      "samsung",
      "kitchen"
    ],
    description: "23 Liters · Quick Defrost · Easy Control · Auto Cook · Stylish &amp; Durable · Ceramic Enamel · ECO Mode",
    badge: "new"
  },
  {
    id: 555,
    name: "Midea 238L Built-In Refrigerator",
    brand: "Midea",
    brandId: "midea",
    model: "MDRE353FGN01-3",
    category: "fridge",
    image: "/img/products/MDRE353FGN01-3.png",
    images: ["/img/products/MDRE353FGN01-3.png"],
    price: 9999,
    rating: 4.4,
    reviews: 48,
    icon: "🧊",
    tags: [
      "midea",
      "fridge"
    ],
    description: "238 Liters · Super Freeze · Frost Free · Energy Saving · Eco- Friendly · Essay Control",
    badge: "new"
  },
  {
    id: 556,
    name: "Samsung 468L French Door Refrigerator",
    brand: "Samsung",
    brandId: "samsung",
    model: "RF48A401EB4-EU-1",
    category: "fridge",
    image: "/img/products/RF48A401EB4-EU-1.png",
    images: ["/img/products/RF48A401EB4-EU-1.png"],
    price: 7900,
    rating: 4.4,
    reviews: 55,
    icon: "🧊",
    tags: [
      "samsung",
      "fridge"
    ],
    description: "468 liters · Water Dispenser · WIFI Embedded · Digital Inverter Technology · Power Freezer · Twin Cooling Plus · Movable Ice Maker",
    badge: "new"
  },
  {
    id: 557,
    name: "Midea Fully Automatic Coffee Machine",
    brand: "Midea",
    brandId: "midea",
    model: "MA-FACM1001",
    category: "kitchen",
    image: "/img/products/MA-FACM1001.png",
    images: ["/img/products/MA-FACM1001.png"],
    price: 5499,
    rating: 4.4,
    reviews: 56,
    icon: "🍳",
    tags: [
      "midea",
      "kitchen"
    ],
    description: "2 Liters · Black · Easy Clean · Pureness and Freshness · 220 &#8211; 240V",
    badge: "new"
  },
  {
    id: 558,
    name: "Midea Chimney Hood",
    brand: "Midea",
    brandId: "midea",
    model: "60J72-B-FRONT",
    category: "kitchen",
    image: "/img/products/60J72-B-FRONT.png",
    images: ["/img/products/60J72-B-FRONT.png"],
    price: 3299,
    rating: 4.4,
    reviews: 44,
    icon: "🍳",
    tags: [
      "midea",
      "kitchen"
    ],
    description: "60cm · Black · 3 Speed Settings · Low Noise Level · 5 Layer Aluminum · Senor Control · Black · Charcoal Filter · 210 Watts ·  · &nbsp;",
    badge: "new"
  },
  {
    id: 559,
    name: "Midea Telescopic Built-In Hood",
    brand: "Midea",
    brandId: "midea",
    model: "OPENED-60L03-B",
    category: "kitchen",
    image: "/img/products/OPENED-60L03-B.png",
    images: ["/img/products/OPENED-60L03-B.png"],
    price: 1999,
    rating: 4.4,
    reviews: 64,
    icon: "🍳",
    tags: [
      "midea",
      "kitchen"
    ],
    description: "60cm · Black · 3 Speed Settings · Low Noise Level · Senor Control · 240V · 210 Watts",
    badge: "new"
  },
  {
    id: 560,
    name: "Nasco Satellite TV",
    brand: "NASCO",
    brandId: "nasco",
    model: "Artboard-1",
    category: "tv",
    image: "/img/products/Artboard-1.png",
    images: ["/img/products/Artboard-1.png"],
    price: 649,
    rating: 4.4,
    reviews: 75,
    icon: "📺",
    tags: [
      "nasco",
      "tv"
    ],
    description: "24&#8243; · HDMI x 1 · USB x 1 · HD TV · Slim TV",
    badge: "new"
  },
  {
    id: 561,
    name: "Nasco Kettle",
    brand: "NASCO",
    brandId: "nasco",
    model: "KEC-1798A",
    category: "kitchen",
    image: "/img/products/KEC-1798A.png",
    images: ["/img/products/KEC-1798A.png"],
    price: 149,
    rating: 4.4,
    reviews: 47,
    icon: "🍳",
    tags: [
      "nasco",
      "kitchen"
    ],
    description: "1.7 Liters · Stainless Steel · Light Indicator · Cordless ·  Stable Base",
    badge: "new"
  },
  {
    id: 562,
    name: "TCL Floor Standing Air Condition",
    brand: "TCL",
    brandId: "tcl",
    model: "TCL-Floor-Stand-Fixed-Speed-AC-FD-TAC-60CHF_FD-FRONT",
    category: "ac",
    image: "/img/products/TCL-Floor-Stand-Fixed-Speed-AC-FD-TAC-60CHF_FD-FRONT.png",
    images: ["/img/products/TCL-Floor-Stand-Fixed-Speed-AC-FD-TAC-60CHF_FD-FRONT.png"],
    price: 39999,
    rating: 4.4,
    reviews: 22,
    icon: "❄️",
    tags: [
      "tcl",
      "ac"
    ],
    description: "6.0HP · Cooling and Heating · R410 Refrigerant · Rotary Compressor · Auto Restart",
    badge: "new"
  },
  {
    id: 563,
    name: "Samsung Bespoke Twin Cooling Plus Refrigerator",
    brand: "Samsung",
    brandId: "samsung",
    model: "RT60CB66218AGH",
    category: "fridge",
    image: "/img/products/RT60CB66218AGH.png",
    images: ["/img/products/RT60CB66218AGH.png"],
    price: 15999,
    rating: 4.4,
    reviews: 62,
    icon: "🧊",
    tags: [
      "samsung",
      "fridge"
    ],
    description: "441 Liters · Ice Maker · Energy Saving · Glass · Bespoke Design · Digital Inverter",
    badge: "new"
  },
  {
    id: 564,
    name: "Midea Unicool Inverter Air Condition",
    brand: "Midea",
    brandId: "midea",
    model: "MSAF24B-12CRDN1-R32-F",
    category: "ac",
    image: "/img/products/MSAF24B-12CRDN1-R32-F.png",
    images: ["/img/products/MSAF24B-12CRDN1-R32-F.png"],
    price: 4999,
    rating: 4.4,
    reviews: 98,
    icon: "❄️",
    tags: [
      "midea",
      "ac"
    ],
    description: "Fast Cooling · Smart Control · Air Purification System · Inverter · Low Energy Consumption · Self Cleaning",
    badge: "new"
  },
  {
    id: 565,
    name: "Nasco Top Mounted Freezer",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASF2-28S-1",
    category: "fridge",
    image: "/img/products/NASF2-28S-1.png",
    images: ["/img/products/NASF2-28S-1.png"],
    price: 4599,
    rating: 4.4,
    reviews: 33,
    icon: "🧊",
    tags: [
      "nasco",
      "fridge"
    ],
    description: "204 Liters · Lock Security · Light · Dark Silver · Vegetable Box · Manual Defrost ·  · &nbsp; · &nbsp; · &nbsp;",
    badge: "new"
  },
  {
    id: 566,
    name: "Nasco Top Mounted Freezer",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASF2-24-1",
    category: "fridge",
    image: "/img/products/NASF2-24-1.png",
    images: ["/img/products/NASF2-24-1.png"],
    price: 7900,
    rating: 4.4,
    reviews: 85,
    icon: "🧊",
    tags: [
      "nasco",
      "fridge"
    ],
    description: "166 Liters · Silver · Light · Vegetable Box · Energy Saving · Manual Defrost",
    badge: "new"
  },
  {
    id: 567,
    name: "Nasco Automatic Regulator",
    brand: "NASCO",
    brandId: "nasco",
    model: "NAS-AVR-3000WM-FRONT",
    category: "small",
    image: "/img/products/NAS-AVR-3000WM-FRONT.png",
    images: ["/img/products/NAS-AVR-3000WM-FRONT.png"],
    price: 4600,
    rating: 4.4,
    reviews: 43,
    icon: "⚡",
    tags: [
      "nasco",
      "small"
    ],
    description: "Overload Protection · Controlled CPU · Over Voltage Protection · Fast Automatic Correction · Stable Output Voltage · Energy-efficient operation",
    badge: "new"
  },
  {
    id: 568,
    name: "Midea Blender",
    brand: "Midea",
    brandId: "midea",
    model: "BL2518-1",
    category: "kitchen",
    image: "/img/products/BL2518-1.png",
    images: ["/img/products/BL2518-1.png"],
    price: 249,
    rating: 4.4,
    reviews: 85,
    icon: "🍳",
    tags: [
      "midea",
      "kitchen"
    ],
    description: "1.5 Liter · Smooth Speed · 4 Slices Blade · Stainless Steel ·  · &nbsp;",
    badge: "new"
  },
  {
    id: 569,
    name: "Samsung Music Frame",
    brand: "Samsung",
    brandId: "samsung",
    model: "HW-LS60DZN-FRONT",
    category: "small",
    image: "/img/products/HW-LS60DZN-FRONT.png",
    images: ["/img/products/HW-LS60DZN-FRONT.png"],
    price: 4999,
    rating: 4.4,
    reviews: 22,
    icon: "⚡",
    tags: [
      "samsung",
      "small"
    ],
    description: "Picture Frame Style · 2.0 Channel System · Bluetooth · 3 Way Speaker System · Dolby Atoms Digital Plus",
    badge: "new"
  },
  {
    id: 570,
    name: "Samsung QLED Television",
    brand: "Samsung",
    brandId: "samsung",
    model: "QA55Q60CAUXGH-FRONT",
    category: "tv",
    image: "/img/products/QA55Q60CAUXGH-FRONT.png",
    images: ["/img/products/QA55Q60CAUXGH-FRONT.png"],
    price: 13999,
    rating: 4.4,
    reviews: 77,
    icon: "📺",
    tags: [
      "samsung",
      "tv"
    ],
    description: "55&#8243; · 4K · Tizen operating system · Ethernet LAN · 4 HDMI ports · Auto Game Mode · G-Symphony",
    badge: "new"
  },
  {
    id: 571,
    name: "Samsung Air Condition",
    brand: "Samsung",
    brandId: "samsung",
    model: "AC048TNPPEH-FRONT",
    category: "ac",
    image: "/img/products/AC048TNPPEH-FRONT.png",
    images: ["/img/products/AC048TNPPEH-FRONT.png"],
    price: 39999,
    rating: 4.4,
    reviews: 65,
    icon: "❄️",
    tags: [
      "samsung",
      "ac"
    ],
    description: "5.0HP · Floor Standing · R410 Gas · Inverter Compressor · White · Energy Efficient",
    badge: "new"
  },
  {
    id: 572,
    name: "TCL Refrigerator",
    brand: "TCL",
    brandId: "tcl",
    model: "TCL-Side-By-Side-Refrigerator-P692SBNWD-FRONT",
    category: "fridge",
    image: "/img/products/TCL-Side-By-Side-Refrigerator-P692SBNWD-FRONT.png",
    images: ["/img/products/TCL-Side-By-Side-Refrigerator-P692SBNWD-FRONT.png"],
    price: 9999,
    rating: 4.4,
    reviews: 26,
    icon: "🧊",
    tags: [
      "tcl",
      "fridge"
    ],
    description: "Twin ECO Inverter · Led Light · Total No Frost · Multi Door · Water Dispenser · Silver · 529 Liters",
    badge: "new"
  },
  {
    id: 573,
    name: "Samsung Washing Machine",
    brand: "Samsung",
    brandId: "samsung",
    model: "WW10DG6U94LBNQ-FRONT",
    category: "laundry",
    image: "/img/products/WW10DG6U94LBNQ-FRONT.png",
    images: ["/img/products/WW10DG6U94LBNQ-FRONT.png"],
    price: 8999,
    rating: 4.4,
    reviews: 52,
    icon: "🫧",
    tags: [
      "samsung",
      "laundry"
    ],
    description: "10.1KG · AI Control Panel · ECO Bubble Technology · Child Lock · Inverter Digital Technology",
    badge: "new"
  },
  {
    id: 574,
    name: "Samsung Microwave",
    brand: "Samsung",
    brandId: "samsung",
    model: "MG30T5018AKEF-FRONT-2",
    category: "kitchen",
    image: "/img/products/MG30T5018AKEF-FRONT-2.png",
    images: ["/img/products/MG30T5018AKEF-FRONT-2.png"],
    price: 2999,
    rating: 4.4,
    reviews: 33,
    icon: "🍳",
    tags: [
      "samsung",
      "kitchen"
    ],
    description: "30 Liters · 1400 Watts · Plate Warming · Black · Grill · Repaid Defrost · Ceramic  Enamel Interior ·  · &nbsp; · &nbsp;",
    badge: "new"
  },
  {
    id: 575,
    name: "Samsung Sloping Hood",
    brand: "Samsung",
    brandId: "samsung",
    model: "NK24C7070WB-UR-4",
    category: "kitchen",
    image: "/img/products/NK24C7070WB-UR-4.png",
    images: ["/img/products/NK24C7070WB-UR-4.png"],
    price: 9099,
    rating: 4.4,
    reviews: 40,
    icon: "🍳",
    tags: [
      "samsung",
      "kitchen"
    ],
    description: "Efficient Ventilation System · Auto Connectivity · Aluminum Filter · Easy To Clean · LED Lighting · Built-In · 60CM",
    badge: "new"
  },
  {
    id: 576,
    name: "Samsung Telescopic Hood",
    brand: "Samsung",
    brandId: "samsung",
    model: "NK24M1030IB-UR-side",
    category: "kitchen",
    image: "/img/products/NK24M1030IB-UR-side.png",
    images: ["/img/products/NK24M1030IB-UR-side.png"],
    price: 3599,
    rating: 4.4,
    reviews: 66,
    icon: "🍳",
    tags: [
      "samsung",
      "kitchen"
    ],
    description: "3 Power Levels · Control via Push Button · 3 Speed Extraction · Washable Aluminum Filter · Built-In ·  ·  · &nbsp;",
    badge: "new"
  },
  {
    id: 577,
    name: "Samsung Built-In Decorative Hood",
    brand: "Samsung",
    brandId: "samsung",
    model: "NK36C7070WB-UR-1",
    category: "kitchen",
    image: "/img/products/NK36C7070WB-UR-1.png",
    images: ["/img/products/NK36C7070WB-UR-1.png"],
    price: 10599,
    rating: 4.4,
    reviews: 86,
    icon: "🍳",
    tags: [
      "samsung",
      "kitchen"
    ],
    description: "90cm Capacity · Ventilation System Power · Premium  Design · LED Light · Bluetooth  Automatic Filter ·  · &nbsp; · &nbsp;",
    badge: "new"
  },
  {
    id: 578,
    name: "Samsung Glass Ceramic Hob",
    brand: "Samsung",
    brandId: "samsung",
    model: "C21RJANEU",
    category: "kitchen",
    image: "/img/products/C21RJANEU.jpeg",
    images: ["/img/products/C21RJANEU.jpeg"],
    price: 5099,
    rating: 4.4,
    reviews: 58,
    icon: "🍳",
    tags: [
      "samsung",
      "kitchen"
    ],
    description: "2 Burner · Smart Touch Control · 2 Burner · Easy Clean Up · Built-In · LED Display",
    badge: "new"
  },
  {
    id: 579,
    name: "Samsung Ceramic Hub",
    brand: "Samsung",
    brandId: "samsung",
    model: "C61R2AEEXEU-FRONT-2",
    category: "kitchen",
    image: "/img/products/C61R2AEEXEU-FRONT-2.png",
    images: ["/img/products/C61R2AEEXEU-FRONT-2.png"],
    price: 6699,
    rating: 4.4,
    reviews: 75,
    icon: "🍳",
    tags: [
      "samsung",
      "kitchen"
    ],
    description: "Touch Control · 8 Stage Power · Black Mirror Finish · Child Lock · Automatic Shut Off",
    badge: "new"
  },
  {
    id: 580,
    name: "Nasco Washing Machine",
    brand: "NASCO",
    brandId: "nasco",
    model: "NAS-08TLS-front",
    category: "laundry",
    image: "/img/products/NAS-08TLS-front.png",
    images: ["/img/products/NAS-08TLS-front.png"],
    price: 2999,
    rating: 4.4,
    reviews: 80,
    icon: "🫧",
    tags: [
      "nasco",
      "laundry"
    ],
    description: "LED Display · Fully Automatic · Fuzzy Control · Energy Saving · 7KG · 360% Water Flow",
    badge: "new"
  },
  {
    id: 581,
    name: "Samsung Gas Cooktop",
    brand: "Samsung",
    brandId: "samsung",
    model: "NA36R5310FS-AA",
    category: "kitchen",
    image: "/img/products/NA36R5310FS-AA.png",
    images: ["/img/products/NA36R5310FS-AA.png"],
    price: 11399,
    rating: 4.4,
    reviews: 25,
    icon: "🍳",
    tags: [
      "samsung",
      "kitchen"
    ],
    description: "Powerful Burners · Easy Cleanup · Front Controls · Stainless Steel · 5 Burners",
    badge: "new"
  },
  {
    id: 582,
    name: "Samsung Gas Hob",
    brand: "Samsung",
    brandId: "samsung",
    model: "NA64N7100AB-SG",
    category: "kitchen",
    image: "/img/products/NA64N7100AB-SG.png",
    images: ["/img/products/NA64N7100AB-SG.png"],
    price: 4999,
    rating: 4.4,
    reviews: 71,
    icon: "🍳",
    tags: [
      "samsung",
      "kitchen"
    ],
    description: "Powerful Heat · Black Glass · Built-In · Thermocouple · 4 Burner · Safe Operation",
    badge: "new"
  },
  {
    id: 583,
    name: "Samsung Microwave",
    brand: "Samsung",
    brandId: "samsung",
    model: "MS22M8254AK-E3",
    category: "kitchen",
    image: "/img/products/MS22M8254AK-E3.png",
    images: ["/img/products/MS22M8254AK-E3.png"],
    price: 3200,
    rating: 4.4,
    reviews: 33,
    icon: "🍳",
    tags: [
      "samsung",
      "kitchen"
    ],
    description: "Quick Defrost · ECO Mode · Easy Clean Interior · LED Display · Touch control Panel · 22 Liters",
    badge: "new"
  },
  {
    id: 584,
    name: "Samsung Bulit-In Compact Oven",
    brand: "Samsung",
    brandId: "samsung",
    model: "NQ5B4553FBS-U1",
    category: "kitchen",
    image: "/img/products/NQ5B4553FBS-U1.png",
    images: ["/img/products/NQ5B4553FBS-U1.png"],
    price: 10999,
    rating: 4.4,
    reviews: 22,
    icon: "🍳",
    tags: [
      "samsung",
      "kitchen"
    ],
    description: "Wi-Fi Connection · Vapour Cleaning · LED Display · Microwave Combi · 50L",
    badge: "new"
  },
  {
    id: 585,
    name: "Samsung Bulit-In Electric Oven",
    brand: "Samsung",
    brandId: "samsung",
    model: "NV68A1140BK-front",
    category: "kitchen",
    image: "/img/products/NV68A1140BK-front.png",
    images: ["/img/products/NV68A1140BK-front.png"],
    price: 7699,
    rating: 4.4,
    reviews: 95,
    icon: "🍳",
    tags: [
      "samsung",
      "kitchen"
    ],
    description: "Catalytic Liner Interior · True Convection Cooking · LED Display · ActivEnamel Interior · Surge Protection",
    badge: "new"
  },
  {
    id: 586,
    name: "TCL 413L Top Mount Refrigerator",
    brand: "TCL",
    brandId: "tcl",
    model: "P540TMGWD-FRONT",
    category: "fridge",
    image: "/img/products/P540TMGWD-FRONT.png",
    images: ["/img/products/P540TMGWD-FRONT.png"],
    price: 7999,
    rating: 4.4,
    reviews: 25,
    icon: "🧊",
    tags: [
      "tcl",
      "fridge"
    ],
    description: "Fast Cooling · Manual Temperature · Adjustable glass shelves and crisper drawer · Built-in water dispenser · Energy-efficient design · 413 Liters ·  · &nbsp;",
    badge: "new"
  },
  {
    id: 587,
    name: "Midea Kitchen Machine",
    brand: "Midea",
    brandId: "midea",
    model: "MJ-KM1201W-CLOSED",
    category: "kitchen",
    image: "/img/products/MJ-KM1201W-CLOSED.png",
    images: ["/img/products/MJ-KM1201W-CLOSED.png"],
    price: 2499,
    rating: 4.4,
    reviews: 53,
    icon: "🍳",
    tags: [
      "midea",
      "kitchen"
    ],
    description: "Multi Function · 7 Speed Levels · ABS Plastic Housing · Processor 3.75 · 6.5 Liters ·  · &nbsp;",
    badge: "new"
  },
  {
    id: 588,
    name: "Midea Blender",
    brand: "Midea",
    brandId: "midea",
    model: "MJ-BL40G1-OPENED",
    category: "kitchen",
    image: "/img/products/MJ-BL40G1-OPENED.png",
    images: ["/img/products/MJ-BL40G1-OPENED.png"],
    price: 3200,
    rating: 4.4,
    reviews: 25,
    icon: "🍳",
    tags: [
      "midea",
      "kitchen"
    ],
    description: "Multi Function · Processor 3.75 · 3 Speed levels · Knob Control · Standard Accessories",
    badge: "new"
  },
  {
    id: 589,
    name: "TCL Tablet",
    brand: "TCL",
    brandId: "tcl",
    model: "TCL-TAB10L-GEN4-Front-Side-3",
    category: "phones",
    image: "/img/products/TCL-TAB10L-GEN4-Front-Side-3.png",
    images: ["/img/products/TCL-TAB10L-GEN4-Front-Side-3.png"],
    price: 7900,
    rating: 4.4,
    reviews: 41,
    icon: "📱",
    tags: [
      "tcl",
      "phones"
    ],
    description: "4GB RAM &amp; 128GB ROM · WIFI · Android 15 · 6000mAh battery · Octa-core CPU",
    badge: "new"
  },
  {
    id: 590,
    name: "TCL Mobile Phone",
    brand: "TCL",
    brandId: "tcl",
    model: "ALCATEL-A31-Green",
    category: "phones",
    image: "/img/products/ALCATEL-A31-Green.png",
    images: ["/img/products/ALCATEL-A31-Green.png"],
    price: 1099,
    rating: 4.4,
    reviews: 62,
    icon: "📱",
    tags: [
      "tcl",
      "phones"
    ],
    description: "6.5&#8243; · MicroSD Card Support · Face Lock &amp; Finger Print · Android 15 · 64GB ROM ·  · &nbsp; · &nbsp;",
    badge: "new"
  },
  {
    id: 591,
    name: "TCL Mobile Phone",
    brand: "TCL",
    brandId: "tcl",
    model: "TCL-60SENXTPAPER-5G-Front-and-Back-Mint-Green",
    category: "phones",
    image: "/img/products/TCL-60SENXTPAPER-5G-Front-and-Back-Mint-Green.png",
    images: ["/img/products/TCL-60SENXTPAPER-5G-Front-and-Back-Mint-Green.png"],
    price: 7900,
    rating: 4.4,
    reviews: 26,
    icon: "📱",
    tags: [
      "tcl",
      "phones"
    ],
    description: "6.7&#8243; · Android 15 · Face Lock · 52000Mah Battery · MicroSD Card Support · Stylish Design · 5G Lite · 8GB+10GB RAM &amp; 256GB ROM",
    badge: "new"
  },
  {
    id: 592,
    name: "TCL Mobile Phone",
    brand: "TCL",
    brandId: "tcl",
    model: "TCL-503-Front",
    category: "phones",
    image: "/img/products/TCL-503-Front.png",
    images: ["/img/products/TCL-503-Front.png"],
    price: 7900,
    rating: 4.4,
    reviews: 65,
    icon: "📱",
    tags: [
      "tcl",
      "phones"
    ],
    description: "Android · Face Lock · 5000Mah Big Battery · MicroSD Card Support · Stylish Design",
    badge: "new"
  },
  {
    id: 593,
    name: "Midea Split Air Condition",
    brand: "Midea",
    brandId: "midea",
    model: "MSAGBU-12HRFN7-2",
    category: "ac",
    image: "/img/products/MSAGBU-12HRFN7-2.png",
    images: ["/img/products/MSAGBU-12HRFN7-2.png"],
    price: 5499,
    rating: 4.4,
    reviews: 98,
    icon: "❄️",
    tags: [
      "midea",
      "ac"
    ],
    description: "Flash Cooling · Wifi Ready · Low Energy consumption · Inverter Quattro ·  · &nbsp;",
    badge: "new"
  },
  {
    id: 594,
    name: "Nasco Display Fridge",
    brand: "NASCO",
    brandId: "nasco",
    model: "NAS-FL110SC-FRONT",
    category: "fridge",
    image: "/img/products/NAS-FL110SC-FRONT.png",
    images: ["/img/products/NAS-FL110SC-FRONT.png"],
    price: 1899,
    rating: 4.4,
    reviews: 50,
    icon: "🧊",
    tags: [
      "nasco",
      "fridge"
    ],
    description: "Glass Door · Low Noise · Easy Cleaning Interior · Energy Saving",
    badge: "new"
  },
  {
    id: 595,
    name: "Samsung Bespoke AI French Door Refrigerator with Family Hub",
    brand: "Samsung",
    brandId: "samsung",
    model: "RF65DG9H0EB1EU-1",
    category: "fridge",
    image: "/img/products/RF65DG9H0EB1EU-1.png",
    images: ["/img/products/RF65DG9H0EB1EU-1.png"],
    price: 54999,
    rating: 4.4,
    reviews: 76,
    icon: "🧊",
    tags: [
      "samsung",
      "fridge"
    ],
    description: "632 Ltrs · Smart Things · Energy Saving · Ice Maker · AI Vision · Black Colour · Family Hub",
    badge: "new"
  },
  {
    id: 596,
    name: "Nasco Voltage Regulator",
    brand: "NASCO",
    brandId: "nasco",
    model: "NAS-AVR-1500VA",
    category: "small",
    image: "/img/products/NAS-AVR-1500VA.png",
    images: ["/img/products/NAS-AVR-1500VA.png"],
    price: 4600,
    rating: 4.4,
    reviews: 36,
    icon: "⚡",
    tags: [
      "nasco",
      "small"
    ],
    description: "Overload Protection · 6/80 Sec Delay Time · Controlled CPU · Over Voltage Protection · Under Voltage Protection",
    badge: "new"
  },
  {
    id: 597,
    name: "Nasco Voltage Regulator",
    brand: "NASCO",
    brandId: "nasco",
    model: "NAS-SG10A-FRONT",
    category: "small",
    image: "/img/products/NAS-SG10A-FRONT.png",
    images: ["/img/products/NAS-SG10A-FRONT.png"],
    price: 4600,
    rating: 4.4,
    reviews: 73,
    icon: "⚡",
    tags: [
      "nasco",
      "small"
    ],
    description: "Stabilising Output Voltage · 5 Minutes Delay Protection · 50 Amps Max Current · Over Voltage Protection · Under Voltage Protection · Protects Against Several Electrical Anomalies",
    badge: "new"
  },
  {
    id: 598,
    name: "Samsung Split Inverter R410 Air Condition",
    brand: "Samsung",
    brandId: "samsung",
    model: "AR60F12D1CW-AF",
    category: "ac",
    image: "/img/products/AR60F12D1CW-AF.png",
    images: ["/img/products/AR60F12D1CW-AF.png"],
    price: 6999,
    rating: 4.4,
    reviews: 90,
    icon: "❄️",
    tags: [
      "samsung",
      "ac"
    ],
    description: "Tripple Protector Plus · R410 Wind Free · Volt Control · Inverter Compressor · Energy Saving",
    badge: "new"
  },
  {
    id: 599,
    name: "TCL Top Mount Refrigerator",
    brand: "TCL",
    brandId: "tcl",
    model: "",
    category: "fridge",
    image: "/img/products/F152TMS.jpg",
    images: ["/img/products/F152TMS.jpg"],
    price: 7900,
    rating: 4.4,
    reviews: 64,
    icon: "🧊",
    tags: [
      "tcl",
      "fridge"
    ],
    description: "The F112TMS Top Mount Refrigerator is designed for reliable cooling and everyday convenience. With a compact yet spacious interior, it offers efficient storage for fresh and frozen foods. The top-moun",
    badge: "new"
  },
  {
    id: 600,
    name: "TCL UHD Hotel Television",
    brand: "TCL",
    brandId: "tcl",
    model: "",
    category: "tv",
    image: "/img/products/TCL-UHD-HOTEL-TV-50G60K-4K-HDR-FRONT.png",
    images: ["/img/products/TCL-UHD-HOTEL-TV-50G60K-4K-HDR-FRONT.png"],
    price: 23700,
    rating: 4.4,
    reviews: 93,
    icon: "📺",
    tags: [
      "tcl",
      "tv"
    ],
    description: "Hotel Enable · Ultra Low Power · Multiple Interfaces · 4K UHD+HDR 10 · AiPQ Procesor · Metallic Bezel-Less",
    badge: "new"
  },
  {
    id: 601,
    name: "Samsung Microwave",
    brand: "Samsung",
    brandId: "samsung",
    model: "MG23K3575AK-EU",
    category: "kitchen",
    image: "/img/products/MG23K3575AK-EU.png",
    images: ["/img/products/MG23K3575AK-EU.png"],
    price: 3200,
    rating: 4.4,
    reviews: 34,
    icon: "🍳",
    tags: [
      "samsung",
      "kitchen"
    ],
    description: "Grill · Heat Wave Grill · Rapid Defrost · Ceramic Enamel Interior",
    badge: "new"
  },
  {
    id: 602,
    name: "Nasco Split Air Condition",
    brand: "NASCO",
    brandId: "nasco",
    model: "NAS-J12-V1B-FRONT",
    category: "ac",
    image: "/img/products/NAS-J12-V1B-FRONT.png",
    images: ["/img/products/NAS-J12-V1B-FRONT.png"],
    price: 2999,
    rating: 4.4,
    reviews: 88,
    icon: "❄️",
    tags: [
      "nasco",
      "ac"
    ],
    description: "Copper Condenser · Black Design · Energy Saving · R410 Refrigerant",
    badge: "new"
  },
  {
    id: 603,
    name: "TCL Air Condition",
    brand: "TCL",
    brandId: "tcl",
    model: "TAC-24CSA-TPH11I",
    category: "ac",
    image: "/img/products/TAC-24CSA-TPH11I.png",
    images: ["/img/products/TAC-24CSA-TPH11I.png"],
    price: 11200,
    rating: 4.4,
    reviews: 98,
    icon: "❄️",
    tags: [
      "tcl",
      "ac"
    ],
    description: "Fast Cooling · Smart Control · Fan Mode · Gentle Breeze · Inverter",
    badge: "new"
  },
  {
    id: 604,
    name: "Samsung Microwave",
    brand: "Samsung",
    brandId: "samsung",
    model: "",
    category: "kitchen",
    image: "/img/products/MS23K3515AK-EF.jpg",
    images: ["/img/products/MS23K3515AK-EF.jpg"],
    price: 3200,
    rating: 4.4,
    reviews: 33,
    icon: "🍳",
    tags: [
      "samsung",
      "kitchen"
    ],
    description: "23 Liters · ECO Mode · Quick Defrost · Ceramic Enamel Interior · 1150 Watts",
    badge: "new"
  },
  {
    id: 605,
    name: "Samsung Sound Bar",
    brand: "Samsung",
    brandId: "samsung",
    model: "",
    category: "small",
    image: "/img/products/HW-B750D-XA-front.png",
    images: ["/img/products/HW-B750D-XA-front.png"],
    price: 4600,
    rating: 4.4,
    reviews: 85,
    icon: "⚡",
    tags: [
      "samsung",
      "small"
    ],
    description: "Adaptive Sound · Subwoofer with Bass Boost · Bluetooth · HDMI · Built in Side Speakers · Remote Control",
    badge: "new"
  },
  {
    id: 606,
    name: "Midea Air Condition",
    brand: "Midea",
    brandId: "midea",
    model: "MFPA-18CRDN11",
    category: "ac",
    image: "/img/products/MFPA-18CRDN11.png",
    images: ["/img/products/MFPA-18CRDN11.png"],
    price: 699,
    rating: 4.4,
    reviews: 75,
    icon: "❄️",
    tags: [
      "midea",
      "ac"
    ],
    description: "Fast Cooling · Low Noise · Side Air Inlet · Energy Saving · Auto Restart · Touch Control",
    badge: "new"
  },
  {
    id: 607,
    name: "Midea Air Condition",
    brand: "Midea",
    brandId: "midea",
    model: "MSAF-24CRDN1-R32.2peg",
    category: "ac",
    image: "/img/products/MSAF-24CRDN1-R32.2peg.jpg",
    images: ["/img/products/MSAF-24CRDN1-R32.2peg.jpg"],
    price: 11200,
    rating: 4.4,
    reviews: 58,
    icon: "❄️",
    tags: [
      "midea",
      "ac"
    ],
    description: "White · Fast Cooling · Air Purification · Low Energy Consumption · Auto Restart · Wifi · Remote Control",
    badge: "new"
  },
  {
    id: 608,
    name: "Samsung Q-LED Flat 4K Television",
    brand: "Samsung",
    brandId: "samsung",
    model: "",
    category: "tv",
    image: "/img/products/QA85Q7FAAUXGH.jpg",
    images: ["/img/products/QA85Q7FAAUXGH.jpg"],
    price: 23700,
    rating: 4.4,
    reviews: 81,
    icon: "📺",
    tags: [
      "samsung",
      "tv"
    ],
    description: "Q-LED · 4K · HDR Brightness Optimiser · Q4 AI Processor · ScolarCell Remote · One UI Tizen · Q-Symphony",
    badge: "new"
  },
  {
    id: 609,
    name: "Samsung 65&#8243; OLED 4K Smart Television",
    brand: "Samsung",
    brandId: "samsung",
    model: "QA77S85FAEXGH-1-1",
    category: "tv",
    image: "/img/products/QA77S85FAEXGH-1-1.png",
    images: ["/img/products/QA77S85FAEXGH-1-1.png"],
    price: 121799,
    rating: 4.4,
    reviews: 91,
    icon: "📺",
    tags: [
      "samsung",
      "tv"
    ],
    description: "65&#8243; · NQ4 AI Gen2 Processor · OLED HDR · 4K AI Upscaling · A Energy Mode · Contour Design · Q-Symphony",
    badge: "new"
  },
  {
    id: 610,
    name: "Tcl 225Ltrs Display Fridge",
    brand: "TCL",
    brandId: "tcl",
    model: "F215SCB-OPENED",
    category: "fridge",
    image: "/img/products/F215SCB-OPENED.png",
    images: ["/img/products/F215SCB-OPENED.png"],
    price: 7900,
    rating: 4.4,
    reviews: 62,
    icon: "🧊",
    tags: [
      "tcl",
      "fridge"
    ],
    description: "225 Ltrs · Shelf · Led Light · Glass Door · Temperature Control · Black",
    badge: "new"
  },
  {
    id: 611,
    name: "Tcl 325Ltrs Display Fridge",
    brand: "TCL",
    brandId: "tcl",
    model: "F305SCB-FRONT",
    category: "fridge",
    image: "/img/products/F305SCB-FRONT.png",
    images: ["/img/products/F305SCB-FRONT.png"],
    price: 7900,
    rating: 4.4,
    reviews: 28,
    icon: "🧊",
    tags: [
      "tcl",
      "fridge"
    ],
    description: "325 Ltrs · Shelf · Led Light · Glass Door · Temperature Control · Black",
    badge: "new"
  },
  {
    id: 612,
    name: "Samsung QLED Vision Ai Smart Tv",
    brand: "Samsung",
    brandId: "samsung",
    model: "us-qled-qn990f-qn85qn990ffxza-545961372",
    category: "tv",
    image: "/img/products/us-qled-qn990f-qn85qn990ffxza-545961372.png",
    images: ["/img/products/us-qled-qn990f-qn85qn990ffxza-545961372.png"],
    price: 23700,
    rating: 4.4,
    reviews: 65,
    icon: "📺",
    tags: [
      "samsung",
      "tv"
    ],
    description: "4K Resolution · Gaming Mode · Samsung Vision · Dolby Atmos · AI Customisation Mode · NQ8 AI Processor · Generative Wallpaper",
    badge: "new"
  },
  {
    id: 613,
    name: "Samsung Neo QLED Vision Ai Smart Tv",
    brand: "Samsung",
    brandId: "samsung",
    model: "us-qled-qn990f-qn85qn990ffxza-545961372",
    category: "tv",
    image: "/img/products/us-qled-qn990f-qn85qn990ffxza-545961372.png",
    images: ["/img/products/us-qled-qn990f-qn85qn990ffxza-545961372.png"],
    price: 23700,
    rating: 4.4,
    reviews: 93,
    icon: "📺",
    tags: [
      "samsung",
      "tv"
    ],
    description: "4K Resolution · Gaming Mode · Samsung Vision · Dolby Atmos · AI Customisation Mode · NQ8 AI Processor · Generative Wallpaper",
    badge: "new"
  },
  {
    id: 614,
    name: "Nasco 360Ltrs Display Refrigerator",
    brand: "NASCO",
    brandId: "nasco",
    model: "NAS-375DFG-FRONT",
    category: "fridge",
    image: "/img/products/NAS-375DFG-FRONT.png",
    images: ["/img/products/NAS-375DFG-FRONT.png"],
    price: 7900,
    rating: 4.4,
    reviews: 37,
    icon: "🧊",
    tags: [
      "nasco",
      "fridge"
    ],
    description: "360 Ltrs · Glass Door · 5 Shelves · Child Lock · Interior Light",
    badge: "new"
  },
  {
    id: 615,
    name: "Nasco 30Ltrs Water Heater",
    brand: "NASCO",
    brandId: "nasco",
    model: "D15-20VT-FRONT-1",
    category: "small",
    image: "/img/products/D15-20VT-FRONT-1.png",
    images: ["/img/products/D15-20VT-FRONT-1.png"],
    price: 1649,
    rating: 4.4,
    reviews: 85,
    icon: "⚡",
    tags: [
      "nasco",
      "small"
    ],
    description: "30 Ltrs · Sealed Storage · 200 Watt · White · Energy Saving",
    badge: "new"
  },
  {
    id: 616,
    name: "Nasco 10Ltrs Water Heater",
    brand: "NASCO",
    brandId: "nasco",
    model: "D15-20VT-FRONT-2",
    category: "small",
    image: "/img/products/D15-20VT-FRONT-2.png",
    images: ["/img/products/D15-20VT-FRONT-2.png"],
    price: 4600,
    rating: 4.4,
    reviews: 42,
    icon: "⚡",
    tags: [
      "nasco",
      "small"
    ],
    description: "10 Ltrs · Sealed Storage · 2000 Watt · White · Energy Saving",
    badge: "new"
  },
  {
    id: 617,
    name: "Nasco 15Ltrs Water Heater",
    brand: "NASCO",
    brandId: "nasco",
    model: "D15-20VT-FRONT-2",
    category: "small",
    image: "/img/products/D15-20VT-FRONT-2.png",
    images: ["/img/products/D15-20VT-FRONT-2.png"],
    price: 4600,
    rating: 4.4,
    reviews: 30,
    icon: "⚡",
    tags: [
      "nasco",
      "small"
    ],
    description: "15 Ltrs · Sealed Storage · 200 Watt · White · Energy Saving",
    badge: "new"
  },
  {
    id: 618,
    name: "TCL 90Ltrs Table Top Refrigerator",
    brand: "TCL",
    brandId: "tcl",
    model: "F95SD.3",
    category: "fridge",
    image: "/img/products/F95SD.3.jpeg",
    images: ["/img/products/F95SD.3.jpeg"],
    price: 7900,
    rating: 4.4,
    reviews: 83,
    icon: "🧊",
    tags: [
      "tcl",
      "fridge"
    ],
    description: "90Ltrs · Fast Cooling · Silver · Crisper Drawer · 5 Temperature Level",
    badge: "new"
  },
  {
    id: 619,
    name: "Nasco 16Ltrs 3Taps Water Dispenser",
    brand: "NASCO",
    brandId: "nasco",
    model: "NAS-YL-1128BLM-FRONT",
    category: "small",
    image: "/img/products/NAS-YL-1128BLM-FRONT.png",
    images: ["/img/products/NAS-YL-1128BLM-FRONT.png"],
    price: 4600,
    rating: 4.4,
    reviews: 72,
    icon: "⚡",
    tags: [
      "nasco",
      "small"
    ],
    description: "16 Ltrs · 3 Taps · Black and Silver · Heating and Cooling Switch · Energy and Saving",
    badge: "new"
  },
  {
    id: 620,
    name: "Nasco 16Ltrs 2Taps Water Dispenser",
    brand: "NASCO",
    brandId: "nasco",
    model: "NAS-YL-1115BLM-FRONT",
    category: "small",
    image: "/img/products/NAS-YL-1115BLM-FRONT.png",
    images: ["/img/products/NAS-YL-1115BLM-FRONT.png"],
    price: 1449,
    rating: 4.4,
    reviews: 47,
    icon: "⚡",
    tags: [
      "nasco",
      "small"
    ],
    description: "16 Ltrs · 2 Taps · Black · Heating and Cooling Switch · Energy and Saving",
    badge: "new"
  },
  {
    id: 621,
    name: "Samsung 1500Watt Sound Tower",
    brand: "Samsung",
    brandId: "samsung",
    model: "levant-sound-tower-mx-t70-mx-t70-zn-444983261",
    category: "small",
    image: "/img/products/levant-sound-tower-mx-t70-mx-t70-zn-444983261.png",
    images: ["/img/products/levant-sound-tower-mx-t70-mx-t70-zn-444983261.png"],
    price: 4600,
    rating: 4.4,
    reviews: 58,
    icon: "⚡",
    tags: [
      "samsung",
      "small"
    ],
    description: "Tower Shape · Double Speaker · Sound Effect Lightening · Black · Built in Woofer",
    badge: "new"
  },
  {
    id: 622,
    name: "Samsung 200Watt Sound Bar",
    brand: "Samsung",
    brandId: "samsung",
    model: "HW-C450XA-4",
    category: "small",
    image: "/img/products/HW-C450XA-4.png",
    images: ["/img/products/HW-C450XA-4.png"],
    price: 4600,
    rating: 4.4,
    reviews: 26,
    icon: "⚡",
    tags: [
      "samsung",
      "small"
    ],
    description: "2.1 channels · Wireless subwoofer · DTS Virtual:X &amp; Dolby Audio · Seamless connectivity · Energy efficient",
    badge: "new"
  },
  {
    id: 623,
    name: "Samsung 40Ltrs Grill Microwave",
    brand: "Samsung",
    brandId: "samsung",
    model: "ae-mw5500d-mg40dg5525ag-mg40dg5525agsg-541311049",
    category: "kitchen",
    image: "/img/products/ae-mw5500d-mg40dg5525ag-mg40dg5525agsg-541311049.png",
    images: ["/img/products/ae-mw5500d-mg40dg5525ag-mg40dg5525agsg-541311049.png"],
    price: 3200,
    rating: 4.4,
    reviews: 24,
    icon: "🍳",
    tags: [
      "samsung",
      "kitchen"
    ],
    description: "40 Ltr · Grill · Triple Distribution System · Ceramic enamel interior · Energy-saving ECO Mode",
    badge: "new"
  },
  {
    id: 624,
    name: "Samsung 1.0HP Split Air Condition",
    brand: "Samsung",
    brandId: "samsung",
    model: "AR09CRHGAWK-AF",
    category: "ac",
    image: "/img/products/AR09CRHGAWK-AF.png",
    images: ["/img/products/AR09CRHGAWK-AF.png"],
    price: 11200,
    rating: 4.4,
    reviews: 78,
    icon: "❄️",
    tags: [
      "samsung",
      "ac"
    ],
    description: "1.0HP · Triple Protection · White · R410 Gas · Volt Control",
    badge: "new"
  },
  {
    id: 625,
    name: "Nasco 2.0Hp Floor Standing Air Condition",
    brand: "NASCO",
    brandId: "nasco",
    model: "NAS-JFS-24N1-FRONT",
    category: "ac",
    image: "/img/products/NAS-JFS-24N1-FRONT.png",
    images: ["/img/products/NAS-JFS-24N1-FRONT.png"],
    price: 22999,
    rating: 4.4,
    reviews: 50,
    icon: "❄️",
    tags: [
      "nasco",
      "ac"
    ],
    description: "2.0HP · 6300 W · Digital Panel · White · Multi Level Wind Speed",
    badge: "new"
  },
  {
    id: 626,
    name: "Nasco 2.5Hp Floor Standing Air Condition",
    brand: "NASCO",
    brandId: "nasco",
    model: "NAS-JFS-24N1-FRONT",
    category: "ac",
    image: "/img/products/NAS-JFS-24N1-FRONT.png",
    images: ["/img/products/NAS-JFS-24N1-FRONT.png"],
    price: 11200,
    rating: 4.4,
    reviews: 71,
    icon: "❄️",
    tags: [
      "nasco",
      "ac"
    ],
    description: "2.5HP · 6300 W · Digital Panel · White · Multi Level Wind Speed ·  · &nbsp;",
    badge: "new"
  },
  {
    id: 627,
    name: "Samsung 60CM 12Plate Dish Washer",
    brand: "Samsung",
    brandId: "samsung",
    model: "14-sets-of-dishwashers-Hygiene-Care-black-DW60CG550FSGSV-FRONT-OPEN-1",
    category: "kitchen",
    image: "/img/products/14-sets-of-dishwashers-Hygiene-Care-black-DW60CG550FSGSV-FRONT-OPEN-1.png",
    images: ["/img/products/14-sets-of-dishwashers-Hygiene-Care-black-DW60CG550FSGSV-FRONT-OPEN-1.png"],
    price: 3200,
    rating: 4.4,
    reviews: 41,
    icon: "🍳",
    tags: [
      "samsung",
      "kitchen"
    ],
    description: "2000W · 120ML · SOLE PLATE · NONSTICK SOLE PLATE · POWER INDICATOR",
    badge: "new"
  },
  {
    id: 628,
    name: "Samsung 60CM 12Plate Dish Washer",
    brand: "Samsung",
    brandId: "samsung",
    model: "Samsung-DW60CG550B00EU-Built-in-60cm-Dishwasher-with-Auto-Door-14-Place-Setting-FRONT-OPEN-2",
    category: "kitchen",
    image: "/img/products/Samsung-DW60CG550B00EU-Built-in-60cm-Dishwasher-with-Auto-Door-14-Place-Setting-FRONT-OPEN-2.png",
    images: ["/img/products/Samsung-DW60CG550B00EU-Built-in-60cm-Dishwasher-with-Auto-Door-14-Place-Setting-FRONT-OPEN-2.png"],
    price: 3200,
    rating: 4.4,
    reviews: 86,
    icon: "🍳",
    tags: [
      "samsung",
      "kitchen"
    ],
    description: "Built in 60cm · Dishwasher with Auto Door, · 14 Place Setting · Quick Wash · Energy-Efficient Operation",
    badge: "new"
  },
  {
    id: 629,
    name: "Samsung 9KG Dryer Machine",
    brand: "Samsung",
    brandId: "samsung",
    model: "Samsung-Dryer-Black-Heat-Pump-_-Optimal-Dry-_-9kg-DV90DG52A0ABEF-Class-A-FRONT",
    category: "laundry",
    image: "/img/products/Samsung-Dryer-Black-Heat-Pump-_-Optimal-Dry-_-9kg-DV90DG52A0ABEF-Class-A-FRONT.png",
    images: ["/img/products/Samsung-Dryer-Black-Heat-Pump-_-Optimal-Dry-_-9kg-DV90DG52A0ABEF-Class-A-FRONT.png"],
    price: 8100,
    rating: 4.4,
    reviews: 77,
    icon: "🫧",
    tags: [
      "samsung",
      "laundry"
    ],
    description: "9KG · Diamond Drum · Full Automatic · Black · Spin Speed",
    badge: "new"
  },
  {
    id: 630,
    name: "Nasco 16Ltrs Water Dispenser",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASCO-TWO-TAP-WATER-DISPENSER-WITH-STORAGE-CABINET-NAS-YD275-W-FRONT",
    category: "small",
    image: "/img/products/NASCO-TWO-TAP-WATER-DISPENSER-WITH-STORAGE-CABINET-NAS-YD275-W-FRONT.png",
    images: ["/img/products/NASCO-TWO-TAP-WATER-DISPENSER-WITH-STORAGE-CABINET-NAS-YD275-W-FRONT.png"],
    price: 4600,
    rating: 4.4,
    reviews: 45,
    icon: "⚡",
    tags: [
      "nasco",
      "small"
    ],
    description: "16Liters · 2 Taps · Silver · Heating and Cooling Switch · Fridge Cabinet",
    badge: "new"
  },
  {
    id: 631,
    name: "Nasco 16Ltrs Water Dispenser",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASCO-TWO-TAP-WATER-DISPENSER-WHITE-NAS-YD200-W-SIDE",
    category: "small",
    image: "/img/products/NASCO-TWO-TAP-WATER-DISPENSER-WHITE-NAS-YD200-W-SIDE.png",
    images: ["/img/products/NASCO-TWO-TAP-WATER-DISPENSER-WHITE-NAS-YD200-W-SIDE.png"],
    price: 4600,
    rating: 4.4,
    reviews: 82,
    icon: "⚡",
    tags: [
      "nasco",
      "small"
    ],
    description: "16 LTRS · 2 TAPS · HEATING AND COOLING SWITCH · WHITE · FRIDGE CABINET · ENERGY SAVING",
    badge: "new"
  },
  {
    id: 632,
    name: "Nasco 16Ltrs Water Dispenser",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASCO-16LTR-2-TAPS-WATER-DISPENSER-YL2233S-W-FRONT",
    category: "small",
    image: "/img/products/NASCO-16LTR-2-TAPS-WATER-DISPENSER-YL2233S-W-FRONT.png",
    images: ["/img/products/NASCO-16LTR-2-TAPS-WATER-DISPENSER-YL2233S-W-FRONT.png"],
    price: 4600,
    rating: 4.4,
    reviews: 93,
    icon: "⚡",
    tags: [
      "nasco",
      "small"
    ],
    description: "16 Ltrs · 2 Taps · White · Heating and Cooling Switch · Fridge",
    badge: "new"
  },
  {
    id: 633,
    name: "TCL 16Ltrs Water Dispenser",
    brand: "TCL",
    brandId: "tcl",
    model: "TCL-16LTRS-2-TAPS-WATER-DISPENSER-TY-LYR47W-FRONT",
    category: "small",
    image: "/img/products/TCL-16LTRS-2-TAPS-WATER-DISPENSER-TY-LYR47W-FRONT.png",
    images: ["/img/products/TCL-16LTRS-2-TAPS-WATER-DISPENSER-TY-LYR47W-FRONT.png"],
    price: 4600,
    rating: 4.4,
    reviews: 29,
    icon: "⚡",
    tags: [
      "tcl",
      "small"
    ],
    description: "Hot and Cold Water Dispenser · Top Loading Standing Model Compressor cooling · Black Color · 2 Taps · 16 Ltrs",
    badge: "new"
  },
  {
    id: 634,
    name: "Tcl 16Ltrs Water Dispenser",
    brand: "TCL",
    brandId: "tcl",
    model: "TCL-16LTRS-3-TAPS-WATER-DISPENSER-TY-LWYR109W-FRONT",
    category: "small",
    image: "/img/products/TCL-16LTRS-3-TAPS-WATER-DISPENSER-TY-LWYR109W-FRONT.png",
    images: ["/img/products/TCL-16LTRS-3-TAPS-WATER-DISPENSER-TY-LWYR109W-FRONT.png"],
    price: 4600,
    rating: 4.4,
    reviews: 96,
    icon: "⚡",
    tags: [
      "tcl",
      "small"
    ],
    description: "16 Ltrs · 3 Taps · Hot, Normal &amp; Cold · White · Compressor Cooling",
    badge: "new"
  },
  {
    id: 635,
    name: "Tcl 16Ltrs Water Dispenser",
    brand: "TCL",
    brandId: "tcl",
    model: "TCL-WATER-DISPENSER-TY-LWYR107T-FRONT",
    category: "kitchen",
    image: "/img/products/TCL-WATER-DISPENSER-TY-LWYR107T-FRONT.png",
    images: ["/img/products/TCL-WATER-DISPENSER-TY-LWYR107T-FRONT.png"],
    price: 3200,
    rating: 4.4,
    reviews: 29,
    icon: "🍳",
    tags: [
      "tcl",
      "kitchen"
    ],
    description: "3 Taps · 16 Ltrs · Hot, Normal and Cold · White ·  · &nbsp;",
    badge: "new"
  },
  {
    id: 636,
    name: "Tcl 85&#8243; UHD 4K Smart Andriod Television",
    brand: "TCL",
    brandId: "tcl",
    model: "85V6B-FRONT",
    category: "tv",
    image: "/img/products/85V6B-FRONT.png",
    images: ["/img/products/85V6B-FRONT.png"],
    price: 26099,
    rating: 4.4,
    reviews: 36,
    icon: "📺",
    tags: [
      "tcl",
      "tv"
    ],
    description: "2K Android Smart TV · UHD · 4K",
    badge: "new"
  },
  {
    id: 637,
    name: "TCL 55&#8243; UHD 4K Smart Android Television",
    brand: "TCL",
    brandId: "tcl",
    model: "55P7K-SIDE",
    category: "tv",
    image: "/img/products/55P7K-SIDE.png",
    images: ["/img/products/55P7K-SIDE.png"],
    price: 5499,
    rating: 4.4,
    reviews: 58,
    icon: "📺",
    tags: [
      "tcl",
      "tv"
    ],
    description: "55&#8243; · HDMI · HDR · Dolby Atoms",
    badge: "new"
  },
  {
    id: 638,
    name: "Tcl 32&#8243; FHD Smart Android Television",
    brand: "TCL",
    brandId: "tcl",
    model: "TCL-FHD-SMART-ANDROID-TV-32″-32S4500A-FRONT",
    category: "tv",
    image: "/img/products/TCL-FHD-SMART-ANDROID-TV-32″-32S4500A-FRONT.png",
    images: ["/img/products/TCL-FHD-SMART-ANDROID-TV-32″-32S4500A-FRONT.png"],
    price: 2799,
    rating: 4.4,
    reviews: 77,
    icon: "📺",
    tags: [
      "tcl",
      "tv"
    ],
    description: "32&#8243; · HDMI *2 · Android TV",
    badge: "new"
  },
  {
    id: 639,
    name: "Tcl 43&#8243; FHD Smart Android Television",
    brand: "TCL",
    brandId: "tcl",
    model: "TCL-FHD-SMART-ANDROID-TV-43″43S4500A-FRONT",
    category: "tv",
    image: "/img/products/TCL-FHD-SMART-ANDROID-TV-43″43S4500A-FRONT.png",
    images: ["/img/products/TCL-FHD-SMART-ANDROID-TV-43″43S4500A-FRONT.png"],
    price: 23700,
    rating: 4.4,
    reviews: 22,
    icon: "📺",
    tags: [
      "tcl",
      "tv"
    ],
    description: "43&#8243; · HDMIx2 · Dolby Atoms · USB · Wifi · Bluetooth",
    badge: "new"
  },
  {
    id: 640,
    name: "Tcl 43&#8243; FHD Satellite Television",
    brand: "TCL",
    brandId: "tcl",
    model: "TCL-FHD-SATELLITE-4343D3400-FRONT",
    category: "tv",
    image: "/img/products/TCL-FHD-SATELLITE-4343D3400-FRONT.png",
    images: ["/img/products/TCL-FHD-SATELLITE-4343D3400-FRONT.png"],
    price: 3499,
    rating: 4.4,
    reviews: 90,
    icon: "📺",
    tags: [
      "tcl",
      "tv"
    ],
    description: "43&#8243; · HDMIx3 · USBx2 · Dolby Atoms · Sleep Timer",
    badge: "new"
  },
  {
    id: 641,
    name: "Samsung 650Ltrs 4 Doors Bespoke Refrigerator",
    brand: "Samsung",
    brandId: "samsung",
    model: "uk-t-style-french-door-see-thru-door-rf65db970e22eu-540378321-1",
    category: "fridge",
    image: "/img/products/uk-t-style-french-door-see-thru-door-rf65db970e22eu-540378321-1.jpg",
    images: ["/img/products/uk-t-style-french-door-see-thru-door-rf65db970e22eu-540378321-1.jpg"],
    price: 49999,
    rating: 4.4,
    reviews: 59,
    icon: "🧊",
    tags: [
      "samsung",
      "fridge"
    ],
    description: "650 Ltrs · 4 Doors Flex · Wifi Connectivity · Black · Dual Auto ice Maker",
    badge: "new"
  },
  {
    id: 642,
    name: "Nasco Steam Iron",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASCO-1200-WATTS-STEAM-IRON-NAS-2202A-DSS-FRONT",
    category: "small",
    image: "/img/products/NASCO-1200-WATTS-STEAM-IRON-NAS-2202A-DSS-FRONT.png",
    images: ["/img/products/NASCO-1200-WATTS-STEAM-IRON-NAS-2202A-DSS-FRONT.png"],
    price: 199,
    rating: 4.4,
    reviews: 39,
    icon: "⚡",
    tags: [
      "nasco",
      "small"
    ],
    description: "Steam Iron · Spray Control · Self Clean · 1200 Watt",
    badge: "new"
  },
  {
    id: 643,
    name: "Nasco Handheld Steamer",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASCO-HANDHELD-STEAMER-NAS-2206-GS-RIGHT",
    category: "small",
    image: "/img/products/NASCO-HANDHELD-STEAMER-NAS-2206-GS-RIGHT.png",
    images: ["/img/products/NASCO-HANDHELD-STEAMER-NAS-2206-GS-RIGHT.png"],
    price: 299,
    rating: 4.4,
    reviews: 97,
    icon: "⚡",
    tags: [
      "nasco",
      "small"
    ],
    description: "Handheld Steamer",
    badge: "new"
  },
  {
    id: 644,
    name: "Nasco Dry Iron",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASCO-100-WATTS-STEAM-IRON-NAS-2203-DI-FRONT",
    category: "small",
    image: "/img/products/NASCO-100-WATTS-STEAM-IRON-NAS-2203-DI-FRONT.png",
    images: ["/img/products/NASCO-100-WATTS-STEAM-IRON-NAS-2203-DI-FRONT.png"],
    price: 149,
    rating: 4.4,
    reviews: 85,
    icon: "⚡",
    tags: [
      "nasco",
      "small"
    ],
    description: "Dry Iron · 1000 Watt · Anti-Drop · Power Indicator ·  · &nbsp;",
    badge: "new"
  },
  {
    id: 645,
    name: "Nasco Steam Iron",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASCO-2200WATT-STEAM-IRON-NAS-2205-DSS-SIDE1",
    category: "small",
    image: "/img/products/NASCO-2200WATT-STEAM-IRON-NAS-2205-DSS-SIDE1.png",
    images: ["/img/products/NASCO-2200WATT-STEAM-IRON-NAS-2205-DSS-SIDE1.png"],
    price: 4600,
    rating: 4.4,
    reviews: 42,
    icon: "⚡",
    tags: [
      "nasco",
      "small"
    ],
    description: "Burst of Steam · 22oo Watt · Spray Control · Self Clean · Ceramic Coating",
    badge: "new"
  },
  {
    id: 646,
    name: "Nasco Steam Iron",
    brand: "NASCO",
    brandId: "nasco",
    model: "NAS-220C-DS-3-300x300-1",
    category: "small",
    image: "/img/products/NAS-220C-DS-3-300x300-1.jpeg",
    images: ["/img/products/NAS-220C-DS-3-300x300-1.jpeg"],
    price: 4600,
    rating: 4.4,
    reviews: 98,
    icon: "⚡",
    tags: [
      "nasco",
      "small"
    ],
    description: "Burst of Steam · Spray Control · Self Clean · Ceramic Coating",
    badge: "new"
  },
  {
    id: 647,
    name: "Midea 1500Watt Garment Steamer",
    brand: "Other",
    brandId: "other",
    model: "YGJ15Q1W",
    category: "small",
    image: "/img/products/YGJ15Q1W.jpg",
    images: ["/img/products/YGJ15Q1W.jpg"],
    price: 899,
    rating: 4.4,
    reviews: 76,
    icon: "⚡",
    tags: [
      "other",
      "small"
    ],
    description: "1500Watt · Garment Steamer",
    badge: "new"
  },
  {
    id: 648,
    name: "Midea 1.7Ltrs Kettle",
    brand: "Midea",
    brandId: "midea",
    model: "MIDEA-1.7LTR-GLASS-KETTLE-MK-17G02A2-1",
    category: "kitchen",
    image: "/img/products/MIDEA-1.7LTR-GLASS-KETTLE-MK-17G02A2-1.jpg",
    images: ["/img/products/MIDEA-1.7LTR-GLASS-KETTLE-MK-17G02A2-1.jpg"],
    price: 3200,
    rating: 4.4,
    reviews: 92,
    icon: "🍳",
    tags: [
      "midea",
      "kitchen"
    ],
    description: "1.7 Liters · 1800 Watt · Led Back lighting · Auto Cut Off · Transparent",
    badge: "new"
  },
  {
    id: 649,
    name: "Nasco 98Ltrs Top Mounted Freezer",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASCO-98LTRS-TOP-FREEZER-NASF2-13S-FRONT",
    category: "fridge",
    image: "/img/products/NASCO-98LTRS-TOP-FREEZER-NASF2-13S-FRONT.jpg",
    images: ["/img/products/NASCO-98LTRS-TOP-FREEZER-NASF2-13S-FRONT.jpg"],
    price: 2549,
    rating: 4.4,
    reviews: 56,
    icon: "🧊",
    tags: [
      "nasco",
      "fridge"
    ],
    description: "98 Ltrs · Manual Defrost · Glass Shelves · Grey · Vegetable Box",
    badge: "new"
  },
  {
    id: 650,
    name: "Midea 18&#8243; Rechargeable Fan",
    brand: "Midea",
    brandId: "midea",
    model: "FS45-23MRD-FRONT",
    category: "small",
    image: "/img/products/FS45-23MRD-FRONT.jpg",
    images: ["/img/products/FS45-23MRD-FRONT.jpg"],
    price: 999,
    rating: 4.4,
    reviews: 99,
    icon: "⚡",
    tags: [
      "midea",
      "small"
    ],
    description: "",
    badge: "new"
  },
  {
    id: 651,
    name: "Samsung 8KG Dryer Machine",
    brand: "Samsung",
    brandId: "samsung",
    model: "uk-dv5000c-476541-dv80cgc0b0aeeu-538070127-300x300-1",
    category: "small",
    image: "/img/products/uk-dv5000c-476541-dv80cgc0b0aeeu-538070127-300x300-1.webp",
    images: ["/img/products/uk-dv5000c-476541-dv80cgc0b0aeeu-538070127-300x300-1.webp"],
    price: 13999,
    rating: 4.4,
    reviews: 56,
    icon: "⚡",
    tags: [
      "samsung",
      "small"
    ],
    description: "8KG · Dryer · Heat Pump · Black · Child Lock",
    badge: "new"
  },
  {
    id: 652,
    name: "Nasco 728Ltrs Display Fridge",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASCO-728LTR-DISPLAY-FRIDGE-NAS-850-2DR-FRONT",
    category: "fridge",
    image: "/img/products/NASCO-728LTR-DISPLAY-FRIDGE-NAS-850-2DR-FRONT.png",
    images: ["/img/products/NASCO-728LTR-DISPLAY-FRIDGE-NAS-850-2DR-FRONT.png"],
    price: 11999,
    rating: 4.4,
    reviews: 26,
    icon: "🧊",
    tags: [
      "nasco",
      "fridge"
    ],
    description: "728 Ltrs · Glass Door · 10 Shelves · Child Lock · Interior Light",
    badge: "new"
  },
  {
    id: 653,
    name: "Samsung 55&#8243; QLED Flat 4K Television",
    brand: "Samsung",
    brandId: "samsung",
    model: "QA55Q60DAUXKE-FRONT",
    category: "tv",
    image: "/img/products/QA55Q60DAUXKE-FRONT.jpg",
    images: ["/img/products/QA55Q60DAUXKE-FRONT.jpg"],
    price: 13999,
    rating: 4.4,
    reviews: 95,
    icon: "📺",
    tags: [
      "samsung",
      "tv"
    ],
    description: "55&#8243; · 4K · Wifi · USBx2 · Flat Panel · Auto Detection · Q Viewing Angle",
    badge: "new"
  },
  {
    id: 654,
    name: "Tcl 65&#8243; 4K UHD Smart Android Television",
    brand: "TCL",
    brandId: "tcl",
    model: "GF",
    category: "tv",
    image: "/img/products/GF.jpg",
    images: ["/img/products/GF.jpg"],
    price: 23700,
    rating: 4.4,
    reviews: 22,
    icon: "📺",
    tags: [
      "tcl",
      "tv"
    ],
    description: "65&#8243; · Android Tv · Bluetooth · Wi-Fi",
    badge: "new"
  },
  {
    id: 655,
    name: "Tcl 55&#8243; 4K UHD Smart Android Television",
    brand: "TCL",
    brandId: "tcl",
    model: "GF",
    category: "tv",
    image: "/img/products/GF.jpg",
    images: ["/img/products/GF.jpg"],
    price: 23700,
    rating: 4.4,
    reviews: 67,
    icon: "📺",
    tags: [
      "tcl",
      "tv"
    ],
    description: "55&#8243; · 4K · USB · Wifi · Bluetooth · Smart Android",
    badge: "new"
  },
  {
    id: 656,
    name: "Tcl 50&#8243; 4K UHD Smart Android Television",
    brand: "TCL",
    brandId: "tcl",
    model: "GF",
    category: "tv",
    image: "/img/products/GF.jpg",
    images: ["/img/products/GF.jpg"],
    price: 23700,
    rating: 4.4,
    reviews: 53,
    icon: "📺",
    tags: [
      "tcl",
      "tv"
    ],
    description: "50&#8243; · 4K · Smart Android · Bluetooth · Wifi Ethernet ·  · &nbsp;",
    badge: "new"
  },
  {
    id: 657,
    name: "Tcl 32&#8243; FHD Satellite Television",
    brand: "TCL",
    brandId: "tcl",
    model: "TLC-FHD-SATELLITE-32-32D3400-FRONT",
    category: "tv",
    image: "/img/products/TLC-FHD-SATELLITE-32-32D3400-FRONT.png",
    images: ["/img/products/TLC-FHD-SATELLITE-32-32D3400-FRONT.png"],
    price: 23700,
    rating: 4.4,
    reviews: 29,
    icon: "📺",
    tags: [
      "tcl",
      "tv"
    ],
    description: "32&#8243; · HDMI · USB · Sleep Timer · Dolby Audio",
    badge: "new"
  },
  {
    id: 658,
    name: "Samsung 290Ltrs Double Door Bottom Freezer",
    brand: "Samsung",
    brandId: "samsung",
    model: "RB33J3700SAMU-3-jpg",
    category: "fridge",
    image: "/img/products/RB33J3700SAMU-3-jpg.webp",
    images: ["/img/products/RB33J3700SAMU-3-jpg.webp"],
    price: 12699,
    rating: 4.4,
    reviews: 87,
    icon: "🧊",
    tags: [
      "samsung",
      "fridge"
    ],
    description: "290 Ltrs · Digital Display · Digital Inverter · Silver · Water Dispenser",
    badge: "new"
  },
  {
    id: 659,
    name: "Samsung 2.0HP Split R410 Air Condition",
    brand: "Samsung",
    brandId: "samsung",
    model: "AR09TRHGAWK-GA-jpg",
    category: "ac",
    image: "/img/products/AR09TRHGAWK-GA-jpg.webp",
    images: ["/img/products/AR09TRHGAWK-GA-jpg.webp"],
    price: 7999,
    rating: 4.4,
    reviews: 67,
    icon: "❄️",
    tags: [
      "samsung",
      "ac"
    ],
    description: "2.0HP · Tripple Protector · R410 Gas · Volt Control · Copper Condenser",
    badge: "new"
  },
  {
    id: 660,
    name: "Samsung 2.5HP Split R410 Air Condition",
    brand: "Samsung",
    brandId: "samsung",
    model: "AR09TRHGAWK-GA-jpg",
    category: "ac",
    image: "/img/products/AR09TRHGAWK-GA-jpg.webp",
    images: ["/img/products/AR09TRHGAWK-GA-jpg.webp"],
    price: 10499,
    rating: 4.4,
    reviews: 50,
    icon: "❄️",
    tags: [
      "samsung",
      "ac"
    ],
    description: "2.5HP · Triple Indicator · Copper Condenser · R410",
    badge: "new"
  },
  {
    id: 661,
    name: "Samsung 1.5HP Split R410 Air Condition",
    brand: "Samsung",
    brandId: "samsung",
    model: "AR09TRHGAWK-GA-jpg",
    category: "ac",
    image: "/img/products/AR09TRHGAWK-GA-jpg.webp",
    images: ["/img/products/AR09TRHGAWK-GA-jpg.webp"],
    price: 11200,
    rating: 4.4,
    reviews: 95,
    icon: "❄️",
    tags: [
      "samsung",
      "ac"
    ],
    description: "1.5HP · Triple Indicator · Volt Control · R410 · Copper Condenser",
    badge: "new"
  },
  {
    id: 662,
    name: "Samsung 9KG Add Wash Washing Machine",
    brand: "Samsung",
    brandId: "samsung",
    model: "SAMSUNG-ADD-WASH-WW80T554DAN_NQ-front-jpg",
    category: "laundry",
    image: "/img/products/SAMSUNG-ADD-WASH-WW80T554DAN_NQ-front-jpg.webp",
    images: ["/img/products/SAMSUNG-ADD-WASH-WW80T554DAN_NQ-front-jpg.webp"],
    price: 9199,
    rating: 4.4,
    reviews: 23,
    icon: "🫧",
    tags: [
      "samsung",
      "laundry"
    ],
    description: "8KG · Add Wash · Eco Bubble · AI Control Panel · Silver",
    badge: "new"
  },
  {
    id: 663,
    name: "Samsung 2.5HP Split Inverter R410 Air Condition",
    brand: "Samsung",
    brandId: "samsung",
    model: "AR24BVHGAWK_AF-jpg",
    category: "ac",
    image: "/img/products/AR24BVHGAWK_AF-jpg.webp",
    images: ["/img/products/AR24BVHGAWK_AF-jpg.webp"],
    price: 13499,
    rating: 4.4,
    reviews: 30,
    icon: "❄️",
    tags: [
      "samsung",
      "ac"
    ],
    description: "2.5HP · Triple Indicator · Copper Condenser · R410 Gas · Inverter Compressor ·  · &nbsp;",
    badge: "new"
  },
  {
    id: 664,
    name: "Tcl 3.5HP Floor Standing R410 Air Condition",
    brand: "TCL",
    brandId: "tcl",
    model: "TCL-FLOOR-STANDING-R410-3.5HP-TAC-36CFAC-FRONT-jpg",
    category: "ac",
    image: "/img/products/TCL-FLOOR-STANDING-R410-3.5HP-TAC-36CFAC-FRONT-jpg.webp",
    images: ["/img/products/TCL-FLOOR-STANDING-R410-3.5HP-TAC-36CFAC-FRONT-jpg.webp"],
    price: 11999,
    rating: 4.4,
    reviews: 86,
    icon: "❄️",
    tags: [
      "tcl",
      "ac"
    ],
    description: "3.5HP · Floor Standing Type Air Conditioner · T1 Condition · R410A · Cooling Only ·  · &nbsp;",
    badge: "new"
  },
  {
    id: 665,
    name: "Tcl 5.0HP Floor Standing R410 Air Condition",
    brand: "TCL",
    brandId: "tcl",
    model: "C-front-jpg",
    category: "ac",
    image: "/img/products/C-front-jpg.webp",
    images: ["/img/products/C-front-jpg.webp"],
    price: 54999,
    rating: 4.4,
    reviews: 51,
    icon: "❄️",
    tags: [
      "tcl",
      "ac"
    ],
    description: "5.0HP · Low Noise · Touch Control · Side Air Inlet · 5M Copper Pippes ·  · &nbsp;",
    badge: "new"
  },
  {
    id: 666,
    name: "Tcl 2.0HP Split R410 Air Condition",
    brand: "TCL",
    brandId: "tcl",
    model: "TCL-SPLIT-R410-AIR-CONDITIONER-2.0HP-TAC-18CSA-XA51-FRONT-jpg",
    category: "ac",
    image: "/img/products/TCL-SPLIT-R410-AIR-CONDITIONER-2.0HP-TAC-18CSA-XA51-FRONT-jpg.webp",
    images: ["/img/products/TCL-SPLIT-R410-AIR-CONDITIONER-2.0HP-TAC-18CSA-XA51-FRONT-jpg.webp"],
    price: 11200,
    rating: 4.4,
    reviews: 90,
    icon: "❄️",
    tags: [
      "tcl",
      "ac"
    ],
    description: "2.0HP · Filter Cleaning Indicator · Low Noise · Automatic Restart · R410 Gas",
    badge: "new"
  },
  {
    id: 667,
    name: "Tcl 1.5HP Split R410 Air Condition",
    brand: "TCL",
    brandId: "tcl",
    model: "TCL-SPLIT-R410-AIR-CONDITIONER-1.5HP-TAC-12CSA-XA51-FRONT-jpg",
    category: "ac",
    image: "/img/products/TCL-SPLIT-R410-AIR-CONDITIONER-1.5HP-TAC-12CSA-XA51-FRONT-jpg.webp",
    images: ["/img/products/TCL-SPLIT-R410-AIR-CONDITIONER-1.5HP-TAC-12CSA-XA51-FRONT-jpg.webp"],
    price: 11200,
    rating: 4.4,
    reviews: 32,
    icon: "❄️",
    tags: [
      "tcl",
      "ac"
    ],
    description: "1.5HP · Filer Cleaning Indicator · Low Noise · Smart Air Flow · Wifi Control",
    badge: "new"
  },
  {
    id: 668,
    name: "Samsung 2.0HP Split Inverter R410 Air Condition",
    brand: "Samsung",
    brandId: "samsung",
    model: "AR18BVHGAWKAF-front-jpg",
    category: "ac",
    image: "/img/products/AR18BVHGAWKAF-front-jpg.webp",
    images: ["/img/products/AR18BVHGAWKAF-front-jpg.webp"],
    price: 11399,
    rating: 4.4,
    reviews: 28,
    icon: "❄️",
    tags: [
      "samsung",
      "ac"
    ],
    description: "2.0HP · Triple Indicator · Inverter Compressor · R410 Gas · Energy Saving",
    badge: "new"
  },
  {
    id: 669,
    name: "Samsung 1.5HP Split Inverter R410 Air Condition",
    brand: "Samsung",
    brandId: "samsung",
    model: "AR18BVHGAWKAF-front-jpg",
    category: "ac",
    image: "/img/products/AR18BVHGAWKAF-front-jpg.webp",
    images: ["/img/products/AR18BVHGAWKAF-front-jpg.webp"],
    price: 11200,
    rating: 4.4,
    reviews: 41,
    icon: "❄️",
    tags: [
      "samsung",
      "ac"
    ],
    description: "1.5HP · Triple Indicator · Copper Condenser · R410 Gas · Inverter Compressor",
    badge: "new"
  },
  {
    id: 670,
    name: "Samsung 468Ltrs French Door Refrigerator",
    brand: "Samsung",
    brandId: "samsung",
    model: "RF48A4000M9-GH-front-jpg",
    category: "fridge",
    image: "/img/products/RF48A4000M9-GH-front-jpg.webp",
    images: ["/img/products/RF48A4000M9-GH-front-jpg.webp"],
    price: 7900,
    rating: 4.4,
    reviews: 41,
    icon: "🧊",
    tags: [
      "samsung",
      "fridge"
    ],
    description: "468 Ltrs · 4 Doors · Digital Inverter · Fresh Zone · Grey",
    badge: "new"
  },
  {
    id: 671,
    name: "Samsung 2.5HP R410 Split Inverter Air Condition",
    brand: "Samsung",
    brandId: "samsung",
    model: "SAMSUNG-2.5HP-SPLIT-ACS-INVERTER-R410-5",
    category: "ac",
    image: "/img/products/SAMSUNG-2.5HP-SPLIT-ACS-INVERTER-R410-5.jpg",
    images: ["/img/products/SAMSUNG-2.5HP-SPLIT-ACS-INVERTER-R410-5.jpg"],
    price: 11200,
    rating: 4.4,
    reviews: 40,
    icon: "❄️",
    tags: [
      "samsung",
      "ac"
    ],
    description: "2.5HP · Triple Indicator · Copper Condenser · R410 · Wind Free Cooling · Inverter Compressor ·  · &nbsp; · &nbsp; · &nbsp;",
    badge: "new"
  },
  {
    id: 672,
    name: "Samsung 2.0HP R410 Split Inverter Wind Free Air Condition",
    brand: "Samsung",
    brandId: "samsung",
    model: "SAMSUNG-2.0HP-R410-SPLIT-AC-1-3",
    category: "ac",
    image: "/img/products/SAMSUNG-2.0HP-R410-SPLIT-AC-1-3.jpg",
    images: ["/img/products/SAMSUNG-2.0HP-R410-SPLIT-AC-1-3.jpg"],
    price: 14999,
    rating: 4.4,
    reviews: 29,
    icon: "❄️",
    tags: [
      "samsung",
      "ac"
    ],
    description: "2.0HP · Triple Indicator · R410 Gas · Wind Free Cooling · Inverter Compressor ·  · &nbsp;",
    badge: "new"
  },
  {
    id: 673,
    name: "Samsung 1.5HP R410 Split Inverter Air Condition",
    brand: "Samsung",
    brandId: "samsung",
    model: "SAMSUNG-1.5HP-SPLIT-ACS-INVERTER-R410",
    category: "ac",
    image: "/img/products/SAMSUNG-1.5HP-SPLIT-ACS-INVERTER-R410.jpg",
    images: ["/img/products/SAMSUNG-1.5HP-SPLIT-ACS-INVERTER-R410.jpg"],
    price: 11200,
    rating: 4.4,
    reviews: 32,
    icon: "❄️",
    tags: [
      "samsung",
      "ac"
    ],
    description: "1.5HP · Triple Indicator · Copper Condenser · R410 Gas · Inverter Compressor · Wind Free Cooling",
    badge: "new"
  },
  {
    id: 674,
    name: "Samsung 820Ltrs 4 Doors Bespoke Refrigerator",
    brand: "Samsung",
    brandId: "samsung",
    model: "RF71A967532-UT-jpg",
    category: "fridge",
    image: "/img/products/RF71A967532-UT-jpg.webp",
    images: ["/img/products/RF71A967532-UT-jpg.webp"],
    price: 52199,
    rating: 4.4,
    reviews: 94,
    icon: "🧊",
    tags: [
      "samsung",
      "fridge"
    ],
    description: "820 Ltrs · 4 Doors · Ice Maker · Pink Colour · Wifi Connectivity",
    badge: "new"
  },
  {
    id: 675,
    name: "Samsung 290Ltrs Double Door Bottom Freezer",
    brand: "Samsung",
    brandId: "samsung",
    model: "RB30J3700SA-MU-jpg",
    category: "fridge",
    image: "/img/products/RB30J3700SA-MU-jpg.webp",
    images: ["/img/products/RB30J3700SA-MU-jpg.webp"],
    price: 7900,
    rating: 4.4,
    reviews: 94,
    icon: "🧊",
    tags: [
      "samsung",
      "fridge"
    ],
    description: "290 Ltrs · No Frost · Digital Inverter · Digital Display · Water Dispenser ·  · &nbsp;",
    badge: "new"
  },
  {
    id: 676,
    name: "Samsung 290Ltrs Double Door Bottom Freezer",
    brand: "Samsung",
    brandId: "samsung",
    model: "RB29FERNDSA-MU-jpg",
    category: "fridge",
    image: "/img/products/RB29FERNDSA-MU-jpg.webp",
    images: ["/img/products/RB29FERNDSA-MU-jpg.webp"],
    price: 7900,
    rating: 4.4,
    reviews: 21,
    icon: "🧊",
    tags: [
      "samsung",
      "fridge"
    ],
    description: "290 Ltrs · Digital Display · No Frost · Silver",
    badge: "new"
  },
  {
    id: 677,
    name: "Samsung 2.0HP R410 Split Inverter Wind Free AC",
    brand: "Samsung",
    brandId: "samsung",
    model: "samsung-1-5-ton-3-star-ar18cy3amwk-inverter-split-ac-white-digital-o581110396-p599223040-0-202303110556",
    category: "ac",
    image: "/img/products/samsung-1-5-ton-3-star-ar18cy3amwk-inverter-split-ac-white-digital-o581110396-p599223040-0-202303110556.webp",
    images: ["/img/products/samsung-1-5-ton-3-star-ar18cy3amwk-inverter-split-ac-white-digital-o581110396-p599223040-0-202303110556.webp"],
    price: 14999,
    rating: 4.4,
    reviews: 36,
    icon: "❄️",
    tags: [
      "samsung",
      "ac"
    ],
    description: "2.0 HP · Triple Protector · R410 Gas · Volt Control · Inverter Compressor · Energy Saving",
    badge: "new"
  },
  {
    id: 678,
    name: "Midea 142Ltrs Chest Freezer",
    brand: "Other",
    brandId: "other",
    model: "198ltr",
    category: "fridge",
    image: "/img/products/198ltr.jpg",
    images: ["/img/products/198ltr.jpg"],
    price: 7900,
    rating: 4.4,
    reviews: 46,
    icon: "🧊",
    tags: [
      "other",
      "fridge"
    ],
    description: "142 Ltrs · Key Lock · White · Removable Storage Basket · Energy Saving",
    badge: "new"
  },
  {
    id: 679,
    name: "Samsung 40Ltrs Solo Microwave",
    brand: "Samsung",
    brandId: "samsung",
    model: "MS405MADXBB-SG-jpg",
    category: "kitchen",
    image: "/img/products/MS405MADXBB-SG-jpg.webp",
    images: ["/img/products/MS405MADXBB-SG-jpg.webp"],
    price: 2899,
    rating: 4.4,
    reviews: 50,
    icon: "🍳",
    tags: [
      "samsung",
      "kitchen"
    ],
    description: "40 Ltrs · 1550 Watts · Energy Saving · LED Display · Stainless Steel",
    badge: "new"
  },
  {
    id: 680,
    name: "Samsung 430Watt Sound Bar",
    brand: "Samsung",
    brandId: "samsung",
    model: "SAMSUNG-SOUNDBAR-WITH-GAME-MODE",
    category: "small",
    image: "/img/products/SAMSUNG-SOUNDBAR-WITH-GAME-MODE.jpg",
    images: ["/img/products/SAMSUNG-SOUNDBAR-WITH-GAME-MODE.jpg"],
    price: 4499,
    rating: 4.4,
    reviews: 56,
    icon: "⚡",
    tags: [
      "samsung",
      "small"
    ],
    description: "430 Watt · Powerful Base · Bluetooth · HDMI | USB · Built-in Subwoofer · Remote Control · 3.1 Ch",
    badge: "new"
  },
  {
    id: 681,
    name: "Samsung 290Ltrs Double Door Refrigerator",
    brand: "Samsung",
    brandId: "samsung",
    model: "SAMSUNG-300LTR-DOUBLE-DOOR-BOTTOM-FREEZER-REFRIGERATOR-with-Water-Dispenser1",
    category: "fridge",
    image: "/img/products/SAMSUNG-300LTR-DOUBLE-DOOR-BOTTOM-FREEZER-REFRIGERATOR-with-Water-Dispenser1.jpg",
    images: ["/img/products/SAMSUNG-300LTR-DOUBLE-DOOR-BOTTOM-FREEZER-REFRIGERATOR-with-Water-Dispenser1.jpg"],
    price: 11799,
    rating: 4.4,
    reviews: 94,
    icon: "🧊",
    tags: [
      "samsung",
      "fridge"
    ],
    description: "CORD STORAGE ·  LED INDICATOR ·  ADJUSTABLE TEMP ·  NON SLIP RUBBER",
    badge: "new"
  },
  {
    id: 682,
    name: "Samsung 28Ltrs Solo Microwave",
    brand: "Samsung",
    brandId: "samsung",
    model: "SAMSUNG-28LTR-GRILL-MICROWAVE-MG28J5255GS-1",
    category: "kitchen",
    image: "/img/products/SAMSUNG-28LTR-GRILL-MICROWAVE-MG28J5255GS-1.jpg",
    images: ["/img/products/SAMSUNG-28LTR-GRILL-MICROWAVE-MG28J5255GS-1.jpg"],
    price: 2699,
    rating: 4.4,
    reviews: 74,
    icon: "🍳",
    tags: [
      "samsung",
      "kitchen"
    ],
    description: "32L OVEN · SINGLE GLASS DOOR · WITH VDE PLUG · 1000W · Energy Saving",
    badge: "new"
  },
  {
    id: 683,
    name: "Samsung 9KG Add Wash Washing Machine",
    brand: "Samsung",
    brandId: "samsung",
    model: "15892141276891",
    category: "laundry",
    image: "/img/products/15892141276891.jpg",
    images: ["/img/products/15892141276891.jpg"],
    price: 8100,
    rating: 4.4,
    reviews: 42,
    icon: "🫧",
    tags: [
      "samsung",
      "laundry"
    ],
    description: "9 KG · Add Wash · Bubble Soak · 1400 RPM",
    badge: "new"
  },
  {
    id: 684,
    name: "Samsung 1.5HP Split Air Condition",
    brand: "Samsung",
    brandId: "samsung",
    model: "",
    category: "ac",
    image: null,
    images: ["/img/products/SAMSUNG-2.0HP-R410-SPLIT-AC-1-3.jpg", "/img/products/SAMSUNG-2.5HP-R410-SPLIT-AC.jpg", "/img/products/SAMSUNG-1.5HP-SPLIT-ACS-INVERTER-R410.jpg", "/img/products/SAMSUNG-2.5HP-SPLIT-ACS-INVERTER-R410-5.jpg"],
    price: 6599,
    rating: 4.4,
    reviews: 81,
    icon: "❄️",
    tags: [
      "samsung",
      "ac"
    ],
    description: "1.5HP · Triple Protection · Copper Condensation · Volt Control · R41o Gas · Energy Saving ·  · &nbsp;",
    badge: "new"
  },
  {
    id: 685,
    name: "Samsung 350Watt Sound Bar",
    brand: "Samsung",
    brandId: "samsung",
    model: "SAMSUNG-54-W-2-CH-WIRELESS-REAR-SPEAKERS-KIT-SWA-8500S",
    category: "small",
    image: "/img/products/SAMSUNG-54-W-2-CH-WIRELESS-REAR-SPEAKERS-KIT-SWA-8500S.jpg",
    images: ["/img/products/SAMSUNG-54-W-2-CH-WIRELESS-REAR-SPEAKERS-KIT-SWA-8500S.jpg"],
    price: 1799,
    rating: 4.4,
    reviews: 85,
    icon: "⚡",
    tags: [
      "samsung",
      "small"
    ],
    description: "350 Watt · Powerful Base · Wireless Rear Speaker Kit · 2.0 Channel",
    badge: "new"
  },
  {
    id: 686,
    name: "Samsung 330Watt Sound Bar",
    brand: "Samsung",
    brandId: "samsung",
    model: "SAMSUNG-3.1.2-CH-SOUNDBAR-FOR-QLED-HW-Q70T",
    category: "small",
    image: "/img/products/SAMSUNG-3.1.2-CH-SOUNDBAR-FOR-QLED-HW-Q70T.jpg",
    images: ["/img/products/SAMSUNG-3.1.2-CH-SOUNDBAR-FOR-QLED-HW-Q70T.jpg"],
    price: 11399,
    rating: 4.4,
    reviews: 88,
    icon: "⚡",
    tags: [
      "samsung",
      "small"
    ],
    description: "Immersive 5.1 audio · Dolby Digital 5.1 &amp; DTS Virtual · Game Mode · Seamless setup · Slim, versatile design",
    badge: "new"
  },
  {
    id: 687,
    name: "Samsung 360Watt Sound Bar",
    brand: "Samsung",
    brandId: "samsung",
    model: "SAMSUNG-5.1-CH-360WATT-SOUNDBAR-FOR-QLED-HW-Q60T",
    category: "small",
    image: "/img/products/SAMSUNG-5.1-CH-360WATT-SOUNDBAR-FOR-QLED-HW-Q60T.jpg",
    images: ["/img/products/SAMSUNG-5.1-CH-360WATT-SOUNDBAR-FOR-QLED-HW-Q60T.jpg"],
    price: 4600,
    rating: 4.4,
    reviews: 88,
    icon: "⚡",
    tags: [
      "samsung",
      "small"
    ],
    description: "360 Watt · Powerful Base · Blutooth · HDMI | USB · Built-in Subwoofer · 5.1 Channel · 8 Speakers",
    badge: "new"
  },
  {
    id: 688,
    name: "Samsung 500Watt Sound Tower",
    brand: "Samsung",
    brandId: "samsung",
    model: "SAMSUNG-500-WATT-POWER-AUDIO-MX-T50",
    category: "small",
    image: "/img/products/SAMSUNG-500-WATT-POWER-AUDIO-MX-T50.png",
    images: ["/img/products/SAMSUNG-500-WATT-POWER-AUDIO-MX-T50.png"],
    price: 5299,
    rating: 4.4,
    reviews: 62,
    icon: "⚡",
    tags: [
      "samsung",
      "small"
    ],
    description: "Tower Shape ·  · Double Speaker ·  · Sound Effect Lightening ·  · Black ·  · Built in Woofer",
    badge: "new"
  },
  {
    id: 689,
    name: "Samsung 9KG Add Wash Washing Machine",
    brand: "Samsung",
    brandId: "samsung",
    model: "15892141276891",
    category: "laundry",
    image: "/img/products/15892141276891.jpg",
    images: ["/img/products/15892141276891.jpg"],
    price: 8100,
    rating: 4.4,
    reviews: 24,
    icon: "🫧",
    tags: [
      "samsung",
      "laundry"
    ],
    description: "ADDWASH · ECOBUBBLE · BUBBLE SOAK · PANEL DISPLAY LED · SUPERSPEED WASH · 9KG",
    badge: "new"
  },
  {
    id: 690,
    name: "Samsung 2.0HP Split ACS Inverter R410 Wind Free (Smart)",
    brand: "Samsung",
    brandId: "samsung",
    model: "SAMSUNG-2.0HP-SPLIT-ACS-INVERTER-R410-WIND-FREE-1",
    category: "ac",
    image: "/img/products/SAMSUNG-2.0HP-SPLIT-ACS-INVERTER-R410-WIND-FREE-1.jpg",
    images: ["/img/products/SAMSUNG-2.0HP-SPLIT-ACS-INVERTER-R410-WIND-FREE-1.jpg"],
    price: 12999,
    rating: 4.4,
    reviews: 33,
    icon: "❄️",
    tags: [
      "samsung",
      "ac"
    ],
    description: "TRIPLE PROTECTOR · WIFI · 2.0 HP · R410 GAS · INVERTER COMPRESSOR · ENERGY SAVING · WIND FREE COOLING",
    badge: "new"
  },
  {
    id: 691,
    name: "Samsung Split ACS Inverter R410 Wind Free (Smart)",
    brand: "Samsung",
    brandId: "samsung",
    model: "SAMSUNG-SPLIT-ACS-INVERTER-R410-WIND-FREE-1",
    category: "ac",
    image: "/img/products/SAMSUNG-SPLIT-ACS-INVERTER-R410-WIND-FREE-1.jpg",
    images: ["/img/products/SAMSUNG-SPLIT-ACS-INVERTER-R410-WIND-FREE-1.jpg"],
    price: 8999,
    rating: 4.4,
    reviews: 26,
    icon: "❄️",
    tags: [
      "samsung",
      "ac"
    ],
    description: "TRIPLE PROTECTOR · WIFI · 1.5 HP · R410 GAS · INVERTER COMPRESSOR · ENERGY SAVING · WIND FREE COOLING",
    badge: "new"
  },
  {
    id: 692,
    name: "Samsung 3.5HP Floor Standing AC With R410 Gas",
    brand: "Samsung",
    brandId: "samsung",
    model: "1SAMSUNG-3.0-HP-FLOOR-STANDING-AC-with-R410-Gas-AF30HVFMAWK",
    category: "ac",
    image: "/img/products/1SAMSUNG-3.0-HP-FLOOR-STANDING-AC-with-R410-Gas-AF30HVFMAWK.jpg",
    images: ["/img/products/1SAMSUNG-3.0-HP-FLOOR-STANDING-AC-with-R410-Gas-AF30HVFMAWK.jpg"],
    price: 29999,
    rating: 4.4,
    reviews: 68,
    icon: "❄️",
    tags: [
      "samsung",
      "ac"
    ],
    description: "FLOOR STANDING · INVERTER COMPRESSOR · 3.5HP · LARGE AIR FLOW · R410 REFRIGERANT · ENERGY SAVING · TOUCH CONTROL · WHITE",
    badge: "new"
  },
  {
    id: 693,
    name: "Nasco 400 Ltrs Double Door Chest Freezer",
    brand: "NASCO",
    brandId: "nasco",
    model: "NAS-500FL-DD-FRONT",
    category: "fridge",
    image: "/img/products/NAS-500FL-DD-FRONT.jpg",
    images: ["/img/products/NAS-500FL-DD-FRONT.jpg"],
    price: 7149,
    rating: 4.4,
    reviews: 91,
    icon: "🧊",
    tags: [
      "nasco",
      "fridge"
    ],
    description: "400 Ltrs · Manual Defrost · Adjustable Thermostat · Low Noise · Direct Cooling · 100% Cfc Free · Energy Saving",
    badge: "new"
  },
  {
    id: 694,
    name: "Nasco 12Ltrs Air Fryer",
    brand: "NASCO",
    brandId: "nasco",
    model: "AF7009C-GS-FRONT",
    category: "kitchen",
    image: "/img/products/AF7009C-GS-FRONT.jpg",
    images: ["/img/products/AF7009C-GS-FRONT.jpg"],
    price: 1299,
    rating: 4.4,
    reviews: 40,
    icon: "🍳",
    tags: [
      "nasco",
      "kitchen"
    ],
    description: "1.2 Ltrs · 1800 W · Black",
    badge: "new"
  },
  {
    id: 695,
    name: "Nasco 2.2Ltrs Air Fryer",
    brand: "NASCO",
    brandId: "nasco",
    model: "AF9009-GS-OPENED",
    category: "kitchen",
    image: "/img/products/AF9009-GS-OPENED.jpg",
    images: ["/img/products/AF9009-GS-OPENED.jpg"],
    price: 649,
    rating: 4.4,
    reviews: 71,
    icon: "🍳",
    tags: [
      "nasco",
      "kitchen"
    ],
    description: "2.2 Ltrs · 1000 W · Black",
    badge: "new"
  },
  {
    id: 696,
    name: "Samsung 40Ltrs Solo Microwave",
    brand: "Samsung",
    brandId: "samsung",
    model: "1-10",
    category: "kitchen",
    image: "/img/products/1-10.jpg",
    images: ["/img/products/1-10.jpg"],
    price: 3200,
    rating: 4.4,
    reviews: 96,
    icon: "🍳",
    tags: [
      "samsung",
      "kitchen"
    ],
    description: "40Ltrs · Solo · Ceramic Enamel · Led Display · Auto Nascook · Eco Mode · Child Safety Lock · Deodorization",
    badge: "new"
  },
  {
    id: 697,
    name: "Samsung 65″ Qn800A Neo QLED 8K Smart Tv",
    brand: "Samsung",
    brandId: "samsung",
    model: "CVF",
    category: "tv",
    image: "/img/products/CVF.jpg",
    images: ["/img/products/CVF.jpg"],
    price: 79999,
    rating: 4.4,
    reviews: 59,
    icon: "📺",
    tags: [
      "samsung",
      "tv"
    ],
    description: "65&#8243; · 8K · HDR+10 · Film Maker Mode · Dolby Atmos · Adaptive Sound · Q-Symphony · Ots+ · Bixby · Built-In Voice Assistant · Apple Airplay · Ambient Mode · Auto Game Mode · HDMI X4 · USB X3 · Blu",
    badge: "new"
  },
  {
    id: 698,
    name: "Nasco Home Theater Tall Speakers",
    brand: "NASCO",
    brandId: "nasco",
    model: "NAS-HT5.1-N6710-1",
    category: "small",
    image: "/img/products/NAS-HT5.1-N6710-1.png",
    images: ["/img/products/NAS-HT5.1-N6710-1.png"],
    price: 1699,
    rating: 4.4,
    reviews: 65,
    icon: "⚡",
    tags: [
      "nasco",
      "small"
    ],
    description: "95 Watt · Bluetooth · Mp3 · Fm · USB/Sd · Remote",
    badge: "new"
  },
  {
    id: 699,
    name: "Nasco Home Theater Tall Speakers",
    brand: "NASCO",
    brandId: "nasco",
    model: "NAS-HT5.1-N918-1",
    category: "small",
    image: "/img/products/NAS-HT5.1-N918-1.jpg",
    images: ["/img/products/NAS-HT5.1-N918-1.jpg"],
    price: 4600,
    rating: 4.4,
    reviews: 38,
    icon: "⚡",
    tags: [
      "nasco",
      "small"
    ],
    description: "95 Watt · Bluetooth · Mp3 · Fm · USB/Sd · Remote",
    badge: "new"
  },
  {
    id: 700,
    name: "Nasco Home Theater Tall Speakers",
    brand: "NASCO",
    brandId: "nasco",
    model: "NAS-HT3.1-N940",
    category: "small",
    image: "/img/products/NAS-HT3.1-N940.jpg",
    images: ["/img/products/NAS-HT3.1-N940.jpg"],
    price: 4600,
    rating: 4.4,
    reviews: 42,
    icon: "⚡",
    tags: [
      "nasco",
      "small"
    ],
    description: "90 Watt · Bluetooth · Mp3 · Fm · USB/Sd · Remote",
    badge: "new"
  },
  {
    id: 701,
    name: "Nasco Home Theater Tall Speakers",
    brand: "NASCO",
    brandId: "nasco",
    model: "NAS-HT3.1-N7110",
    category: "small",
    image: "/img/products/NAS-HT3.1-N7110.png",
    images: ["/img/products/NAS-HT3.1-N7110.png"],
    price: 4600,
    rating: 4.4,
    reviews: 23,
    icon: "⚡",
    tags: [
      "nasco",
      "small"
    ],
    description: "90 Watt · Bluetooth · Mp3 · Fm · USB/Sd · Remote",
    badge: "new"
  },
  {
    id: 702,
    name: "Midea 30Ltrs 900W Grill Microwave With Oven",
    brand: "Midea",
    brandId: "midea",
    model: "mi1",
    category: "kitchen",
    image: "/img/products/mi1.jpg",
    images: ["/img/products/mi1.jpg"],
    price: 1899,
    rating: 4.4,
    reviews: 65,
    icon: "🍳",
    tags: [
      "midea",
      "kitchen"
    ],
    description: "30 Ltrs · Glass Tray · 900 W · Control Panel · 5 Power Levels · Oven Cavity · Safety Interlock System · Oven",
    badge: "new"
  },
  {
    id: 703,
    name: "Midea 474 Ltrs 4 Doors French Door",
    brand: "Midea",
    brandId: "midea",
    model: "MDRF632FGN46D",
    category: "fridge",
    image: "/img/products/MDRF632FGN46D.jpg",
    images: ["/img/products/MDRF632FGN46D.jpg"],
    price: 13399,
    rating: 4.4,
    reviews: 62,
    icon: "🧊",
    tags: [
      "midea",
      "fridge"
    ],
    description: "474 Ltrs · Led Lighting · Door Tray · Glass Shelf · Big Drawer · Energy Saving · Smart Cooling · Dark Grey · Tripple Protector · Inverter",
    badge: "new"
  },
  {
    id: 704,
    name: "Nasco 50″ UHD 4K Digital Satellite Smart Television",
    brand: "NASCO",
    brandId: "nasco",
    model: "NAS-J50FUS-AND-CI-1-scaled-1",
    category: "tv",
    image: "/img/products/NAS-J50FUS-AND-CI-1-scaled-1.jpg",
    images: ["/img/products/NAS-J50FUS-AND-CI-1-scaled-1.jpg"],
    price: 4999,
    rating: 4.4,
    reviews: 31,
    icon: "📺",
    tags: [
      "nasco",
      "tv"
    ],
    description: "50 Inchines · HDMI X3 · USB X2 · VGA · Dvgt2 · Wifi · 4K · Ci+ Channels",
    badge: "new"
  },
  {
    id: 705,
    name: "Nasco 320Ltrs Top Mounted Freezer",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASCO-311LTR-TOP-MOUNT-FRIDGE-NASF2-45-FRONT",
    category: "fridge",
    image: "/img/products/NASCO-311LTR-TOP-MOUNT-FRIDGE-NASF2-45-FRONT.jpg",
    images: ["/img/products/NASCO-311LTR-TOP-MOUNT-FRIDGE-NASF2-45-FRONT.jpg"],
    price: 4499,
    rating: 4.4,
    reviews: 32,
    icon: "🧊",
    tags: [
      "nasco",
      "fridge"
    ],
    description: "320 Ltr · Lock Security · Led Light · Glass Shelves · Vegetable Box · Ice Maker · Eco Friendly",
    badge: "new"
  },
  {
    id: 706,
    name: "TCL 85&#8243; QLED Television",
    brand: "TCL",
    brandId: "tcl",
    model: "HVCG",
    category: "tv",
    image: "/img/products/HVCG.jpg",
    images: ["/img/products/HVCG.jpg"],
    price: 28799,
    rating: 4.4,
    reviews: 74,
    icon: "📺",
    tags: [
      "tcl",
      "tv"
    ],
    description: "Qled Pro · · Aipq Pro Processor · · T-Screen Pro · Onkyo 2 · 1Ch · Slim &amp; Uni-Body · Dlg 120Hz · Dolby Vision•Atmos · HDR10+ · Multiple Eye Care · 32Gb",
    badge: "new"
  },
  {
    id: 707,
    name: "TCL 75&#8243; QLED Television",
    brand: "TCL",
    brandId: "tcl",
    model: "HVCG",
    category: "tv",
    image: "/img/products/HVCG.jpg",
    images: ["/img/products/HVCG.jpg"],
    price: 23700,
    rating: 4.4,
    reviews: 20,
    icon: "📺",
    tags: [
      "tcl",
      "tv"
    ],
    description: "Qled Pro · Aipq Pro Processor · T-Screen Pro · Onkyo 2 · 1Ch · Slim &amp; Uni Body · Dlg 120Hz · Dolby Vision•Atmos · HDR10+ · Multiple Eye Care · 32Gb",
    badge: "new"
  },
  {
    id: 708,
    name: "TCL 50&#8243; QLED Television",
    brand: "TCL",
    brandId: "tcl",
    model: "HVCG",
    category: "tv",
    image: "/img/products/HVCG.jpg",
    images: ["/img/products/HVCG.jpg"],
    price: 23700,
    rating: 4.4,
    reviews: 88,
    icon: "📺",
    tags: [
      "tcl",
      "tv"
    ],
    description: "Qled Pro · · Aipq Pro Processor · · T-Screen Pro · · Onkyo 2 · 0Ch · ·Slim &amp; Uni Body · · Dlg 120Hz · · Dolby Vision•Atmos · · HDR10+ · · Multiple Eye Care · · 32Gb",
    badge: "new"
  },
  {
    id: 709,
    name: "Samsung 77″Oled 4K Smart Television",
    brand: "Samsung",
    brandId: "samsung",
    model: "QA77S90DAEXGH",
    category: "tv",
    image: "/img/products/QA77S90DAEXGH.jpg",
    images: ["/img/products/QA77S90DAEXGH.jpg"],
    price: 78299,
    rating: 4.4,
    reviews: 58,
    icon: "📺",
    tags: [
      "samsung",
      "tv"
    ],
    description: "77″ · Oled · Q Viewing Angle · Smart Hub · Auto Detection · Wifi Built In · Ethernet Lan · HDMI 4 · USB 3 · One Remote · Flat Panel",
    badge: "new"
  },
  {
    id: 710,
    name: "Samsung 650Ltrs Bespoke 4 Door Refrigerator",
    brand: "Samsung",
    brandId: "samsung",
    model: "uk-4-door-beverage-center-rf65db960e22eu-540091199",
    category: "fridge",
    image: "/img/products/uk-4-door-beverage-center-rf65db960e22eu-540091199.jpg",
    images: ["/img/products/uk-4-door-beverage-center-rf65db960e22eu-540091199.jpg"],
    price: 45999,
    rating: 4.4,
    reviews: 24,
    icon: "🧊",
    tags: [
      "samsung",
      "fridge"
    ],
    description: "Smart Things Ai Energy Mode · Ice Maker · Dispenser · Door Alarm · Interior Led Light",
    badge: "new"
  },
  {
    id: 711,
    name: "TCL Washer 10.5Kg &amp; Dryer 6Kgs Washing Machine",
    brand: "TCL",
    brandId: "tcl",
    model: "TCL-COMBO-10.5-KG-6-KGS-WASHING-MACHINE-C211WDG-FRONT",
    category: "laundry",
    image: "/img/products/TCL-COMBO-10.5-KG-6-KGS-WASHING-MACHINE-C211WDG-FRONT.jpg",
    images: ["/img/products/TCL-COMBO-10.5-KG-6-KGS-WASHING-MACHINE-C211WDG-FRONT.jpg"],
    price: 7999,
    rating: 4.4,
    reviews: 49,
    icon: "🫧",
    tags: [
      "tcl",
      "laundry"
    ],
    description: "Digital Inverter · Add Garment · Drum Clean · Safety Lock · 25Hrs Delay · Heat Sterilization · Tcl Honeycumb Drum · Silver",
    badge: "new"
  },
  {
    id: 712,
    name: "Nasco Blender 400 Watt",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASCO-400-WATTS-PROFESSIONAL-BLENDER-BL-J2001AK-CB",
    category: "small",
    image: "/img/products/NASCO-400-WATTS-PROFESSIONAL-BLENDER-BL-J2001AK-CB.jpg",
    images: ["/img/products/NASCO-400-WATTS-PROFESSIONAL-BLENDER-BL-J2001AK-CB.jpg"],
    price: 299,
    rating: 4.4,
    reviews: 95,
    icon: "⚡",
    tags: [
      "nasco",
      "small"
    ],
    description: "400 Watt · 5 Ltr · White And Blue · Grinder · Stainless Stell Blade",
    badge: "new"
  },
  {
    id: 713,
    name: "Nasco Rice Cooker 2.8 Liter",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASCO-1.8LITER-RICE-COOKER-NASRC-1.8WB-FRONT",
    category: "kitchen",
    image: "/img/products/NASCO-1.8LITER-RICE-COOKER-NASRC-1.8WB-FRONT.jpg",
    images: ["/img/products/NASCO-1.8LITER-RICE-COOKER-NASRC-1.8WB-FRONT.jpg"],
    price: 379,
    rating: 4.4,
    reviews: 69,
    icon: "🍳",
    tags: [
      "nasco",
      "kitchen"
    ],
    description: "2.8 Liter · 1000 Watt · Multi Cooking · Control Mechanism Thermostat · Nonstick Coating Inner Pot",
    badge: "new"
  },
  {
    id: 714,
    name: "Nasco Rice Cooker 2.8 Liter",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASCO-2.8LITER-RICE-COOKER-NASRC-2.8WM-FRONT",
    category: "kitchen",
    image: "/img/products/NASCO-2.8LITER-RICE-COOKER-NASRC-2.8WM-FRONT.jpg",
    images: ["/img/products/NASCO-2.8LITER-RICE-COOKER-NASRC-2.8WM-FRONT.jpg"],
    price: 3200,
    rating: 4.4,
    reviews: 64,
    icon: "🍳",
    tags: [
      "nasco",
      "kitchen"
    ],
    description: "2.8 Liter · 1000 Watt · Multi Cooking · Control Mechanism Thermostat · Nonstick Coating Inner Pot",
    badge: "new"
  },
  {
    id: 715,
    name: "Nasco Rice Cooker 1.8 Liter",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASCO-1.8LITER-RICE-COOKER-NASRC-1.8WM-FRONT",
    category: "kitchen",
    image: "/img/products/NASCO-1.8LITER-RICE-COOKER-NASRC-1.8WM-FRONT.jpg",
    images: ["/img/products/NASCO-1.8LITER-RICE-COOKER-NASRC-1.8WM-FRONT.jpg"],
    price: 3200,
    rating: 4.4,
    reviews: 25,
    icon: "🍳",
    tags: [
      "nasco",
      "kitchen"
    ],
    description: "8 Liters · 700 Watt · Multi Cooking · Control Mechanism Thermostat · Nonstick Coating Inner Pot",
    badge: "new"
  },
  {
    id: 716,
    name: "Nasco Rice Cooker 1.8 Liter",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASCO-1.8LITER-RICE-COOKER-NASRC-1.8WB-FRONT",
    category: "kitchen",
    image: "/img/products/NASCO-1.8LITER-RICE-COOKER-NASRC-1.8WB-FRONT.jpg",
    images: ["/img/products/NASCO-1.8LITER-RICE-COOKER-NASRC-1.8WB-FRONT.jpg"],
    price: 3200,
    rating: 4.4,
    reviews: 52,
    icon: "🍳",
    tags: [
      "nasco",
      "kitchen"
    ],
    description: "8 Liter · 700 Watt · Multi Cooking · Control Mechanism Thermostat",
    badge: "new"
  },
  {
    id: 717,
    name: "Samsung 83&#8243;Oled 4K Smart Television",
    brand: "Samsung",
    brandId: "samsung",
    model: "au-oled-s90d-497351-qa77s90daexxy-541516765",
    category: "tv",
    image: "/img/products/au-oled-s90d-497351-qa77s90daexxy-541516765.jpg",
    images: ["/img/products/au-oled-s90d-497351-qa77s90daexxy-541516765.jpg"],
    price: 23700,
    rating: 4.4,
    reviews: 49,
    icon: "📺",
    tags: [
      "samsung",
      "tv"
    ],
    description: "83&#8243; · Dolby Atmos · HDR Oled+ · Ambient Mode · Built-In Voice Assistant · Ots Lite · Q-Symphony · Laser Slim Design",
    badge: "new"
  },
  {
    id: 718,
    name: "Nasco Att Mosquito Killer Lamp",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASCO-2WATT-MOSQUITO-KILLER-FANAS-2W-BLACK-FRONT",
    category: "small",
    image: "/img/products/NASCO-2WATT-MOSQUITO-KILLER-FANAS-2W-BLACK-FRONT.jpg",
    images: ["/img/products/NASCO-2WATT-MOSQUITO-KILLER-FANAS-2W-BLACK-FRONT.jpg"],
    price: 99,
    rating: 4.4,
    reviews: 22,
    icon: "⚡",
    tags: [
      "nasco",
      "small"
    ],
    description: "2Watts · Energy Saving · Minimal  Noise · Durable Design · Nascompact And Portable",
    badge: "new"
  },
  {
    id: 719,
    name: "Nasco 5 Burner Gas Cooker With Oven &amp; Grill",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASCO-5-BURNER-GAS-COOKER-WITH-OVEN-GRILL-NASGC-AMG80S-FRONT",
    category: "kitchen",
    image: "/img/products/NASCO-5-BURNER-GAS-COOKER-WITH-OVEN-GRILL-NASGC-AMG80S-FRONT.jpg",
    images: ["/img/products/NASCO-5-BURNER-GAS-COOKER-WITH-OVEN-GRILL-NASGC-AMG80S-FRONT.jpg"],
    price: 3799,
    rating: 4.4,
    reviews: 54,
    icon: "🍳",
    tags: [
      "nasco",
      "kitchen"
    ],
    description: "5 Burner · Gas · Grill · Silver · Oven",
    badge: "new"
  },
  {
    id: 720,
    name: "Nasco 210Ltrs Top Mounted Freezer",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASCO-NASF2-250FLD-FRONT-VIEW",
    category: "fridge",
    image: "/img/products/NASCO-NASF2-250FLD-FRONT-VIEW.jpg",
    images: ["/img/products/NASCO-NASF2-250FLD-FRONT-VIEW.jpg"],
    price: 7900,
    rating: 4.4,
    reviews: 71,
    icon: "🧊",
    tags: [
      "nasco",
      "fridge"
    ],
    description: "210Ltrs · Manual Defrost · Adjustable Thermostat · Low Noise · Silver · Dispenser · 100% Cfc Free",
    badge: "new"
  },
  {
    id: 721,
    name: "Samsung 460L Bespoke Twin Cooling Plus Refrigerator",
    brand: "Samsung",
    brandId: "samsung",
    model: "RT47CB66318AGH-1-jpg-1",
    category: "fridge",
    image: "/img/products/RT47CB66318AGH-1-jpg-1.webp",
    images: ["/img/products/RT47CB66318AGH-1-jpg-1.webp"],
    price: 7900,
    rating: 4.4,
    reviews: 70,
    icon: "🧊",
    tags: [
      "samsung",
      "fridge"
    ],
    description: "460 Ltrs · Energy Saving · Auto Ice Maker · Glass · White And Navy Blue",
    badge: "new"
  },
  {
    id: 722,
    name: "Nasco 280Ltrs Top Mounted Freezer",
    brand: "NASCO",
    brandId: "nasco",
    model: "Artboard-1-3",
    category: "fridge",
    image: "/img/products/Artboard-1-3.jpg",
    images: ["/img/products/Artboard-1-3.jpg"],
    price: 7900,
    rating: 4.4,
    reviews: 40,
    icon: "🧊",
    tags: [
      "nasco",
      "fridge"
    ],
    description: "280Ltrs · Manual Defrost · Adjustable Thermostat · Low Noise · Silver · Dispenser · 100% Cfc Free",
    badge: "new"
  },
  {
    id: 723,
    name: "Nasco 510 Ltrs Double Door Chest Freezer",
    brand: "NASCO",
    brandId: "nasco",
    model: "NAS-725FL-DD-FRONT",
    category: "fridge",
    image: "/img/products/NAS-725FL-DD-FRONT.jpg",
    images: ["/img/products/NAS-725FL-DD-FRONT.jpg"],
    price: 7900,
    rating: 4.4,
    reviews: 78,
    icon: "🧊",
    tags: [
      "nasco",
      "fridge"
    ],
    description: "Adjustable Thermostat · Manual Defrost · 100% Cfc Free · Low Noise · Silver · Energy Saving · 100% Cfc Free · Double Door",
    badge: "new"
  },
  {
    id: 724,
    name: "Samsung 315Ltrs 1 Door All Round Twin Cooling Refrigerator",
    brand: "Samsung",
    brandId: "samsung",
    model: "sg-one-door-rz32m71157f-rz32m71157f-ss-frontsilver-67504426",
    category: "fridge",
    image: "/img/products/sg-one-door-rz32m71157f-rz32m71157f-ss-frontsilver-67504426.jpg",
    images: ["/img/products/sg-one-door-rz32m71157f-rz32m71157f-ss-frontsilver-67504426.jpg"],
    price: 7900,
    rating: 4.4,
    reviews: 94,
    icon: "🧊",
    tags: [
      "samsung",
      "fridge"
    ],
    description: "315 Ltrs · Frost Free · Door Alarm · Digital Inverter Compressor · Refined Steel Color · Energy Saving · All-Around Cooling · Smartthings App Support · Slim Ice Maker · Large Capacity",
    badge: "new"
  },
  {
    id: 725,
    name: "Samsung 385Ltrs 1 Door All Round Twin Cooling Refrigerator",
    brand: "Samsung",
    brandId: "samsung",
    model: "sg-one-door-rr39m71357f-rr39m71357f-ss-frontsilver-67092288",
    category: "fridge",
    image: "/img/products/sg-one-door-rr39m71357f-rr39m71357f-ss-frontsilver-67092288.jpg",
    images: ["/img/products/sg-one-door-rr39m71357f-rr39m71357f-ss-frontsilver-67092288.jpg"],
    price: 7900,
    rating: 4.4,
    reviews: 58,
    icon: "🧊",
    tags: [
      "samsung",
      "fridge"
    ],
    description: "385 Ltrs · Frost Free · Door Alarm · Digital Inverter Compressor · Refined Steel · Energy Saving · All-Around Cooling · Smartthings App Support",
    badge: "new"
  },
  {
    id: 726,
    name: "Samsung 75″ QLED Flat 4K Television",
    brand: "Other",
    brandId: "other",
    model: "Artboard-3-1-1",
    category: "small",
    image: "/img/products/Artboard-3-1-1.jpg",
    images: ["/img/products/Artboard-3-1-1.jpg"],
    price: 4600,
    rating: 4.4,
    reviews: 80,
    icon: "⚡",
    tags: [
      "other",
      "small"
    ],
    description: "75&#8243; · Smart Hub · Wifi Built-In · HDMI X 3 · USB X 2 · Dolby Digital Plus · Q Viewing Angle",
    badge: "new"
  },
  {
    id: 727,
    name: "Nasco 288Ltrs Display Fridge",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASCO-288-LTRS-DISPLAY-FRIDGE-NAS-FL350-1DR-FRONT-OPEN",
    category: "fridge",
    image: "/img/products/NASCO-288-LTRS-DISPLAY-FRIDGE-NAS-FL350-1DR-FRONT-OPEN.jpg",
    images: ["/img/products/NASCO-288-LTRS-DISPLAY-FRIDGE-NAS-FL350-1DR-FRONT-OPEN.jpg"],
    price: 7900,
    rating: 4.4,
    reviews: 75,
    icon: "🧊",
    tags: [
      "nasco",
      "fridge"
    ],
    description: "288 Ltrs · Adjustable Thermostat · Low Noise · Direct Cooling · Energy Saving · 100% Cfc  Free",
    badge: "new"
  },
  {
    id: 728,
    name: "Samsung 85&#8243; Neo QLED 8K Smart Tv",
    brand: "Samsung",
    brandId: "samsung",
    model: "ae-qled-qn800c-qa85qn800cuxzn-536108502",
    category: "tv",
    image: "/img/products/ae-qled-qn800c-qa85qn800cuxzn-536108502.webp",
    images: ["/img/products/ae-qled-qn800c-qa85qn800cuxzn-536108502.webp"],
    price: 23700,
    rating: 4.4,
    reviews: 53,
    icon: "📺",
    tags: [
      "samsung",
      "tv"
    ],
    description: "85 Inchines · 8K · G- Viewing Angle · Smart Hub · Wifi-Built-In · HDMIx4 · USBx3 · Dobly Digital Plus",
    badge: "new"
  },
  {
    id: 729,
    name: "Nasco 298Ltrs Display Fridge",
    brand: "NASCO",
    brandId: "nasco",
    model: "1-3",
    category: "fridge",
    image: "/img/products/1-3.jpg",
    images: ["/img/products/1-3.jpg"],
    price: 7900,
    rating: 4.4,
    reviews: 77,
    icon: "🧊",
    tags: [
      "nasco",
      "fridge"
    ],
    description: "Adjustable Thermostat · 100% Cfc Free · Low Noise · Direct Cooling · Energy Saving",
    badge: "new"
  },
  {
    id: 730,
    name: "Nasco 358Ltrs Display Fridge",
    brand: "NASCO",
    brandId: "nasco",
    model: "1-2-1",
    category: "fridge",
    image: "/img/products/1-2-1.jpg",
    images: ["/img/products/1-2-1.jpg"],
    price: 5699,
    rating: 4.4,
    reviews: 72,
    icon: "🧊",
    tags: [
      "nasco",
      "fridge"
    ],
    description: "Adjustable Thermostat · 100% Cfc Free · Low Noise · Direct Cooling · Energy Saving",
    badge: "new"
  },
  {
    id: 731,
    name: "Samsung 98&#8243; Q LED Flat 4K Television",
    brand: "Samsung",
    brandId: "samsung",
    model: "CX",
    category: "tv",
    image: "/img/products/CX.jpg",
    images: ["/img/products/CX.jpg"],
    price: 116999,
    rating: 4.4,
    reviews: 89,
    icon: "📺",
    tags: [
      "samsung",
      "tv"
    ],
    description: "Q Viewing Angle · Smart Hub · Auto Detection · Wifi Built In · Ethernet Lan · HDMI 4 · USB 3 · Flat Panel",
    badge: "new"
  },
  {
    id: 732,
    name: "Midea 60cm Built In Oven",
    brand: "Midea",
    brandId: "midea",
    model: "1-33",
    category: "kitchen",
    image: "/img/products/1-33.jpg",
    images: ["/img/products/1-33.jpg"],
    price: 4499,
    rating: 4.4,
    reviews: 77,
    icon: "🍳",
    tags: [
      "midea",
      "kitchen"
    ],
    description: "Mechanical Control · Stainless Steel · Forced · Air Cooked System",
    badge: "new"
  },
  {
    id: 733,
    name: "Samsung 85&#8243; Q LED Flat 4K Television",
    brand: "Other",
    brandId: "other",
    model: "QA65Q60DAUXGH",
    category: "small",
    image: "/img/products/QA65Q60DAUXGH.jpg",
    images: ["/img/products/QA65Q60DAUXGH.jpg"],
    price: 4600,
    rating: 4.4,
    reviews: 61,
    icon: "⚡",
    tags: [
      "other",
      "small"
    ],
    description: "Q Viewing Angle · Smart Hub · Auto Detection · Wifi Built In · Ethernet Lan · HDMI 4 · USB 3 · Flat Panel · 4K",
    badge: "new"
  },
  {
    id: 734,
    name: "Samsung 65&#8243; Q LED Flat 4K Television",
    brand: "Samsung",
    brandId: "samsung",
    model: "QA65Q60DAUXGH",
    category: "tv",
    image: "/img/products/QA65Q60DAUXGH.jpg",
    images: ["/img/products/QA65Q60DAUXGH.jpg"],
    price: 23700,
    rating: 4.4,
    reviews: 38,
    icon: "📺",
    tags: [
      "samsung",
      "tv"
    ],
    description: "Q Viewing Angle · Smart Hub · Auto Detection · Wifi Built In · Ethernet Lan · HDMI 4 · USB 3 · Flat Panel · 4K",
    badge: "new"
  },
  {
    id: 735,
    name: "TCL Top Mount 606Ltrs",
    brand: "TCL",
    brandId: "tcl",
    model: "1-2",
    category: "fridge",
    image: "/img/products/1-2.jpg",
    images: ["/img/products/1-2.jpg"],
    price: 11399,
    rating: 4.4,
    reviews: 31,
    icon: "🧊",
    tags: [
      "tcl",
      "fridge"
    ],
    description: "Flexible Space · Adjustable Shelves · 2L Bottle Space · Tempered Shelves · 90° Accessible · Twin Eco Inverter · Power Cool · Total No Frost",
    badge: "new"
  },
  {
    id: 736,
    name: "Samsung 10Kg Top Load Washer",
    brand: "Samsung",
    brandId: "samsung",
    model: "E",
    category: "laundry",
    image: "/img/products/E.jpg",
    images: ["/img/products/E.jpg"],
    price: 7099,
    rating: 4.4,
    reviews: 66,
    icon: "🫧",
    tags: [
      "samsung",
      "laundry"
    ],
    description: "Eco Bubble · Digital Inverter Technology · Super Speed · Eco Tub Clean",
    badge: "new"
  },
  {
    id: 737,
    name: "TCL French Door Refrigerator 476Ltrs",
    brand: "TCL",
    brandId: "tcl",
    model: "521-TCL-fridge-1",
    category: "fridge",
    image: "/img/products/521-TCL-fridge-1.jpg",
    images: ["/img/products/521-TCL-fridge-1.jpg"],
    price: 13999,
    rating: 4.4,
    reviews: 35,
    icon: "🧊",
    tags: [
      "tcl",
      "fridge"
    ],
    description: "476L French Door Fridge · Inverter Compressor · Frost Free · Humidity Controlled Crisper Drawer · Fresh Food Zone Nascompartment · Adjustable Easy To Clean Glass Shelves · Super Freeze Mode · Touch Sc",
    badge: "new"
  },
  {
    id: 738,
    name: "TCL French Door Refrigerator 460Ltrs",
    brand: "TCL",
    brandId: "tcl",
    model: "TCL-FRENCH-DOOR-REFRIGERATOR-P460CD",
    category: "fridge",
    image: "/img/products/TCL-FRENCH-DOOR-REFRIGERATOR-P460CD.jpg",
    images: ["/img/products/TCL-FRENCH-DOOR-REFRIGERATOR-P460CD.jpg"],
    price: 12699,
    rating: 4.4,
    reviews: 65,
    icon: "🧊",
    tags: [
      "tcl",
      "fridge"
    ],
    description: "Electronic Control · Precise Temperature Control · Led Light · Aat · Power Cool · Power Freeze · Eco Inverter",
    badge: "new"
  },
  {
    id: 739,
    name: "Midea Split Box",
    brand: "Midea",
    brandId: "midea",
    model: "FQXT2A1-jpeg",
    category: "ac",
    image: "/img/products/FQXT2A1-jpeg.webp",
    images: ["/img/products/FQXT2A1-jpeg.webp"],
    price: 1799,
    rating: 4.4,
    reviews: 67,
    icon: "❄️",
    tags: [
      "midea",
      "ac"
    ],
    description: "220 &#8211; 240V · 3517W Maximum Capacity · 10 · 5A Max · Output Current · Ipx4 Resistance Class · Indoor Unit · Outdoor Unit",
    badge: "new"
  },
  {
    id: 740,
    name: "Nasco Voltage Regulator Digital Display",
    brand: "NASCO",
    brandId: "nasco",
    model: "TDR-3000VA",
    category: "small",
    image: "/img/products/TDR-3000VA.jpeg",
    images: ["/img/products/TDR-3000VA.jpeg"],
    price: 1549,
    rating: 4.4,
    reviews: 52,
    icon: "⚡",
    tags: [
      "nasco",
      "small"
    ],
    description: "3000Va/1800W · Stabilizing Output Voltage · Wilder Regulation Voltage Range · Advanced Cpu-Controlled Circuit Desgin · Protect Against Several Electrical Anomalities",
    badge: "new"
  },
  {
    id: 741,
    name: "TCL 85&#8243; UHD 4K Smart Android Television",
    brand: "TCL",
    brandId: "tcl",
    model: "TCL-TV-GOOGLE-85-4K-ULTRA-HD-TCL_85P745-FRONT",
    category: "tv",
    image: "/img/products/TCL-TV-GOOGLE-85-4K-ULTRA-HD-TCL_85P745-FRONT.png",
    images: ["/img/products/TCL-TV-GOOGLE-85-4K-ULTRA-HD-TCL_85P745-FRONT.png"],
    price: 23700,
    rating: 4.4,
    reviews: 33,
    icon: "📺",
    tags: [
      "tcl",
      "tv"
    ],
    description: "4K · Wifi · Dolby Atmos · Hands Free Voice Control · Frameless Metal Frame · Google",
    badge: "new"
  },
  {
    id: 742,
    name: "TCL Chest Freezer 400Ltrs",
    brand: "TCL",
    brandId: "tcl",
    model: "TCL-CHEST-FREZZER-397LTRS-F400CF-FRONT-OPEN-jpg",
    category: "fridge",
    image: "/img/products/TCL-CHEST-FREZZER-397LTRS-F400CF-FRONT-OPEN-jpg.webp",
    images: ["/img/products/TCL-CHEST-FREZZER-397LTRS-F400CF-FRONT-OPEN-jpg.webp"],
    price: 7899,
    rating: 4.4,
    reviews: 72,
    icon: "🧊",
    tags: [
      "tcl",
      "fridge"
    ],
    description: "Capacity-400Ltrs · Mechanical Control · Led Light · Power Indicator · Storage Basket · White",
    badge: "new"
  },
  {
    id: 743,
    name: "Nasco 2.5Hp Round Floor Standing Air Conditioner",
    brand: "NASCO",
    brandId: "nasco",
    model: "1-3-1-jpg",
    category: "ac",
    image: "/img/products/1-3-1-jpg.webp",
    images: ["/img/products/1-3-1-jpg.webp"],
    price: 6999,
    rating: 4.4,
    reviews: 54,
    icon: "❄️",
    tags: [
      "nasco",
      "ac"
    ],
    description: "2.5Hp · R32 Refrigerant · Low Noise · Smart Air Flow · White And Gold Design · Energy Saving",
    badge: "new"
  },
  {
    id: 744,
    name: "Nasco 2.0Hp Round Floor Standing Air Conditioner",
    brand: "NASCO",
    brandId: "nasco",
    model: "AC-jpeg",
    category: "ac",
    image: "/img/products/AC-jpeg.webp",
    images: ["/img/products/AC-jpeg.webp"],
    price: 5999,
    rating: 4.4,
    reviews: 66,
    icon: "❄️",
    tags: [
      "nasco",
      "ac"
    ],
    description: "2.0Hp · R32 Refrigerant · Low Noise · Smart Air Flow · White And Gold Design · Energy Saving",
    badge: "new"
  },
  {
    id: 745,
    name: "TCL Chest Freezer 300Ltrs",
    brand: "TCL",
    brandId: "tcl",
    model: "1-11-jpg",
    category: "fridge",
    image: "/img/products/1-11-jpg.webp",
    images: ["/img/products/1-11-jpg.webp"],
    price: 5999,
    rating: 4.4,
    reviews: 27,
    icon: "🧊",
    tags: [
      "tcl",
      "fridge"
    ],
    description: "300Ltrs · Mechanical Control · Led Light · Power Indicator · Storage Basket · White",
    badge: "new"
  },
  {
    id: 746,
    name: "TCL Chest Frezzer 208Ltrs",
    brand: "TCL",
    brandId: "tcl",
    model: "1-9-jpg",
    category: "fridge",
    image: "/img/products/1-9-jpg.webp",
    images: ["/img/products/1-9-jpg.webp"],
    price: 4899,
    rating: 4.4,
    reviews: 26,
    icon: "🧊",
    tags: [
      "tcl",
      "fridge"
    ],
    description: "208Ltrs · Mechanical Control · Led Light · Power Indicator · Storage Basket · White",
    badge: "new"
  },
  {
    id: 747,
    name: "TCL Top Mount Fridge 207Ltrs",
    brand: "TCL",
    brandId: "tcl",
    model: "2-7-jpg",
    category: "fridge",
    image: "/img/products/2-7-jpg.webp",
    images: ["/img/products/2-7-jpg.webp"],
    price: 5299,
    rating: 4.4,
    reviews: 31,
    icon: "🧊",
    tags: [
      "tcl",
      "fridge"
    ],
    description: "118Ltrs · Uniform Cooling · Led Light · Glass Shelves · Defrost · Dark Silver · Adjustable Feet",
    badge: "new"
  },
  {
    id: 748,
    name: "TCL Top Mount Fridge 118Ltrs",
    brand: "TCL",
    brandId: "tcl",
    model: "2-6-jpg",
    category: "fridge",
    image: "/img/products/2-6-jpg.webp",
    images: ["/img/products/2-6-jpg.webp"],
    price: 3599,
    rating: 4.4,
    reviews: 32,
    icon: "🧊",
    tags: [
      "tcl",
      "fridge"
    ],
    description: "118Ltrs · Uniform Cooling · Led Light · Glass Shelves · Defrost · Dark Silver · Adjustable Feet",
    badge: "new"
  },
  {
    id: 749,
    name: "TCL Bed Side Fridge 47Ltrs",
    brand: "TCL",
    brandId: "tcl",
    model: "3-5-jpg",
    category: "fridge",
    image: "/img/products/3-5-jpg.webp",
    images: ["/img/products/3-5-jpg.webp"],
    price: 2199,
    rating: 4.4,
    reviews: 44,
    icon: "🧊",
    tags: [
      "tcl",
      "fridge"
    ],
    description: "47Ltrs · Fast Cooling · Silver · 5 Temperature Level",
    badge: "new"
  },
  {
    id: 750,
    name: "Samsung Vacuum Cleaner 2000 Watts",
    brand: "Samsung",
    brandId: "samsung",
    model: "ae-canister-sc4570-vcc4570s3k-xsg-538828663-jpg",
    category: "small",
    image: "/img/products/ae-canister-sc4570-vcc4570s3k-xsg-538828663-jpg.webp",
    images: ["/img/products/ae-canister-sc4570-vcc4570s3k-xsg-538828663-jpg.webp"],
    price: 1799,
    rating: 4.4,
    reviews: 84,
    icon: "⚡",
    tags: [
      "samsung",
      "small"
    ],
    description: "Bagless · 2 Chambers · Economic · Black",
    badge: "new"
  },
  {
    id: 751,
    name: "Samsung 411L Bespoke Twin Cooling Plus Refrigerator",
    brand: "Samsung",
    brandId: "samsung",
    model: "RT47CB66318AGH-1-jpg",
    category: "fridge",
    image: "/img/products/RT47CB66318AGH-1-jpg.webp",
    images: ["/img/products/RT47CB66318AGH-1-jpg.webp"],
    price: 7900,
    rating: 4.4,
    reviews: 73,
    icon: "🧊",
    tags: [
      "samsung",
      "fridge"
    ],
    description: "411Ltrs · Energy Saving · Auto Ice Maker · Glass · White And Navy Blue",
    badge: "new"
  },
  {
    id: 752,
    name: "Samsung 388L Bespoke Twin Cooling Plus Refrigerator",
    brand: "Samsung",
    brandId: "samsung",
    model: "RT47CB66318AGH-1-jpg",
    category: "fridge",
    image: "/img/products/RT47CB66318AGH-1-jpg.webp",
    images: ["/img/products/RT47CB66318AGH-1-jpg.webp"],
    price: 7900,
    rating: 4.4,
    reviews: 91,
    icon: "🧊",
    tags: [
      "samsung",
      "fridge"
    ],
    description: "388 Ltrs · Energy Saving · Auto Ice Maker · Glass · White And Navy Blue",
    badge: "new"
  },
  {
    id: 753,
    name: "TCL 55&#8243; UHD 4K Smart Android Television",
    brand: "TCL",
    brandId: "tcl",
    model: "",
    category: "tv",
    image: "/img/products/TCL-65P635-1-jpg.webp",
    images: ["/img/products/TCL-65P635-1-jpg.webp"],
    price: 23700,
    rating: 4.4,
    reviews: 38,
    icon: "📺",
    tags: [
      "tcl",
      "tv"
    ],
    description: "4K Frameless Metal Frame · Google Tv · Resolution · 3840 X 2160 Pixels · Dynamic Contrast Ratio · 5000:1 ·  · Led · Backlight Technology ·  · Brightness · 300 Nits",
    badge: "new"
  },
  {
    id: 754,
    name: "Nasco Kettle 1.7Ltrs",
    brand: "NASCO",
    brandId: "nasco",
    model: "KES4116-GS",
    category: "kitchen",
    image: "/img/products/KES4116-GS.png",
    images: ["/img/products/KES4116-GS.png"],
    price: 3200,
    rating: 4.4,
    reviews: 65,
    icon: "🍳",
    tags: [
      "nasco",
      "kitchen"
    ],
    description: "1.7 Ltr · Stainless Steel · Cordless · 2200 Watt",
    badge: "new"
  },
  {
    id: 755,
    name: "Nasco 2.5Hp Split Air Conditioner",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASCO-1.5HP-R32-GAS-SPLIT-INVERTER-AIR-CONDITIONER-NAS-M12V1-R32-FRONT",
    category: "ac",
    image: "/img/products/NASCO-1.5HP-R32-GAS-SPLIT-INVERTER-AIR-CONDITIONER-NAS-M12V1-R32-FRONT.jpg",
    images: ["/img/products/NASCO-1.5HP-R32-GAS-SPLIT-INVERTER-AIR-CONDITIONER-NAS-M12V1-R32-FRONT.jpg"],
    price: 11200,
    rating: 4.4,
    reviews: 24,
    icon: "❄️",
    tags: [
      "nasco",
      "ac"
    ],
    description: "Plain White Panel Design · Copper Condenser · Inverter Compressor · Refrigerant R32",
    badge: "new"
  },
  {
    id: 756,
    name: "Nasco 120Watt Bluetooth Sound Tower",
    brand: "NASCO",
    brandId: "nasco",
    model: "WEBSITE",
    category: "small",
    image: "/img/products/WEBSITE.jpg",
    images: ["/img/products/WEBSITE.jpg"],
    price: 4600,
    rating: 4.4,
    reviews: 73,
    icon: "⚡",
    tags: [
      "nasco",
      "small"
    ],
    description: "Uhd · Wifi · 160Watts · Bluetooth · USB · Fm/Aux",
    badge: "new"
  },
  {
    id: 757,
    name: "Nasco 110Watt Bluetooth Sound Tower",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASCO-160WATT-BLUETOOTH-SOUND-TOWER",
    category: "small",
    image: "/img/products/NASCO-160WATT-BLUETOOTH-SOUND-TOWER.jpg",
    images: ["/img/products/NASCO-160WATT-BLUETOOTH-SOUND-TOWER.jpg"],
    price: 4600,
    rating: 4.4,
    reviews: 55,
    icon: "⚡",
    tags: [
      "nasco",
      "small"
    ],
    description: "Romote Controlwifi160Wattsbluetoothusbfm/Aux",
    badge: "new"
  },
  {
    id: 758,
    name: "Nasco 1600W Vacuum Cleaner",
    brand: "NASCO",
    brandId: "nasco",
    model: "grsdghtj",
    category: "small",
    image: "/img/products/grsdghtj.jpg",
    images: ["/img/products/grsdghtj.jpg"],
    price: 4600,
    rating: 4.4,
    reviews: 26,
    icon: "⚡",
    tags: [
      "nasco",
      "small"
    ],
    description: "Power: 1600W · Speed Control · Silencer / Hepa Filter · Dust Nascollector Volume: 3 Liters",
    badge: "new"
  },
  {
    id: 759,
    name: "Nasco Rechargeable Vacuum Cleaner",
    brand: "NASCO",
    brandId: "nasco",
    model: "C",
    category: "small",
    image: "/img/products/C.jpg",
    images: ["/img/products/C.jpg"],
    price: 4600,
    rating: 4.4,
    reviews: 50,
    icon: "⚡",
    tags: [
      "nasco",
      "small"
    ],
    description: "Fashionable Design · 2 Speeds Available · Battery Indicator · Accessories: Small Brush, Crevice Tool, Wall Bracket",
    badge: "new"
  },
  {
    id: 760,
    name: "Nasco Portable Rechargeable Vacuum Cleaner",
    brand: "NASCO",
    brandId: "nasco",
    model: "1-1",
    category: "small",
    image: "/img/products/1-1.jpg",
    images: ["/img/products/1-1.jpg"],
    price: 4600,
    rating: 4.4,
    reviews: 88,
    icon: "⚡",
    tags: [
      "nasco",
      "small"
    ],
    description: "Portable Vacuum · Rechargeable · Humid-Dry · Washable Filter · 4L",
    badge: "new"
  },
  {
    id: 761,
    name: "Nasco Rechargeable Vacuum Cleaner",
    brand: "NASCO",
    brandId: "nasco",
    model: "jkljhjl",
    category: "small",
    image: "/img/products/jkljhjl.jpg",
    images: ["/img/products/jkljhjl.jpg"],
    price: 4600,
    rating: 4.4,
    reviews: 35,
    icon: "⚡",
    tags: [
      "nasco",
      "small"
    ],
    description: "High Efficiency Engine With Aluminum Fan · Removable Battery · Hepa Cyclonic Filtration System · Power Control In 2 Steps",
    badge: "new"
  },
  {
    id: 762,
    name: "Nasco 1600Watt Rechargeable Vacuum Cleaner",
    brand: "NASCO",
    brandId: "nasco",
    model: "ertgdfh",
    category: "small",
    image: "/img/products/ertgdfh.jpg",
    images: ["/img/products/ertgdfh.jpg"],
    price: 4600,
    rating: 4.4,
    reviews: 63,
    icon: "⚡",
    tags: [
      "nasco",
      "small"
    ],
    description: "Power: 1600 W · Speed ​​Control Silent · Hepa Filter · Dusting Volume: 3 Liters",
    badge: "new"
  },
  {
    id: 763,
    name: "Nasco 2200 Watts Steam Iron",
    brand: "NASCO",
    brandId: "nasco",
    model: "NGFDJFGCJ",
    category: "small",
    image: "/img/products/NGFDJFGCJ.jpg",
    images: ["/img/products/NGFDJFGCJ.jpg"],
    price: 299,
    rating: 4.4,
    reviews: 33,
    icon: "⚡",
    tags: [
      "nasco",
      "small"
    ],
    description: "Steam Iron ·   170 Ml · ▪   2200 W",
    badge: "new"
  },
  {
    id: 764,
    name: "Nasco 2.5Hp R410 Split Air Conditioner Design",
    brand: "NASCO",
    brandId: "nasco",
    model: "Artboard-1-copy-1-1",
    category: "ac",
    image: "/img/products/Artboard-1-copy-1-1.jpg",
    images: ["/img/products/Artboard-1-copy-1-1.jpg"],
    price: 9149,
    rating: 4.4,
    reviews: 37,
    icon: "❄️",
    tags: [
      "nasco",
      "ac"
    ],
    description: "Mirror Panel · Copper Condenser · R410 Gas · 2.5Hp · Auto Restart · Fast Cooling",
    badge: "new"
  },
  {
    id: 765,
    name: "Nasco 1000 Watts Dry Iron",
    brand: "NASCO",
    brandId: "nasco",
    model: "yukguyuk",
    category: "small",
    image: "/img/products/yukguyuk.jpg",
    images: ["/img/products/yukguyuk.jpg"],
    price: 199,
    rating: 4.4,
    reviews: 64,
    icon: "⚡",
    tags: [
      "nasco",
      "small"
    ],
    description: "1000 W · Auto Clean · Dry-Iron · Anti-Drop · Stainless Steel Sole Plate",
    badge: "new"
  },
  {
    id: 766,
    name: "Nasco 120Ltrs Display Fridge",
    brand: "NASCO",
    brandId: "nasco",
    model: "FDTDFT",
    category: "fridge",
    image: "/img/products/FDTDFT.jpg",
    images: ["/img/products/FDTDFT.jpg"],
    price: 4899,
    rating: 4.4,
    reviews: 66,
    icon: "🧊",
    tags: [
      "nasco",
      "fridge"
    ],
    description: "Black · Glass Door · 2 Shelves · Interior Light",
    badge: "new"
  },
  {
    id: 767,
    name: "Nasco 0.25Ltrs Coffee Maker",
    brand: "NASCO",
    brandId: "nasco",
    model: "GDFG",
    category: "kitchen",
    image: "/img/products/GDFG.jpg",
    images: ["/img/products/GDFG.jpg"],
    price: 549,
    rating: 4.4,
    reviews: 98,
    icon: "🍳",
    tags: [
      "nasco",
      "kitchen"
    ],
    description: "400-480W · Turkish Coffee Maker · 25L · Red",
    badge: "new"
  },
  {
    id: 768,
    name: "Samsung Vacuum Cleaner 1800Watts",
    brand: "Samsung",
    brandId: "samsung",
    model: "samsung-canister-vacuum-cleaner-vc18m2120.webp",
    category: "small",
    image: "/img/products/samsung-canister-vacuum-cleaner-vc18m2120.webp.webp",
    images: ["/img/products/samsung-canister-vacuum-cleaner-vc18m2120.webp.webp"],
    price: 2199,
    rating: 4.4,
    reviews: 81,
    icon: "⚡",
    tags: [
      "samsung",
      "small"
    ],
    description: "Ez Clean Bin · 2In1 Vaccum · Airborne Copper · 180 Degree Steering · White",
    badge: "new"
  },
  {
    id: 769,
    name: "Samsung 65&#8243; QLED 4K Neo Smart Television",
    brand: "Samsung",
    brandId: "samsung",
    model: "QA75QN85AAUXKE-2-jpg",
    category: "tv",
    image: "/img/products/QA75QN85AAUXKE-2-jpg.webp",
    images: ["/img/products/QA75QN85AAUXKE-2-jpg.webp"],
    price: 39199,
    rating: 4.4,
    reviews: 62,
    icon: "📺",
    tags: [
      "samsung",
      "tv"
    ],
    description: "65 Inchines · 4K · G- Viewing Angle · Smart Hub · Wifi-Built-In · HDMIx4 · USBx3 · Dobly Digital Plus",
    badge: "new"
  },
  {
    id: 770,
    name: "Nasco 3.0Ltrs Kettle",
    brand: "NASCO",
    brandId: "nasco",
    model: "DFHDXH",
    category: "small",
    image: "/img/products/DFHDXH.jpg",
    images: ["/img/products/DFHDXH.jpg"],
    price: 399,
    rating: 4.4,
    reviews: 36,
    icon: "⚡",
    tags: [
      "nasco",
      "small"
    ],
    description: "Cordless · Water Heater",
    badge: "new"
  },
  {
    id: 771,
    name: "Samsung 4 Burner Gas Cooker With Grill",
    brand: "Samsung",
    brandId: "samsung",
    model: "SDG-FHG",
    category: "kitchen",
    image: "/img/products/SDG-FHG.jpg",
    images: ["/img/products/SDG-FHG.jpg"],
    price: 7899,
    rating: 4.4,
    reviews: 41,
    icon: "🍳",
    tags: [
      "samsung",
      "kitchen"
    ],
    description: "Oven · Stainless Steel · 4 Burners · Grill",
    badge: "new"
  },
  {
    id: 772,
    name: "Nasco 715Ltrs Display Refrigerator",
    brand: "NASCO",
    brandId: "nasco",
    model: "GFUJHFCTG",
    category: "fridge",
    image: "/img/products/GFUJHFCTG.jpg",
    images: ["/img/products/GFUJHFCTG.jpg"],
    price: 7900,
    rating: 4.4,
    reviews: 44,
    icon: "🧊",
    tags: [
      "nasco",
      "fridge"
    ],
    description: "Black · Glass Door · 4 Shelves · Energy Saving · Interior Light",
    badge: "new"
  },
  {
    id: 773,
    name: "Midea 1.2Ltrs 200Watts Blender",
    brand: "Midea",
    brandId: "midea",
    model: "BL1197A-1",
    category: "kitchen",
    image: "/img/products/BL1197A-1.jpg",
    images: ["/img/products/BL1197A-1.jpg"],
    price: 3200,
    rating: 4.4,
    reviews: 73,
    icon: "🍳",
    tags: [
      "midea",
      "kitchen"
    ],
    description: "800 Ml Plastic Jar · Ss Blades · Ability To Blend Different Kinds Of Fruit",
    badge: "new"
  },
  {
    id: 774,
    name: "Nasco 1.75Ltr 800Watts Blender",
    brand: "NASCO",
    brandId: "nasco",
    model: "CXHBFH",
    category: "kitchen",
    image: "/img/products/CXHBFH.jpg",
    images: ["/img/products/CXHBFH.jpg"],
    price: 449,
    rating: 4.4,
    reviews: 73,
    icon: "🍳",
    tags: [
      "nasco",
      "kitchen"
    ],
    description: "75L-Standstainless Steelsilver",
    badge: "new"
  },
  {
    id: 775,
    name: "Nasco Water Boiler",
    brand: "NASCO",
    brandId: "nasco",
    model: "FGJDFD",
    category: "kitchen",
    image: "/img/products/FGJDFD.jpg",
    images: ["/img/products/FGJDFD.jpg"],
    price: 3200,
    rating: 4.4,
    reviews: 24,
    icon: "🍳",
    tags: [
      "nasco",
      "kitchen"
    ],
    description: "Electric · Stainless Steel · 20Ltr",
    badge: "new"
  },
  {
    id: 776,
    name: "Nasco 1.2Ltrs Rice Cooker",
    brand: "NASCO",
    brandId: "nasco",
    model: "HNGCKHG",
    category: "kitchen",
    image: "/img/products/HNGCKHG.jpg",
    images: ["/img/products/HNGCKHG.jpg"],
    price: 399,
    rating: 4.4,
    reviews: 89,
    icon: "🍳",
    tags: [
      "nasco",
      "kitchen"
    ],
    description: "500 W · 2Ltr · Water Rice Cooker",
    badge: "new"
  },
  {
    id: 777,
    name: "Nasco 4 Burner Electric Hob With Oven",
    brand: "NASCO",
    brandId: "nasco",
    model: "GDFDJGFJ",
    category: "kitchen",
    image: "/img/products/GDFDJGFJ.jpg",
    images: ["/img/products/GDFDJGFJ.jpg"],
    price: 2999,
    rating: 4.4,
    reviews: 52,
    icon: "🍳",
    tags: [
      "nasco",
      "kitchen"
    ],
    description: "60 X 60 Cm · Silver · 4 Burners · Full Electric Cookers",
    badge: "new"
  },
  {
    id: 778,
    name: "Nasco 2Ltrs Air Cooler",
    brand: "NASCO",
    brandId: "nasco",
    model: "GHKCGHM",
    category: "small",
    image: "/img/products/GHKCGHM.jpg",
    images: ["/img/products/GHKCGHM.jpg"],
    price: 399,
    rating: 4.4,
    reviews: 78,
    icon: "⚡",
    tags: [
      "nasco",
      "small"
    ],
    description: "7 Hrs Timer · Remote Control · Led Display · Water Tank · White And Blue",
    badge: "new"
  },
  {
    id: 779,
    name: "Nasco 5.0Hp Floor Standing Ac",
    brand: "NASCO",
    brandId: "nasco",
    model: "FYUKGYUKGUY",
    category: "ac",
    image: "/img/products/FYUKGYUKGUY.jpg",
    images: ["/img/products/FYUKGYUKGUY.jpg"],
    price: 25249,
    rating: 4.4,
    reviews: 24,
    icon: "❄️",
    tags: [
      "nasco",
      "ac"
    ],
    description: "Stylish Design · Multi Level Wind Speed · 5 Meter Coil · Digital Panel · 5.0Hp · 0Hp",
    badge: "new"
  },
  {
    id: 780,
    name: "Samsung 65&#8243; Q LED Serif Television",
    brand: "Samsung",
    brandId: "samsung",
    model: "Artboard-3",
    category: "tv",
    image: "/img/products/Artboard-3.jpg",
    images: ["/img/products/Artboard-3.jpg"],
    price: 34899,
    rating: 4.4,
    reviews: 46,
    icon: "📺",
    tags: [
      "samsung",
      "tv"
    ],
    description: "Serif Design · NFC on TV · Ambient Mode+",
    badge: "new"
  },
  {
    id: 781,
    name: "Midea 4 Hobs Electric Cooker With Oven",
    brand: "Midea",
    brandId: "midea",
    model: "DGBHSTHT",
    category: "kitchen",
    image: "/img/products/DGBHSTHT.jpg",
    images: ["/img/products/DGBHSTHT.jpg"],
    price: 8299,
    rating: 4.4,
    reviews: 45,
    icon: "🍳",
    tags: [
      "midea",
      "kitchen"
    ],
    description: "60 X 60 Cm · Silver · 4 Burners · Full Electric Cookers",
    badge: "new"
  },
  {
    id: 782,
    name: "Nasco 3 Burner Gas Sstove Silver Gold Cap",
    brand: "NASCO",
    brandId: "nasco",
    model: "FGFGCGH",
    category: "kitchen",
    image: "/img/products/FGFGCGH.jpg",
    images: ["/img/products/FGFGCGH.jpg"],
    price: 849,
    rating: 4.4,
    reviews: 78,
    icon: "🍳",
    tags: [
      "nasco",
      "kitchen"
    ],
    description: "3 Gas Burners · Stainless Steel · Gold Cap · 2 Shelves Stand · Silver",
    badge: "new"
  },
  {
    id: 783,
    name: "Nasco 2.0Hp Gas Split Inverter Air Conditioner",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASCO-1.5HP-R32-GAS-SPLIT-INVERTER-AIR-CONDITIONER-NAS-M12V1-R32-FRONT",
    category: "ac",
    image: "/img/products/NASCO-1.5HP-R32-GAS-SPLIT-INVERTER-AIR-CONDITIONER-NAS-M12V1-R32-FRONT.jpg",
    images: ["/img/products/NASCO-1.5HP-R32-GAS-SPLIT-INVERTER-AIR-CONDITIONER-NAS-M12V1-R32-FRONT.jpg"],
    price: 8249,
    rating: 4.4,
    reviews: 83,
    icon: "❄️",
    tags: [
      "nasco",
      "ac"
    ],
    description: "White Panel · Sleek Design · Inverter Compressor · Copper Condenser · R32",
    badge: "new"
  },
  {
    id: 784,
    name: "Nasco 1.5Hp Gas Split Inverter Air Conditioner",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASCO-1.5HP-R32-GAS-SPLIT-INVERTER-AIR-CONDITIONER-NAS-M12V1-R32-FRONT",
    category: "ac",
    image: "/img/products/NASCO-1.5HP-R32-GAS-SPLIT-INVERTER-AIR-CONDITIONER-NAS-M12V1-R32-FRONT.jpg",
    images: ["/img/products/NASCO-1.5HP-R32-GAS-SPLIT-INVERTER-AIR-CONDITIONER-NAS-M12V1-R32-FRONT.jpg"],
    price: 5699,
    rating: 4.4,
    reviews: 79,
    icon: "❄️",
    tags: [
      "nasco",
      "ac"
    ],
    description: "White Panel · Sleek Design · Inverter Compressor · Copper Condenser · R32 · 5Hp",
    badge: "new"
  },
  {
    id: 785,
    name: "Nasco 16Ltrs 3 Taps Water Dispenser",
    brand: "NASCO",
    brandId: "nasco",
    model: "FGTGFDTS",
    category: "small",
    image: "/img/products/FGTGFDTS.jpg",
    images: ["/img/products/FGTGFDTS.jpg"],
    price: 2649,
    rating: 4.4,
    reviews: 46,
    icon: "⚡",
    tags: [
      "nasco",
      "small"
    ],
    description: "16 Ltrs · 3 Taps · Fridge Cabinet · White · Heating And Cooling Switch · Energy Saving",
    badge: "new"
  },
  {
    id: 786,
    name: "Nasco 16Ltrs 2Taps Water Dispenser",
    brand: "NASCO",
    brandId: "nasco",
    model: "DGHSD",
    category: "small",
    image: "/img/products/DGHSD.jpg",
    images: ["/img/products/DGHSD.jpg"],
    price: 4600,
    rating: 4.4,
    reviews: 54,
    icon: "⚡",
    tags: [
      "nasco",
      "small"
    ],
    description: "16 Ltrs · 2 Taps · Cabinet · White · Heating And Cooling Switch",
    badge: "new"
  },
  {
    id: 787,
    name: "Nasco 207Ltrs Double Door Top Mount Refrigerator",
    brand: "NASCO",
    brandId: "nasco",
    model: "GSFGFG",
    category: "fridge",
    image: "/img/products/GSFGFG.jpg",
    images: ["/img/products/GSFGFG.jpg"],
    price: 3399,
    rating: 4.4,
    reviews: 33,
    icon: "🧊",
    tags: [
      "nasco",
      "fridge"
    ],
    description: "Lock &amp; Key · Fast Cooling · Silver · Top Mount Freezer · Energy Saving",
    badge: "new"
  },
  {
    id: 788,
    name: "Nasco 1200 Watts Steam Iron",
    brand: "NASCO",
    brandId: "nasco",
    model: "SFHHD",
    category: "small",
    image: "/img/products/SFHHD.jpg",
    images: ["/img/products/SFHHD.jpg"],
    price: 199,
    rating: 4.4,
    reviews: 71,
    icon: "⚡",
    tags: [
      "nasco",
      "small"
    ],
    description: "Steam Iron · 170 Ml · 1200 W",
    badge: "new"
  },
  {
    id: 789,
    name: "Nasco 2200 Watts Steam Iron",
    brand: "NASCO",
    brandId: "nasco",
    model: "FHKUUKF",
    category: "small",
    image: "/img/products/FHKUUKF.jpg",
    images: ["/img/products/FHKUUKF.jpg"],
    price: 4600,
    rating: 4.4,
    reviews: 24,
    icon: "⚡",
    tags: [
      "nasco",
      "small"
    ],
    description: "Steam Iron ·   170 Ml · ▪   2200 W",
    badge: "new"
  },
  {
    id: 790,
    name: "Nasco 1200 Watts Steam Iron",
    brand: "NASCO",
    brandId: "nasco",
    model: "DFDSF",
    category: "small",
    image: "/img/products/DFDSF.jpg",
    images: ["/img/products/DFDSF.jpg"],
    price: 4600,
    rating: 4.4,
    reviews: 88,
    icon: "⚡",
    tags: [
      "nasco",
      "small"
    ],
    description: "Steam Iron · 170 Ml · 1200 W · Nonstick Soleplate",
    badge: "new"
  },
  {
    id: 791,
    name: "Nasco 2200 Watts Steam Iron",
    brand: "NASCO",
    brandId: "nasco",
    model: "NGFDJFGCJ",
    category: "small",
    image: "/img/products/NGFDJFGCJ.jpg",
    images: ["/img/products/NGFDJFGCJ.jpg"],
    price: 4600,
    rating: 4.4,
    reviews: 25,
    icon: "⚡",
    tags: [
      "nasco",
      "small"
    ],
    description: "Steam Iron ·   170 Ml · ▪   2200 W",
    badge: "new"
  },
  {
    id: 792,
    name: "Midea 129Ltrs Bottom Freezer",
    brand: "Midea",
    brandId: "midea",
    model: "MDRB197FGF30-3-jpeg",
    category: "fridge",
    image: "/img/products/MDRB197FGF30-3-jpeg.webp",
    images: ["/img/products/MDRB197FGF30-3-jpeg.webp"],
    price: 7900,
    rating: 4.4,
    reviews: 98,
    icon: "🧊",
    tags: [
      "midea",
      "fridge"
    ],
    description: "129Liter · Efficient LED lighting · Mechanical Temperature Control · 3 shelves",
    badge: "new"
  },
  {
    id: 793,
    name: "Nasco 2.0Hp R410 Split Air Condition",
    brand: "NASCO",
    brandId: "nasco",
    model: "Artboard-1-copy-1-1",
    category: "ac",
    image: "/img/products/Artboard-1-copy-1-1.jpg",
    images: ["/img/products/Artboard-1-copy-1-1.jpg"],
    price: 3499,
    rating: 4.4,
    reviews: 61,
    icon: "❄️",
    tags: [
      "nasco",
      "ac"
    ],
    description: "Mirror Panel · Copper Condenser · R410 Gas · 2.0 HP",
    badge: "new"
  },
  {
    id: 794,
    name: "Nasco 1.5Hp R410 Split Air Condition",
    brand: "NASCO",
    brandId: "nasco",
    model: "Artboard-1-copy-1-1",
    category: "ac",
    image: "/img/products/Artboard-1-copy-1-1.jpg",
    images: ["/img/products/Artboard-1-copy-1-1.jpg"],
    price: 11200,
    rating: 4.4,
    reviews: 66,
    icon: "❄️",
    tags: [
      "nasco",
      "ac"
    ],
    description: "Mirror Panel · copper Condenser · 410 Gas · 1.5Hp · Fast Cooling · Energy Saving",
    badge: "new"
  },
  {
    id: 795,
    name: "Nasco 1.5Hp R410 Split Air Conditioner",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASCO-1.5HP-R410-SPLIT-AIR-CONDITIONER-NAS-T12N1-FRONT",
    category: "ac",
    image: "/img/products/NASCO-1.5HP-R410-SPLIT-AIR-CONDITIONER-NAS-T12N1-FRONT.jpg",
    images: ["/img/products/NASCO-1.5HP-R410-SPLIT-AIR-CONDITIONER-NAS-T12N1-FRONT.jpg"],
    price: 6999,
    rating: 4.4,
    reviews: 45,
    icon: "❄️",
    tags: [
      "nasco",
      "ac"
    ],
    description: "Plain White Panel Design · Copper Condenser · Energy Saving",
    badge: "new"
  },
  {
    id: 796,
    name: "Midea 50Ltrs Horizontal Smart,Wifi Control Water Heater",
    brand: "Midea",
    brandId: "midea",
    model: "6ec7e7f2-b9fd-4027-8801-3eea2d067c6a",
    category: "small",
    image: "/img/products/6ec7e7f2-b9fd-4027-8801-3eea2d067c6a.jpg",
    images: ["/img/products/6ec7e7f2-b9fd-4027-8801-3eea2d067c6a.jpg"],
    price: 4600,
    rating: 4.4,
    reviews: 31,
    icon: "⚡",
    tags: [
      "midea",
      "small"
    ],
    description: "50 Ltrs · Horizontal Heater · White",
    badge: "new"
  },
  {
    id: 797,
    name: "Nasco 100Ltrs Water Heater",
    brand: "NASCO",
    brandId: "nasco",
    model: "DYTKDTYK",
    category: "small",
    image: "/img/products/DYTKDTYK.jpg",
    images: ["/img/products/DYTKDTYK.jpg"],
    price: 2649,
    rating: 4.4,
    reviews: 80,
    icon: "⚡",
    tags: [
      "nasco",
      "small"
    ],
    description: "Vertical Slead Storage · Electric Water Heater · White Color · Earth Protection · Overheat Protection · Temperature Indicator",
    badge: "new"
  },
  {
    id: 798,
    name: "Nasco 80Ltrs Water Heater",
    brand: "NASCO",
    brandId: "nasco",
    model: "DYTKDTYK",
    category: "small",
    image: "/img/products/DYTKDTYK.jpg",
    images: ["/img/products/DYTKDTYK.jpg"],
    price: 2249,
    rating: 4.4,
    reviews: 52,
    icon: "⚡",
    tags: [
      "nasco",
      "small"
    ],
    description: "Vertical Slead Storage · Electric Water Heater · White Color · Energy Saving · Earth Protection",
    badge: "new"
  },
  {
    id: 799,
    name: "Nasco 50Ltrs Water Heater",
    brand: "NASCO",
    brandId: "nasco",
    model: "DYTKDTYK",
    category: "small",
    image: "/img/products/DYTKDTYK.jpg",
    images: ["/img/products/DYTKDTYK.jpg"],
    price: 1999,
    rating: 4.4,
    reviews: 35,
    icon: "⚡",
    tags: [
      "nasco",
      "small"
    ],
    description: "Vertical Slead Storage · Electric Water Heater · White · Overheat Protection · Earth Protection · 50Ltr",
    badge: "new"
  },
  {
    id: 800,
    name: "Nasco 30Ltrs Water Heater",
    brand: "NASCO",
    brandId: "nasco",
    model: "HFFHFD",
    category: "small",
    image: "/img/products/HFFHFD.jpg",
    images: ["/img/products/HFFHFD.jpg"],
    price: 4600,
    rating: 4.4,
    reviews: 22,
    icon: "⚡",
    tags: [
      "nasco",
      "small"
    ],
    description: "Vertical Sealed Storage · Electric Water Heater · White Color · Overheat Protection · Teperature Indicator · Earth Protection",
    badge: "new"
  },
  {
    id: 801,
    name: "Nasco 1.5Ltr Espresso Coffee Maker",
    brand: "NASCO",
    brandId: "nasco",
    model: "LJKGVJHH",
    category: "kitchen",
    image: "/img/products/LJKGVJHH.jpg",
    images: ["/img/products/LJKGVJHH.jpg"],
    price: 549,
    rating: 4.4,
    reviews: 93,
    icon: "🍳",
    tags: [
      "nasco",
      "kitchen"
    ],
    description: "850 W · Espresso Coffee Maker · Removable Funnel · Anti Drip · 15 Bar",
    badge: "new"
  },
  {
    id: 802,
    name: "Nasco 1.5Ltr Professional Blender",
    brand: "NASCO",
    brandId: "nasco",
    model: "GFXGFVCHG",
    category: "kitchen",
    image: "/img/products/GFXGFVCHG.jpg",
    images: ["/img/products/GFXGFVCHG.jpg"],
    price: 399,
    rating: 4.4,
    reviews: 32,
    icon: "🍳",
    tags: [
      "nasco",
      "kitchen"
    ],
    description: "5 Ltrs Body · Lid · Handle · White Knob · Base · White Plastic Jug",
    badge: "new"
  },
  {
    id: 803,
    name: "Nasco Electric Hot Pot, 3.5 L, 1200W",
    brand: "NASCO",
    brandId: "nasco",
    model: "TFGRJHRFGJH",
    category: "kitchen",
    image: "/img/products/TFGRJHRFGJH.jpg",
    images: ["/img/products/TFGRJHRFGJH.jpg"],
    price: 449,
    rating: 4.4,
    reviews: 69,
    icon: "🍳",
    tags: [
      "nasco",
      "kitchen"
    ],
    description: "Capacity :3.5 L · Power: 1200 Watt · Voltage :220-240 V · Frequency: 60 Hz",
    badge: "new"
  },
  {
    id: 804,
    name: "Nasco 800W Stand Mixer",
    brand: "NASCO",
    brandId: "nasco",
    model: "FDSHHFFFFFFFFH",
    category: "kitchen",
    image: "/img/products/FDSHHFFFFFFFFH.jpg",
    images: ["/img/products/FDSHHFFFFFFFFH.jpg"],
    price: 1199,
    rating: 4.4,
    reviews: 20,
    icon: "🍳",
    tags: [
      "nasco",
      "kitchen"
    ],
    description: "5 Speed · ▪  Red/5 Ltr · ▪   800W",
    badge: "new"
  },
  {
    id: 805,
    name: "Nasco 2.4Ltrs Food Processor",
    brand: "NASCO",
    brandId: "nasco",
    model: "JHGDTG",
    category: "kitchen",
    image: "/img/products/JHGDTG.jpg",
    images: ["/img/products/JHGDTG.jpg"],
    price: 599,
    rating: 4.4,
    reviews: 61,
    icon: "🍳",
    tags: [
      "nasco",
      "kitchen"
    ],
    description: "Full Function · Chopping · Slicing · Shredding · Kneading · Egg Beating · Full Accessories",
    badge: "new"
  },
  {
    id: 806,
    name: "Nasco 3.5Ltrs Multi Cooker Airfryer",
    brand: "NASCO",
    brandId: "nasco",
    model: "VGHKU",
    category: "kitchen",
    image: "/img/products/VGHKU.jpg",
    images: ["/img/products/VGHKU.jpg"],
    price: 999,
    rating: 4.4,
    reviews: 98,
    icon: "🍳",
    tags: [
      "nasco",
      "kitchen"
    ],
    description: "Capacity :2 · 7 L · Power: 1300 Watt · Voltage :220-240 V · Frequency: 60 Hz",
    badge: "new"
  },
  {
    id: 807,
    name: "Nasco 4.5Ltrs Deep Fryer",
    brand: "NASCO",
    brandId: "nasco",
    model: "FY8XDFE",
    category: "kitchen",
    image: "/img/products/FY8XDFE.jpg",
    images: ["/img/products/FY8XDFE.jpg"],
    price: 449,
    rating: 4.4,
    reviews: 73,
    icon: "🍳",
    tags: [
      "nasco",
      "kitchen"
    ],
    description: "Deep Fryer 4 · 5L, · 1830-2180W, · Stainless Steel",
    badge: "new"
  },
  {
    id: 808,
    name: "Nasco 800Watt Meat Grinder",
    brand: "NASCO",
    brandId: "nasco",
    model: "JUYFJHGJKL",
    category: "kitchen",
    image: "/img/products/JUYFJHGJKL.jpg",
    images: ["/img/products/JUYFJHGJKL.jpg"],
    price: 899,
    rating: 4.4,
    reviews: 90,
    icon: "🍳",
    tags: [
      "nasco",
      "kitchen"
    ],
    description: "Material: Metal Nascones · Power: 800 Watt · Plastic Tray",
    badge: "new"
  },
  {
    id: 809,
    name: "Nasco 600Watt Meat Grinder",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASCO-600WATT-MEAT-GRINDER-NAS-MG5000GS-FRONT",
    category: "kitchen",
    image: "/img/products/NASCO-600WATT-MEAT-GRINDER-NAS-MG5000GS-FRONT.jpg",
    images: ["/img/products/NASCO-600WATT-MEAT-GRINDER-NAS-MG5000GS-FRONT.jpg"],
    price: 399,
    rating: 4.4,
    reviews: 25,
    icon: "🍳",
    tags: [
      "nasco",
      "kitchen"
    ],
    description: "Material: Metal Nascones · Power: 600 Watt · Molded Hopper",
    badge: "new"
  },
  {
    id: 810,
    name: "Nasco 95Ltrs Wine Cooler",
    brand: "NASCO",
    brandId: "nasco",
    model: "nasco-wine",
    category: "fridge",
    image: "/img/products/nasco-wine.jpg",
    images: ["/img/products/nasco-wine.jpg"],
    price: 5049,
    rating: 4.4,
    reviews: 33,
    icon: "🧊",
    tags: [
      "nasco",
      "fridge"
    ],
    description: "Black · Glass Door · 6 Shelves · Easy Cleaning Interior · 95 Ltr",
    badge: "new"
  },
  {
    id: 811,
    name: "Samsung 100 UHD Processor 4K HDR Freestyle Projector",
    brand: "Samsung",
    brandId: "samsung",
    model: "SP-LSP3BLAXZN-7-977x1000-1",
    category: "small",
    image: "/img/products/SP-LSP3BLAXZN-7-977x1000-1.jpg",
    images: ["/img/products/SP-LSP3BLAXZN-7-977x1000-1.jpg"],
    price: 17499,
    rating: 4.4,
    reviews: 93,
    icon: "⚡",
    tags: [
      "samsung",
      "small"
    ],
    description: "HDR · Premium 360 Sound · Freestyle · Wifi · Bluetooth · Smart Tv Support · Dolby Digital Plus",
    badge: "new"
  },
  {
    id: 812,
    name: "Samsung 50&#8243; The Serif QLED 4K Hdr Smart Television",
    brand: "Samsung",
    brandId: "samsung",
    model: "SAMSUNG-55″-SHERIF-QLED-4K-TV-QA55LS01TAKXXA",
    category: "tv",
    image: "/img/products/SAMSUNG-55″-SHERIF-QLED-4K-TV-QA55LS01TAKXXA.jpg",
    images: ["/img/products/SAMSUNG-55″-SHERIF-QLED-4K-TV-QA55LS01TAKXXA.jpg"],
    price: 23499,
    rating: 4.4,
    reviews: 55,
    icon: "📺",
    tags: [
      "samsung",
      "tv"
    ],
    description: "Serif Design · Nfc On Tv · Ambient Mode+ Design · Detachable Floor Stand · Nfc On Tv",
    badge: "new"
  },
  {
    id: 813,
    name: "Nasco 2200 Watts Steam Iron",
    brand: "NASCO",
    brandId: "nasco",
    model: "GTSZHNXDFG",
    category: "small",
    image: "/img/products/GTSZHNXDFG.jpg",
    images: ["/img/products/GTSZHNXDFG.jpg"],
    price: 4600,
    rating: 4.4,
    reviews: 40,
    icon: "⚡",
    tags: [
      "nasco",
      "small"
    ],
    description: "Steam Iron ·   170 Ml · ▪   2200 W",
    badge: "new"
  },
  {
    id: 814,
    name: "Nasco 2200 Watts Steam Iron",
    brand: "NASCO",
    brandId: "nasco",
    model: "GFDHGHGF",
    category: "small",
    image: "/img/products/GFDHGHGF.jpg",
    images: ["/img/products/GFDHGHGF.jpg"],
    price: 4600,
    rating: 4.4,
    reviews: 64,
    icon: "⚡",
    tags: [
      "nasco",
      "small"
    ],
    description: "Steam Iron ·   170 Ml ·   1600 W",
    badge: "new"
  },
  {
    id: 815,
    name: "Nasco 2200 Watts Steam Iron",
    brand: "NASCO",
    brandId: "nasco",
    model: "dgjt",
    category: "small",
    image: "/img/products/dgjt.jpg",
    images: ["/img/products/dgjt.jpg"],
    price: 4600,
    rating: 4.4,
    reviews: 48,
    icon: "⚡",
    tags: [
      "nasco",
      "small"
    ],
    description: "Steam Iron ·   170 Ml ·   1600 W",
    badge: "new"
  },
  {
    id: 816,
    name: "Nasco 1600 Watts Steam Iron",
    brand: "NASCO",
    brandId: "nasco",
    model: "JHKG",
    category: "small",
    image: "/img/products/JHKG.jpg",
    images: ["/img/products/JHKG.jpg"],
    price: 199,
    rating: 4.4,
    reviews: 53,
    icon: "⚡",
    tags: [
      "nasco",
      "small"
    ],
    description: "Steam Iron · 170 Ml · 1600 W",
    badge: "new"
  },
  {
    id: 817,
    name: "Nasco 1600 Watts Steam Iron",
    brand: "NASCO",
    brandId: "nasco",
    model: "HYRF",
    category: "small",
    image: "/img/products/HYRF.jpg",
    images: ["/img/products/HYRF.jpg"],
    price: 4600,
    rating: 4.4,
    reviews: 28,
    icon: "⚡",
    tags: [
      "nasco",
      "small"
    ],
    description: "Steam Iron ·   170 Ml ·   1600 W",
    badge: "new"
  },
  {
    id: 818,
    name: "Nasco 5.0Hp Floor Standing Ac",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASCO-5.0HP-FLOOR-STANDING-AC-NAS-TFS-48N1-FRONT-OPEN",
    category: "ac",
    image: "/img/products/NASCO-5.0HP-FLOOR-STANDING-AC-NAS-TFS-48N1-FRONT-OPEN.jpg",
    images: ["/img/products/NASCO-5.0HP-FLOOR-STANDING-AC-NAS-TFS-48N1-FRONT-OPEN.jpg"],
    price: 11200,
    rating: 4.4,
    reviews: 62,
    icon: "❄️",
    tags: [
      "nasco",
      "ac"
    ],
    description: "Stylish Design · Multi Level Wind Speed · Digital Panel · White · R410A Gas",
    badge: "new"
  },
  {
    id: 819,
    name: "Nasco 3.5Hp Floor Standing Ac",
    brand: "NASCO",
    brandId: "nasco",
    model: "XFYJDY",
    category: "ac",
    image: "/img/products/XFYJDY.jpg",
    images: ["/img/products/XFYJDY.jpg"],
    price: 17549,
    rating: 4.4,
    reviews: 62,
    icon: "❄️",
    tags: [
      "nasco",
      "ac"
    ],
    description: "Stylish Design · Multi Level Wind Speed · 5 Meter Coil · White · Energy Saving · Digital Panel · 3.5Hp",
    badge: "new"
  },
  {
    id: 820,
    name: "Nasco 30 Nascommercial Standing Fan",
    brand: "NASCO",
    brandId: "nasco",
    model: "jvjkhgl",
    category: "small",
    image: "/img/products/jvjkhgl.jpg",
    images: ["/img/products/jvjkhgl.jpg"],
    price: 1449,
    rating: 4.4,
    reviews: 89,
    icon: "⚡",
    tags: [
      "nasco",
      "small"
    ],
    description: "▪160 Watt · 3 Blades · 3 Modes",
    badge: "new"
  },
  {
    id: 821,
    name: "Nasco 16 Rechargeable Standing Fan",
    brand: "NASCO",
    brandId: "nasco",
    model: "FS40-38B",
    category: "small",
    image: "/img/products/FS40-38B.jpg",
    images: ["/img/products/FS40-38B.jpg"],
    price: 1099,
    rating: 4.4,
    reviews: 29,
    icon: "⚡",
    tags: [
      "nasco",
      "small"
    ],
    description: "Stand Fan · 15-25W · 5 Plates · 3 Modes · Rechargeable",
    badge: "new"
  },
  {
    id: 822,
    name: "Nasco 16 Rechargeable Standing Fan",
    brand: "NASCO",
    brandId: "nasco",
    model: "tyudtyi",
    category: "small",
    image: "/img/products/tyudtyi.jpg",
    images: ["/img/products/tyudtyi.jpg"],
    price: 4600,
    rating: 4.4,
    reviews: 87,
    icon: "⚡",
    tags: [
      "nasco",
      "small"
    ],
    description: "Stand Fan · 15-25W · 5 Plates · 3 Modes · Rechargeable",
    badge: "new"
  },
  {
    id: 823,
    name: "Nasco 18 Industrial Standing Fan",
    brand: "NASCO",
    brandId: "nasco",
    model: "FS45-5-png",
    category: "small",
    image: "/img/products/FS45-5-png.png",
    images: ["/img/products/FS45-5-png.png"],
    price: 289,
    rating: 4.4,
    reviews: 87,
    icon: "⚡",
    tags: [
      "nasco",
      "small"
    ],
    description: "Industrial Stand Fan · 55W · 3 Speeds · Oscillating Function",
    badge: "new"
  },
  {
    id: 824,
    name: "Nasco 18 Industrial Standing Fan Fs4",
    brand: "NASCO",
    brandId: "nasco",
    model: "FS45-5-png",
    category: "small",
    image: "/img/products/FS45-5-png.png",
    images: ["/img/products/FS45-5-png.png"],
    price: 549,
    rating: 4.4,
    reviews: 34,
    icon: "⚡",
    tags: [
      "nasco",
      "small"
    ],
    description: "Industrial Stand Fan · 55W · 5 Blades · Oscillating Function",
    badge: "new"
  },
  {
    id: 825,
    name: "Nasco 16 &#8221; Standing Fan 5 Blades",
    brand: "NASCO",
    brandId: "nasco",
    model: "fs40-22-main",
    category: "small",
    image: "/img/products/fs40-22-main.jpg",
    images: ["/img/products/fs40-22-main.jpg"],
    price: 399,
    rating: 4.4,
    reviews: 86,
    icon: "⚡",
    tags: [
      "nasco",
      "small"
    ],
    description: "Stand Fan · High Volume Air Movement · Remote Control · 7.5 Timer · 5 Blades",
    badge: "new"
  },
  {
    id: 826,
    name: "Nasco 16 &#8221; Standing Fan Blades",
    brand: "NASCO",
    brandId: "nasco",
    model: "IMG_2694",
    category: "small",
    image: "/img/products/IMG_2694.png",
    images: ["/img/products/IMG_2694.png"],
    price: 4600,
    rating: 4.4,
    reviews: 99,
    icon: "⚡",
    tags: [
      "nasco",
      "small"
    ],
    description: "Stand Fan · High Volume Air Movement · Remote Control · 7.5 Timer · 5 Blades",
    badge: "new"
  },
  {
    id: 827,
    name: "Samsung 120 Smart 4K UHD Ultra Short Throw Laser Projector",
    brand: "Samsung",
    brandId: "samsung",
    model: "SP-LSP7TUAXGH-1",
    category: "small",
    image: "/img/products/SP-LSP7TUAXGH-1.jpg",
    images: ["/img/products/SP-LSP7TUAXGH-1.jpg"],
    price: 49999,
    rating: 4.4,
    reviews: 76,
    icon: "⚡",
    tags: [
      "samsung",
      "small"
    ],
    description: "4K Hd · USBx1 · HDMIx3 · Wifi-Ethernet · Dobly Digital Plus · Samrt Tv",
    badge: "new"
  },
  {
    id: 828,
    name: "Nasco 2.5Hp R410 Split Air Conditioner",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASCO-1.5HP-R410-SPLIT-AIR-CONDITIONER-NAS-T12N1-FRONT",
    category: "ac",
    image: "/img/products/NASCO-1.5HP-R410-SPLIT-AIR-CONDITIONER-NAS-T12N1-FRONT.jpg",
    images: ["/img/products/NASCO-1.5HP-R410-SPLIT-AIR-CONDITIONER-NAS-T12N1-FRONT.jpg"],
    price: 11200,
    rating: 4.4,
    reviews: 88,
    icon: "❄️",
    tags: [
      "nasco",
      "ac"
    ],
    description: "Plain White Panel Design · Copper Condenser · 2.5Hp · R410 Refrigerant · Energy Saving",
    badge: "new"
  },
  {
    id: 829,
    name: "Nasco 2.0Hp R410 Split Air Conditioner",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASCO-1.5HP-R410-SPLIT-AIR-CONDITIONER-NAS-T12N1-FRONT",
    category: "ac",
    image: "/img/products/NASCO-1.5HP-R410-SPLIT-AIR-CONDITIONER-NAS-T12N1-FRONT.jpg",
    images: ["/img/products/NASCO-1.5HP-R410-SPLIT-AIR-CONDITIONER-NAS-T12N1-FRONT.jpg"],
    price: 4899,
    rating: 4.4,
    reviews: 63,
    icon: "❄️",
    tags: [
      "nasco",
      "ac"
    ],
    description: "Plain White Panel Design · Copper Condenser · Energy Saving · R410 Refrigerant · 2.0Hp",
    badge: "new"
  },
  {
    id: 830,
    name: "Nasco 2.5Hp Split Inverter Air Conditioner",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASCO-2.0HP-SPLIT-INVERTER-AIR-CONDITIONER-NASHRN1-18-FRONT",
    category: "ac",
    image: "/img/products/NASCO-2.0HP-SPLIT-INVERTER-AIR-CONDITIONER-NASHRN1-18-FRONT.jpg",
    images: ["/img/products/NASCO-2.0HP-SPLIT-INVERTER-AIR-CONDITIONER-NASHRN1-18-FRONT.jpg"],
    price: 5449,
    rating: 4.4,
    reviews: 53,
    icon: "❄️",
    tags: [
      "nasco",
      "ac"
    ],
    description: "White Panel · Sleek Design · Inverter Compressor · Copper Condenser · R410",
    badge: "new"
  },
  {
    id: 831,
    name: "Nasco 2.0Hp Split Inverter Air Conditioner",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASCO-2.0HP-SPLIT-INVERTER-AIR-CONDITIONER-NASHRN1-18-FRONT-1",
    category: "ac",
    image: "/img/products/NASCO-2.0HP-SPLIT-INVERTER-AIR-CONDITIONER-NASHRN1-18-FRONT-1.jpg",
    images: ["/img/products/NASCO-2.0HP-SPLIT-INVERTER-AIR-CONDITIONER-NASHRN1-18-FRONT-1.jpg"],
    price: 8249,
    rating: 4.4,
    reviews: 56,
    icon: "❄️",
    tags: [
      "nasco",
      "ac"
    ],
    description: "Sleek Design · Inverter Compressor · Copper Condenser · R410 · White Control Panel",
    badge: "new"
  },
  {
    id: 832,
    name: "Nasco 1.5Hp Split Inverter Air Conditioner",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASCO-2.0HP-SPLIT-INVERTER-AIR-CONDITIONER-NASHRN1-18-FRONT",
    category: "ac",
    image: "/img/products/NASCO-2.0HP-SPLIT-INVERTER-AIR-CONDITIONER-NASHRN1-18-FRONT.jpg",
    images: ["/img/products/NASCO-2.0HP-SPLIT-INVERTER-AIR-CONDITIONER-NASHRN1-18-FRONT.jpg"],
    price: 11200,
    rating: 4.4,
    reviews: 38,
    icon: "❄️",
    tags: [
      "nasco",
      "ac"
    ],
    description: "White Panel · Sleek Design · Inverter Compressor · Copper Condenser · R410",
    badge: "new"
  },
  {
    id: 833,
    name: "Nasco 5.5Ltrs Air Cooler",
    brand: "NASCO",
    brandId: "nasco",
    model: "FGJGJH",
    category: "small",
    image: "/img/products/FGJGJH.jpg",
    images: ["/img/products/FGJGJH.jpg"],
    price: 849,
    rating: 4.4,
    reviews: 41,
    icon: "⚡",
    tags: [
      "nasco",
      "small"
    ],
    description: "Air Purifier · Remote Control · Water Tank · 5.0Hp · 5 Ltrs · 80 Watts",
    badge: "new"
  },
  {
    id: 834,
    name: "Nasco 7Ltrs Air Cooler",
    brand: "NASCO",
    brandId: "nasco",
    model: "DGHTGH",
    category: "small",
    image: "/img/products/DGHTGH.jpg",
    images: ["/img/products/DGHTGH.jpg"],
    price: 999,
    rating: 4.4,
    reviews: 76,
    icon: "⚡",
    tags: [
      "nasco",
      "small"
    ],
    description: "7 Hrs Timer · Remote Control · Led Display · Water Tank · Air Purifer",
    badge: "new"
  },
  {
    id: 835,
    name: "Nasco 5 Burner Gas Cooker With Oven &amp; Grill",
    brand: "NASCO",
    brandId: "nasco",
    model: "PRM6090SS-DC-511-IDSC",
    category: "kitchen",
    image: "/img/products/PRM6090SS-DC-511-IDSC.jpeg",
    images: ["/img/products/PRM6090SS-DC-511-IDSC.jpeg"],
    price: 3200,
    rating: 4.4,
    reviews: 42,
    icon: "🍳",
    tags: [
      "nasco",
      "kitchen"
    ],
    description: "60 x 90 cm · Black · 5 Burners · Grill",
    badge: "new"
  },
  {
    id: 836,
    name: "Midea Electric Kettle Stainless Steel 1.7Ltrs",
    brand: "Midea",
    brandId: "midea",
    model: "MK-17S32A2-KETTLE",
    category: "kitchen",
    image: "/img/products/MK-17S32A2-KETTLE.png",
    images: ["/img/products/MK-17S32A2-KETTLE.png"],
    price: 199,
    rating: 4.4,
    reviews: 34,
    icon: "🍳",
    tags: [
      "midea",
      "kitchen"
    ],
    description: "1.7L · Power: 1850 &#8211; 2200W · 360 Degree Rotational Base · Auto Cut Off · Durable Thermostat",
    badge: "new"
  },
  {
    id: 837,
    name: "Samsung 75&#8243; Qn800A Neo QLED 8K Smart Television",
    brand: "Samsung",
    brandId: "samsung",
    model: "SAMSUNG-75″-QN800A-NEO-QLED-8K-SMART-TV-2021",
    category: "tv",
    image: "/img/products/SAMSUNG-75″-QN800A-NEO-QLED-8K-SMART-TV-2021.png",
    images: ["/img/products/SAMSUNG-75″-QN800A-NEO-QLED-8K-SMART-TV-2021.png"],
    price: 113099,
    rating: 4.4,
    reviews: 45,
    icon: "📺",
    tags: [
      "samsung",
      "tv"
    ],
    description: "75 Inchines · 8K · G- Viewing Angle · Smart Hub · Wifi-Built-In · HDMIx4 · USBx3 · Dobly Digital Plus",
    badge: "new"
  },
  {
    id: 838,
    name: "Samsung 55&#8243; Serif QLED 4K Television",
    brand: "Samsung",
    brandId: "samsung",
    model: "SAMSUNG-55″-SHERIF-QLED-4K-TV-QA55LS01TAKXXA",
    category: "tv",
    image: "/img/products/SAMSUNG-55″-SHERIF-QLED-4K-TV-QA55LS01TAKXXA.jpg",
    images: ["/img/products/SAMSUNG-55″-SHERIF-QLED-4K-TV-QA55LS01TAKXXA.jpg"],
    price: 26099,
    rating: 4.4,
    reviews: 38,
    icon: "📺",
    tags: [
      "samsung",
      "tv"
    ],
    description: "Serif Design · NFC on TV · Ambient Mode+",
    badge: "new"
  },
  {
    id: 839,
    name: "Samsung 32Ltrs Grill Microwave",
    brand: "Samsung",
    brandId: "samsung",
    model: "SAMSUNG-32LTR-GRILL-MICROWAVE",
    category: "kitchen",
    image: "/img/products/SAMSUNG-32LTR-GRILL-MICROWAVE.jpg",
    images: ["/img/products/SAMSUNG-32LTR-GRILL-MICROWAVE.jpg"],
    price: 5199,
    rating: 4.4,
    reviews: 91,
    icon: "🍳",
    tags: [
      "samsung",
      "kitchen"
    ],
    description: "Rapid Defrost · Wide Grill · Hot Blast · Large Turntable · Slim Fry",
    badge: "new"
  },
  {
    id: 840,
    name: "Nasco 16 &#8221; Standing Fan Black",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASCO-16-INCES-STAND-FAN-BLACK",
    category: "small",
    image: "/img/products/NASCO-16-INCES-STAND-FAN-BLACK.jpg",
    images: ["/img/products/NASCO-16-INCES-STAND-FAN-BLACK.jpg"],
    price: 899,
    rating: 4.4,
    reviews: 42,
    icon: "⚡",
    tags: [
      "nasco",
      "small"
    ],
    description: "Stand, Desk, Wall Fan · With Remote Control · 8H Timer",
    badge: "new"
  },
  {
    id: 841,
    name: "Nasco 16 &#8221; Standing Fan 5 Blades",
    brand: "NASCO",
    brandId: "nasco",
    model: "NA-FS1615",
    category: "small",
    image: "/img/products/NA-FS1615.jpg",
    images: ["/img/products/NA-FS1615.jpg"],
    price: 4600,
    rating: 4.4,
    reviews: 26,
    icon: "⚡",
    tags: [
      "nasco",
      "small"
    ],
    description: "Stand Fan · High Volume Air Movement · Remote Control · 7.5 Timer · 5 Blades",
    badge: "new"
  },
  {
    id: 842,
    name: "Nasco 55Watts Standing Fan 16 &#8220;",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASCO-55WATTS-STANDING-FAN-16INCHES",
    category: "small",
    image: "/img/products/NASCO-55WATTS-STANDING-FAN-16INCHES.jpg",
    images: ["/img/products/NASCO-55WATTS-STANDING-FAN-16INCHES.jpg"],
    price: 749,
    rating: 4.4,
    reviews: 41,
    icon: "⚡",
    tags: [
      "nasco",
      "small"
    ],
    description: "Remote Stand Fan · Touch Screen · 3 Speeds · 7.5 Timer · Sleep Mode",
    badge: "new"
  },
  {
    id: 843,
    name: "Nasco 16 &#8221; Standing Fan Red",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASCO-16-INCHES-STANDING-FAN-RED",
    category: "small",
    image: "/img/products/NASCO-16-INCHES-STANDING-FAN-RED.jpg",
    images: ["/img/products/NASCO-16-INCHES-STANDING-FAN-RED.jpg"],
    price: 649,
    rating: 4.4,
    reviews: 43,
    icon: "⚡",
    tags: [
      "nasco",
      "small"
    ],
    description: "Remote Stand Fan · Touch Screen · 3 Speeds · 7.5 Timer · Sleep Mode",
    badge: "new"
  },
  {
    id: 844,
    name: "Nasco 16 &#8221; 55 Watt Standing Fan",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASCO-55WATT-STANDING-FAN",
    category: "small",
    image: "/img/products/NASCO-55WATT-STANDING-FAN.jpg",
    images: ["/img/products/NASCO-55WATT-STANDING-FAN.jpg"],
    price: 749,
    rating: 4.4,
    reviews: 29,
    icon: "⚡",
    tags: [
      "nasco",
      "small"
    ],
    description: "Remote Stand Fan · Touch Screen · 3 Speeds · 7.5 Timer · Sleep Mode",
    badge: "new"
  },
  {
    id: 845,
    name: "Nasco 16 &#8221; Standing Fan White",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASCO-16-INCHE-STANDING-FAN-WHITE",
    category: "small",
    image: "/img/products/NASCO-16-INCHE-STANDING-FAN-WHITE.jpg",
    images: ["/img/products/NASCO-16-INCHE-STANDING-FAN-WHITE.jpg"],
    price: 199,
    rating: 4.4,
    reviews: 36,
    icon: "⚡",
    tags: [
      "nasco",
      "small"
    ],
    description: "Stand Fan · 45Watt · 3 Speeds Oscillating Function ·  220-240V / 50-60Hz",
    badge: "new"
  },
  {
    id: 846,
    name: "Samsung 23Ltrs Grill Microwave",
    brand: "Samsung",
    brandId: "samsung",
    model: "MG23F301TAK",
    category: "kitchen",
    image: "/img/products/MG23F301TAK.jpeg",
    images: ["/img/products/MG23F301TAK.jpeg"],
    price: 2599,
    rating: 4.4,
    reviews: 37,
    icon: "🍳",
    tags: [
      "samsung",
      "kitchen"
    ],
    description: "Rapid Defrost · Grill · Browning Plus · Heat Wave Grill",
    badge: "new"
  },
  {
    id: 847,
    name: "Nasco 16 &#8221; 45 Watts Wall Fan",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASCO-16-INCHE-45-WATTS-WALL-FAN",
    category: "small",
    image: "/img/products/NASCO-16-INCHE-45-WATTS-WALL-FAN.jpeg",
    images: ["/img/products/NASCO-16-INCHE-45-WATTS-WALL-FAN.jpeg"],
    price: 549,
    rating: 4.4,
    reviews: 65,
    icon: "⚡",
    tags: [
      "nasco",
      "small"
    ],
    description: "Stand Fan 3 In 1 · 45W · 3Speeds · 220-240V / 50-6Hz",
    badge: "new"
  },
  {
    id: 848,
    name: "Nasco 16 Standing Fan",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASCO-16inches-METAL-STANDING-FAN",
    category: "small",
    image: "/img/products/NASCO-16inches-METAL-STANDING-FAN.jpg",
    images: ["/img/products/NASCO-16inches-METAL-STANDING-FAN.jpg"],
    price: 749,
    rating: 4.4,
    reviews: 74,
    icon: "⚡",
    tags: [
      "nasco",
      "small"
    ],
    description: "Metal Stand Fan Chrome · 3 Speeds · ▪7 · 5 Timer · Sleep Mode",
    badge: "new"
  },
  {
    id: 849,
    name: "Samsung 23Ltrs Solo Microwave",
    brand: "Samsung",
    brandId: "samsung",
    model: "SAMSUNG-23LTR-SOLO-MICROWAVE-MS23F301TAK",
    category: "kitchen",
    image: "/img/products/SAMSUNG-23LTR-SOLO-MICROWAVE-MS23F301TAK.jpg",
    images: ["/img/products/SAMSUNG-23LTR-SOLO-MICROWAVE-MS23F301TAK.jpg"],
    price: 2099,
    rating: 4.4,
    reviews: 54,
    icon: "🍳",
    tags: [
      "samsung",
      "kitchen"
    ],
    description: "Cooking From Fresh Ingredients Made Simple · Enhance Your Kitchen Look · Keep It Clean With Ceramic",
    badge: "new"
  },
  {
    id: 850,
    name: "Nasco 16 Tripod Fan",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASCO-16inch-TRYPOD-FAN",
    category: "small",
    image: "/img/products/NASCO-16inch-TRYPOD-FAN.jpg",
    images: ["/img/products/NASCO-16inch-TRYPOD-FAN.jpg"],
    price: 549,
    rating: 4.4,
    reviews: 72,
    icon: "⚡",
    tags: [
      "nasco",
      "small"
    ],
    description: "35 Watt · 25 Cm · Tripod · 3 Speeds · Wooden",
    badge: "new"
  },
  {
    id: 851,
    name: "Nasco 16 Wooden Tripod Fan",
    brand: "NASCO",
    brandId: "nasco",
    model: "Nasco-3-Legs-Standing-Fan-FF-450C-Black",
    category: "small",
    image: "/img/products/Nasco-3-Legs-Standing-Fan-FF-450C-Black.jpg",
    images: ["/img/products/Nasco-3-Legs-Standing-Fan-FF-450C-Black.jpg"],
    price: 4600,
    rating: 4.4,
    reviews: 86,
    icon: "⚡",
    tags: [
      "nasco",
      "small"
    ],
    description: "35 Watt · 25 Cm · Tripod · 3 Speeds · Wooden",
    badge: "new"
  },
  {
    id: 852,
    name: "Nasco 12 Wooden Tripod Fan",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASCO-12inch-WOODEN-TRIPOD-FAN",
    category: "small",
    image: "/img/products/NASCO-12inch-WOODEN-TRIPOD-FAN.jpg",
    images: ["/img/products/NASCO-12inch-WOODEN-TRIPOD-FAN.jpg"],
    price: 4600,
    rating: 4.4,
    reviews: 57,
    icon: "⚡",
    tags: [
      "nasco",
      "small"
    ],
    description: "35 Watt · 25 Cm · Tripod · 3 Speeds · Wooden",
    badge: "new"
  },
  {
    id: 853,
    name: "Nasco 10 Tripod Fan",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASCO-10inch-TRIPOD-FAN",
    category: "small",
    image: "/img/products/NASCO-10inch-TRIPOD-FAN.jpg",
    images: ["/img/products/NASCO-10inch-TRIPOD-FAN.jpg"],
    price: 4600,
    rating: 4.4,
    reviews: 82,
    icon: "⚡",
    tags: [
      "nasco",
      "small"
    ],
    description: "Legs Stand Fan ·   Modes · 5 Blades",
    badge: "new"
  },
  {
    id: 854,
    name: "Nasco 32 Colonne Fan",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASCO-38-COLONNE-FAN",
    category: "small",
    image: "/img/products/NASCO-38-COLONNE-FAN.jpg",
    images: ["/img/products/NASCO-38-COLONNE-FAN.jpg"],
    price: 4600,
    rating: 4.4,
    reviews: 24,
    icon: "⚡",
    tags: [
      "nasco",
      "small"
    ],
    description: "51 Watt · Led Indicator · Timer · Remote Control · Wooden",
    badge: "new"
  },
  {
    id: 855,
    name: "Nasco 32 Colonne Fan",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASCO-32-COLONNE-FAN",
    category: "small",
    image: "/img/products/NASCO-32-COLONNE-FAN.jpg",
    images: ["/img/products/NASCO-32-COLONNE-FAN.jpg"],
    price: 4600,
    rating: 4.4,
    reviews: 24,
    icon: "⚡",
    tags: [
      "nasco",
      "small"
    ],
    description: "50 Watt · Led Indicator · Timer · Remote Control · Black &#038; Silver",
    badge: "new"
  },
  {
    id: 856,
    name: "Nasco Meat Grinder",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASCO-600-800WATT-MEAT-GRINDER-MG5849GS-SIDE-2",
    category: "kitchen",
    image: "/img/products/NASCO-600-800WATT-MEAT-GRINDER-MG5849GS-SIDE-2.jpg",
    images: ["/img/products/NASCO-600-800WATT-MEAT-GRINDER-MG5849GS-SIDE-2.jpg"],
    price: 3200,
    rating: 4.4,
    reviews: 45,
    icon: "🍳",
    tags: [
      "nasco",
      "kitchen"
    ],
    description: "Material: Plastic · Power: 600 -800 W · Molded Hopper",
    badge: "new"
  },
  {
    id: 857,
    name: "Nasco 2400 Watts Multi Functional Iron",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASCO-2400-WATTS-MULTI-FUNCTIONAL-IRON",
    category: "small",
    image: "/img/products/NASCO-2400-WATTS-MULTI-FUNCTIONAL-IRON.jpg",
    images: ["/img/products/NASCO-2400-WATTS-MULTI-FUNCTIONAL-IRON.jpg"],
    price: 4600,
    rating: 4.4,
    reviews: 96,
    icon: "⚡",
    tags: [
      "nasco",
      "small"
    ],
    description: "7 Lts ·   2400 Watt ·   4 · 5 Bar · Multi Functions",
    badge: "new"
  },
  {
    id: 858,
    name: "Nasco 1200 Watts Dry Iron",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASCO-1200-WATTS-DRY-IRON",
    category: "small",
    image: "/img/products/NASCO-1200-WATTS-DRY-IRON.jpg",
    images: ["/img/products/NASCO-1200-WATTS-DRY-IRON.jpg"],
    price: 4600,
    rating: 4.4,
    reviews: 52,
    icon: "⚡",
    tags: [
      "nasco",
      "small"
    ],
    description: "1200 W · Auto Clean · Dry-Iron · Anti-Drop · Stainless Steel Sole Plate",
    badge: "new"
  },
  {
    id: 859,
    name: "Nasco 2000 Watt Steam Iron",
    brand: "NASCO",
    brandId: "nasco",
    model: "1-92",
    category: "small",
    image: "/img/products/1-92.jpg",
    images: ["/img/products/1-92.jpg"],
    price: 4600,
    rating: 4.4,
    reviews: 44,
    icon: "⚡",
    tags: [
      "nasco",
      "small"
    ],
    description: "Steam Iron · 350 Ml · 2000 W",
    badge: "new"
  },
  {
    id: 860,
    name: "Nasco 2000 Watts Steam Iron",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASCO-2000-WATTS-STEAM-IRON",
    category: "small",
    image: "/img/products/NASCO-2000-WATTS-STEAM-IRON.jpg",
    images: ["/img/products/NASCO-2000-WATTS-STEAM-IRON.jpg"],
    price: 4600,
    rating: 4.4,
    reviews: 91,
    icon: "⚡",
    tags: [
      "nasco",
      "small"
    ],
    description: "2000W · 120Ml · Sole Plate · Nonstick Sole Plate · Power Indicator",
    badge: "new"
  },
  {
    id: 861,
    name: "Nasco 1 Burner Gas Sstove 2 Shelve Stand",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASCO-1-BURNER-GAS-STOVE-2-SHELVE-STAND",
    category: "kitchen",
    image: "/img/products/NASCO-1-BURNER-GAS-STOVE-2-SHELVE-STAND.jpg",
    images: ["/img/products/NASCO-1-BURNER-GAS-STOVE-2-SHELVE-STAND.jpg"],
    price: 3200,
    rating: 4.4,
    reviews: 73,
    icon: "🍳",
    tags: [
      "nasco",
      "kitchen"
    ],
    description: "1Gas Burner · Iron Burner · 2 Shelves · Stainless Stand",
    badge: "new"
  },
  {
    id: 862,
    name: "Samsung Duracool 234Ltr Top Mount Fridge",
    brand: "Samsung",
    brandId: "samsung",
    model: "SAMSUNG-DURACOOL-TWIN-COOLING-PLUS-REGRIGERATOR1",
    category: "fridge",
    image: "/img/products/SAMSUNG-DURACOOL-TWIN-COOLING-PLUS-REGRIGERATOR1.jpg",
    images: ["/img/products/SAMSUNG-DURACOOL-TWIN-COOLING-PLUS-REGRIGERATOR1.jpg"],
    price: 7900,
    rating: 4.4,
    reviews: 80,
    icon: "🧊",
    tags: [
      "samsung",
      "fridge"
    ],
    description: "234 Liters · No Frost · Digital Inventor · Compressor · Titanium Silver · Energy Saving",
    badge: "new"
  },
  {
    id: 863,
    name: "Nasco 1 Burner Gas Sstove Black Cap",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASCO-1-BURNER-GAS-STOVE-BLACK-CAP",
    category: "kitchen",
    image: "/img/products/NASCO-1-BURNER-GAS-STOVE-BLACK-CAP.png",
    images: ["/img/products/NASCO-1-BURNER-GAS-STOVE-BLACK-CAP.png"],
    price: 3200,
    rating: 4.4,
    reviews: 53,
    icon: "🍳",
    tags: [
      "nasco",
      "kitchen"
    ],
    description: "1Gas Burner · Black Cap · White Color",
    badge: "new"
  },
  {
    id: 864,
    name: "Nasco 3 Burner Gas Sstove Black Cap",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASCO-3-BURNER-GAS-STOVE-BLACK-CAP",
    category: "kitchen",
    image: "/img/products/NASCO-3-BURNER-GAS-STOVE-BLACK-CAP.jpg",
    images: ["/img/products/NASCO-3-BURNER-GAS-STOVE-BLACK-CAP.jpg"],
    price: 3200,
    rating: 4.4,
    reviews: 48,
    icon: "🍳",
    tags: [
      "nasco",
      "kitchen"
    ],
    description: "3 Gas Burners · Black Cap · White Color",
    badge: "new"
  },
  {
    id: 865,
    name: "Nasco 4 Burner Gas Stove White, Black Cap",
    brand: "NASCO",
    brandId: "nasco",
    model: "1-85",
    category: "kitchen",
    image: "/img/products/1-85.jpg",
    images: ["/img/products/1-85.jpg"],
    price: 3200,
    rating: 4.4,
    reviews: 73,
    icon: "🍳",
    tags: [
      "nasco",
      "kitchen"
    ],
    description: "4 Gas Burners · Stainless Steel · Black Cap · 2 Shelves Stand · White Color",
    badge: "new"
  },
  {
    id: 866,
    name: "Nasco 4 Burner Ga Stove Gold Cap",
    brand: "NASCO",
    brandId: "nasco",
    model: "1-84",
    category: "kitchen",
    image: "/img/products/1-84.jpg",
    images: ["/img/products/1-84.jpg"],
    price: 3200,
    rating: 4.4,
    reviews: 41,
    icon: "🍳",
    tags: [
      "nasco",
      "kitchen"
    ],
    description: "4 Gas Burners · Gold Cap · 2 Shelves Stand · White Color",
    badge: "new"
  },
  {
    id: 867,
    name: "Nasco 5 Burner Ga Stove",
    brand: "NASCO",
    brandId: "nasco",
    model: "1-31",
    category: "kitchen",
    image: "/img/products/1-31.png",
    images: ["/img/products/1-31.png"],
    price: 3200,
    rating: 4.4,
    reviews: 59,
    icon: "🍳",
    tags: [
      "nasco",
      "kitchen"
    ],
    description: "5 Burners · Wine Color · 2 Shelves Stand",
    badge: "new"
  },
  {
    id: 868,
    name: "Nasco 5 Burner Ga Stove",
    brand: "NASCO",
    brandId: "nasco",
    model: "1-30",
    category: "kitchen",
    image: "/img/products/1-30.png",
    images: ["/img/products/1-30.png"],
    price: 3200,
    rating: 4.4,
    reviews: 71,
    icon: "🍳",
    tags: [
      "nasco",
      "kitchen"
    ],
    description: "5 Burners · White · 2 Shelves Stand",
    badge: "new"
  },
  {
    id: 869,
    name: "Nasco 3500 Watt Instant Water Heater",
    brand: "NASCO",
    brandId: "nasco",
    model: "1-73",
    category: "small",
    image: "/img/products/1-73.jpg",
    images: ["/img/products/1-73.jpg"],
    price: 4600,
    rating: 4.4,
    reviews: 46,
    icon: "⚡",
    tags: [
      "nasco",
      "small"
    ],
    description: "Dry Heat Protection · Waterproof Grade · Overheat Protection · Wall Mount",
    badge: "new"
  },
  {
    id: 870,
    name: "Nasco 4500Watt Instant Water Heater",
    brand: "NASCO",
    brandId: "nasco",
    model: "1-29",
    category: "small",
    image: "/img/products/1-29.png",
    images: ["/img/products/1-29.png"],
    price: 4600,
    rating: 4.4,
    reviews: 40,
    icon: "⚡",
    tags: [
      "nasco",
      "small"
    ],
    description: "Vertical Insant Water Heater · Dryheat Protection · Waterproof Grade · 4500 Watts · Wall Protection · Overheat Protection",
    badge: "new"
  },
  {
    id: 871,
    name: "Nasco 20Ltrs Solo Microwave",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASCO-20LTR-SOLO-MICROWAVE",
    category: "kitchen",
    image: "/img/products/NASCO-20LTR-SOLO-MICROWAVE.jpg",
    images: ["/img/products/NASCO-20LTR-SOLO-MICROWAVE.jpg"],
    price: 3200,
    rating: 4.4,
    reviews: 84,
    icon: "🍳",
    tags: [
      "nasco",
      "kitchen"
    ],
    description: "20Ltr · Black · 700W · 5 Power Levels",
    badge: "new"
  },
  {
    id: 872,
    name: "Nasco 36Ltrs Grill Microwave",
    brand: "NASCO",
    brandId: "nasco",
    model: "1-65",
    category: "kitchen",
    image: "/img/products/1-65.jpg",
    images: ["/img/products/1-65.jpg"],
    price: 3200,
    rating: 4.4,
    reviews: 43,
    icon: "🍳",
    tags: [
      "nasco",
      "kitchen"
    ],
    description: "36L · Grill · 1500W · Silver · Safety Lock",
    badge: "new"
  },
  {
    id: 873,
    name: "Nasco 25Ltrs Microwave With Grill",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASCO-25LTR-MICROWAVE-WITH-GRILL",
    category: "kitchen",
    image: "/img/products/NASCO-25LTR-MICROWAVE-WITH-GRILL.jpg",
    images: ["/img/products/NASCO-25LTR-MICROWAVE-WITH-GRILL.jpg"],
    price: 3200,
    rating: 4.4,
    reviews: 93,
    icon: "🍳",
    tags: [
      "nasco",
      "kitchen"
    ],
    description: "25 Ltr · Grill · 1450W · Silver · Lock",
    badge: "new"
  },
  {
    id: 874,
    name: "Nasco 16Ltrs 2Taps Water Dispenser",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASCO-16LTRS-2-TAPS-WATER-DISPENSER-YL1675S-W",
    category: "kitchen",
    image: "/img/products/NASCO-16LTRS-2-TAPS-WATER-DISPENSER-YL1675S-W.png",
    images: ["/img/products/NASCO-16LTRS-2-TAPS-WATER-DISPENSER-YL1675S-W.png"],
    price: 3200,
    rating: 4.4,
    reviews: 73,
    icon: "🍳",
    tags: [
      "nasco",
      "kitchen"
    ],
    description: "16 Ltrs · 2 Taps · White · Storage Cabinet",
    badge: "new"
  },
  {
    id: 875,
    name: "Nasco 400Ltrs Side By Side Refrigerator Metalic Silver 66.",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASF2-66.1F-FRONT",
    category: "fridge",
    image: "/img/products/NASF2-66.1F-FRONT.jpg",
    images: ["/img/products/NASF2-66.1F-FRONT.jpg"],
    price: 7900,
    rating: 4.4,
    reviews: 28,
    icon: "🧊",
    tags: [
      "nasco",
      "fridge"
    ],
    description: "400Ltrs · Manual Defrost · Adjustable Thermostat · Low Noise · 2 Doors · Digital Panel-Wd · Energy Saving · Two Freezer Box",
    badge: "new"
  },
  {
    id: 876,
    name: "Nasco Ultrasonic Humidifier",
    brand: "NASCO",
    brandId: "nasco",
    model: "1-22",
    category: "small",
    image: "/img/products/1-22.png",
    images: ["/img/products/1-22.png"],
    price: 4600,
    rating: 4.4,
    reviews: 35,
    icon: "⚡",
    tags: [
      "nasco",
      "small"
    ],
    description: "Area Of ​​Use: 15-20M² · Water Tank: 2 · 2 L · Shutdown Timer · Duration Up To 24 Hours · 2 · 2 Ltrs",
    badge: "new"
  },
  {
    id: 877,
    name: "Nasco Ultrasonic Humidifier",
    brand: "NASCO",
    brandId: "nasco",
    model: "1-21",
    category: "small",
    image: "/img/products/1-21.png",
    images: ["/img/products/1-21.png"],
    price: 4600,
    rating: 4.4,
    reviews: 73,
    icon: "⚡",
    tags: [
      "nasco",
      "small"
    ],
    description: "Area Of ​​Use: 15-20M² · Water Tank: 3 · 78 L · 360 Mist Output · 26 · 5 Watt · Electric Control Panel · Tank Capacity 3 · 78Ltrs · Shutdown Timer",
    badge: "new"
  },
  {
    id: 878,
    name: "Nasco Air Purifier",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASCO-AIR-PURIFIER-AP2202A-GS-FRONT",
    category: "small",
    image: "/img/products/NASCO-AIR-PURIFIER-AP2202A-GS-FRONT.jpg",
    images: ["/img/products/NASCO-AIR-PURIFIER-AP2202A-GS-FRONT.jpg"],
    price: 4600,
    rating: 4.4,
    reviews: 79,
    icon: "⚡",
    tags: [
      "nasco",
      "small"
    ],
    description: "3 Speed Wind · 7 Square Meter Air Flow · Low Noise · 22 Watts · Usage Area 5-7",
    badge: "new"
  },
  {
    id: 879,
    name: "Nasco Air Purifier",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASCO-AIR-PURIFIER-AP5109-CB-FRONT",
    category: "small",
    image: "/img/products/NASCO-AIR-PURIFIER-AP5109-CB-FRONT.jpg",
    images: ["/img/products/NASCO-AIR-PURIFIER-AP5109-CB-FRONT.jpg"],
    price: 4600,
    rating: 4.4,
    reviews: 69,
    icon: "⚡",
    tags: [
      "nasco",
      "small"
    ],
    description: "Uv-C &amp; Ionizer · Night Light · Ultrasonic-8 Hrs · 4 Programs · 4 Fan Speed Setting",
    badge: "new"
  },
  {
    id: 880,
    name: "Nasco Air Purifier",
    brand: "NASCO",
    brandId: "nasco",
    model: "1-18",
    category: "small",
    image: "/img/products/1-18.png",
    images: ["/img/products/1-18.png"],
    price: 4600,
    rating: 4.4,
    reviews: 85,
    icon: "⚡",
    tags: [
      "nasco",
      "small"
    ],
    description: "360 Air Inlet · Easy Touch Control · Night Light · Auto Mode &amp; Child Lock · 1O Watts · 3 Fan Speed Setting",
    badge: "new"
  },
  {
    id: 881,
    name: "Nasco 10Watt Short Speakers Home Theater",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASCO-10WATT-SHORT-SPEAKERS-HOME-THEATER",
    category: "small",
    image: "/img/products/NASCO-10WATT-SHORT-SPEAKERS-HOME-THEATER.jpg",
    images: ["/img/products/NASCO-10WATT-SHORT-SPEAKERS-HOME-THEATER.jpg"],
    price: 4600,
    rating: 4.4,
    reviews: 21,
    icon: "⚡",
    tags: [
      "nasco",
      "small"
    ],
    description: "10W · Mp3 · USB · Cd Ripping · Divx · Fm · Bt",
    badge: "new"
  },
  {
    id: 882,
    name: "Nasco 110 Watt Audio Sound Bar",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASCO-120WATT-AUDIO-SOUNDBAR",
    category: "small",
    image: "/img/products/NASCO-120WATT-AUDIO-SOUNDBAR.jpg",
    images: ["/img/products/NASCO-120WATT-AUDIO-SOUNDBAR.jpg"],
    price: 4600,
    rating: 4.4,
    reviews: 75,
    icon: "⚡",
    tags: [
      "nasco",
      "small"
    ],
    description: "110 Watt · Bluetooth · USB/HDMI · Fm/Radio · Dual Speakers · Led Lights · Ptical Connections",
    badge: "new"
  },
  {
    id: 883,
    name: "Nasco 120Watt Audio Sound Bar",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASCO-160WATT-AUDIO-SOUNDBAR-SILVER",
    category: "small",
    image: "/img/products/NASCO-160WATT-AUDIO-SOUNDBAR-SILVER.jpg",
    images: ["/img/products/NASCO-160WATT-AUDIO-SOUNDBAR-SILVER.jpg"],
    price: 4600,
    rating: 4.4,
    reviews: 33,
    icon: "⚡",
    tags: [
      "nasco",
      "small"
    ],
    description: "120 Watt · Bluetooth · USB · Fm /Radio · HDMI · Led/Light · Optical Connection",
    badge: "new"
  },
  {
    id: 884,
    name: "Nasco 25Watts Bluetooth Party Speaker",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASCO-25WATTS-BLUETOOTH-PARTY-SPEAKER",
    category: "small",
    image: "/img/products/NASCO-25WATTS-BLUETOOTH-PARTY-SPEAKER.jpg",
    images: ["/img/products/NASCO-25WATTS-BLUETOOTH-PARTY-SPEAKER.jpg"],
    price: 4600,
    rating: 4.4,
    reviews: 65,
    icon: "⚡",
    tags: [
      "nasco",
      "small"
    ],
    description: "Nasco Party Speaker · Multi Color · Bluetooth · 25W · Rms",
    badge: "new"
  },
  {
    id: 885,
    name: "Nasco 30Watt Audio Karaoke",
    brand: "NASCO",
    brandId: "nasco",
    model: "1-52",
    category: "small",
    image: "/img/products/1-52.jpg",
    images: ["/img/products/1-52.jpg"],
    price: 4600,
    rating: 4.4,
    reviews: 83,
    icon: "⚡",
    tags: [
      "nasco",
      "small"
    ],
    description: "30 Watt · Bluetooth · USB · Fm · 4 Digital Light · Aux Playback · Bulit-In Battery",
    badge: "new"
  },
  {
    id: 886,
    name: "Nasco 20Watt Audio Karaoke",
    brand: "NASCO",
    brandId: "nasco",
    model: "1-51",
    category: "small",
    image: "/img/products/1-51.jpg",
    images: ["/img/products/1-51.jpg"],
    price: 4600,
    rating: 4.4,
    reviews: 97,
    icon: "⚡",
    tags: [
      "nasco",
      "small"
    ],
    description: "20 Watt · Bluetooth · USB · Fm · 4 Digital Light · Aux Playback · Built-In Battery",
    badge: "new"
  },
  {
    id: 887,
    name: "Nasco 120 Watts Audio Bluetoot Speaker",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASCO-120-WATTS-AUDIO-BLUETOOTH-SPEAKER",
    category: "small",
    image: "/img/products/NASCO-120-WATTS-AUDIO-BLUETOOTH-SPEAKER.jpg",
    images: ["/img/products/NASCO-120-WATTS-AUDIO-BLUETOOTH-SPEAKER.jpg"],
    price: 4600,
    rating: 4.4,
    reviews: 67,
    icon: "⚡",
    tags: [
      "nasco",
      "small"
    ],
    description: "Karoake Audio System · 100 Watt · USB",
    badge: "new"
  },
  {
    id: 888,
    name: "Nasco 100 Watts Karoake IO System",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASCO-100-WATTS-KAROAKE-AUDIO-SYSTEM",
    category: "small",
    image: "/img/products/NASCO-100-WATTS-KAROAKE-AUDIO-SYSTEM.jpg",
    images: ["/img/products/NASCO-100-WATTS-KAROAKE-AUDIO-SYSTEM.jpg"],
    price: 4600,
    rating: 4.4,
    reviews: 52,
    icon: "⚡",
    tags: [
      "nasco",
      "small"
    ],
    description: "Karoake Audio System · 100 Watt · USB · Fm · 2 Microphones · Battery 2200 Mah · Aux Playback",
    badge: "new"
  },
  {
    id: 889,
    name: "Nasco 20 Watt Audio Sound Tower",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASCO-20-WATT-AUDIO-SOUND-TOWER",
    category: "small",
    image: "/img/products/NASCO-20-WATT-AUDIO-SOUND-TOWER.jpg",
    images: ["/img/products/NASCO-20-WATT-AUDIO-SOUND-TOWER.jpg"],
    price: 4600,
    rating: 4.4,
    reviews: 74,
    icon: "⚡",
    tags: [
      "nasco",
      "small"
    ],
    description: "20 Watt · Bluetooth · USB · Fxx · Subwoofer · Tf Card Playback · Aux Playback",
    badge: "new"
  },
  {
    id: 890,
    name: "Nasco 130 Watt IO System",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASCO-120-WATT-AUDIO-SYSTEM",
    category: "small",
    image: "/img/products/NASCO-120-WATT-AUDIO-SYSTEM.jpg",
    images: ["/img/products/NASCO-120-WATT-AUDIO-SYSTEM.jpg"],
    price: 4600,
    rating: 4.4,
    reviews: 44,
    icon: "⚡",
    tags: [
      "nasco",
      "small"
    ],
    description: "130 Watt · Bluetooth · USB · Fm · 1 Microphone · Aux Playback · Bult-In Battery · 7200 Mah",
    badge: "new"
  },
  {
    id: 891,
    name: "Nasco 100 Watt Mini IO System",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASCO-100-WATT-MINI-AUDIO-SYSTEM",
    category: "small",
    image: "/img/products/NASCO-100-WATT-MINI-AUDIO-SYSTEM.jpg",
    images: ["/img/products/NASCO-100-WATT-MINI-AUDIO-SYSTEM.jpg"],
    price: 4600,
    rating: 4.4,
    reviews: 81,
    icon: "⚡",
    tags: [
      "nasco",
      "small"
    ],
    description: "Mini Audio System · 100 Watt · USB",
    badge: "new"
  },
  {
    id: 892,
    name: "Nasco 800Watt IO Portable Speaker",
    brand: "NASCO",
    brandId: "nasco",
    model: "1-45",
    category: "small",
    image: "/img/products/1-45.jpg",
    images: ["/img/products/1-45.jpg"],
    price: 4600,
    rating: 4.4,
    reviews: 66,
    icon: "⚡",
    tags: [
      "nasco",
      "small"
    ],
    description: "800 Watt · 5.0Hp · 1 Speaker System · Subwoofer · Fm/Radio · Remote Control",
    badge: "new"
  },
  {
    id: 893,
    name: "Nasco 120Watt Bluetooth Sound Tower",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASCO-120WATT-BLUETOOTH-SOUND-TOWER",
    category: "small",
    image: "/img/products/NASCO-120WATT-BLUETOOTH-SOUND-TOWER.jpg",
    images: ["/img/products/NASCO-120WATT-BLUETOOTH-SOUND-TOWER.jpg"],
    price: 4600,
    rating: 4.4,
    reviews: 93,
    icon: "⚡",
    tags: [
      "nasco",
      "small"
    ],
    description: "120 Watts · Bluetooth · USB · FM/Aux · DVB-T2 · Smart Android",
    badge: "new"
  },
  {
    id: 894,
    name: "Midea 1.25Ltrs Juice Extractor",
    brand: "Midea",
    brandId: "midea",
    model: "1-10",
    category: "kitchen",
    image: "/img/products/1-10.png",
    images: ["/img/products/1-10.png"],
    price: 3200,
    rating: 4.4,
    reviews: 63,
    icon: "🍳",
    tags: [
      "midea",
      "kitchen"
    ],
    description: "2 Speed Control · Plastic · Anti Slip Feet · Control-Pulp",
    badge: "new"
  },
  {
    id: 895,
    name: "Midea 60cm Cooker Hood Built In",
    brand: "Midea",
    brandId: "midea",
    model: "1-39",
    category: "kitchen",
    image: "/img/products/1-39.jpg",
    images: ["/img/products/1-39.jpg"],
    price: 3200,
    rating: 4.4,
    reviews: 82,
    icon: "🍳",
    tags: [
      "midea",
      "kitchen"
    ],
    description: "3 Speeds · 40W Lamp · Aluminium Grease Filter · Charnascoal Filter",
    badge: "new"
  },
  {
    id: 896,
    name: "Midea 90cm Hood Built In Extractor",
    brand: "Midea",
    brandId: "midea",
    model: "1-38",
    category: "kitchen",
    image: "/img/products/1-38.jpg",
    images: ["/img/products/1-38.jpg"],
    price: 3200,
    rating: 4.4,
    reviews: 90,
    icon: "🍳",
    tags: [
      "midea",
      "kitchen"
    ],
    description: "3 Speeds · 40W Lamp · Aluminium Grease Filter · Charnascoal Filter",
    badge: "new"
  },
  {
    id: 897,
    name: "Midea 90cm Cooker Hood",
    brand: "Midea",
    brandId: "midea",
    model: "Midea-90cm-T-Shape-Rangehood-90M21",
    category: "kitchen",
    image: "/img/products/Midea-90cm-T-Shape-Rangehood-90M21.jpg",
    images: ["/img/products/Midea-90cm-T-Shape-Rangehood-90M21.jpg"],
    price: 3200,
    rating: 4.4,
    reviews: 51,
    icon: "🍳",
    tags: [
      "midea",
      "kitchen"
    ],
    description: "Stainless Steel · Push Button Control · In Built Motor &amp; Fan · 3 Speed Extracts",
    badge: "new"
  },
  {
    id: 898,
    name: "Midea 60cm Hood Extractor",
    brand: "Midea",
    brandId: "midea",
    model: "1-9",
    category: "kitchen",
    image: "/img/products/1-9.jpg",
    images: ["/img/products/1-9.jpg"],
    price: 3200,
    rating: 4.4,
    reviews: 82,
    icon: "🍳",
    tags: [
      "midea",
      "kitchen"
    ],
    description: "Stainless Steel · Push Button Control · In Built Motor &amp; Fan · 3 Speed Extracts",
    badge: "new"
  },
  {
    id: 899,
    name: "Midea 90cm Built In Oven",
    brand: "Midea",
    brandId: "midea",
    model: "2-15",
    category: "kitchen",
    image: "/img/products/2-15.jpg",
    images: ["/img/products/2-15.jpg"],
    price: 3200,
    rating: 4.4,
    reviews: 20,
    icon: "🍳",
    tags: [
      "midea",
      "kitchen"
    ],
    description: "4 Functions · Mechanical Control · Stainless Steel · Forced Air Cooking System",
    badge: "new"
  },
  {
    id: 900,
    name: "Midea 16Ltrs 3 Taps Ater Dispenser Black",
    brand: "Midea",
    brandId: "midea",
    model: "1-15",
    category: "kitchen",
    image: "/img/products/1-15.jpg",
    images: ["/img/products/1-15.jpg"],
    price: 3200,
    rating: 4.4,
    reviews: 81,
    icon: "🍳",
    tags: [
      "midea",
      "kitchen"
    ],
    description: "16Ltrs · 3 Taps · Storage Cabinet · Black &amp; Grey",
    badge: "new"
  },
  {
    id: 901,
    name: "Midea 93Ltrs Table Top Fridge White",
    brand: "Midea",
    brandId: "midea",
    model: "1",
    category: "fridge",
    image: "/img/products/1.jpeg",
    images: ["/img/products/1.jpeg"],
    price: 1999,
    rating: 4.4,
    reviews: 82,
    icon: "🧊",
    tags: [
      "midea",
      "fridge"
    ],
    description: "93 Ltrs · Chiller Nascompartment · Mechanical Temperature Control · 220-240V · Energy Saver · White",
    badge: "new"
  },
  {
    id: 902,
    name: "Midea 16 Wall Fan White",
    brand: "Midea",
    brandId: "midea",
    model: "1-6",
    category: "small",
    image: "/img/products/1-6.jpg",
    images: ["/img/products/1-6.jpg"],
    price: 4600,
    rating: 4.4,
    reviews: 73,
    icon: "⚡",
    tags: [
      "midea",
      "small"
    ],
    description: "3 Speeds · Timer · 3 Blades · Remote · Energy Saver",
    badge: "new"
  },
  {
    id: 903,
    name: "Samsung 32&#8243; Inch Digital Satellite LED Full Hd Television",
    brand: "Samsung",
    brandId: "samsung",
    model: "1-3-jpg",
    category: "tv",
    image: "/img/products/1-3-jpg.webp",
    images: ["/img/products/1-3-jpg.webp"],
    price: 699,
    rating: 4.4,
    reviews: 70,
    icon: "📺",
    tags: [
      "samsung",
      "tv"
    ],
    description: "DIGITAL CLEAR VIEW · WIDE COLOUR ENHANCER · FHD · CONNECT &amp; SHARE · SAT",
    badge: "new"
  },
  {
    id: 904,
    name: "Nasco 95Ltrs Double Door Top Freezer",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASCO-95LTRS-TOP-MOUNT-FREEZER-NASF2-12S-FRONT",
    category: "fridge",
    image: "/img/products/NASCO-95LTRS-TOP-MOUNT-FREEZER-NASF2-12S-FRONT.jpg",
    images: ["/img/products/NASCO-95LTRS-TOP-MOUNT-FREEZER-NASF2-12S-FRONT.jpg"],
    price: 7900,
    rating: 4.4,
    reviews: 48,
    icon: "🧊",
    tags: [
      "nasco",
      "fridge"
    ],
    description: "Silver Vcm · Lock &amp; Key · Light · Stainless Steel · Top Mount Freezer",
    badge: "new"
  },
  {
    id: 905,
    name: "Nasco 527 Ltr Side By Side Refrigerator",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASCO-527-LTR-SIDE-BY-SIDE-REFRIGERATOR-NASSB2-64S-FRONT",
    category: "fridge",
    image: "/img/products/NASCO-527-LTR-SIDE-BY-SIDE-REFRIGERATOR-NASSB2-64S-FRONT.jpg",
    images: ["/img/products/NASCO-527-LTR-SIDE-BY-SIDE-REFRIGERATOR-NASSB2-64S-FRONT.jpg"],
    price: 9649,
    rating: 4.4,
    reviews: 40,
    icon: "🧊",
    tags: [
      "nasco",
      "fridge"
    ],
    description: "Side By Side · Black Mirror · Fast Cooling · Powerful Compressor · Display Controls · Water Dispenser",
    badge: "new"
  },
  {
    id: 906,
    name: "Samsung Duracool 203Ltrs Top Mount Fridge",
    brand: "Samsung",
    brandId: "samsung",
    model: "SAMSUNG-DURACOOL-TWIN-COOLING-PLUS-REGRIGERATOR1",
    category: "fridge",
    image: "/img/products/SAMSUNG-DURACOOL-TWIN-COOLING-PLUS-REGRIGERATOR1.jpg",
    images: ["/img/products/SAMSUNG-DURACOOL-TWIN-COOLING-PLUS-REGRIGERATOR1.jpg"],
    price: 5499,
    rating: 4.4,
    reviews: 27,
    icon: "🧊",
    tags: [
      "samsung",
      "fridge"
    ],
    description: "203Ltrs · No Frost · Digital Inventor · Compressor · Titanium Silver · Energy Saving",
    badge: "new"
  },
  {
    id: 907,
    name: "Nasco 577Ltrs Double Door Chest Freezer",
    brand: "NASCO",
    brandId: "nasco",
    model: "NAS-600-FRONT",
    category: "fridge",
    image: "/img/products/NAS-600-FRONT.jpg",
    images: ["/img/products/NAS-600-FRONT.jpg"],
    price: 7900,
    rating: 4.4,
    reviews: 64,
    icon: "🧊",
    tags: [
      "nasco",
      "fridge"
    ],
    description: "Double Door · Silver · Key Lock · Led Light",
    badge: "new"
  },
  {
    id: 908,
    name: "Nasco 300 Watts Hand Mixer",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASCO-300WATTS-HAND-MIXER1",
    category: "ac",
    image: "/img/products/NASCO-300WATTS-HAND-MIXER1.jpg",
    images: ["/img/products/NASCO-300WATTS-HAND-MIXER1.jpg"],
    price: 11200,
    rating: 4.4,
    reviews: 37,
    icon: "❄️",
    tags: [
      "nasco",
      "ac"
    ],
    description: "Mixer · 2.5 Liters · Stainless Steel Bowl · Turbo Function",
    badge: "new"
  },
  {
    id: 909,
    name: "Nasco 2200Watts Kettle",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASCO-1850-2200WATTS-KETTLE",
    category: "kitchen",
    image: "/img/products/NASCO-1850-2200WATTS-KETTLE.jpg",
    images: ["/img/products/NASCO-1850-2200WATTS-KETTLE.jpg"],
    price: 3200,
    rating: 4.4,
    reviews: 29,
    icon: "🍳",
    tags: [
      "nasco",
      "kitchen"
    ],
    description: "Kettle · 7 Ltrs · Strix Control · Boil Dry Protection",
    badge: "new"
  },
  {
    id: 910,
    name: "Nasco 900Watt Coffee Maker",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASCO-900WATT-COFFEE-MAKER1",
    category: "kitchen",
    image: "/img/products/NASCO-900WATT-COFFEE-MAKER1.jpg",
    images: ["/img/products/NASCO-900WATT-COFFEE-MAKER1.jpg"],
    price: 3200,
    rating: 4.4,
    reviews: 94,
    icon: "🍳",
    tags: [
      "nasco",
      "kitchen"
    ],
    description: "Coffee Machine · 1.5 Ltrs · Glass Carafe · Nylon Filter · Dishwasher Safe",
    badge: "new"
  },
  {
    id: 911,
    name: "Nasco 300 Watt Blender",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASCO-300-WATT-BLENDER1-1",
    category: "kitchen",
    image: "/img/products/NASCO-300-WATT-BLENDER1-1.jpg",
    images: ["/img/products/NASCO-300-WATT-BLENDER1-1.jpg"],
    price: 449,
    rating: 4.4,
    reviews: 52,
    icon: "🍳",
    tags: [
      "nasco",
      "kitchen"
    ],
    description: "800 Ml Plastic Jar · Ss Blades · Ability To Blend Different Kinds Of Fruit",
    badge: "new"
  },
  {
    id: 912,
    name: "Nasco 170 Watt Hand Blender",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASCO-170-WATT-HAND-BLENDER1",
    category: "kitchen",
    image: "/img/products/NASCO-170-WATT-HAND-BLENDER1.jpg",
    images: ["/img/products/NASCO-170-WATT-HAND-BLENDER1.jpg"],
    price: 3200,
    rating: 4.4,
    reviews: 72,
    icon: "🍳",
    tags: [
      "nasco",
      "kitchen"
    ],
    description: "Detachable Plastic Blending Rod · Stainless Steel Blades",
    badge: "new"
  },
  {
    id: 913,
    name: "Nasco 1.7Ltr Kettle With Wooden Coating",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASCO-1.7LTR-KETTLE-WITH-WOODEN-COATING1-1",
    category: "kitchen",
    image: "/img/products/NASCO-1.7LTR-KETTLE-WITH-WOODEN-COATING1-1.jpg",
    images: ["/img/products/NASCO-1.7LTR-KETTLE-WITH-WOODEN-COATING1-1.jpg"],
    price: 3200,
    rating: 4.4,
    reviews: 69,
    icon: "🍳",
    tags: [
      "nasco",
      "kitchen"
    ],
    description: "Kettle · 7L · Boil Dry Protection · Stainless Steel · Rear Water Window",
    badge: "new"
  },
  {
    id: 914,
    name: "Nasco 500Watts Blender With Wooden Coating",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASCO-500WATTS-BLENDER-WITH-WOODEN-COATING1-1",
    category: "kitchen",
    image: "/img/products/NASCO-500WATTS-BLENDER-WITH-WOODEN-COATING1-1.jpg",
    images: ["/img/products/NASCO-500WATTS-BLENDER-WITH-WOODEN-COATING1-1.jpg"],
    price: 3200,
    rating: 4.4,
    reviews: 99,
    icon: "🍳",
    tags: [
      "nasco",
      "kitchen"
    ],
    description: "Blender · 5L · Glass Jar · Plastic Body · Jug Lock · 2 Speeds",
    badge: "new"
  },
  {
    id: 915,
    name: "Nasco 600Watt Hand Blender",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASCO-600WATT-HAND-BLENDER1",
    category: "kitchen",
    image: "/img/products/NASCO-600WATT-HAND-BLENDER1.jpg",
    images: ["/img/products/NASCO-600WATT-HAND-BLENDER1.jpg"],
    price: 3200,
    rating: 4.4,
    reviews: 53,
    icon: "🍳",
    tags: [
      "nasco",
      "kitchen"
    ],
    description: "Hand Blender · 700 Ml · 2 Speeds · Plastic Body · Ss Blending · Dc Motor",
    badge: "new"
  },
  {
    id: 916,
    name: "Nasco 800Watt Hand Blender With Wooden Coating",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASCO-800WATT-HAND-BLENDER-WITH-WOODEN-COATING1-1",
    category: "kitchen",
    image: "/img/products/NASCO-800WATT-HAND-BLENDER-WITH-WOODEN-COATING1-1.jpg",
    images: ["/img/products/NASCO-800WATT-HAND-BLENDER-WITH-WOODEN-COATING1-1.jpg"],
    price: 3200,
    rating: 4.4,
    reviews: 28,
    icon: "🍳",
    tags: [
      "nasco",
      "kitchen"
    ],
    description: "Hand Blender · 700 Ml · Plastic Body · Full Accessories",
    badge: "new"
  },
  {
    id: 917,
    name: "Nasco 1200 Watts Pop Corn Maker",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASCO-1200-WATTS-POP-CORN-MAKER1",
    category: "kitchen",
    image: "/img/products/NASCO-1200-WATTS-POP-CORN-MAKER1.jpg",
    images: ["/img/products/NASCO-1200-WATTS-POP-CORN-MAKER1.jpg"],
    price: 399,
    rating: 4.4,
    reviews: 36,
    icon: "🍳",
    tags: [
      "nasco",
      "kitchen"
    ],
    description: "Plastic Body · High Efficiency · 3 Min Popcorn · Red",
    badge: "new"
  },
  {
    id: 918,
    name: "Nasco 370 Watts Pop Corn Maker",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASCO-370-WATTS-POP-CORN-MAKER",
    category: "kitchen",
    image: "/img/products/NASCO-370-WATTS-POP-CORN-MAKER.jpg",
    images: ["/img/products/NASCO-370-WATTS-POP-CORN-MAKER.jpg"],
    price: 499,
    rating: 4.4,
    reviews: 58,
    icon: "🍳",
    tags: [
      "nasco",
      "kitchen"
    ],
    description: "Kettle With Built-In Stirring System · 10 Cups Capacity · Illuminated Chamber",
    badge: "new"
  },
  {
    id: 919,
    name: "Nasco 850 Watt 2 Slice Toaster",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASCO-850-WATT-2-SLICE-TOASTER1",
    category: "kitchen",
    image: "/img/products/NASCO-850-WATT-2-SLICE-TOASTER1.jpg",
    images: ["/img/products/NASCO-850-WATT-2-SLICE-TOASTER1.jpg"],
    price: 399,
    rating: 4.4,
    reviews: 57,
    icon: "🍳",
    tags: [
      "nasco",
      "kitchen"
    ],
    description: "2 Slice Capacity · Ready Light · Fixed Temp · 850 W · White",
    badge: "new"
  },
  {
    id: 920,
    name: "Midea 4.5Ltrs Kitchen Machine",
    brand: "Midea",
    brandId: "midea",
    model: "MIDEA-4.5LTR-KITCHEN-MACHINE1-1",
    category: "kitchen",
    image: "/img/products/MIDEA-4.5LTR-KITCHEN-MACHINE1-1.jpg",
    images: ["/img/products/MIDEA-4.5LTR-KITCHEN-MACHINE1-1.jpg"],
    price: 1499,
    rating: 4.4,
    reviews: 30,
    icon: "🍳",
    tags: [
      "midea",
      "kitchen"
    ],
    description: "Multi Function · Blender · 25Ltr · Processor · 25Ltrs · 7 Speed · Timer · Whisk · Hook · Beater",
    badge: "new"
  },
  {
    id: 921,
    name: "Midea 0.5Ltrs Juice Extractor",
    brand: "Midea",
    brandId: "midea",
    model: "MIDEA-0.5LTR-JUICE-EXTRACTOR1-1",
    category: "kitchen",
    image: "/img/products/MIDEA-0.5LTR-JUICE-EXTRACTOR1-1.jpg",
    images: ["/img/products/MIDEA-0.5LTR-JUICE-EXTRACTOR1-1.jpg"],
    price: 399,
    rating: 4.4,
    reviews: 23,
    icon: "🍳",
    tags: [
      "midea",
      "kitchen"
    ],
    description: "2 Speed Control · Plastic · 400 Watt · Anti Slip Feet",
    badge: "new"
  },
  {
    id: 922,
    name: "Nasco 1.5Ltrs Juicer",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASCO-600LTR-JUICER1-1",
    category: "kitchen",
    image: "/img/products/NASCO-600LTR-JUICER1-1.jpg",
    images: ["/img/products/NASCO-600LTR-JUICER1-1.jpg"],
    price: 549,
    rating: 4.4,
    reviews: 29,
    icon: "🍳",
    tags: [
      "nasco",
      "kitchen"
    ],
    description: "Plastic Body · Stainless Filter · Safety Interlock · 1.5 Liter",
    badge: "new"
  },
  {
    id: 923,
    name: "Nasco 200Watts Food Chopper",
    brand: "NASCO",
    brandId: "nasco",
    model: "Artboard-1",
    category: "kitchen",
    image: "/img/products/Artboard-1.jpg",
    images: ["/img/products/Artboard-1.jpg"],
    price: 299,
    rating: 4.4,
    reviews: 70,
    icon: "🍳",
    tags: [
      "nasco",
      "kitchen"
    ],
    description: "Plastic Body · One Touch Button · Stainless Steel · 200 Watt",
    badge: "new"
  },
  {
    id: 924,
    name: "Nasco 800Watts Crepe Maker",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASCO-800WATTS-CREPE-MAKER1",
    category: "kitchen",
    image: "/img/products/NASCO-800WATTS-CREPE-MAKER1.jpg",
    images: ["/img/products/NASCO-800WATTS-CREPE-MAKER1.jpg"],
    price: 399,
    rating: 4.4,
    reviews: 52,
    icon: "🍳",
    tags: [
      "nasco",
      "kitchen"
    ],
    description: "Cord Storage · Led Indicator · Adjustable Temp · Non Slip Rubber",
    badge: "new"
  },
  {
    id: 925,
    name: "Nasco 1.0Ltr Coffee Maker",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASCO-1.0LTR-COFFEE-MAKER1-1",
    category: "kitchen",
    image: "/img/products/NASCO-1.0LTR-COFFEE-MAKER1-1.jpg",
    images: ["/img/products/NASCO-1.0LTR-COFFEE-MAKER1-1.jpg"],
    price: 649,
    rating: 4.4,
    reviews: 86,
    icon: "🍳",
    tags: [
      "nasco",
      "kitchen"
    ],
    description: "900 W · Nylon Filter · Removable Funnel · Anti Drip · Keep Warm",
    badge: "new"
  },
  {
    id: 926,
    name: "Nasco 400Watts Blender",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASCO-400WATTS-BLENDER1",
    category: "kitchen",
    image: "/img/products/NASCO-400WATTS-BLENDER1.jpg",
    images: ["/img/products/NASCO-400WATTS-BLENDER1.jpg"],
    price: 399,
    rating: 4.4,
    reviews: 61,
    icon: "🍳",
    tags: [
      "nasco",
      "kitchen"
    ],
    description: "1.7 Ltrs · White Plastic Jug · Grinder",
    badge: "new"
  },
  {
    id: 927,
    name: "Nasco 2100 Watt Oven Toaster",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASCO-2100-WATT-OVEN-TOASTER",
    category: "kitchen",
    image: "/img/products/NASCO-2100-WATT-OVEN-TOASTER.jpg",
    images: ["/img/products/NASCO-2100-WATT-OVEN-TOASTER.jpg"],
    price: 899,
    rating: 4.4,
    reviews: 58,
    icon: "🍳",
    tags: [
      "nasco",
      "kitchen"
    ],
    description: "32L Oven · Single Glass Door · With Vde Plug · 2100W",
    badge: "new"
  },
  {
    id: 928,
    name: "Nasco 3000 Watt Deep Fryer",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASCO-3000-WSTT-DEEP-FRYER1-1",
    category: "kitchen",
    image: "/img/products/NASCO-3000-WSTT-DEEP-FRYER1-1.jpg",
    images: ["/img/products/NASCO-3000-WSTT-DEEP-FRYER1-1.jpg"],
    price: 299,
    rating: 4.4,
    reviews: 84,
    icon: "🍳",
    tags: [
      "nasco",
      "kitchen"
    ],
    description: "Adjustable Stem · Power Indicator · 4 L · 3000W",
    badge: "new"
  },
  {
    id: 929,
    name: "Nasco 500 Wtts Professional Blender",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASCO-500-WATTS-PROFESSIONAL-BLENDER1-1",
    category: "kitchen",
    image: "/img/products/NASCO-500-WATTS-PROFESSIONAL-BLENDER1-1.jpg",
    images: ["/img/products/NASCO-500-WATTS-PROFESSIONAL-BLENDER1-1.jpg"],
    price: 399,
    rating: 4.4,
    reviews: 63,
    icon: "🍳",
    tags: [
      "nasco",
      "kitchen"
    ],
    description: "1.5 Ltrs Body · Lid · Handle · White Knob · Base · Black Glass Jug",
    badge: "new"
  },
  {
    id: 930,
    name: "Nasco 300 Watts Professional Blender",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASCO-300-WATTS-PROFESSIONAL-BLENDER",
    category: "kitchen",
    image: "/img/products/NASCO-300-WATTS-PROFESSIONAL-BLENDER.jpg",
    images: ["/img/products/NASCO-300-WATTS-PROFESSIONAL-BLENDER.jpg"],
    price: 249,
    rating: 4.4,
    reviews: 61,
    icon: "🍳",
    tags: [
      "nasco",
      "kitchen"
    ],
    description: "700 Ml Cup · Full Accessories · Chopper Attached · Blend Rob",
    badge: "new"
  },
  {
    id: 931,
    name: "Nasco 300 Watts Hand Mixer Silver And Black Design",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASCO-300-WATTS-HAND-MIXER-SILVER-AND-BLACK-DESIGN1",
    category: "kitchen",
    image: "/img/products/NASCO-300-WATTS-HAND-MIXER-SILVER-AND-BLACK-DESIGN1.jpg",
    images: ["/img/products/NASCO-300-WATTS-HAND-MIXER-SILVER-AND-BLACK-DESIGN1.jpg"],
    price: 399,
    rating: 4.4,
    reviews: 49,
    icon: "🍳",
    tags: [
      "nasco",
      "kitchen"
    ],
    description: "Egg And Dough Mixer · 2 Blades Included · Stainless Steel Decoration",
    badge: "new"
  },
  {
    id: 932,
    name: "Nasco 250 Watt Hand Mixer White",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASCO-250-WATT-HAND-MIXER-WHITE",
    category: "kitchen",
    image: "/img/products/NASCO-250-WATT-HAND-MIXER-WHITE.jpg",
    images: ["/img/products/NASCO-250-WATT-HAND-MIXER-WHITE.jpg"],
    price: 179,
    rating: 4.4,
    reviews: 78,
    icon: "🍳",
    tags: [
      "nasco",
      "kitchen"
    ],
    description: "2 Blades · 3 Adjustable Speeds",
    badge: "new"
  },
  {
    id: 933,
    name: "Nasco 250 Watt Hand Mixer",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASCO-250-WATT-HAND-MIXER1",
    category: "kitchen",
    image: "/img/products/NASCO-250-WATT-HAND-MIXER1.jpg",
    images: ["/img/products/NASCO-250-WATT-HAND-MIXER1.jpg"],
    price: 399,
    rating: 4.4,
    reviews: 85,
    icon: "🍳",
    tags: [
      "nasco",
      "kitchen"
    ],
    description: "2.3 Ltrs · Two Beaters Included · Beating Egg Function · Safety Button · White",
    badge: "new"
  },
  {
    id: 934,
    name: "Nasco 1300 Watt 4 Slice Toaster",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASCO-1300-WATT-4-SLICE-TOASTER1-1",
    category: "kitchen",
    image: "/img/products/NASCO-1300-WATT-4-SLICE-TOASTER1-1.jpg",
    images: ["/img/products/NASCO-1300-WATT-4-SLICE-TOASTER1-1.jpg"],
    price: 649,
    rating: 4.4,
    reviews: 44,
    icon: "🍳",
    tags: [
      "nasco",
      "kitchen"
    ],
    description: "4 Slice Capacity · Ready Light · Fixed Temp",
    badge: "new"
  },
  {
    id: 935,
    name: "Nasco 1.2Ltrs Food Processor",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASCO-1.2LTR-FOOD-PROCESSOR1-1",
    category: "kitchen",
    image: "/img/products/NASCO-1.2LTR-FOOD-PROCESSOR1-1.jpg",
    images: ["/img/products/NASCO-1.2LTR-FOOD-PROCESSOR1-1.jpg"],
    price: 499,
    rating: 4.4,
    reviews: 87,
    icon: "🍳",
    tags: [
      "nasco",
      "kitchen"
    ],
    description: "Full Function ·   Chopping · Slicing · Shredding · Kneading ·   Egg Beating ·   Full Accessories",
    badge: "new"
  },
  {
    id: 936,
    name: "Nasco 0.5Ltr Coffee Maker",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASCO-0.5LTR-COFFEE-MAKER1-1",
    category: "kitchen",
    image: "/img/products/NASCO-0.5LTR-COFFEE-MAKER1-1.jpg",
    images: ["/img/products/NASCO-0.5LTR-COFFEE-MAKER1-1.jpg"],
    price: 179,
    rating: 4.4,
    reviews: 86,
    icon: "🍳",
    tags: [
      "nasco",
      "kitchen"
    ],
    description: "On/Off Indicator · Removable Filter",
    badge: "new"
  },
  {
    id: 937,
    name: "Nasco 1.7Ltrs Kettle Stainless Steel",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASCO-1.7LTR-KETTLESTAINLESS-STEEL1-1",
    category: "kitchen",
    image: "/img/products/NASCO-1.7LTR-KETTLESTAINLESS-STEEL1-1.jpg",
    images: ["/img/products/NASCO-1.7LTR-KETTLESTAINLESS-STEEL1-1.jpg"],
    price: 199,
    rating: 4.4,
    reviews: 60,
    icon: "🍳",
    tags: [
      "nasco",
      "kitchen"
    ],
    description: "Stainless Steel · 7 Ltrs · Cordless",
    badge: "new"
  },
  {
    id: 938,
    name: "Nasco 1.7Ltrs Kettle, Transperent Glass",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASCO-1.7LTR-KETTLE-TRANSPERENT-GLASS1-1",
    category: "kitchen",
    image: "/img/products/NASCO-1.7LTR-KETTLE-TRANSPERENT-GLASS1-1.jpg",
    images: ["/img/products/NASCO-1.7LTR-KETTLE-TRANSPERENT-GLASS1-1.jpg"],
    price: 299,
    rating: 4.4,
    reviews: 33,
    icon: "🍳",
    tags: [
      "nasco",
      "kitchen"
    ],
    description: "Transparent Glass ·   1 · 7 Ltrs · Cordless",
    badge: "new"
  },
  {
    id: 939,
    name: "Nasco Voltage Regulator Digital Display",
    brand: "NASCO",
    brandId: "nasco",
    model: "1NASCO-1500VA-VOLTAGE-REGULATOR-DIGITAL-DISPLAY-1",
    category: "small",
    image: "/img/products/1NASCO-1500VA-VOLTAGE-REGULATOR-DIGITAL-DISPLAY-1.jpg",
    images: ["/img/products/1NASCO-1500VA-VOLTAGE-REGULATOR-DIGITAL-DISPLAY-1.jpg"],
    price: 4600,
    rating: 4.4,
    reviews: 79,
    icon: "⚡",
    tags: [
      "nasco",
      "small"
    ],
    description: "Digital Display · White Color · Input/Output :100V-260V/220Vac · Sockets2*S33 · Plug: P09",
    badge: "new"
  },
  {
    id: 940,
    name: "Nasco Voltage Regulator Digital Display",
    brand: "NASCO",
    brandId: "nasco",
    model: "1NASCO-2000VA-VOLTAGE-REGULATOR-DIGITAL-DISPLAY",
    category: "small",
    image: "/img/products/1NASCO-2000VA-VOLTAGE-REGULATOR-DIGITAL-DISPLAY.jpg",
    images: ["/img/products/1NASCO-2000VA-VOLTAGE-REGULATOR-DIGITAL-DISPLAY.jpg"],
    price: 4600,
    rating: 4.4,
    reviews: 76,
    icon: "⚡",
    tags: [
      "nasco",
      "small"
    ],
    description: "Digital Display · White Color · Input/Output :100V-260V/220Vac · Sockets2*S33 · Plug: P09",
    badge: "new"
  },
  {
    id: 941,
    name: "Nasco Voltage Regulator Digital Display",
    brand: "NASCO",
    brandId: "nasco",
    model: "1NASCO-3000VA-VOLTAGE-REGULATOR-METER-DISPLAY-WHITE-1",
    category: "small",
    image: "/img/products/1NASCO-3000VA-VOLTAGE-REGULATOR-METER-DISPLAY-WHITE-1.jpg",
    images: ["/img/products/1NASCO-3000VA-VOLTAGE-REGULATOR-METER-DISPLAY-WHITE-1.jpg"],
    price: 4600,
    rating: 4.4,
    reviews: 76,
    icon: "⚡",
    tags: [
      "nasco",
      "small"
    ],
    description: "Digital Display · White Color · Input/Output :100V-260V/220Vac · Sockets2*S33 · Plug: P09",
    badge: "new"
  },
  {
    id: 942,
    name: "Nasco Voltage Regulator Digital Display",
    brand: "NASCO",
    brandId: "nasco",
    model: "NASCO-5000VA-VOLTAGE-REGULATOR-DIGITAL-DISPLAY",
    category: "small",
    image: "/img/products/NASCO-5000VA-VOLTAGE-REGULATOR-DIGITAL-DISPLAY.jpg",
    images: ["/img/products/NASCO-5000VA-VOLTAGE-REGULATOR-DIGITAL-DISPLAY.jpg"],
    price: 4600,
    rating: 4.4,
    reviews: 76,
    icon: "⚡",
    tags: [
      "nasco",
      "small"
    ],
    description: "Digital Display · White Color · Input/Output :100V-260V/220Vac · Sockets2*S33 · Plug: P09",
    badge: "new"
  },
  {
    id: 943,
    name: "Nasco Wall Mount Voltage Regulator Digital Display",
    brand: "NASCO",
    brandId: "nasco",
    model: "1NASCO-1000VA-WALL-MOUNT-VOLTAGE-REGULATOR-DIGITAL-DISPLAY",
    category: "small",
    image: "/img/products/1NASCO-1000VA-WALL-MOUNT-VOLTAGE-REGULATOR-DIGITAL-DISPLAY.jpg",
    images: ["/img/products/1NASCO-1000VA-WALL-MOUNT-VOLTAGE-REGULATOR-DIGITAL-DISPLAY.jpg"],
    price: 399,
    rating: 4.4,
    reviews: 83,
    icon: "⚡",
    tags: [
      "nasco",
      "small"
    ],
    description: "Wall Mount · Digital Display · Whitecolor · Input/Output:100V260V/220Vac · Sockets:2*S33 · Plug:",
    badge: "new"
  },
  {
    id: 944,
    name: "Nasco Wall Mount Voltage Regulator Digital Display",
    brand: "NASCO",
    brandId: "nasco",
    model: "1NASCO-1500VA-WALL-MOUNT-VOLTAGE-REGULATOR-DIGITAL-DISPLAY",
    category: "small",
    image: "/img/products/1NASCO-1500VA-WALL-MOUNT-VOLTAGE-REGULATOR-DIGITAL-DISPLAY.jpg",
    images: ["/img/products/1NASCO-1500VA-WALL-MOUNT-VOLTAGE-REGULATOR-DIGITAL-DISPLAY.jpg"],
    price: 4600,
    rating: 4.4,
    reviews: 65,
    icon: "⚡",
    tags: [
      "nasco",
      "small"
    ],
    description: "Wall Mount · Digital Display · Whitecolor · Input/Output:100V260V/220Vac · Sockets:2*S33 · Plug:",
    badge: "new"
  },
  {
    id: 945,
    name: "Nasco Wall Mount Voltage Regulator Digital Display",
    brand: "NASCO",
    brandId: "nasco",
    model: "1NASCO-2000VA-WALL-MOUNT-VOLTAGE-REGULATOR-DIGITAL-DISPLAY-1",
    category: "small",
    image: "/img/products/1NASCO-2000VA-WALL-MOUNT-VOLTAGE-REGULATOR-DIGITAL-DISPLAY-1.jpg",
    images: ["/img/products/1NASCO-2000VA-WALL-MOUNT-VOLTAGE-REGULATOR-DIGITAL-DISPLAY-1.jpg"],
    price: 4600,
    rating: 4.4,
    reviews: 77,
    icon: "⚡",
    tags: [
      "nasco",
      "small"
    ],
    description: "Wall Mount · Digital Display · Whitecolor · Input/Output:100V260V/220Vac · Sockets:2*S33 · Plug:",
    badge: "new"
  },
  {
    id: 946,
    name: "Nasco Wall Mount Voltage Regulator Digital Display",
    brand: "NASCO",
    brandId: "nasco",
    model: "1NASCO-3000VA-WALL-MOUNT-VOLTAGE-REGULATOR-DIGITAL-DISPLAY",
    category: "small",
    image: "/img/products/1NASCO-3000VA-WALL-MOUNT-VOLTAGE-REGULATOR-DIGITAL-DISPLAY.jpg",
    images: ["/img/products/1NASCO-3000VA-WALL-MOUNT-VOLTAGE-REGULATOR-DIGITAL-DISPLAY.jpg"],
    price: 4600,
    rating: 4.4,
    reviews: 44,
    icon: "⚡",
    tags: [
      "nasco",
      "small"
    ],
    description: "Wall Mount · Digital Display · Whitecolor · Input/Output:100V260V/220Vac · Sockets:2*S33 · Plug:",
    badge: "new"
  },
  {
    id: 947,
    name: "Nasco Voltage Regulator Digital Display",
    brand: "NASCO",
    brandId: "nasco",
    model: "1NASCO-1000VA-VOLTAGE-REGULATOR-DIGITAL-DISPLAY",
    category: "small",
    image: "/img/products/1NASCO-1000VA-VOLTAGE-REGULATOR-DIGITAL-DISPLAY.jpg",
    images: ["/img/products/1NASCO-1000VA-VOLTAGE-REGULATOR-DIGITAL-DISPLAY.jpg"],
    price: 4600,
    rating: 4.4,
    reviews: 70,
    icon: "⚡",
    tags: [
      "nasco",
      "small"
    ],
    description: "Digital Display · White Color · Input/Output :100V-260V/220Vac · Sockets2*S33 · Plug: P09",
    badge: "new"
  },
  {
    id: 948,
    name: "Nasco Voltage Regulator Meter Display White",
    brand: "NASCO",
    brandId: "nasco",
    model: "1NASCO-5000VA-VOLTAGE-REGULATOR-METER-DISPLAY-WHITE",
    category: "small",
    image: "/img/products/1NASCO-5000VA-VOLTAGE-REGULATOR-METER-DISPLAY-WHITE.jpg",
    images: ["/img/products/1NASCO-5000VA-VOLTAGE-REGULATOR-METER-DISPLAY-WHITE.jpg"],
    price: 649,
    rating: 4.4,
    reviews: 98,
    icon: "⚡",
    tags: [
      "nasco",
      "small"
    ],
    description: "Meter Display · White Color · Input/Output :100V-260V/220Vac · Sockets:2*S33 · Plug: P09",
    badge: "new"
  },
  {
    id: 949,
    name: "Nasco Voltage Regulator Meter Display White",
    brand: "NASCO",
    brandId: "nasco",
    model: "1NASCO-2000VA-VOLTAGE-REGULATOR-METER-DISPLAY-WHITE",
    category: "small",
    image: "/img/products/1NASCO-2000VA-VOLTAGE-REGULATOR-METER-DISPLAY-WHITE.jpg",
    images: ["/img/products/1NASCO-2000VA-VOLTAGE-REGULATOR-METER-DISPLAY-WHITE.jpg"],
    price: 4600,
    rating: 4.4,
    reviews: 55,
    icon: "⚡",
    tags: [
      "nasco",
      "small"
    ],
    description: "Meter Display · White Color · Input/Output :100V-260V/220Vac · Sockets:2*S33 · Plug: P09",
    badge: "new"
  },
  {
    id: 950,
    name: "Nasco Voltage Regulator Meter Display White",
    brand: "NASCO",
    brandId: "nasco",
    model: "1NASCO-1500VA-VOLTAGE-REGULATOR-METER-DISPLAY-WHITE-1",
    category: "small",
    image: "/img/products/1NASCO-1500VA-VOLTAGE-REGULATOR-METER-DISPLAY-WHITE-1.jpg",
    images: ["/img/products/1NASCO-1500VA-VOLTAGE-REGULATOR-METER-DISPLAY-WHITE-1.jpg"],
    price: 4600,
    rating: 4.4,
    reviews: 82,
    icon: "⚡",
    tags: [
      "nasco",
      "small"
    ],
    description: "Meter Display · White Color · Input/Output :100V-260V/220Vac · Sockets:2*S33 · Plug: P09",
    badge: "new"
  },
  {
    id: 951,
    name: "Nasco Voltage Regulator Meter Display White",
    brand: "NASCO",
    brandId: "nasco",
    model: "1NASCO-1000VA-VOLTAGE-REGULATOR-METER-DISPLAY-WHITE",
    category: "small",
    image: "/img/products/1NASCO-1000VA-VOLTAGE-REGULATOR-METER-DISPLAY-WHITE.jpg",
    images: ["/img/products/1NASCO-1000VA-VOLTAGE-REGULATOR-METER-DISPLAY-WHITE.jpg"],
    price: 4600,
    rating: 4.4,
    reviews: 62,
    icon: "⚡",
    tags: [
      "nasco",
      "small"
    ],
    description: "Meter Display · White Color · Input/Output :100V-260V/220Vac · Sockets:2*S33 · Plug: P09",
    badge: "new"
  },
  {
    id: 952,
    name: "Samsung Wall-Mount AC with Fast Cooling",
    brand: "Samsung",
    brandId: "samsung",
    model: "ae-wall-mount-arxxtrhqkwkgu-ar18trhqkwk-gu-white-White-267963509",
    category: "ac",
    image: "/img/products/ae-wall-mount-arxxtrhqkwkgu-ar18trhqkwk-gu-white-White-267963509.jpg",
    images: ["/img/products/ae-wall-mount-arxxtrhqkwkgu-ar18trhqkwk-gu-white-White-267963509.jpg"],
    price: 11200,
    rating: 4.4,
    reviews: 75,
    icon: "❄️",
    tags: [
      "samsung",
      "ac"
    ],
    description: "Triple Protector · White · Volt Control · R410 Gas",
    badge: "new"
  },
  {
    id: 953,
    name: "Midea 3.0Hp Floor Stading Air Nascoditioer",
    brand: "Midea",
    brandId: "midea",
    model: "MIDEA-3.0HP-FLOOR-STANDING-AIR-CONDITIONER-1",
    category: "ac",
    image: "/img/products/MIDEA-3.0HP-FLOOR-STANDING-AIR-CONDITIONER-1.jpg",
    images: ["/img/products/MIDEA-3.0HP-FLOOR-STANDING-AIR-CONDITIONER-1.jpg"],
    price: 13999,
    rating: 4.4,
    reviews: 73,
    icon: "❄️",
    tags: [
      "midea",
      "ac"
    ],
    description: "Active Carbon Silver · Low Noise · Fast Cooling · Auto Restart · R410 · 3 Hp",
    badge: "new"
  }
];

/* ── BLOG POSTS ── */
const BLOG_POSTS = [
  {
    id: 1,
    title: "Best NASCO TVs to Buy in Ghana – 2025 Guide",
    category: "Televisions",
    date: "April 15, 2025",
    excerpt: "NASCO offers some of the best value TVs in Ghana. From 24-inch bedroom sets to stunning 55-inch UHD Smart displays — here is what to look for.",
    icon: "📺",
    bgColor: "linear-gradient(135deg, #0f172a, #1e3a5f)",
    readTime: "6 min read"
  },
  {
    id: 2,
    title: "How to Choose the Right Air Conditioner for Your Home",
    category: "Air Conditioners",
    date: "April 10, 2025",
    excerpt: "BTU ratings, inverter vs non-inverter, R32 vs R410 — we break down everything you need to know before buying your next Midea AC unit.",
    icon: "❄️",
    bgColor: "linear-gradient(135deg, #0d2137, #0a4a6b)",
    readTime: "6 min read"
  },
  {
    id: 3,
    title: "Chest Freezer vs. Fridge Freezer: Which Is Right for You?",
    category: "Refrigerators",
    date: "April 5, 2025",
    excerpt: "Deciding between a chest freezer and a fridge-freezer combo? We compare capacity, energy use, and cost to help you choose the best Midea model.",
    icon: "🧊",
    bgColor: "linear-gradient(135deg, #1a0a2e, #0a4a6b)",
    readTime: "5 min read"
  }
];

/* ── SEARCH INDEX ── */
const SEARCH_INDEX = [
  ...PRODUCTS.map(p => ({ type: 'product', id: p.id, text: p.name, sub: p.brand, icon: p.icon })),
  ...CATEGORIES.map(c => ({ type: 'category', id: c.id, text: c.name, sub: `${c.count} products`, icon: '📂' })),
  ...BRANDS.map(b => ({ type: 'brand', id: b.id, text: b.name, sub: `${b.products} products`, icon: '🏷️' })),
];