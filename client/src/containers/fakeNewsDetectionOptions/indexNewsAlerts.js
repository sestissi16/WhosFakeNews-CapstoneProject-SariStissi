import React from 'react'
import { Form, InputGroup, Button, Col, DropdownButton, FormControl, Dropdown } from 'react-bootstrap'
import './indexNewsAlerts.css'

const NewsAlerts = () => (
    <div id="newsAlertsPageContainer">
        <div id="newsAlertsContent">
            <div id="newsAlertsHeader">
                <h3><strong><em>Get News Alerts with Fake News Results even when you're away!</em></strong></h3>
            </div>
            <div id="newsAlertsBody">
                <div id="newsAlertsInfo">
                    <h2 id="newsAlertsInfoTitle">How does this work?</h2>
                    <ol id="newsAlertsInfoList">
                        <li class="newAlertsInfoListItems">
                            Sign in and navigate back to this page. (If you're already signed in, go to the next step)
                        </li>
                        <li class="newAlertsInfoListItems">
                            Choose what topics, people, or events you want to find news about.
                            Those topics, events, or people are keywords.
                        </li>
                        <li class="newAlertsInfoListItems">
                            Add those keywords you came up with in step 2 below and click on save.
                        </li>
                        <li class="newAlertsInfoListItems">
                            We will email you when we find something that relates to the words you added and have checked it for fake news.
                        </li>
                    </ol>
                </div>
                {/* Have the section below only show up if the user is signed in, have a different div made in the future that explains that they need to sign up to see this */}
                <div id="newsAlertsSelection">
                    <h1>News Alerts Control Panel</h1>
                    <div id="newsAlertsSelectionContainer">
                        <div id="newsAlertsAddAndSearch">
                            <o>Placeholder for where you can add keywords and search through results</o>
                            <InputGroup>
                                <FormControl
                                placeholder="Enter specific filter"
                                aria-label="Specific filter entry"
                                />
                                <DropdownButton
                                as={InputGroup.Append}
                                variant="outline-dark"
                                title="Filter Type"
                                id="newsAlertsFilterDropdown"
                                >
                                    <Dropdown.Item >Title</Dropdown.Item>
                                    <Dropdown.Item >Date</Dropdown.Item>
                                    <Dropdown.Item >Result</Dropdown.Item>
                                </DropdownButton>
                                <InputGroup.Append>
                                    <Button variant="danger">Filter</Button>
                                </InputGroup.Append>
                            </InputGroup>
                            <InputGroup id="searchInputGroup">
                                <Form.Control
                                placeholder="Search"
                                aria-label="Search for results"
                                />
                                <InputGroup.Append>
                                    <Button variant="danger">Search</Button>
                                </InputGroup.Append>
                            </InputGroup>
                        </div>
                        <div id="newsAlertsView">
                            <div id="newsAlertsViewKeywords">
                                <p>
                                    Placeholder for where you can view the keywords you've already added.
                                    You'll also be able to delete keywords here
                                </p>
                            </div>
                            <div id="newsAlertsViewResults">
                                <p>Placeholder for where you can see all the results of fake news checks
                                    on the news relating to the keywords<br />
                                    It will have the title, the keyword(s)  it relates to, the date found and checked, the Results
                                    and part of the details showing depending on the size of the website<br />
                                    You will be able to scroll through them as there are more. It will be organized by most recent first
                                    but I will have different filter options the search bar so people can choose.<br />
                                </p>
                            </div>
                        </div>
                    </div>
                    <div id="newsAlertsNotifyMethod">
                        <p>
                            Placeholder for where you can choose how you want to be notified. 
                            The default is email because that's what users use to sign up
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default NewsAlerts