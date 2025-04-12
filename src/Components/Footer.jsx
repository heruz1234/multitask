import React from 'react'
import Logo from '../Image/logo.png';
export default function Footer() {
  return (
    <div className='px-20 py-8 text-gray-400 flex flex-col gap-15 bg-gray-100'>
      <div className=' border-b-1 flex pb-8 '>
        <div className=" border-r-1 w-[50%] ">
            <h1 className='text-2xl text-black font-bold'>KNOW IT ALL FIRST!</h1>
            <p>Never Miss Anything From Multikart By Signing Up To Our Newsletter.</p>
        </div>
        <div className="flex gap-4 mx-auto items-center">
            <input type="text" className='py-2 px-3 text-black shadow '  placeholder='Enter your email'/>
            <p className=' text-white bg-[#ff4b3c] py-2 px-5 font-medium'>SUBSCRIBE</p>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="w-[30%]">
            <img src={Logo} alt="" className='pb-4' />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, unde. Laborum esse,blanditiis porro consequuntur, totam incidunt. Accusantium, odit ipsam nesciunt consequatur et iste.</p>
        </div>
        <div className="flex flex-col gap-4">
            <h1 className='text-2xl capitalize text-black font-bold'>My account</h1>
            <ul className="flex flex-col gap-2">
                <li>Womens</li>
                <li>Clothing</li>
                <li>Accessories</li>
                <li>Featured</li>
            </ul>
        </div>
        <div className="flex flex-col gap-4">
            <h1 className='text-2xl capitalize text-black font-bold'>why we choose</h1>
            <ul className="flex flex-col gap-2">
                <li>Shipping & Return</li>
                <li>Secure Shopping</li>
                <li>Gallary</li>
                <li>Affiliates</li>
                <li>Contacts</li>
            </ul>
        </div>
        <div className="flex flex-col gap-4 w-[20%]">
            <h1 className='text-2xl capitalize text-black font-bold'>store information</h1>
            <ul className="flex flex-col gap-2">
                <li>Multikart Demo Store, Demo Store India 345-659</li>
                <li>Call Us: 123-456-7898</li>
                <li>Email Us: Support@Fiot.Com</li>
                <li>Fax: 123456</li>
            </ul>
        </div>
      </div>
    </div>
  )
}
