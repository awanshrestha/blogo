import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css'

function Navbar(){
    return(
        <div>
            <nav className='top-nav-bar'>
                <Link to = '/' style={{ textDecoration: 'none' }}>
                    <h1 className = 'logo'>blogo</h1>
                </Link>
                <ul className = 'nav-links'>
                    <Link to = '/blog'>
                        <li>Blog</li>
                    </Link>
                    <Link to = '/about'>
                        <li>About</li>
                    </Link> 
                    <Link to = '/login'>
                        <li>Sign In</li>
                    </Link> 
                    <Link to = '/signup'>
                        <li className = 'get-started-button'>Get Started</li>
                    </Link> 
                </ul>
                
            </nav>
        </div>
    );
}

export default Navbar;