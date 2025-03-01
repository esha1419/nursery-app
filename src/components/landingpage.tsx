import React, { useState } from 'react'
import NavBar from './NavBar'
import { useNavigate } from 'react-router-dom'


export default function LandingPage() {
  return (

    
    
    <div>
  
    <meta charSet="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Landing Page</title>
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet"/>
    

<body>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">landing Page</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="#">NURSERY</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">POPULAR PLANTS</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">PLANT CATEGORIES</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">SHOPPING CART </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">SEARCH PLANT</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">ORDER HISTORY</a>
                </li>
               
            </ul>
        </div>
    </nav>
    <div className="hero-section">
        <div>
            <h1>WELCOME TO LEAFY DREAMS</h1>
            <p>DELIVERING PLANTS....DELIVERING HAPPINESS</p>
            
        </div>
    </div>
    <footer className="bg-dark text-white text-center py-4">
        <p>&copy; 2025 MySite. All Rights Reserved.</p>
        
    </footer>
    <a href="#" className="btn btn-primary btn-lg">NURSERY</a>
    <a href="#" className="btn btn-primary btn-lg">PLANT CATEGORIES</a>
    <a href="#" className="btn btn-primary btn-lg">POPULAR PLANTS</a>
    <a href="#" className="btn btn-primary btn-lg">ORDER HISTORY</a>
    <a href="#" className="btn btn-primary btn-lg">SHOPPING CART</a>
    <a href="#" className="btn btn-primary btn-lg">SEARCH PLANT</a>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.6.0/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</body>




  </div>
  )
}
   
      

