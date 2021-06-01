import React from 'react'

function App() 
{
 

  return (
<>
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
          </ul>
        </nav>

        <div id="section1" className="container-fluid bg-dark common" >
          <h1 className="">Section 1</h1>
          <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
          <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
        </div>
        <div id="section2" className="container-fluid common" >
          <h1 className="">Gallery</h1>
          <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
          <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
        </div>
        <div id="section3" className="container-fluid common" >
          <h1 className="last"><u>DesignsSpot</u></h1>
          <p className="last">Trichy Main road <br/> Salem - 636002</p>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d976.9093569254795!2d78.15609452915687!3d11.649164612964718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babf1b9c642e1eb%3A0x621811a9fcfe27a5!2sSri%20Sakthivel%20Tex%20Tiles%20Stores!5e0!3m2!1sen!2sin!4v1622520378064!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy"></iframe>

        </div>
 </>   
  );
}

export default App;
