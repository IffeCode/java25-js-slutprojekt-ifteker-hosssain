import { getMovieDetails, getMovieCredits } from "./api.js"; 
import { getStars } from "./render.js";

const imageURL = "https://image.tmdb.org/t/p/w500";

const urlParams = new URLSearchParams(window.location.search);
const movieId = urlParams.get("id");

async function showMovie() {
    try{
        const movie = await getMovieDetails(movieId);
        const credits = await getMovieCredits(movieId);

        const container = document.getElementById("movie-detail");

        container.innerHTML = `
        <img src="${imageURL}${movie.poster_path}" />
        <h1>${movie.title}</h1>
        <p><strong>Release:</strong> ${movie.release_date}</p>
        <p><strong>Rating:</strong> ${movie.vote_average} ${getStars(movie.vote_average)}</p>
        <p>${movie.overview}</p>
        `;

        const castContainer = document.getElementById("cast-container");

        castContainer.innerHTML ="";

        credits.cast.slice(0,10)
        .forEach(actor => {
            const actorElement = document.createElement("div");
            actorElement.classList.add("actor");

            const img = document.createElement("img");
            
            const baseImg = "https://image.tmdb.org/t/p/w185";

            if(actor.profile_path) {
                img.src = `${baseImg}${actor.profile_path}`;
            }else {
                img.src = "https://via.placeholder.com/185x278?text=No+Image";
            }


            const name = document.createElement("p");
            name.textContent = actor.name;

            actorElement.appendChild(img);
            actorElement.appendChild(name);

            castContainer.appendChild(actorElement)


        });




    } catch (error) {
        console.error(error);
    }
    
}

showMovie();