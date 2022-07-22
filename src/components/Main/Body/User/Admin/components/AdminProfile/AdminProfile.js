import React from "react";
import style from"../../../User.module.css";
import editBtn from "../../../img/edit.svg";

const AdminProfile = (props) =>{
  
  return(
    <div className={style.contentSection}>
        <div className={style.form}>
          <h3 className={style.title}>User information</h3>
          <div className={style.formBody}>
            <div className={style.Container}>
             <h6 className={style.label}>Status:</h6>
             <p className={style.inf}>{props.state._store.loginedUser.status}</p>
            </div>
            <div className={style.Container}>
             <h6 className={style.label}>User name:</h6>
             <p className={style.inf}>{props.state._store.loginedUser.name}</p>
             <img className={style.editB} src={editBtn} alt="edit button"/>
            </div>
            <div className={style.Container}>
             <h6 className={style.label}>Email:</h6>
             <p className={style.inf}>{props.state._store.loginedUser.mail}</p>
            </div>
          </div>
        </div>
    </div>
  )
}


export default AdminProfile;