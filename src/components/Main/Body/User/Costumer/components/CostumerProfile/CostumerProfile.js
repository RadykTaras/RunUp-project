import React,  { useState,  useRef, useEffect } from "react";
import style from"../../../User.module.css";
import editBtn from "../../../img/edit.svg";

const CostumerProfile = (props) =>{
  const [edtableNameInputState, setEdtableNameInputState] = useState(false);
  const [edtablePhoneInputState, setEdtablePhoneInputState] = useState(false);
  
  function useNameEdit(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setEdtableNameInputState(edtableNameInputState => false)
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }
  const nameRef = useRef(null);
  useNameEdit(nameRef);
  
  function usePhoneEdit(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setEdtablePhoneInputState(edtablePhoneInputState => false)
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }
  const phoneRef = useRef(null);
  usePhoneEdit(phoneRef);
  
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
              <img className={style.editB} src={editBtn} alt="edit button" onClick={() => {setEdtableNameInputState(edtableNameInputState => !edtableNameInputState)}}/>
              <input className={edtableNameInputState ? style.editInput : style.editInputHiden}  
                value={props.state._store.loginedUser.userName|| ""} type="input" ref={nameRef} id="name" maxLength="24"
                onChange={(e) => {props.state.dispatch( {type: "EDIT-USER-NAME", value: e.target.value})}}
              />
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
                <img className={style.editB} src={editBtn} alt="edit button"  onClick={() => {setEdtablePhoneInputState(edtablePhoneInputState => !edtablePhoneInputState)}}/>
                <input className={edtablePhoneInputState ? style.editInput : style.editInputHiden}
                 value={props.state._store.loginedUser.phone} type="input" ref={phoneRef} id="phone" maxLength="13"
                 onChange={(e) => {props.state.dispatch( {type: "EDIT-USER-PHONE", value: e.target.value})}}
                 />
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