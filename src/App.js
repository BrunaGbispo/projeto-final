import './App.css';
import Compra from './Pages/Compra/Compra';
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
    </div>

  
  );
}

export default App;
