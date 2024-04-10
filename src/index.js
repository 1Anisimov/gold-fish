import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import {Router} from "react-router-dom"
import history from './app/utils/history';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // <React.StrictMode>
  <>
  <Router history={history}>
  <App />
  </Router>
  </>
  
  // </React.StrictMode>
);

reportWebVitals();
