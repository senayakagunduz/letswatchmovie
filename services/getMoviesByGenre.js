
export const getMoviesByGenre=async(genre)=>{
  const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYzA4N2ZiNTdiNWUxMjgzMmFkYjdhMzY5YzEzYTJjZSIsInN1YiI6IjYyMzRhNGQ0ZDdjZDA2MDAxY2RiMDEyYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.T3ktH2EHJ_SwM0hzVpzXIRZ1HSYIsOBpsNG8_MHUfI8'
      }
    };
    
    fetch(`https://api.themoviedb.org/3/movie/${genre}?language=en-US&page=1`, options)
  .then(response => response.json())
  .then(data => {
    return data.results,
    // Handle the data or return it as needed
    console.log(data);
  })
  .catch(err => console.error(err));
}

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