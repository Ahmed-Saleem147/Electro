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

/* ── Shop page init ── */
function initShopPage() {
  if (!document.getElementById('shopProductsGrid')) return;

  const { cat, brand, q, filter } = getUrlParams();
  let filtered = [...PRODUCTS];

  // Apply filters from URL
  if (cat) filtered = filtered.filter(p => p.category === cat);
  if (brand) filtered = filtered.filter(p => p.brandId === brand);
  if (q) filtered = filtered.filter(p => p.name.toLowerCase().includes(q.toLowerCase()) || p.brand.toLowerCase().includes(q.toLowerCase()));
  if (filter === 'deals' || filter === 'flash') filtered = filtered.filter(p => p.flashSale || p.discount >= 25);
  if (filter === 'clearance') filtered = filtered.filter(p => p.discount >= 30);

  renderShopGrid(filtered);
  setupShopFilters(filtered);
  updateResultCount(filtered.length);

  // Set page title
  const pageTitle = document.getElementById('shopPageTitle');
  if (pageTitle) {
    if (cat) {
      const catData = CATEGORIES.find(c => c.id === cat);
      pageTitle.textContent = catData ? catData.name : 'Products';
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

function setupShopFilters(initialProducts) {
  const sortSelect = document.getElementById('shopSort');
  const priceRange = document.getElementById('priceRange');
  const priceLabel = document.getElementById('priceLabelValue');

  let currentProducts = [...PRODUCTS];
  const { cat, brand, q } = getUrlParams();
  if (cat) currentProducts = currentProducts.filter(p => p.category === cat);
  if (brand) currentProducts = currentProducts.filter(p => p.brandId === brand);
  if (q) currentProducts = currentProducts.filter(p => p.name.toLowerCase().includes(q.toLowerCase()));

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

    // Sort
    if (sortSelect) {
      switch (sortSelect.value) {
        case 'price-asc': filtered.sort((a, b) => a.price - b.price); break;
        case 'price-desc': filtered.sort((a, b) => b.price - a.price); break;
        case 'rating': filtered.sort((a, b) => b.rating - a.rating); break;
        case 'discount': filtered.sort((a, b) => b.discount - a.discount); break;
        case 'newest': filtered.sort((a, b) => b.id - a.id); break;
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
