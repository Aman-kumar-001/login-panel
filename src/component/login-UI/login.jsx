import React from 'react';
import '../login-UI/login.css';

function login() {
  return (
    <div className='login'>
      <h1>Login</h1>
      <input type='text' placeholder='enter your Email'></input> 
      <input type='password' placeholder='enter your Password'></input> 
      <div className="button">Login</div>
      <div>or</div>
      <div className="button">Register</div>
    </div>
  )
}

export default login;

