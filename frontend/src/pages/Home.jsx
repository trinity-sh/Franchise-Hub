import React from "react";
import CardSection from "../components/CardSection";
import HeroSection from "../components/HeroSection";
import NavbarComponent from "../components/Navbar";
import Section from "../components/Section";
import RespNav from "../components/NavRes";

function Home() {
  return (
    <div>
      <NavbarComponent />
      <RespNav />
      <HeroSection />
      <div className="content" style={{ margin: "0 100px" }}>
        <CardSection />
        <Section />
      </div>
    </div>
  );
}

export default Home;
