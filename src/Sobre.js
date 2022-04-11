import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import Footer from './footer';
import SobreInfo from './sobreinfo';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

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