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
                                <h5>Uploads</h5>
                                <p>Where you can upload files or paste URL links, and we'll check them for fake news</p>
                                <Button href="/Options/Uploads" variant="light" id="OptionsUploadButton">Go to Uploads</Button>
                            </div>
                            <div id="optionsBodyDescriptInfoAlerts">
                                <h5>News Alerts</h5>
                                <p>Where you can add keywords and topics you want us to keep an eye out for in the news. 
                                    If we find something, we'll check it for you and notify you of the results.</p>
                                <Button href="/Options/NewsAlerts" variant="light" id="OptionsAlertsButton">Go to News Alerts</Button>
                            </div>
                            <div id="optionsBodyDescriptInfoExtension">
                                <p>Info about the Extension</p>
                            </div>
                        </div>
                        <div id="optionsBodyDescriptionsNotice">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default Options