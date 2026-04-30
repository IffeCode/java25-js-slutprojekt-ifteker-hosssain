import { searchMovies, searchActors } from "./api.js";
import { renderMovies } from "./renderMovies.js";
import { renderActors } from "./renderActors.js";
import { sortActors, sortMovies } from "./sort.js";


export function actorSearch(setActors, getSortedActors) {
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

    setActors(data.results);

    const sorted = getSortedActors()
    ? sortActors(data.results, getSortedActors())
    : data.results;

    renderActors(sorted, "popular-actors");

  });

  input.addEventListener("keyup", (e) => {
    if(e.key === "Enter")btn.click();
  });
}

export function movieSearch(setMovies, getSort) {
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

    setMovies(data.results);

    const sorted = getSort()
    ? sortMovies(data.results, getSort())
    : data.results;

    renderMovies(sorted, "movies-list");
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
