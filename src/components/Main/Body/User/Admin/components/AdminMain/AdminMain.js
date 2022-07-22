import React from "react";
import style from"../../../User.module.css";

const AdminMain = (props) =>{
  
  return(
    <>
      <div className={style.contentSection}>
          <div className={style.form}>
            <h3 className={style.title}>Add new brand</h3>
            <div className={style.formBody}>
              <div className={style.Container}>
                <h6 className={style.label}>Brand name:</h6>
                <input className={style.input} type="input" />
              </div>
              <div className={style.Container}>
                <h6 className={style.label}>Brand logo:</h6>
                <input className={style.inputFile} type="file" />
              </div>
              <div className={style.Container}>
                <h6 className={style.label}>Presentation photo:</h6>
                <input className={style.inputFile} type="file" />
              </div>
              <div className={style.Container}>
                <h6 className={style.label}>Information of brand:</h6>
                <input className={style.input} type="text" />
              </div>
              <div className={style.Container}>
                <h6 className={style.label}>Brand website:</h6>
                <input className={style.input} type="input" />
              </div>
            </div>
          </div>
          <div className={style.secondForm}>
            <h3 className={style.title}>Add new sneakers</h3>
            <div className={style.formBody}>
              <div className={style.Container}>
                <h6 className={style.label}>Brand:</h6>
                <select name="brands" id="brands">
                  <option value="1"></option>
                  <option value="2"></option>
                  <option value="3"></option>
                  <option value="4"></option>
                  <option value="5"></option>
                </select>
              </div>
              <div className={style.Container}>
                <h6 className={style.label}>Main picture:</h6>
                <input className={style.inputFile} type="file" />
              </div>
              <div className={style.Container}>
                <h6 className={style.label}>Pictures:</h6>
                <input className={style.inputFile} type="file" />
              </div>
              <div className={style.Container}>
                <h6 className={style.label}>Sex:</h6>
                <select name="brands" id="brands">
                  <option value="1"></option>
                  <option value="2"></option>
                  <option value="3"></option>
                  <option value="4"></option>
                  <option value="5"></option>
                </select>
              </div>
              <div className={style.Container}>
                <h6 className={style.label}>Model name:</h6>
                <input className={style.input} type="input" />
              </div>
              <div className={style.Container}>
                <h6 className={style.label}>Sizes:</h6>
                <input className={style.input} type="input" />
              </div>
              <div className={style.Container}>
                <h6 className={style.label}>Colors:</h6>
                <input className={style.input} type="input" />
              </div>
              <div className={style.Container}>
                <h6 className={style.label}>Price:</h6>
                <input className={style.input} type="input" />
              </div>
            </div>
          </div>
      </div>
    </>
    
    
  )
}


export default AdminMain;