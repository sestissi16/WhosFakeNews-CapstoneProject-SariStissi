import React from 'react'
import { Button } from 'react-bootstrap'
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
                                <p>This project started as my final capstone project for the Department of Computer Science at Earlham College. 
                                    I wanted to do something that would help people and so all my preliminary ideas focused on social good. 
                                    I chose to create a website and extension to find fake news in the media because it is an important current issue. 
                                    The news shapes public policy, elections, the stock market/economy, and more in our lives. 
                                    No one is above the harm of fake news, so I wanted to help. 
                                    There are many researchers that tried to find solutions to fake news but their work is not accessible to everyone. 
                                    If people with disabilities or who don't know a lot of English can't use the tool, they will be vulnerable to fake news. 
                                    So this project focuses on stopping the spread of fake news and making it as accessible as possible.
                                </p>
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
                    <div id="aboutBodyContribute">
                        <div id="aboutBodyContributeTitle">
                            <h2>Do you want to help contribute to the project?</h2>
                        </div>
                        <div id="aboutBodyContributeInstructions">
                            <p>
                                Go to the <Button href="/Resources/Feedback" variant="outline-danger">Feedback Page</Button> and write "Contributing to the Project" in the subject line and let us know how you'd like to help.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default About