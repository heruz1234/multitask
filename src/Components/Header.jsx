import React from 'react'
import Logo from '../Image/logo.png';
import search from '../Image/search.png'
import setting from '../Image/setting.png'
import cart from '../Image/cart.png'
import list from '../Backend/HeaderData';
import { Link } from 'react-router';
export default function Header() {
   
  return (
    <div >
        <div className='flex justify-between py-7 px-20 items-center shadow '>
            <img src={Logo} alt="" />
            <div  className=' flex justify-between gap-14'>
                <ul className='flex capitalize text-xl items-center gap-7 '>
                {
                    list.map((item,index) => {
                        return (
                            <li className='cursor-pointer hover:text-[#ff4c3b]'> <Link >{item.name}</Link> </li>
                        )
                    })
                }
                </ul>
                <div className='flex  items-center gap-5'>
                    <img src={search} className='cursor-pointer' alt="" />
                    <img src={setting} className='cursor-pointer' alt="" />
                    <img src={cart} className='cursor-pointer' alt="" />
                </div>
            </div>   

        </div>
    </div>
  )
}
