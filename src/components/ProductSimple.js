import React from 'react'

export const ProductSimple = () => {
  return (
            <div className="container">
        <div className="row">
          <div className="col-lg-10">
            <div className="product-single-container product-single-default">
              <div className="row">
                <div className="col-lg-5 col-md-6">
                  <div className="product-single-gallery">
                    <div className="product-slider-container product-item">
                      <div className="product-single-carousel owl-carousel owl-theme">
                        <div className="product-item">
                          <img className="product-single-image" src="assets/images/products/zoom/product-1.jpg" data-zoom-image="assets/images/products/zoom/product-1-big.jpg" />
                        </div>
                        <div className="product-item">
                          <img className="product-single-image" src="assets/images/products/zoom/product-2.jpg" data-zoom-image="assets/images/products/zoom/product-2-big.jpg" />
                        </div>
                        <div className="product-item">
                          <img className="product-single-image" src="assets/images/products/zoom/product-3.jpg" data-zoom-image="assets/images/products/zoom/product-3-big.jpg" />
                        </div>
                        <div className="product-item">
                          <img className="product-single-image" src="assets/images/products/zoom/product-4.jpg" data-zoom-image="assets/images/products/zoom/product-4-big.jpg" />
                        </div>
                      </div>
                      {/* End .product-single-carousel */}
                      <span className="prod-full-screen">
                        <i className="icon-plus" />
                      </span>
                    </div>
                    <div className="prod-thumbnail row owl-dots" id="carousel-custom-dots">
                      <div className="col-3 owl-dot">
                        <img src="assets/images/products/zoom/product-1.jpg" />
                      </div>
                      <div className="col-3 owl-dot">
                        <img src="assets/images/products/zoom/product-2.jpg" />
                      </div>
                      <div className="col-3 owl-dot">
                        <img src="assets/images/products/zoom/product-3.jpg" />
                      </div>
                      <div className="col-3 owl-dot">
                        <img src="assets/images/products/zoom/product-4.jpg" />
                      </div>
                    </div>
                  </div>{/* End .product-single-gallery */}
                </div>{/* End .col-lg-7 */}
                <div className="col-lg-7 col-md-6">
                  <div className="product-single-details">
                    <h1 className="product-title">Silver Porto Headset</h1>
                    <div className="ratings-container">
                      <div className="product-ratings">
                        <span className="ratings" style={{width: '60%'}} />{/* End .ratings */}
                      </div>{/* End .product-ratings */}
                      <a href="#" className="rating-link">( 6 Reviews )</a>
                    </div>{/* End .product-container */}
                    <div className="price-box">
                      <span className="old-price">$81.00</span>
                      <span className="product-price">$101.00</span>
                    </div>{/* End .price-box */}
                    <div className="product-desc">
                      <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non.</p>
                    </div>{/* End .product-desc */}
                    <div className="product-filters-container">
                      <div className="product-single-filter">
                        <label>Colors:</label>
                        <ul className="config-swatch-list">
                          <li className="active">
                            <a href="#" style={{backgroundColor: '#6085a5'}} />
                          </li>
                          <li>
                            <a href="#" style={{backgroundColor: '#ab6e6e'}} />
                          </li>
                          <li>
                            <a href="#" style={{backgroundColor: '#b19970'}} />
                          </li>
                          <li>
                            <a href="#" style={{backgroundColor: '#11426b'}} />
                          </li>
                        </ul>
                      </div>{/* End .product-single-filter */}
                      <div className="product-single-filter">
                        <label>Sizes:</label>
                        <ul className="config-size-list">
                          <li className="active"><a href="#">S</a></li>
                          <li><a href="#">M</a></li>
                          <li><a href="#">L</a></li>
                          <li><a href="#">XL</a></li>
                        </ul>
                      </div>{/* End .product-single-filter */}
                    </div>{/* End .product-filters-container */}
                    <div className="product-action">
                      <div className="product-single-qty">
                        <input className="horizontal-quantity form-control" type="text" />
                      </div>{/* End .product-single-qty */}
                      <a href="cart.html" className="paction add-cart" title="Add to Cart">
                        Add to Bag
                      </a>
                      <a href="#" className="paction add-wishlist" title="Add to Wishlist">
                        <span>Add to Wishlist</span>
                      </a>
                    </div>{/* End .product-action */}
                    <div className="product-single-share">
                      <label>Share:</label>
                      {/* www.addthis.com share plugin*/}
                      <div className="addthis_inline_share_toolbox" />
                    </div>{/* End .product single-share */}
                  </div>{/* End .product-single-details */}
                </div>{/* End .col-lg-5 */}
              </div>{/* End .row */}
            </div>{/* End .product-single-container */}
            <div className="product-single-tabs">
              <ul className="nav nav-tabs" role="tablist">
                <li className="nav-item">
                  <a className="nav-link" id="product-tab-desc" data-toggle="tab" href="#product-desc-content" role="tab" aria-controls="product-desc-content" aria-selected="false">Description</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" id="product-tab-size" data-toggle="tab" href="#product-size-content" role="tab" aria-controls="product-size-content" aria-selected="true">Size Guide</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" id="product-tab-tags" data-toggle="tab" href="#product-tags-content" role="tab" aria-controls="product-tags-content" aria-selected="false">Tags</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" id="product-tab-reviews" data-toggle="tab" href="#product-reviews-content" role="tab" aria-controls="product-reviews-content" aria-selected="false">Reviews</a>
                </li>
              </ul>
              <div className="tab-content">
                <div className="tab-pane fade" id="product-desc-content" role="tabpanel" aria-labelledby="product-tab-desc">
                  <div className="product-desc-content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.</p>
                    <ul>
                      <li><i className="icon-ok" />Any Product types that You want - Simple, Configurable</li>
                      <li><i className="icon-ok" />Downloadable/Digital Products, Virtual Products</li>
                      <li><i className="icon-ok" />Inventory Management with Backordered items</li>
                    </ul>
                    <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, <br />quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                  </div>{/* End .product-desc-content */}
                </div>{/* End .tab-pane */}
                <div className="tab-pane fade show active" id="product-size-content" role="tabpanel" aria-labelledby="product-tab-size">
                  <div className="product-size-content">
                    <div className="row">
                      <div className="col-md-4">
                        <img src="assets/images/products/single/body-shape.png" alt="body shape" />
                      </div>{/* End .col-md-4 */}
                      <div className="col-md-8">
                        <table className="table table-size">
                          <thead>
                            <tr>
                              <th>SIZE</th>
                              <th>CHEST (in.)</th>
                              <th>WAIST (in.)</th>
                              <th>HIPS (in.)</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>XS</td>
                              <td>34-36</td>
                              <td>27-29</td>
                              <td>34.5-36.5</td>
                            </tr>
                            <tr>
                              <td>S</td>
                              <td>36-38</td>
                              <td>29-31</td>
                              <td>36.5-38.5</td>
                            </tr>
                            <tr>
                              <td>M</td>
                              <td>38-40</td>
                              <td>31-33</td>
                              <td>38.5-40.5</td>
                            </tr>
                            <tr>
                              <td>L</td>
                              <td>40-42</td>
                              <td>33-36</td>
                              <td>40.5-43.5</td>
                            </tr>
                            <tr>
                              <td>XL</td>
                              <td>42-45</td>
                              <td>36-40</td>
                              <td>43.5-47.5</td>
                            </tr>
                            <tr>
                              <td>XLL</td>
                              <td>45-48</td>
                              <td>40-44</td>
                              <td>47.5-51.5</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>{/* End .row */}
                  </div>{/* End .product-size-content */}
                </div>{/* End .tab-pane */}
                <div className="tab-pane fade" id="product-tags-content" role="tabpanel" aria-labelledby="product-tab-tags">
                  <div className="product-tags-content">
                    <form action="#">
                      <h4>Add Your Tags:</h4>
                      <div className="form-group">
                        <input type="text" className="form-control form-control-sm" required />
                        <input type="submit" className="btn btn-primary" defaultValue="Add Tags" />
                      </div>{/* End .form-group */}
                    </form>
                    <p className="note">Use spaces to separate tags. Use single quotes (') for phrases.</p>
                  </div>{/* End .product-tags-content */}
                </div>{/* End .tab-pane */}
                <div className="tab-pane fade" id="product-reviews-content" role="tabpanel" aria-labelledby="product-tab-reviews">
                  <div className="product-reviews-content">
                    <div className="collateral-box">
                      <ul>
                        <li>Be the first to review this product</li>
                      </ul>
                    </div>{/* End .collateral-box */}
                    <div className="add-product-review">
                      <h3 className="text-uppercase heading-text-color font-weight-semibold">WRITE YOUR OWN REVIEW</h3>
                      <p>How do you rate this product? *</p>
                      <form action="#">
                        <table className="ratings-table">
                          <thead>
                            <tr>
                              <th>&nbsp;</th>
                              <th>1 star</th>
                              <th>2 stars</th>
                              <th>3 stars</th>
                              <th>4 stars</th>
                              <th>5 stars</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Quality</td>
                              <td>
                                <input type="radio" name="ratings[1]" id="Quality_1" defaultValue={1} className="radio" />
                              </td>
                              <td>
                                <input type="radio" name="ratings[1]" id="Quality_2" defaultValue={2} className="radio" />
                              </td>
                              <td>
                                <input type="radio" name="ratings[1]" id="Quality_3" defaultValue={3} className="radio" />
                              </td>
                              <td>
                                <input type="radio" name="ratings[1]" id="Quality_4" defaultValue={4} className="radio" />
                              </td>
                              <td>
                                <input type="radio" name="ratings[1]" id="Quality_5" defaultValue={5} className="radio" />
                              </td>
                            </tr>
                            <tr>
                              <td>Value</td>
                              <td>
                                <input type="radio" name="value[1]" id="Value_1" defaultValue={1} className="radio" />
                              </td>
                              <td>
                                <input type="radio" name="value[1]" id="Value_2" defaultValue={2} className="radio" />
                              </td>
                              <td>
                                <input type="radio" name="value[1]" id="Value_3" defaultValue={3} className="radio" />
                              </td>
                              <td>
                                <input type="radio" name="value[1]" id="Value_4" defaultValue={4} className="radio" />
                              </td>
                              <td>
                                <input type="radio" name="value[1]" id="Value_5" defaultValue={5} className="radio" />
                              </td>
                            </tr>
                            <tr>
                              <td>Price</td>
                              <td>
                                <input type="radio" name="price[1]" id="Price_1" defaultValue={1} className="radio" />
                              </td>
                              <td>
                                <input type="radio" name="price[1]" id="Price_2" defaultValue={2} className="radio" />
                              </td>
                              <td>
                                <input type="radio" name="price[1]" id="Price_3" defaultValue={3} className="radio" />
                              </td>
                              <td>
                                <input type="radio" name="price[1]" id="Price_4" defaultValue={4} className="radio" />
                              </td>
                              <td>
                                <input type="radio" name="price[1]" id="Price_5" defaultValue={5} className="radio" />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <div className="form-group">
                          <label>Nickname <span className="required">*</span></label>
                          <input type="text" className="form-control form-control-sm" required />
                        </div>{/* End .form-group */}
                        <div className="form-group">
                          <label>Summary of Your Review <span className="required">*</span></label>
                          <input type="text" className="form-control form-control-sm" required />
                        </div>{/* End .form-group */}
                        <div className="form-group mb-2">
                          <label>Review <span className="required">*</span></label>
                          <textarea cols={5} rows={6} className="form-control form-control-sm" defaultValue={""} />
                        </div>{/* End .form-group */}
                        <input type="submit" className="btn btn-primary" defaultValue="Submit Review" />
                      </form>
                    </div>{/* End .add-product-review */}
                  </div>{/* End .product-reviews-content */}
                </div>{/* End .tab-pane */}
              </div>{/* End .tab-content */}
            </div>{/* End .product-single-tabs */}
          </div>{/* End .col-lg-9 */}
          <div className="sidebar-overlay" />
          <div className="sidebar-toggle"><i className="icon-right-open" /></div>
          <aside className="sidebar-product col-lg-2 padding-left-lg mobile-sidebar">
            <div className="sidebar-wrapper">
              <div className="widget widget-sold">
                <h3 className="widget-title">
                  <a data-toggle="collapse" href="#widget-body-1" role="button" aria-expanded="true" aria-controls="widget-body-1">Sold By</a>
                </h3>
                <div className="collapse show" id="widget-body-1">
                  <div className="widget-body ">
                    <h3>Okler Electronics</h3>
                    <h4>CHINA</h4>
                    <i className="fas fa-info-circle" /><span className="span-info">97.4%</span><span>Positive Feedback</span>
                    <a href="#">VISIT STORE</a>
                  </div>
                </div>{/* End .collapse */}
              </div>{/* End .widget */}
              <div className="widget">
                <h3 className="widget-title">
                  <a data-toggle="collapse" href="#widget-body-2" role="button" aria-expanded="true" aria-controls="widget-body-2">Featured Products</a>
                </h3>
                <div className="collapse show" id="widget-body-2">
                  <div className="widget-body">
                    <div className="product-intro">
                      <div className="product-default left-details product-widget">
                        <figure>
                          <a href="product.html">
                            <img src="assets/images/products/product-2.jpg" />
                          </a>
                        </figure>
                        <div className="product-details">
                          <h2 className="product-title">
                            <a href="product.html">Product Short Name</a>
                          </h2>
                          <div className="ratings-container">
                            <div className="product-ratings">
                              <span className="ratings" style={{width: '100%'}} />{/* End .ratings */}
                              <span className="tooltiptext tooltip-top" />
                            </div>{/* End .product-ratings */}
                          </div>{/* End .product-container */}
                          <div className="price-box">
                            <span className="product-price">$49.00</span>
                          </div>{/* End .price-box */}
                        </div>{/* End .product-details */}
                      </div>
                      <div className="product-default left-details product-widget">
                        <figure>
                          <a href="product.html">
                            <img src="assets/images/products/product-3.jpg" />
                          </a>
                        </figure>
                        <div className="product-details">
                          <h2 className="product-title">
                            <a href="product.html">Product Short Name</a>
                          </h2>
                          <div className="ratings-container">
                            <div className="product-ratings">
                              <span className="ratings" style={{width: '100%'}} />{/* End .ratings */}
                              <span className="tooltiptext tooltip-top" />
                            </div>{/* End .product-ratings */}
                          </div>{/* End .product-container */}
                          <div className="price-box">
                            <span className="product-price">$49.00</span>
                          </div>{/* End .price-box */}
                        </div>{/* End .product-details */}
                      </div>
                      <div className="product-default left-details product-widget">
                        <figure>
                          <a href="product.html">
                            <img src="assets/images/products/product-4.jpg" />
                          </a>
                        </figure>
                        <div className="product-details">
                          <h2 className="product-title">
                            <a href="product.html">Product Short Name</a>
                          </h2>
                          <div className="ratings-container">
                            <div className="product-ratings">
                              <span className="ratings" style={{width: '100%'}} />{/* End .ratings */}
                              <span className="tooltiptext tooltip-top" />
                            </div>{/* End .product-ratings */}
                          </div>{/* End .product-container */}
                          <div className="price-box">
                            <span className="product-price">$49.00</span>
                          </div>{/* End .price-box */}
                        </div>{/* End .product-details */}
                      </div>
                    </div>
                  </div>{/* End .widget-body */}
                </div>{/* End .collapse */}
              </div>{/* End .widget */}
              <div className="widget">
                <h3 className="widget-title">
                  <a data-toggle="collapse" href="#widget-body-3" role="button" aria-expanded="true" aria-controls="widget-body-3">Custom HTML Block</a>
                </h3>
                <div className="collapse show" id="widget-body-3">
                  <div className="widget-body">
                    <h4 className="widget-subtitle">This is a custom sub-title.</h4>
                    <p>Lorem ipsum dolor ist amet, consec tetur elitad adipiscing Cras non placerat mi.</p>
                  </div>{/* End .widget-body */}
                </div>{/* End .collapse */}
              </div>{/* End .widget */}
              <div className="widget widget-banner">
                <div className="banner banner-image">
                  <a href="#">
                    <img src="assets/images/banners/banner-sidebar.jpg" alt="Banner Desc" />
                  </a>
                </div>{/* End .banner */}
              </div>{/* End .widget */}
            </div>
          </aside>
        </div>
        <div className="mb-lg-4" />
      </div>
  )
}

export default ProductSimple
