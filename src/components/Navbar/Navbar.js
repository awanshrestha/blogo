import React from 'react';
import {Link, withRouter } from 'react-router-dom';
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

      changeNavColor = () => {
        switch(window.location.pathname){
          case '/':
            return '#effaff';
          case '/blog':
            return '#effaff';
          case '/blog/:slug':
            return 'white';
          case '/about':
            return '#effaff';
          default:
            return 'white';
        }
      }   

    render(){
        const navcolor = this.changeNavColor();
        const whiteboxShadow = (navcolor === 'white') ? "0 2px 10px rgba(0,0,0,.1)" : "none";
        let browserwidth = window.innerWidth;

        const headerTop = {
                position: "sticky",
                top: "0",
                backgroundColor: navcolor,
                zIndex: "100",
                boxShadow: whiteboxShadow
            }

        const headerScrolled = {
                boxShadow: "0 2px 10px rgba(0,0,0,.1)",
                position: "sticky",
                top: "0",
                transition: "all 1s ease-in-out",
                backgroundColor: "#fff",
                zIndex: "100"
            }

        return(
                // <div className = { this.state.isTop ? 'header-top' : 'header-scrolled' }>
                <div style = { this.state.isTop ? headerTop : headerScrolled }>
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
                        <Link to = {(browserwidth > 700) ? '/signup' : '/blog'}>
                            <li className = 'get-started-button'>Get Started</li>
                        </Link> 
                    </ul>
                    
                </nav>
                </div>
        );
    }
}

export default withRouter(Navbar);