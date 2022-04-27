import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Barnav from './Navbar';
import './index.css';
import Portfolio from './portfolio';
import Footer from './footer';
import App2 from './app2';

const root = ReactDOM.createRoot(document.getElementById('root'));
const Home = () =>{
    return (
        // Initial render
        root.render(
        <React.StrictMode>
        <Barnav />
        <App2/>
        <Portfolio />
        <Footer />
        </React.StrictMode>
        )
    )
}

export default Home;