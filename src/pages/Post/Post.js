import React, { useState, useEffect }  from 'react';
import './post.css';
import Sidebar from '../../components/Sidebar/Sidebar';

const avatar = require('../../assets/images/avatar.jpg');
const image = require('../../assets/images/unnamed.jpg');

function Post(props){

    // const [post, setPost] = useState({
    //     id: "" ,
    //     blogCategory: "" ,
    //     blogTitle : "" ,
    //     postedOn: "" ,
    //     author: "" ,
    //     blogImage: "" ,
    //     blogText: ""
    // });
    // const [slug, setSlug] = useState('');

    // if(post.blogImage == "") return null;

    return(
        <div>
            <div className = 'blogpost'>
                <div className = 'blogpost-container'>
                    <h1>how to do it?</h1>
                    <div className = 'author-and-date-of-blog'>
                        <img src={avatar} alt="Author" className = 'author-avatar'/>
                        <div className = 'author-and-date-of-blog-text'>
                            <p className = 'author-name'>
                                Bruce Wayne
                            </p>
                            <p className = 'blog-date'>
                                April 1, 2020
                            </p>
                        </div>
                    </div>
                    <img src={image} alt=""/>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo rerum tempore voluptatibus iste commodi ullam nam molestias ut in eos veritatis consequatur voluptas, iure earum facere dignissimos blanditiis eligendi hic tenetur ab modi repellat incidunt a cupiditate? Minus facilis nobis impedit voluptas amet quae, hic placeat ipsa quia ad eaque earum eveniet odio dolorum harum eos modi libero laudantium necessitatibus corporis temporibus quo. Nobis, earum atque quasi perferendis sequi, officia consequuntur dolor, dolores dolore ab ea ex nam est fugit pariatur voluptatibus? In atque itaque adipisci quasi cumque reiciendis facere recusandae libero amet consequuntur nemo tempora quia iste ex facilis rem, earum hic! Saepe deserunt soluta magnam et quam, eius magni porro totam hic ipsum doloremque temporibus tempora possimus cum. Repellat dolorem similique expedita, nesciunt sapiente illum repellendus laborum ullam vel libero non deserunt, error reprehenderit quaerat illo, aspernatur id doloremque enim nam accusantium magni quasi eaque. Tenetur mollitia rerum ullam soluta veritatis, repudiandae dolorem aperiam itaque voluptates iure magnam dicta ipsa recusandae illum beatae iusto repellendus amet, est consectetur dolorum inventore voluptatem sed numquam pariatur. Ab aut in impedit eius! Sed laborum repellendus suscipit adipisci enim quasi dolorem natus consequuntur praesentium dignissimos, iste quo accusamus odio libero error doloremque.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Post;