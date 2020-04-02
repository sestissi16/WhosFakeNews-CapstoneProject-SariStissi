import React from 'react'
import { Form, InputGroup } from 'react-bootstrap'
import './indexLogin.css'

const LoginSignUp = () => (
    <div id="loginPageContainer">
        <div id="loginLeftSideBar"></div>
        <div id="loginContent">
            <div id="loginHeader">
                <h1>Login or Sign Up</h1>
            </div>
            <div id="loginBody">
                <div id="loginSection">
                    <Form>
                        <Form.Group controlId="formGroupEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group controlId="groupCustomUsername">
                            <Form.Label>Username</Form.Label>
                            <InputGroup>
                                <InputGroup.Prepend>
                                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                type="text"
                                placeholder="Username"
                                aria-describedby="inputGroupPrepend"
                                required
                                />
                            </InputGroup>
                        </Form.Group>
                        <Form.Group controlId="formGroupPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                    </Form>
                </div>
                <div id="signUpSection">
                    <p>Placeholder text for the sign up section</p>
                </div>
            </div>
        </div>
        <div id="loginRightSideBar"></div>
    </div>
)

export default LoginSignUp