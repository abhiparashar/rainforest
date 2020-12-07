import React from 'react'

export const CheckoutShipping2 = () => {
  return (
    <div>
      <main className="main">
        <nav aria-label="breadcrumb" className="breadcrumb-nav">
          <div className="container">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="index.html"><i className="icon-home" /></a></li>
              <li className="breadcrumb-item active" aria-current="page">
                CATEGORIES</li>
            </ol>
          </div>{/* End .container */}
        </nav>
        <div className="container">
          <ul className="checkout-progress-bar">
            <li className="active">
              <span>Shipping</span>
            </li>
            <li>
              <span>Review &amp; Payments</span>
            </li>
          </ul>
          <div className="row">
            <div className="col-lg-8">
              <ul className="checkout-steps">
                <li>
                  <h2 className="step-title">Shipping Address</h2>
                  <div className="shipping-step-addresses">
                    <div className="shipping-address-box active">
                      <address>
                        Desmond Mason <br />
                        123 Street Name, City Name <br />
                        Los Angeles, California 03100 <br />
                        United States <br />
                        (123) 456-7890 <br />
                      </address>
                      <div className="address-box-action clearfix">
                        <a href="#" className="btn btn-sm btn-link">
                          Edit
                        </a>
                        <a href="#" className="btn btn-sm btn-outline-secondary float-right">
                          Ship Here
                        </a>
                      </div>{/* End .address-box-action */}
                    </div>{/* End .shipping-address-box */}
                    <div className="shipping-address-box">
                      <address>
                        Susan Mason <br />
                        123 Street Name, City Name <br />
                        Los Angeles, California 03100 <br />
                        United States <br />
                        (123) 789-6150 <br />
                      </address>
                      <div className="address-box-action clearfix">
                        <a href="#" className="btn btn-sm btn-link">
                          Edit
                        </a>
                        <a href="#" className="btn btn-sm btn-outline-secondary float-right">
                          Ship Here
                        </a>
                      </div>{/* End .address-box-action */}
                    </div>{/* End .shipping-address-box */}
                  </div>{/* End .shipping-step-addresses */}
                  <a href="#" className="btn btn-sm btn-outline-secondary btn-new-address" data-toggle="modal" data-target="#addressModal">+ New Address</a>
                </li>
                <li>
                  <div className="checkout-step-shipping">
                    <h2 className="step-title">Shipping Methods</h2>
                    <table className="table table-step-shipping">
                      <tbody>
                        <tr>
                          <td><input type="radio" name="shipping-method" defaultValue="flat" /></td>
                          <td><strong>$20.00</strong></td>
                          <td>Fixed</td>
                          <td>Flat Rate</td>
                        </tr>
                        <tr>
                          <td><input type="radio" name="shipping-method" defaultValue="best" /></td>
                          <td><strong>$15.00</strong></td>
                          <td>Table Rate</td>
                          <td>Best Way</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>{/* End .checkout-step-shipping */}
                </li>
              </ul>
            </div>{/* End .col-lg-8 */}
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
            </div>{/* End .col-lg-4 */}
          </div>{/* End .row */}
          <div className="row">
            <div className="col-lg-8">
              <div className="checkout-steps-action">
                <a href="checkout-review.html" className="btn btn-primary float-right">NEXT</a>
              </div>{/* End .checkout-steps-action */}
            </div>{/* End .col-lg-8 */}
          </div>{/* End .row */}
        </div>{/* End .container */}
        <div className="mb-4" />
      </main>
    </div>
  )
}

export default CheckoutShipping2
