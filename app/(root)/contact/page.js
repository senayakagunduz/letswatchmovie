import ContactForm from '@/components/ContactForm'
import Map from '@/components/map'
import React from 'react'

const Contact = () => {
  return (
    <div className='flex cursor-pointer  bg-slate-900  h-screen'>
      <div className='flex w-1/2 '>
        <Map/>
      </div>
      <div className='flex flex-col w-1/2'>
        <ContactForm/>
      </div>
    </div>
  )
}

export default Contact