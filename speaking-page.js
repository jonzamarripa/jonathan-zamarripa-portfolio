(function () {
  var button = document.querySelector('[data-copy-bio]');
  if (button) button.addEventListener('click', async function () {
    var bio = document.querySelector('#sp-short-bio');
    var status = document.querySelector('.sp-copy-status');
    try { await navigator.clipboard.writeText(bio.textContent); status.textContent = 'Short bio copied.'; }
    catch (error) { status.textContent = 'Select the bio above to copy it.'; }
  });
  // Playback starts only with the visitor's controls; leaving the tab pauses it.
  document.addEventListener('visibilitychange', function () {
    if (document.hidden) document.querySelectorAll('video').forEach(function (video) { video.pause(); });
  });
})();
