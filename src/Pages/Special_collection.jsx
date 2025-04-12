import React from 'react'
import Show from '../Components/Show'

export default function Special_collection() {
  return (
    <div >
        <div className='px-20 py-10 flex flex-col justify-center items-center'>
            <h1 className=' capitalize text-2xl text-[#ff4c3b]'>Special Offer</h1>
            <p className='text-5xl uppercase font-medium ' > top collection</p>
            <p className=' border w-24 border-[#ff4c3b] mt-2'></p>
            <p className='py-2 flex flex-col justify-center items-center'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi laudantium reprehenderit harum amet  <br />
                repellat tempore aliquam cupiditate a natus? Cum nostrum magnam voluptates reprehenderit  <br />
                officia ullam incidunt praesentium esse.
            </p>
        </div>   
        <Show /> 
    </div>
  )
}
