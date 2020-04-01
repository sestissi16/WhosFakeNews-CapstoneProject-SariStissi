import React from 'react'
import { Button } from 'react-bootstrap'
import './indexHome.css'

const Home = props => (
  <div id="homePageContainer">
    <div id="homeLeftSideBar"></div>
    <div id="homeContent">
      <div id="homeHeader">
        <h6 id="homeHeaderMessage"><strong><em>Start uncovering fake news now by creating a FREE account</em></strong></h6>
        <Button href="/login" variant="danger" id="homeHeaderSignUp">Sign Up</Button>
      </div>
      <div id="homeBody">
        <p>Here's more information about this website and what you can do with it.</p>
      </div>
    </div>
    <div id="homeRightSideBar"></div>
  </div>
)

export default Home