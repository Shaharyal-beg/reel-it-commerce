import React, {useState} from 'react'
import "./Signup.css"
import {Link , useNavigate} from 'react-router-dom'
import axios from 'axios';
import Navbar from '../Navbar/Navbar';

export default function Signup() {


  const [data, setData] = useState({
    firstName:"",
    lastName:"",
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
    axios.post("http://192.168.2.103:8002/api/merchant/register", data)
      .then(response => {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem("authenticated", true);
        navigate("/SidePanel/Dashboard");
      })
      .catch(error => {
        setError(error.response.data.data.message);
      });
  };
  

  return (
    <>  
    <Navbar />
    <div className='signup-mainBox'>
    <div className='signup-side-panel'>
        <img className='signup-blobs-image' src='./blobs-bg.png' alt='side prop'></img>
       <img className='signup-side-image' src='./picture.png' alt='side-svg'></img>
       <h3 className='signup-hey-there'>Hey there,</h3>
       <h3 className='account'>Create an account</h3>
      </div>
      <div className='signup-mainPage'>
      <div className='sign-up-heading'>Sign Up</div>
      <div className='error-message' color='red'>{error}</div>
      <input className='signup-first-name-field'onChange={handleInputChange} value={data.firstName} name="firstName" type='text' id='first-name-input-field'></input>
      <div className='signup-first-name'><span>First Name</span></div>
      <input className='signup-last-name-field' onChange={handleInputChange} value={data.lastName} name="lastName" type='text' id='last-name-input-field'></input>
      <div className='signup-last-name'><span>Last Name</span></div>
      <input className='signup-email-fields' onChange={handleInputChange} value={data.email} name='email' type='email' id='email-input-field'></input>
      <div className='signup-email'><span>Email</span></div>
      <input className='signup-password-fields' onChange={handleInputChange} value={data.password} name='password' type='password' id='password-input-field'></input>
      <div className='signup-password'><span>Password</span></div>
      <button  type='submit'  className='sign-up-button' onClick={handleSubmit}>Sign Up</button>
      <p className="signup-dont-have-an-account">Don’t have an account yet?
      <Link style={{textDecoration:'none'}} to='/Login'><span className="pink-sign-in"> Sign In</span></Link>
      </p>
      </div>
    </div>
    </>
  )
}
