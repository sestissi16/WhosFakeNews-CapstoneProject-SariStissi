import React from 'react'
import { Form, InputGroup, Button, Col } from 'react-bootstrap'
import { Divider } from 'semantic-ui-react'
import './indexLoginOrSignUp.css'

const LoginSignUp = () => (
    <div id="loginPageContainer">
        <div id="loginLeftSideBar"></div>
        <div id="loginContent">
            <div id="loginHeader">
                <h2>Pick up where you left off</h2>
                <h2>or</h2> 
                <h2>Get started finding fake news</h2>
            </div>
            <div id="loginBody">
                <div id="loginSection">
                    <h3>Login</h3>
                    <Form id="loginForm">
                        <Form.Group controlId="formGroupEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Label>OR</Form.Label>
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
                        <Divider />
                        <Form.Group controlId="formGroupPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Button type="submit">Login</Button>
                    </Form>
                </div>
                <div id="signUpSection">
                    <h3>Sign-Up</h3>
                    <Form id="signUpForm">
                        <Form.Row>
                            <Form.Group as={Col} md="6" controlId="signInFirstName">
                                <Form.Label>First name</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="First name"
                                    defaultValue="John"
                                />
                            </Form.Group>
                            <Form.Group as={Col} md="6" controlId="signInLastName">
                                <Form.Label>Last name</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Last name"
                                    defaultValue="Doe"
                                />
                            </Form.Group>
                        </Form.Row>
                        <Divider />
                        <Form.Row>
                            <Form.Group as={Col} md="8" controlId="signInUsername">
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
                        </Form.Row>
                        <Divider />
                        <Form.Row>
                            <Form.Group as={Col} md="6" controlId="signUpPasswordInput">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="text" placeholder="Choose a password" required />
                            </Form.Group>
                            <Form.Group as={Col} md="6" controlId="signUpPasswordCheck">
                                <Form.Label>Retype Password</Form.Label>
                                <Form.Control type="text" placeholder="Retype Password" required />
                            </Form.Group>
                        </Form.Row>
                        <Button type="submit">Sign Up</Button>
                    </Form>
                </div>
            </div>
        </div>
        <div id="loginRightSideBar"></div>
    </div>
)

export default LoginSignUp