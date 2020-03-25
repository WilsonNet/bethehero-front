import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import './styles.css';

import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';
const index = () => {
  return (
    <div className="logon-container">
      <section className="form">
        <img src="logoImg" alt="Be The Hero" />
        <form>
          <h1>Faça seu logon</h1>
          <input type="text" placeholder="id" />
          <button type="submit"></button>
          <a href="/register">
            <FiLogIn size={16} color="#E02041" />
            Não tenho cadastro
          </a>
        </form>
      </section>
      <img src={heroesImg} alt="Heroes" />
    </div>
  );
};

export default index;
