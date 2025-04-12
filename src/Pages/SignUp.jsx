import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'

export default function SignUp() {
  return (
    <div>
    <Header />
    <div className='px-20 py-14' >
       <h1 className='font-medium text-2xl uppercase py-4 '>create account</h1>
       <div className='flex gap-4 min-h-[250px] py-10 px-20 border  flex-wrap justify-between'>
         <div className="w-[47%] flex flex-col gap-2">
          <p className=' capitalize font-medium'>First Name</p>
          <input type="text" placeholder='Firstname'  className='px-10 py-4 border'/>
         </div>
         <div className="w-[47%] flex flex-col gap-2">
          <p className=' capitalize font-medium'>Last Name</p>
          <input type="text" placeholder='Lastname'  className='px-10 py-4 border'/>
         </div>
         <div className="w-[47%] flex flex-col gap-2">
          <p className=' capitalize font-medium'>Email</p>
          <input type="email" placeholder='Enter your email'  className='px-10 py-4 border'/>
         </div>
         <div className="w-[47%] flex flex-col gap-2">
          <p className=' capitalize font-medium'>Password</p>
          <input type="password" placeholder='Enter your password' className='px-10 py-4 border'/>
         </div>
         <p className='py-2 px-12 hover:bg-white hover:text-[#ff4b3c] hover:border ease-in-out duration-600 text-white font-semibold text-xl bg-[#ff4b3c] '>Sign Up</p>
         
       </div>
       
    </div>
    <Footer />
    </div>
  )
}
