export function sortMovies(movies, type){
    const sorted = [...movies];

    switch(type){
        case "az":
            return sorted.sort((a,b) => a.title.localeCompare(b.title));

        case "za":
            return sorted.sort((a,b) => b.title.localeCompare(a.title));

        case "popular-high":
            return sorted.sort((a,b) => b.popularity - a.popularity);

        case "popular-low":
            return sorted.sort((a,b) => a.popularity - b.popularity);

        default:
            return movies;
    }

}

export function sortActors(actors, type){
    const sorted = [...actors];

    switch(type){
        case "az":
            return sorted.sort((a,b) => a.name.localeCompare(b.name));

        case "za":
            return sorted.sort((a,b) => b.name.localeCompare(a.name));

        case "popular-high":
            return sorted.sort((a,b) => b.popularity - a.popularity);

        case "popular-low":
            return sorted.sort((a,b) => a.popularity - b.popularity);

        default:
            return actors;
    }

}