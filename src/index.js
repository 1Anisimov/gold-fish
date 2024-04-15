import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import {Router} from "react-router-dom"
import history from './app/utils/history';
import { createStore } from './app/store/createStore';
import { Provider } from 'react-redux';


const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore();

root.render(
  // <React.StrictMode>
  <>
  <Provider store={store}>
  <Router history={history}>
  <App />
  </Router>
  </Provider>
  </>
  
  // </React.StrictMode>
);

reportWebVitals();
