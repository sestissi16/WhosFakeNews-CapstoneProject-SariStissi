import React from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import {Navbar, Nav, Form, Button, FormControl, NavDropdown} from 'react-bootstrap'
import Home from '../home'
import About from '../about'
import './indexApp.css'
import NavbarCollapse from 'react-bootstrap/NavbarCollapse'

const App = () => (
  <div id="containerApp">
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="/">Who's Fake News?</Navbar.Brand>
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
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>

    <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
    </Router>
  </div>
)

export default App
