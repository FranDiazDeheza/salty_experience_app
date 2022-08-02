import React from 'react'
import logo2 from "../../images/LOGOBLANCO.png"
import jetski from "../../images/jetski.jpg"
import boat from "../../images/boat.jpg"
import "../pages/home.css"
import { useTranslation } from 'react-i18next'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link } from "react-router-dom";
import imagecarousel from "../../images/about.jpg"





const Home = () => {

  const [t, i18n] = useTranslation ("global")
 
  return (
    <>

       
        <div className="intro">
            <img src={logo2} id="logo2" alt="logo"></img>
            <h1 id="title1">{t('bienvenida')}</h1>

            <br></br>
            <br></br>

            <div class ="row">
      <div class ="column">
   <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src={boat} id="imag1hov"  alt="boathover" />
    </div>
    <div class="flip-card-back">
    <h2 id="titlebann">{t("renta")}</h2>
    <p>{t("description")}</p>
    </div>
  </div>
</div>
</div>

<div class ="column">
<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src={jetski} id="imag1hov"  alt="jethover" />
    </div>
    <div class="flip-card-back">
    <h2 id="titlebann">{t("rental2")}</h2>
    <p>{t("description2")}</p>
    </div>
  </div>
</div>
</div>
</div>      
 </div> 
<div>
  
</div>


<br></br>
<br></br>
<br></br>

<h2 id="fqh2"> Frequent Questions </h2>

<div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingOne">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
       Pregunta 1
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingFour">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
        Accordion Item #4
      </button>
    </h2>
    <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
    </div>
  </div>
</div>









<br></br>
<br></br>
<br></br>
        <div id="carousel">
    <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="8000">
   
      <img id="imgsize" src={imagecarousel} class="d-block w-100" alt="..."/>
      
        <h2 id="titlecarousel">First slide label</h2>
        <p id="contentcarousel"> Some representative placeholder content for the first slide.</p>
      
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img id="imgsize"src="https://wallpaperaccess.com/full/1975286.jpg" class="d-block w-100" alt="..."/>
        <h2 id="titlecarousel">Second slide label</h2>
        <p id="contentcarousel"> Some representative placeholder content for the second slide.</p>
     
    </div>
    <div class="carousel-item">
      <img id="imgsize" src="https://images7.alphacoders.com/713/713398.jpg" class="d-block w-100" alt="..."/>
    
        <h2 id="titlecarousel">Third slide label</h2>
        <p id="contentcarousel">Some representative placeholder content for the third slide.</p>
    
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
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
       
<div class="container" >
    <div class="mgb-40 padb-30 auto-invert line-b-4 align-center">
        <h4 class="font-cond-l fg-accent lts-md mgb-10" contenteditable="false">Not Yet Convinced?</h4>
        <h1 class="font-cond-b fg-text-d lts-md fs-300 fs-300-xs no-mg" contenteditable="false">Read Customer Reviews</h1>
    </div>
    <ul class="hash-list cols-3 cols-1-xs pad-30-all align-center text-sm">
        <li>
          <img src="https://bootdey.com/img/Content/avatar/avatar1.png" class="wpx-100 img-round mgb-20" title="" alt="" data-edit="false" data-editor="field" data-field="src[Image Path]; title[Image Title]; alt[Image Alternate Text]"/>
          <p class="fs-110 font-cond-l" contenteditable="false">" Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae. "</p>
          <h5 class="font-cond mgb-5 fg-text-d fs-130" contenteditable="false">Martha Stewart</h5>
          <small class="font-cond case-u lts-sm fs-80 fg-text-l" contenteditable="false">Business Woman - New York</small>
        </li>
        <li>
          <img src="https://bootdey.com/img/Content/avatar/avatar4.png" class="wpx-100 img-round mgb-20" title="" alt="" data-edit="false" data-editor="field" data-field="src[Image Path]; title[Image Title]; alt[Image Alternate Text]"/>
          <p class="fs-110 font-cond-l" contenteditable="false">" Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae. "</p>
          <h5 class="font-cond mgb-5 fg-text-d fs-130" contenteditable="false">Ariana Menage</h5>
          <small class="font-cond case-u lts-sm fs-80 fg-text-l" contenteditable="false">Recording Artist - Los Angeles</small>
        </li>
        <li>
          <img src="https://bootdey.com/img/Content/avatar/avatar5.png" class="wpx-100 img-round mgb-20" title="" alt="" data-edit="false" data-editor="field" data-field="src[Image Path]; title[Image Title]; alt[Image Alternate Text]"/>
          <p class="fs-110 font-cond-l" contenteditable="false">" Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae. "</p>
          <h5 class="font-cond mgb-5 fg-text-d fs-130" contenteditable="false">Sean Carter</h5>
          <small class="font-cond case-u lts-sm fs-80 fg-text-l" contenteditable="false">Fund Manager - Chicago</small>
        </li>
      </ul>
</div>
   


        

    
    
    
    
    </>
    
    
    
    
    
    
    
    
   
  )
}

export default Home