import React from "react";
import CardSection from "../components/CardSection";
import CarouselSection from "../components/Carousel";
import HeroSection from "../components/HeroSection";
import NavbarComponent from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";
import Section from "../components/Section";
import Testimonial from "../components/Testimonial";

function Home() {
  return (
    <div>
      <NavbarComponent />
      <HeroSection />
      <div className="content" style={{ margin: "0 100px"}}>
        <CardSection />
        <Section />
        <CarouselSection />
        <Testimonial />
       
      </div>
      <NewsLetter />
    </div>
  );
}

export default Home;
