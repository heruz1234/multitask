import React, { useState } from 'react'
import products from '../Backend/Product'
export default function RelatedProducts( ) {
    const [image ,setImage] =useState('')
    const value= '67489'
    const R_Data = products.filter((data) => data.value === value ) 
    const changeImage =(index ,data) =>{
        setImage({[index] :data})
    }
   
  return (
    <div className='px-20 py-8'>
      <h1 className='w-full pb-4 mb-4  text-4xl uppercase font-medium border-b ' >related product</h1>
      
      <div className='flex gap-2'>
        {
          R_Data.map((item,index) => {
                return(
                   <div >
                    <img onMouseOver={()=>changeImage(index ,item.img_2)} src={image[index] || item.img_1} alt="" />
                    <div className='p-2 font-medium capitalize flex flex-col gap-2' >
                       <div className='flex gap-1'> 
                              <i className='pi pi-star-fill text-yellow-400'></i>                    
                              <i className='pi pi-star-fill text-yellow-400'></i>                    
                              <i className='pi pi-star-fill text-yellow-400'></i>                    
                              <i className='pi pi-star-fill text-yellow-400'></i>                    
                              <i className='pi pi-star'></i>                    
                       </div>
                       <div className="">
                           <h1>{item.name}</h1>
                           <p>${item.price}</p>
                       </div>
                    </div>
                    </div>
                 )
            })
        } 
      
              
      </div>
    </div>
  )
}
