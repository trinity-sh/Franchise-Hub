import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Nav, Form } from "react-bootstrap";
import axios from "axios";
import "../components/styles/HeroSection.css";

function Categories(props) {
  const [data, setData] = useState([]);
  const [getCountry, setCountry] = useState([]);
  const [getState, setState] = useState([]);
  const [selectedState, setSelectedState] = useState([]);
  //making the country data unique
  const country = [...new Set(data.map((item) => item.country))];
  country.sort();
  //api for the countries and state
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
  // investment
  const [tab, setTab] = useState("");

  function handleTabs(e) {
    const name = e.target.name;
    setTab(name);
  }
  return (
    <div class="hero-search" id="hero-search">
      <Nav className="nav-tabs">
        <Nav.Link
          className="tabs"
          href="#location1"
          aria-controls="location1"
          role="tab"
          data-toggle="tab"
          name="location"
          onClick={handleTabs}
        >
          Location
        </Nav.Link>

        <Nav.Link
          className="tabs"
          href="#investment1"
          aria-controls="investment1"
          role="tab"
          data-toggle="tab"
          name="investment"
          onClick={handleTabs}
        >
          Investment
        </Nav.Link>
      </Nav>
      <div className="tab-content">
        <div id="categories1" className="tab-pane fade in active">
          <Form
            className="form-horizontal"
            method="get"
            onsubmit="return submitCategory1()"
          >
            <input type="hidden" name="catTab" value="1" />
            <ul className={props.search ? "modal-search" : "hero-search-main"}>
              <li class="p-0">
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

                  <option value="11" slug="sports-fitness-and-entertainment">
                    Sports, Fitness &amp; Entertainment
                  </option>
                </select>
              </li>
              {tab === "location" ? (
                <>
                  <li class="p-0">
                    <select
                      name="sc"
                      id="getSubCategoryDataHeader1"
                      onChange={(e) => handleCountry(e)}
                      class="form-control-custom dropdown-toogle-icon"
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
                  </li>
                  <li class="p-0">
                    <select
                      name="sc"
                      id="getSubCategoryDataHeader1"
                      onChange={handleState}
                      class="form-control-custom dropdown-toogle-icon"
                    >
                      <option value="" hidden="">
                        Select State
                      </option>
                      {getState.map((items) => (
                        <option key={items} value={selectedState}>
                          {items}
                        </option>
                      ))}
                    </select>
                  </li>
                </>
              ) : (
                <>
                  <li class="p-0">
                    <select
                      name="min_cost"
                      class="dropdown-toogle-icon"
                      id="minAmount1"
                    >
                      <option value="" hidden="">
                        {" "}
                        Select Min Investment{" "}
                      </option>
                      <option slug="10000" value="1">
                        Rs. 10000
                      </option>
                      <option slug="50000" value="3">
                        Rs. 50000
                      </option>
                      <option slug="200000" value="5">
                        Rs. 2lac
                      </option>
                      <option slug="500000" value="7">
                        Rs. 5lac
                      </option>
                      <option slug="1000000" value="9">
                        Rs. 10lac
                      </option>
                      <option slug="2000000" value="11">
                        Rs. 20lac
                      </option>
                      <option slug="3000000" value="13">
                        Rs. 30lac
                      </option>
                      <option slug="5000000" value="15">
                        Rs. 50lac
                      </option>
                      <option slug="10000000" value="17">
                        Rs. 1 Cr.
                      </option>
                      <option slug="20000000" value="19">
                        Rs. 2 Cr.
                      </option>
                      <option slug="50000000" value="21">
                        Rs. 5 Cr.
                      </option>
                    </select>
                  </li>
                  <li class="p-0">
                    <select
                      name="min_cost"
                      class="dropdown-toogle-icon"
                      id="minAmount1"
                    >
                      <option value="" hidden="">
                        {" "}
                        Select Max Investment{" "}
                      </option>
                      <option slug="10000" value="1">
                        Rs. 10000
                      </option>
                      <option slug="50000" value="3">
                        Rs. 50000
                      </option>
                      <option slug="200000" value="5">
                        Rs. 2lac
                      </option>
                      <option slug="500000" value="7">
                        Rs. 5lac
                      </option>
                      <option slug="1000000" value="9">
                        Rs. 10lac
                      </option>
                      <option slug="2000000" value="11">
                        Rs. 20lac
                      </option>
                      <option slug="3000000" value="13">
                        Rs. 30lac
                      </option>
                      <option slug="5000000" value="15">
                        Rs. 50lac
                      </option>
                      <option slug="10000000" value="17">
                        Rs. 1 Cr.
                      </option>
                      <option slug="20000000" value="19">
                        Rs. 2 Cr.
                      </option>
                      <option slug="50000000" value="21">
                        Rs. 5 Cr.
                      </option>
                    </select>
                  </li>
                </>
              )}

              <li class="p-0 m-0">
                <button type="submit" class="search-btn">
                  {" "}
                  <span id="searchbtn">SEARCH</span>
                  <FontAwesomeIcon icon={faSearch} className="search-icon" />
                </button>
              </li>
            </ul>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Categories;
