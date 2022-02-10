import {React, useState, useContext, } from 'react';
import {useNavigate} from 'react-router-dom'

import Logo from '../../olx-logo.png';
import { FirebaseContext } from '../../store/Context';
import './Login.css';

function Login() {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const {firebase}= useContext(FirebaseContext)
  const Navigate = useNavigate()
  const handleLogin = (e) =>{
    e.preventDefault()
    firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
      Navigate('/')
    }).catch((error)=>{
      alert(error.message)
    })
  }

  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name={email}
            onChange={(e)=> setEmail(e.target.value)}
            defaultValue="abc"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name={password}
            onChange={(e)=> setPassword(e.target.value)}

            defaultValue="def"
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <a>Signup</a>
      </div>
    </div>
  );
}

export default Login;
