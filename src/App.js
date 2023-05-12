import './App.css';
import Titulo from './Componentes/Titulo/Titulo';
import Veiculos from './Componentes/Veiculos/Veiculos';
import Footer from './Componentes/Footer/Footer';
import Header from './Componentes/Header/Header';

function App() {
  return (
    <div className="App">
       <Header/>
       <Titulo texto="Veículos"/>
       <Veiculos />
       <Footer/>

    </div>
  );
}

export default App;
