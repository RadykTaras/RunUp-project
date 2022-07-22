import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import style from './UserAside.module.css';
import Logout from "./img/logout.svg"
 
const UserAside = (props) => {
  const pathname = useLocation().pathname;
  
  
  return (
      <aside className={`aside${props.asideStatus}`}>
        <div className={style.menuContainer}>
          <nav className='nav'>
            <ul>
              <li className={style.li}>
                <Link className={`${pathname === '/user/main' ? 'active link' : 'link'}`} to='main'>
                  Main
                </Link>
              </li>
              <li className={style.li}>
                <Link className={`${pathname === '/user/profile' ? 'active link' : 'link'}`} to='profile'>
                  Profile
                </Link>
              </li>
              <li className={style.logOutContainer}>
                <Link className={style.logOut} to='/' onClick={()=>{props.state.loginForm.loginOut()}}>
                  Logout
                  <img className={style.logOutIcon} alt='logout' src={Logout}/>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
    
        
      </aside>
  );
}

export default UserAside;
