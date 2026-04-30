import { getPopularActors } from "./modules/api.js";
import { renderActors } from "./modules/renderActors.js";
import { actorSearch } from "./modules/search.js";
import { sortActors } from "./modules/sort.js";

let allActors = [];
let currentSort = "popular-high";

async function startActors() {

  const container = document.getElementById("popular-actors");
  if(!container) return;

  const data = await getPopularActors();
  allActors = data.results;

  renderActors(allActors, "popular-actors");

  const sortSelect = document.getElementById("sortActorsSelect");

  if(sortSelect){
    sortSelect.addEventListener("change", (e) => {
      currentSort = e.target.value;
      const sorted = sortActors(allActors, currentSort);
      renderActors(sorted, "popular-actors");
    });
  }

  actorSearch((actors) => {
    allActors = actors;
    renderActors(allActors, "popular-actors");
  }, () => currentSort);
}

startActors();