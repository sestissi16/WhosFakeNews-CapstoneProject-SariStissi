import React from 'react'
import { Button } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import FakeNewsImage from '../../Media/CS488-smallFreeFakeNewsImage.jpg'
import Logo from '../../Media/CS488-capstoneIcon-Circle-WhiteBackground-120x120.png'
import './indexHome.css'

const Home = props => (
  <div id="homePageContainer">
    <div id="homeContent">
      <div id="homeHeader">
        <h6 id="homeHeaderMessage"><strong><em>Set up a free account for more Fake News Detection features</em></strong></h6>
        <Button href="/SignUp" variant="danger" id="homeHeaderSignUp">Sign Up</Button>
      </div>
      <div id="homeBody">
        <div id="homeLeftSideBar"></div>
        <div id="homeBodyContent">
          <div id="homeBodyTop">
            <div id="homeBodyTopTitle">
              <h1>Welcome!</h1>
            </div>
            <div id="homeBodyTopImage">
              <img id="homeBodyTopLogo" src={Logo} alt="logo reads Who's Fake News that is above a question mark where the dot is a newspaper icon" fluid/>
            </div>
            <div id="homeBodyTopInfo">
              <h1>Scroll down to find out how to get started</h1>
            </div>
          </div>
        </div>
        <div id="homeRightSideBar"></div>
      </div>
    </div>
  </div>
)

export default Home