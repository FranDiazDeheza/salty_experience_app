import "./App.css";
import { BrowserRouter as Router, Route , Routes } from "react-router-dom";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import Rent from "./components/pages/Rent";
import Background from "./components/Background";
import Merch from "./components/pages/Merch";
import Contact from "./components/pages/Contact";


function App() {
  return (
    <Router>

    <Background/>
     
 
      <Routes>
        <Route exact path="/" element = {<Home/>}/>
        <Route exact path="/about" element = {<About/>}/>
        <Route exact path="/rent" element = {<Rent/>}/>
        <Route exact path="/contact" element = {<Contact/>}/>
        <Route exact path="/merch" element = {<Merch/>}/>
      </Routes>
     
      


     


    </Router>
      

  );
}

export default App