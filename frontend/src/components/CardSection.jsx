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
