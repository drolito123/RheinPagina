import React from 'react';
import logoimg from '../multimedia/cart.jpg';
import './Products.css'
import {Link} from 'react-router-dom';

function Headers() {
  return (
    <header className='headshop' id="header">
        <Link to='/home' className='ahome'><h2 className='h1shop'>Home</h2></Link>
        <Link to='/shop' className='ahome'><h2 className='h1shop'>Products</h2></Link>
        <Link to='/cart'><a><img className="carrito" src={logoimg} alt="carrito"/></a></Link>
    </header>
  );
};

export default Headers;