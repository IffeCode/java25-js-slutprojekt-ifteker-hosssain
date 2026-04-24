import { getMovieDetails } from "./api.js"; 

const imageURL = "https://image.tmdb.org/t/p/w500";

const urlParams = new URLSearchParams(window.location.search);
const movieId = urlParams.get("id");

async function showMovie() {
    try{
        const movie = await getMovieDetails(movieId);

        const container = document.getElementById("movie-detail");

        container.innerHTML = `
        <img src="${imageURL}${movie.poster_path}" />
        <h1>${movie.title}</h1>
        <p><strong>Release:</strong> ${movie.release_date}</p>
        <p><strong>Rating:</strong> ${movie.vote_average}</p>
        <p><strong>Popularity:</strong> ${movie.popularity}</p>
        <p>${movie.overview}</p>
        `;
    } catch (error) {
        console.error(error);
    }
    
}

showMovie();