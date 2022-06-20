import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Main from './Main/Main';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = (props) => {
  return (
    <BrowserRouter>
      <Header />
      <Main state={props.state}/>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
