
const imageURL = "https://image.tmdb.org/t/p/w500";

function getStars(rating) {
  const stars = Math.round(rating / 2);
  return "★".repeat(stars) + "☆".repeat(5 - stars);
}


export function renderMovies(movies, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";

  movies.slice(0, 10).forEach(movie => {
    const el = document.createElement("div");
    el.classList.add("movie");

    el.innerHTML = `
      <img src="${imageURL}${movie.poster_path}" />
      <h3>${movie.title}</h3>
      <p>${movie.release_date}</p>
      <p>★ ${movie.vote_average}</p>
      <p>${getStars(movie.vote_average)}</p>
    `;

    container.appendChild(el);
  });

}