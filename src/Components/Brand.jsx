import React from 'react'

const List =[
    {name:'clothing '},
    {name:'bags '},
    {name:'footwear '},
    {name:'watch '},
    {name:'Accessories '},
]
export default function Brand() {
  return (
    <div className=' w-full  border py-5 px-8'>
      <h1 className='text-xl font-medium pb-4'>BRAND</h1>
      <ul className='border-4 border-y-0 border-l-0 border-[#ff4c3b] '>
        
      {
        List.map((item,index) => {
            return(
                <li className=' capitalize '>{item.name}</li> 
            )
        })
      }
        
      </ul>
    </div>
  )
}
