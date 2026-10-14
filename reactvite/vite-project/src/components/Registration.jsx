import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const Registration = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">
          <h2 className="text-center fw-bold mb-4">Registration form</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="registrationEmail" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="registrationEmail"
                aria-describedby="registrationEmailHelp"
                placeholder="Enter email"
                autoComplete="email"
                required
              />
              <div id="registrationEmailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="registrationPassword" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="registrationPassword"
                placeholder="Password"
                autoComplete="new-password"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
                placeholder="Confirm password"
                autoComplete="new-password"
                required
              />
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
