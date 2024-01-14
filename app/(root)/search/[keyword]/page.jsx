import MovieCard from '@/components/MovieCard';
import React from 'react'

const SearchMovies = async({params}) => {
    const keyword=params.keyword;
    console.log(keyword,"keyword")
    const resp = await fetch(`https://api.themoviedb.org/3/movie?api_key=2c087fb57b5e12832adb7a369c13a2ce&query=${keyword}&language=en-US&page=1`)

    const data=await resp.json()
    console.log(data.results,"data")
  return (
    <div className='container flex flex-col gap-[5rem] bg-zinc-200 py-[4rem] mx-auto'>
        <div className='flex justify-center gap-[2.5rem] flex-wrap'>
            {
                data?.total_results === 0 ? 
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