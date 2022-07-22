import React from "react";
import style from"../../../User.module.css";
import editBtn from "../../../img/edit.svg";

const CostumerProfile = (props) =>{
  
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
             <div className={style.editable}>
              <p className={style.inf}>{props.state._store.loginedUser.userName}</p>
              <img className={style.editB} src={editBtn} alt="edit button"/>
             </div>
            </div>
            <div className={style.Container}>
             <h6 className={style.label}>Email:</h6>
             <p className={style.inf}>{props.state._store.loginedUser.mail}</p>
            </div>
            <div className={style.Container}>
             <h6 className={style.label}>Phone:</h6>
             <div className={style.editable}>
                <p className={style.inf}>{props.state._store.loginedUser.phone}</p>
                <img className={style.editB} src={editBtn} alt="edit button"/>
             </div>
            </div>
            <div className={style.Container}>
             <h6 className={style.label}>User bonus:</h6>
             <p className={style.inf}>{props.state._store.loginedUser.userBonus}</p>
            </div>
          </div>
        </div>
    </div>
  )
}


export default CostumerProfile;