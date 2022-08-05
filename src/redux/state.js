
import usersReducer from "./users-reducer";
import brandsReducer from "./brands-reducer";
import sneakersReducer from "./sneakers-reducer";
import filteredSneakersReducer from "./filteredSneakers-reducer";
import loginedUserReducer from "./loginedUser-reducer"; 
 
 let rerenderEntairTree = () => {
   console.log("State has been changed")
}

let state = {
  
  _store: {
    users: [
      {
        "id": 1,
        "status": "Admin",
        "userName": "Radyk Taras",
        "mail": "radyk.taras.ua@gmail.com",
        "password": "Skayzer1892",
        "userBonus": "120",
        "phone": "+380635188555"
      },
      {
        "id": 2,
        "status": "Custumer",
        "userName": "Liubov Poleschuk",
        "mail": "luibov@gmail.com",
        "password": "Liubov29",
        "userBonus": "120",
        "phone": "+380635188555"
      }
    ],
    brands: [
      {
        "id": 1,
        "name": "Asics",
        "logoSRC": "./img/Asics/Asics_logo.png",
        "imgSRC": "./img/Asics/Asics.jpg",
        "ShortInfo": "Japanese multinational corporation which produces sports equipment designed for a wide range of sports.",
        "website": "https://www.asics.com/gb/en-gb/"
      },
      
      {
        "id": 2,
        "name": "Adidas",
        "logoSRC": "./img/Adidas/Adidas_logo.png",
        "imgSRC": "./img/Adidas/Adidas.jpg",
        "ShortInfo": "German multinational corporation, founded and headquartered in Herzogenaurach, Bavaria, that designs and manufactures shoes, clothing and accessories.",
        "website": "https://www.adidas.com/us"
      },
      
      {
        "id": 3,
        "name": "Saucony",
        "logoSRC": "./img/Saucony/Saucony_logo.png",
        "imgSRC": "./img/Saucony/Saucony.jpg",
        "ShortInfo": "American brand of athletic footwear and apparel. Products include footwear and clothing ranges, such as athletic shoes, jackets, hoodies, t-shirts, sweatpants, shorts, and socks.",
        "website": "https://www.saucony.com/en/home"
      },
      
      {
        "id": 4,
        "name": "Reebok",
        "logoSRC": "./img/Reebok/Reebok_logo.png",
        "imgSRC": "./img/Reebok/Reebok.jpg",
        "ShortInfo": "American fitness footwear and clothing manufacturer subsidiary of brand management company Authentic Brands Group since March 2022. It was established in 1958 in Great Britain.",
        "website": "https://www.reebok.com/us"
      },
      
      {
        "id": 5,
        "name": "Nike",
        "logoSRC": "./img/Nike/Nike_logo.png",
        "imgSRC": "./img/Nike/Nike.jpg",
        "ShortInfo": "American multinational corporation that is engaged in the sales of footwear, apparel, equipment, accessories, and services. It is the world's largest supplier of athletic shoes and apparel and a major manufacturer of sports equipment",
        "website": "https://www.nike.com/"
      },
      
      {
        "id": 6,
        "name": "Hoka",
        "logoSRC": "./img/Hoka/Hoka_logo.png",
        "imgSRC": "./img/Hoka/Hoka.jpg",
        "ShortInfo": "France athletic shoe company that designs and markets running shoes. The brand first gained attention in the running industry by producing shoes with oversized outsoles, dubbed 'maximalist' shoes due to extra cushion",
        "website": "https://www.hoka.com/"
      },
      
      {
        "id": 7,
        "name": "Brooks",
        "logoSRC": "./img/Brooks/Brooks_logo.png",
        "imgSRC": "./img/Brooks/Brooks.jpg",
        "ShortInfo": "American sports equipment company that designs and markets high-performance men's and women's sneakers, clothing, and accessories.",
        "website": "https://www.brooksrunning.com/en_us"
      },
      
      {
        "id": 8,
        "name": "New Balance",
        "logoSRC": "./img/NewBalance/NewBalance_logo.png",
        "imgSRC": "./img/NewBalance/NewBalance.jpg",
        "ShortInfo": "American sports footwear and apparel brand that was established in 1906. New Balance is one of the world's major sports footwear and apparel manufacturers.",
        "website": "https://www.newbalance.com/"
      }
    ],
    sneakers: [
       {
        "id": 1,
        "brand": "Adidas",
        "mainImgSRC": "./img/Adidas/man/1 1.jpg",
        "pictures": "./img/Adidas/man/1 2.jpg ./img/Adidas/man/1 3.jpg ./img/Adidas/man/1 4.jpg",
        "sex": "Man",
        "model": "RunBoost",
        "sizes": "9, 9.5, 10.5, 11",
        "colors": "maroon lightgray",
        "price": 120,
        "likes": 0
      },
      
      {
        "id": 2,
        "brand": "Adidas",
        "mainImgSRC": "./img/Adidas/man/2 1.jpg",
        "pictures": "./img/Adidas/man/2 2.jpg ./img/Adidas/man/2 3.jpg ./img/Adidas/man/2 4.jpg",
        "sex": "Man",
        "model": "RunBoost2",
        "sizes": "9.5, 10, 10.5",
        "colors": "lightgray black",
        "price": 140,
        "likes": 0
      },
      
      {
        "id": 3,
        "brand": "Adidas",
        "mainImgSRC": "./img/Adidas/man/3 1.jpg",
        "pictures": "./img/Adidas/man/3 2.jpg ./img/Adidas/man/3 3.jpg",
        "sex": "Man",
        "model": "Speed3",
        "sizes": "10, 10.5, 11",
        "colors": "black",
        "price": 90,
        "likes": 0
      },
      
      {
        "id": 4,
        "brand": "Adidas",
        "mainImgSRC": "./img/Adidas/woman/1 1.jpg",
        "pictures": "./img/Adidas/woman/1 2.jpg",
        "sex": "Woman",
        "model": "Snike2",
        "sizes": "6.5, 7, 8",
        "colors": "wite black yellow",
        "price": 120,
        "likes": 0
      },
      
      {
        "id": 5,
        "brand": "Adidas",
        "mainImgSRC": "./img/Adidas/woman/2 1.jpg",
        "pictures": "./img/Adidas/woman/2 2.jpg ./img/Adidas/woman/1 3.jpg ./img/Adidas/woman/1 4.jpg",
        "sex": "Woman",
        "model": "RunBoost",
        "sizes": "7, 7.5",
        "colors": "MistyRose",
        "price": 75,
        "likes": 0
      },
      
      {
        "id": 6,
        "brand": "Asics",
        "mainImgSRC": "./img/Asics/woman/1 1.jpg",
        "pictures": " ",
        "sex": "Woman",
        "model": "Blast XX",
        "sizes": "6, 7, 8",
        "colors": "MistyRose lightgreen",
        "price": 120,
        "likes": 0
      },
      
      {
        "id": 7,
        "brand": "Asics",
        "mainImgSRC": "./img/Asics/woman/2 1.jpg",
        "pictures": " ",
        "sex": "Woman",
        "model": "Shtorm",
        "sizes": "7.5, 8, 8.5",
        "colors": "dodgerblue gold",
        "price": 110,
        "likes": 0
      },
      
      {
        "id": 8,
        "brand": "Asics",
        "mainImgSRC": "./img/Asics/man/1 1.jpg",
        "pictures": " ",
        "sex": "Man",
        "model": "Boost 3",
        "sizes": "9, 9.5, 10",
        "colors": "sandybrown",
        "price": 155,
        "likes": 0
      },
      
      {
        "id": 9,
        "brand": "Asics",
        "mainImgSRC": "./img/Asics/man/2 1.jpg",
        "pictures": " ",
        "sex": "Man",
        "model": "Enegry",
        "sizes": "10.5, 11",
        "colors": "orange cyan",
        "price": 120,
        "likes": 0
      },
      
      {
        "id": 10,
        "brand": "Asics",
        "mainImgSRC": "./img/Asics/man/3 1.jpg",
        "pictures": " ",
        "sex": "Man",
        "model": "Swift+",
        "sizes": "10, 10.5",
        "colors": "powderblue lime black",
        "price": 85,
        "likes": 0
      },
      
      {
        "id": 11,
        "brand": "Saucony",
        "mainImgSRC": "./img/Saucony/woman/1 1.jpg",
        "pictures": " ",
        "sex": "Woman",
        "model": "Octopus",
        "sizes": "6.5, 7, 7.5",
        "colors": "Turquoise",
        "price": 80,
        "likes": 0
      },
      
      {
        "id": 12,
        "brand": "Saucony",
        "mainImgSRC": "./img/Saucony/woman/2 1.jpg",
        "pictures": " ",
        "sex": "Woman",
        "model": "Speedy cherry",
        "sizes": "7, 7.5, 8",
        "colors": "DarkRed gray",
        "price": 90,
        "likes": 0
      },
      
      {
        "id": 13,
        "brand": "Saucony",
        "mainImgSRC": "./img/Saucony/woman/3 1.jpg",
        "pictures": " ",
        "sex": "Woman",
        "model": "Gel +",
        "sizes": "7, 7.5, 8",
        "colors": "statetle yellow",
        "price": 115,
        "likes": 0
      },
      
      {
        "id": 14,
        "brand": "Saucony",
        "mainImgSRC": "./img/Saucony/man/1 1.jpg",
        "pictures": " ",
        "sex": "Man",
        "model": "Boost +",
        "sizes": "8.5, 9, 9.5, 10, 10.5",
        "colors": "black blue red",
        "price": 124,
        "likes": 0
      },
      
      {
        "id": 15,
        "brand": "Saucony",
        "mainImgSRC": "./img/Saucony/man/2 1.jpg",
        "pictures": " ",
        "sex": "Man",
        "model": "Boost v2",
        "sizes": "8.5, 9",
        "colors": "blue red",
        "price": 140,
        "likes": 0
      },
      
      {
        "id": 16,
        "brand": "Saucony",
        "mainImgSRC": "./img/Saucony/man/3 1.jpg",
        "pictures": " ",
        "sex": "Man",
        "model": "light gel",
        "sizes": "8.5, 9, 10, 11",
        "colors": "orange gray",
        "price": 155,
        "likes": 0
      },
      
      {
        "id": 17,
        "brand": "Saucony",
        "mainImgSRC": "./img/Saucony/man/4 1.jpg",
        "pictures": " ",
        "sex": "Man",
        "model": "Atlet",
        "sizes": "8.5, 9, 10, 10.5",
        "colors": "gray orange show",
        "price": 120,
        "likes": 0
      },
      
      {
        "id": 18,
        "brand": "Reebok",
        "mainImgSRC": "./img/Reebok/woman/1 1.jpg",
        "pictures": " ",
        "sex": "Woman",
        "model": "Runn k2",
        "sizes": "6, 6.5, 7.5",
        "colors": "black blue",
        "price": 64,
        "likes": 0
      },
      
      {
        "id": 19,
        "brand": "Reebok",
        "mainImgSRC": "./img/Reebok/woman/2 1.jpg",
        "pictures": " ",
        "sex": "Woman",
        "model": "strange",
        "sizes": "6, 7, 7.5",
        "colors": "white gray",
        "price": 75,
        "likes": 0
      },
      
      {
        "id": 20,
        "brand": "Reebok",
        "mainImgSRC": "./img/Reebok/woman/3 1.jpg",
        "pictures": " ",
        "sex": "Woman",
        "model": "boost pro",
        "sizes": "6, 6.5, 7.5, 8",
        "colors": "LightCyan ligjtblue",
        "price": 100,
        "likes": 0
      },
      
      {
        "id": 21,
        "brand": "Reebok",
        "mainImgSRC": "./img/Reebok/man/1 1.jpg",
        "pictures": " ",
        "sex": "Man",
        "model": "street Run",
        "sizes": "8.5, 9, 9.5, 10, 10.5",
        "colors": "gray black olive",
        "price": 124,
        "likes": 0
      },
      
      {
        "id": 22,
        "brand": "Reebok",
        "mainImgSRC": "./img/Reebok/man/2 1.jpg",
        "pictures": " ",
        "sex": "Man",
        "model": "Skit 2",
        "sizes": "8.5, 9, 10, 10.5, 11",
        "colors": "black",
        "price": 110,
        "likes": 0
      },
      
      {
        "id": 23,
        "brand": "Reebok",
        "mainImgSRC": "./img/Reebok/man/3 1.jpg",
        "pictures": " ",
        "sex": "Man",
        "model": "Evolution v1 boost",
        "sizes": "8.5, 9, 10, 10.5, 11",
        "colors": "olive darkgreen gray",
        "price": 95,
        "likes": 0
      },
      
      {
        "id": 24,
        "brand": "Reebok",
        "mainImgSRC": "./img/Reebok/man/4 1.jpg",
        "pictures": " ",
        "sex": "Man",
        "model": "Evolution v2 boost",
        "sizes": " 9, 9.5, 10, 10.5, 11",
        "colors": "gray olive",
        "price": 120,
        "likes": 0
      },
      
      {
        "id": 25,
        "brand": "Nike",
        "mainImgSRC": "./img/Nike/woman/1 1.jpg",
        "pictures": " ",
        "sex": "Woman",
        "model": "Step swift",
        "sizes": "6, 6.5, 7.5, 8, 8.5",
        "colors": "purple gray",
        "price": 130,
        "likes": 0
      },
      
      {
        "id": 26,
        "brand": "Nike",
        "mainImgSRC": "./img/Nike/woman/2 1.jpg",
        "pictures": " ",
        "sex": "Woman",
        "model": "Sand step",
        "sizes": "6, 7, 8",
        "colors": "cyan yellow",
        "price": 120,
        "likes": 0
      },
      
      {
        "id": 27,
        "brand": "Nike",
        "mainImgSRC": "./img/Nike/woman/3 1.jpg",
        "pictures": " ",
        "sex": "Woman",
        "model": "Boosty v7",
        "sizes": "6, 7.5, 8, 8.5",
        "colors": "cyan pink",
        "price": 95,
        "likes": 0
      },
      
      {
        "id": 28,
        "brand": "Nike",
        "mainImgSRC": "./img/Nike/woman/4 1.jpg",
        "pictures": " ",
        "sex": "Woman",
        "model": "Cross limited+",
        "sizes": "15, 16, 16.",
        "colors": "black",
        "price": 140,
        "likes": 0
      },
      
      {
        "id": 29,
        "brand": "Nike",
        "mainImgSRC": "./img/Nike/man/1 1.jpg",
        "pictures": " ",
        "sex": "Man",
        "model": "Enegry elit",
        "sizes": "8.5, 9, 9.5, 10, 10.5, 11",
        "colors": "white red",
        "price": 130,
        "likes": 0
      },
      
      {
        "id": 30,
        "brand": "Nike",
        "mainImgSRC": "./img/Nike/man/2 1.jpg",
        "pictures": " ",
        "sex": "Man",
        "model": "Fly pro",
        "sizes": "8.5, 9, 10, 10.5, 11",
        "colors": "white black",
        "price": 140,
        "likes": 0
      },
      
      {
        "id": 31,
        "brand": "Nike",
        "mainImgSRC": "./img/Nike/man/3 1.jpg",
        "pictures": " ",
        "sex": "Man",
        "model": "free step",
        "sizes": "8.5, 9, 10, 10.5, 11",
        "colors": "sand black",
        "price": 100,
        "likes": 0
      },
      
      {
        "id": 32,
        "brand": "Nike",
        "mainImgSRC": "./img/Nike/man/4 1.jpg",
        "pictures": " ",
        "sex": "Man",
        "model": "Extreme pro Max",
        "sizes": "8.5, 9, 10, 10.5, 11, 11.5",
        "colors": "blue orange",
        "price": 160,
        "likes": 0
      },
      
      {
        "id": 33,
        "brand": "Nike",
        "mainImgSRC": "./img/Nike/man/5 1.jpg",
        "pictures": " ",
        "sex": "Man",
        "model": "Marapone S",
        "sizes": "8.5, 9, 10, 10.5, 11",
        "colors": "gray lightblue",
        "price": 130,
        "likes": 0
      },
      
      {
        "id": 34,
        "brand": "Hoka",
        "mainImgSRC": "./img/Hoka/woman/1 1.jpg",
        "pictures": " ",
        "sex": "Woman",
        "model": "Split",
        "sizes": "5, 6, 6.5, 7, 7.5",
        "colors": "orange pink",
        "price": 140,
        "likes": 0
      },
      
      {
        "id": 35,
        "brand": "Hoka",
        "mainImgSRC": "./img/Hoka/woman/2 1.jpg",
        "pictures": " ",
        "sex": "Woman",
        "model": "Street road",
        "sizes": "6, 6.5, 7, 7.5",
        "colors": "Bisque lightgreen",
        "price": 170,
        "likes": 0
      },
      
      {
        "id": 36,
        "brand": "Hoka",
        "mainImgSRC": "./img/Hoka/woman/3 1.jpg",
        "pictures": " ",
        "sex": "Woman",
        "model": "Gel boost2",
        "sizes": "6, 6.5, 7, 7.5, 8",
        "colors": "LightSalmon lightblue",
        "price": 180,
        "likes": 0
      },
      
      {
        "id": 37,
        "brand": "Hoka",
        "mainImgSRC": "./img/Hoka/man/1 1.jpg",
        "pictures": " ",
        "sex": "Man",
        "model": "Road dream",
        "sizes": "8.5, 9, 9.5, 10, 10.5, 11",
        "colors": "BurlyWood",
        "price": 200,
        "likes": 0
      },
      
      {
        "id": 38,
        "brand": "Hoka",
        "mainImgSRC": "./img/Hoka/man/2 1.jpg",
        "pictures": " ",
        "sex": "Man",
        "model": "SpeedRun",
        "sizes": "8.5, 9, 9.5, 10, 10.5",
        "colors": "orange blue black",
        "price": 210,
        "likes": 0
      },
      
      {
        "id": 39,
        "brand": "Hoka",
        "mainImgSRC": "./img/Hoka/man/3 1.jpg",
        "pictures": " ",
        "sex": "Man",
        "model": "Light form 2",
        "sizes": "8.5, 9, 9.5, 10, 10.5",
        "colors": "black white",
        "price": 190,
        "likes": 0
      },
      
      {
        "id": 40,
        "brand": "Brooks",
        "mainImgSRC": "./img/Brooks/woman/1 1.jpg",
        "pictures": " ",
        "sex": "Woman",
        "model": "Statick",
        "sizes": "5, 6, 6.5, 7",
        "colors": "white pink",
        "price": 120,
        "likes": 0
      },
      
      {
        "id": 41,
        "brand": "Brooks",
        "mainImgSRC": "./img/Brooks/woman/2 1.jpg",
        "pictures": " ",
        "sex": "Woman",
        "model": "Escape",
        "sizes": "5, 6, 6.5, 7",
        "colors": "black",
        "price": 90,
        "likes": 0
      },
      
      {
        "id": 42,
        "brand": "Brooks",
        "mainImgSRC": "./img/Brooks/man/1 1.jpg",
        "pictures": " ",
        "sex": "Man",
        "model": "Speed step",
        "sizes": "8.5, 9, 9.5, 10, 10.5, 11",
        "colors": "darkblue black blue",
        "price": 124,
        "likes": 0
      },
      
      {
        "id": 43,
        "brand": "Brooks",
        "mainImgSRC": "./img/Brooks/man/2 1.jpg",
        "pictures": " ",
        "sex": "Man",
        "model": "Elastick",
        "sizes": "9.5, 10, 10.5, 11",
        "colors": "darkcyan white black",
        "price": 100,
        "likes": 0
      },
      
      {
        "id": 44,
        "brand": "New Balance",
        "mainImgSRC": "./img/NewBalance/man/1 1.jpg",
        "pictures": " ",
        "sex": "Man",
        "model": "Sticky blick",
        "sizes": "8.5, 9.5, 10, 10.5, 11",
        "colors": "black blue",
        "price": 130,
        "likes": 0
      },
      
      {
        "id": 45,
        "brand": "New Balance",
        "mainImgSRC": "./img/NewBalance/woman/2 1.jpg",
        "pictures": " ",
        "sex": "Woman",
        "model": "Str 2",
        "sizes": "5, 6, 6.5, 7, 7.5",
        "colors": "lightpink",
        "price": 80,
        "likes": 0
      },
      
      {
        "id": 46,
        "brand": "New Balance",
        "mainImgSRC": "./img/NewBalance/woman/1 1.jpg",
        "pictures": " ",
        "sex": "Woman",
        "model": "spider",
        "sizes": "5, 6, 6.5, 7, 8",
        "colors": "darkcyan",
        "price": 90,
        "likes": 0
      },
      
      {
        "id": 47,
        "brand": "New Balance",
        "mainImgSRC": "./img/NewBalance/man/2 1.jpg",
        "pictures": " ",
        "sex": "Man",
        "model": "Endo",
        "sizes": "9.5, 10, 10.5, 11",
        "colors": "Yellow red",
        "price": 90,
        "likes": 0
      }
    ],
    filteredSneakers: [       
      0,
      1000
    ],
    loginedUser: {
      "status": "",
      "userName": "",
      "mail": "",
      "password": "",
      "userBonus": "",
      "phone": ""
    },
    changed : "false"
  },
  
  registrationForm: {
    store : [
      { 
        'email' : ' ',
        'password' : ' ',
        'reapetPassword' : ' ',
        'errorMessage': ' '
      }
    ],
    updateEmail : (inputEmail) => {
      state.registrationForm.store.email = inputEmail;
      rerenderEntairTree();
    },
    updatePassword : (inputPass) => {
      state.registrationForm.store.password = inputPass;
      rerenderEntairTree();
    },
    updateReapetedPassword : (inputRPass) => {
      state.registrationForm.store.reapetPassword = inputRPass;
      rerenderEntairTree();
    },
    createErrorMessage : (message) => {
      state.registrationForm.store.errorMessage = message;
      rerenderEntairTree();
    },
    checkPassVal : () => {
      let passValidationExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
      if(state.registrationForm.store.password.match(passValidationExp)){
        return true;
      }else{
        state.registrationForm.createErrorMessage('Password is not valid!')
      }
    },
    checkEmailVal : () => {
      for(let i=0; i< state._store.users.length; i++){
        if(state.registrationForm.store.email === state._store.users[i].mail){
          
          state.registrationForm.createErrorMessage('This email is alredy used!');
          
        } else {
          let emailValidationExp = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/;
          if(state.registrationForm.store.email.match(emailValidationExp))
          {
            return true;
          } else {
            state.registrationForm.createErrorMessage('Email is not valid!')
          }
        }
      }
    },
    cleanFields : () => {
      for (let val in state.registrationForm.store){
        state.registrationForm.store[val] = "";
      }
      rerenderEntairTree();
    }
  },
  loginForm: {
    store: [
      {
        'loginStatus': "",
        'loginValue': "",
        'passwordValue': "",
        'errorMessage': "",
        'clientId': "27121478558-kdbcqf6guvfls7dp8omg7atg59lvbrtr.apps.googleusercontent.com",
        'clientSecret': "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",
        'passEmail': ""
      }
    ],
    
    createErrorMessage: () =>{
      state.loginForm.store.errorMessage = "Wrong email or password!";
      rerenderEntairTree();
    },
    
    changeUserStatus: (status) => {
      if(status === "Admin"){
        state.loginForm.store.loginStatus = "Admin";
      }else{
        state.loginForm.store.loginStatus = "Costumer";
      } 
      rerenderEntairTree();
    },
    
    updateLogin: (inputLogin) => {
      state.loginForm.store.loginValue = inputLogin;
      rerenderEntairTree();
    },
    
    updatePassword: (inputPassword) => {
      state.loginForm.store.passwordValue = inputPassword;
      rerenderEntairTree();
    },
    
    changePasswordEmail: (inputPassEmail) => {
      state.loginForm.store.passEmail = inputPassEmail;
      rerenderEntairTree();
    },
    loginOut: () => {
      
      for (let val in state._store.loginedUser){
        state._store.loginedUser[val] = "";
      }
      
      for (let val in state.loginForm.store){
        state.loginForm.store[val] = "";
      }
      rerenderEntairTree();
    },
    
    cleanFields : () => {
      for (let val in state.loginForm.store){
        state.loginForm.store[val] = "";
      }
      rerenderEntairTree();
    }
    
  },
  filter:{
    getFilteredBrands : (value, value2) =>{
      if(value2){
        state._store.filteredSneakers[0]=parseInt(value);
        state._store.filteredSneakers[1]=parseInt(value2);
      } else
      if(state._store.filteredSneakers.indexOf(value)> -1){
        
        const index = state._store.filteredSneakers.indexOf(value);
        state._store.filteredSneakers.splice(index,1);
      }
      else {
        state._store.filteredSneakers.push(value);
      }
     
      rerenderEntairTree();
    },
    filteredPrice:[
     
    ],
    setFilterPrice: (value) =>{
      if(state.filter.filteredPrice.indexOf(value)> -1){
        
        const index = state.filter.filteredPrice.indexOf(value);
        
      }
      else {
        state.filter.filteredPrice.push(value);
      }
      
    }
  },
  
  dispatch(action){
    
    state._store.users = usersReducer(state._store.users, state.registrationForm, action);
    state._store.loginedUser = loginedUserReducer(state, state.loginForm, action);
    state._store.brands = brandsReducer(state._store.brands, action,);
    state._store.sneakers = sneakersReducer(state._store.sneakers, action);
    state._store.filteredSneakers = filteredSneakersReducer(state, action);
    
    rerenderEntairTree();
    
    if(state._store.changed === true){
      return true;
    }
  }
} 

export const stateStatus = (observer) => {
  rerenderEntairTree = observer;
}

export default state; 
  
