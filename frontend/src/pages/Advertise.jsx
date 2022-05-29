import React from "react";
import NavbarComponent from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";
import "../components/styles/Advertisement.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faRupee, faRupeeSign } from "@fortawesome/free-solid-svg-icons";


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
          <div className="priclist">
            <div className="priclistinner">
              <div className="pritxtn">Free Listing</div>
              <form
                class="form-horizontal"
                id="fran-form"
                name="form_franchisor"
                action="https://www.franchiseindia.com/advertise-with-us-payment"
                method="POST"
                role="form"
                enctype="multipart/form-data"
              >
                <input
                  type="hidden"
                  name="_token"
                  value="q1oQHytuVsMvbsPzKQ52OXFDAhUDg5SVf4f88glQ"
                />
                <div className="ftyblk">
                  <div class="rinr cent">
                    <FontAwesomeIcon icon={faRupeeSign} className="Rupee" />
                    <span class="pf1">0</span>
                    <span class="pf2"></span>
                  </div>
                </div>
                <input
                  className="btncir"
                  type={"submit"}
                  value="Try Now"
                ></input>
              </form>
              <ul class="listp">
                <li>
                  Get Priority over other business listings under -{" "}
                  <strong>List Page</strong>
                </li>
                <li>Get Maximum 5 Leads in a month</li>
              </ul>
            </div>
            <div className="priclistinner">
              <div class="pritxtn">Super Saver</div>
              <form
                class="form-horizontal"
                id="fran-form"
                name="form_franchisor"
                action="https://www.franchiseindia.com/advertise-with-us-payment"
                method="POST"
                role="form"
                enctype="multipart/form-data"
              >
                <input
                  type="hidden"
                  name="_token"
                  value="q1oQHytuVsMvbsPzKQ52OXFDAhUDg5SVf4f88glQ"
                ></input>
                <div className="ftyblk">
                  <div className="rinr">
                    <div class="radio-item">
                      <input
                        type="radio"
                        name="memberplan"
                        id="ritema7"
                        value="113"
                        checked
                      />
                      <label for="ritema7"></label>
                    </div>
                    <FontAwesomeIcon icon={faRupeeSign} className="Rupee" />
                    <span class="pf1">9,999</span>
                    <span class="pf2">/1 Month</span>
                  </div>
                  <div className="rinr otherp">
                    <div class="radio-item">
                      <input
                        type="radio"
                        name="memberplan"
                        id="ritema8"
                        value="114"
                      />
                      <label for="ritema8"></label>
                    </div>
                    <FontAwesomeIcon icon={faRupeeSign} className="Rupee" />
                    <span class="pf1">29,997 </span>
                    <span class="pf2">
                      <del class="dll"> 58,500</del> /3 Months
                    </span>
                  </div>
                  <div className="rinr otherp">
                    <div class="radio-item">
                      <input
                        type="radio"
                        name="memberplan"
                        id="ritema8"
                        value="122"
                      />
                      <label for="ritema8"></label>
                    </div>
                    <FontAwesomeIcon icon={faRupeeSign} className="Rupee" />
                    <span class="pf1">59,994 </span>
                    <span class="pf2">
                      <del class="dll"> 1,17,000</del> /6 Months
                    </span>
                  </div>
                  <div className="rinr otherp">
                    <div class="radio-item">
                      <input
                        type="radio"
                        id="ritema9"
                        name="memberplan"
                        value="115"
                      />
                      <label for="ritema9"></label>
                    </div>
                    <FontAwesomeIcon icon={faRupeeSign} className="Rupee" />
                    <span class="pf1">1,19,988</span>
                    <span class="pf2">
                      <del class="dll"> 2,34,000</del> /1 Year
                    </span>
                  </div>
                </div>
                <input class="btncir" type="submit" value="Buy Now"></input>
              </form>
              <ul class="listp">
                <li>
                  Get Priority over other business listings under -{" "}
                  <strong>Sub - Sub Category</strong>
                </li>
                <li>Visibility & Reach - 40%</li>
              </ul>
            </div>
            <div className="priclistinner">
              <div class="pritxtn">Sub Category</div>
              <form
                class="form-horizontal"
                name="form_franchisor"
                action="https://www.franchiseindia.com/advertise-with-us-payment"
                method="POST"
                role="form"
                enctype="multipart/form-data"
              >
                <input
                  type="hidden"
                  name="_token"
                  value="7QtiRtNfEdIrlt1ehR7TsItcgNAXlhXHEJuEDxGB"
                />
                <div className="ftyblk">
                  <div className="rinr">
                    <div class="radio-item">
                      <input
                        type="radio"
                        id="ritema"
                        name="memberplan"
                        value="116"
                      />
                      <label for="ritema"></label>
                    </div>
                    <FontAwesomeIcon icon={faRupeeSign} className="Rupee" />
                    <span class="pf1">19,999</span>
                    <span class="pf2">/ 1 Month</span>
                  </div>
                  <div class="rinr otherp">
                    <div class="radio-item">
                      <input
                        type="radio"
                        id="ritema2"
                        name="memberplan"
                        value="117"
                      />
                      <label for="ritema2"></label>
                    </div>
                    <FontAwesomeIcon icon={faRupeeSign} className="Rupee" />
                    <span class="pf1">59,997</span>
                    <span class="pf2">
                      {" "}
                      <del class="dll">97,500</del> / 3 Months
                    </span>
                  </div>
                  <div class="rinr otherp">
                    <div class="radio-item">
                      <input
                        type="radio"
                        id="ritema2"
                        name="memberplan"
                        value="123"
                      />
                      <label for="ritema2"></label>
                    </div>
                    <FontAwesomeIcon icon={faRupeeSign} className="Rupee" />
                    <span class="pf1">1,19,994</span>
                    <span class="pf2">
                      {" "}
                      <del class="dll">1,95,000</del> / 6 Months
                    </span>
                  </div>
                  <div class="rinr otherp">
                    <div class="radio-item">
                      <input
                        type="radio"
                        id="ritema3"
                        name="memberplan"
                        value="118"
                        checked
                      />
                      <label for="ritema3"></label>
                    </div>
                    <FontAwesomeIcon icon={faRupeeSign} className="Rupee" />
                    <span class="pf1">2,39,988</span>
                    <span class="pf2">
                      {" "}
                      <del class="dll">3,90,000</del> / 1 Year
                    </span>
                  </div>
                </div>
                <input class="btncir" type="submit" value="Buy Now"></input>
              </form>
              <ul class="listp">
                <li>
                  Get Priority over other business listings under -{" "}
                  <strong>Sub and Sub - Sub Category</strong>
                </li>
                <li>Visibility & Reach - 70%</li>
              </ul>
            </div>
            <div className="priclistinner">
              <div class="pritxtn">Master Category</div>
              <form
                class="form-horizontal"
                name="form_franchisor"
                action="https://www.franchiseindia.com/advertise-with-us-payment"
                method="POST"
                role="form"
                enctype="multipart/form-data"
              >
                <input
                  type="hidden"
                  name="_token"
                  value="7QtiRtNfEdIrlt1ehR7TsItcgNAXlhXHEJuEDxGB"
                />
                <div class="ftyblk">
                  <div class="rinr">
                    <div class="radio-item">
                      <input
                        type="radio"
                        id="ritema4"
                        name="memberplan"
                        value="119"
                      />
                      <label for="ritema4"></label>
                    </div>
                    <FontAwesomeIcon icon={faRupeeSign} className="Rupee" />
                    <span class="pf1">39,999</span>
                    <span class="pf2">/ 1 Month</span>
                  </div>
                  <div class="rinr otherp">
                    <div class="radio-item">
                      <input
                        type="radio"
                        id="ritema5"
                        name="memberplan"
                        value="120"
                      />
                      <label for="ritema5"></label>
                    </div>
                    <FontAwesomeIcon icon={faRupeeSign} className="Rupee" />
                    <span class="pf1">1,19,997</span>
                    <span class="pf2">
                      {" "}
                      <del class="dll">1,31,997</del> / 3 Months
                    </span>
                  </div>
                  <div class="rinr otherp">
                    <div class="radio-item">
                      <input
                        type="radio"
                        id="ritema5"
                        name="memberplan"
                        value="124"
                      />
                      <label for="ritema5"></label>
                    </div>
                    <FontAwesomeIcon icon={faRupeeSign} className="Rupee" />
                    <span class="pf1">2,39,994</span>
                    <span class="pf2">
                      {" "}
                      <del class="dll">2,63,994</del> / 6 Months
                    </span>
                  </div>
                  <div class="rinr otherp">
                    <div class="radio-item">
                      <input
                        type="radio"
                        id="ritema6"
                        name="memberplan"
                        value="121"
                        checked
                      />
                      <label for="ritema6"></label>
                    </div>
                    <FontAwesomeIcon icon={faRupeeSign} className="Rupee" />
                    <span class="pf1">4,79,988</span>
                    <span class="pf2">
                      {" "}
                      <del class="dll">5,27,988</del> / 1 Year
                    </span>
                  </div>
                </div>
                <input class="btncir" type="submit" value="Buy Now"></input>
              </form>
              <ul class="listp">
                <li>
                  Get Priority over other business listings under -{" "}
                  <strong>Master, Sub and Sub -Sub Category</strong>
                </li>
                <li>Visibility & Reach - 100%</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      

      <div className="feblkcontainer">
        <div className="Container">
          <div className="feblk_body">
          <div class="feblk_head"> Know What’s Included with Each Plan </div>
                        <ul class="priceplan">
                            <li>
                                <div class="reghead tleft">Get Priority over other business listings under</div>
                                <div class="iconblk htset tleft">Get Instant Update over Phone, Email and SMS</div>

                                <div class="iconblk htset tleft">Make your business discoverable with detailed business information</div>
                                <div class="iconblk htset tleft">Add your brand images to Increase your visibility and business enquiries</div>
                                <div class="iconblk htset tleft">Boost on Search by Category, Location & Investment</div>
                                <div class="iconblk htset tleft">Showcase your logo with company listing</div>
                                <div class="iconblk htset tleft">Get access to “My Account” dashboard to track views and responses instantly</div>
                                <div class="iconblk htset tleft">Thousands of Investors Can View Your Profile</div>
                                <div class="iconblk htset tleft">Local, National And International Exposure</div>
                                <div class="iconblk htset tleft">Generating more and better business inquiries</div>
                                <div class="iconblk htset tleft">Visibility & Reach</div>

                            </li>


                            <li>
                                <div class="reghead">Listing Pages</div>
                                <div class="iconblk htset">  </div>
                                <div class="iconblk htset"><div class="pvalue"><FontAwesomeIcon icon={faCheck} className="check" /></div></div>
                                <div class="iconblk htset">  </div>
                                <div class="iconblk htset">  </div>
                                <div class="iconblk htset">  </div>
                                <div class="iconblk htset"><div class="pvalue"><FontAwesomeIcon icon={faCheck} className="check" /></div></div>
                                <div class="iconblk htset"><div class="pvalue">Only Premium Investors</div></div>
                                <div class="iconblk htset"><div class="pvalue"><FontAwesomeIcon icon={faCheck} className="check" /></div></div>
                                <div class="iconblk htset">  </div>
                                <div class="iconblk htset">  </div>

                            </li>
                            <li>
                                <div class="reghead">Sub -Sub Category</div>
                                <div class="iconblk htset"><div class="pvalue"><FontAwesomeIcon icon={faCheck} className="check" /></div></div>
                                <div class="iconblk htset"><div class="pvalue"><FontAwesomeIcon icon={faCheck} className="check" /></div></div>
                                <div class="iconblk htset"><div class="pvalue"><FontAwesomeIcon icon={faCheck} className="check" /></div></div>
                                <div class="iconblk htset"><div class="pvalue"><FontAwesomeIcon icon={faCheck} className="check" /></div></div>
                                <div class="iconblk htset"><div class="pvalue"><FontAwesomeIcon icon={faCheck} className="check" /></div></div>
                                <div class="iconblk htset"><div class="pvalue"><FontAwesomeIcon icon={faCheck} className="check" /></div></div>
                                <div class="iconblk htset"><div class="pvalue"><FontAwesomeIcon icon={faCheck} className="check" /></div></div>
                                <div class="iconblk htset"><div class="pvalue"><FontAwesomeIcon icon={faCheck} className="check" /></div></div>
                                <div class="iconblk htset"><div class="pvalue"><FontAwesomeIcon icon={faCheck} className="check" /></div></div>
                                <div class="iconblk htset"> <div class="pvalue">40%</div></div>
                            </li>
                            <li>
                                <div class="reghead">Sub and Sub -Sub Category</div>
                                <div class="iconblk htset"><div class="pvalue"><FontAwesomeIcon icon={faCheck} className="check" /></div></div>
                                <div class="iconblk htset"><div class="pvalue"><FontAwesomeIcon icon={faCheck} className="check" /></div></div>
                                <div class="iconblk htset"><div class="pvalue"><FontAwesomeIcon icon={faCheck} className="check" /></div></div>
                                <div class="iconblk htset"><div class="pvalue"><FontAwesomeIcon icon={faCheck} className="check" /></div></div>
                                <div class="iconblk htset"><div class="pvalue"><FontAwesomeIcon icon={faCheck} className="check" /></div></div>
                                <div class="iconblk htset"><div class="pvalue"><FontAwesomeIcon icon={faCheck} className="check" /></div></div>
                                <div class="iconblk htset"><div class="pvalue"><FontAwesomeIcon icon={faCheck} className="check" /></div></div>
                                <div class="iconblk htset"><div class="pvalue"><FontAwesomeIcon icon={faCheck} className="check" /></div></div>
                                <div class="iconblk htset"><div class="pvalue"><FontAwesomeIcon icon={faCheck} className="check" /></div></div>
                                <div class="iconblk htset"> <div class="pvalue">75%</div></div>
                            </li>

                            <li>
                                <div class="reghead">Master, Sub and Sub -Sub Category</div>
                                <div class="iconblk htset"><div class="pvalue"><FontAwesomeIcon icon={faCheck} className="check" /></div></div>
                                <div class="iconblk htset"><div class="pvalue"><FontAwesomeIcon icon={faCheck} className="check" /></div></div>
                                <div class="iconblk htset"><div class="pvalue"><FontAwesomeIcon icon={faCheck} className="check" /></div></div>
                                <div class="iconblk htset"><div class="pvalue"><FontAwesomeIcon icon={faCheck} className="check" /></div></div>
                                <div class="iconblk htset"> <div class="pvalue"><FontAwesomeIcon icon={faCheck} className="check" /></div> </div>
                                <div class="iconblk htset"> <div class="pvalue"><FontAwesomeIcon icon={faCheck} className="check" /></div></div>
                                <div class="iconblk htset"> <div class="pvalue"><FontAwesomeIcon icon={faCheck} className="check" /></div></div>
                                <div class="iconblk htset"> <div class="pvalue"><FontAwesomeIcon icon={faCheck} className="check" /></div></div>
                                <div class="iconblk htset"> <div class="pvalue"><FontAwesomeIcon icon={faCheck} className="check" /></div></div>
                                <div class="iconblk htset"> <div class="pvalue">100%</div></div>
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
