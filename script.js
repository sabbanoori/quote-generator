window.onload = function () {
  const quotes = [
    "Believe in yourself.",
    "You are capable of amazing things.",
    "Every day is a second chance.",
    "Keep going, you're doing great!"
  ];

  const quoteButton = document.getElementById("new-quote");
  const quoteDisplay = document.getElementById("quote");

  quoteButton.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteDisplay.textContent = quotes[randomIndex];
  });
};


