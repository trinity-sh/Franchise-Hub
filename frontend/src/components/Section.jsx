import React from "react";
import Franchise from "./Franchise";
import styled from "styled-components";


const FranchiseSection = styled.div`
    margin-top: 30px;
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
`

function Section() {
  return (
    <FranchiseSection>
      <h2>Tranding Franchise</h2>
      <hr/>
      <Franchise />
    </FranchiseSection>
  );
}

export default Section;
