import React from 'react';
import PropTypes from 'prop-types';

const Vehicles = ({ vehicles }) => (
  <div className="">
    <h4>Vehicles</h4>
    {vehicles.map((item) => (
      <p key={item.id}>
        {item.name}
      </p>
    ))}
  </div>
);

Vehicles.propTypes = {
  vehicles: PropTypes.arrayOf(String).isRequired,
};

export default Vehicles;
