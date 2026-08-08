(()=>{
  const btn=document.querySelector(".menu-btn"),nav=document.querySelector(".nav-links");
  btn&&nav&&(btn.addEventListener("click",()=>{const e=nav.classList.toggle("open");btn.setAttribute("aria-expanded",e?"true":"false")}),nav.querySelectorAll("a").forEach(e=>e.addEventListener("click",()=>{nav.classList.remove("open"),btn.setAttribute("aria-expanded","false")})));

  const loadVideo=v=>{
    if(v.dataset.loaded)return;
    const s=v.getAttribute("data-src");
    s&&(v.src=s,v.dataset.loaded="1",v.load());
  };
  document.querySelectorAll("video[data-lazy]").forEach(v=>{
    const go=()=>loadVideo(v);
    v.addEventListener("play",go,{passive:!0});
    v.addEventListener("pointerdown",go,{passive:!0});
    v.addEventListener("click",go,{passive:!0});
  });

  const hero=document.querySelector("video[data-autoplay-until-scroll]");
  if(hero){
    const reduce=window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    hero.muted=!0;
    if(!reduce){
      const tryPlay=()=>{hero.play().catch(()=>{})};
      if(hero.readyState>=2)tryPlay();
      else hero.addEventListener("loadeddata",tryPlay,{once:!0});
    }else{
      hero.removeAttribute("autoplay");
      hero.pause();
    }
    const stopOnScroll=()=>{
      if(window.scrollY>8){
        hero.pause();
        window.removeEventListener("scroll",stopOnScroll);
      }
    };
    window.addEventListener("scroll",stopOnScroll,{passive:!0});
  }
})();
