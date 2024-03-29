import React from 'react';
import logoimg from '../multimedia/RheinLogo.svg';
import {Link} from 'react-router-dom';
import '../header/header.css';

function Header() {
  return (
    <header className="header">
        <div className="logo">
            <img src={logoimg} alt="Logo de la marca"/>
        </div>
            <nav>
                <ul className="nav-links">
                    <li><a>Info</a></li>
                    <li><a>Contactar</a></li>
                    <Link to= '/shop'><li>Ropa</li></Link>
                </ul>
            </nav>
            <Link to= '/login' className="btn"><button>Account</button></Link>
    </header>
  );
}

export default Header;