import React, { useEffect, useState } from "react";
import Franchise from "./Franchise";
import styled from "styled-components";
import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";
// import paginationFactory from "react-bootstrap-table2-paginator"

const FranchiseSection = styled.div`
  display: inline-flex;
  margin: 30px 0 80px;
  h2 {
    color: #333333;
    font-size: 30px;
    font-weight: 700;
  }
  hr {
    width: 8%;
    color: #dc3545;
    height: 2px;
    margin-bottom: 50px;
  }
  .cards {
    display: flex;
  }
  .cards {
    display: flex;
    margin: 10px;
  }
  @media only screen and (max-width: 426px) {
    margin-top: 145px;
  }
`;

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

  var items = data.map((item) => {
    console.log(items)
    // return <FranchiseSection><Franchise key={item.id} items={item} /></FranchiseSection>
});
  var sliceitem = items.slice(0,2).map((item)=>{
    return <FranchiseSection><Franchise key={item} items={item} /></FranchiseSection>
  })
  console.log(sliceitem)


  return (
    // <FranchiseSection>
    //   <Franchise item={data} />
    // </FranchiseSection>
    sliceitem
   );
}

export default Section;
