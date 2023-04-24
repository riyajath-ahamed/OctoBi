import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom";
import { initialState } from './contex/initialState';
import reducer from './contex/reducer';
import { StateProvider } from './contex/StateProvider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <StateProvider initialState={initialState} reducer={reducer}> 
    <App />
    </StateProvider>
    </Router>

  </React.StrictMode>
);


