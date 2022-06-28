import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Nav, Form } from "react-bootstrap";
import axios from "axios";
import "../components/styles/HeroSection.css";
import { Link } from "react-router-dom";

function Categories(props) {
  const navigate = useNavigate();
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

  const [industry, setIndustry] = useState("");

  function handleIndustry(e) {
    let val = e.target.value;
    setIndustry(val);
  }

  // country values
  const [selectcountry, setSelectcountry] = useState("");
  function selectCountry(e) {
    let val = e.target.value;
    setSelectcountry(val);
  }
  // set states for select tag
  const [selectstate, setSelectstate] = useState("");
  function selectState(e) {
    let val = e.target.value;
    console.log(val);
    setSelectstate(val);
  }

  // set min investment and max investment
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");

  function setMinInvest(e) {
    const val = e.target.value;
    setMin(val);
  }
  function setMaxInvest(e) {
    const val = e.target.value;
    setMax(val);
  }
  // search state
  const [searchItem, setSearchItem] = useState("");
  function handlesearch() {
    if (tab === "location") {
      const x =
        "?search_by=location&industry=" +
        industry +
        "&country=" +
        selectcountry +
        "&state=" +
        selectstate;
      console.log(x);
      setSearchItem(x);
      navigate({
        pathname: "/business-opportunities",
        search: x,
      });
    } else if (tab === "investment") {
      const x =
        "?search_by=investment&industry=" +
        industry +
        "&min=" +
        min +
        "&max=" +
        max;
      setSearchItem(x);
      navigate({
        pathname: "/business-opportunities",
        search: x,
      });
    }
  }
  console.log(searchItem);
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
                  onChange={handleIndustry}
                >
                  <option value="" hidden="">
                    Select Industry
                  </option>

                  <option value="Automotive" slug="automotive">
                    Automotive
                  </option>

                  <option value="Beauty and Health" slug="beauty-and-health">
                    Beauty &amp; Health
                  </option>

                  <option value="Business Services" slug="business-services">
                    Business Services
                  </option>

                  <option
                    value="Dealers and Distributors"
                    slug="dealers-and-distributors"
                  >
                    Dealers &amp; Distributors
                  </option>

                  <option value="Education" slug="education">
                    Education
                  </option>

                  <option value="Fashion" slug="fashion">
                    Fashion
                  </option>

                  <option value="Food and Beverage" slug="food-and-beverage">
                    Food and Beverage
                  </option>

                  <option
                    value="Home Based Business"
                    slug="home-based-business"
                  >
                    Home Based Business
                  </option>

                  <option
                    value="Hotel, Travel and Tourism"
                    slug="hotels-and-resorts"
                  >
                    Hotel, Travel &amp; Tourism
                  </option>

                  <option value="Retail" slug="retail">
                    Retail
                  </option>

                  <option
                    value="Sports, Fitness and Entertainment"
                    slug="sports-fitness-and-entertainment"
                  >
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
                      onClick={selectCountry}
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
                      onChange={handleState}
                      class="form-control-custom dropdown-toogle-icon"
                      onClick={selectState}
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
                  </li>
                </>
              ) : (
                <>
                  <li class="p-0">
                    <select
                      name="min_cost"
                      class="dropdown-toogle-icon"
                      id="minAmount1"
                      onClick={setMinInvest}
                    >
                      <option value="" hidden="">
                        {" "}
                        Select Min Investment{" "}
                      </option>
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
                      <option slug="50000000" value="50000000">
                        Rs. 5 Cr.
                      </option>
                    </select>
                  </li>
                  <li class="p-0">
                    <select
                      name="min_cost"
                      class="dropdown-toogle-icon"
                      id="minAmount1"
                      onClick={setMaxInvest}
                    >
                      <option value="" hidden="">
                        {" "}
                        Select Max Investment{" "}
                      </option>
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
                      <option slug="50000000" value="50000000">
                        Rs. 5 Cr.
                      </option>
                    </select>
                  </li>
                </>
              )}

              <li class="p-0 m-0">
                <button type="submit" class="search-btn" onClick={handlesearch}>
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
