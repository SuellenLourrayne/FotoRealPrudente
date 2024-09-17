// src/Gallery/Gallery.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Gallery.css";

const Gallery = () => {
  const navigate = useNavigate(); // Use useNavigate para navegação programática

  const handleFormButtonClick = (page) => {
    navigate("/FormPage"); // Redireciona para a página pedida
  };

  return (
    <div className="container">
        <h2>Nossos Trabalhos</h2>
        <div className="photos">
          <img src="/images/1.jpg" alt="Trabalho 1" />
          <img src="/images/2.jpg" alt="Trabalho 2" />
          <img src="/images/3.jpg" alt="Trabalho 3" />
          <img src="/images/4.jpg" alt="Trabalho 4" />
          <img src="/images/5.jpg" alt="Trabalho 5" />
          <img src="/images/6.jpg" alt="Trabalho 6" />
        </div>
        <div className="photos">
          <img src="/images/7.jpg" alt="Trabalho 1" />
          <img src="/images/8.jpg" alt="Trabalho 2" />
          <img src="/images/9.jpg" alt="Trabalho 3" />
          <img src="/images/10.jpg" alt="Trabalho 4" />
          <img src="/images/11.jpg" alt="Trabalho 5" />
          <img src="/images/12.jpg" alt="Trabalho 6" />
        </div>
        <div className="photos">
          <img src="/images/13.jpg" alt="Trabalho 1" />
          <img src="/images/14.jpg" alt="Trabalho 2" />
          <img src="/images/15.jpg" alt="Trabalho 3" />
          <img src="/images/16.jpg" alt="Trabalho 4" />
          <img src="/images/17.jpg" alt="Trabalho 5" />
          <img src="/images/18.jpg" alt="Trabalho 6" />
        </div>

        <section id="contact" className="cta">
        <h2>Precisa de um orçamento?</h2>
        <p>Preencha o formulário e entraremos em contato!</p>
        <button onClick={handleFormButtonClick}>Solicitar Orçamento</button>
        </section>

    </div>
  );
};

export default Gallery;
