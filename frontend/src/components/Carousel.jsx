import React, { useEffect, useState } from "react";
import "./styles/Carousel.css";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import Videos from "./Videos";
import Events from "./Events";
import axios from "axios";


function CarouselSection() {

  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      const response = await axios.get(
        "https://franchise-hub-server.herokuapp.com/api/v1/webview/section/trending-videos/all"
      );
      console.log(response.data);
      setData(response.data.payload);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  console.log(data);


  const [event, setEvent] = useState([]);
  const getEvent = async () => {
    try {
      const response = await axios.get(
        "https://franchise-hub-server.herokuapp.com/api/v1/webview/section/trending-videos/all"
      );
      console.log(response.data);
      setEvent(response.data.payload);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getEvent();
  }, []);
  console.log(event);


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

                {data.map((item) => {
                  return (
                    <Carousel.Item key={item}>
                      <Row>
                        <Col>
                          {" "}
                          <Videos props={data} />
                        </Col>
                        <Col>
                          <Videos item={item} />
                        </Col>
                      </Row>
                    </Carousel.Item>
                  )
                })}

              </Carousel>
            </Col>

            <Col>
              <Carousel>
                {
                  event.map(item => {
                    <Carousel.Item className="events">
                      <Events props={item}/>
                    </Carousel.Item>
                  })
                }
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
            <Events props={event} />
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
