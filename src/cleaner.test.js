import { cleanMovieData } from './cleaner.js'
import { cleanMovieArray, dirtyMovieObject } from './mock-data.js'

describe('Cleaner function', () => {
  it('the cleaner funcion should return a cleaned object with the right keys', () => {
    const returnedObject = cleanMovieData(dirtyMovieObject);

    expect(returnedObject).toEqual(cleanMovieArray)
  })
})