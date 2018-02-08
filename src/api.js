import {key} from './apiKey';
//import { getAllUsers } from '../../movietracker-backend/routes/queries.js'

export const apiMovieData = async (url) => {
 const response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${key}`);
 const data = await response.json();

 return data;
}

export const validateUser = async (data) => {
    //console.log(getAllUsers);
    const response = await fetch('http://localhost:3000/api/users', {
      method: 'GET',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    console.log(response);
    return response
}