import React from 'react'
import "../pages/home.css"
import { useTranslation } from 'react-i18next'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link } from "react-router-dom";
import beach from "../../images2/beach.mp4"

import jet from "../../images2/jet.png"
import boat from "../../images2/boat.png"





const Home = () => {

  const [t, i18n] = useTranslation ("global")
 
  return (
    <>

{/* VIDEO RECEIVER */}
<div id="receiver">   
<h1 id="title1">MIAMI SALTY EXPERIENCE</h1>
<video source src={beach} type="video/mp4" loop="true" autoplay="autoplay" pointer-events="none"  muted preLoad="auto"  id="myVideo"/>
</div>


{/* CARRUSEL */}
<div id="carousel">
    <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button id="buttcar" type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button id="buttcar" type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button  id="buttcar" type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button  id="buttcar" type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="3000">
   
      <img id="imgsize" src="https://wallpapers-hub.art/wallpaper-images/359648.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item" data-bs-interval="3000">
      <img id="imgsize"src="https://wallpaperaccess.com/full/1975286.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item"data-bs-interval="3000">
      <img id="imgsize" src="https://images7.alphacoders.com/713/713398.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item" data-bs-interval="3000">
      <img id="imgsize" src="https://images7.alphacoders.com/713/713398.jpg" class="d-block w-100" alt="..."/>

    </div>
  </div>
  <button  class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>

<br></br>
<br></br>
<br></br>
<br></br>

{/* TICKER WRAP BOOK NOW */}


<div class="ticker-wrap">
<div class="ticker">
  <div class="ticker__item">Book Now.</div>
  <div class="ticker__item">Book Now.</div>
  <div class="ticker__item">Book Now.</div>
  <div class="ticker__item">Book Now. </div>
  <div class="ticker__item">Book Now. </div>
  <div class="ticker__item">Book Now. </div>
  </div>
  </div>
   

{/* IMAGENES HOVER */}

  <div class="conta">
  <div class="container">
  <div class="inner">
    <div class="content">
      <span>Rent a Boat</span>
      <h2 id="contah2">Something</h2>
      </div>
      <div class="lower">
        <img src={boat} class="image" alt=""/>
          <ul class="features-list">
           <li>Something</li>
           <li>Something</li>
           <li>Something</li>

            </ul>
        </div>
        </div>
        <button class="cta">Rent Now</button>
        </div>

<div class="container">
<div class="inner">
  <div class="content">
    <span>Rent a JetSki</span>
    <h2 id="contah2">Something</h2>
    </div>
    <div class="lower">
      <img src={jet} class="image" alt=""/>
        <ul class="features-list">
         <li>Something</li>
         <li>Something</li>
         <li>Something</li>

          </ul>
      </div>
      </div>
      <button class="cta">Rent Now</button>
      </div>



<div class="container">
<div class="inner">
  <div class="content">
    <span>Rent addons</span>
    <h2 id="contah2">Something</h2>
    </div>
    <div class="lower">
      <img src={jet} class="image" alt=""/>
        <ul class="features-list">
         <li>Something</li>
         <li>Something</li>
         <li>Something</li>

          </ul>
      </div>
      </div>
      <button class="cta">Rent Now</button>
      </div>
      </div>
      
    </>
    
  
   
  )
}

export default Home