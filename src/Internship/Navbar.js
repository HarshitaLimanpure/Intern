import React from 'react'
// import Bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
// import Bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min';
import { Link } from 'react-router-dom'
import './Navbar.css';


export default function Navbar() {
  return (
  
    <div id="nav"><nav className="navbar navbar-expand-lg navbar-light   " >
    <Link className="navbar-brand mx-3 link-underline-opacity-0" to="/">Navbar</Link>
   
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active ">
          <Link className="nav-Link mx-5 link-underline link-underline-opacity-0" to="/weather">Weather APP <span className="sr-only"></span></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-Link mx-5 link-underline link-underline-opacity-0" to="/news">NEWS APP</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-Link mx-5 link-underline link-underline-opacity-0" to="/employee">EMPLOYEE MGMT</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-Link mx-5 link-underline link-underline-opacity-0" to="/calendar">CALENDAR APP</Link>
        </li>
        
      </ul>
      
    </div>
  </nav></div>
    )
}
