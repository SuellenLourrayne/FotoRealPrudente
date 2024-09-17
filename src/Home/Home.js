// src/Home/Home.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate(); // Use useNavigate para navegação programática

  const handleButtonClick = (page) => {
    navigate("/"+page); // Redireciona para a página pedida
  };
  return (
    <div className="App">

      <section id="contact" className="cta">
        <h2>Precisa de um orçamento?</h2>
        <p>Preencha o formulário e entraremos em contato!</p>
        <button onClick={handleButtonClick("FormPage")}>Solicitar Orçamento</button>
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
        <button onClick={handleButtonClick("Gallery")}>Ver Mais</button>
      </section>

      <section id="about" className="about">
        <h2>Sobre Nós</h2>
        <p>Desde 1994, a **Foto Real Prudente** vem eternizando momentos inesquecíveis através das lentes apaixonadas de **Paulo e Margarida Albino**, um casal que faz da fotografia uma verdadeira arte. </p>
        <p>Com mais de 30 anos de experiência, eles capturam emoções e histórias com dedicação e amor em cada clique. </p>
        <p>Seja em casamentos, aniversários, eventos corporativos ou ensaios especiais, a Foto Real Prudente se compromete a transformar momentos únicos em memórias que durarão para sempre. </p>
        <p>Aqui, cada detalhe é tratado com o carinho de quem entende a importância de registrar os momentos mais preciosos da vida.</p>
        </section>
    </div>
  );
};

export default Home;
