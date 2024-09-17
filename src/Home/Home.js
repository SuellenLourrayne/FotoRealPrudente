// src/Home/Home.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import About from "../About/About";

const Home = () => {
  const navigate = useNavigate(); // Use useNavigate para navegação programática

  const handleFormButtonClick = (page) => {
    navigate("/FormPage"); // Redireciona para a página pedida
  };

  const handleGalleryButtonClick = (page) => {
    navigate("/Gallery"); // Redireciona para a página pedida
  };

  return (
    <div className="App">

      <section id="contact" className="cta">
        <h2>Precisa de um orçamento?</h2>
        <p>Preencha o formulário e entraremos em contato!</p>
        <button onClick={handleFormButtonClick}>Solicitar Orçamento</button>
      </section>

      <section id="gallery" className="gallery">
        <h2>Nossos Trabalhos</h2>
        <div className="photos">
          <img src="/images/1.jpg" alt="Trabalho 1" />
          <img src="/images/2.jpg" alt="Trabalho 2" />
          <img src="/images/3.jpg" alt="Trabalho 3" />
          <img src="/images/4.jpg" alt="Trabalho 4" />
          <img src="/images/5.jpg" alt="Trabalho 5" />
          <img src="/images/6.jpg" alt="Trabalho 6" />
        </div>
        <button onClick={handleGalleryButtonClick}>Ver Mais</button>
      </section>

      <section id="about" className="about">
      <About />
      </section>
    </div>
  );
};

export default Home;
