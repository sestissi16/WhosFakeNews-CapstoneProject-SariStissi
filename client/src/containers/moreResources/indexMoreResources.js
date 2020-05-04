import React from 'react'
import { Icon, Image, Item, Label } from 'semantic-ui-react'
import PolitifactLogo from '../../Media/politifact-TruthOMeter-Logo.jpg'
import SnopesLogo from '../../Media/snopes-Logo-HomepageScreenshot.png'
import './indexMoreResources.css'


const MoreResources = () => (
    <div id="moreResourcesPageContainer">
        <div id="moreResourcesContent">
            <div id="moreResourcesHeader">
                <h6 id="moreResourcesHeaderMessage"><strong><em>More Resources Page</em></strong></h6>
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
                </div>
            </div>
        </div>
    </div>
)

export default MoreResources