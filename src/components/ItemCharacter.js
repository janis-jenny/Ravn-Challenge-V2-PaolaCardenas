import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ItemCharacter = ({ id, name, origin }) => (
  <Link to={`/character/${id}`}>
    <div id={id} className="card border-bottom border-light mb-0">
      <div className="card-body">
        <h4 className="card-title">{name}</h4>
        <p className="card-text">{origin}</p>
      </div>
      <div className="arrow"><i className="fas fa-chevron-right fa-2x" /></div>
    </div>
  </Link>
);

ItemCharacter.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
};

export default ItemCharacter;
