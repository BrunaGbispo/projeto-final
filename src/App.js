import './App.css';
import Exposição from './Componentes/exposicao/exposição';
import Veiculos from './Componentes/Veiculos/Veiculos';
import Compra from './Pages/Compra/Compra';
import CarroDetalhes from './Componentes/CarrosDetalhes/CarrosDetalhes';
import Imagemcarro from './Imagens/ford-mustang_2015_01.jpg'
import Imagemcarro1 from  './Imagens/Jeep Renegade 2016-min.jpg'
import Header from './Componentes/Header/Header'
import Footer from './Componentes/Footer/Footer';

import { BrowserRouter as Router, Route, Routes
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
          <Routes> 
            <Route path='/' element={<Exposição/>}/>
          <Route path="/veiculos" element={<Veiculos />} exact />         
            <Route path="/compra" element={<Compra />} exact />
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

        <Footer />
    </div>

  
  );
}

export default App;


