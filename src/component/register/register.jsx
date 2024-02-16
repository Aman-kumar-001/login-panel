import React, { useState } from 'react'
import '../register/register.css';



function Register() {
    

  const [user , setUser] = useState({
      name:"",
      email:"",
      password:"",
      // reEnterPassword:""
  })


  const handleChange = (e) =>{
    
    const {name , value } = e.target;
    setUser({
      ...user,
      [name] : value
    })
    e.preventDefault()
    // console.log(user)
  }

  const register = async (e) =>{
    e.preventDefault()
    const {name , email , password  } = user;
    if(name && email && password ){
    const response = await fetch('http://localhost:8000/register' , { method:'POST',
    body:JSON.stringify(user),
    headers:{
      'Content-type' : 'application/json'}})
      const data = await response.json();
      console.log(data)
    }else{
      alert("invalid users");
    }
    
    
  }
  return (
    <div className='register'>
      <h1>Register</h1>
      <input type='text' name="name" value={user.name} placeholder='your Name' onChange={handleChange}></input>
      <input type='text' name="email" value={user.email} placeholder='your Email' onChange={handleChange}></input>
      <input type='password' name="password" value={user.password} placeholder='your Password' onChange={handleChange}></input>
      {/* <input type='password' name="reEnterpassword" value={user.reEnterPassword} placeholder='Re-enter your password' onChange={handleChange}></input> */}
      <div className="button" onClick={register}>Register</div>
      <div>or</div>
      <div className="button">Login</div>
    </div>
  )
}

export default Register;
