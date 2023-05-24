import React from 'react';
import './styles/NavBar.css';

const NavBar = () => {
  const brand ='https://i.ibb.co/Gvspb0B/logo.png';
  return (
    <header className="header">
      <div className="logo-container">
        <img src={brand} alt="logo" />
      </div>
      <nav>
        <ul className="nav-container">
          <li>
            <a href="/">Inicio</a>
          </li>
          <li>
            <a href="/">Productos</a>
          </li>
          <li>
            <a href="/">Contacto</a>
          </li>
        </ul>
      </nav>
      <select className="select-language">
        <option value="" selected disabled>Language</option>
        <option value="">Español</option>
        <option value="">日本語</option>
      </select>
    </header>
  );
};
export default NavBar;
