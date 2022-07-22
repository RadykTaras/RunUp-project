import React from "react";
import Admin from "./Admin/Admin";
import Costumer from "./Costumer/Costumer";


const User = (props) =>{

  if(props.state.loginForm.store.loginStatus === 'Admin'){
    return (
      <>
       <Admin state={props.state}/>
      </>  
    )
  } else {
    return (
      <>
       <Costumer state={props.state}/>
      </>  
    )
  }
  
 
    
  
  
  
};

export default User;