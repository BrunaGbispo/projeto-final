import React from 'react'; 
import './Veiculos.css'
import CardCarro from '../cardCarro/cardCarro';

function Veiculos(props) {
  const { veiculos } = props;

  return (
    <div>
    <CardCarro imgCarroCard="" modeloCarroCard="" preçoCarroCard=""/>
    </div>
  );
}

export default Veiculos;
