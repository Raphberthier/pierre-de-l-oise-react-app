import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css';
import Chantier_ext from "./pages/Chantier_ext";
import Chantier_int from "./pages/Chantier_int";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={ <Home /> } />
          <Route path="/chantier-ext" exact element={ <Chantier_ext /> } />
          <Route path="/chantier-int" exact element={ <Chantier_int /> } />
          <Route path="/contact" exact element={ <Contact />} />

          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
