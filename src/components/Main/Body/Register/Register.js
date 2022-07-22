import React from "react";
import{Link, useLocation} from "react-router-dom";
import style from "./Register.module.css";

const Register = (props) =>{
  let location = useLocation();
  
  return (
  <div className={style.contentSection}>
    <div className={style.form}>
      <h3 className={style.title}>SIGN UP <p className={style.errMessage}>{props.state.registrationForm.store.errorMessage}</p></h3>
      <div className={style.formBody}>
        <div className={style.inputContainer}>
          <label className={style.label} htmlFor="email">Email</label>
          <input className={style.input} value={props.state.registrationForm.store.email || ''} type="text" id="email"  onChange={(e) => {props.state.registrationForm.updateEmail(e.target.value)}}/>
        </div>
        <div className={style.inputContainer}>
          <label className={style.label} htmlFor="password">Password</label>
          <input className={style.input} value={props.state.registrationForm.store.password || ''} type="password"  id="password" onChange={(e) => {props.state.registrationForm.updatePassword(e.target.value)}}/>
        </div>
        <div className={style.inputContainer}>
          <label className={style.label} htmlFor="password">Reapet password</label>
          <input className={style.input} value={props.state.registrationForm.store.reapetPassword || ''} type="password"  id="password" onChange={(e) => {props.state.registrationForm.updateReapetedPassword(e.target.value)}}/>
        </div>
        <button className={style.button} onClick={() => {if(props.state.dispatch({type : "MAKE-REGISTRATION"})) {location.pathname = '/login'}}}>
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
        <Link className={style.newAccountLink} to="/login" onClick={() => {props.state.registrationForm.cleanFields()}}>
          LOGIN
        </Link>
      </div>
    </div>
  </div>
  )
}

export default Register;