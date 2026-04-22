import { renderMovies } from "./modules/render.js";
import { getPopularMovies, getRankedMovies } from "./modules/api.js";
import { initSearch } from "./modules/search.js";

async function init() {
 if(document.getElementById("popular-movies")) {
    const popular = await getPopularMovies();
    renderMovies(popular.results, "popular-movies");
    }
 if(document.getElementById("ranked-movies")){
    const ranked = await getRankedMovies();
    renderMovies(ranked.results, "ranked-movies");
    }

 if(document.getElementById("movies-list")){
    const allMovies = await getPopularMovies();
    renderMovies(allMovies.results, "movies-list");
 }   

  initSearch();
}

init();

// const API_KEY = "16b1b0496a6aa7735694d925031b6b34";

// const imageURL = "https://image.tmdb.org/t/p/w500";

// function getStars(rating){
//     const stars = Math.round(rating / 2); 

//     return "★".repeat(stars) + "☆".repeat(5 - stars);
// }


// async function fetchPopularMovies(){
//     try{
//         const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
        
//         const data = await response.json();

//         const movieListPopular = document.getElementById("popular-movies");


//         // if (!data.results){
//         //     console.error("Ingen results hittades:", data);
//         //     return;
//         // }

//         data.results
//         .slice(0,10)
//         .forEach(movie => {
//             const movieElement = document.createElement("div");

//             movieElement.classList.add("movie");

//             movieElement.innerHTML = `
//             <img src = "${imageURL}${movie.poster_path}" alt="${movie.title}" />
//             <h3>${movie.title}</h3>
//             <p>${movie.release_date}</p>
//             <p>★${movie.vote_average}</p>
//             <p>${getStars(movie.vote_average)}</p>
//             `;
//             movieListPopular.append(movieElement);
//         });

//         console.log(data);
//     } catch (error){
//         console.error(error);
//     }
// }

// async function fetchRankedMovies(){
//     try{
//         const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`);

//         const data = await response.json();

//         const movieListRanked = document.getElementById("ranked-movies");

//                 data.results
//         .slice(0,10)
//         .forEach(movie => {
//             const movieElement = document.createElement("div");

//             movieElement.classList.add("movie");

//             movieElement.innerHTML = `
//             <img src = "${imageURL}${movie.poster_path}" alt="${movie.title}" />
//             <h3>${movie.title}</h3>
//             <p>${movie.release_date}</p>
//             <p>★${movie.vote_average}</p>
//             <p>${getStars(movie.vote_average)}</p>
//             `;
//             movieListRanked.append(movieElement);
//         });
//         console.log(data);

//     } catch (error){
//         console.error(error);
//     }
// }

// async function allMovies(){
//     try{
//         const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`)
        
//         const data = await response.json();

//         const allMoviesList = document.getElementById("movies-list");

//         data.results.forEach(movie => {
//             const movieElement = document.createElement("div");
//             movieElement.classList.add("movie");

//             movieElement.innerHTML = `
//             <img src = "${imageURL}${movie.poster_path}" alt="${movie.title}" />
//             <h3>${movie.title}</h3>
//             <p>${movie.release_date}</p>
//             <p>★${movie.vote_average}</p>
//             <p>${getStars(movie.vote_average)}</p>
//             `;
//             allMoviesList.append(movieElement);
//         });

//         console.log(data);

//     }catch (error){
//         console.error(error);
//     }
    
// }

// const searchInput = document.getElementById("searchInput");
// const searchBtn = document.getElementById("searchBtn");

// searchBtn.addEventListener("click", () => {const query = searchInput.value;

//     if(query.trim() !== ""){
//         searchMovie(query);
//     }
// });

// searchInput.addEventListener("keyup", (e) => {
//     if(e.key === "Enter"){
//         searchBtn.click();
//     }
// });

// async function searchMovie(query) {
//     try{
//         const response = await fetch (`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&include_adult=false&language=en-US&query=${query}&page=1`)

//         const data = await response.json();

//         const movieList = document.getElementById("movies-list");

//         movieList.innerHTML = "";

//         data.results.forEach(movie => {
//         const movieElement = document.createElement("div");
//         movieElement.classList.add("movie");

//         movieElement.innerHTML = `
//             <img src="${imageURL}${movie.poster_path}" alt="${movie.title}" />
//             <h3>${movie.title}</h3>
//             <p>${movie.release_date}</p>
//             <p>★${movie.vote_average}</p>
//             <p>${getStars(movie.vote_average)}</p>
//             <p>${movie.overview}</p>
//         `;

//       movieList.appendChild(movieElement);
//     });

//     }catch (error){
//         console.error(error);
//     }
    
// }

// fetchPopularMovies();
// fetchRankedMovies();
// allMovies();