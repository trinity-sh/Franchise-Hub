import React from "react";
import Logo from "../Assets/logo.png";
// Styles
import {
  Row,
  Col,
  Container,
  Nav,
  Navbar,
  InputGroup,
  Form,
} from "react-bootstrap";
import "./styles/Navbar.css";

function NavbarComponent() {
  return (
    <>
    <header class="header" id="header">
      <div class="topbar">
        <Container fluid>
          <Row>
            <Col md="12">
              <div class="p-30 d-flex justify-content-between">
                <div class="p-2 top">
                  <Nav class="top-nav">
                    <Nav.Link
                      className="navlinks"
                      href="#"
                      target="_blank"
                      data-toggle="modal"
                      data-target="#expandFranchisenew"
                    >
                      Expand Your Franchise
                    </Nav.Link>

                    <Nav.Link className="navlinks"
                      href="https://www.franchiseindia.com/advertise-with-us-payment"
                      target="_blank"
                    >
                      Advertise
                    </Nav.Link>
                  </Nav>
                </div>

                <div class="p-2">
                  <InputGroup class="input-group-custom d-flex"
                  >
                    <span
                      class="input-group-addon input-group-prepend-custom"
                      id="basic-addon1"
                    >
                      <img
                      className="language"
                        src="https://www.franchiseindia.com/newhomepage/assets/img/language-icon.svg"
                        alt="language-icon"
                      />
                    </span>
                    <Form.Group class="form-group-sm lang">
                      <select
                        class="form-control-custom-main language-dropdown"
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
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div class="header-btm">
        <Container fluid>
          <Row>
            <Col className="md-12">
              <div class="bottom-nav">
                {/* <div class="p-2">
                  <div id="sidebarCollapse" className="menu-bar">
                    <img
                      src="https://www.franchiseindia.com/newhomepage/assets/img/menu-icon.svg"
                      alt="menu-icon"
                    />
                    <span>Menu</span>
                  </div>
                </div> */}

                <div class="logo">
                  {" "}
                  <a href="#">
                    <img className="logo" src={Logo} alt="FranchiseHub Logo" />
                  </a>
                </div>
                <br />
                <div class="d-flex" id="bottomBarOptions">
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

                  <div className="login-main-section">
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
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </header>
{/* Mobile Version */}
    <Navbar collapseOnSelect fixed='top' expand='sm' id='navbar'>
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
  );
}

export default NavbarComponent;
