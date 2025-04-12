import React, { useState } from 'react'

export default function Product_display({item}) {
  const [image ,setImage] =useState('')
   const changeImage =(data) => {
      setImage(data)
   }
  return (
    <div className=' h-[100vh] flex flex-col gap-4 ' >
        < img className='h-[80vh]' src={image || item.img_1} alt="" />
    
        <div className='h-[20%] px-2  flex justify-between'>
            <img onClick={() => changeImage (item.img_1)} className='border border-gray-300'  src={item.img_1} alt="" />
            <img onClick={() => changeImage (item.img_2)} className='border border-gray-300'  src={item.img_2} alt="" />
            <img onClick={() => changeImage (item.img_3)} className='border border-gray-300' src={item.img_3} alt="" />
            <img onClick={() => changeImage (item.img_4)} className='border border-gray-300' src={item.img_4} alt="" />
        </div>
    </div>
  )
}
