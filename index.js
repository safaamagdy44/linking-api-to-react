import React from 'react';
import ReactDOM from 'react-dom/client';

import '../node_modules/bootstrap/dist/css/bootstrap.rtl.min.css' 
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'

import App from './App';
import './style.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


