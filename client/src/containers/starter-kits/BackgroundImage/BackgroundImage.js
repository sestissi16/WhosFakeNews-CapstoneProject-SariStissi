import React from 'react';
import './BackgroundImage.css';
import PropTypes from 'prop-types';

const BackgroundImage = ({
  backgroundColor, overlayColor, backgroundImage, heading, subheading, logo, imageCenter,
}) => (
  <div
    className="col d-none d-lg-flex text-white flex-column"
    style={{
      backgroundColor: backgroundColor || '',
      backgroundImage: overlayColor ? `linear-gradient(to bottom, ${overlayColor}, ${overlayColor}), url(${backgroundImage})` : `url(${backgroundImage})`,
      backgroundSize: 'cover',
    }}
  >
    {logo && (
      <img src={logo} style={{ width: '150px' }} alt="Logo" />
    )}
    <div className="d-flex justify-content-center align-items-center h-100">
      {imageCenter ? (
        <img style={{ maxWidth: '500px' }} className="m-3" src={imageCenter} alt="center" />
      ) : (
        <div className="background-image-text">
          <h1>{heading}</h1>
          {heading && subheading && <hr />}
          <p>
            {subheading}
          </p>
        </div>
      )}
    </div>
  </div>
);

BackgroundImage.propTypes = {
  backgroundColor: PropTypes.string,
  overlayColor: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  imageCenter: PropTypes.node,
  backgroundImage: PropTypes.node,
  logo: PropTypes.node,
};

BackgroundImage.defaultProps = {
  backgroundColor: 'white',
  overlayColor: '',
  heading: '',
  subheading: '',
  logo: undefined,
  imageCenter: undefined,
  backgroundImage: undefined,
};

export default BackgroundImage;
