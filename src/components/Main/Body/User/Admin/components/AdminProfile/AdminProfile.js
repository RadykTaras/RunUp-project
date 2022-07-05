import React from "react";
import style from"../../../User.module.css";
import editBtn from "../../../img/edit.svg";

const AdminProfile = () =>{
  
  return(
    <div className={style.contentSection}>
        <div className={style.form}>
          <h3 className={style.title}>User information</h3>
          <div className={style.formBody}>
            <div className={style.Container}>
             <h6 className={style.label}>Status:</h6>
             <p className={style.inf}>admin</p>
            </div>
            <div className={style.Container}>
             <h6 className={style.label}>User name:</h6>
             <p className={style.inf}>Radyk Taras</p>
             <img className={style.editB} src={editBtn} alt="edit button"/>
            </div>
            <div className={style.Container}>
             <h6 className={style.label}>Email:</h6>
             <p className={style.inf}>radyk.taras.ua@gmail.com</p>
             <img className={style.editB} src={editBtn} alt="edit button"/>
            </div>
            <div className={style.Container}>
             <h6 className={style.label}>Password:</h6>
             <p className={style.inf}>*******</p>
             <img className={style.editB} src={editBtn} alt="edit button"/>
            </div>
          </div>
        </div>
    </div>
  )
}


export default AdminProfile;