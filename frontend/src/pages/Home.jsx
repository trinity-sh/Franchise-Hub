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
<<<<<<< HEAD
        <h2 id="TrendFran">Trending Franchise</h2>
        <div id="FrenchFries"><Section/></div>
        <div>
        <Row style={{marginTop:"-3rem"}}>
          <Col xs lg="8">
=======
        <h2 className="trend-fran">Trending Franchise</h2>
        <div id="FrenchFries"><Section heading="Trending Franchise"/></div>
        <div className="trending-sec">
        <Row>
          <Col lg="6">
>>>>>>> 9a7bcee1f35f6680a42be9ea26d96edf5e675cec
            <h2>Trending Videos</h2>
            <hr />
            <VideoCarouselSection />
          </Col>
          <Col lg="6">
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

        {/* <Button>View All</Button> */}
        <Testimonial />
       
      </div>
      <NewsLetter />
    </div>
  );
}

export default Home;
