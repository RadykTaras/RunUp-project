import React from 'react';
import sneakers from './sneakers.json';
import ReactDOM from 'react-dom/client';
import App from './components/App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App state={sneakers} />
  </React.StrictMode>
);

