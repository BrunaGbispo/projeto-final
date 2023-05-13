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
      <CardCarro imgCarroCard={veiculosImg[10]} modeloCarroCard={details[2].modelo} preçoCarroCard={details[2].preco} />
      <CardCarro imgCarroCard={veiculosImg[11]} modeloCarroCard={details[3].modelo} preçoCarroCard={details[3].preco} />
      <CardCarro imgCarroCard={veiculosImg[12]} modeloCarroCard={details[4].modelo} preçoCarroCard={details[4].preco} />
      </div>
      <div className='middle'>
      <CardCarro imgCarroCard={veiculosImg[13]} modeloCarroCard={details[5].modelo} preçoCarroCard={details[5].preco} />
      <CardCarro imgCarroCard={veiculosImg[14]} modeloCarroCard={details[6].modelo} preçoCarroCard={details[6].preco} />
      <CardCarro imgCarroCard={veiculosImg[15]} modeloCarroCard={details[7].modelo} preçoCarroCard={details[7].preco} />
      <CardCarro imgCarroCard={veiculosImg[16]} modeloCarroCard={details[8].modelo} preçoCarroCard={details[8].preco} />
      <CardCarro imgCarroCard={veiculosImg[17]} modeloCarroCard={details[9].modelo} preçoCarroCard={details[9].preco} />
      </div>
      <div className='bottom'>
      <CardCarro imgCarroCard={veiculosImg[18]} modeloCarroCard={details[10].modelo} preçoCarroCard={details[10].preco} />
      <CardCarro imgCarroCard={veiculosImg[9]} modeloCarroCard={details[11].modelo} preçoCarroCard={details[11].preco} />
      <CardCarro imgCarroCard={veiculosImg[20]} modeloCarroCard={details[12].modelo} preçoCarroCard={details[12].preco} />
      <CardCarro imgCarroCard={veiculosImg[21]} modeloCarroCard={details[13].modelo} preçoCarroCard={details[13].preco} />
      <CardCarro imgCarroCard={veiculosImg[22]} modeloCarroCard={details[14].modelo} preçoCarroCard={details[14].preco} />
      </div>
    </div>
  );
}

export default Veiculos;
