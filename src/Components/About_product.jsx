import React, { useState } from 'react'

export default function About_product({item}) {
  const [content , setContent] =useState('')

  const changeContent =(data) =>{
    setContent (data)
  }

  return (
    <div className='flex mt-8 justify-between mb-4 '>
      <div className="w-[25%] h-[40vh] text-[#ff4b3c] font-bold capitalize flex flex-col justify-between">
        <p onClick={() => changeContent(item.des)} className='shadow text-xl py-2 text-center cursor-pointer hover:text-white hover:bg-[#ff4b3c]'>description</p>
        <p onClick={() => changeContent(item.details)} className='shadow text-xl py-2 text-center cursor-pointer hover:text-white hover:bg-[#ff4b3c]'>details</p>
        <p onClick={() => changeContent(item.video)} className='shadow text-xl py-2 text-center cursor-pointer hover:text-white hover:bg-[#ff4b3c]'>video</p>
        <p onClick={() => changeContent(item.review)} className='shadow text-xl py-2 text-center cursor-pointer hover:text-white hover:bg-[#ff4b3c]'>write review</p>
      </div>
      <div className="w-[47vw]  h-auto shadow rounded-tl-4xl rounded-br-4xl py-3 px-4">
        <p> {content || item.des} </p>
        
      </div>
    </div>
  )
}
