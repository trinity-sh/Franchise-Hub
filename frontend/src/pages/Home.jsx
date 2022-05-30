import React from "react";
import CardSection from "../components/CardSection";
import CarouselSection from "../components/Carousel";
import HeroSection from "../components/HeroSection";
import NavbarComponent from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";
import Section from "../components/Section";
import Testimonial from "../components/Testimonial";
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
        <Section heading="Trending Franchise" />
        <CarouselSection />
        <Section heading="Top Franchise Opportunities" />
        <FeaturedFranchise heading="Featured Franchise" />
        <Testimonial />
       
      </div>
      <NewsLetter />
    </div>
  );
}

export default Home;
