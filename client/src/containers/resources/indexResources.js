import React from 'react'
import { Button } from 'react-bootstrap'
import './indexResources.css'


const Resources = () => (
    <div id="resourcesPageContainer">
        <div id="resourcesContent">
            <div id="resourcesHeader">
                <h3 id="resourcesHeaderMessage"><strong><em>This page has links to other resources with have for you</em></strong></h3>
            </div>
            <div id="resourcesBody">
                <div id="resourcesBodyContent">
                <div id="resourcesBodyDescriptions">
                        <div id="resourcesBodyDescriptionsTitle">
                            <h1>We explain each of the different resources we have below:</h1>
                        </div>
                        <div id="resourcesBodyDescriptionsInfo">
                            <div id="resourcesBodyDescriptInfoFaq">
                                <h5 id="resourcesBodyInfoFaqTitle">FAQ</h5>
                                <p class="resourcesBodyDescriptInfoText">
                                    The FAQ will be a place for common questions that people have and their answers. 
                                    This way everyone else can see the answer too.
                                </p>
                                <Button href="/Resources/FAQ" variant="light" id="resourcesFaqButton">Go to FAQ</Button>
                            </div>
                            <div id="resourcesBodyDescriptInfoTutorials">
                                <h5 id="resourcesBodyInfoTutorialsTitle">Tutorials</h5>
                                <p class="resourcesBodyDescriptInfoText">
                                    The Tutorials page will have better information on how to use the website. 
                                    If there's something confusing, the tutorials may help.
                                </p>
                                <Button href="/Resources/Tutorials" variant="light" id="resourcesTutorialsButton">Go to Tutorials</Button>
                            </div>
                            <div id="resourcesBodyDescriptInfoFeedback">
                                <h5 id="resourcesBodyInfoFeedbackTitle">Feedback Page</h5>
                                <p class="resourcesBodyDescriptInfoText">
                                    The Feedback page is where you can send us a message. 
                                    That message could be a question, a note about wanting to help, or a suggestion on what to change or add. 
                                </p>
                                <Button href="/Resources/Feedback" variant="light" id="resourcesFeedbackButton">Go to Feedback</Button>
                            </div>
                            <div id="resourcesBodyDescriptInfoMoreResources">
                                <h5 id="resourcesBodyInfoMoreResourcesTitle">More Fake News Resources</h5>
                                <p class="resourcesBodyDescriptInfoText">
                                    The More Fake News Resources gives you links to other ways to find fake news that are out there. 
                                    The link could be to another website, project, or document.
                                </p>
                                <Button href="/Resources/MoreResources" variant="light" id="resourcesMoreResourcesButton">Go to More Resources</Button>
                            </div>
                        </div>
                        <div id="resourcesBodyDescriptionsNotice">
                            <div id="resourcesBodyNoticeNotFinished">
                                <h4 id="resourcesBodyNotice1"><strong>Note 1:</strong></h4>
                                <div id="resourcesBodyNotice1Text">
                                    <h3 id="resourcesBodyNoticeNotFinishedTitle">
                                        Not everything is working as of 04/30/2020
                                    </h3>
                                    <p class="resourcesBodyNoticeText">
                                        Not all the resources pages work yet.<br/>
                                        We still need to create Tutorials and add them.<br/>
                                        We need to get more feedback from people to add Frequently Asked Questions.<br/>
                                        And the feedback form doesn't send emails quiet yet.<br/>
                                        This project is still in progress and updates will be coming soon.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default Resources