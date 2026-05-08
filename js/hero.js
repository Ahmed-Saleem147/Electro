/* ================================================================
   ORBIVA – 3-PANEL IMAGE BANNER
   Each panel independently cycles through its 6 images.
   Panels are staggered so they don't change simultaneously.
================================================================ */

(function () {
  const panels = document.querySelectorAll('.tri-panel');
  if (!panels.length) return;

  const INTERVAL   = 4000;  // ms between advances per panel
  const STAGGER    = 1400;  // ms offset between panel start times

  panels.forEach((panel, panelIdx) => {
    const slides   = panel.querySelectorAll('.tri-pslide');
    const dotsWrap = panel.querySelector('.tri-panel-dots');
    if (!slides.length) return;

    // Build dot indicators
    slides.forEach((_, i) => {
      const d = document.createElement('span');
      d.className = 'tri-pdot' + (i === 0 ? ' active' : '');
      d.addEventListener('click', e => { e.stopPropagation(); goTo(i); });
      dotsWrap.appendChild(d);
    });

    let current = 0;

    function goTo(idx) {
      slides[current].classList.remove('active');
      dotsWrap.children[current].classList.remove('active');
      current = (idx + slides.length) % slides.length;
      slides[current].classList.add('active');
      dotsWrap.children[current].classList.add('active');
    }

    function next() { goTo(current + 1); }

    // Stagger panel start so they don't all flip at once
    setTimeout(() => {
      setInterval(next, INTERVAL);
    }, panelIdx * STAGGER);
  });
})();
