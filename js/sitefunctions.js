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
    var kontaktButton = document.querySelector(".btn");
  
    if (window.scrollY > 30) {
      navbar.classList.add("scrolled");
      kontaktButton.classList.add("scrolled-btn");
    } else {
      navbar.classList.remove("scrolled");
      kontaktButton.classList.remove("scrolled-btn");
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
  
// ButtonShowMore
  document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggleButton");
    const hiddenItems = document.querySelector(".hidden-items");
  
    toggleButton.addEventListener("click", function () {
      if (
        hiddenItems.style.display === "none" ||
        hiddenItems.style.display === ""
      ) {
        hiddenItems.style.display = "block";
        toggleButton.textContent = "Weniger anzeigen";
      } else {
        hiddenItems.style.display = "none";
        toggleButton.textContent = "Weitere anzeigen";
      }
    });
  });
  
  
  document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggleButton2");
    const hiddenItems = document.querySelector(".hidden-items2");
  
    toggleButton.addEventListener("click", function () {
      if (
        hiddenItems.style.display === "none" ||
        hiddenItems.style.display === ""
      ) {
        hiddenItems.style.display = "block";
        toggleButton.textContent = "Weniger anzeigen";
      } else {
        hiddenItems.style.display = "none";
        toggleButton.textContent = "Weitere anzeigen";
      }
    });
  });
  
  
  document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggleButton3");
    const hiddenItems = document.querySelector(".hidden-items3");
  
    toggleButton.addEventListener("click", function () {
      if (
        hiddenItems.style.display === "none" ||
        hiddenItems.style.display === ""
      ) {
        hiddenItems.style.display = "block";
        toggleButton.textContent = "Weniger anzeigen";
      } else {
        hiddenItems.style.display = "none";
        toggleButton.textContent = "Weitere anzeigen";
      }
    });
  });
  


  document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggleButton4");
    const hiddenItems = document.querySelector(".hidden-items4");
  
    toggleButton.addEventListener("click", function () {
      if (
        hiddenItems.style.display === "none" ||
        hiddenItems.style.display === ""
      ) {
        hiddenItems.style.display = "block";
        toggleButton.textContent = "Grundriss ausblenden";
      } else {
        hiddenItems.style.display = "none";
        toggleButton.textContent = "Grundriss anzeigen";
      }
    });
  });