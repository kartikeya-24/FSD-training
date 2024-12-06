import React ,{useEffect, useState}from 'react'
import { useNavigate } from 'react-router-dom';

function Login({regDataLogin}) {
  const [email,setEmail]=React.useState('');
  const [pwd,setPwd]=React.useState('');
  const navigate= useNavigate();
  function verification(e){
    e.preventDefault();
    if(regDataLogin.email==email && regDataLogin.pwd == pwd){
      alert('Login Successfull');
      navigate('/dash');
      }
      else{
        alert('Invalid Email or Password');
    }
  }
  return (
    <div><h2>Welcome to the Login Page</h2>
     <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input onChange={(e)=> {setEmail(e.target.value)}} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
   
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input onChange={(e)=> {setPwd(e.target.value)}} type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
  </div>
  <div class="form-check">
    <input onChange={(e)=> {setName(e.target.value)}} type="checkbox" class="form-check-input" id="exampleCheck1" />
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button onClick={verification} type="submit" class="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default Login