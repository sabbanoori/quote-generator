const quotes = [
  "Believe you can and you're halfway there.",
  "You miss 100% of the shots you don’t take.",
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  "It does not matter how slowly you go as long as you do not stop."
];

document.addEventListener("DOMContentLoaded", () => {
  const quoteText = document.getElementById("quote");
  const newQuoteBtn = document.getElementById("new-quote");

  function getQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteText.textContent = quotes[randomIndex];
  }

  newQuoteBtn.addEventListener("click", getQuote);
  getQuote();
});
