import './App.css';
import Veiculos from './Componentes/Veiculos/Veiculos';
import Compra from './Pages/Compra/Compra';
import { BrowserRouter as Router, Route, Routes
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
          <Routes> 
          <Route path="/" element={<Veiculos />} exact />         
            <Route path="/compra" element={<Compra />} exact />
          </Routes>
        </Router>
    </div>

  
  );
}

export default App;
