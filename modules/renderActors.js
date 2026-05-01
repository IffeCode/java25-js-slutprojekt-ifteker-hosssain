
const imageURL = "https://image.tmdb.org/t/p/w500";


export function renderActors(actors, containerId){
    const container = document.getElementById(containerId);
    container.innerHTML = "";

    actors.slice(0,10).forEach(actor => {
        const actorElement = document.createElement("div");
        actorElement.classList.add("movie");

         const img = actor.profile_path
    ? `https://image.tmdb.org/t/p/w185${actor.profile_path}`
    : "https://via.placeholder.com/185x278?text=No+Image";

  actorElement.innerHTML = `
    <img src="${img}" />
    <h3>${actor.name}</h3>
    <p>Known for: ${actor.known_for_department}</p>
  `;

  const base = window.location.pathname.includes("/html/") ? "../" : "./";


  actorElement.addEventListener("click", () => {
    window.location.href = `${base}html/actor-detail.html?id=${actor.id}`;
  });

  container.appendChild(actorElement);
    });
}