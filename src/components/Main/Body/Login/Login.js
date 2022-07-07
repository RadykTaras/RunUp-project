import React from "react";
import{Link, useLocation} from "react-router-dom";
import style from "./Login.module.css";
import {ReactComponent as FbLogo} from "../img/facebook.svg";
import { useEffect } from "react";
import { gapi } from "gapi-script";
  
const Login = (props) =>{
 
  let client_id = "27121478558-kdbcqf6guvfls7dp8omg7atg59lvbrtr.apps.googleusercontent.com";
  let signId = "signInDiv";
  
  useEffect(() =>{
    function start() {
      gapi.auth2.init({
        clientId: client_id,
        scope: "" 
      })
    }
    gapi.load("client:auth2", start)
    gapi.signin2.render("signInDiv", {
      "scope": "",
      "width": 40,
      "height": 40,
      "longtitle": false,
      "type": "icon",
      "shape": "pill", 
      "onsuccess": function (googleUser) { 
       props.state.login.makeLoginWithGoogle(googleUser.wt);
      },
      "onfailure": function (e) {
          console.warn("Google Sign-In failure: " + e.error);
      }
    });
    window.onbeforeunload = function (e) {
      gapi.auth2.AuthResponse();
    };
  });

   

  let location = useLocation();
  return (
    <div className={style.contentSection}>
        <div className={style.form}>
          <h3 className={style.title}>LOGIN <p className={style.errMessage}>{props.state.login.store.errorMessage}</p></h3>
          <div className={style.formBody}>
            <div className={style.inputContainer}>
              <label className={style.label} htmlFor="email">Email</label>
              <input className={style.input} value={props.state.login.store.loginValue || ''} type="text" id="email" onChange={(e) => {props.state.login.updateLogin(e.target.value)}}/>
            </div>
            <div className={style.inputContainer}>
              <label className={style.label} htmlFor="password">Password </label>
              <input className={style.input} value={props.state.login.store.passwordValue || ''} type="password"  id="password" onChange={(e) => {props.state.login.updatePassword(e.target.value)}}/>
            </div>
            <div className={style.inputCheckbox}>
              <input className={style.input} type="checkbox"  id="remember" />
              <label className={style.CheckboxLabel} htmlFor="remember">Remember me?</label>
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
              <div  id={signId}>
              </div>
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