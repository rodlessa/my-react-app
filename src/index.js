import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import Navbar from './Navbar';
import $ from '../node_modules/jquery/dist/jquery';
import Popper from '../node_modules/popper.js/dist/popper';
import reportWebVitals from './reportWebVitals';
import './index.css';
import Portfolio from './portfolio';
import Footer from './footer'
import Button from '@mui/material/Button';
import styled from 'styled-components';
import contact from './contact';
import Techs from './techs';


ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <App />
    <Techs />
    <Portfolio />
    <Footer />
  </React.StrictMode>

  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
