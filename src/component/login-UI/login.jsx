import React, { useState } from 'react';
import '../login-UI/login.css';
import { useNavigate } from 'react-router-dom';



function Login() {

 const navigate = useNavigate();

  const [user , setUser] = useState({
    email:"",
    password:"",
})


const handleChange = (e) =>{
  
  const {name , value } = e.target;
  setUser({
    ...user,
    [name] : value
  })
  // console.log(user)
}

const loginPage =  async (e) =>{
  e.preventDefault();
 const response = await fetch('http://localhost:8000/login' ,{ method:'POST',
 body:JSON.stringify(user),
 headers:{
   'Content-type' : 'application/json'}})
 const data = response.text();
 console.log(data)
}


  return (
    <div className='login'>
      <h1>Login</h1>
      <input type='text'name='email' value={user.email} placeholder='enter your Email' onChange={handleChange}></input> 
      <input type='password' name='password' value={user.password} placeholder='enter your Password' onChange={handleChange}></input> 
      <div className="button"  onClick={loginPage}>Login</div>
      <div>or</div>
      <div className="button" onClick={() => navigate("/register")}>Register</div>
    </div>
  )
}

export default Login;

