import React from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import {Navbar, Nav, Form, Button, FormControl, NavDropdown} from 'react-bootstrap'
import Home from '../home/indexHome'
import Upload from '../fakeNewsDetectionOptions/indexUpload'
import NewsAlerts from '../fakeNewsDetectionOptions/indexNewsAlerts'
import Login from '../login-signup/indexLogin'
import SignUp from '../login-signup/indexSignUp'
import Extension from '../fakeNewsDetectionOptions/indexExtension'
import { FaRegNewspaper, FaRegQuestionCircle } from 'react-icons/fa'
import './indexApp.css'
import NavbarCollapse from 'react-bootstrap/NavbarCollapse'


const App = () => (
  <div id="containerApp">
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top" id="navBarItem">
      <Navbar.Brand href="/"> <FaRegNewspaper /><FaRegQuestionCircle /> Who's Fake News?</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav variant="pills" className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <NavDropdown title="Fake News Detection Options" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/Options/Upload">Upload</NavDropdown.Item>
            <NavDropdown.Item href="/Options/NewsAlerts">News Alerts</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/Options/Extension">Extension for detection</NavDropdown.Item>
          </NavDropdown>
        </Nav>

        <Button href="/Login" variant="danger" className="float-right" id="navLogin">Login</Button>
        <Button href="/SignUp" variant="danger" className="float-right" id="navSignUp">SignUp</Button>
      </Navbar.Collapse>
    </Navbar>

    <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/Options/Upload" component={Upload} />
        <Route exact path="/Options/NewsAlerts" component={NewsAlerts} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/SignUp" component={SignUp} />
        <Route exact path="/Options/Extension" component={Extension} />
    </Router>
  </div>
)

export default App
