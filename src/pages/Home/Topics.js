import React from 'react';
import './hometopic.css';

function Topics(){
    const topics = ['Technology', 'Health', 'Coronavirus', 'Money', 'Cryptocurrency', 'Science', 'Business', 'Startups' , 'Productivity', 'Programming' , 'Design', 'Artificial Intelligence', 'Data Science']

    return(
        <div>
           <div className = 'home-topics-container'>
               <div className = 'topics-text'>
                    <h3>Expand the horizon of your knowledge.</h3>
               </div>
               <div className = 'topic-list-home'>
                       {topics.map( topic =>{
                           return (
                               <li className = 'topic-in-homepage' key = {topic}>
                                   <a href="#">{topic}</a>
                               </li>
                           )
                       })}
               </div>
               <div className = 'topics-text-bottom'>
                    <h3>Knowledge is Power.
                        <br/>
                        We will help you garner it more.
                    </h3>
               </div>
           </div>
        </div>
    );
}

export default Topics;