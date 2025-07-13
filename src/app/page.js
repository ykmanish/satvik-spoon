import React from 'react'
import HeroSection from '@/components/Hero'
import Navbar from '@/components/Navbar'
import ServicesSection from '@/components/ServicesSection'
import About from '@/components/About'
import SatvikStats from '@/components/stats'
import Testimonials from '@/components/Testimonial'
import HowItWorks from '@/components/HowItWorks'
import CtaCard from '@/components/CtaCard'
import Working from '@/components/Working'
import Footer from '@/components/Footer'
import Testi from '@/components/Testi'
const page = () => {
  return (
    <div>
      
      <HeroSection />
      <ServicesSection/>
      <About/>
      <SatvikStats/>
       <CtaCard/>
       <HowItWorks/>
      <Testi/>
      
      {/* <Working/> */}
     
     
      
      
    </div>
  )
}

export default page
