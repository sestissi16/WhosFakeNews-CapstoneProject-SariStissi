import React from 'react'
import LoginForm from '../starter-kits/LoginForm/LoginForm';
import Logo from  '../../Media/CS488-capstoneIcon-Circle-WhiteBackground-120x120.png';
import './indexLogin.css'

const Login = () => (
    <div id="loginPageContainer">
        <div id="loginContent">
            <LoginForm 
                backgroundColor="#49111C"
                heading="Welcome back to the Who's Fake News Project!"
                headingColor="white"
                subheadingColor="white"
                subheading="Enter your email and password and we'll get you signed in."
            />
        </div>
    </div>
)

export default Login