import React, { useState } from "react";
import { Form, Card, Button, Row, Col, InputGroup } from "react-bootstrap";
import validator from "validator";

// creating functional component ans getting props from app.js and destucturing them
const Business = ({ nextStep, handleFormData, prevStep, values }) => {
  //creating error state for validation
  const [error, setError] = useState(false);

  // after form submit validating the form data using validator
  const submitFormData = (e) => {
    e.preventDefault();

    // checking if value of first name and last name is empty show error else take to next step
    if (
      validator.isEmpty(values.brand_name) ||
      validator.isEmpty(values.email)
    ) {
      setError(true);
    } else {
      nextStep();
    }
  };
  // industry change
  const [getIndustry, setIndustry] = useState("");
  function handleIndustry(e) {
    let val = e.target.value;
    setIndustry(val);
  }

  const [getOutlets, setOutlets] = useState("");
  function handleOutlets(e) {
    let val = e.target.value;
    setOutlets(val);
  }

  return (
    <>
      <h1 style={{ color: "#333333", fontSize: "30px" }}>Business Details</h1>
      <Card style={{ margin: "30px 0 80px" }}>
        <Card.Body>
          <Form onSubmit={submitFormData}>
            <Form.Group className="mb-3">
              <Row>
                <Col md="2">
                  <Form.Label>Brand Name</Form.Label>
                </Col>
                <Col>
                  {" "}
                  <Form.Control
                    style={{ border: error ? "2px solid red" : "" }}
                    defaultValue={values.brand_name}
                    type="text"
                    placeholder="Enter brand name"
                    onChange={handleFormData("personal_details.brand_name")}
                  />
                  {error ? (
                    <Form.Text style={{ color: "red" }}>
                      This is a required field
                    </Form.Text>
                  ) : (
                    ""
                  )}
                </Col>
              </Row>
            </Form.Group>
            <Form.Group className="mb-3">
              <Row>
                <Col md="2">
                  <Form.Label>Company Name</Form.Label>
                </Col>
                <Col>
                  {" "}
                  <Form.Control
                    style={{ border: error ? "2px solid red" : "" }}
                    defaultValue={values.company_name}
                    type="text"
                    placeholder="Enter your company name"
                    onChange={handleFormData("personal_details.company_name")}
                  />
                  {error ? (
                    <Form.Text style={{ color: "red" }}>
                      This is a required field
                    </Form.Text>
                  ) : (
                    ""
                  )}
                </Col>
              </Row>
            </Form.Group>
            <Form.Group className="mb-3">
              <Row>
                <Col md="2">
                  <Form.Label>CEO/ MD / Owner Name</Form.Label>
                </Col>
                <Col>
                  {" "}
                  <Form.Control
                    style={{ border: error ? "2px solid red" : "" }}
                    defaultValue={values.owner_name}
                    type="text"
                    placeholder="Enter the owner name"
                    onChange={handleFormData("personal_details.owner_name")}
                  />
                  {error ? (
                    <Form.Text style={{ color: "red" }}>
                      This is a required field
                    </Form.Text>
                  ) : (
                    ""
                  )}
                </Col>
              </Row>
            </Form.Group>
            <Form.Group className="mb-3">
              <Row>
                <Col md="2">
                  <Form.Label>CEO/ MD / Owner Email</Form.Label>
                </Col>
                <Col>
                  {" "}
                  <Form.Control
                    style={{ border: error ? "2px solid red" : "" }}
                    defaultValue={values.owner_email}
                    type="email"
                    placeholder="Enter the owner email"
                    onChange={handleFormData("personal_details.owner_email")}
                  />
                  {error ? (
                    <Form.Text style={{ color: "red" }}>
                      This is a required field
                    </Form.Text>
                  ) : (
                    ""
                  )}
                </Col>
              </Row>
            </Form.Group>
            <Form.Group className="mb-3">
              <Row>
                <Col md="2">
                  <Form.Label>CEO/ MD / Owner Mobile No</Form.Label>
                </Col>
                <Col>
                  {" "}
                  <Form.Control
                    style={{ border: error ? "2px solid red" : "" }}
                    defaultValue={values.owner_phone}
                    type="text"
                    placeholder="Enter the owner mobile"
                    onChange={handleFormData("personal_details.owner_phone")}
                  />
                  {error ? (
                    <Form.Text style={{ color: "red" }}>
                      Enter 10 digit number
                    </Form.Text>
                  ) : (
                    ""
                  )}
                </Col>
              </Row>
            </Form.Group>
            <Form.Group className="mb-3">
              <Row>
                <Col md="2">
                  <Form.Label>Address Details</Form.Label>
                </Col>
                <Col>
                  {" "}
                  <Form.Control
                    style={{ border: error ? "2px solid red" : "" }}
                    defaultValue={values.address_det}
                    type="text"
                    placeholder="Enter the address"
                    onChange={handleFormData("personal_details.address_det")}
                  />
                  {error ? (
                    <Form.Text style={{ color: "red" }}>
                      This is a required field
                    </Form.Text>
                  ) : (
                    ""
                  )}
                </Col>
              </Row>
            </Form.Group>
            {/* Country api */}
            <Form.Group className="mb-3">
              <Row>
                <Col md="2">
                  <Form.Label>Country</Form.Label>
                </Col>
                <Col>
                  {" "}
                  <Form.Control
                    style={{ border: error ? "2px solid red" : "" }}
                    defaultValue={values.country}
                    type="text"
                    placeholder="Enter the country"
                    onChange={handleFormData("personal_details.country")}
                  />
                  {error ? (
                    <Form.Text style={{ color: "red" }}>
                      This is a required field
                    </Form.Text>
                  ) : (
                    ""
                  )}
                </Col>
              </Row>
            </Form.Group>
            <Form.Group className="mb-3">
              <Row>
                <Col md="2">
                  <Form.Label>State</Form.Label>
                </Col>
                <Col>
                  {" "}
                  <Form.Control
                    style={{ border: error ? "2px solid red" : "" }}
                    defaultValue={values.state}
                    type="text"
                    placeholder="Enter the state"
                    onChange={handleFormData("personal_details.state")}
                  />
                  {error ? (
                    <Form.Text style={{ color: "red" }}>
                      This is a required field
                    </Form.Text>
                  ) : (
                    ""
                  )}
                </Col>
              </Row>
            </Form.Group>
            <Form.Group className="mb-3">
              <Row>
                <Col md="2">
                  <Form.Label>City</Form.Label>
                </Col>
                <Col>
                  {" "}
                  <Form.Control
                    style={{ border: error ? "2px solid red" : "" }}
                    defaultValue={values.city}
                    type="text"
                    placeholder="Enter the city"
                    onChange={handleFormData("personal_details.city")}
                  />
                  {error ? (
                    <Form.Text style={{ color: "red" }}>
                      This is a required field
                    </Form.Text>
                  ) : (
                    ""
                  )}
                </Col>
              </Row>
            </Form.Group>
            <Form.Group className="mb-3">
              <Row>
                <Col md="2">
                  <Form.Label>PinCode</Form.Label>
                </Col>
                <Col>
                  {" "}
                  <Form.Control
                    style={{ border: error ? "2px solid red" : "" }}
                    defaultValue={values.pincode}
                    type="text"
                    placeholder="Enter the pincode"
                    onChange={handleFormData("personal_details.pincode")}
                  />
                  {error ? (
                    <Form.Text style={{ color: "red" }}>
                      This is a required field
                    </Form.Text>
                  ) : (
                    ""
                  )}
                </Col>
              </Row>
            </Form.Group>

            <Form.Group className="mb-3">
              <Row>
                <Col md="2">
                  <Form.Label>Industry</Form.Label>
                </Col>
                <Col>
                  {" "}
                  <InputGroup>
                    <select
                      name="ind_main_cat"
                      id="ind_main_cat"
                      class="form-control myselectclass blur valid"
                      onChange={handleFormData("personal_details.industry")}
                    >
                      <option value="">---- Select Industry ----</option>
                      <option value="1">Beauty &amp; Health</option>
                      <option value="2">Food And Beverage</option>
                      <option value="3">Education</option>
                      <option value="5">Dealers &amp; Distributors</option>
                      <option value="6">Business Services</option>
                      <option value="7">Home Based Business</option>
                      <option value="8">Automotive</option>
                      <option value="9">Retail</option>
                      <option value="10">Fashion</option>
                      <option value="11">
                        Sports, Fitness &amp; Entertainment
                      </option>
                      <option value="263">Hotel, Travel &amp; Tourism</option>
                    </select>
                  </InputGroup>
                </Col>
              </Row>
            </Form.Group>

            <Form.Group className="mb-3">
              <Row>
                <Col md="2">
                  <Form.Label> No of Franchise Outlets</Form.Label>
                </Col>
                <Col>
                  <div class="input-group">
                    <select
                      name="no_of_franch_outlets"
                      id="no_fran_outlets"
                      class="form-control myselectclass blur"
                      onChange={handleFormData('personal_details.no_of_franch_outlets')}
                    >
                      <option value="">Select No of Outlets</option>

                      <option value="Less than 10">Less than 10</option>

                      <option value="10-20">10-20</option>

                      <option value="20-50">20-50</option>

                      <option value="50-100">50-100</option>

                      <option value="100-200">100-200</option>

                      <option value="200-500">200-500</option>

                      <option value="500-1000">500-1000</option>

                      <option value="1000-10000">1000-10000</option>

                      <option value="More than 10000">More than 10000</option>
                    </select>
                  </div>
                </Col>
              </Row>
            </Form.Group>

            <Form.Group className="mb-3">
              <label for="business_desc">Investment Range</label>
              <br />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                style={{ border: error ? "2px solid red" : "" }}
                defaultValue={values.inv}
                type="text"
                placeholder="Enter the investment"
                onChange={handleFormData("personal_details.inv")}
              />
              {error ? (
                <Form.Text style={{ color: "red" }}>
                  This is a required field
                </Form.Text>
              ) : (
                ""
              )}
            </Form.Group>

            <Form.Group className="mb-3">
              <label for="business_desc">Describe your Business</label>
              <br />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                onChange={handleFormData("business_desc")}
                as="textarea"
                rows="3"
              />
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

export default Business;
