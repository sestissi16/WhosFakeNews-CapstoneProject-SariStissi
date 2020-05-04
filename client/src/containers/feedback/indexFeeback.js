import React from 'react'
import { Form, Input, TextArea, Button, Select } from 'semantic-ui-react'
import './indexFeedback.css'


const Feedback = () => (
    <div id="feedbackPageContainer">
        <div id="feedbackContent">
            <div id="feedbackHeader">
                <h6 id="feedbackHeaderMessage"><strong><em>Feedback Page</em></strong></h6>
            </div>
            <div id="feedbackBody">
                <div id="feedbackBodyContent">
                    <div id="feedbackEmailForm">
                        <Form>
                            <Form.Group widths='equal'>
                                <Form.Field
                                    id='form-input-control-first-name'
                                    control={Input}
                                    label='First name'
                                    placeholder='First name'
                                />
                                <Form.Field
                                    id='form-input-control-last-name'
                                    control={Input}
                                    label='Last name'
                                    placeholder='Last name'
                                />
                            </Form.Group>
                            <Form.Field
                                id='form-input-control-email'
                                control={Input}
                                label='Email'
                                placeholder='joe@gmail.com'
                                // error={{
                                //     content: 'Please enter a valid email address',
                                //     pointing: 'below',
                                // }}
                            />
                            <Form.Field
                                id='form-input-control-subject'
                                control={Input}
                                label='Subject Line'
                                placeholder='Write what you wanted to contact us about'
                            />
                            <Form.Field
                                id='form-textarea-control-body'
                                control={TextArea}
                                label='Email body'
                                placeholder='Where you can write whatever you wanted to send us'
                            />
                            <Form.Field
                                id='form-button-control-public'
                                control={Button}
                                content='Send'
                                label='Send Form'
                            />
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default Feedback