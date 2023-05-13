import React, { useEffect, useState } from "react";
import "./exposição.css";
import CardCarro from "../cardCarro/cardCarro";
import Nissan from "../../Imagens/nissan.webp"
import fipe from "fipe-promise";

export default function Exposição(props) {

    fipe
  .fetchDetail(fipe.vehicleType.CARS, 21, 4828, "2015-1")
  .then((detail) => {
        console.log(detail.model)
  })
  .catch((error) => {
    console.log(error)
  });
    
    return (
        <div>
            <div className="escolhaSlide">
                <h1 className="sectiontittle">Escolha seu Carro Bees favorito</h1>
                <div className="containerSlider">
                    <div className="container-imgs">
                        <CardCarro imgCarroCard={Nissan} modeloCarroCard={detail.model} preçoCarroCard="R$579000" className="cardCarSlider" />
                        <CardCarro imgCarroCard={Nissan} modeloCarroCard="carro 2" preçoCarroCard="R$579000" className="cardCarSlider" />
                        <CardCarro imgCarroCard={Nissan} modeloCarroCard="carro 3" preçoCarroCard="R$579000" className="cardCarSlider" />
                    </div>
                </div>

            </div>
            <div className="ofertas">
                <h1 className="sectiontittle">Ofertas</h1>
                <div className="containerOfertas">
                    <div className="container-imgs">
                        <CardCarro imgCarroCard={Nissan} modeloCarroCard="carro 4" preçoCarroCard="R$579000" className="cardCarSlider" />
                        <CardCarro imgCarroCard={Nissan} modeloCarroCard="carro 5" preçoCarroCard="R$579000" className="cardCarSlider" />
                        <CardCarro imgCarroCard={Nissan} modeloCarroCard="carro 6" preçoCarroCard="R$579000" className="cardCarSlider" />
                        <CardCarro imgCarroCard={Nissan} modeloCarroCard="carro 3" preçoCarroCard="R$579000" className="cardCarSlider" />
                        <CardCarro imgCarroCard={Nissan} modeloCarroCard="carro 3" preçoCarroCard="R$579000" className="cardCarSlider" />
                    </div>
                </div>
            </div>
        </div>
    )
}