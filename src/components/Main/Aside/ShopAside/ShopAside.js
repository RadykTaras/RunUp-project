import React, { useState } from 'react';
import style from './ShopAside.module.css';
import classes from 'classnames';
import {ReactComponent as Arrow} from './img/arrow.svg';
import PriceList from './components/priceList/PriceList';
import FilterList from './components/filterList/FilterList';

const ShopAside = (props) => {
  
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
                <FilterList state={props.state} segment="brand" />
              </div>
            </div>
            <div className={style.list}>
              <button type="button" className={classes(style.sexButton, style.button)} onClick={listPriceHide}>
                Price
                <Arrow />
              </button>
              <div className={`inputPrice${priceListClassCheck}`}>
                <PriceList state={props.state}/>
              </div>
            </div>
            <div className={style.list}>
              <button type="button" className={classes(style.sexButton, style.button)}  onClick={listSexHide}>
                Sex 
                <Arrow />
              </button>
              <div className={`inputSex${sexListClassCheck}`}>
                <FilterList state={props.state} segment="sex" />
              </div>
            </div>
          </form>
        </div>
      </aside>
  );
}

export default ShopAside;
