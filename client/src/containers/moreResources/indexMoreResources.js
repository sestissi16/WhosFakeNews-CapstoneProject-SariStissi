import React from 'react'
import { Icon, Image, Item, Label } from 'semantic-ui-react'
import { Button } from 'react-bootstrap'
import PolitifactLogo from '../../Media/politifact-TruthOMeter-Logo.jpg'
import SnopesLogo from '../../Media/snopes-Logo-HomepageScreenshot.png'
import './indexMoreResources.css'


const MoreResources = () => (
    <div id="moreResourcesPageContainer">
        <div id="moreResourcesContent">
            <div id="moreResourcesHeader">
                <h3 id="moreResourcesHeaderMessage"><strong><em>
                    Here we'll link you to other people who are also trying to stop fake news!
                </em></strong></h3>
            </div>
            <div id="moreResourcesBody">
                <div id="moreResourcesBodyContent">
                    <div id="moreResourcesBodyList">
                        <Item.Group divided>
                            <Item>
                                <Item.Image 
                                    src={PolitifactLogo} 
                                    alt="Politifact Logo"
                                    id="politifactImage"
                                />

                                <Item.Content>
                                    <Item.Header as='a' href="https://www.politifact.com">Politifact</Item.Header>
                                    <Item.Meta>
                                        <span className='moreResources'>
                                            Click on the Title above to go to their website. 
                                            Click on the tags at the button tell you what type of resource they are.
                                        </span>
                                    </Item.Meta>
                                    <Item.Description>
                                        "Fact-checking journalism is the heart of PolitiFact. 
                                        Our core principles are independence, transparency, fairness, thorough reporting and clear writing. 
                                        The reason we publish is to give citizens the information they need to govern themselves in a democracy."
                                    </Item.Description>
                                    <Item.Extra>
                                        <Label>Fact-checking</Label>
                                    </Item.Extra>
                                </Item.Content>
                            </Item>

                            <Item>
                                <Item.Image 
                                    src={SnopesLogo} 
                                    alt="Snopes logo"
                                    id="snopesImage"
                                />

                                <Item.Content>
                                    <Item.Header as='a' href="https://www.snopes.com">Snopes</Item.Header>
                                    <Item.Meta>
                                        <span className='moreResources'>
                                            Click on the Title above to go to their website. 
                                            Click on the tags at the button tell you what type of resource they are.
                                        </span>
                                    </Item.Meta>
                                    <Item.Description>
                                        "Snopes is the internet’s definitive fact-checking resource.
                                        When misinformation obscures the truth and readers don’t know what to trust, Snopes.com’s 
                                        fact checking and original, investigative reporting lights the way to evidence-based and contextualized analysis. 
                                        We always document our sources so readers are empowered to do independent research and make up their own minds."
                                    </Item.Description>
                                    <Item.Extra>
                                        <Label>Fact-checking</Label>
                                    </Item.Extra>
                                </Item.Content>
                            </Item>

                        </Item.Group>
                    </div>
                    <div id="moreResourcesRecommendations">
                        <div id="moreResourcesRecommenationsTitle">
                            <h2>Do you know of a Fake News finding resource?</h2>
                        </div>
                        <div id="moreResourcesRecommendationContent">
                            <p>
                                Go to the <Button href="/Resources/Feedback" variant="danger">Feedback Page</Button> and 
                                write "Fake News Resource" in the subject line and let us know what you found.
                                <br/>We will check it out and add it if we think it's a good fit.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default MoreResources