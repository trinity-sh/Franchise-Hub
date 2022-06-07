import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Form,
  Row,
  Col,
  InputGroup,
  Modal,
} from "react-bootstrap";
import BrandPage from "../BrandPage";
import validator from "validator";
import axios from "axios";

function Payments({ nextStep, handleFormData, prevStep, values }) {
  const [error, setError] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const submitFormData = (e) => {
    e.preventDefault();

    if (validator.isEmpty(values.logo) || validator.isEmpty(values.gst)) {
      setError(true);
    } else {
      nextStep();
    }
  };
 
  async function postData() {
    try {
      const response = await axios({
        method: "post",
        url: "https://franchise-hub-server.herokuapp.com/api/v1/webview/forms/franchisor-registration/new",
        data: {
          metadata:{
            is_read: false
          },
          content: values
        },
      });

      console.log(response.data);
      // return  response;
    } catch (error) {
      console.log("error");
      return [];
    }
  }
 

  

  return (
    <div>
      <span>Payment Terms: 100% Advance Payment with 18% GST</span>
      <br />
      <br />
      <span>
        Layout: <strong>Basic</strong>{" "}
      </span>
      <Button size="sm" variant="outline-danger" onClick={handleShow}>
        View example
      </Button>
      <Modal show={show} onHide={handleClose} fullscreen={true}>
        <Modal.Header closeButton>
          <Modal.Title>Basic Template</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <BrandPage />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Card style={{ margin: "30px 0 80px" }}>
        <Card.Body>
          <Form onSubmit={submitFormData}>
            <Form.Group className="mb-3">
              <Row>
                <Col md="4">
                  <Form.Label>Upload Company Logo (Max 2MB) *</Form.Label>
                </Col>
                <Col style={{ display: " flex" }}>
                  {" "}
                  <Form.Control
                    size="sm"
                    type="file"
                    defaultValue={values.logo}
                    onChange={handleFormData("final_rites.company_logo")}
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
                <Col md="4">
                  <Form.Label>Video Link</Form.Label>
                </Col>
                <Col style={{ display: " flex" }}>
                  {" "}
                  <Form.Control
                    placeholder="Enter video link"
                    type="text"
                    defaultValue={values.video}
                    onChange={handleFormData("final_rites.video_link")}
                  />
                </Col>
              </Row>
            </Form.Group>

            <Form.Group className="mb-3">
              <Row>
                <Col md="4">
                  <Form.Label>GST No</Form.Label>
                </Col>
                <Col style={{ display: " flex" }}>
                  {" "}
                  <Form.Control
                    placeholder="Enter your GST number"
                    type="text"
                    defaultValue={values.gst}
                    onChange={handleFormData("final_rites.gst_no")}
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
                <Col md="4">
                  <Form.Label>Mode of Payment</Form.Label>
                </Col>
                <Col style={{ display: " flex" }}>
                  {" "}
                  <InputGroup>
                    <select name="mop" id="mop" class="form-control">
                      <option value="OPTCRDC">Mode Of Payment</option>
                      <option value="OPTCRDC">Credit Card</option>
                      <option value="OPTDBCRD">Debit Card</option>
                      <option value="OPTEMI">EMI</option>
                      <option value="OPTNBK">Net Banking</option>
                    </select>
                  </InputGroup>
                </Col>
              </Row>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Check
                type="checkbox"
                label="Yes, I want to subscribe to the weekly Newsletter"
                checked
                onChange={handleFormData("final_rites.q_sub_news")}
              />
            </Form.Group>

            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <Button variant="outline-danger" type="submit" onClick={postData}>
                Submit
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Payments;
