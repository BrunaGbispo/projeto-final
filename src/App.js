import './App.css';
import Exposição from './Componentes/exposicao/exposição';
import Compra from './Pages/Compra/Compra';
import { BrowserRouter as Router, Route, Routes
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
          <Routes> 
            <Route path='/' element={<Exposição/>}/>
            <Route path="/compra" element={<Compra />} exact />
          </Routes>
        </Router>
    </div>

  
  );
}

export default App;
