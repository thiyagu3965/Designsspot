import React from 'react'
import Navbar from './components/Navbar'
import Section from './components/Section1-section3'
import Gallery from './components/Gallery'
import Address from './components/Address'
import {Switch , Route} from 'react-router-dom'
import Uploadimage from './components/Uploadimage'
function App() 
{
 

  return (
<>
  
<Switch >
 <Route exact path="/">
  <Navbar />
  <Section />
  <Gallery/>
  <Address />
  <div className="map">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d807.7312816620281!2d78.15610372915687!3d11.64907461296514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDM4JzU2LjciTiA3OMKwMDknMjMuOSJF!5e1!3m2!1sen!2sin!4v1622522632243!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" >
    </iframe>
  </div>
  <div className="footer">
    <p>© 2021 Copyright:Designspot</p>
  </div>
</Route> 

<Route exact path="/uploads">
<Navbar />
<Section />
   <Uploadimage />

  </Route>

</Switch>
       
 </>   
  );
}

export default App;
