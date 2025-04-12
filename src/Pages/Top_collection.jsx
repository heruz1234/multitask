import React from 'react'
import Show from '../Components/Show'
import Fashion_slider from './Fashion_slider'

export default function Top_collection() {
  return (
    <div >
        <div className=' px-20 py-5 flex flex-col items-center justify-center '>
            <h1 className=' capitalize text-2xl text-[#ff4c3b]'>exclusive products</h1>
            <p className='text-5xl uppercase font-medium ' > special products</p>
             <p className=' border w-24 border-[#ff4c3b] mt-4 '></p>
            <div className="flex gap-8 py-6">
                <p className='text-2xl uppercase hover:text-[#ff4c3b] cursor-pointer'>new arrival</p>
                <p className='text-2xl uppercase hover:text-[#ff4c3b] cursor-pointer'>featured</p>
                <p className='text-2xl uppercase hover:text-[#ff4c3b] cursor-pointer'>special</p>
            </div>
        </div>
       <Fashion_slider />
    </div>
  )
}
