import React, { useState } from "react";
import { Form, Card, Button, Row, Col, InputGroup } from "react-bootstrap";
import Personal from "./Personal";

// creating functional component ans getting props from app.js and destucturing them
const Property = ({ nextStep, handleFormData, prevStep, values }) => {
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
  return (
    <>
      <h1 style={{ color: "#333333", fontSize: "30px" }}>Franchise Details</h1>
      <Card style={{ margin: "30px 0 80px" }}>
        <Card.Body>
          <Form onSubmit={submitFormData}>
            <Form.Group className="mb-3">
              <Row>
                <Col md="4">
                  <Form.Label>
                    Are there exclusive territorial rights given to a unit
                    franchise?
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
                    onChange={handleFormData(
                      "property_details.q_excl_terr_rights"
                    )}
                    onClick={handleRadio1}
                  />
                  <Form.Check
                    type="radio"
                    label="No"
                    value="no"
                    checked={radio1 === "no"}
                    onChange={handleFormData(
                      "property_details.q_excl_terr_rights"
                    )}
                    onClick={handleRadio1}
                  />
                </Col>
              </Row>
            </Form.Group>

            <Form.Group className="mb-3">
              <Row>
                <Col md="4">
                  <Form.Label>
                    Are any performance guarantees given to unit franchisee?
                  </Form.Label>
                </Col>
                <Col style={{ display: " flex" }}>
                  {" "}
                  <Form.Check
                    style={{ marginRight: "50px" }}
                    type="radio"
                    label="Yes"
                    value="yes"
                    checked={radio2 === "yes"}
                    onClick={handleRadio2}
                    onChange={handleFormData(
                      "personal_details.q_perf_guarantees"
                    )}
                  />
                  <Form.Check
                    type="radio"
                    label="No"
                    value="no"
                    checked={radio2 === "no"}
                    onClick={handleRadio2}
                    onChange={handleFormData(
                      "personal_details.q_perf_guarantees"
                    )}
                  />
                </Col>
              </Row>
            </Form.Group>
            <Form.Group className="mb-3">
              <Row>
                <Col md="4">
                  <Form.Label>
                    Are any advertising / marketing levies payable to the
                    franchisor?
                  </Form.Label>
                </Col>
                <Col style={{ display: " flex" }}>
                  {" "}
                  <Form.Check
                    style={{ marginRight: "50px" }}
                    type="radio"
                    label="Yes"
                    value="yes"
                    checked={radio3 === "yes"}
                    onClick={handleRadio3}
                    onChange={handleFormData(
                      "personal_details.q_adv_market_levies"
                    )}
                  />
                  <Form.Check
                    type="radio"
                    label="No"
                    value="no"
                    checked={radio3 === "no"}
                    onClick={handleRadio3}
                    onChange={handleFormData(
                      "personal_details.q_adv_market_levies"
                    )}
                  />
                </Col>
              </Row>
            </Form.Group>
            <Form.Group className="mb-3">
              <Row>
                <Col md="4">
                  <Form.Label>
                    What is the anticipated percentage return on investment?
                  </Form.Label>
                </Col>
                <Col>
                  {" "}
                  <Form.Control
                    type="text"
                    placeholder="Enter the value in %"
                    onChange={handleFormData("personal_details.antc_perc_ret")}
                  />
                </Col>
              </Row>
            </Form.Group>

            <Form.Group className="mb-3">
              <Row>
                <Col md="4">
                  <Form.Label>
                    What is the likely payback period of capital for a unit
                    franchise?
                  </Form.Label>
                </Col>
                <Col style={{ display: " flex" }}>
                  <InputGroup>
                    <div class="col-xs-3 col-sm-3 col-md-3 row-no-padding">
                      <select
                        name="payback_period_min"
                        class="form-control myselectclass4 valid"
                        id="range_rate_min"
                        onChange={handleFormData(
                          "personal_details.likely_payback_period.min"
                        )}
                      >
                        <option value="0">Min</option>
                        <option value="0" selected="">
                          0
                        </option>
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
                      </select>
                    </div>

                    <div class="col-xs-3 col-sm-3 col-md-3 row-no-padding">
                      <select
                        name="payback_period_max"
                        class="form-control myselectclass4 valid"
                        id="range_rate_max"
                        onChange={handleFormData(
                          "personal_details.likely_payback_period.max"
                        )}
                      >
                        <option value="0">Max</option>
                        <option value="0">0</option>
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
                      </select>
                    </div>

                    <div class="col-xs-3 col-sm-3 col-md-3 row-no-padding width148">
                      <select
                        name="payback_period_type"
                        class="form-control myselectclass4 valid"
                        title="payback_period_type"
                        onChange={handleFormData(
                          "personal_details.likely_payback_period.month_yr"
                        )}
                      >
                        <option value="Month" selected="">
                          Month
                        </option>
                        <option value="Year">Year</option>
                      </select>
                    </div>
                  </InputGroup>
                </Col>
              </Row>
            </Form.Group>

            <Form.Group className="mb-3">
              <Row>
                <Col md="4">
                  <Form.Label>
                    Are there any other investment requirements?
                  </Form.Label>
                </Col>
                <Col>
                  {" "}
                  <Form.Control
                    type="text"
                    placeholder="Enter other investments requirements"
                    onChange={handleFormData("personal_details.other_inv_req")}
                  />
                </Col>
              </Row>
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>

      <h1 style={{ color: "#333333", fontSize: "30px" }}>Property Details</h1>
      <Card style={{ margin: "30px 0 80px" }}>
        <Card.Body>
          <Form onSubmit={submitFormData}>
            <Form.Group className="mb-3">
              <Row>
                <Col md="4">
                  <Form.Label>
                    What type of property is required for this franchise
                    opportunity ?
                  </Form.Label>
                </Col>
                <Col style={{ display: " flex" }}>
                  <InputGroup>
                    <div>
                      <select
                        name="payback_period_min"
                        class="form-control"
                        id="range_rate_min"
                        onChange={handleFormData(
                          "property_details.typ_prop_req"
                        )}
                      >
                        <option value="0"></option>
                        <option value="0" selected="">
                          Select Property type
                        </option>
                        <option value="Domestic">Domestic</option>
                        <option value="Comercial">Comercial</option>
                      </select>
                    </div>
                  </InputGroup>
                </Col>
              </Row>
            </Form.Group>

            <Form.Group className="mb-3">
              <Row>
                <Col md="4">
                  <Form.Label>Floor Area Requirements</Form.Label>
                </Col>
                <Col style={{ display: "flex" }}>
                  <div class="col-xs-12 col-sm-6 row-no-padding width184 FlrAreaMin">
                    <div class="input-group">
                      <input
                        type="text"
                        name="prop_area_min"
                        id="prop_area_min"
                        pattern="[0-9]{2,5}"
                        minlength="2"
                        maxlength="5"
                        class="form-control blur"
                        onChange={handleFormData(
                          "property_details.floor_area_req.min"
                        )}
                      />
                    </div>
                  </div>
                  <div class="col-xs-12 col-sm-3 row-no-padding wwidth148 FlrAreaMax">
                    <input
                      type="text"
                      name="prop_area_max"
                      id="prop_area_max"
                      pattern="[0-9]{3,6}"
                      minlength="3"
                      maxlength="6"
                      class="form-control blur"
                      onChange={handleFormData(
                        "property_details.floor_area_req.max"
                      )}
                    />
                  </div>

                  <div class="col-xs-12 col-sm-3 row-no-padding wwidth148 FlrAreaSqFt">
                    <input
                      class="form-control"
                      id="range-rate"
                      disabled
                      placeholder="Sq. Ft."
                    />
                  </div>
                </Col>
              </Row>
            </Form.Group>
            <Form.Group className="mb-3">
              <Row>
                <Col md="4">
                  <Form.Label>Preferred location</Form.Label>
                </Col>
                <Col style={{ display: " flex" }}>
                  {" "}
                  <Form.Control
                    type="text"
                    placeholder="Enter Preffered location"
                    onChange={handleFormData("property_details.pref_loc")}
                  />
                </Col>
              </Row>
            </Form.Group>
            <Form.Group className="mb-3">
              <Row>
                <Col md="4">
                  <Form.Label>
                    Do you provide site selection assistance?
                  </Form.Label>
                </Col>
                <Col style={{ display: " flex" }}>
                  {" "}
                  <Form.Check
                    style={{ marginRight: "50px" }}
                    type="radio"
                    label="Yes"
                    value="yes"
                    checked={radio4 === "yes"}
                    onClick={handleRadio4}
                    onChange={handleFormData(
                      "property_details.q_site_select_assist"
                    )}
                  />
                  <Form.Check
                    type="radio"
                    label="No"
                    value="no"
                    checked={radio4 === "no"}
                    onClick={handleRadio4}
                    onChange={handleFormData(
                      "property_details.q_site_select_assist"
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

export default Property;
