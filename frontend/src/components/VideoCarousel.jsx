import React, { useEffect, useState } from "react";
import "./styles/Carousel.css";
import { Card, Button, Container, Row, Col, Carousel } from "react-bootstrap";
import Videos from "./Videos";
import Events from "./Events";
import axios from "axios";

function VideoCarouselSection() {

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


  // const [event, setEvent] = useState([]);
  // const getEvent = async () => {
  //   try {
  //     const response = await axios.get(
  //       "https://franchise-hub-server.herokuapp.com/api/v1/webview/section/trending-videos/all"
  //     );
  //     console.log(response.data);
  //     setEvent(response.data.payload);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };
  // useEffect(() => {
  //   getEvent();
  // }, []);
  // console.log(event);


  return (
    <>
      <div className="video-event desktop">
        <Container>
          <Carousel>

            {data.map((item) => {
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
                            src={item.description}
                          />

                          {/* {data.personal_details.brand_name} */}
                          <Card.Title>{item.title}</Card.Title>
                          {/* <Card.Text>
                            <Row>
                                <Col>
                                    <span>Channel Name</span>
                                </Col>
                                <Col>
                                    <span>Mr Bean</span>
                                </Col>
                            </Row>
                        </Card.Text> */}
                          <a href={item.thumbnail_link} target="_blank"
                          >
                            <Button variant="outline-danger" className="button" >
                              View
                            </Button>
                          </a>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </Carousel.Item>
              )
            })}

          </Carousel>
        </Container>
      </div>
    </>
  );

}

export default VideoCarouselSection;
