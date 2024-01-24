import {createSlice} from "@reduxjs/toolkit"

export const genreSlice=createSlice({
    name:"searchGenre",
    initialState:{
        genre:[],
        
    },
    reducers:{
       setGenre:(state,action)=>{
        state.setGenre=action.payload
       } 
    }
})
export const {setGenre}=genreSlice.actions;
export default genreSlice.reducer;