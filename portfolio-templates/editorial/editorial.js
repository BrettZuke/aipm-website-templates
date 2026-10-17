/* ==========================================================================
   EDITORIAL / HERO LETTERS
   Splits each [data-split] line into one span per letter so the letters can
   rise into place in sequence. The full sentence stays in the h1 for screen
   readers; the split copies are hidden from them.
   ========================================================================== */

(function () {
  'use strict';

  var title = document.querySelector('.js-split');
  if (!title) return;

  var index = 0;

  title.querySelectorAll('[data-split]').forEach(function (line) {
    var text = line.textContent;
    line.textContent = '';
    text.split('').forEach(function (ch) {
      var span = document.createElement('span');
      span.className = 'ch';
      span.textContent = ch === ' ' ? ' ' : ch;
      span.style.setProperty('--i', String(index));
      index += 1;
      line.appendChild(span);
    });
  });

  // Two frames: the first paints the letters in their start position, the
  // second starts the rise, so the transition always has somewhere to go from.
  requestAnimationFrame(function () {
    requestAnimationFrame(function () { title.classList.add('is-ready'); });
  });
})();
