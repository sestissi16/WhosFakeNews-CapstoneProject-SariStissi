import React from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import {Navbar, Nav, Form, Button, FormControl, NavDropdown} from 'react-bootstrap'
import Home from '../home/indexHome'
import Upload from '../fakeNewsDetectionOptions/indexUpload'
import NewsAlerts from '../fakeNewsDetectionOptions/indexNewsAlerts'
import Login from '../login-signup/indexLogin'
import SignUp from '../login-signup/indexSignUp'
import Extension from '../fakeNewsDetectionOptions/indexExtension'
import FAQ from '../faq/indexFaq'
import Feedback from '../feedback/indexFeeback'
import PastResults from '../pastResults/indexPastResults'
import MoreResources from '../moreResources/indexMoreResources'
import Tutorials from '../tutorials/indexTutorials'
import About from '../about/indexAbout'
import Resources from '../resources/indexResources'
import Options from '../options/indexOptions'
import Logo from '../../Media/CS488-capstoneIcon-Circle-WhiteBackground-NoTitle-30x30png.png'
import { FaRegNewspaper, FaRegQuestionCircle } from 'react-icons/fa'
import './indexApp.css'
import NavbarCollapse from 'react-bootstrap/NavbarCollapse'


const App = () => (
  <div id="containerApp">
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top" id="navBarItem">
      <Navbar.Brand href="/"> 
        <img
          alt="icon"
          src={Logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
        Who's Fake News?
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav variant="pills" className="mr-auto">
          <Nav.Link href="/About">About</Nav.Link>
          <NavDropdown title="Detection Options" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/Options">Detection Options Main Page</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/Options/Upload">Upload</NavDropdown.Item>
            <NavDropdown.Item href="/Options/NewsAlerts">News Alerts</NavDropdown.Item>
            <NavDropdown.Item href="/Options/Extension">Extension for detection</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/PastResults">Detection Results Log</Nav.Link>
          <NavDropdown title="Resources" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/Resources">Resources Main Page</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/Resources/FAQ">FAQ</NavDropdown.Item>
            <NavDropdown.Item href="/Resources/Tutorials">Tutorials</NavDropdown.Item>
            <NavDropdown.Item href="/Resources/MoreResources">More Fake News Resources</NavDropdown.Item>
            <NavDropdown.Item href="/Resources/Feedback">Feedback</NavDropdown.Item>
          </NavDropdown>
        </Nav>

        <Button href="/Login" variant="danger" className="float-right" id="navLogin">Login</Button>
        <Button href="/SignUp" variant="danger" className="float-right" id="navSignUp">SignUp</Button>
      </Navbar.Collapse>
    </Navbar>

    <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Options" component={Options} />
        <Route exact path="/Options/Upload" component={Upload} />
        <Route exact path="/Options/NewsAlerts" component={NewsAlerts} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/SignUp" component={SignUp} />
        <Route exact path="/Options/Extension" component={Extension} />
        <Route exact path="/Resources" component={Resources}/>
        <Route exact path="/Resources/FAQ" component={FAQ}/>
        <Route exact path="/Resources/Feedback" component={Feedback}/>
        <Route exact path="/PastResults" component={PastResults}/>
        <Route exact path="/Resources/MoreResources" component={MoreResources}/>
        <Route exact path="/Resources/Tutorials" component={Tutorials}/>
    </Router>
  </div>
)

export default App
