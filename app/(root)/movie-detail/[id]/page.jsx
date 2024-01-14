import Image from 'next/image';
import React from 'react'

const MovieDetail = async ({ params }) => {
    const id = params.id;
    console.log(id, "id")

    const resp = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=${process.env.API_KEY}&language=en-US&page=1`, {
        next: {
            revalidate: 60
        }
    })
    const data = await resp.json()
    console.log(data)

    return (
        <div className='flex bg-slate-900 h-screen p-10'>
            <div className='flex justify-center'>
                <div className='flex justify-center w-1/2 relative p-0'>
                    <img src={`https://image.tmdb.org/t/p/original/${data.poster_path}`} className='relative rounded-md' style={{ objectFit: 'cover' }} fill />
                    {/* <div className="absolute inset-0 bg-slate-900 opacity-70 z-10"></div> */}
                </div>
                <div className='text-white flex w-1/2 p-0 '>
                    <div className='flex flex-col'>
                        <div className='flex text-3xl py-3 text-yellow-300 hover:opacity-80'>
                            {data.title}
                        </div>
                        <div className='flex text-lg'>
                            {data.overview}
                        </div>
                        <div className='flex text-lg pt-3'>
                            <span className='text-yellow-300'>popularity:&nbsp; </span>
                            {data.popularity}
                        </div>
                        <div className='flex text-lg pt-2'>
                            <span className='text-yellow-300'>avarage:&nbsp;</span>
                            {data.vote_average}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MovieDetail

