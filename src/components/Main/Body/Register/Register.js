import React from "react";
import{Link, useLocation} from "react-router-dom";
import style from "./Register.module.css";

const Register = (props) =>{
  let location = useLocation();
  
  return (
  <div className={style.contentSection}>
    <div className={style.form}>
      <h3 className={style.title}>SIGN UP <p className={style.errMessage}>{props.state.registration.store.errorMessage}</p></h3>
      <div className={style.formBody}>
        <div className={style.inputContainer}>
          <label className={style.label} htmlFor="email">Email</label>
          <input className={style.input} value={props.state.registration.store.email || ''} type="text" id="email"  onChange={(e) => {props.state.registration.updateEmail(e.target.value)}}/>
        </div>
        <div className={style.inputContainer}>
          <label className={style.label} htmlFor="password">Password</label>
          <input className={style.input} value={props.state.registration.store.password || ''} type="password"  id="password" onChange={(e) => {props.state.registration.updatePassword(e.target.value)}}/>
        </div>
        <div className={style.inputContainer}>
          <label className={style.label} htmlFor="password">Reapet password</label>
          <input className={style.input} value={props.state.registration.store.reapetPassword || ''} type="password"  id="password" onChange={(e) => {props.state.registration.updateReapetedPassword(e.target.value)}}/>
        </div>
        <button className={style.button} onClick={() => {if(props.state.registration.makeRegistration()) {location.pathname = '/login'}}}>
          SIGN UP
        </button>
      </div>
      <div className={style.square}>
        <h6 className={style.squareTxt}>OR</h6>
      </div>
      <div className={style.newAccountContainer}>
        <span className={style.newAccountTxt}>
          Already a user?
        </span>
        <Link className={style.newAccountLink} to="/login">
          LOGIN
        </Link>
      </div>
    </div>
  </div>
  )
}

export default Register;