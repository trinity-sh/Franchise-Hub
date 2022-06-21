import React, { useEffect, useState } from "react";
import { Button, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import axios from "axios";

const Newsletter = styled.div`
  #newslettersection {
    background-color: #333;
    padding: 50px 0;
    color: #eee;
    margin: 10px 0 30px;
  }
  .newsletter {
    list-style: none;
    padding-inline-start: 0px;
    display: flex;
  }
  ul.newsletter li {
    display: flex;
  }
  .emailer-main {
    width: 300px;
  }
  .socail-newsletter-section {
    padding-top: 10px;
    text-align: right;
  }
  .newsletter-social {
    list-style: none;
    padding-inline-start: 0px;
    display: flex;
    justify-content: end;
  }
  ul.newsletter-social li {
    margin-right: 10px;
  }
  @media only screen and (max-width: 399px) {
    .newsletter {
      flex-direction: column;
    }
  }
`;

const About = styled.div`
  background-color: #f1f1f1;
  h4 {
    font-size: 20px;
    font-weight: 700;
  }
`;

const Footer = styled.footer`
  text-align: center;
  margin-top: 20px;
  padding: 10px 80px;
  background-color: #fff;
  box-shadow: 0.5px 0 5px #999;
  .footer-link:hover{
    color: #f04;
  }
`;

function NewsLetter() {
  const date = new Date();
  const [news, setNews] = useState("");
  function handleNewsletter(e) {
    const val = e.target.value;
    setNews(val);
  }
  console.log(news);
  async function postData() {
    try {
      const response = await axios({
        method: "post",
        url: "https://franchise-hub-server.herokuapp.com/api/v1/webview/forms/newsletter-subscribers/new",
        data: {
          metadata: {
            is_read: false
          },
          content: {
            email: news
          },
        },
      });

      console.log(response.data);
      alert("Form submitted sucessfully!")
      // return  response;
    } catch (error) {
      alert("Oopss!! Some Error occurred!")
      console.log("error");
      return [];
    }
    
  }

  return (
    <>
      <Newsletter>
        <section
          class="newslettersection section-30 bg-b-main"
          id="newslettersection"
        >
          <Container>
            <Row class="justify-content-center">
              <div class="modified-col col-lg-6">
                <p>
                  Share your email address to get latest update from the
                  industry
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
                          onChange={handleNewsletter}
                        />
                      </li>
                      <li>
                        <Button
                          variant="danger"
                          id="button-addon2"
                          className="mt-2"
                          onClick={postData}
                        >
                          SignUp
                        </Button>
                      </li>
                    </ul>
                  </form>
                </div>
              </div>
              <div
                class="modified-col col-lg-6 text-right
                                     socail-newsletter-section"
              >
                <p>Stay tuned &amp; get updated</p>
                <h2>Follow Franchise India</h2>
                <div class="main-newsletter">
                  <form action="">
                    <ul class="newsletter-social">
                      <li>
                        <a
                          href="https://www.facebook.com/Franchise-Hub-102974559039467/"
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
                          href="https://instagram.com/franchisehub.00?igshid=YmMyMTA2M2Y="
                          target="_blank"
                        >
                          <img
                            src="https://www.franchiseindia.com/newhomepage/assets/img/instagram-icon.svg"
                            alt=""
                          />
                        </a>
                      </li>
                      {/* <li>
                        <a
                          href="https://twitter.com/FranchiseIndia"
                          target="_blank"
                        >
                          <img
                            src="https://www.franchiseindia.com/newhomepage/assets/img/twitter-icon.svg"
                            alt="twitter"
                          />
                        </a>
                      </li> */}
                      {/* <li>
                        <a
                          href="https://www.youtube.com/user/FranchiseIndia"
                          target="_blank"
                        >
                          <img
                            src="https://www.franchiseindia.com/newhomepage/assets/img/you-tube-icon.svg"
                            alt="youtube"
                          />
                        </a>
                      </li> */}
                    </ul>
                  </form>
                </div>
              </div>
            </Row>
          </Container>
        </section>
      </Newsletter>
      <About>
        <Container>
          <h4>About Franchise Hub</h4>
          <span>
            Franchisehub.in is world's # 1 establishment site and an Entrepreneur's everyday portion.
            Under the aegis of Franchise India Holdings Ltd - Asia's biggest incorporated establishment
            arrangements organization, the site gives consistently detail to business people on parts of
            diversifying, establishment open doors, business amazing open doors, associations, sellers,
            fabricating, circulation, retail and considerably more. Being the world innovators in
            diversifying, financial backers and franchisors can constantly depend on Franchisehub.in for
            rich, skillful and a huge number of productive leads and deals. The site is the most loved
            objective for franchisors, new businesses, franchisees, vendors, merchants, retailers and
            establishment prospect searchers.

            <br /> <br /> Franchiseihub.in has remarkable business valuable open doors in Premium, Domestic and
            International area. For our perusers who look for open doors, we have isolated different
            range of segments like What's New for Industry articles and stories, Interviews segment for
            Company/People profile and the news area which offers an everyday portion of what's going
            on in diversifying across the world.

            <br />
            <br /> Our investors and opportunity searchers even get a valuable chance to get highlighted in the
            week after week Franchiseihub.in pamphlet that goes straight into the inbox of thousands of
            brands and financial backers. Franchiseihub.in likewise gives an opportunity to advance the
            brand straightforwardly on the interpersonal organization sites like Twitter, Facebook,
            LinkedIn, and that's just the beginning. Here's the reason your image ought to be there on
            Franchiseihub.in
            <br />
            <br />
            Plus, the wealth of business and establishment valuable open doors, Franchisehub.in
            additionally has customary updates of the impending occasions in the establishment
            business like India's biggest establishment show, FRO (National Franchise Retail and SME
            show), BOS (Business Opportunity Shows) and furthermore all the establishment and retail
            grant shows by Franchise India. Guests can begin another business simply by enrolling on
            the site and that too for FREE. Franchisehub.in clients can peruse huge number of brands
            and pick the best an open door.

            <br />
            <br /> Franchisehub.in likewise refreshes you with a steady stream of internal traffic and guests on
            the site. Promoters can likewise take advantages of the books and reports on Franchise
            India by tapping on the Bookstore area.
          </span>
        </Container>
      </About>

      <Footer>
        © {date.getFullYear()} All Right Reserved by Franchishub - <a className="footer-link" href="http://www.pracharmore.com/">Design and
          Develop by Prachar More</a>
      </Footer>
    </>
  );
}

export default NewsLetter;
