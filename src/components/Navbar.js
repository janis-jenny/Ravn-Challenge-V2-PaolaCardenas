import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ title }) => <nav className="navbar navbar-expand-lg fw-bold d-flex justify-content-center navbar_color"><h4>{title}</h4></nav>;

Navbar.propTypes = {
  title: PropTypes.string,
};

Navbar.defaultProps = { title: 'People of Star Wars' };

export default Navbar;
