import React from 'react';
import style from './UserAside.module.css'


const UserAside = (props ) => {
  
  return (
      <aside className={`aside${props.asideStatus}`}>
        <div className={style.menuContainer}>
          
        </div>
        
      </aside>
  );
}

export default UserAside;
