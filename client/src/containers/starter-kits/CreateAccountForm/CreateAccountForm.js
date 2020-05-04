import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CreateAccountForm = ({
  backgroundColor, heading, subheading, headingColor, subheadingColor, isFlat, image,
}) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [firstName, setFirstName] = useState(undefined);
  const [lastName, setLastName] = useState(undefined);
  const [email, setEmail] = useState(undefined);
  const [password, setPassword] = useState(undefined);
  const [isAgreeToTermsAndConditionsChecked, setIsAgreeToTermsAndConditionsChecked] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitted(true);
    const isFormValid = e.target.checkValidity();
    if (isFormValid && isAgreeToTermsAndConditionsChecked) {
      // Success
      alert('Creating account');
    } else {
      // Form has errors, so don't create the account
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
            <h4 style={{ color: headingColor }}>{heading}</h4>
          )}
          {subheading && (
          <p style={{ color: subheadingColor }}>
            {subheading}
          </p>
          )}
        </div>
        <form className={`p-4 ${isFlat ? '' : 'shadow-sm rounded-sm bg-white'} ${isSubmitted ? 'was-validated' : ''}`} noValidate onSubmit={handleSubmit}>
          <div className="form-group">
            <div className="form-row">
              <div className="col">
                <label htmlFor="firstNameInput">First Name</label>
                <input
                  onChange={(e) => setFirstName(e.target.value)}
                  type="text"
                  className="form-control form-control-sm"
                  id="firstNameInput"
                  required
                />
                <div className="invalid-feedback">
                  Enter your first name.
                </div>
              </div>
              <div className="col">
                <label htmlFor="lastNameInput">Last Name</label>
                <input
                  onChange={(e) => setLastName(e.target.value)}
                  type="text"
                  className="form-control form-control-sm"
                  id="lastNameInput"
                  required
                />
                <div className="invalid-feedback">
                  Enter your last name.
                </div>
              </div>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="emailInput">Email Address</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="form-control form-control-sm"
              id="emailInput"
              aria-describedby="emailHelp"
              required
            />
            <div className="invalid-feedback">
              Please enter an email address in the correct format.
            </div>
          </div>
          <div className="form-group">
            <div className="form-row">
              <div className="col">
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
              <div className="col">
                <label htmlFor="confirmPasswordInput">Confirm Password</label>
                <input
                  pattern={`${password}`}
                  type="password"
                  className="form-control form-control-sm"
                  id="confirmPasswordInput"
                  required
                />
                <div className="invalid-feedback">
                  Please make sure that your passwords match.
                </div>
              </div>
            </div>
          </div>
          <div className="form-group form-check">
            <div className="d-flex align-items-center">
              <input
                onChange={(e) => setIsAgreeToTermsAndConditionsChecked(e.target.checked)}
                type="checkbox"
                className="form-check-input mt-0"
                id="agreeToTermsAndConditionsCheckbox"
                required
              />
              <label className="form-check-label d-flex align-items-center" htmlFor="agreeToTermsAndConditionsCheckbox">
                I agree to the
                {' '}
                <button type="button" className="btn btn-link p-0 ml-1 btn-small">terms & conditions</button>
              </label>
            </div>
          </div>
          <button type="submit" className="btn btn-primary btn-block btn-sm">Create Account</button>
          <div className="d-flex justify-content-between mt-4">
            <button type="button" className="btn btn-link btn-sm p-0">&#8592; Log In</button>
            <button type="button" className="btn btn-link btn-sm p-0">Forgot Password?</button>
          </div>
        </form>
      </div>
    </div>
  );
};

CreateAccountForm.propTypes = {
  backgroundColor: PropTypes.string,
  isFlat: PropTypes.bool,
  heading: PropTypes.string,
  headingColor: PropTypes.string,
  subheading: PropTypes.string,
  subheadingColor: PropTypes.string,
  image: PropTypes.node,
};

CreateAccountForm.defaultProps = {
  backgroundColor: 'white',
  isFlat: false,
  heading: '',
  headingColor: 'black',
  subheading: '',
  subheadingColor: 'black',
  image: undefined,
};

export default CreateAccountForm;
