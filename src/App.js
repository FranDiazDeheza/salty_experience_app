import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route , Routes } from "react-router-dom";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import Location from "./components/pages/Location";




import React from 'react'

function App() {
  return (
    <Router>
    <Navbar/>
     
 
      <Routes>
        <Route exact path="/" element = {<Home/>}/>
        <Route exact path="/about" element = {<About/>}/>
        <Route exact path="/wheretofindus" element = {<Location/>}/>
      </Routes>
  
    





    </Router>
  );
}

export default App