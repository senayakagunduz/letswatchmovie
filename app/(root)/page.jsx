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

                    }      
                </div>
            </div>
        </div>
    )
}
export default Home
 // console.log(searchParams.genre,"searchParams.genre")
 //console.log(genresList,"genresList")