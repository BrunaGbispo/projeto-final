import React from "react";

import PropTypes from 'prop-types';

  

  const CarroDetalhes = ({ image, name, details }) => {
    return (
      <div className="card mb-3">
        <img src={image} className="card-img-top" alt={name} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <ul className="list-group list-group-flush">
            {Object.keys(details).map(key => (
              <li key={key} className="list-group-item">
                <strong>{key}:</strong> {details[key]}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };
  CarroDetalhes.props = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    details: PropTypes.string.isRequired,
  };
  

  export default CarroDetalhes;

  