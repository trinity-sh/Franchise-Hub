import React from "react";
import "./styles/Carousel.css";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import Videos from "./Videos";
import Events from "./Events";

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
                      <Videos />
                    </Col>
                    <Col>
                      <Videos />
                    </Col>
                  </Row>
                </Carousel.Item>
                <Carousel.Item>
                  <Row>
                    <Col>
                      {" "}
                      <Videos />
                    </Col>
                    <Col>
                      <Videos />
                    </Col>
                  </Row>
                </Carousel.Item>
                <Carousel.Item>
                  <Row>
                    <Col>
                      {" "}
                      <Videos />
                    </Col>
                    <Col>
                      <Videos />
                    </Col>
                  </Row>
                </Carousel.Item>
              </Carousel>
            </Col>

            <Col>
              <Carousel>
                <Carousel.Item className="events">
                  <Events />
                </Carousel.Item>
                <Carousel.Item className="events">
                  <Events />
                </Carousel.Item>
                <Carousel.Item className="events">
                  <Events />
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
                <Videos />
              </Carousel.Item>
              <Carousel.Item>
                {" "}
                <Videos />
              </Carousel.Item>
              <Carousel.Item>
                <Videos />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>

        <h2>Upcoming Events</h2>
        <Carousel>
          <Carousel.Item className="events">
            <Events />
          </Carousel.Item>
          <Carousel.Item className="events">
            <Events />
          </Carousel.Item>
          <Carousel.Item className="events">
            <Events />
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}

export default CarouselSection;
