import React from "react";
import{Link, useLocation} from "react-router-dom";
import style from "./Login.module.css";
import GmailLogin from "./components/GmailLogin/GmailLogin";
import FacebookLogin from "./components/FacebookLogin/FacebookLogin";
  
const Login = (props) =>{

  let location = useLocation();
  return (
    <div className={style.contentSection}>
        <div className={style.form}>
          <h3 className={style.title}>LOGIN <p className={style.errMessage}>{props.state.loginForm.store.errorMessage}</p></h3>
          <div className={style.formBody}>
            <div className={style.inputContainer}>
              <label className={style.label} htmlFor="email">Email</label>
              <input className={style.input} value={props.state.loginForm.store.loginValue || ''} type="text" id="email" onChange={(e) => {props.state.loginForm.updateLogin(e.target.value)}}/>
            </div>
            <div className={style.inputContainer}>
              <label className={style.label} htmlFor="password">Password </label>
              <input className={style.input} value={props.state.loginForm.store.passwordValue || ''} type="password"  id="password" onChange={(e) => {props.state.loginForm.updatePassword(e.target.value)}}/>
            </div>
            <div className={style.inputCheckbox}>
              <input className={style.input} type="checkbox"  id="remember" />
              <label className={style.CheckboxLabel} htmlFor="remember">Remember me</label>
            </div>
              <button className={style.button} onClick={() => { 
                props.state.dispatch({type : 'MAKE-LOGIN'}); 
                if(props.state.loginForm.store.loginStatus)
                {
                  location.pathname = '/user/main';
                }else{
                  props.state.loginForm.createErrorMessage();
                  }
                }}>
                LOGIN
              </button>
            <Link to="/password" className={style.txt} onClick={() => {props.state.loginForm.cleanFields()}}>
              <span className={style.txt}>Forgot Password?</span>
            </Link>
          </div>
          <div className={style.square}>
            <h6 className={style.squareTxt}>OR</h6>
          </div>
          <div className={style.logoContainer}>
            <div className={style.Gmlogo}>
              <GmailLogin state = {props.state}/>
            </div>
            <div className={style.Fblogo}>
              <FacebookLogin />
            </div>
          </div>  
          <div className={style.newAccountContainer}>
            <span className={style.newAccountTxt}>
              Need an account?
            </span>
            <Link className={style.newAccountLink} onClick={() => {props.state.loginForm.cleanFields()}} to="/register">
              SING UP 
            </Link>
          </div>
        </div>
    </div>
  )
}

export default Login;