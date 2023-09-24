import React from 'react';
import logoimg from '../multimedia/RheinLogo.svg';
import './Products.css'
import {Link} from 'react-router-dom';

function Headers() {
  return (
    <header className='headshop' id="header">
        <Link to='/home'><a className='ahome'><h2 className='h1shop'>Home</h2></a></Link>
        <Link to='/cart'><a><img className="carrito" src={logoimg} alt="carrito" /></a></Link>
    </header>
  );
};

export default Headers;