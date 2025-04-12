import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

export default function Banner() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    cssEase: "linear"
  
  };

  return (
    <div>
    <Slider {...settings}>
    <div  className='banner h-[77vh] py-32 px-24 flex flex-col justify-center '>
        <div className='flex flex-col gap-5 w-[40%] items-center ' >  
            <p className='text-2xl text-gray-500'>Welcome To Fashion </p>
            <h1 className='text-6xl uppercase'>men fashion</h1>
            <div className='py-3 px-6 hover:border border-[#ff4c3b] ease-in-out duration-500 hover:bg-white hover:text-[#ff4c3b] uppercase text-sm  text-white cursor-pointer bg-[#ff4c3b]'>shop now</div>
        </div> 
    </div>
    <div  className='bann h-[77vh] py-32  px-24 flex flex-col justify-center '>
        <div className='flex flex-col gap-5 w-[50%] items-center ' >  
            <p className='text-2xl text-gray-500'>Welcome To Fashion </p>
            <h1 className='text-6xl uppercase'>women fashion</h1>
            <div className='py-3 px-6 hover:border border-[#ff4c3b] ease-in-out duration-500 hover:bg-white hover:text-[#ff4c3b] uppercase text-sm  text-white cursor-pointer bg-[#ff4c3b]'>shop now</div>
        </div> 
    </div>
    </Slider>
    </div>
  )
}
