import React from 'react';
import logoimg from '../multimedia/RheinLogo.svg';
import './shop2.css'


function Headers() {
  return (
    <header className='headshop' id="header">
        <a href="/home" className='ahome'><h2 className='h1shop'>Home</h2></a> 
        <a href="/cart"><img className="carrito" src={logoimg} alt="carrito" /></a>
    </header>
  );
};

export default Headers;