export const cleanMovieData = (data) => {
  const {results} = data;
  console.log('results, ', results)
  const movieArray = results.map(async (movie) => {
    const {
      id, 
      title, 
      vote_count, 
      vote_average, 
      overview, 
      poster_path, 
      release_date
    } = movie;
    const posterImage = `https://image.tmdb.org/t/p/w500/${poster_path}`
    //${movie_id}, ${user_id}, ${title}, ${poster_path}, ${release_date}, ${vote_average}, ${overview}
    return {
      id,
      title,
      vote_average,
      vote_count,
      overview,
      release_date,
      posterImage
    }
  });

  return Promise.all(movieArray);
 }