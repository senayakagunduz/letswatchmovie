"use client"
import React from 'react'
import "../app/globals.css"
import { BiSearch } from 'react-icons/bi'
import MenuItem from './MenuItem'
import Link from 'next/link'

const Header = () => {
    const menus=[
        {
            name:"Bize Yazın",
            url:"/contact"
        },
       
    ]
    return (
        <header className='flex items-center justify-around gap-10 h-20 bg-slate-900 px-7 pt-6 '>
            <button className='hidden lg:block cursor-pointer p-3 text-xl border-2 border-yellow-400 bg-yellow-400 text-black rounded-lg hover:bg-transparent  hover:text-yellow-400 font-bold'>
                <Link href='/'>Lets Watch Movie</Link></button>
            <div className='flex flex-1 items-center gap-2 rounded-lg bg-white p-1 cursor-pointer'>
                <input type="text" placeholder="Arama yapınız!" className="flex-1 input cursor-pointer outline-none" />
                <BiSearch size={25} />
            </div>
            {
                menus.map((menu, index)=>(
                    <MenuItem menu={menu} key={index}/>
                ))
            }
        </header>
    )
}

export default Header