import React, { createContext, useEffect, useState } from 'react'
import Herosection from '../Component/Herosection'
import Service from '../Component/service'
import Featuredprouct from '../Component/Featuredproduct'
import Tagline from '../Component/Tagline'
import Offersection from '../Component/Offersection'
import Moneyback from "../Component/Moneyback"
import Footer from '../Component/Footer'





const Home = () => {









  return (
    <>
      <Herosection />
      <Tagline line={"Featured Product"} />
      <Featuredprouct />
      <Tagline line={"Services"} />
      <Service />
      <Tagline line={"Offer"} />
      <Offersection />
      <Moneyback />
      <Footer/>
      
    </>
  )
}




export default Home 