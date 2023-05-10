import './App.css';
import CardCarro from './Componentes/cardCarro/cardCarro';
import Nissan from  "./Imagens/nissan.webp"

function App() {
  return (
    <div className="App">
      <CardCarro imgCarroCard={Nissan} modeloCarroCard="Nissan V8" preçoCarroCard="R$150.000,00"/>
      <CardCarro imgCarroCard={Nissan} modeloCarroCard="Compass" preçoCarroCard="R$180.000,00"/>
      <CardCarro imgCarroCard={Nissan} modeloCarroCard="Credito v8" preçoCarroCard="R$250.000,00"/>
    </div>
  );
}

export default App;
