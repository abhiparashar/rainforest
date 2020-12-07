import React from 'react'

export const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <a href="#" className="widget-newsletter-title">Sign Up to Newsletter</a>
              </div>
              <div className="col-lg-4">
                <p className="widget-newsletter-content">Get all the latest information on Events, Sales and Offers.<br />
                  <span className="widget-newsletter-content">Receive $10 coupon for first shopping.</span>
                </p>
              </div>
              <div className="col-lg-5">
                <form action="#">
                  <div className="footer-submit-wrapper">
                    <input type="email" className="form-control" placeholder="Enter your Email address" required />
                    <button type="submit" className="btn">Subscribe</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="footer-middle">
            <div className="row row-sm">
              <div className="col-lg-6 col-xl-4">
                <a href="index.html">
                  <img src="assets/images/logo-black.png" alt="Porto Logo" />
                </a>
                <div className="row row-sm">
                  <div className="col-sm-6">
                    <div className="contact-widget">
                      <h4 className="widget-title">ADDRESS</h4>
                      <a href="#">123 Street Name, City, England</a>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="contact-widget email">
                      <h4 className="widget-title">EMAIL</h4>
                      <a href="mailto:mail@example.com">mail@example.com</a>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="contact-widget">
                      <h4 className="widget-title">PHONE</h4>
                      <a href="#">Toll Free (123) 456-7890</a>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="contact-widget">
                      <h4 className="widget-title">WORKING DAYS/HOURS</h4>
                      <a href="#">Mon - Sun / 9:00AM - 8:00PM</a>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="social-icons mb-3">
                      <a href="#" className="social-icon" target="_blank"><i className="fab fa-facebook-f" /></a>
                      <a href="#" className="social-icon" target="_blank"><i className="fab fa-twitter" /></a>
                      <a href="#" className="social-icon" target="_blank"><i className="fab fa-linkedin-in" /></a>
                    </div>{/* End .social-icons */}
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-lg-2 col-xl-3">
                <div className="widget">
                  <h4 className="widget-title">Account</h4>
                  <ul className="links link-parts">
                    <div className="link-part">
                      <li><a href="my-account.html">My Account</a></li>
                      <li><a href="#">Track Your Order</a></li>
                      <li><a href="#">Payment Methods</a></li>
                      <li><a href="#">Shipping Guide</a></li>
                      <li><a href="#">FAQs</a></li>
                      <li><a href="#">Product Support</a></li>
                      <li><a href="#">Privacy</a></li>
                    </div>
                    <div className="link-part">
                      <li><a href="my-account.html">Orders History</a></li>
                      <li><a href="#">Advanced Search</a></li>
                      <li><a href="#">Affiliate Program</a></li>
                    </div>
                  </ul>
                </div>{/* End .widget */}
              </div>
              <div className="col-md-4 col-lg-2 col-xl-3">
                <div className="widget">
                  <h4 className="widget-title">About</h4>
                  <ul className="links">
                    <li><a href="about.html">About Porto</a></li>
                    <li><a href="#">Our Guarantees</a></li>
                    <li><a href="#">Terms And Conditions</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Return Policy</a></li>
                    <li><a href="#">Intellectual Property Claims</a></li>
                    <li><a href="#">Site Map</a></li>
                  </ul>
                </div>{/* End .widget */}
              </div>
              <div className="col-md-4 col-lg-2 col-xl-2">
                <div className="widget">
                  <h4 className="widget-title">Features</h4>
                  <ul className="links">
                    <li><a href="#">Powerful Admin Panel</a></li>
                    <li><a href="#">Mobile &amp; Retina Optimized</a></li>
                    <li><a href="#">Super Fast Magento Theme</a></li>
                    <li><a href="#">1st Fully working Ajax Theme</a></li>
                    <li><a href="#">10 Unique Homepage Layouts</a></li>
                  </ul>
                </div>{/* End .widget */}
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p className="footer-copyright">Porto eCommerce. ©  2020.  All Rights Reserved</p>
            <img src="assets/images/payments_long.png" width="180px" style={{maxHeight: '24px'}} />
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer;
