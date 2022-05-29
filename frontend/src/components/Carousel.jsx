import React from "react";
import "./styles/Carousel.css";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import Franchise from "./Franchise";

function CarouselSection() {
  return (
    <>
      <div className="video-event desktop">
        <Row>
          <Col xs lg="8">
            <h2>Trending Videos</h2>
            <hr />
          </Col>
          <Col>
            <h2>Upcoming Events</h2>
            <hr />
          </Col>
        </Row>
        <Container>
          <Row>
            <Col xs lg="8">
              <Carousel>
                <Carousel.Item>
                  <Row>
                    <Col>
                      {" "}
                      <Franchise />
                    </Col>
                    <Col>
                      <Franchise />
                    </Col>
                  </Row>
                </Carousel.Item>
                <Carousel.Item>
                  <Row>
                    <Col>
                      {" "}
                      <Franchise />
                    </Col>
                    <Col>
                      <Franchise />
                    </Col>
                  </Row>
                </Carousel.Item>
                <Carousel.Item>
                  <Row>
                    <Col>
                      {" "}
                      <Franchise />
                    </Col>
                    <Col>
                      <Franchise />
                    </Col>
                  </Row>
                </Carousel.Item>
              </Carousel>
            </Col>

            <Col>
              <Carousel>
                <Carousel.Item className="events">
                  <img
                    className="d-block w-100"
                    src="https://image.shutterstock.com/image-vector/events-colorful-typography-banner-260nw-1356206768.jpg"
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item className="events">
                  <img
                    className="d-block w-100"
                    src="data:image/jpeg;base64,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"
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item className="events">
                  {" "}
                  <img
                    className="d-block w-100"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxBjQ6cacjUhWGAxXt_j-UgOdQhDAo3ce9Eg&usqp=CAU"
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="mobile">
        <h2>Trending Videos</h2>
        <Row>
          <Col xs lg="8">
            <Carousel>
              <Carousel.Item>
                {" "}
                <Franchise />
              </Carousel.Item>
              <Carousel.Item>
                {" "}
                <Franchise />
              </Carousel.Item>
              <Carousel.Item>
                <Franchise />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>

        <h2>Upcoming Events</h2>
        <Carousel>
          <Carousel.Item className="events">
            <img
              className="d-block w-100"
              src="https://image.shutterstock.com/image-vector/events-colorful-typography-banner-260nw-1356206768.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item className="events">
            <img
              className="d-block w-100"
              src="data:image/jpeg;base64,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"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item className="events">
            {" "}
            <img
              className="d-block w-100"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxBjQ6cacjUhWGAxXt_j-UgOdQhDAo3ce9Eg&usqp=CAU"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}

export default CarouselSection;
