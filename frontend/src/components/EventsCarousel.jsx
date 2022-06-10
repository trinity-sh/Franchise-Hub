import React, { useEffect, useState } from "react";
import "./styles/Carousel.css";
import { Card, Button, Container, Row, Col, Carousel } from "react-bootstrap";
import Videos from "./Videos";
import Events from "./Events";
import axios from "axios";
import { Link } from "react-router-dom";

function EventsCarouselSection() {
  //   const [data, setData] = useState([]);
  //   const getData = async () => {
  //     try {
  //       const response = await axios.get(
  //         "https://franchise-hub-server.herokuapp.com/api/v1/webview/section/trending-videos/all"
  //       );
  //       console.log(response.data);
  //       setData(response.data.payload);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   };
  //   useEffect(() => {
  //     getData();
  //   }, []);
  //   console.log(data);

  const [event, setEvent] = useState([]);
  const getEvent = async () => {
    try {
      const response = await axios.get(
        "https://franchise-hub-server.herokuapp.com/api/v1/webview/section/events/all"
      );
      console.log(response.data.payload);
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
        <Container>
          <Carousel>
            {event.map((item) => {
              return (
                <Carousel.Item key={item}>
                  <Row>
                    <Col>
                      {" "}
                      {/* <Videos props={data} /> */}
                      <Card>
                        <Card.Body>
                          <Card.Img
                            variant="top"
                            src={item.event_banner}
                          />

                          {/* {data.personal_details.brand_name} */}
                          <Card.Title>{item.event_title}</Card.Title>

                          <a href={item.event_link} target="_blank"
                          >
                            <Button variant="outline-danger" className="button" >
                              Register
                            </Button>
                          </a>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </Carousel.Item>
              );
            })}
          </Carousel>
        </Container>
      </div>
    </>
  );
}

export default EventsCarouselSection;
