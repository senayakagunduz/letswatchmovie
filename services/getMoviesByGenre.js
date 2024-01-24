export const getMoviesByGenre = async (genre) => {
  console.log(genre, "genre");
  const options = {
      method: 'GET',
      headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYzA4N2ZiNTdiNWUxMjgzMmFkYjdhMzY5YzEzYTJjZSIsInN1YiI6IjYyMzRhNGQ0ZDdjZDA2MDAxY2RiMDEyYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.T3ktH2EHJ_SwM0hzVpzXIRZ1HSYIsOBpsNG8_MHUfI8'
      }
  };

  try {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${genre}?language=en-US&page=1`, options);
      const data = await response.json();

      if (data.results) {
          return data.results;
      } else {
          console.error('Unexpected API response format:', data);
          return [];
      }
  } catch (err) {
      console.error(err);
      throw err;
  }
};
// export const getMoviesByGenre=async(genre)=>{
//   console.log(genre,"genre")
//   const options = {
//       method: 'GET',
//       headers: {
//         accept: 'application/json',
//         Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYzA4N2ZiNTdiNWUxMjgzMmFkYjdhMzY5YzEzYTJjZSIsInN1YiI6IjYyMzRhNGQ0ZDdjZDA2MDAxY2RiMDEyYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.T3ktH2EHJ_SwM0hzVpzXIRZ1HSYIsOBpsNG8_MHUfI8'
//       }
//     };
    
//  fetch(`https://api.themoviedb.org/3/movie/${genre}?language=en-US&page=1`, options)
//   .then(response => response.json())
//   .then(data => {
//     return data.results,
//     console.log(data.results);
//   })
//   .catch(err => console.error(err));
// }

//fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=${genre}&language=en-US&page=1`, options)
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYzA4N2ZiNTdiNWUxMjgzMmFkYjdhMzY5YzEzYTJjZSIsInN1YiI6IjYyMzRhNGQ0ZDdjZDA2MDAxY2RiMDEyYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.T3ktH2EHJ_SwM0hzVpzXIRZ1HSYIsOBpsNG8_MHUfI8'
//   }
// };
// try {
//   const response=await fetch(`https://api.themoviedb.org/3/movie/${genre}?language=en-US&page=1`, options);
//   const data=await response.json();
//   return data.results
 
// } catch (error) {
//   console.log(error)
//   throw error
// }




// try {
//     const resp = await axios(`https://api.themoviedb.org/3/movie/${genre}?api_key=${process.env.API_KEY}&language=en-US&page=1`);
//     const data = await resp.json();
//     return data;
// } catch (error) {
//     console.log(error);
// }