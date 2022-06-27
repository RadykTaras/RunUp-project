import React from 'react';
import state from './state';
import ReactDOM from 'react-dom/client';
import App from './components/App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App state={state} />
  </React.StrictMode>
);

