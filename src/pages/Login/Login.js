import React from 'react';
import './login.css'

function Login(){
    return(
        <div className = 'loginpage'>
            <div className = 'login-box'>
                <h1><span className = 'logo'>blogo</span> Universe</h1>
                <h2>Welcome back 👋</h2>
                <form action="">
                    <input type="text" placeholder='Enter your email...'/>
                    <br/>
                    <input type="password" placeholder='Password...'/>
                    <br/>
                    <input type="submit" value="Log in"/>
                </form>
                <div>
                    <p className = 'login-unavailable'>Sorry, this service is unavailable temporarily.</p>
                </div>
                <div className = 'forgot-password'>
                    <p>Forgot your password?</p>
                    <a href="#">Reset Password</a>
                </div>
                <div>
                    <p>Need to create an account? - <a href="#">Sign up</a></p>
                </div>
            </div>
        </div>
    );
}

export default Login;