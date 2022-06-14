import axios from "axios";
import React, { useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";

function InstaApply() {
    const [formData, setFormData] = useState({
        inv: "",
        name: "",
        email: "",
        mobile: "",
        state: "",
        city: "",
        pincode: ""
    })

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

    async function postData() {
        try {
            const response = await axios({
                method: "post",
                url: "https://franchise-hub-server.herokuapp.com/api/v1/admin/dashboard/forms/franchisee-application/all/1",
                data: {
                    metadata: {
                        is_read: false
                    },
                    content: formData
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
        <Card className="mt-4">
            <Card.Header>
                <Card.Title style={{ textAlign: "center" }}>
                    <strong> Insta Apply</strong>
                </Card.Title>
            </Card.Header>
            <Card.Body id="show-m" style={{ padding: "30px 50px", textAlign: "center" }}>
                <Form>
                    <Row>
                        <Col lg="6">
                            <Form.Group className="mb-3">
                                <Form.Control
                                    type="text"
                                    class="form-control blur"
                                    name="infoname"
                                    placeholder="Enter Name"
                                    onChange={handleFormData("name")}
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
                                    onChange={handleFormData("state")}
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
                                    onChange={handleFormData("email")}
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
                                    onChange={handleFormData("city")}
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
                                    onChange={handleFormData("mobile")}
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
                                    onChange={handleFormData("pincode")}
                                />
                            </Form.Group>
                        </Col>
                        <Col lg="6">
                            <Form.Group className="mb-3">
                                <select
                                    class="form-control blur"
                                    id="investment_range_gallery"
                                    name="investment_range"
                                    onChange={handleFormData("inv")}
                                >
                                    <option value="">Select Investment Range</option>l
                                    <option value=" 10000 - 50000">Rs. 10000 - 50000</option>l
                                    <option value="50000 - 2lac">Rs. 50000 - 2lac</option>l
                                    <option value=" 2lac - 5lac">Rs. 2lac - 5lac</option>l
                                    <option value="5lac - 10lac">Rs. 5lac - 10lac</option>l
                                    <option value="10lac - 20lac">Rs. 10lac - 20lac</option>l
                                    <option value="20lac - 30lac">Rs. 20lac - 30lac</option>l
                                    <option value="30lac - 50lac">Rs. 30lac - 50lac</option>l
                                    <option value="50lac - 1 Cr">Rs. 50lac - 1 Cr.</option>l
                                    <option value="1 Cr. - 2 Cr">Rs. 1 Cr. - 2 Cr</option>l
                                    <option value="2 Cr. - 5 Cr">Rs. 2 Cr. - 5 Cr</option>l
                                    <option value="5 Cr. above">Rs. 5 Cr. above</option>
                                </select>
                            </Form.Group>
                        </Col>
                    </Row>

                    <Button variant="outline-danger" className="mt-4" onClick={postData}>Submit</Button>
                </Form>



            </Card.Body>
        </Card>
    );
}

export default InstaApply;
