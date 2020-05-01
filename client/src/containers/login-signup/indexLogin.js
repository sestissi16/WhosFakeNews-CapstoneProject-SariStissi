import React from 'react'
import { Form, InputGroup, Button, Col } from 'react-bootstrap'
import { Divider } from 'semantic-ui-react'
import './indexLogin.css'

const Login = () => (
    <div id="loginPageContainer">
        <div id="loginLeftSideBar"></div>
        <div id="loginContent">
            <div id="loginHeader">
                <h2>Pick up where you left off</h2>
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
            </div>
        </div>
        <div id="loginRightSideBar"></div>
    </div>
)

export default Login