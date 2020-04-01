import React from 'react';
import './blog.css';
import Sidebar from '../../components/Sidebar/Sidebar';
import Blogtile from '../../components/Blogtile/Blogtile';
const backgroundSvg = require('../../assets/svg/header.svg');

function Blog(){
    return(
        <div className = 'blogpage'>
            <div className = 'background-svg'>
                <img src={backgroundSvg} alt="Read Blogs SVG"/>
                <div className = 'blog-image-center-text'>
                    <h1>Welcome to the BLOGO</h1>
                    <p>Write and Unleash your Power to Inspire</p>
                </div>
            </div>

            <div className = 'blogpage-container'>
                <div className = 'blogpage-featured-blogs'>
                    <div className = 'blog-tile'>
                        <Blogtile/>
                        <Blogtile/>
                        <Blogtile/>
                    </div>
                </div>
                <div className = 'blogpage-sidebar'>
                    <Sidebar/>
                </div>
            </div>
           
        </div>
    );
}

export default Blog;