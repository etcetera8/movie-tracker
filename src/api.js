import {key} from './apiKey';
//import { getAllUsers } from '../../movietracker-backend/routes/queries.js'

export const apiMovieData = async (url) => {
 const response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${key}`);
 const data = await response.json();

 return data;
}

export const getAllUsers = async () => {
    const response = await fetch('http://localhost:3000/api/users', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const allUsers = await response.json()

    return allUsers.data;
}

export const validateUser = async (email, password) => {
  try {
    const response = await fetch('http://localhost:3000/api/users', {
      method: 'POST',
      body: JSON.stringify({email: email, password: password}),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const validation = await response.json()

    return validation

  } catch(error) {
    console.log('error')
    return {status: 'fail'}
  }
}

export const signUpUser = async (email, password, name ) => {
  const response = await fetch('http://localhost:3000/api/users/new', {
    method: 'POST',
    body: JSON.stringify({email: email, password: password, name: name}),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  console.log(response);
}