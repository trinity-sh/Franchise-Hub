import React, { useRef, useState } from "react";
import { Button, Col, Form, InputGroup, Modal, Row } from "react-bootstrap";
import "./styles/Popup.css";

function Popup(setClick) {
  const [show, setShow] = useState(setClick);

  const handleClose = () => setShow(false);

  return (
    <Modal show={show} onHide={handleClose} animation={false}>
      <Modal.Header closeButton>
        <Modal.Title>
         Admin Login
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>UserName:</Form.Label>
              <Form.Control
                type="text"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Password:</Form.Label>
              <Form.Control type="password" />
            </Form.Group>
            <Button variant="danger">Submit</Button>
          </Form>
      </Modal.Body>
      <Modal.Footer className="modal-footer" style={{textAlign: "left"}}>
        <span>Why should I register? </span>
        <br />
        <span>
          To get access to over 10000+ Franchise Business Opportunities.
        </span>
        <span>
          Network with the growing Business Community to get expert
          interventions to let you learn to Grow & Expand your Business with
          Franchising.
        </span>
      </Modal.Footer>
    </Modal>
  );
}

export default Popup;
