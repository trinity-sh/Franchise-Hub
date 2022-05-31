import React, { useState } from "react";
import { Form, Card, Button, Row, Col } from "react-bootstrap";
import validator from "validator";

// creating functional component ans getting props from app.js and destucturing them
const Business = ({ nextStep, handleFormData, prevStep, values }) => {
  //creating error state for validation
  const [error, setError] = useState(false);

  // after form submit validating the form data using validator
  const submitFormData = (e) => {
    e.preventDefault();

    // checking if value of first name and last name is empty show error else take to next step
    if (validator.isEmpty(values.brandName) || validator.isEmpty(values.email)) {
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
                <Col  md="2">
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
                <Col  md="2" >
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
                <Col  md="2" >
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
                <Col  md="2" >
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
                <Col  md="2" >
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
                <Col  md="2" >
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
                <Col  md="2" >
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
                <Col  md="2" >
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
                <Col  md="2" >
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
                <Col  md="2" >
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
