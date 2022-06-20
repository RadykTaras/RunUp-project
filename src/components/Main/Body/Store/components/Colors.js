import React from "react";
import style from "./Colors.module.css";

const Colors = (props) =>{
  return (
    <div className={style.colorsContainer} style={{backgroundColor:` ${props.color}`}}/>
  )
}

export default Colors;