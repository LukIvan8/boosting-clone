import React from 'react';
import styled from "styled-components";

const Hamburger = styled.div`
  display: none;
  @media(max-width: 1250px){
    height: 23px;
    width: 35px;
    top: 17px;
    left: 20px;
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

`

const HamburgerLines = styled.span`
  display: block;
  height: 4px;
  width: 100%;
  border-radius: 10px;
  background: #333;
`

const MenuIcon = () => {
  return (
    <Hamburger>
      <HamburgerLines></HamburgerLines>
      <HamburgerLines></HamburgerLines>
      <HamburgerLines></HamburgerLines>
    </Hamburger>
  );
};

export default MenuIcon;
