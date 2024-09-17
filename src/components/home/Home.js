import React from 'react'
import {motion} from "framer-motion"
import Founder from './Founder'
import Menu from './Menu'
import "../../styles/home.scss"

const Home = () => {
  
  const options = {
    initial:{
      x:"-100%",
      opacity:0,
    },
     whileInView:{
      x:0,
      opacity:1,},
  }

  return (
    <>
    <section className='home'>
    <div>
      <motion.h1 {...options}>
      Perk Up Cafe</motion.h1>
      <motion.p {...options} transition={{delay:0.2}}>Satisfy your cravings, we'll deliver.</motion.p>
    </div>
    <motion.a href="#menu" {...options} transition={{delay:0.4}}>
      Explore Menu
    </motion.a>
  </section>
  <Founder/>
  <Menu/>
  </>
  )
}

export default Home
