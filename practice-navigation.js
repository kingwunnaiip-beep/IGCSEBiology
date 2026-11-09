(() => {
 'use strict';
 const chooser = document.getElementById('practice-section');
 if (!chooser) return;
 const pages = new Set(['index.html', 'paper4.html']);
 function sync() {
  chooser.value = window.location.pathname.endsWith('/paper4.html') ? 'paper4.html' : 'index.html';
 }
 chooser.addEventListener('change', () => {
  if (pages.has(chooser.value)) window.location.assign(chooser.value);
 });
 window.addEventListener('pageshow', sync);
 sync();
})();
