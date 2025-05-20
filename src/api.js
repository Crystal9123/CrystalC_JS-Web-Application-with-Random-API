export async function fetchSimpsonsQuote() {
  const url = "https://thesimpsonsquoteapi.glitch.me/quotes";

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("Failed to fetch quote");
    const data = await res.json();
    return data[0]; // returns an object with quote, character and image
  } catch (err) {
    throw new Error("Something went wrong while fetching data.");
  }
}