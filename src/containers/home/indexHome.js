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
                <h1 id="homeBodyTopTitleHeader">
                  Don't know if you can trust what read these days?
                </h1>
              </div>
            </div>
            <div id="homeBodyTopImage">
              <img id="homeBodyTopNews" src={HomepageImage} alt="cartoon image of news podium with arms with microphones sticking out from it" fluid/>
            </div>
          </div>
          <div id="homeBodyGetStarted">
            <div id="homeBodyGetStartedTagline">
              <h2 id="homeBodyGetStartedTaglineText">We have three different ways of finding fake news for you!</h2>
              <h3 id="homeBodyGetStartedWaysText">Here are four ways you can get started:</h3>
            </div>
            <div id="homeBodyGetStartedOptions">
              <div id="homeBodyGetStartedOptionsLearn">
                <h5 id="homeBodyGetStartedOptionsLearnText">
                  <strong>Learn more about this project, who created it, and why</strong>
                </h5>
                <Button href="/About" variant="danger" id="LearnButton">Learn More</Button>
              </div>
              <div id="homeBodyGetStartedOptionsResources">
                <h5 id="homeBodyGetStartedOptionsResourcesText">
                  <strong>Look at Tutorials for the site, the FAQ, or Links to Similar Projects</strong>
                </h5>
                <Button href="/Resources" variant="danger" id="ResourceButton">Resources</Button>
              </div> 
              <div id="homeBodyGetStartedOptionsMethods">
                <h5 id="homeBodyGetStartedOptionsMethodsText">
                  <strong>Look at the three different ways we help you find fake news</strong>
                </h5>
                <Button href="/Options" variant="danger" id="OptionsButton">Options</Button>
              </div>
              <div id="homeBodyGetStartedOptionsSignUp">
                <h5 id="homeBodyGetStartedOptionsSignUpText">
                  <strong>Sign up for personalized fake news results</strong>
                </h5>
                <Button href="/SignUp" variant="danger" id="SignUpButton">Sign Up</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Home