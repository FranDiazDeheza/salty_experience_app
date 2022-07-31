import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';


export const Nav = styled.nav`
 
  background: #fff;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0 1rem calc((100vw - 1900px) / 2);
  z-index: 10;
  border: 1px solid black;
  opacity: .7;

 
 

  
  font-family: miami;

`;

export const NavDiv = styled.div`

display: flex;
align-items: center;
width: 60%;
@media screen and (max-width: 768px) {
  width: 55%;

  

}

`

export const NavLink = styled(Link)`

  color: #000;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding:  0 1rem;
  white-space: nowrap;
  @media screen and (max-width: 768px) {
    padding:  0 0rem;

   }
  
  
  height: 100%;
  cursor: pointer;
  &.active {
    color: #72CEDD;
    font-family: artDec2;


   
    
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #00;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0px;
    right: 0;
    transform: translate(-100%, 80%);
    font-size: 1.8rem;
    cursor: pointer;
   
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
 
  @media screen and (max-width: 768px) {
    display: none;

    

  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  /* Third Nav */
  /* justify-content: flex-end;
  width: 100vw; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #256ce1;
  padding: 10px 22px;
  color: #000;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  s
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #000;
    color: #010606;
  }
`;