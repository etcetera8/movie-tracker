import { cleanMovieData } from './cleaner.js'
import { cleanMovieArray, dirtyMovieObject } from './mock-data.js'

describe('Cleaner function', () => {
  it('the cleaner funcion should return a formatted object', () => {
    const returnedObject = cleanMovieData(dirtyMovieObject);

    expect(returnedObject).toEqual(cleanMovieArray)
  })
})