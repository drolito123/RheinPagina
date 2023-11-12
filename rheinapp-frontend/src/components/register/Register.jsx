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
                <a className='fa fa-instagram'></a>
                <a className='fa fa-twitter'></a>
                <a className='fa fa-facebook'></a>
              </div>
            </div>
            <div className='boxform'>
              <div>
                <label htmlFor="Email"></label>
                    <input type="email" placeholder="Ingrese su Email" className="formulario" />
                    <input type="text" placeholder="Ingrese su nombre de usuario" className="formulario" />
                    <input type="password" placeholder="Ingresar nueva contraseña" className="formulario" id="pass"/>
                    <input type="password" placeholder="Repita la contraseña" className="formulario" id="pass"/>
              </div>
            </div>
            <div className="homebtn">
              <Link to='/home'><a>Go Home</a></Link>
            </div>
            <div className="btns">
               <Link to='/home'><button type='submit'>Register</button></Link>
            </div>
          </div>
        </div>
    </body>
  );
};

export default Register;