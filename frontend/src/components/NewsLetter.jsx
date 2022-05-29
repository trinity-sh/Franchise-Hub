import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import styled from "styled-components";

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
`;

function NewsLetter() {
  const date = new Date();
  return (
    <>
      <Newsletter>
        <section
          class="newslettersection section-30 bg-b-main"
          id="newslettersection"
        >
          <Container>
            <Row class="justify-content-center">
              <div class="modified-col col-md-6">
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
                        />
                      </li>
                      <li>
                        <Button
                          variant="danger"
                          id="button-addon2"
                          className="mt-2"
                        >
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
      <About>
        <Container>
          <h4>About Franchise Hub</h4>
          <span>
            Franchiseindia.com is world’s # 1 franchise website and an
            Entrepreneur’s daily dose. Under the aegis of Franchise India
            Holdings Ltd - Asia’s largest integrated franchise solutions
            company, the website provides every minute detail to entrepreneurs
            on aspects of franchising, franchise opportunities, business
            opportunities, partnerships, dealers, manufacturing, distribution,
            retail and much more. Being the world leaders in franchising,
            investors and franchisors can always count on Franchiseindia.com for
            rich, competent and millions of fruitful leads and sales. The
            website is the favourite destination for franchisors, start-ups,
            franchisees, dealers, distributors, retailers and franchise prospect
            seekers.
            <br /> <br /> Franchiseindia.com has unique business opportunities
            in Premium, Domestic and International domain. For our readers who
            seek opportunities, we have segregated various spectrum of sections
            like What’s New for Industry articles and stories, Interviews
            section for Company/People profile and the news section which offers
            a daily dose of what’s happening in franchising across the world.
            <br />
            <br /> Our investors and opportunity seekers even get an opportunity
            to get featured in the weekly Franchiseindia.com newsletter that
            goes straight into the inbox of thousands of brands & investors.
            Franchiseindia.com also provides a chance to promote the brand
            directly on the social network websites like Twitter, Facebook,
            LinkedIn, and more. Here’s why your brand should be there on
            franchisebharat.com. <br />
            <br />
            Besides, the abundance of business and franchise opportunities,
            Franchiseindia.com also has regular updates of the upcoming events
            in the franchise industry like India’s largest franchise show, FRO
            (National Franchise Retail and SME show), BOS (Business Opportunity
            Shows) and also all the franchise and retail award shows by
            Franchise India. Visitors can start a new business by just
            registering on the website and that too for FREE. Franchiseindia.com
            users can browse through thousands of brands and choose the ideal
            opportunity.
            <br />
            <br /> Franchiseindia.com also updates you with a stable stream of
            inward traffic and visitors on the website. Advertisers can also
            take benefits of the books and reports on Franchise India by
            clicking on the Bookstore section.
          </span>
        </Container>
      </About>

      <Footer>
        © {date.getFullYear()} All Right Reserved by Franchishub - Design and
        Develop by Prachar More
      </Footer>
    </>
  );
}

export default NewsLetter;
