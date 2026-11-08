/* Portfolio remediation behavior: standalone progressive enhancement.
 * Keeps React-owned gallery and video state intact, and fixes the home logo
 * click interception that otherwise can retrigger transitions while on home.
 */
(() => {
  "use strict";
  const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");
  // A homepage brand click should not re-run a route transition or remount.
  document.addEventListener("click", event => {
    const brand = event.target.closest?.(".jiz-homepage .jiz-global-nav .jiz-brand");
    if (!brand) return;
    const path = location.pathname.replace(/\/+$/, "") || "/";
    if (path !== "/") return;
    event.preventDefault();
    event.stopImmediatePropagation();
    const behavior = reducedMotion.matches ? "instant" : "smooth";
    window.scrollTo({top:0,behavior});
    const main = document.getElementById("main-content");
    if (main && !reducedMotion.matches) {
      // Avoid focus on brand click: would scroll the page back after the animation.
      main.removeAttribute("data-route-transition");
    }
  }, true);

  // This is diagnostic, not a global overflow mask: flag actual offenders
  // during preview review without shipping developer console noise to prod.
  if (new URLSearchParams(location.search).has("layoutAudit")) {
    requestAnimationFrame(() => {
      const offenders = [...document.querySelectorAll(".jiz-homepage *")]
        .filter(el => {
          if (!(el instanceof HTMLElement)) return false;
          const r = el.getBoundingClientRect();
          const styles = getComputedStyle(el);
          return styles.position !== "fixed" &&
            (r.right > innerWidth + 2 || r.left < -2);
        }).slice(0,30);
      console.table(offenders.map(el => ({
        element:el.tagName,
        className:el.className,
        rect:JSON.stringify(el.getBoundingClientRect().toJSON())
      })));
    });
  }

  // Adopt loaded cinematic video only: do not set sources or synthesize media.
  // Respect the existing play/mute buttons and manual pauses.
  const watched = new WeakSet();
  const observer = "IntersectionObserver" in window
    ? new IntersectionObserver(entries => {
        for (const entry of entries) {
          const video = entry.target;
          if (!video.isConnected) {
            observer.unobserve(video);
            continue;
          }
          if (reducedMotion.matches || !entry.isIntersecting) {
            if (!video.paused) video.pause();
          } else if (!video.dataset.userPaused &&
                     video.muted &&
                     video.readyState >= 2) {
            video.play().catch(() => {/* autoplay may be blocked */});
          }
        }
      }, {threshold:0.4})
    : null;

  const register = () => {
    document.querySelectorAll(".jiz-homepage .hero-video-stage video, .jiz-homepage .jiz-creative-lab-video-frame video")
      .forEach(video => {
        if (watched.has(video)) return;
        watched.add(video);
        video.playsInline = true;
        video.setAttribute("playsinline","");
        video.addEventListener("pause", () => {
          // Intentional play/pause UI click is handled by the existing app.
        });
        observer?.observe(video);
      });
  };
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded",register,{once:true});
  } else {
    register();
  }
  // The React player creates its video asynchronously.
  const monitor = new MutationObserver(register);
  monitor.observe(document.documentElement,{childList:true,subtree:true});
  setTimeout(() => monitor.disconnect(),30000);
})();
