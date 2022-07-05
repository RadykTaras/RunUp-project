import React from "react";
import {Route, Routes } from 'react-router-dom';
import style from "./Admin.module.css";
import AdminMain from "./components/AdminMain/AdminMain";
import AdminProfile from "./components/AdminProfile/AdminProfile";

const Admin = () => {
  
  return(
    <div className={style.AdminPanel}>
      <Routes>
        <Route path='main' element={<AdminMain />}/>
        <Route path='profile' element={<AdminProfile />}/>
      </Routes>
    </div>
  )
}

export default Admin;