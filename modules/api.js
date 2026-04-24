import { API_KEY } from "./config.js";

export async function getPopularMovies() {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
  );

  if(response.ok){
    const data = await response.json();
    return data;
  } else{
    if(response.status === 404){
        throw new Error ("Movies not found!")
    } else {
        throw new Error ("Something went wrong!")
    }
  }
  
}

export async function getRankedMovies() {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
  );
    if(response.ok){
    const data = await response.json();
    return data;
  } else{
    if(response.status === 404){
        throw new Error ("Movies not found!")
    } else {
        throw new Error ("Something went wrong!")
    }
  }
}

export async function searchMovies(query) {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1`
  );
    if(response.ok){
    const data = await response.json();
    return data;
  } else{
    if(response.status === 404){
        throw new Error ("Movies not found!")
    } else {
        throw new Error ("Something went wrong!")
    }
  }
}

export async function getMovieDetails(id) {
    const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
    );
    if(response.ok){
    const data = await response.json();
    return data;
  } else{
    if(response.status === 404){
        throw new Error ("Movies not found!")
    } else {
        throw new Error ("Something went wrong!")
    }
  }
}

export async function getMovieCredits(id) {
    const response = await fetch (
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
    );
    if(response.ok){
        const data = await response.json();
        return data; 
    } else{
    if(response.status === 404){
        throw new Error ("Credits not found!")
    } else {
        throw new Error ("Something went wrong!")
    }
  }
}