import React from 'react';
import logoimg from '../multimedia/RheinLogo.svg';

function Footer() {
  return (
    <footer id="footer" className="footer">
        <div className="group1">
            <div className="box">
                <figure>
                    <a href="#"><img src={logoimg} alt="logo malo"/></a>
                </figure>
            </div>
            <div className="box">
                <h2>SOBRE NOSOTROS</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="box" className='socialbox'>
                <h2>SEGUINOS EN</h2>
                <div className='socialicons'>
                    <a className="fa fa-instagram"></a>
                    <a className="fa fa-twitter"></a>
                    <a className='fa fa-facebook'></a>
                </div>
            </div>
        </div>
        <div className="group2">
                <small>&copy; 2023 <b>Rhein</b> - Todos los derechos reservados.</small>
        </div>
    </footer>
  );
}

export default Footer;