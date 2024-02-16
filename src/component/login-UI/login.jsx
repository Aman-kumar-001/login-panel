import React, { useState } from 'react';
import '../login-UI/login.css';

function Login() {


  const [user , setUser] = useState({
    email:"",
    password:"",
})


const handleChange = (e) =>{
  
  // const {name , value } = e.target;
  setUser({
    ...user,
    [e.target.name] : e.target.value
  })
  // console.log(user)
}


  return (
    <div className='login'>
      <h1>Login</h1>
      <input type='text'name='email' value={user.email} placeholder='enter your Email' onChange={handleChange}></input> 
      <input type='password' name='password' value={user.password} placeholder='enter your Password' onChange={handleChange}></input> 
      <div className="button">Login</div>
      <div>or</div>
      <div className="button">Register</div>
    </div>
  )
}

export default Login;

