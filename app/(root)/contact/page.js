import ContactForm from '@/components/ContactForm'
import Map from '@/components/map'
import React from 'react'

const Contact = () => {
  return (
    <div className='cursor-pointer p-5 bg-slate-900 flex justify-center items-start h-screen gap-3'>
      <div className='flex w-1/2 p-6'>
        <Map/>
      </div>
      <div className='flex flex-col w-1/2'>
        <ContactForm/>
      </div>
    </div>
  )
}

export default Contact