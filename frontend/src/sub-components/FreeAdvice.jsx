import axios from "axios";
import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

function FreeAdvice(props) {
  const [formData, setFormData] = useState({
    advise_on: "",
    email: "",
    phone_no: "",
  });
  const [radio, setRadio] = useState("");


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
      alert("Form submitted sucessfully!");

      // return  response;
    } catch (error) {
      console.log("error");
      alert("Opps! Some error occurred");
      return [];
    }

  }
  return (
    <>
      <Row>
        <Col>
          <Form.Group className="mb-3">
            <Form.Check
              type="radio"
              label="Expand my brand"
              checked={radio === "expand brand"}
              value="expand brand"
              onClick={handleRadios}
              onChange={handleFormData("advise_on")}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3">
            <Form.Check
              type="radio"
              label="Buy a Franchise"
              checked={radio === "buy franchise"}
              value="buy franchise"
              onClick={handleRadios}
              onChange={handleFormData("advise_on")}
            />
          </Form.Group>
        </Col>
      </Row>

      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="name@example.com"
            onChange={handleFormData("email")}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Mobile No</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter mobile number"
            onChange={handleFormData("phone_no")}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Details</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Form.Check
          type="checkbox"
          label="Yes, I want to subscribe to the newsletter"
          checked
        />
        <Form.Check
          type="checkbox"
          label="I agree to the terms and conditions"
          checked
        />
        <Button variant="danger" className="mt-4" onClick={freeAdviceData}>
          Submit
        </Button>

      </Form>
    </>
  );
}

export default FreeAdvice;
