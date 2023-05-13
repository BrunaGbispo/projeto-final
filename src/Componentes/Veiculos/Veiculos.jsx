import React from 'react'; 
import './Veiculos.css'
import CardCarro from '../cardCarro/cardCarro';
import Titulo from '../Titulo/Titulo';

function Veiculos(props) {
  const { veiculos } = props;

  return (
    <div>
    <Titulo texto="Veículos"/>
    <CardCarro imgCarroCard="" modeloCarroCard="" preçoCarroCard=""/>
    <CardCarro imgCarroCard="" modeloCarroCard="" preçoCarroCard=""/>
    <CardCarro imgCarroCard="" modeloCarroCard="" preçoCarroCard=""/>
    </div>
  );
}

export default Veiculos;
