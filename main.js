// Kwiz Avond – klein scriptje, geen trackers.
// Clips onder de hero laden pas als ze bijna in beeld komen en pauzeren buiten beeld.
// Wie "minder beweging" heeft ingesteld, krijgt stilstaande posters met een afspeelknop.
(function () {
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var videos = document.querySelectorAll("video");

  function load(v) {
    if (v.dataset.src && !v.getAttribute("src")) { v.src = v.dataset.src; }
  }

  if (reduce) {
    videos.forEach(function (v) {
      v.removeAttribute("autoplay");
      v.pause();
      v.controls = true;
      v.preload = "none";
      if (v.dataset.src) { v.src = v.dataset.src; }
    });
    return;
  }

  if (!("IntersectionObserver" in window)) { videos.forEach(load); return; }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      var v = e.target;
      if (e.isIntersecting) {
        load(v);
        var p = v.play();
        if (p && p.catch) { p.catch(function () {}); }
      } else if (!v.paused) {
        v.pause();
      }
    });
  }, { rootMargin: "300px 0px" });

  videos.forEach(function (v) { io.observe(v); });
})();
