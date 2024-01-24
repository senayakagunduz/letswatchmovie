"use client"
import ContactForm from '@/components/ContactForm'
import Map from '@/components/map'
import React from 'react'

const Contact = () => {
  return (
    <div className='flex flex-col cursor-pointer bg-slate-900'>
      <div className='flex place-items-center '>
        <Map/>
      </div>
      <div className='  '>
        <ContactForm/>
      </div>
    </div>
  )
}

export default Contact