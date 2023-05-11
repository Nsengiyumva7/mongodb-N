import React from "react";
import { Link } from 'react-router-dom';

import logo from '../assets/logo.png';


function Home() {
	
  

	return (
		<div className="container">
			<nav class="navbar navbar-expand-lg navbar-light bg-light" >
      <div class="container-fluid">
        <a class="navbar-brand" href="#"> Applica <img src={logo} alt="Logo" /></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
        <div>
        <div className="leftSide">
          <Link to="/Login"><button>Login</button></Link>
          <Link to="/Register"><button>Register</button></Link>
        </div>
        </div>

        </div>
        <div className="ml-auto">
        <Link to="/Adminlogin"><button>Private Access</button></Link>
        </div>
      </div>
    </nav>
    <>
    <div class="container mt-4" >
      <div>

      <h1>Welcome</h1>
      </div>
      <p>Sometimes life throws you a curveball and it can be hard to figure out the best course of action. 
		That's where these inspirational quotes come in. 
		Whether you're stuck in a creative rut or feeling down after a professional setback, 
		these words can help give you the boost you need to move forward.</p>

    <h2>About us</h2>
    <p> Whether you need help with branding, marketing, or technology solutions, we have the expertise and 
      creativity to help you stand out in today's competitive marketplace. Our mission is to empower your business 
      with the tools and resources you need to succeed.

     We believe in building strong relationships with our clients, based on trust, collaboration, and mutual respect.   
     We are committed to providing exceptional customer service, and we work closely with you to understand your 
     unique goals and challenges.</p>
    </div>
    </>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.0.2/js/bootstrap.min.js"></script>
    
		</div>
    
	);
}

export default Home;
