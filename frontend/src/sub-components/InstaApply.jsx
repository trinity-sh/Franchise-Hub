import React from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";

function InstaApply() {
    return (
        <Card className="mt-4">
            <Card.Header>
                <Card.Title style={{ textAlign: "center" }}>
                    <strong> Insta Apply</strong>
                </Card.Title>
            </Card.Header>
            <Card.Body id="show-m" style={{ padding: "30px 50px" , textAlign: "center"}}>
                <Form>
                    <Row>
                        <Col lg="6">
                            <Form.Group className="mb-3">
                                <Form.Control
                                    type="text"
                                    class="form-control blur"
                                    name="infoname"
                                    placeholder="Enter Name"
                                />
                            </Form.Group>
                        </Col>
                        <Col lg="6">
                            <Form.Group className="mb-3">
                                <Form.Control
                                    type="text"
                                    class="form-control blur"
                                    name="infoname"
                                    placeholder="Enter State"
                                />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg="6">
                            <Form.Group className="mb-3">
                                <Form.Control
                                    type="email"
                                    class="form-control blur"
                                    name="infoname"
                                    placeholder="Enter Email"
                                />
                            </Form.Group>
                        </Col>
                        <Col lg="6">
                            <Form.Group className="mb-3">
                                <Form.Control
                                    type="text"
                                    class="form-control blur"
                                    name="infoname"
                                    placeholder="Enter City"
                                />
                            </Form.Group>
                        </Col>
                    </Row>


                    <Row>
                        <Col lg="6">
                            <Form.Group className="mb-3">
                                <Form.Control
                                    type="email"
                                    class="form-control blur"
                                    name="infoname"
                                    placeholder="Enter Mobile"
                                />
                            </Form.Group>
                        </Col>
                        <Col lg="6">
                            <Form.Group className="mb-3">
                                <Form.Control
                                    type="text"
                                    class="form-control blur"
                                    name="infoname"
                                    placeholder="Enter Address"
                                />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg="6">
                            <Form.Group className="mb-3">
                                <Form.Control
                                    type="text"
                                    class="form-control blur"
                                    name="infoname"
                                    placeholder="Enter Pincode"
                                />
                            </Form.Group>
                        </Col>
                        <Col lg="6">
                            <Form.Group className="mb-3">
                                <select
                                    class="form-control blur"
                                    id="investment_range_gallery"
                                    name="investment_range"
                                >
                                    <option value="">Select Investment Range</option>l
                                    <option value="1">Rs. 10000 - 50000</option>l
                                    <option value="3">Rs. 50000 - 2lac</option>l
                                    <option value="5">Rs. 2lac - 5lac</option>l
                                    <option value="7">Rs. 5lac - 10lac</option>l
                                    <option value="9">Rs. 10lac - 20lac</option>l
                                    <option value="11">Rs. 20lac - 30lac</option>l
                                    <option value="13">Rs. 30lac - 50lac</option>l
                                    <option value="15">Rs. 50lac - 1 Cr.</option>l
                                    <option value="17">Rs. 1 Cr. - 2 Cr</option>l
                                    <option value="19">Rs. 2 Cr. - 5 Cr</option>l
                                    <option value="21">Rs. 5 Cr. above</option>
                                </select>
                            </Form.Group>
                        </Col>
                    </Row>

                    <Button variant="outline-danger" className="mt-4">Submit</Button>
                </Form>


                
            </Card.Body>
        </Card>
    );
}

export default InstaApply;
