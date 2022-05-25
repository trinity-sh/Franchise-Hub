import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import styled from "styled-components";

const Newsletter = styled.div`
  #newslettersection {
    background-color: #333;
    padding: 50px 0;
    color: #eee;
  }
  .newsletter {
    list-style: none;
    padding-inline-start: 0px;
    display: flex;
  }
  ul.newsletter li{
      display: flex;
  }
  .emailer-main{
      width: 300px;
  }
  .socail-newsletter-section{
      padding-top: 10px;
      text-align: right;
  }
  .newsletter-social{
    list-style: none;
    padding-inline-start: 0px;
    display: flex;
    justify-content: end;
    
  }
  ul.newsletter-social li{
      margin-right: 10px;
  }
`;

function NewsLetter() {
  return (
    <Newsletter>
      <section
        class="newslettersection section-30 bg-b-main"
        id="newslettersection"
      >
        <Container>
          <Row class="justify-content-center">
            <div class="modified-col col-md-6">
              <p>
                Share your email address to get latest update from the industry
              </p>
              <h2>Newsletter Signup</h2>
              <div class="main-newsletter">
                <form
                  id="update"
                  method="post"
                  action="https://www.franchiseindia.com/newslettersignup"
                >
                  <ul class="newsletter">
                    <li>
                      <input type="hidden" name="site_type" value="fi" />
                      <input
                        type="email"
                        class="form-control emailer-main"
                        aria-label="Enter Mail"
                        aria-describedby="button-addon2"
                        name="email"
                        required=""
                      />
                    </li>
                    <li>
                      <Button variant="danger" id="button-addon2">
                        SignUp
                      </Button>
                    </li>
                  </ul>
                </form>
              </div>
            </div>
            <div
              class="modified-col col-md-6 text-right
                                     socail-newsletter-section"
            >
              <p>Stay tuned &amp; get updated</p>
              <h2>Follow Franchise India</h2>
              <div class="main-newsletter">
                <form action="">
                  <ul class="newsletter-social">
                    <li>
                      <a
                        href="https://www.facebook.com/FranchiseIndiaMedia"
                        target="_blank"
                      >
                        <img
                          src="https://www.franchiseindia.com/newhomepage/assets/img/fb-icon.svg"
                          alt="facebook"
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/franchiseindia_/"
                        target="_blank"
                      >
                        <img
                          src="https://www.franchiseindia.com/newhomepage/assets/img/instagram-icon.svg"
                          alt=""
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com/FranchiseIndia"
                        target="_blank"
                      >
                        <img
                          src="https://www.franchiseindia.com/newhomepage/assets/img/twitter-icon.svg"
                          alt="twitter"
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/user/FranchiseIndia"
                        target="_blank"
                      >
                        <img
                          src="https://www.franchiseindia.com/newhomepage/assets/img/you-tube-icon.svg"
                          alt="youtube"
                        />
                      </a>
                    </li>
                  </ul>
                </form>
              </div>
            </div>
          </Row>
        </Container>
      </section>
    </Newsletter>
  );
}

export default NewsLetter;
