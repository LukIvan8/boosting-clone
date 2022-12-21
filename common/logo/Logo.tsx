import React from 'react';
import Image from "next/image";
import logo from "./logo.svg";

function Logo() {
  return (
    <div><Image src={logo} alt="logo"/></div>
  );
}

export default Logo;