import React from "react";
import { Link } from 'react-router-dom';
function Home() {
	

	return (
		<div className="container">
			<nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">My Website</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          {/* <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link" href="#">Login</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Sign up</a>
            </li>
          </ul> */}
       
	   <ul>
        <li>
          <Link to="/log">log</Link>
        </li>
      </ul>

        </div>
      </div>
    </nav>
    <div class="container mt-4">
      <h1>Welcome to My Website</h1>
      <p>Sometimes life throws you a curveball and it can be hard to figure out the best course of action. 
		That's where these inspirational quotes come in. 
		Whether you're stuck in a creative rut or feeling down after a professional setback, 
		these words can help give you the boost you need to move forward.</p>
    </div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.0.2/js/bootstrap.min.js"></script>
		</div>
	);
}

export default Home;
