 import React from 'react'
import Hero from './Components/Hero'
import About from './Components/About'
import Contact from './Components/Contact'
import Services from './Components/services/page'
import Stats from './Components/Stats'
import Testimonials from './Components/Testimonials'
 
 
 
 
 
 
 export default function page() {
   return (
     <div><Hero/>  <About/><Services/>    <Stats/>  <Testimonials/>  <Contact/></div>
   )
 }
 