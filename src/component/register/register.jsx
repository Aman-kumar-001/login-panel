import React from 'react'
import '../register/register.css';

function register() {
  return (
    <div className='register'>
      <h1>Regiter</h1>
      <input type='text' placeholder='your Name'></input>
      <input type='text' placeholder='your Email'></input>
      <input type='password' placeholder='your Password'></input>
      <input type='password' placeholder='Re-enter your password'></input>
      <div className="button">Register</div>
      <div>or</div>
      <div className="button">Login</div>
    </div>
  )
}

export default register;
