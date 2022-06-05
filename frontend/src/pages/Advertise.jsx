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
import {Row, Col, Form, Button } from "react-bootstrap";

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

          <Row className="mt-4">
            <Col xs="12" lg="3" className="mt-4">
              <div class="card-deck mb-3 text-center">
                <div class="card mb-4 shadow-sm">
                  <div class="card-header">
                    <h4 class="my-0 font-weight-normal">Free</h4>
                  </div>
                  <div class="card-body" style={{ height: "350px" }}>
                    <h1 class="card-title pricing-card-title">
                      Rs 0 <small class="text-muted">/ mo</small>
                    </h1>
                    <ul class="list-unstyled mt-3 mb-4">
                      <li>
                        Get Priority over other business listings under - List
                        Page
                      </li>
                      <br />
                      <li>Get Maximum 5 Leads in a month</li>
                    </ul>
                    <a href="/franchisor/registration/step/:id">
                    <button
                      type="button"
                      class="btn btn-lg btn-block btn-outline-danger"
                    >
                      Try Now
                    </button>
                    </a>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs="12" lg="3" className="mt-4">
              <div class="card-deck mb-3 text-center">
                <div class="card mb-4 shadow-sm">
                  <div class="card-header">
                    <h4 class="my-0 font-weight-normal">Super Saver</h4>
                  </div>
                  <div class="card-body" style={{ height: "350px" }}>
                    <h1 class="card-title pricing-card-title">
                      Rs 9999 <small class="text-muted">/ mo</small>
                    </h1>
                    <ul class="list-unstyled mt-3 mb-4">
                      <li>
                        Get Priority over other business listings under - Sub -
                        Sub Category
                      </li>
                      <br />
                      <li>Visibility & Reach - 40%</li>
                    </ul>
                    <button
                      type="button"
                      class="btn btn-lg btn-block btn-outline-danger"
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs="12" lg="3" className="mt-4">
              <div class="card-deck mb-3 text-center">
                <div class="card mb-4 shadow-sm">
                  <div class="card-header">
                    <h4 class="my-0 font-weight-normal">Sub Category</h4>
                  </div>
                  <div class="card-body" style={{ height: "350px" }}>
                    <h1 class="card-title pricing-card-title">
                      Rs 19999 <small class="text-muted">/ mo</small>
                    </h1>
                    <ul class="list-unstyled mt-3 mb-4">
                      <li>
                        Get Priority over other business listings under - Sub
                        and Sub - Sub Category
                      </li>
                      <br />
                      <li>Visibility & Reach - 70%</li>
                    </ul>
                    <button
                      type="button"
                      class="btn btn-lg btn-block btn-outline-danger"
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </Col>

            <Col xs="12" lg="3" className="mt-4">
              <div class="card-deck mb-3 text-center">
                <div class="card mb-4 shadow-sm">
                  <div class="card-header">
                    <h4 class="my-0 font-weight-normal">Master Category</h4>
                  </div>
                  <div class="card-body" style={{ height: "350px" }}>
                    <h1 class="card-title pricing-card-title">
                      Rs 39999 <small class="text-muted">/ mo</small>
                    </h1>
                    <ul class="list-unstyled mt-3 mb-4">
                      <li>
                      Get Priority over other business listings under - Master, Sub and Sub -Sub Category
                      </li>
                      <br />
                      <li>Visibility & Reach - 100%</li>
                    </ul>
                    <button
                      type="button"
                      class="btn btn-lg btn-block btn-outline-danger"
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
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
