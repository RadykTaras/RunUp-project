import React from "react";
import style from "./Store.module.css";
import Colors from "./components/Colors";

const Store = (props) =>{
  
  return (
    <div className={style.contentSection}>
      <div className={style.sortContainer}>
        <label className={style.sortLabel} htmlFor="sort">Sorted by: </label>
        <select className={style.sort} name="sort">
          <option value="lower">lower price first</option>
          <option value="highter">highter price first</option>
          <option value="popular">popularity</option>
        </select>
      </div>
      <div className={style.content}>
        {props.state._store.sneakers.map((sneaker) => (
          <div key={sneaker.id} className={style.sneakersCard}>
            <img className={style.sneakers} alt="sneakers" src={require (`${sneaker.mainImgSRC}`)}/>
            <h3 className={style.brand}>
              {sneaker.brand}
            </h3>
            <div className={style.modelContainer}>
            <h6 className={style.model}>{sneaker.model}</h6> 
            <h6 className={style.price}>{`${sneaker.price}$`}</h6>
            </div>
            <div className={style.options}> 
              <h5 className={style.sneakersSizes}>
              Sizes: {sneaker.sizes}
              </h5>
              {sneaker.colors.split(' ').map((color) => (<Colors key={color+sneaker.id} color={color}/>))}
            </div>
          </div>
          ))
        }
      </div>
    </ div>
  )
  

  
}

export default Store;