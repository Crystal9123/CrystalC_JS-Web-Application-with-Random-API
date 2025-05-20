export function renderQuote(quoteObj) {
  document.getElementById("quoteText").textContent = `"${quoteObj.quote}"`;
  document.getElementById("characterName").textContent = `— ${quoteObj.character}`;
  document.getElementById("characterImage").src = quoteObj.image;
}

export function renderError(message) {
  document.getElementById("quoteText").textContent = message;
  document.getElementById("characterName").textContent = "";
  document.getElementById("characterImage").src = "";
}