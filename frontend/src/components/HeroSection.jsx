import React from "react";
import { Container, Row, Col, Nav, Form } from "react-bootstrap";
import "./styles/HeroSection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function HeroSection() {
  return (
    <section class="hero-section" id="hero-section">
      <Container>
        <div className="lnkblk">
          <img src="https://www.franchiseindia.com/newhomepage/assets/img/remax-logo.png" />
        </div>
        <Row className="md-12">
          <div className="md-12">
            <h1>
              Search from
              <span>10000+ Business </span>
              options
            </h1>
            <h2>World's highest visited franchise website network</h2>
          </div>
          <Col class="md-12" id="heroBar">
            <div class="hero-search" id="hero-search">
              <Nav className="nav-tabs">
                <Nav.Link
                  className="tabs"
                  href="#location1"
                  aria-controls="location1"
                  role="tab"
                  data-toggle="tab"
                >
                  Location
                </Nav.Link>

                <Nav.Link
                  className="tabs"
                  href="#investment1"
                  aria-controls="investment1"
                  role="tab"
                  data-toggle="tab"
                >
                  Investment
                </Nav.Link>
              </Nav>
              <div class="tab-content">
                <div id="categories1" className="tab-pane fade in active">
                  <Form
                    className="form-horizontal"
                    method="get"
                    action="https://www.franchiseindia.com/category/searchby"
                    onsubmit="return submitCategory1()"
                  >
                    <input type="hidden" name="catTab" value="1" />
                    <ul className="hero-search-main">
                      <li class="p-0 m-0">
                        <select
                          name="mc"
                          className="form-control-custom dropdown-toogle-icon"
                          id="getMainCategoryDataHeader1"
                          onchange="getSubCategoryHeader1(this.value)"
                        >
                          <option value="" hidden="">
                            Select Industry
                          </option>

                          <option value="8" slug="automotive">
                            Automotive
                          </option>

                          <option value="1" slug="beauty-and-health">
                            Beauty &amp; Health
                          </option>

                          <option value="6" slug="business-services">
                            Business Services
                          </option>

                          <option value="5" slug="dealers-and-distributors">
                            Dealers &amp; Distributors
                          </option>

                          <option value="3" slug="education">
                            Education
                          </option>

                          <option value="10" slug="fashion">
                            Fashion
                          </option>

                          <option value="2" slug="food-and-beverage">
                            Food And Beverage
                          </option>

                          <option value="7" slug="home-based-business">
                            Home Based Business
                          </option>

                          <option value="263" slug="hotels-and-resorts">
                            Hotel, Travel &amp; Tourism
                          </option>

                          <option value="9" slug="retail">
                            Retail
                          </option>

                          <option
                            value="11"
                            slug="sports-fitness-and-entertainment"
                          >
                            Sports, Fitness &amp; Entertainment
                          </option>
                        </select>
                      </li>
                      <li class="p-0 m-0">
                        <select
                          name="sc"
                          id="getSubCategoryDataHeader1"
                          onchange="getSubCatCategoryHeader1(this.value)"
                          class="form-control-custom dropdown-toogle-icon"
                        >
                          <option value="" hidden="">
                            Select Sector
                          </option>
                        </select>
                      </li>
                      <li class="p-0 m-0">
                        <select
                          class="form-control-custom dropdown-toogle-icon"
                          name="ssc"
                          id="getSubCatCategoryDataHeader1"
                        >
                          <option value="" hidden="">
                            Select Service/Product
                          </option>
                        </select>
                      </li>
                      <li class="p-0 m-0">
                        <button type="submit" class="search-btn"> <span id="searchbtn">SEARCH</span>
                          <FontAwesomeIcon icon={faSearch} className="search-icon" />
                        </button>
                      </li>
                    </ul>
                  </Form>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default HeroSection;
