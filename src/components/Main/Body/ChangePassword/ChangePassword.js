import React from "react";
import{Link} from "react-router-dom";
import style from "./ChangePassword.module.css";
  
const ChangePassword = (props) =>{

  return (
    <div className={style.contentSection}>
        <div className={style.form}>
          <h3 className={style.title}>Change password <p className={style.errMessage}>{props.state.loginForm.store.errorMessage}</p></h3>
          <div className={style.formBody}>
            <div className={style.inputContainer}>
              <label className={style.label} htmlFor="email">Email</label>
              <input className={style.input} value={props.state.loginForm.store.passEmail || ''} type="text" id="email" onChange={(e) => {props.state.loginForm.changePasswordEmail(e.target.value)}}/>
            </div>
            <button className={style.button} onClick={() => {}}>
              Change password
            </button>
          </div>
          <div className={style.newAccountContainer}>
            <span className={style.newAccountTxt}>
              Need an account?
            </span>
            <Link className={style.newAccountLink} to="/register" onClick={() => {props.state.loginForm.cleanFields()}}>
              SING UP 
            </Link>
          </div>
        </div>
    </div>
  )
}

export default ChangePassword;