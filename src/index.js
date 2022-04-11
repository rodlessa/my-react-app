import $ from 'jquery';
import Popper from 'popper.js';
import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import './index.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Sobre from './Sobre';
import Home from './home';

ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
  <Routes>
  <Route path="/" element={<Home />} />
    <Route path="sobre" element={<Sobre />} />
  </Routes>
</BrowserRouter>
</React.StrictMode>


  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
