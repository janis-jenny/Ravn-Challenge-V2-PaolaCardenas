import React from 'react';
import PropTypes from 'prop-types';

const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);

const Info = ({
  eyeC, hairC, skinC, birthYear,
}) => (
  <div className="card border-bottom-0 fw-bold">
    <div className="card-body px-4">
      <h4 className="card-title py-2">General Information</h4>
      <div className="card-text py-2 border-bottom border-light mb-2 d-flex justify-content-between">
        <span className="text-muted">Eye Color</span>
        <span>{capitalizeFirstLetter(eyeC)}</span>
      </div>
      <div className="card-text py-2 border-bottom border-light mb-2 d-flex justify-content-between">
        <span className="text-muted">Hair Color</span>
        <span>{capitalizeFirstLetter(hairC)}</span>
      </div>
      <div className="card-text py-2 border-bottom border-light mb-2 d-flex justify-content-between">
        <span className="text-muted">Skin Color</span>
        <span>{capitalizeFirstLetter(skinC)}</span>
      </div>
      <div className="card-text py-2 border-bottom border-light mb-2 d-flex justify-content-between">
        <span className="text-muted">Birth Year</span>
        <span>{birthYear}</span>
      </div>
    </div>
  </div>
);

Info.propTypes = {
  eyeC: PropTypes.string.isRequired,
  hairC: PropTypes.string.isRequired,
  skinC: PropTypes.string.isRequired,
  birthYear: PropTypes.string.isRequired,
};

export default Info;
