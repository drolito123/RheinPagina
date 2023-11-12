import React from 'react';
import {Link} from 'react-router-dom';
import './Login.css';
import 'boxicons';

function Login() {
  return (
    <body method="post">
        <div className='fondo'>
          <div className='accountbox'>
            <div className='boxbutton'>
              <Link to='/register'>Register</Link>
            </div>
            <div className='socialbox'>
              <div className='socialicons'>
                <a href="#" className='fa fa-instagram'></a>
                <a href="#" className='fa fa-twitter'></a>
                <a href="#" className='fa fa-facebook'></a>
              </div>
            </div>
            <div className='boxform'>
              <div>
                <label htmlFor="Email"></label>
                <input type="email" placeholder='Ingrese su Email' className='formulario'></input>
                <input type="password" placeholder="Ingrese su contraseña" class="formulario"></input>
              </div>
            </div>
            <div className="checkbox">
              <label htmlFor="checkbox">Remeber password</label>
              <input type="checkbox"></input> 
            </div>
            <div className="homebtn">
              <Link to='/home'>Go Home</Link>
            </div>
            <div className="btns">
              <Link to='/home'><button type='submit'>Login</button></Link>
            </div>
          </div>
        </div>
    </body>
  );
};

export default Login;