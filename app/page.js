import React from 'react'
import Hero from './_landingComponents/Hero'
import Features from './_landingComponents/Features'
import Testimonials from './_landingComponents/Testimonial'
import Footer from './_landingComponents/Footer'
import Navbar from './_landingComponents/Navbar'

const page = () => {
  return (
    <div className="min-h-screen">
    <Navbar />
    <Hero />
    <Features />
    <Testimonials />
    <Footer />
  </div>
);
  
}

export default page
