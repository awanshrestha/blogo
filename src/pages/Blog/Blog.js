import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import './blog.css';
import blogPost from '../../data/blog.json';
import Sidebar from '../../components/Sidebar/Sidebar';
import Blogtile from '../../components/Blogtile/Blogtile';
const backgroundSvg = require('../../assets/svg/header.svg');

function Blog(){
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const posts = blogPost.data;
        setPosts(posts);
    }, [posts]);

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
                        {
                            posts.map( post => {
                                return(
                                    <Link key={post.id} to={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
                                        <Blogtile heading = {post.blogTitle} date = {post.postedOn} author={post.author} imageToShow={post.blogImage} wordsToShow={post.blogText.slice(0,200)+'...'}/>
                                    </Link>
                                )
                            })
                        }
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