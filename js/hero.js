/* ================================================================
   ORBIVA – HERO SLIDER
================================================================ */

(function () {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.dot');
  const prevBtn = document.getElementById('heroPrev');
  const nextBtn = document.getElementById('heroNext');
  if (!slides.length) return;

  let current = 0;
  let autoTimer = null;
  const INTERVAL = 5200;

  function goTo(index) {
    slides[current].classList.remove('active');
    dots[current].classList.remove('active');
    current = (index + slides.length) % slides.length;
    slides[current].classList.add('active');
    dots[current].classList.add('active');
  }

  function next() { goTo(current + 1); }
  function prev() { goTo(current - 1); }

  function startAuto() { autoTimer = setInterval(next, INTERVAL); }
  function stopAuto() { clearInterval(autoTimer); }

  if (prevBtn) prevBtn.addEventListener('click', () => { stopAuto(); prev(); startAuto(); });
  if (nextBtn) nextBtn.addEventListener('click', () => { stopAuto(); next(); startAuto(); });

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => { stopAuto(); goTo(i); startAuto(); });
  });

  startAuto();

  // Pause on hover
  const heroEl = document.getElementById('hero');
  if (heroEl) {
    heroEl.addEventListener('mouseenter', stopAuto);
    heroEl.addEventListener('mouseleave', startAuto);
  }

  // Touch/swipe support — suppress slide onclick when swiping
  let touchStartX = 0;
  let wasSwiped = false;
  if (heroEl) {
    heroEl.addEventListener('touchstart', e => {
      touchStartX = e.touches[0].clientX;
      wasSwiped = false;
    }, { passive: true });
    heroEl.addEventListener('touchend', e => {
      const dx = e.changedTouches[0].clientX - touchStartX;
      if (Math.abs(dx) > 50) {
        wasSwiped = true;
        stopAuto(); dx < 0 ? next() : prev(); startAuto();
      }
    }, { passive: true });
    // Block click navigation when the gesture was a swipe
    heroEl.addEventListener('click', e => {
      if (wasSwiped) { e.stopImmediatePropagation(); wasSwiped = false; }
    }, true);
  }
})();
