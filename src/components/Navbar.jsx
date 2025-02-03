import React from 'react'
import { NavLink } from 'react-router-dom';
export const Navbar = () => {

  const navLinkStyles = ({isActive}) =>{
    return{
        fontWeight: isActive ? 'bold':'normal',
    }
}
  return (
    <div>
        <nav className="navbar navbar-expand-lg" style={{color:"#fff"}}>
    <div className="container">
      <a className="navbar-brand ms-5 pt-3" href="#">
        <img src="/images/brand_logo.png" alt="logo" />
      </a>
      <button className="navbar-toggler  me-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link text-uppercase" style={navLinkStyles} to="/">
                Menu
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-uppercase" style={navLinkStyles} to="/contact-us">
                Contact
              </NavLink>
            </li>
          </ul>
        <button className="btn btn-danger btn-sm me-5 rounded-0" type="submit">Login</button>
      </div>
    </div>
  </nav>
    </div>
  )
}
