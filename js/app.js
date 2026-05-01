/* ================================================================
   ORBIVA – MAIN APPLICATION
================================================================ */

/* ── Toast system ── */
function showToast(type, title, msg, icon) {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const iconMap = { success: 'fas fa-check-circle', error: 'fas fa-exclamation-circle', warning: 'fas fa-exclamation-triangle', info: 'fas fa-info-circle' };
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <i class="${icon || iconMap[type]} toast-icon"></i>
    <div class="toast-info">
      <div class="toast-title">${title}</div>
      ${msg ? `<div class="toast-msg">${msg}</div>` : ''}
    </div>
    <button onclick="this.parentElement.remove()" style="color:var(--text-muted);font-size:13px;margin-left:8px">×</button>
  `;
  container.appendChild(toast);
  requestAnimationFrame(() => { requestAnimationFrame(() => toast.classList.add('show')); });
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 400);
  }, 3500);
}

/* ── Apply admin product edits/adds/deletes from localStorage ── */
(function() {
  try {
    const edits = JSON.parse(localStorage.getItem('obv_prod_edits') || '{}');
    const adds  = JSON.parse(localStorage.getItem('obv_prod_adds')  || '[]');
    const dels  = new Set(JSON.parse(localStorage.getItem('obv_prod_dels') || '[]'));
    for (let i = PRODUCTS.length - 1; i >= 0; i--) {
      if (dels.has(PRODUCTS[i].id)) { PRODUCTS.splice(i, 1); continue; }
      if (edits[PRODUCTS[i].id]) Object.assign(PRODUCTS[i], edits[PRODUCTS[i].id]);
    }
    adds.forEach(p => PRODUCTS.push(p));
  } catch(e) {}
})();

/* ── Product card renderer ── */
const CAT_NAMES = { tv: 'Televisions', ac: 'Air Conditioners', fridge: 'Refrigerators', laundry: 'Washing Machines', kitchen: 'Kitchen Appliances', small: 'Small Appliances' };

function renderProductCard(product) {
  const discountStr = product.oldPrice ? `<span class="product-discount">-${product.discount}%</span>` : '';
  const oldPriceStr = product.oldPrice ? `<span class="product-old-price">${fmt(product.oldPrice)}</span>` : '';
  const badgeMap = { new: 'badge-new', sale: 'badge-sale', hot: 'badge-hot', best: 'badge-best', soldout: 'badge-soldout' };
  const badgeLabel = { new: 'New', sale: 'Sale', hot: 'Hot', best: 'Best Seller', soldout: 'Sold Out' };
  const badge = (product.badge && localStorage.getItem('obv_badges') === 'on') ? `<span class="badge-tag ${badgeMap[product.badge]}">${badgeLabel[product.badge]}</span>` : '';
  const stars = Array.from({ length: 5 }, (_, i) =>
    i < Math.floor(product.rating) ? '<i class="fas fa-star"></i>' :
    (i === Math.floor(product.rating) && product.rating % 1 >= 0.5 ? '<i class="fas fa-star-half-alt"></i>' : '<i class="far fa-star"></i>')
  ).join('');
  const wishlisted = isWishlisted(product.id) ? ' wishlisted' : '';
  const catLabel = CAT_NAMES[product.category] || product.brand;
  const specTags = product.specs ? Object.values(product.specs).slice(0, 4).map(v =>
    `<span class="spec-tag">${v}</span>`).join('') : '';

  return `
    <div class="product-card reveal" data-tags="${product.tags.join(',')}" data-id="${product.id}" onclick="openProduct(${product.id})">
      <div class="product-img-wrap">
        ${(product.images && product.images.length) ? `<img src="${product.images[0]}" alt="${product.name}" class="product-img-photo" loading="lazy" onerror="this.onerror=null;this.parentNode.innerHTML='<div class=\\'product-img-icon\\'>${product.icon}</div>'">` : `<div class="product-img-icon">${product.icon}</div>`}
        <div class="product-badges">${badge}</div>
        <div class="product-actions">
          <button class="prod-action-btn${wishlisted}" data-wishlist="${product.id}" title="Add to Wishlist" onclick="event.stopPropagation();toggleWishlist(${product.id})">
            <i class="fas fa-heart"></i>
          </button>
          <button class="prod-action-btn" title="Quick View" onclick="event.stopPropagation();openProduct(${product.id})">
            <i class="fas fa-eye"></i>
          </button>
        </div>
      </div>
      <div class="product-info">
        <div class="product-cat-label">${catLabel}</div>
        <div class="product-name">${product.name}</div>
        ${product.description ? `<div class="product-desc">${product.description}</div>` : ''}
        ${specTags ? `<div class="product-spec-tags">${specTags}</div>` : ''}
        <div class="product-rating">
          <div class="stars-row">${stars}</div>
          <span class="rating-count">(${product.reviews.toLocaleString()} reviews)</span>
        </div>
        <div class="product-price-row">
          <span class="product-price">${fmt(product.price)}</span>
          <div style="display:flex;align-items:center;gap:6px">${oldPriceStr}${discountStr}</div>
        </div>
        <button class="add-to-cart-btn" onclick="event.stopPropagation();handleAddToCart(this,${product.id})">
          <i class="fas fa-shopping-cart"></i> Add to Cart
        </button>
      </div>
    </div>
  `;
}

/* ── Add to cart with button animation ── */
function handleAddToCart(btn, productId) {
  addToCart(productId);
  btn.classList.add('added');
  const orig = btn.innerHTML;
  btn.innerHTML = '<i class="fas fa-check"></i> Added!';
  setTimeout(() => {
    btn.innerHTML = orig;
    btn.classList.remove('added');
  }, 1800);
  // Ripple
  const ripple = document.createElement('span');
  ripple.className = 'ripple-effect';
  btn.appendChild(ripple);
  setTimeout(() => ripple.remove(), 700);
}

/* ── Product Quick View / Detail ── */
function openProduct(productId) {
  window.location.href = 'product.html?id=' + productId;
}

function showProductModal(p) {
  // Remove existing
  document.getElementById('productModal')?.remove();

  const stars = Array.from({ length: 5 }, (_, i) =>
    i < Math.floor(p.rating) ? '<i class="fas fa-star"></i>' : '<i class="far fa-star"></i>'
  ).join('');

  const specsHtml = p.specs ? Object.entries(p.specs).map(([k, v]) =>
    `<tr><td>${k}</td><td>${v}</td></tr>`
  ).join('') : '';

  const modal = document.createElement('div');
  modal.id = 'productModal';
  modal.className = 'modal open';
  modal.style.zIndex = '1200';
  modal.innerHTML = `
    <div class="modal-box" style="overflow-y:auto">
      <button class="close-btn modal-close" style="position:absolute;top:16px;right:16px;z-index:10" onclick="this.closest('.modal').remove()"><i class="fas fa-times"></i></button>
      <div class="product-detail-layout">
        <div class="product-gallery">
          ${(() => {
            const imgs = (p.images && p.images.length) ? p.images : [];
            if (imgs.length) {
              const thumbs = imgs.map((src, i) =>
                `<div class="thumb ${i===0?'active':''}" data-idx="${i}" onclick="switchModalImg(this,'${src.replace(/'/g,"\\'")}','${p.name.replace(/'/g,"\\'")}')">
                  <img src="${src}" alt="${p.name}" style="width:100%;height:100%;object-fit:contain">
                </div>`
              ).join('');
              const arrows = imgs.length > 1 ? `
                <button class="gallery-arrow gallery-prev" onclick="stepModalImg(-1)" title="Previous"><i class="fas fa-chevron-left"></i></button>
                <button class="gallery-arrow gallery-next" onclick="stepModalImg(1)" title="Next"><i class="fas fa-chevron-right"></i></button>` : '';
              return `
                <div class="main-img main-img-zoomable" id="mainImgZoom" data-current="0" data-total="${imgs.length}">
                  <img id="modalMainImg" src="${imgs[0]}" alt="${p.name}" class="modal-img-photo"
                    onerror="this.onerror=null;this.closest('.main-img-zoomable').id='';this.closest('.main-img').classList.remove('main-img-zoomable');this.style.fontSize='80px';this.outerHTML='<span style=\\'font-size:80px\\'>${p.icon}</span>'">
                  ${arrows}
                </div>
                <div class="product-thumbs" id="modalThumbs">${thumbs}</div>`;
            } else {
              return `<div class="main-img" style="font-size:80px">${p.icon}</div>
                      <div class="product-thumbs">${[p.icon,p.icon,p.icon].map((ic,i)=>`<div class="thumb ${i===0?'active':''}">${ic}</div>`).join('')}</div>`;
            }
          })()}
        </div>
        <div class="product-detail-info">
          <div class="product-brand">${p.brand}</div>
          <div class="product-name" style="font-size:1.4rem;font-weight:800;color:var(--text-dark);margin-bottom:14px">${p.name}</div>
          <div class="product-rating" style="margin-bottom:16px">
            <div class="stars-row">${stars}</div>
            <span class="rating-count">(${p.reviews.toLocaleString()} reviews)</span>
          </div>
          <p style="font-size:14px;color:var(--text-muted);line-height:1.7;margin-bottom:20px">${p.description}</p>
          <div class="detail-price-row">
            <span class="detail-price">${fmt(p.price)}</span>
            ${p.oldPrice ? `<span class="detail-old-price">${fmt(p.oldPrice)}</span>` : ''}
            ${p.discount ? `<span class="detail-discount">-${p.discount}% OFF</span>` : ''}
          </div>
          <div class="qty-select-wrap">
            <span style="font-size:14px;font-weight:600;color:var(--text-dark)">Quantity:</span>
            <div class="qty-selector">
              <button onclick="const inp=this.nextSibling.nextSibling;inp.value=Math.max(1,parseInt(inp.value)-1)">−</button>
              <input type="number" value="1" min="1" max="10" id="modalQty" />
              <button onclick="const inp=this.previousSibling.previousSibling;inp.value=Math.min(10,parseInt(inp.value)+1)">+</button>
            </div>
          </div>
          <div class="detail-actions">
            <button class="btn-primary" onclick="addToCart(${p.id},parseInt(document.getElementById('modalQty').value)||1);this.closest('.modal').remove()">
              <i class="fas fa-shopping-cart"></i> Add to Cart
            </button>
            <button class="btn-outline" onclick="toggleWishlist(${p.id})">
              <i class="fas fa-heart"></i>
            </button>
          </div>
          ${specsHtml ? `
            <div style="border-top:1px solid var(--border);padding-top:20px">
              <h4 style="font-size:14px;font-weight:700;color:var(--text-dark);margin-bottom:12px">Specifications</h4>
              <table class="spec-table">${specsHtml}</table>
            </div>` : ''}
        </div>
      </div>
    </div>
  `;
  modal.addEventListener('click', e => { if (e.target === modal) modal.remove(); });
  document.body.appendChild(modal);

  // Wire up tap-to-zoom after inserting into DOM
  const zoomEl = modal.querySelector('#mainImgZoom');
  if (zoomEl) {
    const imgEl = zoomEl.querySelector('img');
    zoomEl.addEventListener('click', () => {
      const src = imgEl ? imgEl.src : null;
      if (src) openLightbox(src, p.name);
    });
  }
}

/* ── Modal gallery helpers ── */
function switchModalImg(thumb, src, name) {
  const mainImg = document.getElementById('modalMainImg');
  const zoomEl  = document.getElementById('mainImgZoom');
  if (mainImg) { mainImg.src = src; mainImg.alt = name; }
  if (zoomEl)  { zoomEl.dataset.current = thumb.dataset.idx; }
  document.querySelectorAll('#modalThumbs .thumb').forEach(t => t.classList.remove('active'));
  thumb.classList.add('active');
}

function stepModalImg(dir) {
  const zoomEl = document.getElementById('mainImgZoom');
  const thumbs = [...document.querySelectorAll('#modalThumbs .thumb')];
  if (!zoomEl || !thumbs.length) return;
  let current = parseInt(zoomEl.dataset.current || 0);
  const total  = parseInt(zoomEl.dataset.total  || thumbs.length);
  current = (current + dir + total) % total;
  const target = thumbs[current];
  if (target) {
    const img = target.querySelector('img');
    switchModalImg(target, img ? img.src : '', img ? img.alt : '');
    target.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  }
}

/* ── Image lightbox ── */
function openLightbox(src, name) {
  const lb = document.createElement('div');
  lb.className = 'lightbox';
  lb.innerHTML = `
    <div class="lightbox-backdrop"></div>
    <div class="lightbox-content">
      <button class="lightbox-close" onclick="this.closest('.lightbox').remove()"><i class="fas fa-times"></i></button>
      <img src="${src}" alt="${name}" class="lightbox-img" onerror="this.src=''">
      <div class="lightbox-caption">${name}</div>
    </div>
  `;
  lb.querySelector('.lightbox-backdrop').addEventListener('click', () => lb.remove());
  document.body.appendChild(lb);
  requestAnimationFrame(() => lb.classList.add('open'));
}

/* ════════════════════════════════════════
   RENDER SECTIONS
════════════════════════════════════════ */

/* Categories */
function renderCategories() {
  const grid = document.getElementById('categoriesGrid');
  if (!grid) return;
  const countMap = {};
  PRODUCTS.forEach(p => { countMap[p.category] = (countMap[p.category] || 0) + 1; });
  grid.innerHTML = CATEGORIES.map((c, i) => {
    const count = countMap[c.id] || 0;
    if (!count) return '';
    return `
    <div class="category-card reveal delay-${Math.min(i * 100, 500)}" onclick="window.location='shop.html?cat=${c.id}'">
      <div class="cat-icon" style="background:${c.bg};color:${c.color}"><i class="${c.icon}"></i></div>
      <div class="cat-name">${c.name}</div>
      <div class="cat-count">${count} Products</div>
    </div>`;
  }).join('');
  triggerReveal();
}

/* Flash Sale */
function renderFlashProducts() {
  const grid = document.getElementById('flashProducts');
  if (!grid) return;
  grid.innerHTML = FLASH_PRODUCTS.map(fp => {
    const full = PRODUCTS.find(p => p.id === fp.id);
    const imgHtml = full && full.images && full.images.length
      ? `<img src="${full.images[0]}" alt="${fp.name}" class="flash-product-img" loading="lazy" onerror="this.onerror=null;this.parentNode.innerHTML='<div class=\\'flash-product-icon\\'>${fp.icon}</div>'">`
      : `<div class="flash-product-icon">${fp.icon}</div>`;
    return `
    <div class="flash-product-card" onclick="openProduct(${fp.id})">
      ${imgHtml}
      <div class="flash-product-name">${fp.name}</div>
      <div class="flash-product-price">${fmt(fp.price)}</div>
      <div class="flash-product-old">${fmt(fp.oldPrice)}</div>
      <div class="flash-save">Save ${fp.discount}%</div>
      <div class="flash-progress">
        <div class="flash-progress-bar"><div class="flash-progress-fill" style="width:${fp.soldPct}%"></div></div>
        <div class="flash-sold">${fp.soldPct}% sold</div>
      </div>
    </div>`;
  }).join('');
}

/* Featured Products */
let visibleCount = 8;
let activeFilter = 'all';

function renderFeaturedProducts(filter = 'all', append = false) {
  const grid = document.getElementById('featuredGrid');
  if (!grid) return;
  activeFilter = filter;

  let filtered = PRODUCTS;
  if (filter !== 'all') {
    filtered = PRODUCTS.filter(p => p.tags.includes(filter));
  }

  const showing = filtered.slice(0, append ? visibleCount : 8);
  if (!append) visibleCount = 8;

  grid.innerHTML = showing.map(p => renderProductCard(p)).join('');
  updateWishlistButtons();
  triggerReveal();

  // Load more button
  const lmBtn = document.getElementById('loadMoreBtn');
  if (lmBtn) {
    lmBtn.style.display = filtered.length > showing.length ? 'inline-flex' : 'none';
  }
}

function loadMore() {
  visibleCount += 4;
  const grid = document.getElementById('featuredGrid');
  if (!grid) return;

  let filtered = PRODUCTS;
  if (activeFilter !== 'all') {
    filtered = PRODUCTS.filter(p => p.tags.includes(activeFilter));
  }
  const showing = filtered.slice(0, visibleCount);
  grid.innerHTML = showing.map(p => renderProductCard(p)).join('');
  updateWishlistButtons();
  triggerReveal();

  const lmBtn = document.getElementById('loadMoreBtn');
  if (lmBtn) {
    lmBtn.style.display = filtered.length > showing.length ? 'inline-flex' : 'none';
  }
}

/* Brands */
function renderBrands() {
  const grid = document.getElementById('brandsGrid');
  if (!grid) return;

  const brandLogos = {
    samsung: 'img/samsung.webp',
    tcl:     'img/tcl.webp',
    midea:   'img/midea.webp',
  };
  const brandFallback = {
    nasco: { text: 'NASCO', style: 'font-size:22px;font-weight:900;letter-spacing:2px;color:#003087;font-family:"Poppins",sans-serif' },
  };

  grid.innerHTML = BRANDS.map((b, i) => {
    const logoSrc = brandLogos[b.id];
    const fb = brandFallback[b.id];
    const logoHtml = logoSrc
      ? `<img src="${logoSrc}" alt="${b.name}" class="brand-logo-img" onerror="this.onerror=null;this.style.display='none';this.nextSibling.style.display='block'">`
      : '';
    const textHtml = fb
      ? `<div style="${fb.style}${logoSrc ? ';display:none' : ''}">${fb.text}</div>`
      : `<div style="font-size:20px;font-weight:800;color:var(--text-dark);${logoSrc ? 'display:none' : ''}">${b.name}</div>`;
    return `
      <div class="brand-card reveal delay-${Math.min(i * 100, 400)}" onclick="window.location='shop.html?brand=${b.id}'">
        ${logoHtml}${textHtml}
        <div class="brand-count">${b.products} Products</div>
      </div>
    `;
  }).join('');
  triggerReveal();
}

/* Blog */
function renderBlog() {
  const grid = document.getElementById('blogGrid');
  if (!grid) return;
  grid.innerHTML = BLOG_POSTS.map(post => `
    <div class="blog-card reveal">
      <div class="blog-img" style="background:${post.bgColor}"><span>${post.icon}</span></div>
      <div class="blog-body">
        <div class="blog-meta">
          <span class="blog-cat">${post.category}</span>
          <span class="blog-date"><i class="fas fa-calendar-alt" style="margin-right:4px;opacity:.6"></i>${post.date}</span>
          <span class="blog-date"><i class="fas fa-clock" style="margin-right:4px;opacity:.6"></i>${post.readTime}</span>
        </div>
        <div class="blog-title">${post.title}</div>
        <div class="blog-excerpt">${post.excerpt}</div>
        <a href="blog.html?post=${post.id}" class="blog-read-more" onclick="event.stopPropagation()">
          Read More <i class="fas fa-arrow-right"></i>
        </a>
      </div>
    </div>
  `).join('');
  triggerReveal();
}

/* Recently Viewed */
function renderRecentlyViewed() {
  const rv = JSON.parse(localStorage.getItem('obv_rv') || '[]');
  if (rv.length < 2) return;
  const sec = document.getElementById('recentlyViewed');
  const grid = document.getElementById('recentlyViewedGrid');
  if (!sec || !grid) return;
  const prods = rv.map(id => PRODUCTS.find(p => p.id === id)).filter(Boolean).slice(0, 4);
  if (prods.length < 2) return;
  sec.style.display = 'block';
  grid.innerHTML = prods.map(p => renderProductCard(p)).join('');
  updateWishlistButtons();
  triggerReveal();
}

/* ════════════════════════════════════════
   SCROLL REVEAL
════════════════════════════════════════ */
function triggerReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal:not(.revealed), .reveal-left:not(.revealed), .reveal-right:not(.revealed)').forEach(el => observer.observe(el));

  document.querySelectorAll('.section-header:not(.animated)').forEach(el => {
    const hObs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('animated'); hObs.unobserve(e.target); }});
    }, { threshold: 0.1 });
    hObs.observe(el);
  });
}

/* ════════════════════════════════════════
   COUNTDOWN TIMER
════════════════════════════════════════ */
function startCountdown() {
  const endTime = Date.now() + (8 * 3600 + 45 * 60 + 30) * 1000;

  function update() {
    const rem = Math.max(0, Math.floor((endTime - Date.now()) / 1000));
    const h = Math.floor(rem / 3600);
    const m = Math.floor((rem % 3600) / 60);
    const s = rem % 60;
    const pad = n => String(n).padStart(2, '0');

    const hEl = document.getElementById('countHours');
    const mEl = document.getElementById('countMins');
    const sEl = document.getElementById('countSecs');

    if (hEl) hEl.textContent = pad(h);
    if (mEl) mEl.textContent = pad(m);
    if (sEl) sEl.textContent = pad(s);

    if (rem > 0) requestAnimationFrame(() => setTimeout(update, 1000));
  }
  update();
}

/* ════════════════════════════════════════
   SEARCH
════════════════════════════════════════ */
function initSearch() {
  const input = document.getElementById('searchInput');
  const suggestions = document.getElementById('searchSuggestions');
  const btn = document.getElementById('searchBtn');

  if (!input || !suggestions) return;

  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    if (q.length < 2) { suggestions.classList.remove('active'); return; }

    const matches = SEARCH_INDEX.filter(item => item.text.toLowerCase().includes(q)).slice(0, 7);

    if (matches.length === 0) { suggestions.classList.remove('active'); return; }

    suggestions.innerHTML = matches.map(item => `
      <div class="suggestion-item" onclick="handleSearchSelect('${item.type}','${item.id}','${item.text.replace(/'/g, "\\'")}')">
        <span style="font-size:18px">${item.icon}</span>
        <div>
          <div style="font-size:13.5px;font-weight:600;color:var(--text-dark)">${highlightMatch(item.text, q)}</div>
          <div style="font-size:12px;color:var(--text-muted)">${item.sub} • ${capitalise(item.type)}</div>
        </div>
      </div>
    `).join('');
    suggestions.classList.add('active');
  });

  input.addEventListener('focus', () => { if (input.value.length >= 2) suggestions.classList.add('active'); });

  document.addEventListener('click', e => {
    if (!e.target.closest('#searchBar')) suggestions.classList.remove('active');
  });

  if (btn) {
    btn.addEventListener('click', () => {
      const q = input.value.trim();
      if (q) window.location.href = `shop.html?q=${encodeURIComponent(q)}`;
    });
  }

  input.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      const q = input.value.trim();
      if (q) window.location.href = `shop.html?q=${encodeURIComponent(q)}`;
    }
  });
}

function handleSearchSelect(type, id, text) {
  const el = document.getElementById('searchSuggestions');
  if (el) el.classList.remove('active');
  if (type === 'product') openProduct(parseInt(id));
  else if (type === 'category') window.location.href = `shop.html?cat=${id}`;
  else if (type === 'brand') window.location.href = `shop.html?brand=${id}`;
}

function highlightMatch(str, q) {
  const re = new RegExp(`(${q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
  return str.replace(re, '<mark style="background:rgba(29,78,216,0.12);color:var(--primary);border-radius:2px">$1</mark>');
}

function capitalise(s) { return s.charAt(0).toUpperCase() + s.slice(1); }

/* ════════════════════════════════════════
   SIDEBAR TOGGLES
════════════════════════════════════════ */
function initSidebars() {
  const overlay = document.getElementById('overlay');
  const cartSidebar = document.getElementById('cartSidebar');
  const wishlistSidebar = document.getElementById('wishlistSidebar');
  const accountModal = document.getElementById('accountModal');

  function openCart() {
    cartSidebar?.classList.add('open');
    overlay?.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
  function closeCart() {
    cartSidebar?.classList.remove('open');
    overlay?.classList.remove('active');
    document.body.style.overflow = '';
  }
  function openWishlist() {
    wishlistSidebar?.classList.add('open');
    overlay?.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
  function closeWishlist() {
    wishlistSidebar?.classList.remove('open');
    overlay?.classList.remove('active');
    document.body.style.overflow = '';
  }
  function openAccount() {
    accountModal?.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeAccount() {
    accountModal?.classList.remove('open');
    document.body.style.overflow = '';
  }

  document.getElementById('cartToggle')?.addEventListener('click', openCart);
  document.getElementById('closeCart')?.addEventListener('click', closeCart);
  document.getElementById('wishlistToggle')?.addEventListener('click', openWishlist);
  document.getElementById('closeWishlist')?.addEventListener('click', closeWishlist);
  document.getElementById('accountToggle')?.addEventListener('click', openAccount);
  document.getElementById('closeAccount')?.addEventListener('click', closeAccount);

  overlay?.addEventListener('click', () => { closeCart(); closeWishlist(); });
  accountModal?.addEventListener('click', e => { if (e.target === accountModal) closeAccount(); });

  // Escape key
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') { closeCart(); closeWishlist(); closeAccount(); }
  });
}

/* ════════════════════════════════════════
   HEADER SCROLL EFFECTS
════════════════════════════════════════ */
function initHeaderScroll() {
  const header = document.getElementById('mainHeader');
  const backToTop = document.getElementById('backToTop');
  const scrollBar = document.createElement('div');
  scrollBar.className = 'scroll-progress';
  document.body.appendChild(scrollBar);

  window.addEventListener('scroll', () => {
    const scrollPct = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
    scrollBar.style.width = scrollPct + '%';

    if (window.scrollY > 80) {
      header?.classList.add('scrolled');
      backToTop?.classList.add('visible');
    } else {
      header?.classList.remove('scrolled');
      backToTop?.classList.remove('visible');
    }
  }, { passive: true });

  backToTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ════════════════════════════════════════
   MOBILE NAV
════════════════════════════════════════ */
function initMobileNav() {
  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('mainNav');
  if (!hamburger || !nav) return;

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    nav.classList.toggle('open');
  });

  // Mega / dropdown toggles on mobile
  document.querySelectorAll('.has-mega > .nav-link, .has-dropdown > .nav-link').forEach(link => {
    link.addEventListener('click', e => {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        link.parentElement.classList.toggle('open');
      }
    });
  });
}

/* ════════════════════════════════════════
   PRODUCT TABS
════════════════════════════════════════ */
function initProductTabs() {
  document.querySelectorAll('.tab-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('.tab-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      const filter = pill.getAttribute('data-filter');
      visibleCount = 8;
      renderFeaturedProducts(filter);
    });
  });

  const lmBtn = document.getElementById('loadMoreBtn');
  lmBtn?.addEventListener('click', loadMore);
}

/* ════════════════════════════════════════
   MODAL TABS (Account)
════════════════════════════════════════ */
function initModalTabs() {
  document.querySelectorAll('.modal-tabs .tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const tabId = btn.getAttribute('data-tab');
      document.querySelectorAll('.modal-tabs .tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById(tabId + 'Tab')?.classList.add('active');
    });
  });

  // Form submit
  document.getElementById('loginForm')?.addEventListener('submit', e => {
    e.preventDefault();
    showToast('success', 'Logged In!', 'Welcome back to Orbiva.', 'fas fa-user-check');
    document.getElementById('accountModal')?.classList.remove('open');
    document.body.style.overflow = '';
  });
  document.getElementById('registerForm')?.addEventListener('submit', e => {
    e.preventDefault();
    showToast('success', 'Account Created!', 'Welcome to Orbiva! Start shopping now.', 'fas fa-user-plus');
    document.getElementById('accountModal')?.classList.remove('open');
    document.body.style.overflow = '';
  });
}

/* ════════════════════════════════════════
   NEWSLETTER
════════════════════════════════════════ */
function initNewsletter() {
  document.getElementById('newsletterForm')?.addEventListener('submit', e => {
    e.preventDefault();
    showToast('success', 'Subscribed!', "You're now on the list. Watch out for exclusive deals!", 'fas fa-envelope-open-text');
    e.target.reset();
  });
}

/* ════════════════════════════════════════
   MEGA MENU BACKDROP
════════════════════════════════════════ */
function initMegaBackdrop() {
  const items = document.querySelectorAll('.has-mega, .has-dropdown');
  if (!items.length) return;
  items.forEach(item => {
    item.addEventListener('mouseenter', () => document.body.classList.add('mega-open'));
    item.addEventListener('mouseleave', () => document.body.classList.remove('mega-open'));
  });
}

/* ════════════════════════════════════════
   INIT ALL
════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  renderCategories();
  renderFlashProducts();
  renderFeaturedProducts();
  renderBrands();
  renderBlog();
  renderRecentlyViewed();
  startCountdown();
  initSearch();
  initSidebars();
  initHeaderScroll();
  initMobileNav();
  initProductTabs();
  initModalTabs();
  initNewsletter();
  initMegaBackdrop();
  triggerReveal();

  // Animate section headers on load
  setTimeout(() => {
    document.querySelectorAll('.section-header').forEach((el, i) => {
      setTimeout(() => el.classList.add('animated'), i * 120);
    });
  }, 300);
});
