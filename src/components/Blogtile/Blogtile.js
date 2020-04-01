import React from 'react';
import './blogtile.css';

function Blogtile(props){

    return(
        <div className = 'blogtile'>
            <div className = 'blogtile-container'>
                <h1>{props.heading}</h1>
                <p> by &nbsp;
                    <span className = 'authorname-blogtile'>
                        {props.author}
                    </span>
                    on &nbsp;
                    <span className = 'blogdate-blogtile'>
                        {props.date}
                    </span>
                </p>
                <img src={require('../../assets/images/' + props.imageToShow)} alt="Blog Post Title"/>
                <p className = 'blogtile-blog-content'>
                    {props.wordsToShow}
                </p>
            </div>
        </div>
    );
}

export default Blogtile;