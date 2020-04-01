import React from 'react'
import { Button } from 'react-bootstrap'
import FakeNewsImage from '../../Media/CS488-freeFakeNewsImage.jpg'
import './indexHome.css'

const Home = props => (
  <div id="homePageContainer">
    <div id="homeContent">
      <div id="homeHeader">
        <h6 id="homeHeaderMessage"><strong><em>Start uncovering fake news now by creating a FREE account</em></strong></h6>
        <Button href="/login" variant="danger" id="homeHeaderSignUp">Sign Up</Button>
      </div>
      <div id="homeBody">
        <div id="homeLeftSideBar"></div>
        <div id="homeBodyContent">
          <div id="homeBodyTop">
            <div id="homeBodyTopImage">
              <img id="homeFakeNewsImage" src={FakeNewsImage} alt="a desk with a computer where the words fake news displayed" />
              <p id="homeBodyTopCredit">Credit: Image by 
                <a href="https://pixabay.com/users/pixel2013-2364555/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1909821">
                  S. Hermann &amp; F. Richter
                </a> from 
                <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1909821">
                  Pixabay
                </a>
              </p>
            </div>
            <p id="homeBodyTopTitle"><strong>Find out whether something is Fake News with ease</strong></p>
          </div>
        </div>
        <div id="homeRightSideBar"></div>
      </div>
    </div>
  </div>
)

export default Home