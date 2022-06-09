import React, { useEffect, useState } from "react";
import Franchise from "./Franchise";
import styled from "styled-components";
import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";


const FranchiseSection = styled.div`

    margin: 30px 0 80px;
    h2{
        color: #333333;
        font-size: 30px;
        font-weight: 700;
    }
    hr{
        width: 8%;
        color: #dc3545;
        height: 2px;
        margin-bottom: 50px;
    }
    .cards{
      display: flex;
      margin: 0;
    }
    @media only screen and (max-width: 426px){
      margin-top: 145px;
    }
`

function Section(props) {

  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const data = await axios.get(
        "https://franchise-hub-server.herokuapp.com/api/v1/webview/section/listed-franchises/all"
      );
      console.log(data.data.payload);
      setData(data.data.payload);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  console.log(data);

  return (
    <FranchiseSection>
      <h2>{props.heading}</h2>
      <hr />
      <Franchise item={data}/>
      {/* <Container>
        <Row>
          <Col lg="4">
            <Franchise />
          </Col>
          <Col>
            <Franchise />
          </Col>
          <Col>
            <Franchise />
          </Col>
        </Row>
      </Container> */}


    </FranchiseSection>
  );
}

export default Section;
