import { fetchSimpsonsQuote } from "./api.js";
import { renderQuote, renderError } from "./render.js";

document.getElementById("newQuoteBtn").addEventListener("click", async () => {
  try {
    const quote = await fetchSimpsonsQuote();
    renderQuote(quote);
  } catch (error) {
    renderError("Oops! Couldn't load quote.");
  }
});

// Load on page start
(async () => {
  try {
    const quote = await fetchSimpsonsQuote();
    renderQuote(quote);
  } catch (error) {
    renderError("Oops! Couldn't load quote.");
  }
})();
