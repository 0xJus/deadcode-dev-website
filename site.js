(function () {
  var paused = false;
  function show(key, on) {
    document.querySelectorAll('[data-if="' + key + '"]').forEach(function (el) { el.hidden = !on; });
  }
  function setSubscribed(v) { show('notSubscribed', !v); show('subscribed', v); }
  document.addEventListener('click', function (e) {
    var t = e.target.closest('[data-action]');
    if (!t) return;
    var a = t.getAttribute('data-action');
    if (a === 'toggle-motion') {
      paused = !paused;
      document.body.classList.toggle('paused', paused);
      show('playing', !paused); show('paused', paused);
      document.querySelectorAll('[data-motion-label]').forEach(function (el) { el.textContent = paused ? 'Play motion' : 'Pause motion'; });
    } else if (a === 'reset-form') { setSubscribed(false); }
  });
  document.addEventListener('submit', function (e) {
    if (e.target.getAttribute('data-action') === 'subscribe') { e.preventDefault(); setSubscribed(true); }
  });
})();
