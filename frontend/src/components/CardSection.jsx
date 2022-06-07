import React, { useEffect, useState } from "react";
import "./styles/CardSection.css";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import axios from "axios";

function CardSection() {
  const [formData, setFormData] = useState({
    advise_on: "",
    email: "",
    phone_no: "",
  });
  const [radio, setRadio] = useState("");
  const [handleSubmit, setSubmit] = useState(false);

  function handleRadios(e) {
    let val = e.target.value;
    setRadio(val);
  }

  const handleFormData = (input) => (e) => {
    // input value from the form
    const { value } = e.target;

    //updating for data state taking previous state and then adding new value to create new object
    setFormData((prevState) => ({
      ...prevState,
      [input]: value,
    }));
    console.log(value);
  };

  async function freeAdviceData() {
    try {
      const response = await axios({
        method: "post",
        url: "https://franchise-hub-server.herokuapp.com/api/v1/webview/forms/free-advice/new",
        data: {
          metadata: {
            is_read: false,
          },
          content: formData,
        },
      });

      console.log(response.data);

      // return  response;
    } catch (error) {
      console.log("error");
      return [];
    }
    setSubmit(true);
  }

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
                              <Form.Check
                                type="radio"
                                label=" Expand My Brand"
                                checked={radio === "expand brand"}
                                value="expand brand"
                                onClick={handleRadios}
                                onChange={handleFormData("advise_on")}
                              />
                            </li>
                            <li>
                            <Form.Check
                                type="radio"
                                label=" Buy a Franchise"
                                checked={radio === "buy franchise"}
                                value="buy franchise"
                                onClick={handleRadios}
                                onChange={handleFormData("advise_on")}
                              />
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
                            onChange={handleFormData("email")}
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
                            onChange={handleFormData("phone_no")}
                          />
                        </div>
                        {/* <div id="askMsg">
                          <div class="green">
                            Thank You for Submitting information for Free
                            Advice!
                          </div>
                        </div> */}
                        <Button variant="danger" onClick={freeAdviceData}>
                          Submit
                        </Button>
                        {handleSubmit ? (
                          <p className="mt-3">
                            Woahh!! Your form have been submitted"{" "}
                          </p>
                        ) : null}
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
