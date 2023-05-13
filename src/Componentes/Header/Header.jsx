import React from 'react';
import './Header.css';
import logoCarro from './imagens/logocarro.png';


function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <img src = {logoCarro} width="100px" alt="Logo da empresa" />
      </div>
      <nav>
        <ul>
          <li><button>Modelos</button></li>
          <li><button>Ofertas</button></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
