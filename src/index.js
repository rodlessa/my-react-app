import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './components/css/mainpage.css';
import NavbarComp from './components/navbar';
import { MainPage } from './components/mainpage';
import { Contato } from './components/form';
import { Portfolio } from './components/portfolio';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MainPage />
    <Portfolio />
    <Contato />
    <NavbarComp />
  </React.StrictMode>
);
