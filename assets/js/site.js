/* Fortress City Gov. — progressive enhancement only. */

(function () {
  "use strict";

  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)");

  function currentYear() {
    var nodes = document.querySelectorAll("[data-year]");
    var year = new Date().getFullYear();
    for (var i = 0; i < nodes.length; i++) nodes[i].textContent = String(year);
  }

  function reveal() {
    var items = document.querySelectorAll(".reveal");
    if (!items.length) return;

    if (reduce.matches || !("IntersectionObserver" in window)) {
      for (var i = 0; i < items.length; i++) items[i].classList.add("is-in");
      return;
    }

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in");
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });

    for (var j = 0; j < items.length; j++) io.observe(items[j]);
  }

  function init() {
    currentYear();
    reveal();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
