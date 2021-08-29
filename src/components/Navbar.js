import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ title }) => <nav className="navbar navbar-expand-lg fw-bold d-flex justify-content-center align-center py-2 navbar_color"><h4>{title}</h4></nav>;

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Navbar;
