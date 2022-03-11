import React from 'react';
import Logo from '../../assets/Logo.png';
import '../../global.css';
import { Button } from '../../components/Button/Button';

function Menu(props) {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="Logo" />
      </a>

      <Button as="a" href="/" className="ButtonLink">
        Novo Vídeo
      </Button>
    </nav>
  );
}

export default Menu;
