document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible"); // Entfernt Klasse beim Verlassen
          }
        });
      },
      { threshold: 0.1 }
    );
  
    document.querySelectorAll(".fadein").forEach((el) => {
      observer.observe(el);
    });
  });