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
                            <img id="aboutBodyAuthorImage" src={AuthorImage} alt="image of Sari Stissi at the Acropolis in Athens" fluid/>
                        </div>
                        <div id="aboutBodyAuthorProfile">
                            <div id="aboutBodyAuthorProfileTitle">
                                <h1><strong>Sari Stissi -</strong></h1>
                                <h2>Creator of this project</h2>
                            </div>
                            <div id="aboutBodyAuthorProfileBio">
                                <p>More info about me and the capstone project</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default About