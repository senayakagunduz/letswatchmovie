"use client"
import Carousel from "@/components/Carousel";
import MovieCard from "@/components/MovieCard";
import { getMixMovies } from "@/services/getMixMovies";

import { useDispatch, useSelector } from "react-redux";
import {  getMovies } from "@/redux/movieSlice";
import React, { useEffect, useState} from 'react'
import { getMoviesByGenre } from "@/services/getMoviesByGenre";

const Home =  ({searchParams}) => {
    const [genresList,setGenresList] = useState([])
    console.log(searchParams.genre,"searchParams.genre")
    console.log(genresList,"genresList")
    const dispatch = useDispatch();
    
    const movies = useSelector((state) => state.moviesStore.movieList)
     console.log(movies,"movieList")

    useEffect(() => {
        const loadData=async()=>{
            try {
               const movieMix=await getMixMovies();
               dispatch(getMovies(movieMix));
               const genresMovies=await getMoviesByGenre(searchParams.genre)
               setGenresList(genresMovies);
            } catch (error) {
                console.log(error)
            }
        }
        loadData()
    }, [dispatch,getMixMovies])

    return (
        <div className="bg-slate-900">
            <div className="flex items-center justify-center flex-column">
                {
                    searchParams.genre ? null : <Carousel />
                }
            </div>

            <div className="container flex flex-col gap-6 py-[4rem] mx-auto">
                <h2 className="text-yellow-300 text-2xl font-semibold pl-8" >{searchParams?.genre?.toUpperCase().replace(/_/g, ' ')}</h2>
                <div className="flex justify-center gap-10 flex-wrap relative">
                    {
                       !searchParams.genre ? movies?.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    )) : genresList?.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))

                    //   movies.map((movie)=>!searchParams.genre && <MovieCard key={movie.id} movie={movie}/>)
                    }
                    
                </div>
            </div>
        </div>
    )
}
export default Home

  // movies?.map((movie) => (
                        //     <MovieCard key={movie.id} movie={movie} />))
                        // !searchParams.genre ? movies?.map((movie) => (
                            // <MovieCard key={movie.id} movie={movie} />))
                            // :(<MovieCard key={movies.id} movie={movies} />) 
 // !searchParams.genre ? movies?.map((movie) => (
                        //     <MovieCard key={movie.id} movie={movie} />
                        // )) : searchResult?.map((movie) => (
                        //     <MovieCard key={movie.id} movie={movie} />
                        // ))
// const loadData = async (searchParams) => {
//     getMixMovies()
//         .then((movieMix) => {
//             dispatch(setMovies(movieMix));
//             console.log(movieMix, "movieMix");
//         })
//         .catch((error) => {
//             console.log(error)
//         })
//     getMoviesByGenre(searchParams)
//         .then((searchParams)=>{
//             dispatch(setMovie(searchParams));
//         })
//         .catch((error)=>{
//             console.log(error)
//         })
// }
{/* <div className="bg-black flex items-center justify-center">
            <Carousel/>
        </div>
        <Spacer background="black" />
        <div className="bg-black flex-column ">
            <div className="flex items-center justify-start px-40 pb-5">
                <span className="text-3xl text-yellow-500 font-bold">Today</span>
            </div>
            <div className="flex items-center justify-center">
               <Movie/>
            </div>
        </div> */}
{/* <Spacer background="black"/> */ }

// const getMixMovies = async (genre) => {
//     const resp = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.API_KEY}&language=en-US&page=1`)
//     const data = await resp.json()
//     return data;
// }

// const getMoviesByGenre = async (genre) => {
//     const resp = await fetch(`https://api.themoviedb.org/3/movie/${genre}?api_key=${process.env.API_KEY}&language=en-US&page=1`, {
//         next: {
//             revalidate: 60
//         }
//     })
//     const data = await resp.json()
//     return data;
// }