import React from 'react'
import AuthorImage from '../../Media/MeAtAcropolis.jpg'
import './indexAbout.css'


const About = () => (
    <div id="aboutPageContainer">
        <div id="aboutContent">
            <div id="aboutHeader">
                <h3 id="aboutHeaderMessage"><strong><em>How did this project come to be and why?</em></strong></h3>
            </div>
            <div id="aboutBody">
                <div id="aboutBodyContent">
                    <div id="aboutBodyAuthor">
                        <div id="aboutBodyAuthorPicture">
                            <img id="aboutBodyAuthorImage" src={AuthorImage} alt="headshot of project creator at the Acropolis in Athens" fluid/>
                        </div>
                        <div id="aboutBodyAuthorProfile">
                            <div id="aboutBodyAuthorProfileTitle">
                                <h1><strong>Sari Stissi</strong></h1>
                                <h2>Creator of this project</h2>
                            </div>
                            <div id="aboutBodyAuthorProfileBio">
                                <p>More info about me and the capstone project</p>
                            </div>
                        </div>
                    </div>
                    <div id="aboutBodyMissionVision">
                        <div id="aboutBodyMissionVisionTitle">
                            <h2>The Mission and Vision of the Project</h2>
                        </div>
                        <div id="aboutBodyMissionSection">
                            <div id="aboutBodyMissionTitle">
                                <h3><strong>Our Mission</strong></h3>
                            </div>
                            <div id="aboutBodyMissionText">
                                <p>
                                We help stop the dangerous spread of fake news. 
                                We do this by giving everyone access to tools that will help them find fake news easier.
                                </p>
                            </div>
                        </div>
                        <div id="aboutBodyVisionSection">
                            <div id="aboutBodyVisionTitle">
                                <h3><strong>Our Vision</strong></h3>
                            </div>
                            <div id="aboutBodyVisionText">
                                <p>
                                    In the future:<br/>
                                    <ul id="aboutBodyVisionList">
                                        <li class="aboutBodyVisionListItems">We will completely stop the use of fake news as a tool to hurt and misinform people.</li>
                                        <li class="aboutBodyVisionListItems">People all over the world will use our tools without needing to know English.</li>
                                        <li class="aboutBodyVisionListItems">Our tools will be accessible to all no matter what. </li>
                                        <li class="aboutBodyVisionListItems">People will be able to check for fake news in any language.</li>
                                        <li class="aboutBodyVisionListItems">We will find fake news close to 100% of the time.</li>
                                    </ul>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default About