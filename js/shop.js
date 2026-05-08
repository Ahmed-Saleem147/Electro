/* ================================================================
   ORBIVA – SHOP PAGE LOGIC
================================================================ */

/* ── Read URL params ── */
function getUrlParams() {
  const params = new URLSearchParams(window.location.search);
  return {
    cat: params.get('cat') || '',
    brand: params.get('brand') || '',
    q: params.get('q') || '',
    filter: params.get('filter') || '',
    sub: params.get('sub') || ''
  };
}

/* ── Sub-category keyword map ── */
const SUB_KEYWORDS = {
  uhd:    ['uhd','4k'],
  miniled:['mini-led','mini led','qned'],
  side:   ['side-by-side','side by side'],
  french: ['french door','french-door'],
  single: ['single door','single-door'],
  double: ['double door','double-door'],
  front:  ['front load','front-load','front loader'],
  top:    ['top load','top-load','top loader'],
  combo:  ['washer-dryer','washer dryer']
};
const SUB_TITLES = {
  uhd:'UHD / 4K',qled:'QLED',oled:'OLED',miniled:'Mini-LED',smart:'Smart',
  split:'Split',window:'Window',portable:'Portable',inverter:'Inverter',central:'Central',
  single:'Single Door',double:'Double Door',side:'Side-by-Side',french:'French Door',mini:'Mini',
  front:'Front Load',top:'Top Load',dryer:'Dryer',combo:'Washer-Dryer Combo'
};
function applySubFilter(products, sub) {
  if (!sub) return products;
  const keywords = SUB_KEYWORDS[sub] || [sub];
  return products.filter(p => {
    const hay = (p.name + ' ' + (p.tags||[]).join(' ')).toLowerCase();
    return keywords.some(kw => hay.includes(kw));
  });
}

/* ── Shop page init ── */
function initShopPage() {
  if (!document.getElementById('shopProductsGrid')) return;

  const { cat, brand, q, filter, sub } = getUrlParams();
  let filtered = [...PRODUCTS];

  // Apply filters from URL
  if (cat)    filtered = filtered.filter(p => p.category === cat);
  if (brand)  filtered = filtered.filter(p => p.brandId === brand);
  if (q)      filtered = filtered.filter(p => p.name.toLowerCase().includes(q.toLowerCase()) || p.brand.toLowerCase().includes(q.toLowerCase()));
  if (sub)    filtered = applySubFilter(filtered, sub);
  if (filter === 'deals' || filter === 'flash') filtered = filtered.filter(p => p.flashSale || p.discount >= 25);
  if (filter === 'clearance') filtered = filtered.filter(p => p.discount >= 30);

  // Admin-added products (obv_prod_adds) always float to the top
  const addedIds = new Set(
    JSON.parse(localStorage.getItem('obv_prod_adds') || '[]').map(p => String(p.id))
  );
  if (addedIds.size) {
    filtered.sort((a, b) => {
      const aNew = addedIds.has(String(a.id)) ? 1 : 0;
      const bNew = addedIds.has(String(b.id)) ? 1 : 0;
      return bNew - aNew;
    });
  }

  renderShopGrid(filtered);
  setupShopFilters(filtered, sub);
  updateResultCount(filtered.length);

  // Set page title
  const pageTitle = document.getElementById('shopPageTitle');
  if (pageTitle) {
    if (cat) {
      const catData = CATEGORIES.find(c => c.id === cat);
      const catName = catData ? catData.name : 'Products';
      pageTitle.textContent = sub && SUB_TITLES[sub] ? SUB_TITLES[sub] + ' ' + catName : catName;
    } else if (brand) {
      const brandData = BRANDS.find(b => b.id === brand);
      pageTitle.textContent = brandData ? brandData.name + ' Products' : 'Brand Products';
    } else if (q) {
      pageTitle.textContent = `Search: "${q}"`;
    } else {
      pageTitle.textContent = 'All Products';
    }
  }
}

function renderShopGrid(products) {
  const grid = document.getElementById('shopProductsGrid');
  const gridFull = document.getElementById('shopProductsGridFull');
  if (!grid) return;
  if (gridFull) gridFull.innerHTML = '';
  if (products.length === 0) {
    grid.innerHTML = `
      <div style="grid-column:1/-1;text-align:center;padding:60px 0;color:var(--text-muted)">
        <i class="fas fa-search" style="font-size:48px;opacity:.2;margin-bottom:16px;display:block"></i>
        <h3 style="font-size:18px;margin-bottom:8px">No products found</h3>
        <p>Try adjusting your filters or <a href="shop.html" style="color:var(--primary)">browse all products</a>.</p>
      </div>`;
    return;
  }
  grid.innerHTML = products.map(p => renderProductCard(p)).join('');
  updateWishlistButtons();
  triggerReveal();
  requestAnimationFrame(splitProductsBelowSidebar);
}

function splitProductsBelowSidebar() {
  if (window.innerWidth < 1024) return;
  const grid = document.getElementById('shopProductsGrid');
  const gridFull = document.getElementById('shopProductsGridFull');
  const sidebar = document.querySelector('.shop-sidebar');
  if (!grid || !gridFull || !sidebar) return;

  const sidebarH = sidebar.offsetHeight;
  const cards = Array.from(grid.children).filter(el => el.classList.contains('product-card'));
  if (!cards.length) return;

  const cardH = cards[0].offsetHeight + 20;
  const cols = 3;
  const rowsAlongside = Math.max(1, Math.ceil(sidebarH / cardH));
  const cardsAlongside = rowsAlongside * cols;

  if (cards.length <= cardsAlongside) return;

  cards.slice(cardsAlongside).forEach(card => gridFull.appendChild(card));
}

function setupShopFilters(initialProducts, sub) {
  const sortSelect = document.getElementById('shopSort');
  const priceRange = document.getElementById('priceRange');
  const priceLabel = document.getElementById('priceLabelValue');
  const priceMax   = document.getElementById('priceLabelMax');

  let currentProducts = [...PRODUCTS];
  const { cat, brand, q } = getUrlParams();
  if (cat)   currentProducts = currentProducts.filter(p => p.category === cat);
  if (brand) currentProducts = currentProducts.filter(p => p.brandId === brand);
  if (q)     currentProducts = currentProducts.filter(p => p.name.toLowerCase().includes(q.toLowerCase()));
  if (sub)   currentProducts = applySubFilter(currentProducts, sub);

  // Set price range max dynamically from actual product prices
  if (priceRange && currentProducts.length) {
    const maxPrice = Math.max(...currentProducts.map(p => p.price));
    const roundedMax = Math.ceil(maxPrice / 1000) * 1000;
    priceRange.max   = roundedMax;
    priceRange.value = roundedMax;
    if (priceLabel) priceLabel.textContent = fmt(roundedMax);
    if (priceMax)   priceMax.textContent   = fmt(roundedMax);
    // Also update the static label in the sidebar
    const priceLabelMin = document.querySelector('.price-labels span:last-child');
    if (priceLabelMin) priceLabelMin.textContent = fmt(roundedMax);
  }

  function applyFilters() {
    let filtered = [...currentProducts];

    // Price filter
    if (priceRange) {
      const maxPrice = parseInt(priceRange.value);
      filtered = filtered.filter(p => p.price <= maxPrice);
    }

    // Category checkboxes
    const catChecks = [...document.querySelectorAll('.cat-filter-check:checked')].map(c => c.value);
    if (catChecks.length) filtered = filtered.filter(p => catChecks.includes(p.category));

    // Brand checkboxes
    const brandChecks = [...document.querySelectorAll('.brand-filter-check:checked')].map(b => b.value);
    if (brandChecks.length) filtered = filtered.filter(p => brandChecks.includes(p.brandId));

    // Rating filter
    const minRating = parseFloat(document.querySelector('input[name="rating"]:checked')?.value || 0);
    if (minRating) filtered = filtered.filter(p => p.rating >= minRating);

    // Sort — newest = products added via admin come first (obv_prod_adds), then by index
    if (sortSelect) {
      const adds = JSON.parse(localStorage.getItem('obv_prod_adds') || '[]');
      const addedIds = new Set(adds.map(p => String(p.id)));
      switch (sortSelect.value) {
        case 'price-asc':  filtered.sort((a, b) => a.price - b.price); break;
        case 'price-desc': filtered.sort((a, b) => b.price - a.price); break;
        case 'rating':     filtered.sort((a, b) => (b.rating||0) - (a.rating||0)); break;
        case 'discount':   filtered.sort((a, b) => (b.discount||0) - (a.discount||0)); break;
        case 'newest':
          filtered.sort((a, b) => {
            const aNew = addedIds.has(String(a.id)) ? 1 : 0;
            const bNew = addedIds.has(String(b.id)) ? 1 : 0;
            return bNew - aNew;
          });
          break;
      }
    }

    renderShopGrid(filtered);
    updateResultCount(filtered.length);
  }

  sortSelect?.addEventListener('change', applyFilters);
  priceRange?.addEventListener('input', () => {
    if (priceLabel) priceLabel.textContent = fmt(parseInt(priceRange.value));
    applyFilters();
  });

  document.querySelectorAll('.cat-filter-check, .brand-filter-check').forEach(cb => {
    cb.addEventListener('change', applyFilters);
  });

  document.querySelectorAll('input[name="rating"]').forEach(r => {
    r.addEventListener('change', applyFilters);
  });
}

function updateResultCount(count) {
  const el = document.getElementById('resultsCount');
  if (el) el.textContent = `${count} product${count !== 1 ? 's' : ''} found`;
}
