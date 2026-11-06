/* Jinghao Chen — personal site
   Theme preference, sticky-header state, and section scroll-spy.
   No dependencies; everything degrades gracefully without JS. */
(function () {
  "use strict";

  /* ---------- Theme ---------- */
  var root = document.documentElement;
  var toggle = document.querySelector(".theme-toggle");
  var STORAGE_KEY = "theme";
  var media = window.matchMedia("(prefers-color-scheme: dark)");

  function stored() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      return null;
    }
  }

  function persist(value) {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch (e) {
      /* Storage disabled — the choice simply won't persist. */
    }
  }

  function isDark() {
    var pref = root.getAttribute("data-theme");
    if (pref === "dark") return true;
    if (pref === "light") return false;
    return media.matches;
  }

  function syncToggle() {
    if (!toggle) return;
    var dark = isDark();
    toggle.setAttribute("aria-pressed", String(dark));
    toggle.setAttribute("aria-label", dark ? "Switch to light theme" : "Switch to dark theme");
    toggle.title = dark ? "Switch to light theme" : "Switch to dark theme";
    toggle.classList.toggle("is-dark", dark);
    toggle.classList.toggle("is-light", !dark);
  }

  var saved = stored();
  if (saved === "dark" || saved === "light") {
    root.setAttribute("data-theme", saved);
  }
  syncToggle();

  if (toggle) {
    toggle.addEventListener("click", function () {
      var next = isDark() ? "light" : "dark";
      root.setAttribute("data-theme", next);
      persist(next);
      syncToggle();
    });
  }

  function onSchemeChange() {
    if (!stored()) syncToggle();
  }

  if (typeof media.addEventListener === "function") {
    media.addEventListener("change", onSchemeChange);
  } else if (typeof media.addListener === "function") {
    media.addListener(onSchemeChange);
  }

  /* ---------- Sticky header & back-to-top ---------- */
  var header = document.querySelector(".site-header");
  var toTop = document.querySelector(".to-top");

  function onScroll() {
    var y = window.scrollY;
    if (header) header.classList.toggle("is-stuck", y > 8);
    if (toTop) toTop.classList.toggle("is-visible", y > 600);
  }

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---------- Scroll-spy ---------- */
  var navLinks = Array.prototype.slice.call(document.querySelectorAll(".nav a"));
  var sections = navLinks
    .map(function (link) {
      var id = link.getAttribute("href");
      return id && id.charAt(0) === "#" ? document.querySelector(id) : null;
    })
    .filter(Boolean);

  function setActive(id) {
    navLinks.forEach(function (link) {
      var match = link.getAttribute("href") === "#" + id;
      link.classList.toggle("is-active", match);
      if (match) {
        link.setAttribute("aria-current", "true");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }

  if ("IntersectionObserver" in window && sections.length) {
    var visible = new Map();

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          visible.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0);
        });

        var best = null;
        var bestRatio = 0;
        visible.forEach(function (ratio, id) {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            best = id;
          }
        });

        if (best) setActive(best);
        else setActive("");
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: [0, 0.15, 0.4, 0.75, 1] }
    );

    sections.forEach(function (section) {
      visible.set(section.id, 0);
      observer.observe(section);
    });
  }

  /* ---------- Greeter ---------- */
  var greeter = document.querySelector(".greeter");
  if (greeter) {
    var avatarBtn = greeter.querySelector(".greeter-avatar");
    var closeBtn = greeter.querySelector(".greeter-close");
    var STORE = "greeter-seen";
    var hideTimer = null;
    var seen = false;

    try {
      seen = sessionStorage.getItem(STORE) === "1";
    } catch (e) {
      /* Storage blocked: the greeting simply opens on every load. */
    }

    function openBubble() {
      greeter.classList.add("is-open");
      if (avatarBtn) avatarBtn.setAttribute("aria-expanded", "true");
      if (hideTimer) clearTimeout(hideTimer);
      hideTimer = setTimeout(closeBubble, 12000);
    }

    function closeBubble() {
      greeter.classList.remove("is-open");
      if (avatarBtn) avatarBtn.setAttribute("aria-expanded", "false");
      if (hideTimer) {
        clearTimeout(hideTimer);
        hideTimer = null;
      }
      try {
        sessionStorage.setItem(STORE, "1");
      } catch (e) {
        /* Ignore. */
      }
    }

    // Greet once per browser session, never on every page view.
    if (!seen) setTimeout(openBubble, 1400);

    if (avatarBtn) {
      avatarBtn.addEventListener("click", function () {
        if (greeter.classList.contains("is-open")) closeBubble();
        else openBubble();
      });
    }

    if (closeBtn) {
      closeBtn.addEventListener("click", function () {
        closeBubble();
        if (avatarBtn) avatarBtn.focus();
      });
    }

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && greeter.classList.contains("is-open")) {
        closeBubble();
      }
    });
  }

  /* ---------- Footer year ---------- */
  var year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());
})();
