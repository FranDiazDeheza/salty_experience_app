import "./App.css";
import { BrowserRouter as Router, Route , Routes } from "react-router-dom";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import Location from "./components/pages/Location";
import Rent from "./components/pages/Rent";
import Background from "./components/Background";




import React from 'react'

function App() {
  return (
    <Router>

    <Background/>
     
 
      <Routes>
        <Route exact path="/" element = {<Home/>}/>
        <Route exact path="/about" element = {<About/>}/>
        <Route exact path="</calendar>" element = {<Rent/>}/>
        <Route exact path="/wheretofindus" element = {<Location/>}/>
      </Routes>
  
    



      

    </Router>
  );
}

export default App