import React from "react";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";
import "./styles/Brandpage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

function BrandPage() {
  return (
    <>
      <Navbar />
      <div className="Brandrow bdy-spc Brandlanding">
        <div className="Brandcontainer">
          <div className="Brandrow">
            <div className="col-xs-12 col-sm-12 col-md-12">
              <div className="tab-content" id="bdy-height">
                <div className="left-pnl">
                  <div className="business-infonoimg">
                    <ul>
                      <li>
                        Area Req <div>150 - 450 Sq.ft</div>
                      </li>
                      <li>
                        Investment Range<div>INR 10 Lac - 20 Lac</div>
                      </li>
                      <li>
                        No. of Franchise Outlets<div>Less than 10</div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div id="business_tab" className="tab-section">
                  <div className="tab-sec-ttl">Business Details</div>
                  <div className="tab-sec-topics mx-height">
                    <div className="tab-sec-topics-desc">
                      <p>
                        <strong>About Us:</strong>
                      </p>
                      <p>
                        Globally Recognized Influencer Led Beauty &amp; Wellness
                        Line under one roof.
                      </p>
                      <p>
                        <strong>Scentials</strong> is bringing a unique
                        celebrity driven world-class beauty and wellness
                        platform that combines diverse range of exquisitely
                        crafted products curated by India’s top celebrities and
                        fashionistas.&nbsp;
                      </p>
                      <p>
                        Every celebrity brand has its own distinct value focused
                        on integrity &amp; high-quality of beauty products
                        driven through some serious research, science,
                        innovation and thoughtfulness.
                      </p>
                    </div>
                  </div>
                </div>
                <div id="investment_tab" className="tab-section">
                  <h2 className="tab-sec-ttl">Investment Details</h2>
                  <div className="tab-sec-topics">
                    <div className="tab-sec-topics-ttl">
                      Commenced Operations
                    </div>
                    <div className="keypoints">
                      <p>
                        Operations Commenced On
                        <span className="pull-right">2017</span>
                      </p>

                      <p>
                        Franchise Commenced On
                        <span className="pull-right">2022</span>
                      </p>
                    </div>
                    <div className="tab-sec-topics-ttl mrgn-tp">
                      Franchise Details
                    </div>
                    <div className="section unitblk">
                      <div className="ttl">Units</div>
                      <div className="keypoints">
                        <p>
                          Investment
                          <span className="pull-right">INR 10lac - 20lac</span>
                        </p>
                        <p>
                          Franchise/Brand Fee
                          <span className="pull-right">INR 300000</span>
                        </p>
                        <p>
                          Royalty/Commission
                          <span className="pull-right">00 %</span>
                        </p>
                      </div>
                    </div>
                    <div className="tab-sec-topics-ttl mrgn-tp">
                      Franchise Details
                    </div>
                    <div className="keypoints">
                      <p>
                        Exclusive territorial rights to a unit franchisee
                        <span className="pull-right fnone"> Yes </span>
                      </p>

                      <p>
                        Anticipated percentage return on investment
                        <span className="pull-right fnone">78 %</span>
                      </p>

                      <p>
                        Likely pay back period of capital for a Unit Franchise
                        <span className="pull-right fnone">1-2 Years</span>
                      </p>

                      <p>
                        Other investment requirements
                        <span className="pull-right fnone">00</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div id="property_id" className="tab-section">
                  <h3 className="tab-sec-ttl">Property Details</h3>
                  <div className="tab-sec-topics">
                    <div className="keypoints">
                      <p>
                        Type of property required for this franchise opportunity
                        <span className="pull-right fnone">Commercial</span>
                      </p>

                      <p>
                        Floor area requirement
                        <span className="pull-right fnone">
                          150 - 450 Sq.ft
                        </span>
                      </p>
                      <p>
                        Preferred location of unit franchise outlet
                        <span className="pull-right fnone">PAN</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div id="training_tab" className="tab-section">
                  <h3 className="tab-sec-ttl">Training Details</h3>
                  <div className="tab-sec-topics">
                    <div className="keypoints">
                      <p>
                        Detailed operating manuals for franchisees
                        <span className="pull-right fnone"> Yes </span>
                      </p>

                      <p>
                        Franchisee training location
                        <span className="pull-right fnone">
                          Corporate office
                        </span>
                      </p>

                      <p>
                        Is field assistance available for franchisee ?
                        <span className="pull-right fnone"> Yes </span>
                      </p>

                      <p>
                        Expert guidance from Head Office to franchisee in
                        opening the franchise
                        <span className="pull-right fnone"> Yes </span>
                      </p>

                      <p>
                        Current IT systems will be included in the franchise
                        <span className="pull-right fnone"> Yes </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div id="others_tab" className="tab-section">
                  <h3 className="tab-sec-ttl">Agreement &amp; Term Details</h3>
                  <div className="tab-sec-topics">
                    <div className="keypoints">
                      <p>
                        How long is the franchise term for?
                        <span className="pull-right fnone">5 Years</span>
                      </p>
                      <p>
                        Is the term renewable?
                        <span className="pull-right fnone"> Yes </span>
                      </p>
                    </div>
                  </div>
                </div>
                {/* <div className="tab-section frmwider">
                  <form
                    method="post"
                    id="wider-insta-form"
                    action="https://franchiseindia.com/-brandcontactinfo"
                  >
                    <input
                      type="hidden"
                      name="frandetailsid"
                      value="FIHL386239"
                    ></input>
                    <p>Interested in above brand? Submit you interest here.</p>
                    <div className="modal-body-popcentreq">
                      <div className="requested-frm">
                        <div className="row">
                          <div className="col-xs-12 col-sm-6 col-md-6">
                            <div className="form-group">
                              <input
                                type="text"
                                name="infoname"
                                className="form-control blur"
                                placeholder="Enter Name"
                              ></input>
                            </div>
                          </div>
                          <div className="col-xs-12 col-sm-6 col-md-6">
                            <div className="form-group">
                              <select
                                class="form-control blur"
                                name="infostate"
                                onchange="getCityWiderInsta(this.value)"
                              >
                                <option value="">Select State</option>
                                <option value="23">Delhi</option>
                                <option value="10">Haryana</option>
                                <option value="11">Himachal Pradesh</option>
                                <option value="12">Jammu and Kashmir</option>
                                <option value="26">Punjab</option>
                                <option value="31">Uttarakhand</option>
                                <option value="32">Uttar Pradesh</option>
                                <option value="9">Gujarat</option>
                                <option value="27">Rajasthan</option>
                                <option value="18">Maharashtra</option>
                                <option value="8">Goa</option>
                                <option value="3">Assam</option>
                                <option value="20">Meghalaya</option>
                                <option value="21">Mizoram</option>
                                <option value="30">Tripura</option>
                                <option value="2">Arunachal Pradesh</option>
                                <option value="19">Manipur</option>
                                <option value="22">Nagaland</option>
                                <option value="33">West Bengal</option>
                                <option value="28">Sikkim</option>
                                <option value="24">Odisha</option>
                                <option value="15">Kerala</option>
                                <option value="14">Karnataka</option>
                                <option value="29">Tamil Nadu</option>
                                <option value="1">Andhra Pradesh</option>
                                <option value="34">Telangana</option>
                                <option value="35">Andaman and Nicobar</option>
                                <option value="25">Pondicherry</option>
                                <option value="5">Chandigarh</option>
                                <option value="16">Lakshadweep</option>
                                <option value="7">Daman and Diu</option>
                                <option value="6">Chhattisgarh</option>
                                <option value="17">Madhya Pradesh</option>
                                <option value="4">Bihar</option>
                                <option value="13">Jharkhand</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-xs-12 col-sm-6 col-md-6">
                            <div className="form-group">
                              <input
                                type="email"
                                name="infoemail"
                                className="form-control check-existing-registered-investor blur"
                                placeholder="Enter E-mail"
                              />
                            </div>
                          </div>
                          <div className="col-xs-12 col-sm-6 col-md-6">
                            <div className="form-group">
                              <select
                                className="form-control blur"
                                id="city-wider"
                                name="infocity"
                              >
                                <option value="">Select City</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-xs-12 col-sm-6 col-md-6">
                            <div className="form-group pos-rel">
                              <input
                                name="mobile"
                                id="mobile-wider"
                                type="text"
                                pattern="[0-9]{5,10}"
                                minlength="10"
                                maxlength="10"
                                onKeyUp="getMobileStatusWider(this.value)"
                                className="form-control blur"
                                placeholder="Enter Mobile"
                              ></input>
                               <span class="vrfy" onclick="editMobileWider()" id="edit-mobile-wider" style="display:none">edit</span>
                            <span class="vrfy" onclick="validateMobileWider()" id="validate-mobile-contact" style="display:none">VERIFY</span>
                            <span id="success-mobile-wider" class="showhideright" style="display:none"><i class="fa fa-check fa-lg" aria-hidden="true"></i></span> 
                            </div>
                          </div>
                          <div className="col-xs-12 col-sm-6 col-md-6">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control blur"
                                name="address"
                                placeholder="Enter Address"
                              ></input>
                            </div>
                          </div>
                          <div
                            className="col-xs-12 col-sm-6 col-md-6"
                            style={{ display: "none" }}
                            id="otp-block-wider"
                          >
                            <div className="form-group pos-rel">
                              <input
                                id="otp-insta-wider"
                                type="text"
                                className="form-control blur"
                                maxlength="4"
                                placeholder="Enter OTP"
                              ></input>
                               <span class="vrfy" id="verify_button_wider" style={{display:"block"}} onClick="verifyWiderOTP()">VERIFY</span> 
                            </div>
                            <div
                              style={{ display: "none" }}
                              id="mismatch-wider"
                            >
                              OTP Mismatch
                            </div>
                          </div>
                          <div className="col-xs-12 col-sm-6 col-md-6">
                            <div className="form-group pos-rel">
                              <input
                                type="text"
                                className="form-control blur"
                                name="pincode"
                                pattern="[0,9]{5,6}"
                                minlength="6"
                                maxlength="6"
                                placeholder="Enter Pincode"
                              ></input>
                            </div>
                          </div>
                          <div className="col-xs-12 col-sm-6 col-md-6">
                            <div className="form-group pos-rel">
                              <select
                                className="form-control blur"
                                name="investment_range"
                              >
                                <option value="">
                                  Select Investment Range
                                </option>
                                <option value="1">Rs. 10000 - 50000</option>
                                <option value="3">Rs. 50000 - 2lac</option>
                                <option value="5">Rs. 2lac - 5lac</option>
                                <option value="7">Rs. 5lac - 10lac</option>
                                <option value="9">Rs. 10lac - 20lac</option>
                                <option value="11">Rs. 20lac - 30lac</option>
                                <option value="13">Rs. 30lac - 50lac</option>
                                <option value="15">Rs. 50lac - 1 Cr.</option>
                                <option value="17">Rs. 1 Cr. - 2 Cr</option>
                                <option value="19">Rs. 2 Cr. - 5 Cr</option>
                                <option value="21">Rs. 5 Cr. above</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-xs-12 col-sm-6 col-md-6">
                            <div className="form-group txt-center">
                              <div className="checkbox">
                                <label className="Brandlabel">
                                  <input
                                    type="checkbox"
                                    name="newsletter_sub"
                                    checked=""
                                  />
                                  Yes, I want to subscribe for weekly NewsLetter
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="col-xs-12 col-sm-6 col-md-6">
                            <div className="form-group txt-center">
                              <div className="checkbox">
                                <label className="Brandlabel">
                                  <input
                                    type="checkbox"
                                    name="is_termsagree2"
                                    id="is_termsagree2"
                                    checked=""
                                    required="required"
                                  />
                                  I agree to the{" "}
                                  <a
                                    href="https://-www.franchiseindia.com/terms"
                                    target="_blank"
                                  >
                                    Terms &amp; Conditions
                                  </a>
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="modal-footer txt-center">
                      <input
                        type="submit"
                        className="Brandbtn btn-default btn-red"
                        id="wider-submit-button"
                        value="Submit Request"
                        style={{ float: "none" }}
                      ></input>
                    </div>
                  </form>
                </div> */}
                <div className="rht-pnl">
                  <div className="share-rat-pnl">
                    <div className="rat-info">
                      <ul>
                        <li>
                          <span>
                            <strong id="ratings">
                              <i
                                className="fa fa-star-o fa-lg"
                                aria-hidden="true"
                              ></i>
                              <i
                                className="fa fa-star-o fa-lg"
                                aria-hidden="true"
                              ></i>
                              <i
                                className="fa fa-star-o fa-lg"
                                aria-hidden="true"
                              ></i>
                              <i
                                className="fa fa-star-o fa-lg"
                                aria-hidden="true"
                              ></i>
                              <i
                                className="fa fa-star-o fa-lg"
                                aria-hidden="true"
                              ></i>
                            </strong>
                          </span>
                        </li>
                        <li>
                          <span>
                            <strong id="likecount">2</strong>
                            <strong> likes</strong>
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="rate-action">
                      <ul>
                        <li>
                          <a
                            onclick="likebtn('FIHL386239');"
                            className="like"
                            id="likeButton"
                          >
                            <i
                              className="fa fa-thumbs-up"
                              aria-hidden="true"
                              id="like"
                            ></i>{" "}
                            Like
                          </a>
                        </li>
                        <li>
                          <a
                            data-toggle="modal"
                            data-target="#myRating"
                            id="rateButton"
                          >
                            <i
                              className="fa fa-star-half-o"
                              aria-hidden="true"
                            ></i>{" "}
                            Rate
                          </a>
                        </li>
                        <li>
                          <a
                            data-toggle="modal"
                            data-target="#mysocial"
                            id="seo_shareButton"
                          >
                            <i
                              className="fa fa-share-alt"
                              aria-hidden="true"
                            ></i>{" "}
                            Share
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <NewsLetter /> */}
    </>
  );
}

export default BrandPage;
