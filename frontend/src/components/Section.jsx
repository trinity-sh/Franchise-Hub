import React from "react";
import Franchise from "./Franchise";
import styled from "styled-components";


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
    @media only screen and (max-width: 426px){
      margin-top: 145px;
    }
`

function Section() {
  return (
    <FranchiseSection>
      <h2>Trending Franchise</h2>
      <hr/>
      <Franchise />
    </FranchiseSection>
  );
}

export default Section;
