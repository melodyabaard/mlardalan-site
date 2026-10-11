/* Minimal replacement for the Header Footer Elementor menu script: tap/keyboard toggle for the Books dropdown. */
(function(){
  document.querySelectorAll('.hfe-has-submenu').forEach(function(li){
    var box=li.querySelector('.hfe-has-submenu-container'), sub=li.querySelector('.sub-menu');
    if(!box||!sub) return;
    function set(open){ li.classList.toggle('focus',open); box.setAttribute('aria-expanded',open?'true':'false'); }
    box.addEventListener('keydown',function(e){ if(e.key==='Enter'||e.key===' '){ e.preventDefault(); set(!li.classList.contains('focus')); }});
    box.querySelector('a').addEventListener('click',function(e){
      if(window.matchMedia('(hover: none)').matches && !li.classList.contains('focus')){ e.preventDefault(); set(true); }
    });
    document.addEventListener('click',function(e){ if(!li.contains(e.target)) set(false); });
  });
  document.querySelectorAll('a[href^="#"]').forEach(function(a){a.addEventListener('click',function(e){var t=document.querySelector(a.getAttribute('href'));if(t){e.preventDefault();t.scrollIntoView({behavior:'smooth'});}})});
})();

/* FAQ toggles (replaces Elementor toggle widget script) */
document.querySelectorAll('.elementor-toggle-item').forEach(function(it){
  var t=it.querySelector('.elementor-tab-title'), c=it.querySelector('.elementor-tab-content'); if(!t||!c) return;
  function tog(){ var o=!t.classList.contains('elementor-active'); t.classList.toggle('elementor-active',o); c.classList.toggle('elementor-active',o); t.setAttribute('aria-expanded',o?'true':'false'); }
  t.addEventListener('click',tog);
  t.addEventListener('keydown',function(e){ if(e.key==='Enter'||e.key===' '){ e.preventDefault(); tog(); }});
  var a=t.querySelector('.elementor-toggle-title'); if(a) a.addEventListener('click',function(e){e.preventDefault();});
});
