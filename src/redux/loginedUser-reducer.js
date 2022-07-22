const loginedUserReducer = (state, loginForm, action) => {
  switch(action.type) {
    
    case 'MAKE-LOGIN': 
      for(let i=0; i< state._store.users.length; i++){
        if(loginForm.store.loginValue === state._store.users[i].mail && loginForm.store.passwordValue === state._store.users[i].password){
          state._store.loginedUser.status = state._store.users[i].status;
          state._store.loginedUser.userName = state._store.users[i].userName;
          state._store.loginedUser.mail = state._store.users[i].mail;
          state._store.loginedUser.password = state._store.users[i].password;
          state._store.loginedUser.userBonus = state._store.users[i].userBonus;
          state._store.loginedUser.phone = state._store.users[i].phone;
          loginForm.changeUserStatus(state._store.loginedUser.status);
        }
      }
      state._store.changed = true;
      return state._store.loginedUser;
      
    case 'MAKE-LOGIN-BY-GOOGLE': 
      state._store.loginedUser.status = "Costumer";
      state._store.loginedUser.userName = action.user.Ad;
      state._store.loginedUser.mail = action.user.su;
      state._store.loginedUser.password = action.user.NT;
      loginForm.changeUserStatus(state._store.loginedUser.status);
      state._store.changed = true;
      return state._store.loginedUser;
     
    case 'MAKE-LOGIN-BY-FACEBOOK':
      state._store.changed = true;
      return state._store.loginedUser;
    
    default:
      return state._store.loginedUser;
  }
}

export default loginedUserReducer;