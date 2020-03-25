import React from 'react';
import logoImg from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import { FiPower } from 'react-icons/fi';
import './styles.css';

const Profile = () => {
  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Be The Hero" />
        <span>Bem vinda, APAD</span>
        <Link className="button" to="/incidents/new">
          Cadastrar novo caso
        </Link>
        <button>
          <FiPower size={18} color="#E02041" />
        </button>
      </header>
    </div>
  );
};

export default Profile;
