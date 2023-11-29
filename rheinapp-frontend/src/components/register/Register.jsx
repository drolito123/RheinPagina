import './Register.css'
import {Link} from 'react-router-dom';
import axios from 'axios';
import React, { useState } from 'react';

function Register() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async () => {
    try {
      const response = await axios.post('http://localhost:8080/logdata', {
        mail: email,
        username: username,
        password: password,
      });

      console.log('Registro exitoso', response.data);
      alert('Registro exitoso');
    } catch (error) {
      console.error('Error al registrar:', error.message);
      alert('Error al registrarse');
    }
  };

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
              <label htmlFor='Email'></label>
              <input
                type='email'
                placeholder='Ingrese su Email'
                className='formulario'
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type='text'
                placeholder='Ingrese su nombre de usuario'
                className='formulario'
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type='password'
                placeholder='Ingresar nueva contraseña'
                className='formulario'
                id='pass'
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                type='password'
                placeholder='Repita la contraseña'
                className='formulario'
                id='pass'
                onChange={(e) => setRepeatPassword(e.target.value)}
              />
            </div>
          </div>
          <div className='btns'>
          <Link to='/home'><button type='button' onClick={handleRegister}>
              <i className="fa fa-user-plus"></i> Register
            </button></Link>
          </div>
          <div className='error-message'>{error}</div>
        </div>
      </div>
    </body>
  );
}

export default Register;