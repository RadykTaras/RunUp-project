import React from "react";
import style from "./Store.module.css";
import Colors from "./components/Colors";

const Store = (props) =>{
  
  return (
    <div className={style.contentSection}>
      <div className={style.sortContainer}>
        <label className={style.sortLabel} for="sort">Sorted by: </label>
        <select className={style.sort} name="sort">
          <option value="lower">lower price first</option>
          <option value="highter">highter price first</option>
          <option value="popular">popularity</option>
        </select>
      </div>
      <div className={style.content}>
        {props.state.map((sneaker) => (
          <div className={style.sneakersCard}>
            <img className={style.sneakers} alt="sneakers" src={require (`${sneaker.mainImgSRC}`)}/>
            <h3 className={style.brand}>
              {sneaker.brand}
            </h3>
            <h6 className={style.model}>
              {sneaker.model}
            </h6>
            <div className={style.options}> 
              <h5 className={style.sneakersSizes}>
              Sizes: {sneaker.sizes}
              </h5>
              {sneaker.colors.split(' ').map((color) => (<Colors color={color}/>))}
            </div>
          </div>
          ))
        }
      </div>
    </ div>
  )
  

  
}

export default Store;