import React from "react";
import NavbarComponent from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";
import "./styles/Registration.css";

function Registration() {
  return (
    <>
      <div className="register">
        <h1>It's Easy To Register Your Company Now With Us! </h1>
      </div>

      <NavbarComponent />
      <NewsLetter />
    </>
  );
}

export default Registration;
