import React from 'react';
import './index.css';

function Header() {
  return (
    <header className="header">
        <div class="logo">
            <img src="Gallery/RheinLogo.svg" alt="Logo de la marca"/>
        </div>
        <nav>
                <ul class="nav-links">
                    <li><a href="#footer">Info</a></li>
                    <li><a href="">Contactar</a></li>
                    <li><a href="">Ropa</a></li>
                </ul>
                
            </nav>
            <a href="others/LogIn.html" class="btn"><button>Account</button></a>
    </header>
  );
}

export default Header;