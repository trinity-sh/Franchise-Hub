import React, { useState } from "react";
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
  Modal,
  Button,
} from "react-bootstrap";
import "./styles/Navbar.css";
import Popup from "../sub-components/Popup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function NavbarComponent() {
  const [click, setClick] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleClick() {
    setClick(!click);
  }

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
                        href="/franchisor/registration/step/:id"
                        target="_blank"
                        data-toggle="modal"
                        data-target="#expandFranchisenew"
                      >
                        Expand Your Franchise
                      </Nav.Link>

                      <Nav.Link
                        className="navlinks"
                        href="/advertise-with-us-payment"
                        target="_blank"
                      >
                        Advertise
                      </Nav.Link>
                    </Nav>
                  </div>

                  <div class="p-2">
                    <InputGroup class="input-group-custom d-flex">
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
                    <a href="/">
                      <img
                        className="logo"
                        src={Logo}
                        alt="FranchiseHub Logo"
                      />
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
                        <span onClick={handleShow}>Search</span>
                        {/* Modal section */}
                        <Modal show={show} onHide={handleClose}>
                          <Modal.Header closeButton>
                            <Modal.Title>Search</Modal.Title>
                          </Modal.Header>
                          <Modal.Body>
                            <div class="modal-search" id="hero-search">
                              <Nav className="nav-tabs">
                                <Nav.Link
                                  className="tabs"
                                  href="#location1"
                                  aria-controls="location1"
                                  role="tab"
                                  data-toggle="tab"
                                >
                                  Location
                                </Nav.Link>

                                <Nav.Link
                                  className="tabs"
                                  href="#investment1"
                                  aria-controls="investment1"
                                  role="tab"
                                  data-toggle="tab"
                                >
                                  Investment
                                </Nav.Link>
                              </Nav>
                              <div class="tab-content">
                                <div
                                  id="categories1"
                                  className="tab-pane fade in active"
                                >
                                  <Form
                                    className="form-horizontal"
                                    method="get"
                                    action="https://www.franchiseindia.com/category/searchby"
                                    onsubmit="return submitCategory1()"
                                  >
                                    <input
                                      type="hidden"
                                      name="catTab"
                                      value="1"
                                    />
                                    <ul className="hero-search-main modal-search">
                                      <li class="p-0 m-0">
                                        <select
                                          name="mc"
                                          className="form-control-custom dropdown-toogle-icon"
                                          id="getMainCategoryDataHeader1"
                                          onchange="getSubCategoryHeader1(this.value)"
                                        >
                                          <option value="" hidden="">
                                            Select Industry
                                          </option>

                                          <option value="8" slug="automotive">
                                            Automotive
                                          </option>

                                          <option
                                            value="1"
                                            slug="beauty-and-health"
                                          >
                                            Beauty &amp; Health
                                          </option>

                                          <option
                                            value="6"
                                            slug="business-services"
                                          >
                                            Business Services
                                          </option>

                                          <option
                                            value="5"
                                            slug="dealers-and-distributors"
                                          >
                                            Dealers &amp; Distributors
                                          </option>

                                          <option value="3" slug="education">
                                            Education
                                          </option>

                                          <option value="10" slug="fashion">
                                            Fashion
                                          </option>

                                          <option
                                            value="2"
                                            slug="food-and-beverage"
                                          >
                                            Food And Beverage
                                          </option>

                                          <option
                                            value="7"
                                            slug="home-based-business"
                                          >
                                            Home Based Business
                                          </option>

                                          <option
                                            value="263"
                                            slug="hotels-and-resorts"
                                          >
                                            Hotel, Travel &amp; Tourism
                                          </option>

                                          <option value="9" slug="retail">
                                            Retail
                                          </option>

                                          <option
                                            value="11"
                                            slug="sports-fitness-and-entertainment"
                                          >
                                            Sports, Fitness &amp; Entertainment
                                          </option>
                                        </select>
                                      </li>
                                      <li class="p-0 m-0">
                                        <select
                                          name="sc"
                                          id="getSubCategoryDataHeader1"
                                          onchange="getSubCatCategoryHeader1(this.value)"
                                          class="form-control-custom dropdown-toogle-icon"
                                        >
                                          <option value="" hidden="">
                                            Select Country
                                          </option>
                                        </select>
                                      </li>
                                      <li class="p-0 m-0">
                                        <select
                                          class="form-control-custom dropdown-toogle-icon"
                                          name="ssc"
                                          id="getSubCatCategoryDataHeader1"
                                        >
                                          <option value="" hidden="">
                                            Select State
                                          </option>
                                        </select>
                                      </li>
                                      <li class="p-0 m-0">
                                        <button
                                          type="submit"
                                          class="search-btn"
                                        >
                                          {" "}
                                          <span id="searchbtn">SEARCH</span>
                                          <FontAwesomeIcon
                                            icon={faSearch}
                                            className="search-icon"
                                          />
                                        </button>
                                      </li>
                                    </ul>
                                  </Form>
                                </div>
                              </div>
                            </div>
                          </Modal.Body>
                          <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                              Close
                            </Button>
                          </Modal.Footer>
                        </Modal>
                      </div>
                    </span>

                    <img
                      className="login"
                      src="https://www.franchiseindia.com/newhomepage/assets/img/Login.svg"
                      alt="Login"
                    />

                    <div className="login-main-section" onClick={handleClick}>
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
                    {click && <Popup setClick={setClick} />}
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </header>
      {/* Mobile Version */}
      <Navbar collapseOnSelect fixed="top" expand="sm" id="navbar">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Nav.Link
                className="navlinks"
                href="/franchisor/registration/step/:id"
                target="_blank"
                data-toggle="modal"
                data-target="#expandFranchisenew"
              >
                Expand Your Franchise
              </Nav.Link>
              <span>|</span>
              <Nav.Link
                className="navlinks"
                href="/advertise-with-us-payment"
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
                    <option value="https://www.franchiseindia.com" selected="">
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
                <Nav.Link href="/">
                  <img className="logo" src={Logo} alt="FranchiseHub Logo" />
                </Nav.Link>
              </div>
              <br />
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
                href="/franchisor/registration/step/:id"
                data-toggle="modal"
                data-target="#login-pnl"
                id="mobilereg"
              >
                Register
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComponent;
