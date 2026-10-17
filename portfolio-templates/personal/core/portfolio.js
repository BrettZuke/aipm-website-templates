/* ==========================================================================
   PORTFOLIO / BEHAVIOURS
   Two things every portfolio page needs, both opt-in through markup:

     data-site-frame    a live preview of a website, scaled down to fit
     data-site-switch   buttons that change which site one frame shows
     data-book          a "Book a call" link (warns while it is still the
                        placeholder, instead of sending people to a dead page)
   ========================================================================== */

(function () {
  'use strict';

  /* --- Live site previews --------------------------------------------------
     Each preview renders the site at desktop size and scales it down, so a
     phone shows the same picture a laptop does. A preview loads as it nears
     the screen and is removed again once it is far away, so a page with six
     previews never holds six live websites in memory at the same time. The
     iframe is created fresh each time rather than re-pointed, because
     changing an iframe's src adds entries to the visitor's back button. */

  var VIEW_W = 1440;

  function fit(screen) {
    var iframe = screen.querySelector('iframe[data-pf-media]');
    if (!iframe || !screen.clientWidth) return;
    var scale = screen.clientWidth / VIEW_W;
    iframe.style.width = VIEW_W + 'px';
    iframe.style.height = Math.ceil(screen.clientHeight / scale) + 'px';
    iframe.style.transform = 'scale(' + scale + ')';
  }

  /* data-poster wins over data-src: it shows a screenshot instead of the live
     site, for websites that refuse to be shown inside another page. */
  function load(screen) {
    if (screen.querySelector('[data-pf-media]')) return;
    var media;

    if (screen.dataset.poster) {
      media = document.createElement('img');
      media.src = screen.dataset.poster;
      media.alt = '';
      media.decoding = 'async';
    } else if (screen.dataset.src) {
      media = document.createElement('iframe');
      media.src = screen.dataset.src;
      media.title = screen.dataset.title || 'Website preview';
      media.setAttribute('tabindex', '-1');
      media.setAttribute('aria-hidden', 'true');
      media.setAttribute('scrolling', 'no');
      media.setAttribute('sandbox', 'allow-scripts allow-same-origin');
    } else {
      return;
    }

    media.setAttribute('data-pf-media', '');
    media.addEventListener('load', function () { screen.classList.add('is-live'); });
    screen.appendChild(media);
    fit(screen);
  }

  function unload(screen) {
    var media = screen.querySelector('[data-pf-media]');
    if (!media) return;
    screen.removeChild(media);
    screen.classList.remove('is-live');
  }

  var screens = Array.prototype.slice.call(document.querySelectorAll(
    '[data-site-frame] .site-frame__screen[data-src], [data-site-frame] .site-frame__screen[data-poster]'
  ));

  if ('IntersectionObserver' in window) {
    var near = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) { if (entry.isIntersecting) load(entry.target); });
    }, { rootMargin: '400px 0px' });

    var far = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) { if (!entry.isIntersecting) unload(entry.target); });
    }, { rootMargin: '1800px 0px' });

    screens.forEach(function (screen) {
      near.observe(screen);
      far.observe(screen);
    });
  } else {
    screens.forEach(load);
  }

  if ('ResizeObserver' in window) {
    var resized = new ResizeObserver(function (entries) {
      entries.forEach(function (entry) { fit(entry.target); });
    });
    screens.forEach(function (screen) { resized.observe(screen); });
  } else {
    window.addEventListener('resize', function () { screens.forEach(fit); });
  }

  /* --- Switching one preview between several sites ------------------------
     <div data-site-switch="frame-id"> holds buttons that each carry
     data-src, data-name and data-title (and data-poster for a site that
     needs a screenshot). The first button is the one the frame starts on,
     so its values must match the frame's own. */

  function hostOf(url) {
    try { return new URL(url).host; } catch (e) { return url; }
  }

  document.querySelectorAll('[data-site-switch]').forEach(function (group) {
    var frame = document.getElementById(group.getAttribute('data-site-switch'));
    if (!frame) return;
    var screen = frame.querySelector('.site-frame__screen');
    var buttons = Array.prototype.slice.call(group.querySelectorAll('[data-src]'));

    buttons.forEach(function (button) {
      button.addEventListener('click', function () {
        if (button.getAttribute('aria-pressed') === 'true') return;
        buttons.forEach(function (other) {
          other.setAttribute('aria-pressed', String(other === button));
        });

        screen.dataset.src = button.dataset.src;
        screen.dataset.title = button.dataset.title || button.dataset.name;
        if (button.dataset.poster) screen.dataset.poster = button.dataset.poster;
        else delete screen.dataset.poster;

        var url = frame.querySelector('.site-frame__url');
        var name = frame.querySelector('.site-frame__name');
        var link = frame.querySelector('.site-frame__link');
        if (url) url.textContent = hostOf(button.dataset.src);
        if (name) name.textContent = button.dataset.name;
        if (link) {
          link.href = button.dataset.src;
          link.setAttribute('aria-label', 'Open ' + button.dataset.name + ' in a new tab');
        }

        var caption = document.querySelector('[data-site-caption="' + frame.id + '"]');
        if (caption && button.dataset.caption) caption.textContent = button.dataset.caption;

        unload(screen);
        load(screen);
      });
    });
  });

  /* --- Booking links ----------------------------------------------------------
     Every "Book a call" button carries data-book. Until the placeholder link
     is swapped for a real one, a click explains what to change rather than
     sending a visitor to a page that does not exist. */

  var PLACEHOLDER = 'cal.com/your-name';
  var toast = null;
  var toastTimer = null;

  function say(message) {
    if (!toast) {
      toast = document.createElement('p');
      toast.className = 'pf-toast';
      toast.setAttribute('role', 'status');
      toast.setAttribute('aria-live', 'polite');
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add('is-on');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toast.classList.remove('is-on'); }, 6000);
  }

  document.addEventListener('click', function (event) {
    var link = event.target.closest('[data-book]');
    if (!link || link.href.indexOf(PLACEHOLDER) === -1) return;
    event.preventDefault();
    say('Your booking link is not set yet. In index.html, replace every cal.com/your-name with your own booking link.');
  });
})();
