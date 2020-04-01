import React from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import {Navbar, Nav, Form, Button, FormControl} from 'react-bootstrap'
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
          <Nav.Link href="/features">Features</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
    

    <main>
      <Router>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
      </Router>
    </main>
  </div>
)

export default App
