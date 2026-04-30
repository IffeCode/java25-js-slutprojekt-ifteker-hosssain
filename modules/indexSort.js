import { getPopularMovies, getRankedMovies, getPopularActors } from "./api.js";
import { renderMovies } from "./renderMovies.js";
import { renderActors } from "./renderActors.js";
import { sortMovies, sortActors } from "./sort.js";


let popularMovies = [];
let rankedMovies = [];
let actors = [];

export async function IndexSort(){

    const popular = await getPopularMovies();
    const ranked = await getRankedMovies();
    const actor = await getPopularActors();

    popularMovies = popular.results;
    rankedMovies = ranked.results;
    actors = actor.results;

    renderMovies(popularMovies, "popular-movies");
    renderMovies(rankedMovies, "ranked-movies");
    renderActors(actors, "popular-actors");

    const sortMoviesSelect = document.getElementById("sortPopularMovies");

    if(sortMoviesSelect){
        sortMoviesSelect.addEventListener("change", (e) => {
            const sorted = sortMovies(popularMovies, e.target.value);
            renderMovies(sorted, "popular-movies");
        })
    }

    const sortRankedSelect = document.getElementById("sortRankedMovies");

    if(sortRankedSelect){
        sortRankedSelect.addEventListener("change", (e) => {
            const sorted = sortMovies(rankedMovies, e.target.value);
            renderMovies(sorted, "ranked-movies");
        })
    }

    const sortActorsSelect = document.getElementById("sortActors");

    if(sortActorsSelect){
        sortActorsSelect.addEventListener("change", (e) => {
            const sorted = sortActors(actors, e.target.value);
            renderActors(sorted, "popular-actors");
        })
    }
    

    // const [popular, ranked, actor] = await Promise.all([
    //     getPopularMovies(), getRankedMovies(), getPopularActors()
    // ]);

    // popularMovies = popular.results;
    // rankedMovies = ranked.results;
    // actors = actor.results;

    // renderMovies(popularMovies, "popular-movies");
    // renderMovies(rankedMovies, "ranked-movies");
    // renderActors(actors, "popular-actors");


    // setupSort("sortPopularMovies", popularMovies, renderMovies, "popular-movies", sortMovies);

    // setupSort("sortRankedMovies", rankedMovies, renderMovies, "ranked-movies", true);

    // setupSort("sortActors", actors, renderActors, "popular-actors", sortActors);

}