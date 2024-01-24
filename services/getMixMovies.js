
export const getMixMovies=async()=>{
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYzA4N2ZiNTdiNWUxMjgzMmFkYjdhMzY5YzEzYTJjZSIsInN1YiI6IjYyMzRhNGQ0ZDdjZDA2MDAxY2RiMDEyYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.T3ktH2EHJ_SwM0hzVpzXIRZ1HSYIsOBpsNG8_MHUfI8'
        }
      };
      
      try {
        const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options);
        const data = await response.json();
        return data.results; 
      } catch (err) {
        console.error(err);
        throw err; 
      }
}






// export const getMixMovies = async () => {
//     try {
//         const resp = await axios(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.API_KEY}&language=en-US&page=1`);
//         const data = await resp.json();
//         return data;
//     } catch (error) {
//         console.log(error);
//         throw error;
//     }
// };
