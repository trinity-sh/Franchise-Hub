import React from "react";
import "./styles/CardSection.css";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

function CardSection() {
  return (
    <main className="main">
      <section class="card-section section-30" id="card-section">
        <Container className="askme">
          <Row class="justify-content-center">
            <Col class="col-md-12">
              <Card class="card-m card-p-20">
                <Row class="justify-content-center">
                  <Col class="md-8">
                    <Row class="justify-content-center">
                      <Col class="col-md-6 col-lg-6 col-xl-6">
                        <div class="business-a">
                          <a href="https://www.franchiseindia.com/investor/create">
                            Start A Business Today{" "}
                            <span class="smallimp">
                              (Investor Registration)
                            </span>
                            <svg
                              class="svg-inline--fa fa-chevron-right fa-w-10 float-right icon-bar-main-fihl"
                              aria-hidden="true"
                              data-prefix="fas"
                              data-icon="chevron-right"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 320 512"
                              data-fa-i2svg=""
                            >
                              <path
                                fill="currentColor"
                                d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
                              ></path>
                            </svg>
                          </a>
                        </div>
                      </Col>
                      <div class="col-md-6 col-lg-6 col-xl-6">
                        <div class="business-a">
                          <a href="https://www.franchiseindia.com/franchisor/registration/step/1">
                            Want to advertise{" "}
                            <span class="smallimp">
                              (Franchisor Registration)
                            </span>
                            <svg
                              class="svg-inline--fa fa-chevron-right fa-w-10 float-right icon-bar-main-fihl"
                              aria-hidden="true"
                              data-prefix="fas"
                              data-icon="chevron-right"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 320 512"
                              data-fa-i2svg=""
                            >
                              <path
                                fill="currentColor"
                                d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
                              ></path>
                            </svg>
                          </a>
                        </div>
                      </div>
                      <div class="col-md-12 pt-30 about">
                        <h4> Why Should I Register ?</h4>
                        To get access to over 10000+ Franchise Business
                        Opportunities.
                        <br />
                        Network with the growing Business Community to get
                        expert interventions to let you learn <br /> to Grow
                        &amp; Expand your Business with Franchising.
                      </div>
                    </Row>
                  </Col>
                  <div class="col-md-4">
                    <div class="form-ask-experts">
                      <h4>Ask our Experts</h4>
                      <form id="homepage" name="homepage" method="post">
                        <div class="raido-main-section">
                          <ul class="radio-main">
                            <li>
                              <div class="radio">
                                <label>
                                  <input
                                    type="radio"
                                    name="optionsRadios"
                                    id="optionsRadios3"
                                    checked=""
                                    value="franchisor"
                                  />{" "}
                                  Expand My Brand{" "}
                                </label>
                              </div>
                            </li>
                            <li>
                              <div class="radio">
                                <label>
                                  <input
                                    type="radio"
                                    name="optionsRadios"
                                    id="optionsRadios1"
                                    value="investor"
                                  />{" "}
                                  Buy a Franchise
                                </label>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div class="input-group mb-15 form-input">
                          <span class="input-group-addon">
                            <div class="icon-section-main">
                              <img
                                src="https://www.franchiseindia.com/newhomepage/assets/img/email.png"
                                alt="email-icon"
                              />
                            </div>
                          </span>
                          <input
                            type="email"
                            class="form-control blur"
                            required=""
                            name="emailfreeadvice"
                            id="emailfreeadvice"
                            placeholder="Enter Email"
                          />
                        </div>
                        <div class="input-group mb-15 form-input">
                          <span class="input-group-addon">
                            <div class="icon-section-main">
                              <img
                                src="https://www.franchiseindia.com/newhomepage/assets/img/phone.png"
                                alt="phone-icon"
                              />
                            </div>
                          </span>
                          <input
                            type="text"
                            class="form-control blur"
                            maxlength="10"
                            name="mobilefreeadvice"
                            id="mobilefreeadvice"
                            placeholder="Enter Mobile No"
                            required=""
                          />
                        </div>
                        {/* <div id="askMsg">
                          <div class="green">
                            Thank You for Submitting information for Free
                            Advice!
                          </div>
                        </div> */}
                        <Button variant="danger" id="btnhome">
                          Submit
                        </Button>
                      </form>
                    </div>
                  </div>
                </Row>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
}

export default CardSection;
