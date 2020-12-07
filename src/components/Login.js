import React from 'react'

export const Login = () => {
  return (
    <div>
      <div className="col-md-6">
        <div className="heading">
          <h2 className="title">Login</h2>
          <p>If you have an account with us, please log in.</p>
        </div>
        <form action="#">
          <input type="email" className="form-control" placeholder="Email Address" required />
          <input type="password" className="form-control" placeholder="Password" required />
          <div className="form-footer">
            <button type="submit" className="btn btn-primary">LOGIN</button>
            {/* <a href="#" className="forget-pass"> Forgot your password?</a> */}
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
