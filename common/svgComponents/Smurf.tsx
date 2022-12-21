import React from 'react';
import Image from "next/image";
import svg from "../img/5.svg";

const Smurf = ({width, height, style} : {width:number, height:number, style?:React.CSSProperties|undefined}) => {
  return (
    <Image width={width} height={height} style={style} src={svg} alt="CS"/>

  );
};

export default Smurf;
