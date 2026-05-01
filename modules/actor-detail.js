import { getActorDetails, getActorMovies } from "./api.js";
import { renderMovies } from "./renderMovies.js";

const imageURL = "https://image.tmdb.org/t/p/w500";

const urlParams = new URLSearchParams(window.location.search);
const actorId = urlParams.get("id");

async function showActor() {
  try {
    const actor = await getActorDetails(actorId);
    const movies = await getActorMovies(actorId);

    const container = document.getElementById("actor-detail");

    container.innerHTML = `
      <img src="${imageURL}${actor.profile_path}" />
      <h1>${actor.name}</h1>
      <p><strong>Birthday:</strong> ${actor.birthday || "N/A"}</p>
      <p><strong>Popularity:</strong> ${actor.popularity}</p>
      <p>${actor.biography || "No biography available."}</p>
    `;

    const moviesContainer = document.getElementById("actor-movies");
    moviesContainer.innerHTML = "";

    movies.cast.slice(0, 10).forEach(movie => {
      const movieElement = document.createElement("div");
      movieElement.classList.add("movie");

      const img = document.createElement("img");

      const baseImg = "https://image.tmdb.org/t/p/w185";

      if(movie.poster_path){
        img.src = `${baseImg}${movie.poster_path}`;
      } else {
        img.src = "https://via.placeholder.com/185x278?text=No+Image";
      }

      const title = document.createElement("p");
      title.textContent = movie.title;

      movieElement.appendChild(img);
      movieElement.appendChild(title);

      const base = window.location.pathname.includes("/html/") ? "../" : "./";

      movieElement.addEventListener("click", () => {
        window.location.href = `${base}html/movie-detail.html?id=${movie.id}`;
      });

      moviesContainer.appendChild(movieElement);
    });

  } catch (error) {
    console.error(error);
  }
}

showActor();