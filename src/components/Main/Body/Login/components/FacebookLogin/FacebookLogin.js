import ReactFacebookLogin from "react-facebook-login";

const FacebookLogin = (props) =>{

  const responseFacebook = (response) =>{
   console.log(response);
  }
  const componendClicked = () => {
   console.log('ss')
  }

 return (
    <ReactFacebookLogin 
    
    appId="604807384319126"
    autoLoad={false}
    fields=""
    onClick={componendClicked}
    callback={responseFacebook}
    
    />
 )
}

export default FacebookLogin;