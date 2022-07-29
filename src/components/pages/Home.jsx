import React from 'react'
import logo2 from "../../images/LOGOBLANCO.png"
import jetski from "../../images/jetski.jpg"
import boat from "../../images/boat.jpg"
import "../pages/home.css"
import { useTranslation } from 'react-i18next'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link } from "react-router-dom";


const Home = () => {

  const [t, i18n] = useTranslation ("global")
 
  return (
    <>

       
        <div className="intro">
            <img src={logo2} id="logo2" alt="logo"></img>
            <h1 id="title1">{t('bienvenida')}</h1>

            <div class="row">
              <div class="column">
            <figure class="snip0016">
  <img  src={boat} alt="sample41" width = "500px" height = "400px"/>
  <figcaption>
    <h2 id="titlebann">{t("renta")}</h2>
    <p>{t("description")}</p>
    <Link to="/about"/>
  </figcaption>     
</figure>
</div>
<div class="column">
<figure class="snip0016">
  <img src={jetski} alt="sample42" width = "500px" height = "400px"/>
  <figcaption>
    <h2 id="titlebann">{t("rental2")}</h2>
    <p>{t("description2")}</p>
    <Link to="/about"/>
  </figcaption>     
</figure>
</div>


        </div>      
        </div> 
       
        
    
   


        

    
    
    
    
    </>
    
    
    
    
    
    
    
    
   
  )
}

export default Home