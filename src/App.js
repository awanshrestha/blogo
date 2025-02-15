import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';
import Home from './pages/Home/Home';
import Blog from './pages/Blog/Blog';
import Post from './pages/Post/Post';
import About from './pages/About/About';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';

function App() {
  return (
    <BrowserRouter>
      <div>
          <Navbar />
          <Switch>
            <Route path = '/' exact component = {Home}/>
            <Route path = '/blog/:slug' component = {Post}/>
            <Route path = '/blog' component = {Blog}/>
            <Route path = '/about' component = {About}/>
            <Route path = '/login' component = {Login}/>
            <Route path = '/signup' component = {Signup}/>
            <Route path="*" component={NotFoundPage} />
          </Switch>  
          <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
