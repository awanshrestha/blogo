import React from 'react';
import './blogtile.css';

const blogimage = require('../../assets/images/unnamed.jpg');

function Blogtile(){
    return(
        <div className = 'blogtile'>
            <div className = 'blogtile-container'>
                <h1>How to get yourself safe during quarantine.</h1>
                <p>
                    <span className = 'authorname-blogtile'>
                        Bruce Wayne
                    </span>
                    <span className = 'blogdate-blogtile'>
                        April 9, 2020
                    </span>
                </p>
                <img src={blogimage} alt="Blog Post Title"/>
                <p className = 'blogtile-blog-content'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint architecto reprehenderit fugiat quibusdam vero consequatur iure, officiis accusamus est repellendus officia veritatis excepturi eos perferendis debitis dolorum, eveniet molestias blanditiis. Autem architecto 
                </p>
            </div>
        </div>
    );
}

export default Blogtile;