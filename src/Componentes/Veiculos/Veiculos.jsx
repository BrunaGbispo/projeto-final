import React, {useEffect, useState} from 'react';
import './Veiculos.css'
import CardCarro from '../cardCarro/cardCarro';
import Titulo from '../Titulo/Titulo';
import { veiculosImg } from '../../Imagens/obj';
import axios from 'axios';

function Veiculos(props) {
  const [details, setDetails] = useState(null)

  useEffect(() => {
    axios.get(`https://api-equipe-5.onrender.com/itens/`)
      .then(response => {
        setDetails(response.data.data);
      })
      .catch(error => {
        console.log(error)
      })
  }, []);

  if (!details) {
    return (<h2>carregando...</h2>)
  }


  return (
    <div className='container'>
      <Titulo texto="Veículos" />
      <div className='top'>
      <CardCarro imgCarroCard={veiculosImg[8]} modeloCarroCard={details[0].modelo} preçoCarroCard={details[0].preco} />
      <CardCarro imgCarroCard={veiculosImg[9]} modeloCarroCard={details[1].modelo} preçoCarroCard={details[1].preco} />
      <CardCarro imgCarroCard={veiculosImg[10]} modeloCarroCard={details[1].modelo} preçoCarroCard={details[1].preco} />
      </div>
    </div>
  );
}

export default Veiculos;
