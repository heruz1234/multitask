import React from 'react'

export default function Sub_banner() {
  return (
    <div className='px-20'>
       <div className='flex justify-between font-medium '>
            <div className="sub_1  bg-[black] h-[40Vh] w-[49%] hover:cursor-pointer flex flex-col justify-center items-end px-14  ">
                 <p className='text-[#ff4c3b] '>10% OFF</p>
                 <h1 className='text-5xl'>MEN</h1>
            </div>
            <div className="sub_2 bg-[black] h-[40Vh] w-[49%] hover:cursor-pointer flex flex-col justify-center items-end px-14  ">
                 <p className='text-[#ff4c3b] '>10% OFF</p>
                 <h1 className='text-5xl'>WOMEN</h1>
            </div>
       </div>
    </div>
  )
}
