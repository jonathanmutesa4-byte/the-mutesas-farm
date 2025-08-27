window.addEventListener("load", function () {
  const loader = document.getElementById("loader");
  loader.style.display = "none";
});

function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// =====================
// Video enhancements
// =====================
(function(){
  // 1) Play/Pause toggle for the hero video
  const hero = document.getElementById('heroVideo');
  const toggleBtn = document.querySelector('.video-toggle');
  if (hero && toggleBtn){
    const sync = () => {
      const paused = hero.paused;
      toggleBtn.textContent = paused ? '▶' : '⏸';
      toggleBtn.setAttribute('aria-label', paused ? 'Play video' : 'Pause video');
    };
    toggleBtn.addEventListener('click', () => {
      if (hero.paused) hero.play(); else hero.pause();
      sync();
    });
    hero.addEventListener('play', sync);
    hero.addEventListener('pause', sync);
    sync();
  }

  // 2) Pause other videos when one starts playing
  const videos = Array.from(document.querySelectorAll('video'));
  videos.forEach(v => {
    v.addEventListener('play', () => {
      videos.forEach(o => { if (o !== v && !o.paused) o.pause(); });
    });
  });

  // 3) Save data: auto-pause hero when scrolled away
  if ('IntersectionObserver' in window && hero){
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting && !hero.paused) hero.pause();
        else if (entry.isIntersecting && hero.muted && hero.autoplay){
          hero.play().catch(() => {});
        }
      });
    }, { threshold: 0.25 });
    io.observe(hero);
  }
})();



