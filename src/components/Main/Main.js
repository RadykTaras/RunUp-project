import React from 'react';
import { Route, Routes} from 'react-router-dom';
import Home from "./Body/Home/Home";
import Store from "./Body/Store/Store";
import About from "./Body/About/About";
import Login from "./Body/Login/Login";
import Register from "./Body/Register/Register";
import User from "./Body/User/User";
import ChangePassword from './Body/ChangePassword/ChangePassword';
import './Main.css';
import Aside from './Aside/Aside';

const Main = (props) => {
  
  let userRoute = '',
    changePassRoute = 'password',
    loginRoute = 'login';
  
  
  if(props.state.loginForm.store.loginStatus){
    userRoute = 'user/*';
    changePassRoute = 'password';
    loginRoute = '';
  }
  
  return (
      <main className="mainSection">
        <Aside state={props.state}/>
        <div className="body">
          <Routes>
            <Route path="/" element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="shop" element={<Store state={props.state}/>} />
              <Route path={loginRoute} element={<Login state={props.state} />} />
              <Route path="register" element={<Register state={props.state} />} />
              <Route path="*" element={<Home />} />
              <Route path={userRoute} element={<User loginStatus={props.state.loginForm.store.loginStatus}/>} />
              <Route path={changePassRoute} element={<ChangePassword  state={props.state} />} />
          </Routes>
        </div>
      </main>
  );
}

export default Main;
