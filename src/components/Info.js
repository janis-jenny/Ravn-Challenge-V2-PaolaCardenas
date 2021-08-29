import React from 'react';
import PropTypes from 'prop-types';

const Info = ({
  eyeC, hairC, skinC, birthY,
}) => (
  <div className="">
    <h4>General Information</h4>
    <div>
      <span>Eye Color</span>
      <span>{eyeC}</span>
    </div>
    <div>
      <span>Hair Color</span>
      <span>{hairC}</span>
    </div>
    <div>
      <span>Skin Color</span>
      <span>{skinC}</span>
    </div>
    <div>
      <span>Birth Yearr</span>
      <span>{birthY}</span>
    </div>
  </div>
);

Info.propTypes = {
  eyeC: PropTypes.string.isRequired,
  hairC: PropTypes.string.isRequired,
  skinC: PropTypes.string.isRequired,
  birthY: PropTypes.string.isRequired,
};

export default Info;
