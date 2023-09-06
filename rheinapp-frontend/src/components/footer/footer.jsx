import React from 'react';
import './footer.css';

function Footer() {
  return (
    <footer id="footer" className="footer">
        <div className="group1">
            <div className="box">
                <figure>
                    <a href="#"><img src="../multimedia/RheinLogo.svg" alt="logo malo"/></a>
                </figure>
            </div>
            <div className="box">
                <h2>SOBRE NOSOTROS</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="box">
                <h2>SEGUINOS EN</h2>
                <div>
                    <a href="#" class="fa fa-instagram"></a>
                    <a href="#" class="fa fa-twitter"></a>
                </div>
            </div>
            <div className="group2">
                <small>&copy; 2023 <b>Rhein</b> - Todos los derechos reservados.</small>
            </div>
        </div>
    </footer>
  );
}

export default Footer;