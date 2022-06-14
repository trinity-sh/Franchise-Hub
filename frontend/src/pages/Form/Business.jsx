import React, { useEffect, useState } from "react";
import { Form, Card, Button, Row, Col, InputGroup } from "react-bootstrap";
import validator from "validator";
import axios from "axios";

// creating functional component ans getting props from app.js and destucturing them
const Business = ({ nextStep, handleFormData, prevStep, values }) => {
  //creating error state for validation
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  const [getCountry, setCountry] = useState([]);
  const [getState, setState] = useState([]);
  const [selectedState, setSelectedState] = useState([]);
  //making the country data unique
  const country = [...new Set(data.map((item) => item.country))];
  country.sort();

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

  useEffect(() => {
    axios
      .get(
        "https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json"
      )
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  function handleCountry(e) {
    e.persist();

    let states = data.filter((state) => state.country === e.target.value);

    states = [...new Set(states.map((item) => item.subcountry))];
    states.sort();
    setState(states);
  }
  console.log(getState);

  function handleState(e) {
    let cities = data.filter((city) => city.subcountry === e.target.value);
    console.log(cities);
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
                  <select
                    name="sc"
                    id="getSubCategoryDataHeader1"
                    class="form-control dropdown-toogle-icon"
                    onChange={handleFormData("personal_details.country")}
                    onClick={handleCountry}
                  >
                    <option value="" hidden="">
                      Select Country
                    </option>
                    {country.map((items) => (
                      <option key={items} value={items}>
                        {items}
                      </option>
                    ))}
                  </select>
                </Col>
              </Row>
            </Form.Group>
            <Form.Group className="mb-3">
              <Row>
                <Col md="2">
                  <Form.Label>State</Form.Label>
                </Col>
                <Col>
                  <select
                    name="sc"
                    id="getSubCategoryDataHeader1"
                    onChange={handleFormData("personal_details.state")}
                    className="form-control dropdown-toogle-icon"
                  >
                    <option value="" hidden="">
                      Select State
                    </option>
                    {getState.map((items) => (
                      <option key={items} value={items}>
                        {items}
                      </option>
                    ))}
                  </select>
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
                      <option value="Beauty and Health">Beauty &amp; Health</option>
                      <option value="Food and Beverage">Food and Beverage</option>
                      <option value="Education">Education</option>
                      <option value="Dealers and Distributors">Dealers &amp; Distributors</option>
                      <option value="Business Services">Business Services</option>
                      <option value="Home Based Business">Home Based Business</option>
                      <option value="Automotive">Automotive</option>
                      <option value="Retail">Retail</option>
                      <option value="Fashion">Fashion</option>
                      <option value="Sports, Fitness and Entertainment">
                        Sports, Fitness &amp; Entertainment
                      </option>
                      <option value="Hotel, Travel and Tourism">Hotel, Travel &amp; Tourism</option>
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
                      onChange={handleFormData(
                        "personal_details.no_of_franch_outlets"
                      )}
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
              <Row>
                <Col md="2">
                  <Form.Label> Investment Range</Form.Label>
                </Col>
                <Col>
                  <div class="input-group">
                    <select
                      name="no_of_franch_outlets"
                      id="no_fran_outlets"
                      class="form-control myselectclass blur"
                      onChange={handleFormData("personal_details.inv")}
                    >
                      <option value="">Investment Range</option>

                      <option slug="10000" value="10000">
                        Rs. 10000
                      </option>
                      <option slug="50000" value="50000">
                        Rs. 50000
                      </option>
                      <option slug="200000" value="200000">
                        Rs. 2lac
                      </option>
                      <option slug="500000" value="500000">
                        Rs. 5lac
                      </option>
                      <option slug="1000000" value="1000000">
                        Rs. 10lac
                      </option>
                      <option slug="2000000" value="2000000">
                        Rs. 20lac
                      </option>
                      <option slug="3000000" value="3000000">
                        Rs. 30lac
                      </option>
                      <option slug="5000000" value="5000000">
                        Rs. 50lac
                      </option>
                      <option slug="10000000" value="10000000">
                        Rs. 1 Cr.
                      </option>
                      <option slug="20000000" value="20000000">
                        Rs. 2 Cr.
                      </option>
                      <option slug="50000000" value=" 5 Cr">
                        Rs. 5 Cr.
                      </option>
                    </select>
                  </div>
                </Col>
              </Row>
            </Form.Group>
            

            <Form.Group className="mb-3">
              <label for="business_desc">Describe your Business</label>
              <br />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                onChange={handleFormData("personal_details.business_desc")}
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
