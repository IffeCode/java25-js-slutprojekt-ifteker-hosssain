
const imageURL = "https://image.tmdb.org/t/p/w500";

export function getStars(rating) {
  const stars = Math.round(rating / 2);
  return "★".repeat(stars) + "☆".repeat(5 - stars);
}

// export function renderActors(actors, containerId){
//     const container = document.getElementById(containerId);
//     container.innerHTML = "";

//     actors.slice(0,10).forEach(actor => {
//         const actorElement = document.createElement("div");
//         actorElement.classList.add("actor");

//          const img = actor.profile_path
//     ? `https://image.tmdb.org/t/p/w185${actor.profile_path}`
//     : "https://via.placeholder.com/185x278?text=No+Image";

//   actorElement.innerHTML = `
//     <img src="${img}" />
//     <h3>${actor.name}</h3>
//     <p>Known for: ${actor.known_for_department}</p>
//   `;

//   actorElement.addEventListener("click", () => {
//     window.location.href = `/html/actor-detail.html?id=${actor.id}`;
//   });

//   container.appendChild(actorElement);
//     });
// }


export function renderMovies(movies, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";

  movies.slice(0, 10).forEach(movie => {
    const movieElement = document.createElement("div");
    movieElement.classList.add("movie");

    movieElement.innerHTML = `
      <img src="${imageURL}${movie.poster_path}" />
      <h3>${movie.title}</h3>
      <p>${movie.release_date}</p>
      <p>★ ${movie.vote_average}</p>
      <p>${getStars(movie.vote_average)}</p>
    `;

    movieElement.addEventListener("click", () => {
        //root-relative paths
        window.location.href = `/html/movie-detail.html?id=${movie.id}`;
    });

    container.appendChild(movieElement);
  });

}