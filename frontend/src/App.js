import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Locations from './Components/Locations'
import MedicalCenter from './Components/signupMC';
import Home from './Components/Home';
import Signup from './Components/Signup';


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { useSelector } from "react-redux";
import Signupscreen from './Components/signupscreen';

const App = () => {
  
  return (

      <div className="app">

          

              <Router>
                  <Routes>

                      <Route path="/" element={<Home/>}/>,
                      <Route path="/signup/tourist" element={<Signup/>}/>,
                      <Route path="/signup/medical_center" element={<MedicalCenter/>}/>,
                      <Route path="/create_locations" element={<Locations/>}/>,
                  </Routes>
              </Router>
          
      </div>

  );
};

export default App;