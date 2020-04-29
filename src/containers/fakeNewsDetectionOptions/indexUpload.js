import React from 'react'
import { FilePond } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import './indexUpload.css'

const Upload = () => (
  <div id="uploadPageContainer">
    <div id="uploadContent">
        <div id="uploadHeader">
            <h3 id="uploadHeaderMessage"><strong><em>Upload what you want to check for fake news</em></strong></h3>
        </div>
        <div id="uploadBody">
            <div id="uploadBodyContent">
                <div id="uploadBodyInstructions">
                  <h1 id="uploadInstructionsTitle">How and what to upload to check for fake news:</h1>
                </div>
                <div id="uploadBodyForm">
                  <FilePond/>
                </div>
                <div id="uploadBodyResults">

                </div>
            </div>
        </div>
    </div>
  </div>
)

export default Upload
