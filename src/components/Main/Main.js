import React from 'react';
import { Route, Routes, } from 'react-router-dom';
import Home from "./Body/Home/Home";
import Store from "./Body/Store/Store";
import About from "./Body/About/About";
import Login from "./Body/Login/Login";
import MainAside from './Aside/MainAside/MainAside';
import UserAside from './Aside/UserAside/UserAside';
import ShopAside from './Aside/ShopAside/ShopAside';
import './Main.css';

const Main = () => {
  
  return (
      <main className="mainSection">
        <Routes>
            <Route path="/" element={<MainAside />} />
            <Route path="/about" element={<MainAside />} />
            <Route path="/shop" element={<ShopAside/>} />
            <Route path="/login" element={<UserAside />} />
        </Routes>
        <div className="body">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/shop" element={<Store />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </main>
  );
}

export default Main;
