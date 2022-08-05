import style from './PriceList.module.css'
import React, {useState} from 'react';

const PriceList = (props) => {
  
  let priceInterval = 10;
  
  
  if(props.maxValue-props.minValue < priceInterval){
    props.setMinValue(props.maxValue-priceInterval);
  } 
  else {
    document.documentElement.style.setProperty('--minSize', `${((props.minValue - props.minPrice)/((props.maxPrice - props.minPrice) / 100))}%`);
    document.documentElement.style.setProperty('--maxSize', `${100-((props.maxValue - props.minPrice)/((props.maxPrice - props.minPrice) / 100))}%`);
  }
  
  return (
    <div>
      <div className={style.priceInput}>
        <div className={style.field}>
          <span>
            Min
          </span>
          <input type="number" className={style.inputMin} value={props.minValue} readOnly/>
        </div>
        <div className={style.separator}>-</div>
        <div className={style.field}>
          <span>
            Max
          </span>
          <input type="number" className={style.inputMax} value={props.maxValue} readOnly/>
        </div>
      </div>
      <div className={style.slider}>
        <div className={style.progress} />
      </div>
      <div className={style.rangeInput}>
        <input type="range" name="min" className={style.rangeMin} min={props.minPrice} max={props.maxPrice} defaultValue={props.minPrice} onChange={(event) => {
          if(event.target.value > props.maxValue - priceInterval)
          {
            event.target.value = props.minValue
          }else{
            props.setMinValue(event.target.value);
            props.state.filter.getFilteredBrands(props.minValue, props.maxValue);
          }
          }}
        />
        <input type="range" name="max" className={style.rangeMax} min={props.minPrice} max={props.maxPrice} defaultValue={props.maxPrice} onChange={(event) => {
          if(event.target.value < parseInt(props.minValue) + priceInterval)
          {
            event.target.value = props.maxValue
          }else{
            props.setMaxValue(event.target.value);
            props.state.filter.getFilteredBrands(props.minValue, props.maxValue);
          }
          }}
        />
      </div>
    </div>
      
  );
}

export default PriceList;
