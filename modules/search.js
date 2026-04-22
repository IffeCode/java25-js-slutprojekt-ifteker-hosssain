import { searchMovies } from "./api.js";
import { renderMovies } from "./render.js";

export function initSearch() {
  const input = document.getElementById("searchInput");
  const btn = document.getElementById("searchBtn");

  btn.addEventListener("click", async () => {
    const data = await searchMovies(input.value);
    renderMovies(data.results, "movies-list");
  });

  input.addEventListener("keyup", (e) => {
    if (e.key === "Enter") btn.click();
  });
}