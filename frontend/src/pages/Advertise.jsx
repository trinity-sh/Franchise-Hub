import React from "react";
import NavbarComponent from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";
import "../components/styles/Advertisement.css";

function Advertise() {
  return (
    <div>
      <NavbarComponent />
      <div class="pricblk">
        <div className="container">
          <h1>More Visibility, More Business</h1>
          <div class="ctxt">
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
                    <i class="fas fa-rupee-sign"></i>
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



                    
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <NewsLetter />
    </div>
  );
}

export default Advertise;
