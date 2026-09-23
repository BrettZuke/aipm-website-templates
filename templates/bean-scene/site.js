/* ==========================================================================
   BEAN SCENE
   Two behaviours the core does not cover: the live opening-hours readout,
   and the reservation form.
   ========================================================================== */

(function () {
  'use strict';

  /* --- Opening hours -------------------------------------------------------
     Open and close hour per weekday, indexed the way Date.getDay() indexes:
     Sunday is 0. The shop is in Leeds, so the clock that matters is London's,
     not the one on the visitor's laptop in another timezone. */

  var HOURS = {
    0: [9, 16],
    1: [7, 18], 2: [7, 18], 3: [7, 18], 4: [7, 18], 5: [7, 18],
    6: [8, 18]
  };

  var DAY_NAMES = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  function londonTime() {
    var parts = new Intl.DateTimeFormat('en-GB', {
      timeZone: 'Europe/London',
      weekday: 'long',
      hour: '2-digit',
      minute: '2-digit',
      hourCycle: 'h23'
    }).formatToParts(new Date());

    var read = function (type) {
      var found = parts.find(function (p) { return p.type === type; });
      return found ? found.value : '';
    };

    return {
      day: DAY_NAMES.indexOf(read('weekday')),
      hour: parseInt(read('hour'), 10),
      minute: parseInt(read('minute'), 10)
    };
  }

  function clock(hour) {
    if (hour === 12) return 'noon';
    return (hour % 12 || 12) + (hour < 12 ? 'am' : 'pm');
  }

  function nextOpenDay(from) {
    for (var i = 1; i <= 7; i++) {
      var day = (from + i) % 7;
      if (HOURS[day]) return { day: day, offset: i };
    }
    return null;
  }

  function statusLine(now) {
    var today = HOURS[now.day];
    var minutes = now.hour * 60 + now.minute;

    if (today && minutes >= today[0] * 60 && minutes < today[1] * 60) {
      return { open: true, text: 'Open now, until ' + clock(today[1]) };
    }

    if (today && minutes < today[0] * 60) {
      return { open: false, text: 'Opens at ' + clock(today[0]) + ' today' };
    }

    var next = nextOpenDay(now.day);
    if (!next) return { open: false, text: 'Closed' };

    var when = next.offset === 1 ? 'tomorrow' : DAY_NAMES[next.day];
    return { open: false, text: 'Closed, opens ' + clock(HOURS[next.day][0]) + ' ' + when };
  }

  var now = londonTime();

  // Intl gives a weekday name in the page's own locale list; if that lookup
  // ever misses, say nothing rather than print a wrong opening time.
  if (now.day >= 0) {
    var state = statusLine(now);

    document.querySelectorAll('[data-hours-status]').forEach(function (el) {
      el.textContent = state.text;
      el.setAttribute('data-open', String(state.open));
    });

    document.querySelectorAll('.hours li[data-day]').forEach(function (row) {
      if (parseInt(row.dataset.day, 10) === now.day) row.setAttribute('data-today', 'true');
    });
  } else {
    document.querySelectorAll('[data-hours-status]').forEach(function (el) {
      el.textContent = 'Open seven days from 7am';
    });
  }

  /* --- Reservation form -----------------------------------------------------
     With data-endpoint on the form the fields POST as JSON. Without one there
     is nowhere for a booking to go, and the form says exactly that rather than
     flashing a thank you that means nothing. */

  var form = document.querySelector('.form');
  if (!form) return;

  var status = form.querySelector('.form__status');
  var button = form.querySelector('button[type="submit"]');

  function say(message) { if (status) status.textContent = message; }

  function invalidField() {
    var name = form.elements.name.value.trim();
    if (!name) return { el: form.elements.name, why: 'We need a name for the table.' };

    var email = form.elements.email.value.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
      return { el: form.elements.email, why: 'That email address does not look right.' };
    }

    if (!form.elements.when.value.trim()) {
      return { el: form.elements.when, why: 'Tell us roughly when you want to come in.' };
    }

    return null;
  }

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    var problem = invalidField();
    if (problem) {
      say(problem.why);
      problem.el.focus();
      return;
    }

    var payload = {};
    new FormData(form).forEach(function (value, key) { payload[key] = value; });

    var endpoint = form.dataset.endpoint;

    if (!endpoint) {
      say('Thanks ' + payload.name.split(' ')[0] + '. This is a concept site, so nothing was sent anywhere. '
        + 'On a live build this request lands in the shop inbox the moment you press the button.');
      form.reset();
      return;
    }

    button.disabled = true;
    say('Sending your request...');

    fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    }).then(function (res) {
      if (!res.ok) throw new Error('the server said ' + res.status);
      form.reset();
      say('Got it. We will confirm your table by email shortly.');
    }).catch(function (err) {
      say('That did not send: ' + err.message + '. Call the bar on 0113 496 0182 instead.');
    }).then(function () {
      button.disabled = false;
    });
  });
})();
