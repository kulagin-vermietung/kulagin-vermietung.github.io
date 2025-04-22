let currentQuote = 0;
const quotes = document.querySelectorAll(".quote-carousel .quote");
const dots = document.querySelectorAll(".quote-dots .dot");

function showQuote(index) {
  quotes[currentQuote].classList.remove("active");
  dots[currentQuote].classList.remove("active");
  currentQuote = index;
  quotes[currentQuote].classList.add("active");
  dots[currentQuote].classList.add("active");
}

setInterval(() => {
  let next = (currentQuote + 1) % quotes.length;
  showQuote(next);
}, 3000);

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    showQuote(index);
  });
});