import React from 'react';
import './sidebar.css';

function Sidebar(){
    return(
       <div>
           <div className = 'suscribe-box-blogpage'>
                <h3>Suscribe to our newsletter!</h3>
                <p>Thousands of users use Blogo to get the insights on different topics.</p>
                <form action="">
                    <input type="email" placeholder = 'Enter your email...'/>
                    <input type="submit" value = 'Suscribe'/>
                </form>
           </div>
           <div className = 'search-the-blog-sidebar'>
               <form action="">
                    <input type="text" placeholder = 'Search the blog...'/>
                    <input type="submit" value = '🔍'/>
               </form>
           </div>
           <div className = 'featured-posts-sidebar'>
               <h3>Featured Posts</h3>
               <a href="#">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa, quidem! </a>
               <hr className = 'blogpage-sidebar-line'/>
               <a href="#">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa, quidem! </a>
               <hr className = 'blogpage-sidebar-line'/>
               <a href="#">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa, quidem! </a>
           </div>
       </div>
    );
}

export default Sidebar;