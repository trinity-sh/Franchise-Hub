import React, { useRef, useState } from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import "./styles/Popup.css";

function Popup(setClick) {
  const [show, setShow] = useState(setClick);

  const handleClose = () => setShow(false);

  const [user, setUser] = useState("");

  function handleForm(e) {}
  return (
    <Modal show={show} onHide={handleClose} animation={false}>
      <Modal.Header closeButton>
        <Modal.Title>
          <Row>
            <Col>
              <Button variant="dark" name="login" onClick={handleForm}>
                Login
              </Button>
            </Col>
            <Col>
              <Button variant="dark" name="register" onClick={handleForm}>
                Register
              </Button>
            </Col>
          </Row>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>{}</Modal.Body>
      <Modal.Footer className="modal-footer">
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
