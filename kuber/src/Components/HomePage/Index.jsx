import React from 'react'
import Navbar from "../Navbar/Index"
import DemoCarousel from '../Carausel/Index'
import Footer from "../Footer/Index"
import SmallWithSocial from '../Footer/LastFooter'
import Home from "../Home/Index"
const Index = () => {
  return (
    <div>
        <Navbar/>
       <DemoCarousel/>
       <Home/>
         <Footer/>
         <SmallWithSocial/>
        
    </div>
  )
}

export default Index