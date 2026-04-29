import { searchMovies, searchActors } from "./api.js";
import { renderMovies } from "./renderMovies.js";
import { renderActors } from "./renderActors.js";


export function actorSearch() {
  const input = document.getElementById("searchInput");
  const btn = document.getElementById("searchBtn");


  btn.addEventListener("click", async() => {
    const query = input.value.trim();

    if(!query){
      showError("Need to write something!");
      return;
    }

    const data = await searchActors(query);

    if(!data.results || data.results.length === 0){
      showError("No actors were found! Try typing something else!");
      return;
    }

    renderActors(data.results, "popular-actors");

  });

  input.addEventListener("keyup", (e) => {
    if(e.key === "Enter")btn.click();
  });
}

export function movieSearch() {
  const input = document.getElementById("searchInput");
  const btn = document.getElementById("searchBtn");

  btn.addEventListener("click", async () => {

    const query = input.value.trim();

    if(!query){
      showError("Need to write something!");
      return;
    }

    const data = await searchMovies(input.value);

    if(!data.results || data.results.length === 0){
      showError("No movies were found! Try typing something else!");
      return;
    }

    renderMovies(data.results, "movies-list");
  });

  input.addEventListener("keyup", (e) => {
    if (e.key === "Enter") btn.click();
  });
}

function showError(message){
  let errorEl = document.getElementById("search-error");


  if(!errorEl){
    errorEl = document.createElement("p");
    errorEl.id = "search-error";

    const input = document.getElementById("searchInput");
    input.parentElement.appendChild(errorEl);
  }

  errorEl.textContent = message;

}
