const API_KEY = "16b1b0496a6aa7735694d925031b6b34";

async function fetchPopularMovies(){
    try{
        const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
        
        const data = await response.json();

        const movieListPopular = document.getElementById("movies");

        const imageURL = "https://image.tmdb.org/t/p/w500";

        // if (!data.results){
        //     console.error("Ingen results hittades:", data);
        //     return;
        // }

        data.results.forEach(movie => {
            const movieElement = document.createElement("div");
            movieElement.innerHTML = `
            <img src = "${imageURL}${movie.poster_path}" alt="${movie.title}" />
            <h3>${movie.title}</h3>
            <p>${movie.vote_average}</p>
            `;
            movieListPopular.append(movieElement);
        });

        console.log(data);
    } catch (error){
        console.error(error);
    }
}

fetchPopularMovies();