import React from 'react'
import CardSection from '../components/CardSection'
import HeroSection from '../components/HeroSection'
import NavbarComponent from '../components/Navbar'


function Home() {
  return (
    <div>
        <NavbarComponent />
        <HeroSection />
        <CardSection />
    </div>
  )
}

export default Home