import React, { useState } from "react";
import { Form, Card, Button, Row, Col, InputGroup } from "react-bootstrap";

// creating functional component ans getting props from app.js and destucturing them
const Agreements = ({ nextStep, handleFormData, prevStep, values }) => {
  //creating error state for validation

  // after form submit validating the form data using validator
  const submitFormData = (e) => {
    e.preventDefault();

    // checking if value of first name and last name is empty show error else take to next step
  };

  const [radio1, setRadio1] = useState("");
  const [radio2, setRadio2] = useState("");
  const [radio3, setRadio3] = useState("");
  const [radio4, setRadio4] = useState("");
  const [radio5, setRadio5] = useState("");
  function handleRadio1(e) {
    const val = e.target.value;
    setRadio1(val);
  }
  function handleRadio2(e) {
    const val = e.target.value;
    setRadio2(val);
  }
  function handleRadio3(e) {
    const val = e.target.value;
    setRadio3(val);
  }
  function handleRadio4(e) {
    const val = e.target.value;
    setRadio4(val);
  }
  function handleRadio5(e) {
    const val = e.target.value;
    setRadio5(val);
  }

  return (
    <>
      <h1 style={{ color: "#333333", fontSize: "30px" }}>Training Details</h1>
      <Card style={{ margin: "30px 0 80px" }}>
        <Card.Body>
          <Form onSubmit={submitFormData}>
            <Form.Group className="mb-3">
              <Row>
                <Col md="4">
                  <Form.Label>
                    Do you currently have detailed operating manuals for
                    franchises?
                  </Form.Label>
                </Col>
                <Col style={{ display: " flex" }}>
                  {" "}
                  <Form.Check
                    style={{ marginRight: "50px" }}
                    type="radio"
                    label="Yes"
                    value="yes"
                    checked={radio1 === "yes"}
                    onClick={handleRadio1}
                    onChange={handleFormData(
                      "training_details.q_hv_det_op_man"
                    )}
                  />
                  <Form.Check
                    type="radio"
                    label="No"
                    value="no"
                    checked={radio1 === "no"}
                    onClick={handleRadio1}
                    onChange={handleFormData(
                      "training_details.q_hv_det_op_man"
                    )}
                  />
                </Col>
              </Row>
            </Form.Group>

            <Form.Group className="mb-3">
              <Row>
                <Col md="4">
                  <Form.Label>
                    Where is the franchisee training done?
                  </Form.Label>
                </Col>
                <Col>
                  {" "}
                  <Form.Control
                    type="text"
                    placeholder="Enter your req"
                    onChange={handleFormData(
                      "training_details.whr_franch_training"
                    )}
                  />
                </Col>
              </Row>
            </Form.Group>
            <Form.Group className="mb-3">
              <Row>
                <Col md="4">
                  <Form.Label>
                    Is field assistance available for franchises?
                  </Form.Label>
                </Col>
                <Col style={{ display: " flex" }}>
                  {" "}
                  <Form.Check
                    style={{ marginRight: "50px" }}
                    type="radio"
                    label="Yes"
                    value="no"
                    checked={radio2 === "yes"}
                    onClick={handleRadio2}
                    onChange={handleFormData(
                      "training_details.q_field_assist_avail"
                    )}
                  />
                  <Form.Check
                    type="radio"
                    label="No"
                    checked={radio2 === "no"}
                    onClick={handleRadio2}
                    onChange={handleFormData(
                      "training_details.q_field_assist_avail"
                    )}
                  />
                </Col>
              </Row>
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>

      <h1 style={{ color: "#333333", fontSize: "30px" }}>Agreements Details</h1>
      <Card style={{ margin: "30px 0 80px" }}>
        <Card.Body>
          <Form onSubmit={submitFormData}>
            <Form.Group className="mb-3">
              <Row>
                <Col md="4">
                  <Form.Label>
                    Do you have a standard franchise agreement?
                  </Form.Label>
                </Col>
                <Col style={{ display: " flex" }}>
                  {" "}
                  <Form.Check
                    style={{ marginRight: "50px" }}
                    type="radio"
                    label="Yes"
                    checked={radio3 === "yes"}
                    onClick={handleRadio3}
                    onChange={handleFormData(
                      "agreement_details.q_hv_std_franch_agr"
                    )}
                  />
                  <Form.Check
                    type="radio"
                    label="No"
                    checked={radio3 === "no"}
                    onClick={handleRadio3}
                    onChange={handleFormData(
                      "agreement_details.q_hv_std_franch_agr"
                    )}
                  />
                </Col>
              </Row>
            </Form.Group>

            <Form.Group className="mb-3">
              <Row>
                <Col md="4">
                  <Form.Label>Duration of the Contract</Form.Label>
                </Col>
                <Col>
                  <div class="col-xs-12 col-sm-7 col-md-7 ">
                    <div class="row">
                      <Col>
                        <Form.Check
                          type="radio"
                          name="franchise_term_duration"
                          value="Lifetime"
                          label="lifetime"
                          checked={radio4 === "lifetime"}
                          onClick={handleRadio4}
                          onChange={handleFormData(
                            "agreement_details.duration_of_contr"
                          )}
                        />{" "}
                      </Col>
                      <Col>
                        <label class="col-xs-1 col-sm-1 col-md-1 spcasepad">
                          <Form.Check
                            type="radio"
                            name="franchise_term_duration"
                            value="years"
                            checked={radio4 === "years"}
                            onClick={handleRadio4}
                          />
                        </label>
                        <div class="col-xs-3 col-sm-4 col-md-4 row-no-padding">
                          <div class="input-group">
                            <select
                              name="franchise_term_year"
                              class=""
                              id="term_year_franchise"
                              title="Term Years"
                              onChange={handleFormData(
                                "agreement_details.duration_of_contr"
                              )}
                            >
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                              <option value="5">5</option>
                              <option value="6">6</option>
                              <option value="7">7</option>
                              <option value="8">8</option>
                              <option value="9">9</option>
                              <option value="10">10</option>
                              <option value="11">11</option>
                              <option value="12">12</option>
                              <option value="13">13</option>
                              <option value="14">14</option>
                              <option value="15">15</option>
                            </select>
                          </div>
                        </div>
                        <label> Years</label>
                      </Col>
                    </div>
                  </div>
                </Col>
              </Row>
            </Form.Group>

            <Form.Group className="mb-3">
              <Row>
                <Col md="4">
                  <Form.Label>Is the term renewable?</Form.Label>
                </Col>
                <Col style={{ display: " flex" }}>
                  {" "}
                  <Form.Check
                    style={{ marginRight: "50px" }}
                    type="radio"
                    label="Yes"
                    value="yes"
                    checked={radio5 === "yes"}
                    onClick={handleRadio5}
                    onChange={handleFormData(
                      "agreement_details.q_term_renewable"
                    )}
                  />
                  <Form.Check
                    type="radio"
                    label="No"
                    value="no"
                    checked={radio5 === "no"}
                    onClick={handleRadio5}
                    onChange={handleFormData(
                      "agreement_details.q_term_renewable"
                    )}
                  />
                </Col>
              </Row>
            </Form.Group>

            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <Button variant="outline-danger" onClick={prevStep}>
                Previous
              </Button>

              <Button variant="outline-danger" type="submit" onClick={nextStep}>
                Next
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export default Agreements;
