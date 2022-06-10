import React from "react";
import { Button, Row, Col } from "react-bootstrap";
import CardSection from "../components/CardSection";
import VideoCarouselSection from "../components/VideoCarousel";

import HeroSection from "../components/HeroSection";
import NavbarComponent from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";
import Section from "../components/Section";
import Testimonial from "../components/Testimonial";

import FeaturedFranchise from "../sub-components/FeaturedFranchise";
import "./styles/Home.css"
import EventsCarouselSection from "../components/EventsCarousel";
//  fa3466622d8703e0705063c9f2e13b89acc47297

function Home() {
  return (
    <div>
      <NavbarComponent />
      <HeroSection />
      <div className="content">
        <CardSection />
        <h2 id="TrendFran">Trending Franchise</h2>
        <div id="FrenchFries"><Section/></div>
        <div>
        <Row>
          <Col xs lg="8">
            <h2>Trending Videos</h2>
            <hr />
            <VideoCarouselSection />
          </Col>
          <Col>
            <h2>Upcoming Events</h2>
            <hr />
            <EventsCarouselSection/>
          </Col>
        </Row> 
        </div>
  

        <h2>Top Franchise</h2>
        <div id="FrenchFries"><Section/></div>
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
