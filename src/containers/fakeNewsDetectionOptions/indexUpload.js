import React, { Component } from 'react'
import { FilePond, registerPlugin} from 'react-filepond';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import 'filepond/dist/filepond.min.css';
import './indexUpload.css'

// registerPlugin(FilePondPluginFileValidateType);
class Upload extends Component {

  render() {
    return (
      <div id="uploadPageContainer">
        <div id="uploadContent">
            <div id="uploadHeader">
                <h3 id="uploadHeaderMessage"><strong><em>Upload what you want to check for fake news</em></strong></h3>
            </div>
            <div id="uploadBody">
                <div id="uploadBodyContent">
                    <div id="uploadBodyInstructions">
                      <h1 id="uploadInstructionsTitle">How and what to upload to check for fake news:</h1>
                      <p>
                        
                      </p>
                    </div>
                    <div id="uploadBodyForm">
                      <h3 id="uploadBodyFormLabel">Upload your news below</h3>
                      {/* <FilePond
                        allowFileTypeValidation={true}
                        acceptedFileTypes={['application/*','image/*','video/*']}
                        labelFileTypeNotAllowed={'Sorry, this file type is not accepted yet'}
                      /> */}
                    </div>
                    <div id="uploadBodyResults">

                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Upload
