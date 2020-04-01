import React, { useState, useEffect }  from 'react';
import './post.css';
import blogPost from '../../data/blog.json';

function Post(props){

    const [post, setPost] = useState({
        id: "" ,
        blogCategory: "" ,
        blogTitle : "" ,
        postedOn: "" ,
        author: "" ,
        authorImage: "",
        blogImage: "" ,
        blogText: ""
    });
    const [slug, setSlug] = useState('');

    useEffect(() => {
        const slug = props.match.params.slug;
        const post = blogPost.data.find(post => post.slug == slug);
        setPost(post);
        setSlug(slug)
    }, [post, props.match.params.slug]);

    console.log(post.authorImage);

    return(
        <div>
            <div className = 'blogpost'>
                <div className = 'blogpost-container'>
                    <h1>{post.blogTitle}</h1>
                    <div className = 'author-and-date-of-blog'>
                        <img src={require('../../assets/images/' + 'avatar.jpg')} alt="Author" className = 'author-avatar'/>
                        <div className = 'author-and-date-of-blog-text'>
                            <p className = 'author-name'>
                                {post.author}
                            </p>
                            <p className = 'blog-date'>
                                {post.postedOn}
                            </p>
                        </div>
                    </div>
                    <img src={require('../../assets/images/unnamed.jpg')} alt=""/>
                    <p>
                        {post.blogText}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Post;