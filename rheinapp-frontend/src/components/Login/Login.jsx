import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Login.css';
import 'boxicons';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8080/login', {
        email,
        password,
      });

      console.log('Login successful', response.data);
      // Lógica para manejar el éxito del inicio de sesión, redirección, etc.
    } catch (error) {
      console.error('Error during login:', error.message);
      // Lógica para manejar el error, mostrar un mensaje, etc.
    }
  };

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
              <input
                type="email"
                placeholder='Ingrese su Email'
                className='formulario'
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Ingrese su contraseña"
                className="formulario"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="checkbox">
            <label htmlFor="checkbox">Remember password</label>
            <input type="checkbox"></input>
          </div>
          <div className="homebtn">
            <Link to='/home'>Go Home</Link>
          </div>
          <div className="btns">
          <Link to='/login'><button type='button' onClick={handleLogin}>
              Login
            </button></Link>
          </div>
        </div>
      </div>
    </body>
  );
}

export default Login;