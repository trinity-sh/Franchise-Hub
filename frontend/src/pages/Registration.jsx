import React from "react";
import { Col, Row , Container, Button} from "react-bootstrap";
import NavbarComponent from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";
import "./styles/Registration.css";

function Registration() {
  return (
    <div className="main-content">
      <div className="register">
        <h1>It's Easy To Register Your Company Now With Us! </h1>

        <Container>
            <Row className="progressbar">
                <Col xs="2" className="items active">Personal</Col>
                <Col xs="2" className="items ">Business</Col>
                <Col xs="2" className="items ">Professional</Col>
                <Col xs="2" className="items ">Property</Col>
                <Col xs="2" className="items ">Agreements</Col>
                <Col xs="2" className="items ">Payments</Col>
            </Row>
        </Container>
      </div>
      <NavbarComponent />
      <NewsLetter />
    </div>
  );
}

export default Registration;
