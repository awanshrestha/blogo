import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Blog from './pages/Blog/Blog';
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
            <Route path = '/blog' component = {Blog}/>
            <Route path = '/about' component = {About}/>
            <Route path = '/login' component = {Login}/>
            <Route path = '/signup' component = {Signup}/>
          </Switch>  
          <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
