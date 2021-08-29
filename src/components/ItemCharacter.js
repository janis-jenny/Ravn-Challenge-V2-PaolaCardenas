import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ItemCharacter = ({ id, name, origin }) => (
  <div id={id} className="card border-bottom border-light mb-0 px-2 card-style">
    <div className="card-body">
      <h4 className="card-title">{name}</h4>
      <p className="card-text text-muted">{origin}</p>
    </div>
    <Link to={`/character/${id}`}>
      <div className="arrow text-decoration-none"><i className="fas fa-chevron-right fa-2x" /></div>
    </Link>
  </div>
);

ItemCharacter.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
};

export default ItemCharacter;
