import React, { useEffect, useState } from "react";
import "./exposição.css";
import CardCarro from "../cardCarro/cardCarro";
import Nissan from "../../Imagens/nissan.webp"
import axios from "axios";

export default function Exposição(props) {
    return (
        <div>
            <div className="escolhaSlide">
                <h1 className="sectiontittle">Escolha seu Carro Bees favorito</h1>
                <div className="containerSlider">
                    <div className="container-imgs">
                        <CardCarro imgCarroCard={Nissan} modeloCarroCard="carro 1" preçoCarroCard="R$579000" className="cardCarSlider" />
                        <CardCarro imgCarroCard={Nissan} modeloCarroCard="carro 2" preçoCarroCard="R$579000" className="cardCarSlider" />
                        <CardCarro imgCarroCard={Nissan} modeloCarroCard="carro 3" preçoCarroCard="R$579000" className="cardCarSlider" />
                        <CardCarro imgCarroCard={Nissan} modeloCarroCard="carro 3" preçoCarroCard="R$579000" className="cardCarSlider" />
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
                    </div>
                </div>
            </div>
        </div>
    )
}