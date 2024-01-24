
import MovieCard from '@/components/MovieCard';
import React from 'react'

const SearchMovies = async({params}) => {
    const keyword=params.keyword;
    console.log(keyword,"keyword")
    const resp = await fetch(`https://api.themoviedb.org/3/search/movie?query=${keyword}&api_key=2c087fb57b5e12832adb7a369c13a2ce`)

    const data=await resp.json()
    console.log(data.results,"data")
  return (
    <div className='flex flex-col gap-[5rem] h-full bg-zinc-200 py-[4rem] mx-auto'>
        <div className='flex justify-center gap-[2.5rem] flex-wrap'>
            {
                !data?.results ? 
                <h2 className='text-4xl text-center underline underline-offset-8 tracking-widest  font-semibold text-yellow-600 '>Movie not found</h2>
                : 
                data?.results?.map((movie,index)=>(
                    <MovieCard key={index} movie={movie}/>
                ))
            }

        </div>
    </div>
  )
}

export default SearchMovies