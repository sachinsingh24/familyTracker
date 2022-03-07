/** @format */

import React, { useState } from 'react';
import './Login.css';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [Success, setSuccess] = useState(false);

  const location = useLocation();
  const Login = location.state;
  console.log(Login);

  const handleChangeUserName = (e) => {
    setUsername(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const Submit = () => {
    if (username === Login.username && password === Login.password) {
      console.log('success');
      setSuccess(true);
    } else {
      console.log('failed');
    }
  };

  return (
    <div className='wrapper'>
      <div className='logo'> </div>
      <div className='text-center mt-4 name'> family Tracker </div>
      <form className='p-3 mt-3'>
        <div className='form-field d-flex align-items-center'>
          {' '}
          <span className='far fa-user'></span>{' '}
          <input
            type='text'
            required
            value={username}
            onChange={handleChangeUserName}
            name='userName'
            id='userName'
            placeholder='Username'
          />{' '}
        </div>
        <div className='form-field d-flex align-items-center'>
          {' '}
          <span className='fas fa-key'></span>{' '}
          <input
            required
            value={password}
            onChange={handleChangePassword}
            type='password'
            name='password'
            id='pwd'
            placeholder='Password'
          />{' '}
        </div>
        <button className='btn mt-3' onClick={Submit}>
          {Success ? <Link to='/Head' className='nav-link'></Link> : 'Login'}
        </button>
      </form>
      <div className='text-center fs-6'>
        {' '}
        <p>Forget password?</p> or{' '}
        <Link to='/Signup' className='nav-link'>
          Signup
        </Link>
      </div>
    </div>
  );
};

export default Login;
