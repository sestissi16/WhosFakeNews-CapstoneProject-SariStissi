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
                                <p>Where you can upload files or paste URL links and we'll check them for fake news</p>
                                <Button href="/Options/Uploads" variant="light" id="OptionsUploadButton">Go to Uploads</Button>
                            </div>
                            <div id="optionsBodyDescriptInfoAlerts">
                                <p>Info about News Alerts</p>
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