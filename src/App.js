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
         details='O Ford Mustang é um carro esportivo lendário, com um design icônico e elegante. Com um motor potente e uma transmissão manual ou automática, o Mustang oferece uma experiência de condução emocionante. Com quatro lugares, é um carro ideal para quem busca uma combinação de desempenho e conforto. Disponível em várias versões, incluindo o icônico Mustang GT, este carro é uma das referências do segmento esportivo.'
       />
        <CarroDetalhes
         name="Jeep Renegade"
         image={Imagemcarro1}
         details='O Jeep Renegade é um SUV compacto com estilo off-road e personalidade marcante. Com opções de motorização flex ou diesel, o Renegade oferece desempenho adequado para uso urbano ou aventuras fora da estrada. O interior é espaçoso e versátil. O Renegade tem opções de tração dianteira ou integral, e é um modelo ideal para quem busca um SUV compacto com personalidade forte.'
         
       />

       
    </div>

  
  );
}

export default App;


