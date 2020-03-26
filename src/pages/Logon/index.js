import React, { useState } from 'react';
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';

import { Link } from 'react-router-dom';
import './styles.css';

import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';
const index = () => {
  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="Be The Hero" />
        <form>
          <h1>Faça seu logon</h1>
          <input type="text" placeholder="id" />
          <button className="button" type="submit">
            Entrar
          </button>
          <Link className="backlink" to="/register">
            <FiLogIn size={16} color="#E02041" />
            Não tenho cadastro
          </Link>
        </form>
      </section>
      <img src={heroesImg} alt="Heroes" />
    </div>
  );
};

export default index;
