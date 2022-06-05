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
import Categories from "../sub-components/Categories";

function NavbarComponent() {
  const [click, setClick] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleClick() {
    setClick(!click);
  }

  const [advice, setAdvice] = useState(false);

  const ClosefreeAdvice = () => setAdvice(false);
  const freeAdvice = () => setAdvice(true);

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
                        onClick={freeAdvice}
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
                  <Modal show={advice} onHide={ClosefreeAdvice}>
                    <Modal.Header closeButton>
                      <Modal.Title>Free Advice-Ask our Experts</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Row>
                        <Col>
                          <Form.Group className="mb-3">
                            <Form.Check type="radio" label="Expand my brand" />
                          </Form.Group>
                        </Col>
                        <Col>
                          <Form.Group className="mb-3">
                            <Form.Check type="radio" label="Buy a Franchise" />
                          </Form.Group>
                        </Col>
                      </Row>

                      <Form>
                      <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Label>Name</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter name"
                            autoFocus
                          />
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Label>Email address</Form.Label>
                          <Form.Control
                            type="email"
                            placeholder="name@example.com"
                            
                          />
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Label>Mobile No</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter mobile number"
                            autoFocus
                          />
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlTextarea1"
                        >
                          <Form.Label>Details</Form.Label>
                          <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <Form.Check 
                          type="checkbox"
                          label="Yes, I want to subscribe to the newsletter"
                          checked
                        />
                         <Form.Check 
                          type="checkbox"
                          label="I agree to the terms and conditions"
                          checked
                        />
                      </Form>
                      
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={ClosefreeAdvice}>
                        Close
                      </Button>
                      <Button variant="danger" onClick={ClosefreeAdvice}>
                        Submit
                      </Button>
                    </Modal.Footer>
                  </Modal>
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
                          <option value="https://www.franchiseindia.com">
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
                            <Categories search={true} />
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
      <Navbar
        collapseOnSelect
        fixed="top"
        expand="sm"
        id="navbar"
        className="mob-nav"
      >
        <Container className="contain">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                className="navlinks"
                href="#"
                target="_blank"
                data-toggle="modal"
                data-target="#expandFranchisenew"
                onClick={freeAdvice}
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
          </Navbar.Collapse>

          <div>
            {" "}
            <Nav.Link href="/" className="mobile-logo">
              <img
                className="mobile-logo-img"
                src={Logo}
                alt="FranchiseHub Logo"
              />
            </Nav.Link>
          </div>

          {/* <InputGroup className="input-group-custom">
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
              </InputGroup> */}

          <span class="search" id="search" onClick={handleShow}>
            <div
              class="p-2 icon"
              data-toggle="modal"
              data-target="#search-main"
            >
              <img
                src="https://www.franchiseindia.com/newhomepage/assets/img/Search.svg"
                alt="Search"
              />
            </div>
          </span>

          <Nav.Link
            className="links"
            href="/franchisor/registration/step/:id"
            data-toggle="modal"
            data-target="#login-pnl"
            id="mobilereg"
          >
            <img
              src="https://www.franchiseindia.com/newhomepage/assets/img/Login.svg"
              alt="Login"
            />
          </Nav.Link>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComponent;
