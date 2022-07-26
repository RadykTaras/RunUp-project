const UsersReducer = (state, registrationForm, action) => {
  
  if(action.type === 'MAKE-REGISTRATION'){
    
    if(registrationForm.checkEmailVal() && registrationForm.checkPassVal()){
      if(registrationForm.store.password === registrationForm.store.reapetPassword){
        state.push(
          {
            "id" : state.length + 1,
            "status" : "Costumer",
            "userName" : "User" + state.length + 1,
            "mail" : registrationForm.store.email,
            "password" : registrationForm.store.password 
          }
        )
        state._store.changed = true;
      } else {
        registrationForm.createErrorMessage('Passwords do not match!')
        state._store.changed = false;
      }
      
    }
  } 
  return state;
}

export default UsersReducer;