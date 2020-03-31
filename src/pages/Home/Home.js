import React from 'react';
import Topics from './Topics';
import './home.css';

const writingBlog = require('../../assets/images/writing-blog.png');
const community = require('../../assets/images/community.png');

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
           <div>
               <Topics/>
           </div>
           <div className = 'call-to-action'>
               <a href="#" className = 'call-to-action-start'>Get Started</a> <br/> <br/>
               <p>Already have an account? <a href="#"> Sign in</a></p>
           </div>
           <div className = 'join-the-writers'>
               <div className = 'writers-photo'>
                   <img src={community} alt="Community of writers"/>
               </div>
               <div>
                   <h3>Join the community of writers</h3>
                   <h5>Blogo is more than just a blog. We are a family. And we heartly welcome you to our family.</h5>
               </div>
               <div>
                    <form>
                        <input type="text" placeholder = 'First name'/>
                        <br/>
                        <input type="email"  placeholder = 'Enter your email'/>      
                        <br/>
                        <input type="submit" value="Join now" />
                    </form>
               </div>
           </div>
        </div>
    );
}

export default Home;