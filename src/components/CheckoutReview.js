import React from 'react'

export const CheckoutReview = () => {
  return (
    <div>
      <main className="main">
        <nav aria-label="breadcrumb" className="breadcrumb-nav">
          <div className="container">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="index.html"><i className="icon-home" /></a></li>
              <li className="breadcrumb-item active" aria-current="page">
                checkout</li>
            </ol>
          </div>
        </nav>
        <div className="container">
          <ul className="checkout-progress-bar">
            <li>
              <span>Shipping</span>
            </li>
            <li className="active">
              <span>Review &amp; Payments</span>
            </li>
          </ul>
          <div className="row">
            <div className="col-lg-4">
              <div className="order-summary">
                <h3>Summary</h3>
                <h4>
                  <a data-toggle="collapse" href="#order-cart-section" className="collapsed" role="button" aria-expanded="false" aria-controls="order-cart-section">2 products in Cart</a>
                </h4>
                <div className="collapse" id="order-cart-section">
                  <table className="table table-mini-cart">
                    <tbody>
                      <tr>
                        <td className="product-col">
                          <figure className="product-image-container">
                            <a href="product.html" className="product-image">
                              <img src="assets/images/products/product-1.jpg" alt="product" />
                            </a>
                          </figure>
                          <div>
                            <h2 className="product-title">
                              <a href="product.html">Product Short Name</a>
                            </h2>
                            <span className="product-qty">Qty: 4</span>
                          </div>
                        </td>
                        <td className="price-col">$17.90</td>
                      </tr>
                      <tr>
                        <td className="product-col">
                          <figure className="product-image-container">
                            <a href="product.html" className="product-image">
                              <img src="assets/images/products/product-2.jpg" alt="product" />
                            </a>
                          </figure>
                          <div>
                            <h2 className="product-title">
                              <a href="product.html">Product Short Name</a>
                            </h2>
                            <span className="product-qty">Qty: 4</span>
                          </div>
                        </td>
                        <td className="price-col">$7.90</td>
                      </tr>
                    </tbody>    
                  </table>
                </div>{/* End #order-cart-section */}
              </div>{/* End .order-summary */}
              <div className="checkout-info-box">
                <h3 className="step-title">Ship To:
                  <a href="#" title="Edit" className="step-title-edit"><span className="sr-only">Edit</span><i className="icon-pencil" /></a>
                </h3>
                <address>
                  Desmond Mason <br />
                  123 Street Name, City, USA <br />
                  Los Angeles, California 03100 <br />
                  United States <br />
                  (123) 456-7890
                </address>
              </div>{/* End .checkout-info-box */}
              <div className="checkout-info-box">
                <h3 className="step-title">Shipping Method: 
                  <a href="#" title="Edit" className="step-title-edit"><span className="sr-only">Edit</span><i className="icon-pencil" /></a>
                </h3>
                <p>Flat Rate - Fixed</p>
              </div>{/* End .checkout-info-box */}
            </div>{/* End .col-lg-4 */}
            <div className="col-lg-8 order-lg-first">
              <div className="checkout-payment">
                <h2 className="step-title">Payment Method:</h2>
                <h4>Check / Money order</h4>
                <div className="form-group-custom-control">
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="change-bill-address" defaultValue={1} />
                    <label className="custom-control-label" htmlFor="change-bill-address">My billing and shipping address are the same</label>
                  </div>{/* End .custom-checkbox */}
                </div>{/* End .form-group */}
                <div id="checkout-shipping-address">
                  <address>
                    Desmond Mason <br />
                    123 Street Name, City, USA <br />
                    Los Angeles, California 03100 <br />
                    United States <br />
                    (123) 456-7890
                  </address>
                </div>{/* End #checkout-shipping-address */}
                <div id="new-checkout-address" className="show">
                  <form action="#">
                    <div className="form-group required-field">
                      <label>First Name </label>
                      <input type="text" className="form-control" required />
                    </div>{/* End .form-group */}
                    <div className="form-group required-field">
                      <label>Last Name </label>
                      <input type="text" className="form-control" required />
                    </div>{/* End .form-group */}
                    <div className="form-group">
                      <label>Company </label>
                      <input type="text" className="form-control" />
                    </div>{/* End .form-group */}
                    <div className="form-group required-field">
                      <label>Street Address </label>
                      <input type="text" className="form-control" required />
                      <input type="text" className="form-control" required />
                    </div>{/* End .form-group */}
                    <div className="form-group required-field">
                      <label>City</label>
                      <input type="text" className="form-control" required />
                    </div>{/* End .form-group */}
                    <div className="form-group">
                      <label>State/Province</label>
                      <div className="select-custom">
                        <select className="form-control">
                          <option value="CA">California</option>
                          <option value="TX">Texas</option>
                        </select>
                      </div>{/* End .select-custom */}
                    </div>{/* End .form-group */}
                    <div className="form-group required-field">
                      <label>Zip/Postal Code </label>
                      <input type="text" className="form-control" required />
                    </div>{/* End .form-group */}
                    <div className="form-group">
                      <label>Country</label>
                      <div className="select-custom">
                        <select className="form-control">
                          <option value="USA">United States</option>
                          <option value="Turkey">Turkey</option>
                          <option value="China">China</option>
                          <option value="Germany">Germany</option>
                        </select>
                      </div>{/* End .select-custom */}
                    </div>{/* End .form-group */}
                    <div className="form-group required-field">
                      <label>Phone Number </label>
                      <div className="form-control-tooltip">
                        <input type="tel" className="form-control" required />
                        <span className="input-tooltip" data-toggle="tooltip" title="For delivery questions." data-placement="right"><i className="icon-question-circle" /></span>
                      </div>{/* End .form-control-tooltip */}
                    </div>{/* End .form-group */}
                    <div className="form-group-custom-control">
                      <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="address-save" />
                        <label className="custom-control-label" htmlFor="address-save">Save in Address book</label>
                      </div>{/* End .custom-checkbox */}
                    </div>{/* End .form-group */}
                  </form>
                </div>{/* End #new-checkout-address */}
                <div className="clearfix">
                  <a href="#" className="btn btn-primary float-right">Place Order</a>
                </div>{/* End .clearfix */}
              </div>{/* End .checkout-payment */}
              <div className="checkout-discount">
                <h4>
                  <a data-toggle="collapse" href="#checkout-discount-section" className="collapsed" role="button" aria-expanded="false" aria-controls="checkout-discount-section">Apply Discount Code</a>
                </h4>
                <div className="collapse" id="checkout-discount-section">
                  <form action="#">
                    <input type="text" className="form-control form-control-sm" placeholder="Enter discount code" required />
                    <button className="btn btn-sm btn-outline-secondary" type="submit">Apply Discount</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default CheckoutReview;
