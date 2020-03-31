import React from 'react';
import './footer.css'

const appStoreDownload = require('../../assets/images/apple.png');
const playStoreDownload = require('../../assets/images/googleplay.png');
const logo = require('../../assets/images/blogo-logo.png');

function Footer(){
    return(
        <div className = 'footer'>
            <div className = 'container'>
                <div className = 'footer-left'>
                    <div>
                        <img src={logo} alt="Blogo Logo" className = 'blogo-logo'/>
                    </div>
                    <div className = 'footer-left-first'>
                        <a href="#">Get Started</a>
                        <a href="#">Suscribe</a>
                    </div>
                    <div className = 'footer-left-second'>
                        <a href="#">About Blogo</a>
                        <a href="#">Terms & Policies</a>
                        <a href="#">Privacy</a>
                    </div>
                    <div className = 'footer-left-social'>
                        
                    </div>
                    <div className = 'copyright-text'>
                        © Blogo 2020
                    </div>
                </div>
                <div className = 'footer-right'>
                    <div>
                        <h4>Get the Blogo App</h4>
                    </div>
                    <div>
                        <img src={appStoreDownload} alt="Download From App Store" className = 'download-from-store'/>
                    </div>
                    <div>
                        <img src={playStoreDownload} alt="Download From Play Store" className = 'download-from-store'/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;