import React from 'react'

export const Header = () => {
  return (
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
                    <div className="submenu opened">
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
    </div>
  )
}

export default Header;
