import React from "react";
import { Button } from "react-bootstrap";
import CardSection from "../components/CardSection";
import CarouselSection from "../components/Carousel";
import Franchise from "../components/Franchise";
import HeroSection from "../components/HeroSection";
import NavbarComponent from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";
import Section from "../components/Section";
import Testimonial from "../components/Testimonial";
import Videos from "../components/Videos";
import FeaturedFranchise from "../sub-components/FeaturedFranchise";
import "./styles/Home.css"
//  fa3466622d8703e0705063c9f2e13b89acc47297

function Home() {
  return (
    <div>
      <NavbarComponent />
      <HeroSection />
      <div className="content">
        <CardSection />
        <h2>Trending Franchise</h2>
        <Section/>
        <CarouselSection />
        <h2>Top Franchise</h2>
        <Section/>
        <h2>All Franchise</h2>
        
          <div className="FeaturedFranchise"><FeaturedFranchise/></div>
        <Button>View All</Button>
        <Testimonial />
       
      </div>
      <NewsLetter />
    </div>
  );
}

export default Home;
