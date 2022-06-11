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
              To gain admittance to over
              <span> 10000+ Franchise Business </span>
              Opportunities.
            </h1>
            <h2>Network with the developing Business Community to get master mediations to allow you to
              learn to Grow and Expand your Business with Franchising.</h2>
          </div>
          <Col class="md-12" id="heroBar">
            <Categories />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default HeroSection;
