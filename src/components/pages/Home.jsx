import React from 'react'
import "../pages/home.css"
import { useTranslation } from 'react-i18next'
import 'bootstrap/dist/css/bootstrap.min.css';
import beach from "../../images2/beach.mp4"
import jet from "../../images2/jet.png"
import boat from "../../images2/boat.png"
import logomin from "../../images/logocolor.png"



const Home = () => {

  const [t, i18n] = useTranslation ("global")
 
  return (
    <>

{/* VIDEO RECEIVER */}
<div id="receiver">   
<h1 id="title1">MIAMI SALTY EXPERIENCE</h1>
<video src={beach} type="video/mp4" loop={true} autoPlay="autoplay" pointerEvents="none"  muted preload="auto"  id="myVideo"/>
</div>
{/* FIN VIDEO RECEIVER */}


{/* CARRUSEL */}
<div id="carousel">
    <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button id="buttcar" type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button id="buttcar" type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button  id="buttcar" type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button  id="buttcar" type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="3000">
   
      <img id="imgsize" src="https://wallpapers-hub.art/wallpaper-images/359648.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item" data-bs-interval="3000">
      <img id="imgsize"src="https://wallpaperaccess.com/full/1975286.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item"data-bs-interval="3000">
      <img id="imgsize" src="https://images7.alphacoders.com/713/713398.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item" data-bs-interval="3000">
      <img id="imgsize" src="https://images7.alphacoders.com/713/713398.jpg" className="d-block w-100" alt="..."/>

    </div>
  </div>
  <button  className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>
{/* FIN CARRUSEL */}

<br></br>
<br></br>
<br></br>
<br></br>

{/* TICKER WRAP BOOK NOW */}

<a id="ctain" href="https://wa.me/13054241474?text=Hello!%20i'm%20interested%20in%20the%20Salty%20Experience">
<div className="ticker-wrap">
<div className="ticker">
  <div className="ticker__item">Book Now.</div>
  <div className="ticker__item">Book Now.</div>
  <div className="ticker__item">Book Now.</div>
  <div className="ticker__item">Book Now. </div>
  <div className="ticker__item">Book Now. </div>
  <div className="ticker__item">Book Now. </div>
  </div>
  </div>
  </a>

{/* FIN TICKER WRAP BOOK NOW */}   

{/* IMAGENES HOVER */}

  <div className="conta">
  <div className="container">
  <div className="inner">
    <div className="content">
      <span>Rent a Boat</span>
      <h2 id="contah2">Something</h2>
      </div>
      <div className="lower">
        <img src={boat} className="image" alt=""/>
          <ul className="features-list">
           <li>Something</li>
           <li>Something</li>
           <li>Something</li>

            </ul>
        </div>
        </div>
        <button className="cta"> <a id="ctain" href="https://wa.me/13054241474?text=Hello!%20i'm%20interested%20in%20the%20Salty%20Experience">Book Now</a></button>
        </div>

<div className="container">
<div className="inner">
  <div className="content">
    <span>Rent a JetSki</span>
    <h2 id="contah2">Something</h2>
    </div>
    <div className="lower">
      <img src={jet} className="image" alt=""/>
        <ul className="features-list">
         <li>Something</li>
         <li>Something</li>
         <li>Something</li>

          </ul>
      </div>
      </div>
      <button className="cta"> <a id="ctain" href="https://wa.me/13054241474?text=Hello!%20i'm%20interested%20in%20the%20Salty%20Experience">Book Now</a></button>
      </div>



<div className="container">
<div className="inner">
  <div className="content">
    <span>Rent addons</span>
    <h2 id="contah2">Something</h2>
    </div>
    <div className="lower">
      <img src={jet} className="image" alt=""/>
        <ul className="features-list">
         <li>Something</li>
         <li>Something</li>
         <li>Something</li>

          </ul>
      </div>
      </div>
      <button className="cta"> <a id="ctain" href="https://wa.me/13054241474?text=Hello!%20i'm%20interested%20in%20the%20Salty%20Experience">Book Now</a></button>
      </div>
      </div>
{/* FIN IMAGENES HOVER */}     

{/* FOOTER */}

      <div id="fut">
<footer className="page-footer font-small blue pt-4">
    
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-3 mt-md-0 mt-3">
                <img src={logomin} id="logomin" alt="minlog"/>
                <p>Here you can use rows and columns to organize your footer content.</p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Links</h5>
                <ul className="list-unstyled">
                    <li><a href="#!">Link 1</a></li>
                    <li><a href="#!">Link 2</a></li>
                    <li><a href="#!">Link 3</a></li>
                    <li><a href="#!">Link 4</a></li>
                </ul>
            </div>
            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Links</h5>
                <ul className="list-unstyled">
                    <li><a href="#!">Link 1</a></li>
                    <li><a href="#!">Link 2</a></li>
                    <li><a href="#!">Link 3</a></li>
                    <li><a href="#!">Link 4</a></li>
                </ul>
            </div>
            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Links</h5>
                <ul className="list-unstyled">
                    <li><a href="#!">Link 1</a></li>
                    <li><a href="#!">Link 2</a></li>
                    <li><a href="#!">Link 3</a></li>
                    <li><a href="#!">Link 4</a></li>
                </ul>
            </div>
            
        </div>
    </div>

    <div className="footer-copyright text-center py-3">© 2022 Copyright:
        <a href="https://mdbootstrap.com/"> MiamiSaltyExperience</a>
    </div>
    
</footer>
</div>

    </>
    
  
   
  )
}

export default Home