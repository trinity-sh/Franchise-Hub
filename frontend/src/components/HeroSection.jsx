import React from "react";
import { Container, Row, Col, Nav, Form } from "react-bootstrap";
import "./styles/HeroSection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Categories from "../sub-components/Categories";

function HeroSection() {
  return (
    <section class="hero-section" id="hero-section">
      <Container>
        <div className="lnkblk">
          <img src="https://www.franchiseindia.com/newhomepage/assets/img/remax-logo.png" />
        </div>
        <Row className="md-12 hero">
          <div className="md-12">
            <h1 className="title">
              Search from
              <span> 10000+ Business </span>
              options
            </h1>
            <h2>World's highest visited franchise website network</h2>
          </div>
          <Col class="md-12" id="heroBar">
            <Categories/>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default HeroSection;
