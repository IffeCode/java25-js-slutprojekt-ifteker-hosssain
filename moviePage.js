import { getPopularMovies } from "./modules/api.js";
import { renderMovies } from "./modules/renderMovies.js";
import { movieSearch } from "./modules/search.js";
import { sortMovies } from "./modules/sort.js";

let allMovies = [];
let currentSort = "popular-high";

async function startMovies() {

  if(!document.getElementById("movies-list")) return;

  const data = await getPopularMovies();
  allMovies = data.results;

  renderMovies(allMovies, "movies-list");

  const sortSelect = document.getElementById("sortSelect");

  if(sortSelect){
    sortSelect.addEventListener("change", (e) => {
      currentSort = e.target.value;
      const sorted = sortMovies(allMovies, currentSort);
      renderMovies(sorted, "movies-list");
    });
  }

  movieSearch((movies) => {
    allMovies = movies;
  }, () => currentSort);
}

startMovies();