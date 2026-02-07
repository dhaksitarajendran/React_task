import React from 'react'
import { useState } from 'react'

 function Login() {
    const [Username ,setUsername]=useState("");
    const [Password,setPassword]=useState("");
    const handlelogin = (e) =>{
    e.preventDefault();
    if(Username==="admin" && Password==="1234")
        alert("Login successful");
    else{
        alert ("no account found");
    }
}
  return (
    <div>
        <h1>Login</h1>
        <form onSubmit={handlelogin}>
      <input type="text" placeholder="Usename or email" value={Username} onChange={(e)=> setUsername(e.target.value)}
required />
      
      <br/>
    <input type="password" placeholder="Password" value ={Password} onChange ={(e)=>setPassword(e.target.value)} required />
<br></br>
    <button type="Submit">Login</button>
    </form>
    </div>
  )
}export default Login;
