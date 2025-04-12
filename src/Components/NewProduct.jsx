import React from 'react'
import products from '../Backend/Product'
import { Link, useNavigate } from 'react-router'
export default function NewProduct() {
  const product='new'
   const data = products.filter((data) => data.product === product ) 
   const navigate =useNavigate('')
   
  return (
    <div>
    
      <div className="">
        <h1 className='text-2xl font-bold py-3'>New Product</h1>
        <div className="flex flex-col gap-4">
          {data.map((item) => {return(
           <div className="flex">
               <Link ><img  src={item.img_1} className='w-[100px]' alt="" /></Link>
               <div className="">
                 <div className='p-2 font-medium capitalize  flex flex-col gap-2' >
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
            </div>
          )})}  
        </div>
      </div>
    </div>
  )
}
