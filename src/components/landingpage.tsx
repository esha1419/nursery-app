import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom'
import NavBar from './NavBar';


export default function LandingPage() {

    const nurOpen = useNavigate();
      const goToNursery = (e:FormDataEvent)=>{
        e.preventDefault();
        console.log("from login...");
        nurOpen('/nursery');
      }

      const gotNursery123 = (e:FormDataEvent)=>{
        e.preventDefault();
        console.log("safsadfh")
        nurOpen('/nursery');
      }
      const gotoNursery = ()=>{
        console.log("hello");
       nurOpen("/nursery");
    }
  return (

    
    

    <div  >

    <meta charSet="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Landing Page</title>
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet"/>
    <div className='hero-section '>
    <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
            

<body>
<NavBar />
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">HOME PAGE</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" 
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
       
s
        
    </nav>
    
    <div className="hero-section">
        <div>
            <h1>        WELCOME TO LEAFY DREAMS         </h1>
            <p>CUSTOMISE YOUR GARDEN....</p>
            
        </div>
    </div>
    <footer className="bg-dark text-white text-center py-4">
        <p>LEAFY DREAMS MANAGEMENT</p>
        
    </footer>


     
    
    
    <div className="row row-cols-1 row-cols-md-2 g-4">
      <div className="col">
        <div className="card">
          <img onClick={gotoNursery} src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">NURSERY</h5>
            <p className="card-text">
            The place where you find all the plants with which you can decorate your garden.
            </p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">POPULAR PLANTS</h5>
            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <img src="..." className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">PLANT CANTEGORIES</h5>
            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <img src="..." className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">SHOPPING CART</h5>
            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <img src="..." className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">SEARCH PLANT</h5>
            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <img src="..." className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">ORDER HISTORY</h5>
            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
          </div>
        </div>
      </div>
    </div>
    
    
    
   
</body>



</div>
 </div>
</div>
  )
}