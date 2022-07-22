import React from "react";
import style from"../../../User.module.css";

const CostumerMain = (props) =>{
  
  return(
    <>
      <div className={style.contentSection}>
          <div className={style.form}>
            <h3 className={style.title}>My leafs</h3>
            <div className={style.formBody}>
            </div>
          </div>
          <div className={style.secondForm}>
            <h3 className={style.title}>My orders</h3>
            <div className={style.formBody}>
            </div>
          </div>
          <div className={style.secondForm}>
            <h3 className={style.title}>My reviews</h3>
            <div className={style.formBody}>
            </div>
          </div>
      </div>
    </>
    
    
  )
}


export default CostumerMain;