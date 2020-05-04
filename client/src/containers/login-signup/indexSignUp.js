import React from 'react'
import CreateAccountForm from '../starter-kits/CreateAccountForm/CreateAccountForm';
import Logo from  '../../Media/CS488-capstoneIcon-Circle-WhiteBackground-120x120.png';
import './indexSignUp.css'

const SignUp = () => (
    <div id="signUpPageContainer">
        <div id="signUpContent">
            <CreateAccountForm 
                heading="Create An Account"
                subheading="Enter a username, email address, and password below"
                image={Logo}
                backgroundColor="#CFEAED"
            />
        </div>
    </div>
)

export default SignUp