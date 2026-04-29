import { searchMovies, searchActors } from "./api.js";
import { renderMovies } from "./renderMovies.js";
import { renderActors } from "./renderActors.js";

export async function searchAll(query, searchType) {
    const data = await searchMovies(query);
    renderMovies(data.results, "movies-list");


if(searchType === "movies"){
    const data = await searchMovies(query);
    renderMovies(data.results, "movies-list");
}

if(searchType === "actors"){
    const data = await searchActors(query);
    renderActors(data.results, "actors-list");
}

if(searchType === "all"){
    const movies = await searchMovies(query);
    const actors = await searchActors(query);


renderMovies(movies.results, "movies-list");
renderActors(actors.results, "actors-list");
}
}