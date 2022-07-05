import React from "react";
import {Route, Routes } from 'react-router-dom';
import style from "./Costumer.module.css";

const Costumer = () => {
  
  return(
    <div className={style.CostumerPanel}>
      <Routes>
        <Route path='main' element={<p>main</p>}/>
        <Route path='profile' element={<p>profile</p>}/>
      </Routes>
    </div>
   
  )
}

export default Costumer;