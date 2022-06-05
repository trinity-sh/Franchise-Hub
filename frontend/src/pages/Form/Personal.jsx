import React, { useState } from "react";
import { Form, Card, Button, Row, Col } from "react-bootstrap";
import validator from "validator";

// creating functional component ans getting props from app.js and destucturing them
const Personal = ({ nextStep, handleFormData, values }) => {
  //creating error state for validation
  const [error, setError] = useState(false);

  // after form submit validating the form data using validator
  const submitFormData = (e) => {
    e.preventDefault();

    
    if (validator.isEmpty(values.personal_details.email)) {
      setError(true);
    } else {
      nextStep();
    }
  };

  return (
    <div>
      <h1 style={{color: "#333333" , fontSize: "30px"}}>Personal Details</h1>
      <Card style={{margin: "30px 0 80px"}}>
        <Card.Body>
          <Form onSubmit={submitFormData}>
            <Form.Group className="mb-3">
              <Row>
                <Col md="2">
                  <Form.Label>Email Id (UserId)*</Form.Label>
                </Col>
                <Col>
                  {" "}
                  <Form.Control
                    style={{ border: error ? "2px solid red" : "" }}
                    defaultValue={values.personal_details.email}
                    type="email"
                    placeholder="Enter your UserId"
                    onChange={handleFormData("personal_details.email")}
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
                  <Form.Label>Mobile *</Form.Label>
                </Col>
                <Col>
                  {" "}
                  <Form.Control
                    style={{ border: error ? "2px solid red" : "" }}
                    defaultValue={values.personal_details.mobile}
                    type="text"
                    placeholder="Enter your mobile number"
                    onChange={handleFormData("personal_details.mobile")}
                  />
                  {error ? (
                    <Form.Text style={{ color: "red" }}>
                      Enter a 10 digit mobile number
                    </Form.Text>
                  ) : (
                    ""
                  )}
                </Col>
              </Row>
            </Form.Group>
            <Button variant="outline-danger" type="submit" onClick={nextStep}>
              Next
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div> 
  );
};

export default Personal;
