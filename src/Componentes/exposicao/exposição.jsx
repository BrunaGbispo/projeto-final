import React, { useEffect, useState } from "react";
import "./exposição.css";
import CardCarro from "../cardCarro/cardCarro";
import axios from "axios";
import { veiculosImg } from "../../Imagens/obj";

export default function Exposição(props) {
    const[details, setDetails] = useState(null)

    useEffect(()=>{
        axios.get(`https://api-equipe-5.onrender.com/itens/`)
        .then(response =>{
            console.log(response.data.data)
            setDetails(response.data.data);
        })
        .catch(error =>{
            console.log(error)
        })
    }, []);

    if(!details){
        return(<h2>carregando...</h2>)
    }

    return (
        <div>
            <div className="escolhaSlide">
                <h1 className="sectiontittle">Escolha seu Carro Bees favorito</h1>
                <div className="containerSlider">
                    <div className="container-imgs">
                        <CardCarro imgCarroCard={veiculosImg[0]} modeloCarroCard={details[0].modelo} preçoCarroCard={details[0].preco} className="cardCarSlider" />
                        <CardCarro imgCarroCard={veiculosImg[1]} modeloCarroCard={details[11].modelo} preçoCarroCard={details[11].preco} className="cardCarSlider"  />
                        <CardCarro imgCarroCard={veiculosImg[2]} modeloCarroCard={details[1].modelo} preçoCarroCard={details[1].preco} className="cardCarSlider" />
                    </div>
                </div>

            </div>
            <div className="ofertas">
                <h1 className="sectiontittle">Ofertas</h1>
                <div className="containerOfertas">
                    <div className="container-imgs">
                        <CardCarro imgCarroCard={veiculosImg[3]} modeloCarroCard={details[5].modelo} preçoCarroCard={details[5].preco} className="cardCarSlider" />
                        <CardCarro imgCarroCard={veiculosImg[4]} modeloCarroCard={details[7].modelo} preçoCarroCard={details[7].preco} className="cardCarSlider" />
                        <CardCarro imgCarroCard={veiculosImg[5]} modeloCarroCard={details[8].modelo} preçoCarroCard={details[8].preco} className="cardCarSlider" />
                        <CardCarro imgCarroCard={veiculosImg[6]} modeloCarroCard={details[10].modelo} preçoCarroCard={details[10].preco} className="cardCarSlider" />
                        <CardCarro imgCarroCard={veiculosImg[7]} modeloCarroCard={details[13].modelo} preçoCarroCard={details[13].preco} className="cardCarSlider" />
                    </div>
                </div>
            </div>
        </div>
    )
}