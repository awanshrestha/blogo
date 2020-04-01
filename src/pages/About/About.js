import React from 'react';
import './about.css';

const backgroundSvg = require('../../assets/images/writers-01.png');

function About(){
    return(
        <div className = 'aboutpage'>
            <div className = 'aboutpage-hero'>
                <div className = 'about-backgroung-svg'>
                    <div className = 'about-us-top-text'>
                        <h1>This is BLOGO,
                            <br/>
                            Where your Words get the Wings...
                        </h1>
                    </div>
                    <img src={backgroundSvg} alt="About us"/>  
                    <hr/>
                </div>
            </div>
            <div className = 'about-us-text'>
                <h1>The ultimate universe for readers and writers across the globe.</h1>
                <p>Creating a universe for super creative writers and avid readers is what Blogo does. Whatever your interest is, read and share and get immersed.</p>
            </div>
        </div>
    );
}

export default About;