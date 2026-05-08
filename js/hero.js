/* ================================================================
   ORBIVA – IMAGE BANNER SLIDESHOW
================================================================ */

(function () {
  const slides   = document.querySelectorAll('#imgSlider .img-slide');
  const dots     = document.querySelectorAll('.img-dot');
  const sections = document.querySelectorAll('.img-section');
  const prevBtn  = document.getElementById('imgPrev');
  const nextBtn  = document.getElementById('imgNext');
  if (!slides.length) return;

  const SECTION_SIZE = 6;
  let current = 0;
  let autoTimer = null;
  const INTERVAL = 4500;

  function goTo(idx) {
    slides[current].classList.remove('active');
    dots[current].classList.remove('active');
    current = ((idx % slides.length) + slides.length) % slides.length;
    slides[current].classList.add('active');
    dots[current].classList.add('active');
    const secIdx = Math.floor(current / SECTION_SIZE);
    sections.forEach((s, i) => s.classList.toggle('active', i === secIdx));
  }

  function next() { goTo(current + 1); }
  function prev() { goTo(current - 1); }

  function resetTimer() {
    clearInterval(autoTimer);
    autoTimer = setInterval(next, INTERVAL);
  }

  if (prevBtn) prevBtn.addEventListener('click', () => { prev(); resetTimer(); });
  if (nextBtn) nextBtn.addEventListener('click', () => { next(); resetTimer(); });

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      goTo(parseInt(dot.dataset.idx, 10));
      resetTimer();
    });
  });

  sections.forEach(sec => {
    sec.addEventListener('click', () => {
      goTo(parseInt(sec.dataset.section, 10) * SECTION_SIZE);
      resetTimer();
    });
  });

  // Pause on hover
  const banner = document.getElementById('imgBanner');
  if (banner) {
    banner.addEventListener('mouseenter', () => clearInterval(autoTimer));
    banner.addEventListener('mouseleave', resetTimer);
  }

  // Touch / swipe
  let touchStartX = 0;
  if (banner) {
    banner.addEventListener('touchstart', e => {
      touchStartX = e.touches[0].clientX;
    }, { passive: true });
    banner.addEventListener('touchend', e => {
      const dx = e.changedTouches[0].clientX - touchStartX;
      if (Math.abs(dx) > 50) { dx < 0 ? next() : prev(); resetTimer(); }
    }, { passive: true });
  }

  resetTimer();
})();
