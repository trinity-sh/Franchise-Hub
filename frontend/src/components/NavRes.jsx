import React from 'react'
import Logo from "../Assets/logo.png"
// Styles
import {
  Row,
  Col,
  Container,
  Nav,
  Navbar,
  InputGroup,
  Form,
  NavLink,
} from "react-bootstrap";


function NavRes() {
  return (
        <>
      <Navbar collapseOnSelect fixed='top' expand='sm' bg='light' variant='light' id='navbar'>
        <Container>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
                <Nav>
                <Nav.Link
                      className="navlinks"
                      href="#"
                      target="_blank"
                      data-toggle="modal"
                      data-target="#expandFranchisenew"
                    >
                      Expand Your Franchise
                    </Nav.Link>
                    <span>|</span>
                    <Nav.Link
                      className="navlinks"
                      href="https://www.franchiseindia.com/advertise-with-us-payment"
                      target="_blank"
                    >
                      Advertise
                    </Nav.Link>
                    <InputGroup className="input-group-custom">
                    <img
                      className="language"
                      src="https://www.franchiseindia.com/newhomepage/assets/img/language-icon.svg"
                      alt="language-icon"
                    />

                    <Form.Group className="sm lang">
                      <select
                        type="text"
                        className="language-dropdown"
                        id="language-changer"
                      >
                        <option
                          value="https://www.franchiseindia.com"
                          selected=""
                        >
                          EN - English
                        </option>
                        <option value="https://www.franchiseindia.com/hi">
                          HI - Hindi
                        </option>
                      </select>
                    </Form.Group>
                  </InputGroup>
                  
                  <div class="logo">
                  {" "}
                  <a href="#">
                    <img
                      className="logo"
                      src={Logo}
                      alt="FranchiseHub Logo"
                    />
                  </a>
                </div>
                <br/>
                  <span class="search" id="search">
                    <div
                      class="p-2 icon"
                      data-toggle="modal"
                      data-target="#search-main"
                    >
                      <img
                        src="https://www.franchiseindia.com/newhomepage/assets/img/Search.svg"
                        alt="Search"
                      />
                      <span>Search</span>
                    </div>
                  </span>

                  <img
                  className="login"
                    src="https://www.franchiseindia.com/newhomepage/assets/img/Login.svg"
                    alt="Login"
                  />

                  <Nav.Link
                      className="links"
                      href="#"
                      data-toggle="modal"
                      data-target="#login-pnl"
                      id="mobilereg"
                    >
                      Register
                    </Nav.Link>
                    <span style={{ position: "relative", top: "0.9vh" }}>
                      /
                    </span>
                    <Nav.Link
                      className="links"
                      href="#"
                      data-toggle="modal"
                      data-target="#login-pnl"
                      id="loginselect"
                    >
                      Login
                    </Nav.Link>
                    </Nav>
                    
          </Navbar.Collapse>
        </Container>
      </Navbar>
 
                  
      </>
  )
}

export default NavRes