import React from 'react';
import Logo from '../../assets/Logo.png';
import { Link } from 'react-router-dom';
import '../../global.css';
import { Button } from '../../components/Button/Button';

function Menu(props) {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="Logo" />
      </Link>

      <Button as={Link} to="/cadastro/video" className="ButtonLink">
        Novo Vídeo
      </Button>
    </nav>
  );
}

export default Menu;
