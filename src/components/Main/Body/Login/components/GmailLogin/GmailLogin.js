import React from "react";
import { useEffect } from "react";
import { gapi } from "gapi-script";

  
const GmailLogin = (props) =>{
 
  let client_id = "27121478558-kdbcqf6guvfls7dp8omg7atg59lvbrtr.apps.googleusercontent.com";
  let signId = "signInDiv";
  
  useEffect(() =>{
    function start() {
      gapi.auth2.init({
        clientId: client_id,
        scope: "" 
      })
    }
    gapi.load("client:auth2", start)
    gapi.signin2.render("signInDiv", {
      "scope": "",
      "width": 40,
      "height": 40,
      "longtitle": false,
      "type": "icon",
      "shape": "pill", 
      "onsuccess": function (googleUser) { 
      //  props.state.dispatch({type : "MAKE-LOGIN-BY-GOOGLE", user : googleUser.wt});
      },
      "onfailure": function (e) {
          console.warn("Google Sign-In failure: " + e.error);
      }
    });
    window.onbeforeunload = function (e) {
      gapi.auth2.AuthResponse();
    };
  });

  return (
    <div  id={signId}>
    </div>
  )
}

export default  GmailLogin;