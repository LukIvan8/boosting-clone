import React from 'react';
import svg from "../img/2.svg";
import Image from "next/image";

const Faceit = ({width, height, style} : {width:number, height:number, style?:React.CSSProperties|undefined}) => {
  return (
    <Image width={width} height={height} src={svg} alt="CS" style={style}/>
  );
};

export default Faceit;
