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
                  />
                  <Form.Check type="radio" label="No" />
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
                  <Form.Control type="text" placeholder="Enter your req" />
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
                  />
                  <Form.Check type="radio" label="No" />
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
                  />
                  <Form.Check type="radio" label="No" />
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
                          value="Life"
                          label="Lifetime"
                        />{" "}
                      </Col>
                      <Col>
                        <label class="col-xs-1 col-sm-1 col-md-1 spcasepad">
                          <input
                            type="radio"
                            name="franchise_term_duration"
                            value="No of years"
                            checked
                          />
                        </label>
                        <div class="col-xs-3 col-sm-4 col-md-4 row-no-padding">
                          <div class="input-group">
                            <select
                              name="franchise_term_year"
                              class=""
                              id="term_year_franchise"
                              title="Term Years"
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
                  />
                  <Form.Check type="radio" label="No" />
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
