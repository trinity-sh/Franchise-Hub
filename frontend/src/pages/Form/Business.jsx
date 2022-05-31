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
      validator.isEmpty(values.brandName) ||
      validator.isEmpty(values.email)
    ) {
      setError(true);
    } else {
      nextStep();
    }
  };
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
                    defaultValue={values.brandName}
                    type="text"
                    placeholder="Enter brand name"
                    onChange={handleFormData("brandName")}
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
                    defaultValue={values.companyName}
                    type="text"
                    placeholder="Enter your company name"
                    onChange={handleFormData("companyName")}
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
                    defaultValue={values.ownerName}
                    type="text"
                    placeholder="Enter the owner name"
                    onChange={handleFormData("ownerName")}
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
                    defaultValue={values.ownerName}
                    type="text"
                    placeholder="Enter the owner name"
                    onChange={handleFormData("ownerName")}
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
                    defaultValue={values.ownerEmail}
                    type="email"
                    placeholder="Enter the owner email"
                    onChange={handleFormData("ownerEmail")}
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
                    defaultValue={values.ownerMobile}
                    type="text"
                    placeholder="Enter the owner mobile"
                    onChange={handleFormData("ownerMobile")}
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
                    defaultValue={values.address}
                    type="text"
                    placeholder="Enter the address"
                    onChange={handleFormData("address")}
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
                    onChange={handleFormData("country")}
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
                    onChange={handleFormData("state")}
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
                    onChange={handleFormData("city")}
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
                    onChange={handleFormData("pincode")}
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
                      onchange="getSubCategory(this.value)"
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
                      name="no_fran_outlets"
                      id="no_fran_outlets"
                      class="form-control myselectclass blur"
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
              <label
                for="business_desc"
              >
                Describe your Business
              </label>
              <br/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Control as="textarea" rows="3" />
            </Form.Group>
            

            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <Button variant="primary" onClick={prevStep}>
                Previous
              </Button>

              <Button variant="primary" type="submit">
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
