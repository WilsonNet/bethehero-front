import React from 'react';
import './styles.css';
import logoImg from '../../assets/logo.svg';
import { FiArrowLeft } from 'react-icons/fi';

import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero" />
          <h1>Cadastro</h1>
          <p>
            Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem
            os casos da sua ONG.
          </p>
          <Link className="backlink" to="/">
            <FiArrowLeft size={16} color="#E02041" />
            Não tenho cadastro
          </Link>
        </section>
        <form action="">
          <input type="text" placeholder="Nome da ONG" />
          <input type="email" placeholder="E-mail" />
          <input type="text" placeholder="whatsapp" />

          <div className="input-group">
            <input type="text" placeholder="cidade" />
            <input type="text" placeholder="uf" style={{ width: 80 }} />
          </div>
          <button className="button">Cadastrar</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
