document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".slider");
  const images = Array.from(document.querySelectorAll(".slider img"));
  const nextBtn = document.querySelector(".next");
  const prevBtn = document.querySelector(".prev");
  const imageWidth = 403; // Fixe Breite für jedes Bild
  const totalImages = images.length;

  let index = 4; // Richtiger Startpunkt für 4 geklonte Bilder
  let allowShift = true;

  // *** 4 Bilder vorne und hinten klonen ***
  const clonesBefore = images.slice(-4).map((img) => img.cloneNode(true));
  const clonesAfter = images.slice(0, 4).map((img) => img.cloneNode(true));

  clonesBefore
    .reverse()
    .forEach((clone) => slider.insertBefore(clone, slider.firstChild));
  clonesAfter.forEach((clone) => slider.appendChild(clone));

  // *** Bilder nach Klonen erneut erfassen ***
  const slideImages = document.querySelectorAll(".slider img");
  const totalSlides = slideImages.length;

  // *** Setzt den Slider auf die richtige Startposition (Bild 1 nach Klonen) ***
  slider.style.transform = `translateX(-${index * imageWidth}px)`;
  slider.style.width = `${totalSlides * imageWidth}px`;

  function updateSlider() {
    if (!allowShift) return;
    allowShift = false;

    slider.style.transition = "transform 0.5s ease-out";
    slider.style.transform = `translateX(-${index * imageWidth}px)`;

    setTimeout(() => {
      if (index >= totalSlides - 4) {
        // Korrektur für 4 Klone
        slider.style.transition = "none";
        index = 4; // Nach Bild 8 → Bild 1, ohne Sprung
        slider.style.transform = `translateX(-${index * imageWidth}px)`;
      } else if (index <= 3) {
        // Korrektur für 4 Klone
        slider.style.transition = "none";
        index = totalImages + 3; // Nach Bild 1 → Bild 8, ohne Sprung
        slider.style.transform = `translateX(-${index * imageWidth}px)`;
      }
      allowShift = true;
    }, 403);
  }

  nextBtn.addEventListener("click", function () {
    if (allowShift) {
      index++;
      updateSlider();
    }
  });

  prevBtn.addEventListener("click", function () {
    if (allowShift) {
      index--;
      updateSlider();
    }
  });

  // *** Nach dem Laden die richtige Position sofort setzen ***
  window.addEventListener("load", function () {
    updateSlider(true);
  });
});
