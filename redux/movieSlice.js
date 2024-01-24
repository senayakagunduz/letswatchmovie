import { createSlice} from "@reduxjs/toolkit"

const initialState = {
    movieList: [],
    genresList:[],
  };

  const moviesSlice=createSlice({
    name:'movies',
    initialState,
    reducers: {
        getMovies:(state, action)=>{
            state.movieList=action.payload;
        },
        getGenresMovies:(state,action)=>{
            state.genresList=action.payload;
        }
    
    },    
});

export default moviesSlice.reducer;
export const { setMovies, getMovies, getMovie, setMovie } = moviesSlice.actions;
