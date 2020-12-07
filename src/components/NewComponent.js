import React from 'react'
import createClass from 'create-react-class'


const NewComponent = createClass({
  render: function() {
    return (
      <div>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <title>Porto - Bootstrap eCommerce Template</title>
        <meta name="keywords" content="HTML5 Template" />
        <meta name="description" content="Porto - Bootstrap eCommerce Template" />
        <meta name="author" content="SW-THEMES" />
        {/* Favicon */}
        <link rel="icon" type="image/x-icon" href="assets/images/icons/favicon.ico" />
        {/* Plugins CSS File */}
        <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
        {/* Main CSS File */}
        <link rel="stylesheet" href="assets/css/style.min.css" />
        <link rel="stylesheet" href="assets/vendor/fontawesome-free/css/all.min.css" />
        <div className="page-wrapper">
          <header className="header">
            <div className="header-top">
              <a href="#">
                <img src="assets/images/banners/header_item.png" />
                <h3>PortoPlus X Pro Only</h3>
                <span className="skew-box product-price">$199</span>
                <span className="old-price">$299</span>
                <span className="round-box">code: <strong>portoplusx</strong></span>
              </a>
            </div>{/* End .header-top */}
            <div className="header-middle">
              <div className="container">
                <div className="header-left">
                  <button className="mobile-menu-toggler" type="button">
                    <i className="icon-menu" />
                  </button>
                  <a href="index.html" className="logo">
                    <img src="assets/images/logo.png" alt="Porto Logo" />
                  </a>
                </div>{/* End .header-left */}
                <div className="header-center">
                  <div className="header-search">
                    <a href="#" className="search-toggle" role="button"><i className="icon-magnifier" /></a>
                    <form action="#" method="get">
                      <div className="header-search-wrapper">
                        <input type="search" className="form-control" name="q" id="q" placeholder="I'm searching for..." required />
                        <div className="select-custom">
                          <select id="cat" name="cat">
                            <option value>All Categories</option>
                            <option value={4}>Fashion</option>
                            <option value={12}>- Women</option>
                            <option value={13}>- Men</option>
                            <option value={66}>- Jewellery</option>
                            <option value={67}>- Kids Fashion</option>
                            <option value={5}>Electronics</option>
                            <option value={21}>- Smart TVs</option>
                            <option value={22}>- Cameras</option>
                            <option value={63}>- Games</option>
                            <option value={7}>Home &amp; Garden</option>
                            <option value={11}>Motors</option>
                            <option value={31}>- Cars and Trucks</option>
                            <option value={32}>- Motorcycles &amp; Powersports</option>
                            <option value={33}>- Parts &amp; Accessories</option>
                            <option value={34}>- Boats</option>
                            <option value={57}>- Auto Tools &amp; Supplies</option>
                          </select>
                        </div>{/* End .select-custom */}
                        <button className="btn" type="submit"><i className="icon-magnifier" /></button>
                      </div>{/* End .header-search-wrapper */}
                    </form>
                  </div>{/* End .header-search */}
                  <div className="links">
                    <a href="#">tablet</a>
                    <a href="#">smartphone</a>
                    <a href="#">smartwatch</a>
                    <a href="#">ipcamera</a>
                    <a href="#">box</a>
                    <a href="#">smart</a>
                    <a href="#">portable</a>
                  </div>
                </div>{/* End .headeer-center */}
                <div className="header-right">
                  <a href="login.html">
                    <div className="header-user">
                      <i className="icon-user-2" />
                      <div className="header-userinfo">
                        <span>Hello!</span>
                        <h4>My Account</h4>
                      </div>
                    </div>
                  </a>
                  <a href="#" className="porto-icon"><i className="icon icon-heart" /></a>
                  <div className="dropdown cart-dropdown">
                    <a href="#" className="dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static">
                      <i className="minicart-icon" />
                      <span className="cart-count">2</span>
                    </a>
                    <div className="dropdown-menu">
                      <div className="dropdownmenu-wrapper">
                        <div className="dropdown-cart-header">
                          <span>2 Items</span>
                          <a href="cart.html">View Cart</a>
                        </div>{/* End .dropdown-cart-header */}
                        <div className="dropdown-cart-products">
                          <div className="product">
                            <div className="product-details">
                              <h4 className="product-title">
                                <a href="product.html">Woman Ring</a>
                              </h4>
                              <span className="cart-product-info">
                                <span className="cart-product-qty">1</span>
                                x $99.00
                              </span>
                            </div>{/* End .product-details */}
                            <figure className="product-image-container">
                              <a href="product.html" className="product-image">
                                <img src="assets/images/products/cart/product-1.jpg" alt="product" />
                              </a>
                              <a href="#" className="btn-remove" title="Remove Product"><i className="icon-retweet" /></a>
                            </figure>
                          </div>{/* End .product */}
                          <div className="product">
                            <div className="product-details">
                              <h4 className="product-title">
                                <a href="product.html">Woman Necklace</a>
                              </h4>
                              <span className="cart-product-info">
                                <span className="cart-product-qty">1</span>
                                x $35.00
                              </span>
                            </div>{/* End .product-details */}
                            <figure className="product-image-container">
                              <a href="product.html" className="product-image">
                                <img src="assets/images/products/cart/product-2.jpg" alt="product" />
                              </a>
                              <a href="#" className="btn-remove" title="Remove Product"><i className="icon-retweet" /></a>
                            </figure>
                          </div>{/* End .product */}
                        </div>{/* End .cart-product */}
                        <div className="dropdown-cart-total">
                          <span>Total</span>
                          <span className="cart-total-price">$134.00</span>
                        </div>{/* End .dropdown-cart-total */}
                        <div className="dropdown-cart-action">
                          <a href="checkout-shipping.html" className="btn btn-block">Checkout</a>
                        </div>{/* End .dropdown-cart-total */}
                      </div>{/* End .dropdownmenu-wrapper */}
                    </div>{/* End .dropdown-menu */}
                  </div>{/* End .dropdown */}
                </div>{/* End .header-right */}
              </div>{/* End .container */}
            </div>{/* End .header-middle */}
            <div className="header-bottom">
              <div className="container">
                <nav className="main-nav">
                  <div className="menu-depart">
                    <a href="category.html"><i className="icon-menu" />Shop by Category</a>
                    <div className="menu-depart-overlay" />{/* End .mobil-menu-overlay */}
                    <div className="submenu">
                      <a href="index.html"><i className="icon-category-home" />Home</a>
                      <a href="category.html"><i className="icon-category-fashion" />Fashion</a>
                      <a href="category.html"><i className="icon-category-electronics" />Electronics</a>
                      <a href="category.html"><i className="icon-category-gifts" />Gifts</a>
                      <a href="category.html"><i className="icon-category-garden" />Garden</a>
                      <a href="category.html"><i className="icon-category-music" />Music</a>
                      <a href="category.html"><i className="icon-category-motors" />Motors</a>
                      <a href="category.html"><i className="icon-category-furniture" />Furniture</a>
                      <a href="category.html">VIEW ALL <i className="icon-angle-right" /></a>
                    </div>
                  </div>
                  <ul className="menu">
                    <li><a href="index.html" className="active">Home</a></li>
                    <li>
                      <a href="category.html">Categories</a>
                      <div className="megamenu megamenu-fixed-width">
                        <div className="row row-sm">
                          <div className="col-lg-4">
                            <a href="#" className="nolink">VARIATION 1</a>
                            <ul className="submenu">
                              <li><a href="category.html">Fullwidth Banner</a></li>
                              <li><a href="category-banner-boxed-slider.html">Boxed Slider Banner</a></li>
                              <li><a href="category-banner-boxed-image.html">Boxed Image Banner</a></li>
                              <li><a href="category.html">Left Sidebar</a></li>
                              <li><a href="category-sidebar-right.html">Right Sidebar</a></li>
                              <li><a href="category-flex-grid.html">Product Flex Grid</a></li>
                              <li><a href="category-horizontal-filter1.html">Horizontal Filter1</a></li>
                              <li><a href="category-horizontal-filter2.html">Horizontal Filter2</a></li>
                            </ul>
                          </div>
                          <div className="col-lg-4">
                            <a href="#" className="nolink">VARIATION 2</a>
                            <ul className="submenu">
                              <li><a href="#">Product List Item Types</a></li>
                              <li><a href="category-infinite-scroll.html">Ajax Infinite Scroll</a></li>
                              <li><a href="category-3col.html">3 Columns Products</a></li>
                              <li><a href="category.html">4 Columns Products</a></li>
                              <li><a href="category-5col.html">5 Columns Products</a></li>
                              <li><a href="category-6col.html">6 Columns Products</a></li>
                              <li><a href="category-7col.html">7 Columns Products</a></li>
                              <li><a href="category-8col.html">8 Columns Products</a></li>
                            </ul>
                          </div>
                          <div className="col-lg-4 image-container">
                            <img src="assets/images/menu-banner-2.jpg" align="Menu banner" />
                          </div>
                        </div>
                      </div>{/* End .megamenu */}
                    </li>
                    <li className>
                      <a href="product.html">Products</a>
                      <div className="megamenu">
                        <div className="row row-sm">
                          <div className="col-lg-3">
                            <a href="#" className="nolink">Variations 1</a>
                            <ul className="submenu">
                              <li><a href="product.html">Horizontal Thumbnails</a></li>
                              <li><a href="product-full-width.html">Vertical Thumbnails</a></li>
                              <li><a href="product.html">Inner Zoom</a></li>
                              <li><a href="product-addcart-sticky.html">Addtocart Sticky</a></li>
                              <li><a href="product-sidebar-left.html">Accordion Tabs</a></li>
                            </ul>
                          </div>{/* End .col-lg-4 */}
                          <div className="col-lg-3">
                            <a href="#" className="nolink">Variations 2</a>
                            <ul className="submenu">
                              <li><a href="product-sticky-tab.html">Sticky Tabs</a></li>
                              <li><a href="product-simple.html">Simple Product</a></li>
                              <li><a href="product-sidebar-left.html">With Left Sidebar</a></li>
                            </ul>
                          </div>{/* End .col-lg-4 */}
                          <div className="col-lg-3">
                            <a href="#" className="nolink">Product Layout Types</a>
                            <ul className="submenu">
                              <li><a href="product.html">Default Layout</a></li>
                              <li><a href="product-extended-layout.html">Extended Layout</a></li>
                              <li><a href="product-full-width.html">Full Width Layout</a></li>
                              <li><a href="product-grid-layout.html">Grid Images Layout</a></li>
                              <li><a href="product-sticky-both.html">Sticky Both Side Info</a></li>
                              <li><a href="product-sticky-info.html">Sticky Right Side Info</a></li>
                            </ul>
                          </div>{/* End .col-lg-4 */}
                          <div className="col-lg-3 image-container">
                            <img src="assets/images/menu-banner-1.jpg" alt="Menu banner" className="product-promo" />
                          </div>{/* End .col-lg-4 */}
                        </div>{/* End .row */}
                      </div>{/* End .megamenu */}
                    </li>
                    <li className="sf-with-ul">
                      <a href="#">Pages</a>
                      <ul>
                        <li><a href="cart.html">Shopping Cart</a></li>
                        <li><a href="#">Checkout</a>
                          <ul>
                            <li><a href="checkout-shipping.html">Checkout Shipping</a></li>
                            <li><a href="checkout-shipping-2.html">Checkout Shipping 2</a></li>
                            <li><a href="checkout-review.html">Checkout Review</a></li>
                          </ul>
                        </li>
                        <li><a href="#">Dashboard</a>
                          <ul>
                            <li><a href="dashboard.html">Dashboard</a></li>
                            <li><a href="my-account.html">My Account</a></li>
                          </ul>
                        </li>
                        <li><a href="about.html">About Us</a></li>
                        <li><a href="#">Blog</a>
                          <ul>
                            <li><a href="blog.html">Blog</a></li>
                            <li><a href="single.html">Blog Post</a></li>
                          </ul>
                        </li>
                        <li><a href="contact.html">Contact Us</a></li>
                        <li><a href="#" className="login-link">Login</a></li>
                        <li><a href="forgot-password.html">Forgot Password</a></li>
                      </ul>
                    </li>
                    <li><a href="https://1.envato.market/DdLk5" target="_blank">Buy Porto!</a></li>
                  </ul>
                </nav>
                <div className="header-dropdowns">
                  <div className="header-dropdown">
                    <a href="#" className="link-seller">Become a Seller</a>
                  </div>
                  <div className="header-dropdown">
                    <a href="#">USD</a>
                    <div className="header-menu">
                      <ul>
                        <li><a href="#">EUR</a></li>
                        <li><a href="#">USD</a></li>
                      </ul>
                    </div>{/* End .header-menu */}
                  </div>{/* End .header-dropown */}
                  <div className="header-dropdown">
                    <a href="#">ENG</a>
                    <div className="header-menu">
                      <ul>
                        <li><a href="#">ENGLISH</a></li>
                        <li><a href="#">FRENCH</a></li>
                      </ul>
                    </div>{/* End .header-menu */}
                  </div>{/* End .header-dropown */}
                </div>{/* End .header-left */}
              </div>{/* End .header-bottom */}
            </div>{/* End .header-bottom */}
          </header>{/* End .header */}
          <main className="main">
            <nav aria-label="breadcrumb" className="breadcrumb-nav">
              <div className="container">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a href="index.html"><i className="icon-home" /></a></li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Login</li>
                </ol>
              </div>{/* End .container */}
            </nav>
            <div className="page-header">
              <div className="container">
                <h1>Login and Create Account</h1>
              </div>{/* End .container */}
            </div>{/* End .page-header */}
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="heading">
                    <h2 className="title">Login</h2>
                    <p>If you have an account with us, please log in.</p>
                  </div>{/* End .heading */}
                  <form action="#">
                    <input type="email" className="form-control" placeholder="Email Address" required />
                    <input type="password" className="form-control" placeholder="Password" required />
                    <div className="form-footer">
                      <button type="submit" className="btn btn-primary">LOGIN</button>
                      <a href="#" className="forget-pass"> Forgot your password?</a>
                    </div>{/* End .form-footer */}
                  </form>
                </div>{/* End .col-md-6 */}
                <div className="col-md-6">
                  <div className="heading">
                    <h2 className="title">Create An Account</h2>
                    <p>By creating an account with our store, you will be able to move through the checkout process faster, store multiple shipping addresses, view and track your orders in your account and more.</p>
                  </div>{/* End .heading */}
                  <form action="#">
                    <input type="text" className="form-control" placeholder="First Name" required />
                    <input type="text" className="form-control" placeholder="Middle Name" required />
                    <input type="text" className="form-control" placeholder="Last Name" required />
                    <h2 className="title mb-2">Login information</h2>
                    <input type="email" className="form-control" placeholder="Email Address" required />
                    <input type="password" className="form-control" placeholder="Password" required />
                    <input type="password" className="form-control" placeholder="Confirm Password" required />
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" id="newsletter-signup" />
                      <label className="custom-control-label" htmlFor="newsletter-signup">Sign up our Newsletter</label>
                    </div>{/* End .custom-checkbox */}
                    <div className="form-footer">
                      <button type="submit" className="btn btn-primary">Create Account</button>
                    </div>{/* End .form-footer */}
                  </form>
                </div>{/* End .col-md-6 */}
              </div>{/* End .row */}
            </div>{/* End .container */}
          </main>{/* End .main */}
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
          </footer>{/* End .footer */}
        </div>{/* End .page-wrapper */}
        <div className="mobile-menu-overlay" />{/* End .mobil-menu-overlay */}
        <div className="mobile-menu-container">
          <div className="mobile-menu-wrapper">
            <span className="mobile-menu-close"><i className="icon-retweet" /></span>
            <nav className="mobile-nav">
              <ul className="mobile-menu">
                <li className="active"><a href="index.html">Home</a></li>
                <li>
                  <a href="category.html">Categories</a>
                  <ul>
                    <li><a href="category.html">Full Width Banner</a></li>
                    <li><a href="category-banner-boxed-slider.html">Boxed Slider Banner</a></li>
                    <li><a href="category-banner-boxed-image.html">Boxed Image Banner</a></li>
                    <li><a href="category.html">Left Sidebar</a></li>
                    <li><a href="category-sidebar-right.html">Right Sidebar</a></li>
                    <li><a href="category-flex-grid.html">Product Flex Grid</a></li>
                    <li><a href="category-horizontal-filter1.html">Horizontal Filter 1</a></li>
                    <li><a href="category-horizontal-filter2.html">Horizontal Filter 2</a></li>
                    <li><a href="#">Product List Item Types</a></li>
                    <li><a href="category-infinite-scroll.html">Ajax Infinite Scroll</a></li>
                    <li><a href="category-3col.html">3 Columns Products</a></li>
                    <li><a href="category.html">4 Columns Products</a></li>
                    <li><a href="category-5col.html">5 Columns Products</a></li>
                    <li><a href="category-6col.html">6 Columns Products</a></li>
                    <li><a href="category-7col.html">7 Columns Products</a></li>
                    <li><a href="category-8col.html">8 Columns Products</a></li>
                  </ul>
                </li>
                <li>
                  <a href="product.html">Products</a>
                  <ul>
                    <li>
                      <a href="#">Variations</a>
                      <ul>
                        <li><a href="product.html">Horizontal Thumbnails</a></li>
                        <li><a href="product-full-width.html">Vertical Thumbnails</a></li>
                        <li><a href="product.html">Inner Zoom</a></li>
                        <li><a href="product-addcart-sticky.html">Addtocart Sticky</a></li>
                        <li><a href="product-sidebar-left.html">Accordion Tabs</a></li>
                        <li><a href="product-sticky-tab.html">Sticky Tabs</a></li>
                        <li><a href="product-simple.html">Simple Product</a></li>
                        <li><a href="product-sidebar-left.html">With Left Sidebar</a></li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Product Layout Types</a>
                      <ul>
                        <li><a href="product.html">Default Layout</a></li>
                        <li><a href="product-extended-layout.html">Extended Layout</a></li>
                        <li><a href="product-full-width.html">Full Width Layout</a></li>
                        <li><a href="product-grid-layout.html">Grid Images Layout</a></li>
                        <li><a href="product-sticky-both.html">Sticky Both Side Info</a></li>
                        <li><a href="product-sticky-info.html">Sticky Right Side Info</a></li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">Pages</a>
                  <ul>
                    <li><a href="cart.html">Shopping Cart</a></li>
                    <li>
                      <a href="#">Checkout</a>
                      <ul>
                        <li><a href="checkout-shipping.html">Checkout Shipping</a></li>
                        <li><a href="checkout-shipping-2.html">Checkout Shipping 2</a></li>
                        <li><a href="checkout-review.html">Checkout Review</a></li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Dashboard</a>
                      <ul>
                        <li><a href="dashboard.html">Dashboard</a></li>
                        <li><a href="my-account.html">My Account</a></li>
                      </ul>
                    </li>
                    <li><a href="about.html">About Us</a></li>
                    <li>
                      <a href="#">Blog</a>
                      <ul>
                        <li><a href="blog.html">Blog</a></li>
                        <li><a href="single.html">Blog Post</a></li>
                      </ul>
                    </li>
                    <li><a href="contact.html">Contact Us</a></li>
                    <li><a href="#" className="login-link">Login</a></li>
                    <li><a href="forgot-password.html">Forgot Password</a></li>
                  </ul>
                </li>
                <li><a href="https://1.envato.market/DdLk5" target="_blank">Buy Porto!</a></li>
              </ul>
            </nav>{/* End .mobile-nav */}
            <div className="social-icons">
              <a href="#" className="social-icon" target="_blank"><i className="icon-facebook" /></a>
              <a href="#" className="social-icon" target="_blank"><i className="icon-twitter" /></a>
              <a href="#" className="social-icon" target="_blank"><i className="icon-instagram" /></a>
            </div>{/* End .social-icons */}
          </div>{/* End .mobile-menu-wrapper */}
        </div>{/* End .mobile-menu-container */}
        <a id="scroll-top" href="#top" title="Top" role="button"><i className="icon-angle-up" /></a>
        {/* Plugins JS File */}
        {/* Main JS File */}   
      </div>
    );
  }
});

export default NewComponent