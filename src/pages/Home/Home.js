import React from 'react';
import './home.css';

const writingBlog = require('../../assets/images/writing-blog.png');

function Home(){
    return(
        <div className = 'homepage'>
           <div className = 'homepage-top-container'>
            <div className = 'homepage-top'>
                <div className = 'homepage-top-left'>
                        <div className = 'big-text'>
                            <h1>
                                Where Best Words are Written that Inspire...
                            </h1>
                        </div>
                        <div className = 'medium-text'>
                            <h2>
                                Get Yourself immersed in the world of Blogo.
                            </h2>
                        </div>
                </div>
                <div className = 'homepage-top-right'>
                        <div className = 'homepage-top-right-box'>
                            <img src={writingBlog} alt="Blogo World" className = 'homepage-top-right-image'/>
                        </div>
                </div>
            </div>
           </div>
        </div>
    );
}

export default Home;