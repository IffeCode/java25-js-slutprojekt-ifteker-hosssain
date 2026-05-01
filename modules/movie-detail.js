import { getMovieDetails, getMovieCredits } from "./api.js"; 
import { getStars } from "./renderMovies.js";


const imageURL = "https://image.tmdb.org/t/p/w500";

const urlParams = new URLSearchParams(window.location.search);
const movieId = urlParams.get("id");

async function showMovie() {
    try{
        const movie = await getMovieDetails(movieId);
        const credits = await getMovieCredits(movieId);

        const container = document.getElementById("movie-detail");

        container.innerHTML = `
            <img src="${movie.poster_path ? imageURL + movie.poster_path : "https://via.placeholder.com/500"}" />
            <h1>${movie.title || "No title"}</h1>
            <p><strong>Release:</strong> ${movie.release_date || "N/A"}</p>
            <p><strong>Rating:</strong> ${movie.vote_average ?? "N/A"} ${getStars(movie.vote_average || 0)}</p>
            <p>${movie.overview || "No overview available."}</p>
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

            const base = window.location.pathname.includes("/html/") ? "../" : "./";
            
            actorElement.addEventListener("click", () => {
            window.location.href = `${base}html/actor-detail.html?id=${actor.id}`;
        });

            castContainer.appendChild(actorElement)
            


        });




    } catch (error) {
        console.error(error);
    }
    
}

showMovie();