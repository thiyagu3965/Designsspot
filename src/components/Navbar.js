import React from 'react'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand bg-dark navbar-dark fixed-top">  
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#section1">About Us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#section2">Gallery</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#section3">Location And Address</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/uploads">Uploads</a>
          </li>
        </ul>
      </nav>
    )
}
