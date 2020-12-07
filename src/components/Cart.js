import React from 'react'

const Cart = React.createClass({
  render: function() {
    return (
      <div>  
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
                    cart</li>
                </ol>
              </div>{/* End .container */}
            </nav>
            <div className="container">
              <div className="row">
                <div className="col-lg-8">
                  <div className="cart-table-container">
                    <table className="table table-cart">
                      <thead>
                        <tr>
                          <th className="product-col">Product</th>
                          <th className="price-col">Price</th>
                          <th className="qty-col">Qty</th>
                          <th>Subtotal</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="product-row">
                          <td className="product-col">
                            <figure className="product-image-container">
                              <a href="product.html" className="product-image">
                                <img src="assets/images/products/product-1.jpg" alt="product" />
                              </a>
                            </figure>
                            <h2 className="product-title">
                              <a href="product.html">Product Short Name</a>
                            </h2>
                          </td>
                          <td>$17.90</td>
                          <td>
                            <input className="vertical-quantity form-control" type="text" />
                          </td>
                          <td>$17.90</td>
                        </tr>
                        <tr className="product-action-row">
                          <td colSpan={4} className="clearfix">
                            <div className="float-left">
                              <a href="#" className="btn-move">Move to Wishlist</a>
                            </div>{/* End .float-left */}
                            <div className="float-right">
                              <a href="#" title="Edit product" className="btn-edit"><span className="sr-only">Edit</span><i className="icon-pencil" /></a>
                              <a href="#" title="Remove product" className="btn-remove"><span className="sr-only">Remove</span></a>
                            </div>{/* End .float-right */}
                          </td>
                        </tr>
                        <tr className="product-row">
                          <td className="product-col">
                            <figure className="product-image-container">
                              <a href="product.html" className="product-image">
                                <img src="assets/images/products/product-2.jpg" alt="product" />
                              </a>
                            </figure>
                            <h2 className="product-title">
                              <a href="product.html">Product Short Name</a>
                            </h2>
                          </td>
                          <td>$8.90</td>
                          <td>
                            <input className="vertical-quantity form-control" type="text" />
                          </td>
                          <td>$8.90</td>
                        </tr>
                        <tr className="product-action-row">
                          <td colSpan={4} className="clearfix">
                            <div className="float-left">
                              <a href="#" className="btn-move">Move to Wishlist</a>
                            </div>{/* End .float-left */}
                            <div className="float-right">
                              <a href="#" title="Edit product" className="btn-edit"><span className="sr-only">Edit</span><i className="icon-pencil" /></a>
                              <a href="#" title="Remove product" className="btn-remove"><span className="sr-only">Remove</span></a>
                            </div>{/* End .float-right */}
                          </td>
                        </tr>
                      </tbody>
                      <tfoot>
                        <tr>
                          <td colSpan={4} className="clearfix">
                            <div className="float-left">
                              <a href="category.html" className="btn btn-outline-secondary">Continue Shopping</a>
                            </div>{/* End .float-left */}
                            <div className="float-right">
                              <a href="#" className="btn btn-outline-secondary btn-clear-cart">Clear Shopping Cart</a>
                              <a href="#" className="btn btn-outline-secondary btn-update-cart">Update Shopping Cart</a>
                            </div>{/* End .float-right */}
                          </td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>{/* End .cart-table-container */}
                  <div className="cart-discount">
                    <h4>Apply Discount Code</h4>
                    <form action="#">
                      <div className="input-group">
                        <input type="text" className="form-control form-control-sm" placeholder="Enter discount code" required />
                        <div className="input-group-append">
                          <button className="btn btn-sm btn-primary" type="submit">Apply Discount</button>
                        </div>
                      </div>{/* End .input-group */}
                    </form>
                  </div>{/* End .cart-discount */}
                </div>{/* End .col-lg-8 */}
                <div className="col-lg-4">
                  <div className="cart-summary">
                    <h3>Summary</h3>
                    <h4>
                      <a data-toggle="collapse" href="#total-estimate-section" className="collapsed" role="button" aria-expanded="false" aria-controls="total-estimate-section">Estimate Shipping and Tax</a>
                    </h4>
                    <div className="collapse" id="total-estimate-section">
                      <form action="#">
                        <div className="form-group form-group-sm">
                          <label>Country</label>
                          <div className="select-custom">
                            <select className="form-control form-control-sm">
                              <option value="USA">United States</option>
                              <option value="Turkey">Turkey</option>
                              <option value="China">China</option>
                              <option value="Germany">Germany</option>
                            </select>
                          </div>{/* End .select-custom */}
                        </div>{/* End .form-group */}
                        <div className="form-group form-group-sm">
                          <label>State/Province</label>
                          <div className="select-custom">
                            <select className="form-control form-control-sm">
                              <option value="CA">California</option>
                              <option value="TX">Texas</option>
                            </select>
                          </div>{/* End .select-custom */}
                        </div>{/* End .form-group */}
                        <div className="form-group form-group-sm">
                          <label>Zip/Postal Code</label>
                          <input type="text" className="form-control form-control-sm" />
                        </div>{/* End .form-group */}
                        <div className="form-group form-group-custom-control">
                          <label>Flat Way</label>
                          <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="flat-rate" />
                            <label className="custom-control-label" htmlFor="flat-rate">Fixed $5.00</label>
                          </div>{/* End .custom-checkbox */}
                        </div>{/* End .form-group */}
                        <div className="form-group form-group-custom-control">
                          <label>Best Rate</label>
                          <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="best-rate" />
                            <label className="custom-control-label" htmlFor="best-rate">Table Rate $15.00</label>
                          </div>{/* End .custom-checkbox */}
                        </div>{/* End .form-group */}
                      </form>
                    </div>{/* End #total-estimate-section */}
                    <table className="table table-totals">
                      <tbody>
                        <tr>
                          <td>Subtotal</td>
                          <td>$17.90</td>
                        </tr>
                        <tr>
                          <td>Tax</td>
                          <td>$0.00</td>
                        </tr>
                      </tbody>
                      <tfoot>
                        <tr>
                          <td>Order Total</td>
                          <td>$17.90</td>
                        </tr>
                      </tfoot>
                    </table>
                    <div className="checkout-methods">
                      <a href="checkout-shipping.html" className="btn btn-block btn-sm btn-primary">Go to Checkout</a>
                      <a href="#" className="btn btn-link btn-block">Check Out with Multiple Addresses</a>
                    </div>{/* End .checkout-methods */}
                  </div>{/* End .cart-summary */}
                </div>{/* End .col-lg-4 */}
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

export default Cart;