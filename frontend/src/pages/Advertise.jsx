import React from "react";
import NavbarComponent from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";
import "./styles/Advertisement.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faRupee,
  faRupeeSign,
} from "@fortawesome/free-solid-svg-icons";
import { Card, Row, Col, Form, Button } from "react-bootstrap";

function Advertise() {
  return (
    <div>
      <NavbarComponent />
      <div class="pricblk">
        <div className="container">
          <h1 className="heading">More Visibility, More Business</h1>
          <div className="ctxt">
            Choose the perfect plan for you, 100% satisfaction guaranteed
          </div>

          <Row>
            <Col xs="12" lg="3" className="mt-4">
              <Card style={{ justifyContent: "center", alignItems: "center", textAlign:"center" }}>
                <Card.Body>
                  <h4>Free Listing</h4>
                  <Form.Group>
                    <span>Rs 0</span>
                    <br />
                    <br />
                    <Button variant="outline-danger">
                      <a href="/franchisor/registration/step/:id">Try Now</a>
                    </Button>
                  </Form.Group>
                </Card.Body>
              </Card>
            </Col>
            <Col xs="12" lg="3" className="mt-4">
              <Card>
                <Card.Body>
                  <h4>Super Saver</h4>
                </Card.Body>
              </Card>
            </Col>
            <Col xs="12" lg="3" className="mt-4">
              <Card>
                <Card.Body>
                  <h4>Sub Category</h4>
                </Card.Body>
              </Card>
            </Col>
            <Col xs="12" lg="3" className="mt-4">
              <Card>
                <Card.Body>
                  <h4>Master Category</h4>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </div>

      <div className="feblkcontainer">
        <div className="Container">
          <div className="feblk_body">
            <div class="feblk_head"> Know What’s Included with Each Plan </div>
            <ul class="priceplan">
              <li>
                <div class="reghead tleft">
                  Get Priority over other business listings under
                </div>
                <div class="iconblk htset tleft">
                  Get Instant Update over Phone, Email and SMS
                </div>

                <div class="iconblk htset tleft">
                  Make your business discoverable with detailed business
                  information
                </div>
                <div class="iconblk htset tleft">
                  Add your brand images to Increase your visibility and business
                  enquiries
                </div>
                <div class="iconblk htset tleft">
                  Boost on Search by Category, Location & Investment
                </div>
                <div class="iconblk htset tleft">
                  Showcase your logo with company listing
                </div>
                <div class="iconblk htset tleft">
                  Get access to “My Account” dashboard to track views and
                  responses instantly
                </div>
                <div class="iconblk htset tleft">
                  Thousands of Investors Can View Your Profile
                </div>
                <div class="iconblk htset tleft">
                  Local, National And International Exposure
                </div>
                <div class="iconblk htset tleft">
                  Generating more and better business inquiries
                </div>
                <div class="iconblk htset tleft">Visibility & Reach</div>
              </li>

              <li>
                <div class="reghead">Listing Pages</div>
                <div class="iconblk htset"> </div>
                <div class="iconblk htset">
                  <div class="pvalue">
                    <FontAwesomeIcon icon={faCheck} className="check" />
                  </div>
                </div>
                <div class="iconblk htset"> </div>
                <div class="iconblk htset"> </div>
                <div class="iconblk htset"> </div>
                <div class="iconblk htset">
                  <div class="pvalue">
                    <FontAwesomeIcon icon={faCheck} className="check" />
                  </div>
                </div>
                <div class="iconblk htset">
                  <div class="pvalue">Only Premium Investors</div>
                </div>
                <div class="iconblk htset">
                  <div class="pvalue">
                    <FontAwesomeIcon icon={faCheck} className="check" />
                  </div>
                </div>
                <div class="iconblk htset"> </div>
                <div class="iconblk htset"> </div>
              </li>
              <li>
                <div class="reghead">Sub -Sub Category</div>
                <div class="iconblk htset">
                  <div class="pvalue">
                    <FontAwesomeIcon icon={faCheck} className="check" />
                  </div>
                </div>
                <div class="iconblk htset">
                  <div class="pvalue">
                    <FontAwesomeIcon icon={faCheck} className="check" />
                  </div>
                </div>
                <div class="iconblk htset">
                  <div class="pvalue">
                    <FontAwesomeIcon icon={faCheck} className="check" />
                  </div>
                </div>
                <div class="iconblk htset">
                  <div class="pvalue">
                    <FontAwesomeIcon icon={faCheck} className="check" />
                  </div>
                </div>
                <div class="iconblk htset">
                  <div class="pvalue">
                    <FontAwesomeIcon icon={faCheck} className="check" />
                  </div>
                </div>
                <div class="iconblk htset">
                  <div class="pvalue">
                    <FontAwesomeIcon icon={faCheck} className="check" />
                  </div>
                </div>
                <div class="iconblk htset">
                  <div class="pvalue">
                    <FontAwesomeIcon icon={faCheck} className="check" />
                  </div>
                </div>
                <div class="iconblk htset">
                  <div class="pvalue">
                    <FontAwesomeIcon icon={faCheck} className="check" />
                  </div>
                </div>
                <div class="iconblk htset">
                  <div class="pvalue">
                    <FontAwesomeIcon icon={faCheck} className="check" />
                  </div>
                </div>
                <div class="iconblk htset">
                  {" "}
                  <div class="pvalue">40%</div>
                </div>
              </li>
              <li>
                <div class="reghead">Sub and Sub -Sub Category</div>
                <div class="iconblk htset">
                  <div class="pvalue">
                    <FontAwesomeIcon icon={faCheck} className="check" />
                  </div>
                </div>
                <div class="iconblk htset">
                  <div class="pvalue">
                    <FontAwesomeIcon icon={faCheck} className="check" />
                  </div>
                </div>
                <div class="iconblk htset">
                  <div class="pvalue">
                    <FontAwesomeIcon icon={faCheck} className="check" />
                  </div>
                </div>
                <div class="iconblk htset">
                  <div class="pvalue">
                    <FontAwesomeIcon icon={faCheck} className="check" />
                  </div>
                </div>
                <div class="iconblk htset">
                  <div class="pvalue">
                    <FontAwesomeIcon icon={faCheck} className="check" />
                  </div>
                </div>
                <div class="iconblk htset">
                  <div class="pvalue">
                    <FontAwesomeIcon icon={faCheck} className="check" />
                  </div>
                </div>
                <div class="iconblk htset">
                  <div class="pvalue">
                    <FontAwesomeIcon icon={faCheck} className="check" />
                  </div>
                </div>
                <div class="iconblk htset">
                  <div class="pvalue">
                    <FontAwesomeIcon icon={faCheck} className="check" />
                  </div>
                </div>
                <div class="iconblk htset">
                  <div class="pvalue">
                    <FontAwesomeIcon icon={faCheck} className="check" />
                  </div>
                </div>
                <div class="iconblk htset">
                  {" "}
                  <div class="pvalue">75%</div>
                </div>
              </li>

              <li>
                <div class="reghead">Master, Sub and Sub -Sub Category</div>
                <div class="iconblk htset">
                  <div class="pvalue">
                    <FontAwesomeIcon icon={faCheck} className="check" />
                  </div>
                </div>
                <div class="iconblk htset">
                  <div class="pvalue">
                    <FontAwesomeIcon icon={faCheck} className="check" />
                  </div>
                </div>
                <div class="iconblk htset">
                  <div class="pvalue">
                    <FontAwesomeIcon icon={faCheck} className="check" />
                  </div>
                </div>
                <div class="iconblk htset">
                  <div class="pvalue">
                    <FontAwesomeIcon icon={faCheck} className="check" />
                  </div>
                </div>
                <div class="iconblk htset">
                  {" "}
                  <div class="pvalue">
                    <FontAwesomeIcon icon={faCheck} className="check" />
                  </div>{" "}
                </div>
                <div class="iconblk htset">
                  {" "}
                  <div class="pvalue">
                    <FontAwesomeIcon icon={faCheck} className="check" />
                  </div>
                </div>
                <div class="iconblk htset">
                  {" "}
                  <div class="pvalue">
                    <FontAwesomeIcon icon={faCheck} className="check" />
                  </div>
                </div>
                <div class="iconblk htset">
                  {" "}
                  <div class="pvalue">
                    <FontAwesomeIcon icon={faCheck} className="check" />
                  </div>
                </div>
                <div class="iconblk htset">
                  {" "}
                  <div class="pvalue">
                    <FontAwesomeIcon icon={faCheck} className="check" />
                  </div>
                </div>
                <div class="iconblk htset">
                  {" "}
                  <div class="pvalue">100%</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <NewsLetter />
    </div>
  );
}

export default Advertise;
