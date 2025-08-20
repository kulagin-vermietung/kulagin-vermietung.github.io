// FadeInScrollAnim
document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible"); 
          }
        });
      },
      { threshold: 0.1 }
    );
  
    document.querySelectorAll(".fadein").forEach((el) => {
      observer.observe(el);
    });
  });

// NavBarScroll
  window.addEventListener("scroll", function () {
    var navbar = document.querySelector(".nav-bar");
    var kontaktButton = document.querySelector("nav .btn");
  
    if (window.scrollY > 30) {
      navbar.classList.add("scrolled");
      kontaktButton.classList.add("scrolled-btn");
    } else {
      navbar.classList.remove("scrolled");
      kontaktButton.classList.remove("scrolled-btn");
    }
  });

// Mobile Hamburger Menu
document.addEventListener("DOMContentLoaded", function () {
  const navToggle = document.getElementById("nav-toggle");
  const primaryNav = document.getElementById("primary-nav");
  const backdrop = document.getElementById("nav-backdrop");
  const body = document.body;

  if (!navToggle || !primaryNav) return;

  function closeMenu() {
    body.classList.remove("menu-open");
    navToggle.setAttribute("aria-expanded", "false");
    if (backdrop) backdrop.hidden = true;
  }

  function toggleMenu() {
    const isOpen = body.classList.toggle("menu-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
    if (backdrop) backdrop.hidden = !isOpen;
  }

  navToggle.addEventListener("click", toggleMenu);
  if (backdrop) backdrop.addEventListener("click", closeMenu);

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeMenu();
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth > 900) {
      closeMenu();
    }
  });

  // Close menu when any nav link is clicked (e.g., KONTAKT -> #contact)
  if (primaryNav) {
    primaryNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        closeMenu();
      });
    });
  }
});
  
// ScrollToTop
  document.addEventListener("DOMContentLoaded", function () {
    const scrollToTopBtn = document.getElementById("scroll-to-top");
  
    window.addEventListener("scroll", function () {
      if (window.scrollY > 800) {
        scrollToTopBtn.classList.add("show");
      } else {
        scrollToTopBtn.classList.remove("show");
      }
    });
  
    scrollToTopBtn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
  
// ButtonShowMore (null-safe, wiederverwendbar)
function setupToggle(btnId, hiddenSelector, moreText, lessText) {
  const btn = document.getElementById(btnId);
  const hiddenEl = document.querySelector(hiddenSelector);
  if (!btn || !hiddenEl) return; // Elemente fehlen auf dieser Seite → still überspringen

  btn.addEventListener("click", function () {
    const shouldShow =
      hiddenEl.style.display === "none" || hiddenEl.style.display === "";
    if (shouldShow) {
      hiddenEl.style.display = "block";
      btn.textContent = " " + lessText;
    } else {
      hiddenEl.style.display = "none";
      btn.textContent = " " + moreText;
    }
  });
}

// Initialisierung erst nach DOM-Ready
document.addEventListener("DOMContentLoaded", function () {
  // ScrollToTop (nur wenn Button existiert)
  const scrollToTopBtn = document.getElementById("scroll-to-top");
  if (scrollToTopBtn) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 800) {
        scrollToTopBtn.classList.add("show");
      } else {
        scrollToTopBtn.classList.remove("show");
      }
    });

    scrollToTopBtn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Alle optionalen Toggles (binden sich nur, wenn vorhanden)
  setupToggle("toggleButton",  ".hidden-items",  "Weitere anzeigen", "Weniger anzeigen");
  setupToggle("toggleButton2", ".hidden-items2", "Weitere anzeigen", "Weniger anzeigen");
  setupToggle("toggleButton3", ".hidden-items3", "Weitere anzeigen", "Weniger anzeigen");
  setupToggle("toggleButton4", ".hidden-items4", " Grundriss anzeigen", " Grundriss ausblenden");
  setupToggle("toggleButton5", ".hidden-items5", "Weitere anzeigen", "Weniger anzeigen");
  setupToggle("toggleButton6", ".hidden-items6", "Weitere anzeigen", "Weniger anzeigen");
});