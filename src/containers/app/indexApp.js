import React from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import {Navbar, Nav, Form, Button, FormControl} from 'react-bootstrap'
import Home from '../home'
import About from '../about'
import './indexApp.css'

const App = () => (
  <div id="containerApp">
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav variatn="pills" className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/features">Features</Nav.Link>
      <Nav.Link href="/about">About</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
    </Navbar>
    <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
    </Router>

    <main>
      
    </main>
  </div>
)

export default App
