import './App.css';
import Exposição from './Componentes/exposicao/exposição';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Veiculos from './pages/veiculos/veiculos';

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path='/' element={<Exposição/>}/>
        <Route path='/veiculos' element={<Veiculos/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
