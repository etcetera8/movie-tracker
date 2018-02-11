import { apiMovieData, getAllUsers } from './api';
import {key} from './apiKey';
import { cleanMovieArray } from './mock-data.js'

describe('api calls', () => {
  
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => 
      Promise.resolve({
        status: 200,
        json: () => Promise.resolve(cleanMovieArray)
      }));
  });

  it('should call the data with the correct params', () => {
    const url=`https://api.themoviedb.org/3/movie/upcoming?api_key=${key}`;

    apiMovieData(url);
    expect(window.fetch).toHaveBeenCalledWith(url);
  });

  it('the api movieData returns data object once promise resolves', async () => {
    const actual = await apiMovieData('');
    expect(actual).toEqual(cleanMovieArray);
  });

  it('should catch errors', async () => {
    window.fetch = jest.fn().mockImplementation(() => 
      Promise.reject({
        status: 404,
        json: () => Promise.reject("Error")
      }));
    const error = await apiMovieData();

    expect(error).toEqual("Error");
  });

  
  describe('POST api fetches', () => {

    it('the getAllUsers makes a fetch call', async () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return new Promise((resolve, reject) => {
          resolve({
            response: {results: []}
          });
        });
      });
      getAllUsers()
      expect(window.fetch).toHaveBeenCalled();
      //expect(getAllUsers()).toEqual({})
    }) 

    it('the validateUsers call should POST an object of one user with name and email to login', () => {


    })

    it('the signUpUser call should POST an object of one user with name, email, and password', () => {


    })



  })

})