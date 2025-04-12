import React from 'react'

export default function Product_details({item}) {
  return (
    <div className='flex flex-col gap-4'>
      <h1 className='font-medium text-xl'> Product Details</h1>
      <p>{item.details}</p>
    </div>
  )
}
