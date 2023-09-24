import React from 'react';
import './Register.css'
import {Link} from 'react-router-dom';

function Register() {
  return (
    <body>
        <div className='fondo'>
          <div className='accountbox'>
            <div className='boxbutton'>
              <Link to='/login'><a>Login</a></Link>
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
                    <input type="email" placeholder="Ingrese su Email" className="formulario" />
                    <input type="text" placeholder="Ingrese su nombre de usuario" className="formulario" />
                    <input type="password" placeholder="Ingresar nueva contraseña" className="formulario" />
                    <input type="password" placeholder="Repita la contraseña" className="formulario" />
              </div>
            </div>
            <div className="checkbox">
              <label htmlFor="checkbox">Show Password</label>
              <input type="checkbox"></input> 
            </div>
            <div className="homebtn">
              <Link to='/home'><a>Go Home</a></Link>
            </div>
            <div className="btn">
                <button type='submit'>Register</button>
            </div>
          </div>
        </div>
    </body>
  );
};

export default Register;