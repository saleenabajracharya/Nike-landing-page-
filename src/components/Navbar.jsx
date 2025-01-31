import React from 'react'

export const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg" style={{color:"#fff"}}>
    <div className="container-fluid">
      <a className="navbar-brand ms-5 pt-3" href="#">
        <img src="/images/brand_logo.png" alt="logo" />
      </a>
      <button className="navbar-toggler me-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link text-uppercase"  href="#">Menu</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-uppercase" href="#">Location</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-uppercase" href="#">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-uppercase" href="#">Contact</a>
          </li>
          
        </ul>
        <button className="btn btn-danger btn-sm me-5 rounded-0" type="submit">Login</button>
      </div>
    </div>
  </nav>
    </div>
  )
}
