import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './Navbar';
import Footer from './footer';
import SobreInfo from './sobreinfo';

const root = ReactDOM.createRoot(document.getElementById('root'));

const Sobre = () => {
    return (
        root.render(
            <React.StrictMode>
            <Navbar />
            <SobreInfo />
            <Footer />
            </React.StrictMode>
    ))
}

export default Sobre;