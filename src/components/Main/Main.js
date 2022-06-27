import React from 'react';
import { Route, Routes, } from 'react-router-dom';
import Home from "./Body/Home/Home";
import Store from "./Body/Store/Store";
import About from "./Body/About/About";
import Login from "./Body/Login/Login";
import Register from "./Body/Register/Register";
import './Main.css';
import Aside from './Aside/Aside';

const Main = (props) => {
  return (
      <main className="mainSection">
        <Aside state={props.state}/>
        <div className="body">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/shop" element={<Store state={props.state.shopPage}/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </main>
  );
}

export default Main;
