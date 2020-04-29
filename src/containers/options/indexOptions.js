import React from 'react'
import { Button } from 'react-bootstrap'
import './indexOptions.css'


const Options = () => (
    <div id="optionsPageContainer">
        <div id="optionsContent">
            <div id="optionsHeader">
                <h3 id="optionsHeaderMessage"><strong><em>Here are the different options for finding fake news</em></strong></h3>
            </div>
            <div id="optionsBody">
                <div id="optionsBodyContent">
                    <div id="optionsBodyDescriptions">
                        <div id="optionsBodyDescriptionsTitle">
                            <h1>We explain each of the ways we help you find fake news below:</h1>
                        </div>
                        <div id="optionsBodyDescriptionsInfo">
                            <div id="optionsBodyDescriptInfoUploads">
                                <h5 id="optionsBodyInfoUploadsTitle">Uploads</h5>
                                <p class="optionsBodyDescriptInfoText">Where you can upload files of photos, pdfs, videos, and more or paste URL links to websites with the news you want to check. 
                                    Then we'll check them for fake news</p>
                                <Button href="/Options/Uploads" variant="light" id="OptionsUploadButton">Go to Uploads</Button>
                            </div>
                            <div id="optionsBodyDescriptInfoAlerts">
                                <h5 id="optionsBodyInfoAlertsTitle">News Alerts</h5>
                                <p class="optionsBodyDescriptInfoText">Where you can add keywords and topics you want us to keep an eye out for in the news. 
                                    If we find something, we'll check it for you and notify you of the results.</p>
                                <Button href="/Options/NewsAlerts" variant="light" id="OptionsAlertsButton">Go to News Alerts</Button>
                            </div>
                            <div id="optionsBodyDescriptInfoExtension">
                                <h5 id="optionsBodyInfoExtensionTitle">Web Browser Extension</h5>
                                <p class="optionsBodyDescriptInfoText">First, download a browser extension. 
                                    The extension will check if the tab has any info to verify. 
                                    It will show you the results and you don't have to press a thing!</p>
                                <Button href="/Options/Extension" variant="light" id="OptionsExtensionButton">Go to Extension</Button>
                            </div>
                        </div>
                        <div id="optionsBodyDescriptionsNotice">
                            <div id="optionsBodyNoticeFree">
                                <h4 id="optinosBodyNotice1"><strong>Note 1:</strong></h4>
                                <div id="optionsBodyNotice1Text">
                                    <h3 id="optionsBodyNoticeFreeTitle">
                                        Everything is free!<br />
                                        But to be able to notify you, you need to sign-up or log in to use the news alerts.
                                    </h3>
                                    <p class="optionsBodyNoticeText">
                                        The sign-up process is very simple and requires no payment information. 
                                        You will only need a username, email address, and a password.
                                        <br/><br/>
                                        There's a sign-up button on the top right of the navigation bar or you can 
                                        click <Button variant="danger">here</Button>.
                                    </p>
                                </div>
                            </div>
                            <div id="optionsBodyNoticeNotFinished">
                                <h4 id="optinosBodyNotice2"><strong>Note 2:</strong></h4>
                                <div id="optionsBodyNotice2Text">
                                    <h3 id="optionsBodyNoticeNotFinishedTitle">
                                        Not everything is working as of 04/30/2020
                                    </h3>
                                    <p class="optionsBodyNoticeText">
                                        Now, only some websites and uploads will return results for you. 
                                        Other websites and uploads will return what a result would look like in the future with more updates. 
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

export default Options