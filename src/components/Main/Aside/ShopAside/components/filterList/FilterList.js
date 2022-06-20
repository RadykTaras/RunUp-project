import React from 'react';
import style from './FilterList.module.css'

const SexList = (props) => {
  
  let newArr = [];
  
  for (let i = 0; i < props.state.length; i++){
    if(props.segment==="brand"){
      newArr.push(props.state[i].brand);
    }else{
      newArr.push(props.state[i].sex);
    }
  }
  
  let result = {};
  newArr.forEach(function(a){
      result[a] = result[a] + 1 || 1;
  });
  
  let uniqElements = uniq(newArr);
  
  function uniq(newArr) {
    return newArr.sort().filter(function(item, pos, ary) {
        return !pos || item !== ary[pos - 1];
    });
}
  
  return (
      <>
        {uniqElements.map((el) => ( 
          <div className={style.container}>
            <input type="checkbox" name={el} className={style.input} defaultChecked="true"/>
            <label for={el}>
              <span className={style.label}> {el} </span>
              <span className={style.count}> {result[`${el}`]} </span>
            </label>
          </div>
        ))
        }        
      </>
  );
}

export default SexList;
