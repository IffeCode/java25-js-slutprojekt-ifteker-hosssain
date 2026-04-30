import { renderMovies } from "./modules/renderMovies.js";
import { renderActors } from "./modules/renderActors.js";
import { getPopularActors, getPopularMovies, getRankedMovies } from "./modules/api.js";

// let allMovies = [];
// let currentSort = "popular-high";

// let allActors = [];
// let currentActorSort = "popular-high";

async function start() {
    
//  if(document.getElementById("movies-list")){
//     const data = await getPopularMovies();
//     allMovies = data.results;
//     renderMovies(allMovies, "movies-list");
    
//     const sortSelect = document.getElementById("sortSelect");

//     if(sortSelect){
//         sortSelect.addEventListener("change", (e) => {
//             currentSort = e.target.value;

//             const sorted = sortMovies(allMovies, currentSort);
//             renderMovies(sorted, "movies-list");
//         });
//     }
//     movieSearch((movies) => {
//         allMovies = movies;
//     }, () => currentSort);
//  }

//   if(document.getElementById("popular-actors")){
//     const data = await getPopularActors();
//     allActors = data.results;

//     renderActors(allActors, "popular-actors");
    
//     const sortSelect = document.getElementById("sortActorsSelect");

//     if(sortSelect){
//         sortSelect.addEventListener("change", (e) => {
//             currentActorSort = e.target.value;

//             const sorted = sortActors(allActors, currentActorSort);
//             renderActors(sorted, "popular-actors");
//         });
//     }
//     actorSearch((actors) => {
//         allActors = actors;
//         renderActors(allActors, "popular-actors");
//     }, () => currentActorSort);
//  }

 if(document.getElementById("popular-movies")) {
    const popular = await getPopularMovies();
    renderMovies(popular.results, "popular-movies");
    }
 if(document.getElementById("ranked-movies")){
    const ranked = await getRankedMovies();
    renderMovies(ranked.results, "ranked-movies");
    }

//  if(document.getElementById("movies-list")){
//     const allMovies = await getPopularMovies();
//     renderMovies(allMovies.results, "movies-list");
//  }

 if(document.getElementById("popular-actors")){
    const actors = await getPopularActors();
    renderActors(actors.results, "popular-actors");
 }

//  if(document.getElementById("movies-list")){
   
//     movieSearch((movies) => {
//         allMovies = movies;
//     });
//  }

//  if(document.getElementById("actors-list")){
    
//     actorSearch();
//  }
  
  
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