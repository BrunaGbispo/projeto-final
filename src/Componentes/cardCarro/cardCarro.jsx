import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./cardCarro.css";

export default function CardCarro (props){

    return(
        <Link to="/compra"><div className="cardContainer">
            <img className="imgCard" src={props.imgCarroCard} alt="nissan"/>
            <span className="textoCard">
                <h1 className="tituloModelo">{props.modeloCarroCard}</h1>
                <h2 className="precoCarro">Preço {props.preçoCarroCard}</h2>
            </span>
        </div>
        </Link>
    )
};
