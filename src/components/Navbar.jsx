import React from 'react'
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
 } from './NavbarElements';
 import svg from '../images/logo.svg';
 import cart from "../images/cart.svg";

const Navbar = () => {
  return (
    <>
    <Nav>
      <NavLink to="/">
        <img src={svg} width="100" height="100" alt='logo' />
      </NavLink>
      <Bars />
      <NavMenu>
        <NavLink to="/about" activesStyle> 
        About
        </NavLink>
        <NavLink to="/rent" activesStyle> 
        Rent
        </NavLink>
        <NavLink to="/Merch" activesStyle> 
        Merch
        </NavLink>
        <NavLink to="/Location" activesStyle> 
        Where to find us
        </NavLink>
        <NavLink to="/ViewCarrito" role="button" className="relative flex">
        <img src={cart} width="25" height="25" alt='cart' />
    
        </NavLink>
        </NavMenu>




    </Nav>






    </>
  )
}

export default Navbar