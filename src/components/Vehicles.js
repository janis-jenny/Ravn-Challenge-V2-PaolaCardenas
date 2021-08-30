import React from 'react';
import PropTypes from 'prop-types';

const Vehicles = ({ vehicles }) => (
  <div className="card border-0 fw-bold">
    <div className="card-body px-4">
      <h4 className="card-title py-2">Vehicles</h4>
      {vehicles.map((item) => (
        <p key={item.id} className="card-text py-2 border-bottom border-light mb-2 d-flex justify-content-between text-muted">
          {item.name}
        </p>
      ))}
    </div>
  </div>
);

Vehicles.propTypes = {
  vehicles: PropTypes.arrayOf(String).isRequired,
};

export default Vehicles;
