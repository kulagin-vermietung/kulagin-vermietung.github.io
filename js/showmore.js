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
