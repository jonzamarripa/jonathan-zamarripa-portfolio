/* THE SIGNAL ROOM / original scroll-directed motion study.
   All meaningful text and navigation remain in the HTML; animation only
   changes decorative presentation. One requestAnimationFrame per scroll. */
(function () {
  'use strict';
  var root = document.documentElement;
  var button = document.getElementById('motion-control');
  var media = window.matchMedia('(prefers-reduced-motion: reduce)');
  var scenes = Array.prototype.slice.call(document.querySelectorAll('[data-scene]'));
  var nav = Array.prototype.slice.call(document.querySelectorAll('.chapternav a'));
  var heroWords = Array.prototype.slice.call(document.querySelectorAll('[data-hero-word]'));
  var portal = document.getElementById('portal-image');
  var portalScene = document.getElementById('portal');
  var methodScene = document.getElementById('method');
  var methodWords = Array.prototype.slice.call(document.querySelectorAll('.method-words span'));
  var methodCopies = Array.prototype.slice.call(document.querySelectorAll('.method-descriptions p'));
  var methodSteps = Array.prototype.slice.call(document.querySelectorAll('.method-steps li'));
  var progress = document.getElementById('progress-line');
  var lastStage = -1;
  var frame = 0;
  var paused = false;
  try { paused = sessionStorage.getItem('jiz-motion-paused') === '1'; } catch (err) {}

  function clamp(n, min, max) { return Math.min(max, Math.max(min, n)); }
  function ease(n) { return 1 - Math.pow(1 - clamp(n, 0, 1), 3); }
  function enabled() { return !paused && !media.matches; }
  function interactive() { return enabled() && window.innerWidth > 760; }

  function position(section) {
    var rect = section.getBoundingClientRect();
    var travel = Math.max(1, rect.height - window.innerHeight);
    return clamp(-rect.top / travel, 0, 1);
  }
  function methodStage(index) {
    if (index === lastStage) return;
    lastStage = index;
    methodWords.forEach(function (node, i) { node.classList.toggle('active', i === index); });
    methodCopies.forEach(function (node, i) { node.classList.toggle('active', i === index); });
    methodSteps.forEach(function (node, i) { node.classList.toggle('active', i === index); });
    document.getElementById('stage-number').textContent = String(index + 1).padStart(2, '0');
  }
  function render() {
    frame = 0;
    var scrollable = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    progress.style.transform = 'scaleX(' + clamp(window.scrollY / scrollable, 0, 1) + ')';

    // Track the closest scene midpoint without changing scroll behavior.
    var nearest = 0;
    var best = Infinity;
    scenes.forEach(function (section, i) {
      var b = section.getBoundingClientRect();
      var delta = Math.abs(b.top + b.height / 2 - window.innerHeight / 2);
      if (delta < best) { best = delta; nearest = i; }
    });
    nav.forEach(function (link, i) {
      if (i === nearest) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });

    var p = position(scenes[0]);
    heroWords.forEach(function (word, i) {
      if (interactive()) {
        var direction = i % 2 === 0 ? -1 : 1;
        var horizontal = direction * p * 38;
        var vertical = -p * (34 + i * 23);
        word.style.transform = 'translate3d(' + horizontal.toFixed(1) + 'px,' + vertical.toFixed(1) + 'px,0) rotate(' + (direction * p * 3).toFixed(2) + 'deg)';
        word.style.opacity = String(clamp(1 - Math.max(0, p - .32 - .04 * i) * 1.3, 0, 1));
      } else {
        word.style.transform = '';
        word.style.opacity = '';
      }
    });

    var portalProgress = position(portalScene);
    if (interactive()) {
      var cut = 15 * (1 - ease(portalProgress * 1.65));
      portal.style.clipPath = 'inset(' + cut.toFixed(2) + '% ' + (cut * 1.06).toFixed(2) + '% round ' + (8 + cut * 1.8).toFixed(1) + 'px)';
      portal.style.setProperty('--portal-scale', String(1 + Math.min(.13, portalProgress * .13)));
    } else {
      portal.style.clipPath = 'none';
      portal.style.setProperty('--portal-scale', '1');
      portal.style.setProperty('--tilt-x', '0deg');
      portal.style.setProperty('--tilt-y', '0deg');
    }
    var mp = position(methodScene);
    methodStage(interactive() ? Math.min(4, Math.floor(mp * 5)) : 0);
  }
  function schedule() {
    if (frame) return;
    frame = window.requestAnimationFrame(render);
  }
  function sync() {
    root.setAttribute('data-motion', enabled() ? 'on' : 'off');
    button.setAttribute('aria-pressed', String(paused));
    button.textContent = paused ? 'PLAY MOTION' : (media.matches ? 'SYSTEM MOTION OFF' : 'PAUSE MOTION');
    schedule();
  }
  button.addEventListener('click', function () {
    paused = !paused;
    try { sessionStorage.setItem('jiz-motion-paused', paused ? '1' : '0'); } catch (err) {}
    sync();
  });
  if (media.addEventListener) media.addEventListener('change', sync);
  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', schedule, { passive: true });
  window.addEventListener('pageshow', schedule);

  // A real pointer-driven spotlight and restrained 2.5D image perspective;
  // no hidden dependency on mouse movement for navigation.
  portalScene.addEventListener('pointermove', function (event) {
    if (!interactive() || event.pointerType === 'touch') return;
    var rect = portal.getBoundingClientRect();
    if (!rect.width || !rect.height) return;
    var x = clamp((event.clientX - rect.left) / rect.width, 0, 1);
    var y = clamp((event.clientY - rect.top) / rect.height, 0, 1);
    portal.style.setProperty('--cursor-x', (x * 100).toFixed(1) + '%');
    portal.style.setProperty('--cursor-y', (y * 100).toFixed(1) + '%');
    portal.style.setProperty('--tilt-x', ((.5 - y) * 5).toFixed(2) + 'deg');
    portal.style.setProperty('--tilt-y', ((x - .5) * 6).toFixed(2) + 'deg');
  }, { passive: true });
  portalScene.addEventListener('pointerleave', function () {
    portal.style.setProperty('--tilt-x', '0deg');
    portal.style.setProperty('--tilt-y', '0deg');
    portal.style.setProperty('--cursor-x', '50%');
    portal.style.setProperty('--cursor-y', '50%');
  });
  sync();
}());
