import React from 'react';
import logoimg from '../multimedia/RheinLogo.svg';

function Header() {
  return (
    <header className="header">
        <div className="logo">
            <img src={logoimg} alt="Logo de la marca"/>
        </div>
        <nav>
                <ul className="nav-links">
                    <li><a href="#footer">Info</a></li>
                    <li><a href="">Contactar</a></li>
                    <li><a href="/shop">Ropa</a></li>
                </ul>
                
            </nav>
            <a href="/login" className="btn"><button>Account</button></a>
    </header>
  );
}

export default Header;