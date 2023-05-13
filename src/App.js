import './App.css';
import Compra from './Pages/Compra/Compra';
import CarroDetalhes from './Componentes/CarrosDetalhes/CarrosDetalhes';
import Imagemcarro from './Imagens/ford-mustang_2015_01.jpg'
import Imagemcarro1 from  './Imagens/Jeep Renegade 2016-min.jpg'

import { BrowserRouter as Router, Route, Routes
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
          <Routes> 
            <Route path="/" element={<Compra />} exact />
          </Routes>
        </Router>
        <CarroDetalhes
         image={Imagemcarro}
         name="Ford Mustang"
         details={CarroDetalhes}
       />
       <CarroDetalhes
         image={Imagemcarro1}
         name="Ford Mustang"
         details={CarroDetalhes}
       />
       
    </div>

  
  );
}

export default App;
