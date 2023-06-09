import React from "react";
import './CarrosDetalhes.css';

import PropTypes from 'prop-types';
  
  const CarroDetalhes = (props) => {
    return (
      <><div className="card mb-3">
        <h3 className="card-title">{props.name}</h3>
        <div className="conteudo">
        <img src={props.image} className="card-img-top" alt={props.name} />
        <div className="details">{props.details}
        </div>
        </div>
      </div ></>
    );
  };
  CarroDetalhes.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    details: PropTypes.string.isRequired,
  };
  

  export default CarroDetalhes;

  