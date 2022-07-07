import React, { useState } from 'react';
import style from './PriceList.module.css'

const PriceList = (props) => {
  
  let newArr = [],
    priceInterval = 10;
  
  for (let i = 0; i < props.state.length; i++){
    newArr.push(props.state[i].price);
  }
  
  let minPrice = Math.min.apply(null, newArr),
    maxPrice = Math.max.apply(null, newArr);
  
  let [minValue, setMinValue] = useState(minPrice);  
  let [maxValue, setMaxValue] = useState(maxPrice);  
  
  if(maxValue-minValue < priceInterval){
    setMinValue(maxValue-priceInterval);
  } 
  else {
    
    document.documentElement.style.setProperty('--minSize', `${((minValue - minPrice)/((maxPrice - minPrice) / 100))}%`);
    document.documentElement.style.setProperty('--maxSize', `${100-((maxValue - minPrice)/((maxPrice - minPrice) / 100))}%`);
  }
  
  
  return (
    <div>
      <div className={style.priceInput}>
        <div className={style.field}>
          <span>
            Min
          </span>
          <input type="number" className={style.inputMin} value={minValue} readOnly/>
        </div>
        <div className={style.separator}>-</div>
        <div className={style.field}>
          <span>
            Max
          </span>
          <input type="number" className={style.inputMax} value={maxValue} readOnly/>
        </div>
      </div>
      <div className={style.slider}>
        <div className={style.progress} />
      </div>
      <div className={style.rangeInput}>
        <input type="range" name="min" className={style.rangeMin} min={minPrice} max={maxPrice} defaultValue={minPrice} onChange={(event) => {
          if(event.target.value > maxValue - priceInterval)
          {
            event.target.value = minValue
          }else{
            setMinValue(event.target.value)
          }
          }}
        />
        <input type="range" name="max" className={style.rangeMax} min={minPrice} max={maxPrice} defaultValue={maxPrice} onChange={(event) => {
          if(event.target.value < parseInt(minValue) + priceInterval)
          {
            event.target.value = maxValue
          }else{
            setMaxValue(event.target.value)
          }
          }}
        />
      </div>
    </div>
      
  );
}

export default PriceList;
