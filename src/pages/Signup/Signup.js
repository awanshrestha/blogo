import React from 'react';
import '../Login/login.css';

function Signup(){
    return(
        <div className = 'loginpage'>
            <div className = 'login-box'>
                <h1><span className = 'logo'>blogo</span> Universe</h1>
                <h2>Welcome to the family 👋</h2>
                <form action="">
                    <input type="text" placeholder='Enter your email...'/>
                    <br/>
                    <div className = 'personal-details'>
                        <input type="text" placeholder='First Name...'/>
                        <input type="text" placeholder='Last Name...'/>
                    </div>
                    <input type="password" placeholder='Password...'/>
                    <br/>
                    <input type="submit" value="Sign up"/>
                </form>
                <div>
                    <p className = 'login-unavailable'>We will be accepting new sign ups very very soon. <br/> Stay tuned.</p>
                </div>
                <div>
                    <p>Already got an account? - <a href="#">Log in</a></p>
                </div>
            </div>
        </div>
    );
}

export default Signup;