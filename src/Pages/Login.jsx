import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { Link } from 'react-router'

export default function Login() {
  return (
    <div className='flex flex-col gap-16'>
       <Header />
       <div className='px-20  '>
          <h1 className=' uppercase font-bold text-3xl pb-4'>login</h1>
          <div className='flex justify-between'>
            <div className="w-[47%] flex flex-col gap-6  p-6 border">
              <div className="flex flex-col gap-2">
                <p className=' capitalize font-medium'>Last Name</p>
                <input type="text" placeholder='Lastname'  className='px-10 py-4 border'/>
              </div>
              <div className="flex flex-col gap-2">
                <p className=' capitalize font-medium'>Enter your password</p>
                <input type="text" placeholder='Enter your password'  className='px-10 py-4 border'/>
              </div>
              <p className='py-2 px-12 w-[35%] text-center hover:bg-white hover:text-[#ff4b3c] hover:border ease-in-out duration-600 text-white font-semibold text-xl bg-[#ff4b3c] '>Login</p>
        
              
            </div>
            <div className="w-[48%] flex flex-col gap-6 border p-6">
              <h1 className=' capitalize font-semibold text-2xl'>create an account</h1>
              <div>
                Sign up for a free account at our store. Registration is quick and easy. It allows you to be able to order from our shop. To start shopping click register.
              </div>
              <p className='py-3 cursor-pointer  capitalize w-[45%] text-center hover:bg-white hover:text-[#ff4b3c] hover:border ease-in-out duration-600 text-white font-semibold text-xl bg-[#ff4b3c] '><Link to='/signup'>create an account</Link></p>
            </div>
          </div>
       </div>
       <Footer />
    </div>
  )
}
