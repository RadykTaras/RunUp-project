import React from "react";
import {Route, Routes } from 'react-router-dom';
import style from "./Admin.module.css";
import AdminMain from "./components/AdminMain/AdminMain";
import AdminProfile from "./components/AdminProfile/AdminProfile";

const Admin = (props) => {
  
  return(
    <div className={style.AdminPanel}>
      <Routes>
        <Route path='main' element={<AdminMain state={props.state}/>}/>
        <Route path='profile' element={<AdminProfile state={props.state}/>}/>
      </Routes>
    </div>
  )
}

export default Admin;