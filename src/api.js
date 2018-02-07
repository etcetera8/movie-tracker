import {key} from './apiKey';

export const apiMovieData = async (url) => {
 const response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${key}`);
 const data = await response.json();

 return data;
}