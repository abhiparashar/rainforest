import React from 'react'

export const Signup = () => {
  return (
    <div>
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
      </div>
    </div>
  )
}

export default Signup;
