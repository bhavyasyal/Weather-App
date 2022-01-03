import React from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import City from './Components/City'
import Weather from './Components/Weather'
const Routing = () => {
    return (
        <div>
       <Router>
            <Routes>
              <Route exact path="/city" element={<City/>} /> 
              <Route exact path="/" element={<Weather/>} />    
        </Routes>
        </Router>
        </div>
    )
}

export default Routing
