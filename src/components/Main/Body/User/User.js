import React from "react";
import Admin from "./Admin/Admin";
import Costumer from "./Costumer/Costumer";


const User = (props) =>{

  if(props.loginStatus === 'Admin'){
    return (
      <>
       <Admin />
      </>  
    )
  } else {
    return (
      <>
       <Costumer />
      </>  
    )
  }
  
 
    
  
  
  
};

export default User;