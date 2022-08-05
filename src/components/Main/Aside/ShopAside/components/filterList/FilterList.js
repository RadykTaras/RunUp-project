import React from 'react';
import style from './FilterList.module.css'

const SexList = (props) => {
  
  let newArr = [],
    brandsNameArr = [];
  
  props.state._store.sneakers.forEach((sneaker)=>{
    if(props.segment==="brand"){
      if(brandsNameArr.indexOf(sneaker.brand) < 0){
        brandsNameArr.push(sneaker.brand);
      }
    } else{
      if(brandsNameArr.indexOf(sneaker.sex) < 0){
        brandsNameArr.push(sneaker.sex);
      }
    }
  })  
  
  function getFiler (value){
    
    for(let key of props.state._store.filteredSneakers){
      
      if (value === key){
        return false
      } 
    }
    return true
  }
  
  for (let i = 0; i < props.state._store.sneakers.length; i++){
    
    if(props.segment==="brand" && 
      props.state._store.sneakers[i].price > props.state._store.filteredSneakers[0] && 
      props.state._store.sneakers[i].price < props.state._store.filteredSneakers[1] &&
       getFiler(props.state._store.sneakers[i].sex)
      ){
        if(props.state._store.sneakers[i].sex === "Man"){
          newArr.push(props.state._store.sneakers[i].brand);
       
        }else if(props.state._store.sneakers[i].sex === "Woman"){
          newArr.push(props.state._store.sneakers[i].brand);
        
        }
    }else if((props.segment==="sex" && 
      props.state._store.sneakers[i].price > props.state._store.filteredSneakers[0] && 
      props.state._store.sneakers[i].price < props.state._store.filteredSneakers[1] && 
      getFiler(props.state._store.sneakers[i].brand))){
      newArr.push(props.state._store.sneakers[i].sex);
      
    }    
  }
 
const setPrice = (value, event) => {
  props.state.filter.filteredPrice = [];
    for (let i = 0; i < props.state._store.sneakers.length; i++){
      if(props.state._store.sneakers[i].sex === value && value === "Man" && event === true){ 
        props.state.filter.filteredPrice.push(props.state._store.sneakers[i].price)
      } else if(props.state._store.sneakers[i].sex === "Woman" && value === "Man" && event === false){
        props.state.filter.filteredPrice.push(props.state._store.sneakers[i].price)
      }else if(props.state._store.sneakers[i].sex === value && value === "Woman" && event === true){
        props.state.filter.filteredPrice.push(props.state._store.sneakers[i].price)
      } else if(props.state._store.sneakers[i].sex === "Man" && value === "Woman" && event === false){
        props.state.filter.filteredPrice.push(props.state._store.sneakers[i].price)
      }else if(value !== "Woman" && value !== "Man" && getFiler(props.state._store.sneakers[i].brand)){
        props.state.filter.filteredPrice.push(props.state._store.sneakers[i].price);
      } 
      } 
      if(!props.state.filter.filteredPrice[0]){
        props.state.filter.filteredPrice.push(0);
        props.state.filter.filteredPrice.push(100);
      }

  props.setMinValue(Math.min.apply(null, props.state.filter.filteredPrice));
  props.setMaxValue(Math.max.apply(null, props.state.filter.filteredPrice));
  props.setMinPrice(Math.min.apply(null, props.state.filter.filteredPrice));
  props.setMaxPrice(Math.max.apply(null, props.state.filter.filteredPrice));
}  

  let result = {};
  newArr.forEach(function(el){

      result[el] = result[el] + 1 || 1;
  });
  
  return (
      <>
        {brandsNameArr.map((el) => ( 
          <div className={style.container} key={el}>
            <input type="checkbox" name={el} className={style.input} defaultChecked="true" onClick={(el)=>{props.state.filter.getFilteredBrands(el.target.name); setPrice(el.target.name, el.target.checked);}}/>
            <label htmlFor={el}>
              <span className={style.label}> {el} </span>
              <span className={style.count}> {result[`${el}`]||0} </span>
            </label>
          </div>
        ))
        }        
      </>
  );
}

export default SexList;
