import React from "react";
import{Link, useLocation} from "react-router-dom";
import style from "./Login.module.css";
import {ReactComponent as GmailLogo} from "../img/gmail.svg";
import {ReactComponent as FbLogo} from "../img/facebook.svg";

const Login = (props) =>{
 let location = useLocation();

 
  return (
    <div className={style.contentSection}>
        <div className={style.form}>
          <h3 className={style.title}>LOGIN <p className={style.errMessage}>{props.state.login.store.errorMessage}</p></h3>
          <div className={style.formBody}>
            <div className={style.inputContainer}>
              <label className={style.label} for="email">Email</label>
              <input className={style.input} value={props.state.login.store.loginValue} type="text" id="email" onInput={(e) => {props.state.login.updateLogin(e.target.value)}}/>
            </div>
            <div className={style.inputContainer}>
              <label className={style.label} for="password">Password </label>
              <input className={style.input} value={props.state.login.store.passwordValue} type="password"  id="password" onInput={(e) => {props.state.login.updatePassword(e.target.value)}}/>
            </div>
            <div className={style.inputCheckbox}>
              <input className={style.input} type="checkbox"  id="remember" />
              <label className={style.CheckboxLabel} for="remember">Remember me?</label>
            </div>
              <button className={style.button} onClick={() => { 
                props.state.login.makeLogin(); 
                if(props.state.login.store.loginStatus)
                {
                  location.pathname = '/user/main';
                }else{
                  props.state.login.createErrorMessage();
                  }
                }}>
                LOGIN
              </button>
            <span className={style.txt}>Forgot Password?</span>
          </div>
          <div className={style.square}>
            <h6 className={style.squareTxt}>OR</h6>
          </div>
          <div className={style.logoContainer}>
            <div className={style.logo}>
              <GmailLogo />
            </div>
            <div className={style.logo}>
              <FbLogo />
            </div>
          </div>  
          <div className={style.newAccountContainer}>
            <span className={style.newAccountTxt}>
              Need an account?
            </span>
            <Link className={style.newAccountLink} to="/register">
              SING UP 
            </Link>
          </div>
        </div>
    </div>
  )
}

export default Login;