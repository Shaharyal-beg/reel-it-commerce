// import React from 'react'
import "./Landingpage.css"
import {Link} from 'react-router-dom'
import React, { useEffect } from 'react';
import Typed from 'typed.js';
import Navbar from "../Navbar/Navbar";

export default function Landingpage() {
  console.log(localStorage.getItem("authenticated"));
  useEffect(() => {
    let typed = new Typed("#element", {
      strings: [
        "Welcome at the REEL IT COMMERCE",
        " EASY WITH REEL IT COMMERCE ",
      ],
      typeSpeed: 50,
    });

    return () => {
      typed.destroy();
    };
  }, []);







  return (
    <>
    <Navbar />
    <div className="mainbox">
      <div className="blury-bg"></div>
      <div className='text'>
        <h5>Shop Online</h5>

        <h2> 
        
          <span id="element"></span>
           </h2>

        <p>Our objective is to blend functionality, security, and user centric design to create a platform that resonates with both sellers and buyers. Online marketplaces have become an integral part of our daily lives, offering unparalleled convenience and access to an extensive array of products.</p>
        <Link to='/Signup'><button className='landing-signup-btn'>Sign Up</button></Link>
      </div>
      
      </div>
    </>
  )
}
