import React from 'react'
import { Link } from 'react-router'

export default function About_single({item}) {
  return (
    <div className='flex flex-col gap-3'>
      <div className='flex flex-col gap-2 pb-3 border-b-1 border-black '>
         <h1 className='text-3xl font-medium uppercase'>{item.name}</h1>
         <p className='text-sm font-light capitalize'>${item.old} <span className='text-xl font-medium text-[#ff4c3b]  '>{item.discount} off</span></p>
         <div className='text-2xl font-medium'>${item.price}</div>
         <div className='flex gap-2'>
            <p className='cursor-pointer bg-[red] w-10 shadow rounded-full h-10 ' ></p>
            <p className='cursor-pointer bg-[blue] w-10 shadow rounded-full h-10 '></p>
            <p className='cursor-pointer bg-[green] w-10 shadow rounded-full h-10 '></p>
         </div>
      </div>
      <div className='flex flex-col gap-4 pb-3 border-b-1 border-black '>
        <ul className='flex justify-between capitalize font-medium '>
            <li>select size</li>
            <li>size chart</li>
        </ul>
        <p className='flex gap-5 px-2'>
            <span className='rounded-full border w-6 h-6 text-center hover:font-bold cursor-pointer hover:text-white hover:bg-[#ff4c3b]'>s</span>
            <span className='rounded-full border w-6 h-6 text-center hover:font-bold cursor-pointer hover:text-white hover:bg-[#ff4c3b]'>m</span>
            <span className='rounded-full border w-6 h-6 text-center hover:font-bold cursor-pointer hover:text-white hover:bg-[#ff4c3b]'>l</span>
        </p>
      </div>
      <div className='flex flex-col  font-medium gap-2 pb-3 border-b-1 border-black '>
        <h1 className='text-xl text-[#ff4c3b]'>InStock</h1>
        <p >Quantity</p>
        <p>
            <span className='py-2 px-4 border border-gray-400 '>ic</span>
            <span className='py-2 px-8 border border-gray-400 '>1</span>
            <span className='py-2 px-4 border border-gray-400 '>ic</span>
        </p>
      </div>
      <div className='flex  gap-2 pb-3 text-white font-medium text-l uppercase '>
        <p className='px-5  bg-[#ff4c3b] py-2 hover:text-[#ff4c3b] hover:bg-white hover-border border-[#ff4c3b] cursor-pointer'>add to cart</p>
        <p className='px-5  bg-[#ff4c3b] py-2 hover:text-[#ff4c3b] hover:bg-white hover-border border-[#ff4c3b] cursor-pointer'><Link to='/login'>Buy Now</Link></p>
      </div>
    </div>
  )
}
