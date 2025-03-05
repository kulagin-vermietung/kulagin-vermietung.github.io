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
