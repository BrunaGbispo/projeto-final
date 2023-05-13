import React from 'react'
import './Style.css'


export default function Compra() {
return (
    <div>
        <div className='contairerHome'>
        
        <div className="contentCompra">
        <div className="vaziaCompra"></div>
        <div className="contenCard">
        <div className="card">
            <h1 className="headerone">Lamborghini</h1>
            <div className="precos">
            <h1 className="headerTwo">R$10000,00</h1>
            <h1 className="headerTwo vermelho">R$10000,00</h1>
        </div>
        <div className="text">
            <p className="textCard">
            A Lamborghini é uma marca italiana de carros esportivos de luxo, fundada em 1963. Seus carros são conhecidos por sua alta potência, velocidade e design agressivo, e são cobiçados por entusiastas de carros em todo o mundo.
            </p>
        </div>
            <div className="buttonCard">
                <button className='button'>Comprar Agora....</button>
            </div>
        </div>
        </div>
        </div>
        
    </div>
    </div>
)
}
