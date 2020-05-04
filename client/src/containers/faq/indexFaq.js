import React from 'react'
import { Item } from 'semantic-ui-react'
import './indexFaq.css'


const FAQ = () => (
    <div id="faqPageContainer">
        <div id="faqContent">
            <div id="faqHeader">
                <h3 id="faqHeaderMessage"><strong><em>This is the FAQ page for the Who's Fake News Project</em></strong></h3>
            </div>
            <div id="faqBody">
                <div id="faqBodyContent">
                    <div id="faqBodyTitle">
                        <h1>Frequently Asked Questions (FAQ):</h1>
                    </div>
                    <div id="faqBodyList">
                        <div class="faqListCard">
                            <Item.Group divided>
                                <Item>
                                    <Item.Content>
                                        <Item.Header as='a'>Question 1</Item.Header>
                                        <Item.Meta>
                                            <span className='faq'>Coming soon!</span>
                                        </Item.Meta>
                                        <Item.Description>
                                            This is where we would have the answer to your question!
                                        </Item.Description>
                                    </Item.Content>
                                </Item>

                                <Item>
                                    <Item.Content>
                                        <Item.Header as='a'>Question 2</Item.Header>
                                        <Item.Meta>
                                            <span className='faq'>Coming soon!</span>
                                        </Item.Meta>
                                        <Item.Description>
                                            This is where we would have the answer to your question!
                                        </Item.Description>
                                    </Item.Content>
                                </Item>

                                <Item>
                                    <Item.Content>
                                        <Item.Header as='a'>Question 3</Item.Header>
                                        <Item.Meta>
                                            <span className='faq'>Coming soon!</span>
                                        </Item.Meta>
                                        <Item.Description>
                                            This is where we would have the answer to your question!
                                        </Item.Description>
                                    </Item.Content>
                                </Item>

                                <Item>
                                    <Item.Content>
                                        <Item.Header as='a'>Question 4</Item.Header>
                                        <Item.Meta>
                                            <span className='faq'>Coming soon!</span>
                                        </Item.Meta>
                                        <Item.Description>
                                            This is where we would have the answer to your question!
                                        </Item.Description>
                                    </Item.Content>
                                </Item>

                            </Item.Group>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default FAQ