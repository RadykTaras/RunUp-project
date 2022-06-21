import React, { useState, useEffect } from 'react';
import { Route, Routes, useLocation} from 'react-router-dom';
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
  
    const location = useLocation();
  
    useEffect(() => {
     setAsideState(false);
    }, [location]);
  
  return (
      <>
        <Routes>
            <Route path="/" element={<MainAside asideStatus={asideClassCheck} brandsInfo={props.brandsInfo} />} />
            <Route path="/about" element={<><MainAside asideStatus={asideClassCheck} brandsInfo={props.brandsInfo} /> <div className={`asideArrow${asideClassCheck}`} onClick={AsideHide}><AsideArrow /></div></>} />
            <Route path="/shop" element={<><ShopAside asideStatus={asideClassCheck} state={props.state}/> <div className={`asideArrow${asideClassCheck}`} onClick={AsideHide}><AsideArrow /></div></>} />
            <Route path="/login" element={<><MainAside asideStatus={asideClassCheck} brandsInfo={props.brandsInfo}/> <div className={`asideArrow${asideClassCheck}`} onClick={AsideHide}><AsideArrow /></div></>} />
            <Route path="/user" element={<><UserAside asideStatus={asideClassCheck} /> <div className={`asideArrow${asideClassCheck}`} onClick={AsideHide}><AsideArrow /></div></> } />
        </Routes>
       
      </>
  );
}

export default Aside;
