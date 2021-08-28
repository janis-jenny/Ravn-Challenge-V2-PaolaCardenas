import React from 'react';
import PropTypes from 'prop-types';

const ItemCharacter = ({ id, name, origin }) => (
  <>
    <div id={id}>
      <div>
        <h4>{name}</h4>
        <p>{origin}</p>
      </div>
    </div>
  </>
);

ItemCharacter.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
};

export default ItemCharacter;
