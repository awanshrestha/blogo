import React from 'react';
import {Link} from 'react-router-dom';
import './navbar.css'

class Navbar extends React.Component{
    state = {
        isTop: true,
      };

      componentDidMount() {
        document.addEventListener('scroll', () => {
          const isTop = window.scrollY < 80;
          if (isTop !== this.state.isTop) {
              this.setState({ isTop })
          }
        });
      }

    render(){
        return(
                <div className = { this.state.isTop ? 'header-top' : 'header-scrolled' }>
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
}

export default Navbar;