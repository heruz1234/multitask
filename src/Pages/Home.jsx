import React from 'react'
import Header from '../Components/Header'
import Banner from '../Components/Banner'
import Sub_banner from '../Components/Sub_banner'
import Top_collection from './Top_collection'
import Fashion from '../Components/Fashion'
import Special_collection from './Special_collection'
import S_products from '../Components/S_products'
import Footer from '../Components/Footer'
import SignUp from './SignUp'
import { motion } from 'framer-motion'
export default function Home() {
const varTransition ={
  hidden:{opacity:0},
  show:{
    opacity:1,
    transition:{
      staggerChildren: 0.5
      ,
    },
  },
}
const eachVarTransition ={
  hidden:{opacity:0},
  show:{opacity:1}
}

  return (
    <motion.div
      variants={varTransition}
      initial="hidden"
      animate="show"
    >
      
       <Header />
       <div className='flex flex-col gap-14'>
         <motion.div variants={eachVarTransition} >  <Banner />              </motion.div> 
         <motion.div variants={eachVarTransition} >  <Sub_banner />          </motion.div>
         <motion.div variants={eachVarTransition} >  <Special_collection />  </motion.div> 
         <motion.div variants={eachVarTransition} >  <Fashion />             </motion.div> 
         <motion.div variants={eachVarTransition} >  <Top_collection />      </motion.div> 
         <motion.div variants={eachVarTransition} >  <S_products />          </motion.div> 
          
           <Footer /> 

       </div>
       
    </motion.div>
  )
}
