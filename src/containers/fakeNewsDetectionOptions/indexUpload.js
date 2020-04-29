import React, { Component } from 'react'
import { Form, InputGroup, Button, Col } from 'react-bootstrap'
import { Divider } from 'semantic-ui-react'
import { FilePond, registerPlugin} from 'react-filepond';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import 'filepond/dist/filepond.min.css';
import './indexUpload.css'

registerPlugin(FilePondPluginFileValidateType);
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
                      <div id="uploadInstructionsHow">
                        <div id="uploadHowLabel">
                          <h3>How to upload:</h3>
                        </div>
                        <div id="uploadHowText">
                          <ul>
                            <li>
                              The first section below is where you can copy and paste a URL. 
                              <ul>
                                <li>Then you'll click the red upload button.</li>
                              </ul>
                            </li>
                            <li>
                              The second section below is where you can upload a photo, pdf, video, etc. from your own computer.  
                              <ul>
                                <li>No need to click any buttons to upload.</li>
                              </ul>
                            </li>
                            <li>
                              At this time, you can only upload one thing at a time. Which means:
                              <ul>
                                <li>You can not upload both a url and a file.</li>
                                <li>you can not upload more than one file.</li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div id="uploadInstructionsWhat">
                        <div id="uploadWhatLabel">
                          <h3>What to upload:</h3>
                        </div>
                        <div id="uploadWhatText">
                          <p>
                            Text explaining What to upload
                          </p>
                        </div>
                      </div>
                    </div>
                    <div id="uploadBodyForm">
                      <h2 id="uploadBodyFormLabel">Upload your news below</h2>
                      <Form id="uploadBodyFormWrapper">
                        <Form.Group as={Col} md="8" controlId="urlUpload">
                          <Form.Label id="urlUploadLabel">Upload a url</Form.Label>
                          <InputGroup className="mb-3">
                            <Form.Control
                              type="text"
                              placeholder="Paste in your url"
                              aria-label="User upload url"
                              // aria-describedby="userUploadUrl"
                              defaultValue=""
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            <InputGroup.Append>
                              <Button variant="danger">Upload</Button>
                            </InputGroup.Append>
                          </InputGroup>
                        </Form.Group>
                        <h5>Or</h5>
                        <Form.Group as={Col} md="8" controlId="filePondUpload">
                          <Form.Label id="fileUploadLabel">Upload a file</Form.Label>
                          <FilePond
                            allowFileTypeValidation={true}
                            acceptedFileTypes={['application/* doc','image/*','video/*']}
                            labelFileTypeNotAllowed={'Sorry, this file type is not accepted yet'}
                          />
                        </Form.Group>
                      </Form>
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
