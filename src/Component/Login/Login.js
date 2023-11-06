import React, { Component , useState } from 'react';
import "./Login.css"
import {Link , useNavigate} from 'react-router-dom'
import axios from 'axios';
import Navbar from '../Navbar/Navbar';
export default function Login() {

  const [data, setData] = useState({
    email: "",
    password: ""
  });
  const navigate = useNavigate();
  const [submit, setSumbit] = useState(false);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setData((prevProps) => ({
      ...prevProps,
      [name]: value
    }));
  };

  const [error , setError] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("http://192.168.2.103:8002/api/merchant/login", data)
      .then(response => {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem("authenticated", true);
        navigate("/SidePanel/Dashboard");
      })
      .catch(error => {
        setError(error.response.data.data.message);
      });
  };
  

    return(
      <>
    <Navbar />
      <div className='login-mainBox'>
      <div className='login-side-panel'>
          <img className='login-blobs-image' src='./blobs-bg.png' alt='side prop'></img>
        <img className='login-side-image' src='./picture.png' alt='side-svg'></img>
        <h3 className='login-hey-there'>Hey there,</h3>
        <h3 className='welcome'>Welcome Back</h3>
        </div>
        <div className='login-mainPage'>
        <div className='login-sign-in-heading'>Sign In</div>
        <input className='login-email-fields' type='email' id='email-input-field' onChange={handleInputChange} value={data.email} name='email'></input>
        <div className='login-email'><span>Email</span></div>
        <input className='login-password-fields' type='password' id='password-input-field' onChange={handleInputChange} value={data.password} name='password'></input>
        <div className='login-password'><span>Password</span></div>
        <button className='sign-in-button' onClick={handleSubmit}>Sign In</button>
        <p className="login-dont-have-an-account">Don’t have an account yet?
        <Link style={{textDecoration:'none'}} to='/Signup'><span className="pink-sign-up" > Sign Up</span></Link>
        </p>
        </div>
      </div>
      </>
    )
  }
