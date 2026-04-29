import { renderMovies } from "./modules/renderMovies.js";
import { renderActors } from "./modules/renderActors.js";
import { getPopularActors, getPopularMovies, getRankedMovies } from "./modules/api.js";
import { movieSearch, actorSearch } from "./modules/search.js";

async function start() {
 if(document.getElementById("popular-movies")) {
    const popular = await getPopularMovies();
    renderMovies(popular.results, "popular-movies");
    }
 if(document.getElementById("ranked-movies")){
    const ranked = await getRankedMovies();
    renderMovies(ranked.results, "ranked-movies");
    }

 if(document.getElementById("movies-list")){
    const allMovies = await getPopularMovies();
    renderMovies(allMovies.results, "movies-list");
 }

 if(document.getElementById("popular-actors")){
    const actors = await getPopularActors();
    renderActors(actors.results, "popular-actors");
 }

  movieSearch();
  actorSearch();
}



start();

//  const form = document.getElementById("searchForm");

//  if(form){
//     form.addEventListener("submit", (e) => {
//         e.preventDefault();

//         const query = document.getElementById("searchInput").value;

//         searchAll(query);
//     })
//  }