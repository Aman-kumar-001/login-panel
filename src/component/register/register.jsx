import React, { useState } from 'react'
import '../register/register.css';



function Register() {
    

  const [user , setUser] = useState({
      name:"",
      email:"",
      password:"",
      reEnterPassword:""
  })


  const handleChange = (e) =>{
    
    // const {name , value } = e.target;
    setUser({
      ...user,
      [e.target.name] : e.target.value
    })
    console.log(user)
  }

  const register = () =>{
    const {name , email , password , reEnterPassword } = user;
    if(name && email && password && password===reEnterPassword){
      alert('posted');
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
      <input type='password' name="reEnterpassword" value={user.reEnterPassword} placeholder='Re-enter your password' onChange={handleChange}></input>
      <div className="button" onClick={register}>Register</div>
      <div>or</div>
      <div className="button">Login</div>
    </div>
  )
}

export default Register;
