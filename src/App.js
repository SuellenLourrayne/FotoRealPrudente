import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import FormPage from "./FormPage/FormPage";
import About from "./About/About";
import Gallery from "./Gallery/Gallery";

const App = () => {
  return (
    <><div className="App">
      <header className="App-header">
        <nav className="App-nav">
          <ul>
            <li><a href="/">Início</a></li>
            <li><a href="/Gallery">Galeria</a></li>
            <li><a href="/FormPage">Contato</a></li>
            <li><a href="/About">Sobre Nós</a></li>
          </ul>
        </nav>
        <h1>Foto Real Prudente</h1>
        <p>Desde 1984 registrando momentos inesquecíveis!</p>
      </header>
    </div>
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/FormPage" element={<FormPage />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </Router></>
  );
};

export default App;
