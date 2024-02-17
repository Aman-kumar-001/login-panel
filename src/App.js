import Homepage from "./component/homepage/homepage";
import Register from "./component/register/register";
import Login from "./component/login-UI/login";
import "../src/App.css";
import { BrowserRouter ,Routes, Route } from "react-router-dom";
import { useState } from "react";
// import Switch from "react-router-dom";

function App() {
 
  const {user , setLoginUser} = useState({})

  return (
    <div className="App">
      <BrowserRouter>
       <Routes>
       
         <Route exact path="/" element={
          user && user._id ? <Homepage/> :<Login setLoginUser={setLoginUser} />
         }></Route>
         <Route  path="/login" element={<Login />}></Route>
         <Route  path="/register" element={<Register />}></Route>
      
       
       </Routes> 
       </BrowserRouter>
    </div>
  );
}

export default App;
