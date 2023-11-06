import "./Landingpage.css"
import {Link} from 'react-router-dom'
import React, { useEffect } from 'react';
import Typed from 'typed.js';
import Navbar from "../Navbar/Navbar";

export default function Landingpage() {
  
  useEffect(() => {
    let typed1 = new Typed("#element", {
      strings: [
        'Welcome at the<span style="color: #be19ad;"> REEL IT COMMERCE</span>',
        "Easy With <span style= color: #be19ad;>REEL IT COMMERCE</span>",
      ],
      typeSpeed: 50,
    });
  
    return () => {
      typed1.destroy();
    };
  }, []);
  return (
    <>
    <Navbar/>
    <div className="mainbox">
      <div className="blury-bg"></div>
      <div className='text'>
        <h5>Shop Online</h5>

        <h2 id="element">
          <span></span>
          </h2>

        <p>Our objective is to blend functionality, security, and user centric design to create a platform that resonates with both sellers and buyers. Online marketplaces have become an integral part of our daily lives, offering unparalleled convenience and access to an extensive array of products.</p>
        <Link to='/Signup'><button className='landing-signup-btn'>Sign Up</button></Link>
      </div>
      
      </div>
    </>
  )
}