import React from 'react';
import './styles.css';
import logoImg from '../../assets/logo.svg';
import { FiArrowLeft } from 'react-icons/fi';

import { Link } from 'react-router-dom';
const NewIncident = () => {
  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero" />
          <h1>Cadastrar Novo Caso</h1>
          <p>
            Descreva o caso detalhadamente para encontrar um herói para resolver
            isso.
          </p>
          <Link className="backlink" to="/profile">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar para perfil
          </Link>
        </section>
        <form action="">
          <input type="text" placeholder="Título do caso" />
          <textarea placeholder="Descrição" />
          <input type="text" placeholder="Valor em Reais" />

          <button className="button">Cadastrar</button>
        </form>
      </div>
    </div>
  );
};

export default NewIncident;
