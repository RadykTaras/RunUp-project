import React, { useState, useEffect } from 'react';
import { Route, Routes, useLocation} from 'react-router-dom';
import MainAside from './MainAside/MainAside';
import UserAside from './UserAside/UserAside';
import ShopAside from './ShopAside/ShopAside';
import {ReactComponent as AsideArrow} from "./img/aside_arrow.svg";
import './Aside.css';

const Aside = (props) => {
  
  let userRoute = '';
  
  if(props.state.loginForm.store.loginStatus){
    userRoute = 'user/*'
  }
  
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
            <Route path="/" element={<MainAside asideStatus={asideClassCheck} brandsInfo={props.state._store.brands} />} />
              <Route path="shop" element={<><ShopAside asideStatus={asideClassCheck} state={props.state}/> <div className={`asideArrow${asideClassCheck}`} onClick={AsideHide}><AsideArrow /></div></>} />
              <Route path={userRoute} element={<><UserAside asideStatus={asideClassCheck}  state={props.state}/> <div className={`asideArrow${asideClassCheck}`} onClick={AsideHide}><AsideArrow /></div></> } />
              <Route path="*" element={<></>} />
        </Routes>
       
      </>
  );
}

export default Aside;
