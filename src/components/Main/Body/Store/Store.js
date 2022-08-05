import React, {useState} from "react";
import style from "./Store.module.css";
import Colors from "./components/Colors";

const Store = (props) =>{
  
  let [sortParam, setsortParam] = useState(0);  
  
  
  
  function getFiler (value){
    
    for(let key of props.state._store.filteredSneakers){
      
      if (value.brand === key || value.sex === key){
        return false
      } else if(typeof(props.state._store.filteredSneakers[0]) === "number" && value.price <props.state._store.filteredSneakers[0] | value.price >props.state._store.filteredSneakers[1] ){
        return false
      }
    }
    return true
  }
  
  return (
    <div className={style.contentSection}>
      <div className={style.sortContainer}>
        <label className={style.sortLabel} htmlFor="sort">Sorted by: </label>
        <select className={style.sort} name="sort" onChange={(event)=>{setsortParam(event.target.selectedIndex)}}>
          <option value="popular">popularity</option>
          <option value="lower" >lower price first</option>
          <option value="highter">highter price first</option>
        </select>
      </div>
      <div className={style.content}>
        {props.state._store.sneakers.filter(getFiler).sort((a,b) =>{if(sortParam === 1){ return a.price - b.price}else if(sortParam === 2){ return b.price - a.price}} ).map((sneaker) => (
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