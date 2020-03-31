import React from 'react';
import './blog.css';

const backgroundSvg = require('../../assets/svg/header.svg');

function Blog(){
    return(
        <div className = 'blogpage'>
            <div className = 'backgroung-svg'>
                <img src={backgroundSvg} alt="Read Blogs SVG"/>
                <div className = 'blog-image-center-text'>
                    <h1>Welcome to the BLOGO</h1>
                    <p>Write and Unleash your Power to Inspire</p>
                </div>
            </div>
           
        </div>
    );
}

export default Blog;