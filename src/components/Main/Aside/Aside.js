import React, { useState } from 'react';
import { Route, Routes, } from 'react-router-dom';
import MainAside from './MainAside/MainAside';
import UserAside from './UserAside/UserAside';
import ShopAside from './ShopAside/ShopAside';
import {ReactComponent as AsideArrow} from "./img/aside_arrow.svg";
import './Aside.css';

const Aside = (props) => {
  
  const [asideState, setAsideState] = useState(false);
  
  function AsideHide (){
    setAsideState(asideState => !asideState); 
  }
  
  let asideClassCheck = asideState ? ' hiden' : '';
  
  return (
      <>
        <Routes>
            <Route path="/" element={<MainAside asideStatus={asideClassCheck} brandsInfo={props.brandsInfo} />} />
            <Route path="/about" element={<MainAside asideStatus={asideClassCheck} brandsInfo={props.brandsInfo} />} />
            <Route path="/shop" element={<ShopAside asideStatus={asideClassCheck} state={props.state}/>} />
            <Route path="/login" element={<MainAside asideStatus={asideClassCheck} brandsInfo={props.brandsInfo}/>} />
            <Route path="/user" element={<UserAside asideStatus={asideClassCheck} />} />
        </Routes>
        <div className={`asideArrow${asideClassCheck}`} onClick={AsideHide}>
          <AsideArrow /> 
        </div>
      </>
  );
}

export default Aside;
