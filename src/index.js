import React from 'react';
import state, {stateStatus} from './state';
import ReactDOM from 'react-dom/client';
import App from './components/App';


const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntairTree = () =>{
  root.render(
    <React.StrictMode>
      <App state={state} />
    </React.StrictMode>
  );
}

rerenderEntairTree();
 
stateStatus(rerenderEntairTree);
