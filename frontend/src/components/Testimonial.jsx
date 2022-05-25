import React from "react";
import { Carousel } from "react-bootstrap";
import styled from "styled-components";

const Testimonials = styled.div`
margin: 30px 0 50px;
  .bg {
    background-color: #f01;
    width: 100%;
    height: 300px;
    border-radius: 10px;
  }
  .carousel-img {
    width: 300px;
    height: 300px;
    border-radius: 50%;
  }
`;

function Testimonial() {
  return (
    <Testimonials>
      <Carousel>
        <Carousel.Item>
        <div className="bg"></div>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <div className="bg"></div>

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <div className="bg"></div>
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Testimonials>
  );
}

export default Testimonial;
