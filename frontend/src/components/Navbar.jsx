import React from "react";

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
    <header class="header" id="header">
      <div class="topbar">
        <Container fluid>
          <Row>
            <Col md="12">
              <div className="p-30 d-flex justify-content-between">
                <div className="p-2">
                  <Navbar className="top-nav">
                    <Nav.Link
                      className="navlinks"
                      href="https://www.businessex.com/"
                      target="_blank"
                    >
                      Sell your Business
                    </Nav.Link>
                    <span>|</span>

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
                  </Navbar>
                </div>

                <div className="p-2 ml-auto">
                  <InputGroup className="input-group-custom">
                    <img
                      className="language"
                      src="https://www.franchiseindia.com/newhomepage/assets/img/language-icon.svg"
                      alt="language-icon"
                    />

                    <Form.Group className="sm">
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
              <div class="d-flex p-30 justify-content-between">
                <div class="p-2">
                  <div id="sidebarCollapse" className="menu-bar">
                    <img
                      src="https://www.franchiseindia.com/newhomepage/assets/img/menu-icon.svg"
                      alt="menu-icon"
                    />
                    <span>Menu</span>
                  </div>
                </div>

                <div class="logo">
                  {" "}
                  <a href="https://www.franchiseindia.com">
                    <img
                        className="logo"
                      src="https://www.franchiseindia.com/newhomepage/assets/img/Logo.svg"
                      alt="Franchiseindia Logo"
                    />
                  </a>
                </div>

                <div class="d-flex">
                  <span class="search" id="search">
                    <div
                      class="p-2"
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
                    src="https://www.franchiseindia.com/newhomepage/assets/img/Login.svg"
                    alt="Login"
                  />

                  <Nav className="login-main-section">
                    <Nav.Link
                    className="links"
                      href="#"
                      data-toggle="modal"
                      data-target="#login-pnl"
                      id="mobilereg"
                    >
                      Register
                    </Nav.Link>
                    <span style={{position:"relative", top:"0.9vh"}}>/</span>
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
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </header>
  );
}

export default NavbarComponent;
