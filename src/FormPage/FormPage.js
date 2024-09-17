// src/FormPage.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./FormPage.css";

const FormPage = () => {
  const [name, setName] = useState("");
  const [service, setService] = useState("");
  const [details, setDetails] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepara os dados do formulário para enviar ao WhatsApp
    const message = encodeURIComponent(`Olá! Meu nome é ${name}.\nGostaria de orçamento para o serviço: ${service}. \nMais detalhes: ${details}.`);

    //add o numero de telefone a ser enviado a mensagem
    const whatsAppUrl = `https://wa.me/353831938465?text=${message}`;
    window.open(whatsAppUrl, "_blank");

    // Redireciona para a página principal após enviar
    navigate("/");
  };

  return (
    <div className="form-container">
      <h2>Solicitar Orçamento</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          Tipo de Serviço:
          <input
            type="text"
            value={service}
            onChange={(e) => setService(e.target.value)}
            required
          />
        </label>
        <label>
          Detalhes:
          <textarea
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            required
          />
        </label>
        <button type="submit">Enviar para WhatsApp</button>
      </form>
    </div>
  );
};

export default FormPage;
