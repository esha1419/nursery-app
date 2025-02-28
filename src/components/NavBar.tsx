import React from 'react'

export default function NavBar() {
  return (
    <div>


<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="/add">landing page</a>
        <a className="nav-link" href="/">plant categories</a>
        <a className="nav-link" href="/search">plant details page</a>
        <a className="nav-link" href="/delete">user registration/login</a>
        <a className="nav-link" href="/delete">user shopping cart</a>
        <a className="nav-link" href="/delete">user search & Filters</a>
        <a className="nav-link" href="/delete">user order Histort</a>
       
       </div>
    </div>
  </div>
</nav>



    </div>
  )
}