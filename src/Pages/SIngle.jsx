import React from 'react'
import Brand from '../Components/Brand'
import Service from '../Components/Service'
import Product_display from '../Components/Product_display'
import { useParams } from 'react-router'
import products  from '../Backend/Product'
import About_single from '../Components/About_single'
import Product_details from '../Components/Product_details'
import About_product from '../Components/About_product'
import RelatedProducts from '../Components/RelatedProducts'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import NewProduct from '../Components/NewProduct'
export default function SIngle() {
    const params = useParams('')
    const id = params.id
    
    const data = products.find((data) => data.id === id)

   
    
     
  return (
    <div className=' min-h-[200vh]' >
      <Header />
      {/*Hero*/}
       <div className='px-20 flex justify-between  py-8'>
        {/* left side */}
          <div className='flex w-[22%] flex-col gap-5'>
            <Brand />
            <Service />
            <NewProduct />
          </div>
          <div>
            <div className=''>
              {/* middle section */}
              <div className="flex gap-4">
                <Product_display item={data} />
                <div className='w-[35vw] px-2'>
                  <About_single item={data} />
                  <Product_details item={data} /> 
                </div>
              </div>
              <div>
                <About_product  item={data} />
              </div>
            </div>
          </div>
       </div>
       {/*Related Product*/}
        <div className=""><RelatedProducts  /></div>

       <Footer />
    </div>
  )
}
