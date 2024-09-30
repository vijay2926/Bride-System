
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
 
  import '../css/style.scss'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/bootstrap/dist/js/bootstrap.min.js' ;
 
import React, { useState, useEffect } from 'react';  
import Home from "../jsx/home/Home.jsx";
 
 


function SetRoute() {
 
 
  return (
    <>
        <Router> 
        <Routes>
        <Route path="/" element={  <Home />}></Route> 
        </Routes>
      </Router>
    </>

  );
};

export default SetRoute;




