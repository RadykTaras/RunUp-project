import React from "react";
import{Link} from "react-router-dom";
import style from "./Register.module.css";
import {ReactComponent as GmailLogo} from "./img/gmail.svg";
import {ReactComponent as FbLogo} from "./img/facebook.svg";

const Register = () =>{
  return (
  <div className={style.contentSection}>
    <div className={style.form}>
      <h3 className={style.title}>SIGN UP</h3>
      <div className={style.formBody}>
        <div className={style.inputContainer}>
          <label className={style.label} for="email">Email</label>
          <input className={style.input} type="text" id="email" />
        </div>
        <div className={style.inputContainer}>
          <label className={style.label} for="password">Password</label>
          <input className={style.input} type="password"  id="password" />
        </div>
        <div className={style.inputContainer}>
          <label className={style.label} for="password">Reapet password</label>
          <input className={style.input} type="password"  id="password" />
        </div>
        <button className={style.button}>
          SIGN UP
        </button>
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