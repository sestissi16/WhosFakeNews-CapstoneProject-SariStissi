import React from 'react'
import { Button } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import HomepageImage from '../../Media/CS488-MicrophoneCartoonOfNews-Cropped.png'
// import FakeNewsImage from '../../Media/CS488-smallFreeFakeNewsImage.jpg'
// import Logo from '../../Media/CS488-capstoneIcon-Circle-WhiteBackground-120x120.png'
import './indexHome.css'

const Home = props => (
  <div id="homePageContainer">
    <div id="homeContent">
      <div id="homeHeader">
        <h6 id="homeHeaderMessage"><strong>Set up a free account for more Fake News Detection features</strong></h6>
        <Button href="/SignUp" variant="danger" id="homeHeaderSignUp">Sign Up</Button>
      </div>
      <div id="homeBody">
        <div id="homeBodyContent">
          <div id="homeBodyTop">
            <div id="homeBodyText">
              <div id="homeBodyTopTitle">
                <h1 id="homeBodyTopTitleHeader">Welcome to the <br/> Who's Fake News Project!</h1>
              </div>
            </div>
            <div id="homeBodyTopImage">
              <img id="homeBodyTopNews" src={HomepageImage} alt="cartoon image of news podium with arms with microphones sticking out from it" fluid/>
            </div>
          </div>
          <div id="homeBodyGetStarted">
            <div id="homeBodyGetStartedTagline">
              <h2 id="homeBodyGetStartedTaglineText">We're here to help you find fake news!</h2>
              <h3 id="homeBodyGetStartedWaysText">Here are some ways you can get started:</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Home