import React from 'react';
import './index.css';

function Header(props) {
  return (
    <header className="Header">
      <h1 className="Header--title">Mindaugas Jačionis</h1>
      <hr className="Header--separator" />
      <h2 className="Header--subtitle">Pro Barber</h2>
    </header>
  );
}

export default Header;
