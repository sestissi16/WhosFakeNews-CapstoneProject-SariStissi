import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './LoginForm.css';

const LoginForm = ({
  image, heading, subheading, backgroundColor, isFlat, headingColor, subheadingColor,
}) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [email, setEmail] = useState(undefined);
  const [password, setPassword] = useState(undefined);
  const [isRememberMeChecked, setIsRememberMeChecked] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitted(true);
    const isFormValid = e.target.checkValidity();
    if (isFormValid) {
      // Success
      alert(`Signing in with email: ${email} and password: ${password}, and the user wants to be remembered: ${isRememberMeChecked}`);
    } else {
      // Form has errors, so don't sign in
    }
  }

  return (
    <div style={{ backgroundColor }} className="col d-flex justify-content-center align-items-center flex-column">
      <div className="login-form">
        {image && (
          <div className="d-flex justify-content-center">
            <img src={image} style={{ width: '100px' }} alt="logo" />
          </div>
        )}
        <div className="text-center">
          {heading && (
            <h2 style={{ color: headingColor, padding: '0% 0% 2%' }}>{heading}</h2>
          )}
          {subheading && (
            <p style={{ color: subheadingColor, fontSize: '1.4em' }}>
              {subheading}
            </p>
          )}
        </div>
        <form className={`p-4 ${isFlat ? '' : 'shadow-sm rounded-sm bg-white'} ${isSubmitted ? 'was-validated' : ''}`} noValidate onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="emailInput">Email address</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="form-control form-control-sm"
              id="emailInput"
              // aria-describedby="emailHelp"
              required
            />
            <div className="invalid-feedback">
              Please enter an email address in the correct format.
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="passwordInput">Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              type="password"
              className="form-control form-control-sm"
              id="passwordInput"
              required
            />
            <div className="invalid-feedback">
              Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters
            </div>
          </div>
          <div className="form-group form-check d-flex align-items-center">
            <input
              onChange={(e) => setIsRememberMeChecked(e.target.checked)}
              type="checkbox"
              className="form-check-input mt-0"
              id="rememberMeCheck"
            />
            <label className="form-check-label text-muted" htmlFor="rememberMeCheck">
              Remember me
            </label>
          </div>
          <button type="submit" className="btn btn-danger btn-block btn-sm">Log In</button>
          <div className="d-flex justify-content-between mt-4">
            <button type="button" className="btn btn-link btn-sm p-0" id="creatNewAccountButton">Create new account</button>
            <button type="button" className="btn btn-link btn-sm p-0" id="forgotPasswordButton">Forgot password?</button>
          </div>
        </form>
      </div>
    </div>
  );
};

LoginForm.propTypes = {
  backgroundColor: PropTypes.string,
  isFlat: PropTypes.bool,
  heading: PropTypes.string,
  headingColor: PropTypes.string,
  subheading: PropTypes.string,
  subheadingColor: PropTypes.string,
  image: PropTypes.node,
};

LoginForm.defaultProps = {
  backgroundColor: 'white',
  isFlat: false,
  heading: '',
  headingColor: 'black',
  subheading: '',
  subheadingColor: 'black',
  image: undefined,
};

export default LoginForm;
