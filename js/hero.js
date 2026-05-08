/* ================================================================
   ORBIVA – 3-PANEL IMAGE BANNER
   Each panel independently cycles through its 6 images.
   Blurred backdrop fills the letterbox/pillarbox gaps.
================================================================ */

(function () {
  const panels = document.querySelectorAll('.tri-panel');
  if (!panels.length) return;

  const INTERVAL = 4000;
  const STAGGER  = 1400;

  panels.forEach((panel, panelIdx) => {
    const slides   = panel.querySelectorAll('.tri-pslide');
    const dotsWrap = panel.querySelector('.tri-panel-dots');
    if (!slides.length) return;

    // Inject blurred backdrop behind each slide's image
    slides.forEach(slide => {
      const img = slide.querySelector('img');
      if (!img) return;
      const bg = document.createElement('div');
      bg.className = 'tri-slide-bg';
      // Use the same src; set after img loads to avoid FOUT
      const setSrc = () => { bg.style.backgroundImage = `url('${img.src}')`; };
      img.complete ? setSrc() : img.addEventListener('load', setSrc);
      slide.insertBefore(bg, img);
    });

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

    setTimeout(() => setInterval(next, INTERVAL), panelIdx * STAGGER);
  });
})();
