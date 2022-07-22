import React from "react";
import {Route, Routes } from 'react-router-dom';
import style from "./Costumer.module.css";
import CostumerMain from "./components/CostumerMain/CostumerMain";
import CostumerProfile from "./components/CostumerProfile/CostumerProfile";

const Costumer = (props) => {
  
  return(
    <div className={style.CostumerPanel}>
      <Routes>
        <Route path='main' element={<CostumerMain state={props.state}/>}/>
        <Route path='profile' element={<CostumerProfile state={props.state}/>}/>
      </Routes>
    </div>
   
  )
}

export default Costumer;