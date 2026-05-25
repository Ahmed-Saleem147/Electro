/**
 * Converts EGL WORLD CUP PROMO 2026.xlsx → scraped_detailed.json
 * Run: node convert_excel.js
 */
const XLSX = require('xlsx');
const fs   = require('fs');

const wb = XLSX.readFile('C:/Users/Ahmed/Downloads/Electronics/EGL WORLD CUP PROMO 2026.xlsx');
const products = [];

/* ── Category → site ID ── */
function siteCategory(cat0, cat1) {
  const t = (cat0 + ' ' + cat1).toLowerCase();
  if (/\b(led|qled|q-led|uhd|4k|8k|android|smart.*tv|monitor|sound tower|sound.?bar|soundbar|audio|115)\b/.test(t)) {
    if (/sound (tower|bar)|audio/.test(t)) return 'small';
    return 'tv';
  }
  if (/\b(split|floor standing|inverter.*hp|hp.*inverter|btu|\bac\b|air con|r410|r32|r290|breezeless|freshin|unicool|black mirror|ceiling.*floor)\b/.test(t)) return 'ac';
  if (/\b(refri|fridge|freezer|frost|french door|side by side|bespoke|family hub|table top|bed side|display fridge|chest|standing freez|display chest)\b/.test(t)) return 'fridge';
  if (/\b(wash|washer|laundry|front load|top load|twin.?tub|twin.?top|combo.*kg|dryer)\b/.test(t)) return 'laundry';
  if (/\b(cooker|microwave|water dispenser|dispenser|oven)\b/.test(t)) return 'kitchen';
  if (/\b(fan|kettle|ice maker|voltage|regulator|blender|iron|mixer|small appliance)\b/.test(t)) return 'small';
  return 'small';
}

/* ── Human-friendly category short name ── */
function humanType(cat) {
  const c = cat.toLowerCase();
  if (/led fhd smart|qled-fhd.*android/.test(c)) return 'LED FHD Smart TV';
  if (/led fhd$|led fhd\s/.test(c))              return 'LED FHD TV';
  if (/led flat/.test(c))                         return 'LED TV';
  if (/uhd.*4k|4k.*uhd/.test(c))                 return 'UHD 4K Smart TV';
  if (/qled pro.*4k|q-led.*4k neo/.test(c))       return 'QLED 4K TV';
  if (/qd-mini led/.test(c))                      return 'QD-Mini LED 4K TV';
  if (/q-led.*8k|qled.*8k/.test(c))              return '8K QLED TV';
  if (/q-led.*flat.*4k/.test(c))                  return 'QLED Flat 4K TV';
  if (/qled.*android|qled.*4k/.test(c))           return 'QLED 4K Android TV';
  if (/uhd.*android/.test(c))                     return 'UHD 4K Android TV';
  if (/115/.test(c))                              return 'QD-Mini LED TV';
  if (/monitor/.test(c))                          return 'Gaming Monitor';
  if (/sound tower/.test(c))                      return 'Sound Tower';
  if (/sound.?bar/.test(c))                       return 'Soundbar';
  if (/floor standing.*ac|floor.*standing.*invert/.test(c)) return 'Floor Standing AC';
  if (/round floor standing/.test(c))             return 'Round Floor Standing AC';
  if (/ceiling.*floor/.test(c))                   return 'Ceiling & Floor AC';
  if (/split.*inverter.*r32|r32.*inverter/.test(c)) return 'Split Inverter AC (R32)';
  if (/split.*inverter.*r410|r410.*inverter/.test(c)) return 'Split Inverter AC (R410)';
  if (/split.*on.?off.*r32/.test(c))              return 'Split AC (R32)';
  if (/split.*r410|r410/.test(c))                 return 'Split AC (R410)';
  if (/split.*r290/.test(c))                      return 'Split Inverter AC (R290)';
  if (/breezeless/.test(c))                       return 'Breezeless Split AC';
  if (/black mirror/.test(c))                     return 'Black Mirror Split AC';
  if (/freshin/.test(c))                          return 'FreshIn Split AC';
  if (/breeze/.test(c))                           return 'Breeze Split AC';
  if (/unicool/.test(c))                          return 'UniCool Split AC';
  if (/\bac\b/.test(c))                           return 'Split Air Conditioner';
  if (/french door/.test(c))                      return 'French Door Refrigerator';
  if (/side by side/.test(c))                     return 'Side-by-Side Refrigerator';
  if (/4 door.*bespoke/.test(c))                  return 'Bespoke 4-Door Refrigerator';
  if (/4 door.*family hub/.test(c))               return 'Family Hub 4-Door Refrigerator';
  if (/4 door/.test(c))                           return '4-Door Refrigerator';
  if (/twin cooling/.test(c))                     return 'Twin Cooling Refrigerator';
  if (/duracool|top mount/.test(c))               return 'Top Mount Refrigerator';
  if (/bottom.*(mount|freez)/.test(c))            return 'Bottom Mount Refrigerator';
  if (/single door/.test(c))                      return 'Single Door Refrigerator';
  if (/table top/.test(c))                        return 'Table Top Refrigerator';
  if (/bed side/.test(c))                         return 'Bedside Refrigerator';
  if (/retro/.test(c))                            return 'Retro Refrigerator';
  if (/display.*fridge|display.*chest/.test(c))   return 'Display Refrigerator';
  if (/chest freezer|chest/.test(c))              return 'Chest Freezer';
  if (/standing freezer|standing/.test(c))        return 'Standing Freezer';
  if (/refri|fridge/.test(c))                     return 'Refrigerator';
  if (/washer.*dryer|combo/.test(c))              return 'Washer & Dryer';
  if (/front load.*invert/.test(c))               return 'Front Load Inverter Washer';
  if (/front load/.test(c))                       return 'Front Load Washer';
  if (/top load/.test(c))                         return 'Top Load Washer';
  if (/twin.*top|semi.*auto/.test(c))             return 'Twin Tub Semi-Auto Washer';
  if (/wash/.test(c))                             return 'Washing Machine';
  if (/gas cooker/.test(c))                       return 'Gas Cooker';
  if (/electric cooker/.test(c))                  return 'Electric Cooker';
  if (/microwave.*grill/.test(c))                 return 'Microwave (Grill)';
  if (/microwave/.test(c))                        return 'Microwave';
  if (/water dispenser/.test(c))                  return 'Water Dispenser';
  if (/standing fan/.test(c))                     return 'Standing Fan';
  if (/ceiling fan/.test(c))                      return 'Ceiling Fan';
  if (/recharg.*fan/.test(c))                     return 'Rechargeable Fan';
  if (/fan/.test(c))                              return 'Fan';
  if (/kettle/.test(c))                           return 'Electric Kettle';
  if (/ice maker/.test(c))                        return 'Ice Maker';
  if (/voltage/.test(c))                          return 'Voltage Regulator';
  return cat.replace(/-/g,' ').replace(/\b\w/g,l=>l.toUpperCase());
}

/* ── Build product name ── */
function makeName(brand, typeLabel, size) {
  const parts = [brand];
  if (size) parts.push(size);
  parts.push(typeLabel);
  return parts.join(' ');
}

/* ── Fill-down helper ── */
function fillDown(data, col) {
  let last = '';
  return data.map(row => {
    const v = String(row[col] || '').trim();
    if (v && v !== 'null') last = v;
    return last;
  });
}

/* ────────────────────────────────────
   SAMSUNG  [cat | model | size | promo | retail]
   Data rows start at index 5
──────────────────────────────────── */
(function parseSamsung() {
  const rows = XLSX.utils.sheet_to_json(wb.Sheets['SAMSUNG'], {header:1});
  const cats = fillDown(rows, 0);
  rows.forEach((r, i) => {
    if (i < 5) return;
    const cat = cats[i];
    if (!cat || cat === 'CATEGORY') return;
    const model = String(r[1] || '').trim();
    const size  = String(r[2] || '').trim();
    const promo = parseFloat(r[3]);
    const retail = parseFloat(r[4]);
    if (!model || isNaN(promo)) return;
    const type = humanType(cat);
    products.push({
      name: makeName('Samsung', type, size),
      sku: model, brand: 'Samsung',
      category: siteCategory(cat, ''),
      price: promo, oldPrice: isNaN(retail) ? null : retail,
      description: type + (size ? '\n' + size : ''),
      specs: {}
    });
  });
  console.log('Samsung:', products.length, 'products');
})();

/* ────────────────────────────────────
   TCL  [main_cat | sub_cat | model | size | promo | retail]
   Data rows start at index 4
──────────────────────────────────── */
(function parseTCL() {
  const before = products.length;
  const rows = XLSX.utils.sheet_to_json(wb.Sheets['TCL'], {header:1});
  const mainCats = fillDown(rows, 0);
  const subCats  = fillDown(rows, 1);
  rows.forEach((r, i) => {
    if (i < 4) return;
    const cat0 = mainCats[i]; const cat1 = subCats[i];
    if (!cat1 || cat1 === 'CATEGORY') return;
    const model = String(r[2] || '').trim();
    const size  = String(r[3] || '').trim();
    const promo = parseFloat(r[4]);
    const retail = parseFloat(r[5]);
    if (!model || isNaN(promo)) return;
    const type = humanType(cat1 || cat0);
    products.push({
      name: makeName('TCL', type, size),
      sku: model, brand: 'TCL',
      category: siteCategory(cat0, cat1),
      price: promo, oldPrice: isNaN(retail) ? null : retail,
      description: type + (size ? '\n' + size : ''),
      specs: {}
    });
  });
  console.log('TCL:', products.length - before, 'products');
})();

/* ────────────────────────────────────
   MIDEA  [cat | item | model | size | promo | retail]
   Data rows start at index 5
──────────────────────────────────── */
(function parseMidea() {
  const before = products.length;
  const rows = XLSX.utils.sheet_to_json(wb.Sheets['MIDEA'], {header:1});
  const cats  = fillDown(rows, 0);
  const items = fillDown(rows, 1);
  rows.forEach((r, i) => {
    if (i < 5) return;
    const cat0 = cats[i]; const item = items[i];
    if (!item || item === 'ITEM') return;
    const model = String(r[2] || '').trim();
    const size  = String(r[3] || '').trim();
    const promo = parseFloat(r[4]);
    const retail = parseFloat(r[5]);
    if (!model || isNaN(promo)) return;
    const type = humanType(item || cat0);
    products.push({
      name: makeName('Midea', type, size),
      sku: model, brand: 'Midea',
      category: siteCategory(cat0, item),
      price: promo, oldPrice: isNaN(retail) ? null : retail,
      description: type + (size ? '\n' + size : ''),
      specs: {}
    });
  });
  console.log('Midea:', products.length - before, 'products');
})();

/* ────────────────────────────────────
   NASCO  [cat | model | size | promo | retail]
   Data rows start at index 4
──────────────────────────────────── */
(function parseNasco() {
  const before = products.length;
  const rows = XLSX.utils.sheet_to_json(wb.Sheets['NASCO'], {header:1});
  const cats = fillDown(rows, 0);
  rows.forEach((r, i) => {
    if (i < 4) return;
    const cat = cats[i];
    if (!cat || cat === 'CATEGORY') return;
    const model = String(r[1] || '').trim();
    const size  = String(r[2] || '').trim();
    const promo = parseFloat(r[3]);
    const retail = parseFloat(r[4]);
    if (!model || isNaN(promo)) return;
    const type = humanType(cat);
    products.push({
      name: makeName('Nasco', type, size),
      sku: model, brand: 'Nasco',
      category: siteCategory(cat, ''),
      price: promo, oldPrice: isNaN(retail) ? null : retail,
      description: type + (size ? '\n' + size : ''),
      specs: {}
    });
  });
  console.log('Nasco:', products.length - before, 'products');
})();

/* ────────────────────────────────────
   HIFUTURE  [product_name | sku | _ | color | price]
   Data rows start at index 7
──────────────────────────────────── */
(function parseHiFuture() {
  const before = products.length;
  const rows = XLSX.utils.sheet_to_json(wb.Sheets['HIFUTURE'], {header:1});
  const names = fillDown(rows, 0);
  rows.forEach((r, i) => {
    if (i < 7) return;
    const prodName = names[i];
    if (!prodName || prodName === 'BRAND') return;
    const sku   = String(r[1] || '').trim();
    const color = String(r[3] || '').trim();
    const price = parseFloat(r[4]);
    if (!sku || isNaN(price)) return;
    const name = `HiFuture ${prodName.trim()}${color ? ' – ' + color : ''}`;
    products.push({
      name, sku, brand: 'HiFuture',
      category: 'accessories',
      price, oldPrice: null,
      description: `HiFuture ${prodName.trim()}` + (color ? '\n' + color + ' Colour' : ''),
      specs: {}
    });
  });
  console.log('HiFuture:', products.length - before, 'products');
})();

/* ── Deduplicate by SKU ── */
const seenSku  = new Set();
const seenName = new Set();
const deduped  = [];
for (const p of products) {
  const sk = (p.sku || '').trim().toUpperCase();
  const nk = p.name.trim().toLowerCase();
  if (sk && seenSku.has(sk))  continue;
  if (seenName.has(nk))       continue;
  if (sk)  seenSku.add(sk);
  seenName.add(nk);
  deduped.push(p);
}

const OUT = 'C:/Users/Ahmed/scraped_detailed.json';
fs.writeFileSync(OUT, JSON.stringify(deduped, null, 2), 'utf8');
console.log(`\nTotal: ${deduped.length} unique products → ${OUT}`);
const cats = {};
deduped.forEach(p => cats[p.category] = (cats[p.category]||0)+1);
console.log('Categories:', cats);
const brands = {};
deduped.forEach(p => brands[p.brand] = (brands[p.brand]||0)+1);
console.log('Brands:', brands);
