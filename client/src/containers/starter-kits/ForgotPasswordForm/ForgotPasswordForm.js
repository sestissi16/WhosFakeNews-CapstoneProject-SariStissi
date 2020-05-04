import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ForgotPasswordForm = ({
  backgroundColor, isFlat, heading, subheading, helpText, image, headingColor, subheadingColor,
}) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [email, setEmail] = useState(undefined);

  function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitted(true);
    const isFormValid = e.target.checkValidity();
    if (isFormValid) {
      // Success
      alert(`Sending password reset link to ${email}`);
    } else {
      // Form has errors
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
            <label htmlFor="emailInput">Email address</label>
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
            {helpText && (
              <small id="emailHelp" className="form-text text-muted">
                {helpText}
              </small>
            )}
          </div>
          <button type="submit" className="btn btn-primary btn-block btn-sm">Send Password Reset Email</button>
          <div className="d-flex justify-content-between mt-4">
            <button type="button" className="btn btn-link btn-sm p-0">&#8592; Log In</button>
          </div>
        </form>
      </div>
    </div>
  );
};

ForgotPasswordForm.propTypes = {
  backgroundColor: PropTypes.string,
  isFlat: PropTypes.bool,
  heading: PropTypes.string,
  headingColor: PropTypes.string,
  subheading: PropTypes.string,
  subheadingColor: PropTypes.string,
  helpText: PropTypes.string,
  image: PropTypes.node,
};

ForgotPasswordForm.defaultProps = {
  backgroundColor: 'white',
  isFlat: false,
  heading: '',
  headingColor: 'black',
  subheading: '',
  subheadingColor: 'black',
  helpText: '',
  image: undefined,
};

export default ForgotPasswordForm;
