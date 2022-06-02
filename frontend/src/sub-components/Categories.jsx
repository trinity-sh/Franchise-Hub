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

  return (
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
            onsubmit="return submitCategory1()"
          >
            <input type="hidden" name="catTab" value="1" />
            <ul className={props.search ? "modal-search" : "hero-search-main"}>
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

                  <option value="11" slug="sports-fitness-and-entertainment">
                    Sports, Fitness &amp; Entertainment
                  </option>
                </select>
              </li>
              <li class="p-0 m-0">
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
              <li class="p-0 m-0">
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
