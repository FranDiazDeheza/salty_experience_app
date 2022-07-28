import styled from "styled-components";
import { Link as LinkR } from 'react-router-dom';
import { FaTimes } from "react-icons/fa";

export const SidebarContainer = styled.aside`
position: fixed;
z-index: 999;
width: 100%;
height: 100%;
background: #0d0d0d;
display: grid;
align-items: center;
top: 0;
left: 0;
transition: 0.3s ease-in-out;

opacity: ${({isOpen}) => (isOpen ? '100%' : '0' )};
top: ${({isOpen}) => (isOpen ? '0' : '-100%' )};




`;

export const SideDiv = styled.div`
display: grid;
align-items: center;
justify-content: center;

`; 



export const CloseIcon = styled(FaTimes)`
color: #fff

`;

export const Icon = styled.div`
position: absolute;
top: 1.2rem;
right: 1.5rem;
background: transparent;
font-size: 2rem;
cursor:pointer;
outline: none;

`; 

export const SidebarWrapper = styled.div`
color: #fff;

`;

export const SidebarMenu = styled.ul`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(6, 88px);
text-align: center;

@media screen and (max-width: 768px) {
    grid-template-rows: repeat(8, 55px);
    text-align: center;
}

`;

export const SidebarLink = styled(LinkR)`
display: flex;
align-items: center;
justify-content: center;
font-size: 1.5rem;
text_decoration: none;
list-style: none;
transition: 0.2s ease-in-out;
text-decoration: none;
color: #fff;
cursor: pointer;
font-family: miami;

&:hover {
    color: #EEA2C8;
    transition; 0.2s ease-in-out;
}

`;

