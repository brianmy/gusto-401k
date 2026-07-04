(function () {
  var KEY = 'gusto_cm';
  var body = document.body;
  var btn = document.getElementById('cm-toggle');
  if (!btn) return;

  function setOn(on) {
    if (on) {
      body.classList.remove('cm-off');
      btn.classList.remove('cm-off');
    } else {
      body.classList.add('cm-off');
      btn.classList.add('cm-off');
    }
    localStorage.setItem(KEY, on ? '1' : '0');
  }

  // Init from saved state — default OFF
  setOn(localStorage.getItem(KEY) === '1');

  btn.addEventListener('click', function () {
    setOn(body.classList.contains('cm-off'));
  });

  // Close any open tip when clicking outside a badge
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.cm-badge')) {
      document.querySelectorAll('.cm-tip.open').forEach(function (t) {
        t.classList.remove('open');
      });
    }
  });

  // Badge click: toggle its tip
  document.querySelectorAll('.cm-badge').forEach(function (badge) {
    badge.addEventListener('click', function (e) {
      e.stopPropagation();
      var tip = badge.querySelector('.cm-tip');
      if (!tip) return;
      var wasOpen = tip.classList.contains('open');
      document.querySelectorAll('.cm-tip.open').forEach(function (t) {
        t.classList.remove('open');
      });
      if (!wasOpen) tip.classList.add('open');
    });
  });
})();
