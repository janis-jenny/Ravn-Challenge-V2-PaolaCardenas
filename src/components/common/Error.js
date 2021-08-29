import React from 'react';
import PropTypes from 'prop-types';

const Error = ({ error }) => <span className="color-red">{error}</span>;

Error.defaultProps = {
  error: 'Failed to load data',
};

Error.propTypes = {
  error: PropTypes.string,
};

export default Error;
