import React, { useState } from 'react';
import style from './ShopAside.module.css';
import classes from 'classnames';
import {ReactComponent as Arrow} from './img/arrow.svg';
import PriceList from './components/priceList/PriceList';
import FilterList from './components/filterList/FilterList';

const ShopAside = (props) => {
  
  function getFiler (value){
    
    for(let key of props.state._store.filteredSneakers){
      
      if (value === key){
        return false
      } 
    }
    return true
  }
  
  let [minPrice, setMinPrice] = useState(Math.min.apply(null, props.state.filter.filteredPrice));  
  let [maxPrice, setMaxPrice] = useState(Math.max.apply(null, props.state.filter.filteredPrice)); 
   
  let [minValue, setMinValue] = useState(minPrice);  
  let [maxValue, setMaxValue] = useState(maxPrice); 
  
  const [brandListState, setBrandListState] = useState(false);
  const [priceListState, setPriceListState] = useState(false);
  const [sexListState, setSexListState] = useState(false);
  
  function listBrandHide (){
    setBrandListState(brandListState => !brandListState); 
  }
  function listPriceHide (){
    setPriceListState(priceListState => !priceListState); 
  }
  function listSexHide (){
    setSexListState(sexListState => !sexListState); 
  }
  
  props.state.filter.filteredPrice = [];
  for (let i = 0; i < props.state._store.sneakers.length; i++){
    
    if((
      getFiler(props.state._store.sneakers[i].brand)))
      {
        props.state.filter.filteredPrice.push(props.state._store.sneakers[i].price);
      }    
  }
  
  let brandListClassCheck = brandListState ? ' hiden' : '',
    priceListClassCheck = priceListState ? ' hiden' : '',
    sexListClassCheck = sexListState ? ' hiden' : '';
  
  return (
      <aside className={`aside${props.asideStatus}`}>
        <div className={style.filterContainer}>
          <form className={style.form}>
            <div className={style.list}>
              <button type="button" className={classes(style.brandButton, style.button)}  onClick={listBrandHide}>
                Brand
                <Arrow />
              </button>
              <div className={`inputBrand${brandListClassCheck}`}>
                <FilterList state={props.state} segment="brand" minPrice={minPrice} maxPrice={maxPrice} setMinPrice={setMinPrice} setMaxPrice={setMaxPrice} setMinValue={setMinValue} setMaxValue={setMaxValue}/>
              </div>
            </div>
            <div className={style.list}>
              <button type="button" className={classes(style.sexButton, style.button)} onClick={listPriceHide}>
                Price
                <Arrow />
              </button>
              <div className={`inputPrice${priceListClassCheck}`}>
                  <PriceList state={props.state} minPrice={minPrice} maxPrice={maxPrice} setMinPrice={setMinPrice} setMaxPrice={setMaxPrice} setMinValue={setMinValue} setMaxValue={setMaxValue} minValue={minValue} maxValue={maxValue}/>
              </div>
            </div>
            <div className={style.list}>
              <button type="button" className={classes(style.sexButton, style.button)}  onClick={listSexHide}>
                Sex 
                <Arrow />
              </button>
              <div className={`inputSex${sexListClassCheck}`}>
                <FilterList state={props.state} segment="sex" minPrice={minPrice} maxPrice={maxPrice} setMinPrice={setMinPrice} setMaxPrice={setMaxPrice} setMinValue={setMinValue} setMaxValue={setMaxValue}/>
              </div>
            </div>
          </form>
        </div>
      </aside>
  );
}

export default ShopAside;
