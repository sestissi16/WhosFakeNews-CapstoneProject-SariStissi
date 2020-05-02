import React from 'react'
import { Button } from 'react-bootstrap'
import './indexExtension.css'

const Extension = () => (
    <div id="extensionPageContainer">
        <div id="extensionContent">
            <div id="extensionHeader">
                <h3><strong><em>Download the extension so we'll do all the hard work for you!</em></strong></h3>
            </div>
            <div id="extensionBody">
                <div id="extensionInfoSection">
                    <div id="extensionInfoTitle">
                        <h2>How does this extension work?</h2>
                    </div>
                    <div id="extensionInfoText">
                        <ol id="extensionInfoList">
                            <li class="extensionInfoListItem">First, you'll need to download the Who's Fake News extension.</li>
                            <li class="extensionInfoListItem">Then, once it is installed click on the icon to turn it on.</li>
                            <li class="extensionInfoListItem">
                                Now, when you are looking at something in a tab, the extension will check it. 
                                The results will show up on the side of the window over what you're viewing.
                            </li>
                        </ol>
                    </div>
                    <div id="extensionInfoTutorialLink">
                        <h4 id="extensionInfoTutorialTitle">
                            For more help, go to the Tutorials section. 
                            You can get there by clicking the button here or in the navigation bar under Resources.
                        </h4>
                        <Button href="/MoreResources/Tutorials" variant="danger" id="extensionTutorialButton">Go to Tutorials</Button>
                    </div>
                </div>
                <div id="extensionDownloadSection">

                </div>
                <div id="extensionPreviewSection">

                </div>
            </div>
        </div>
    </div>
)

export default Extension