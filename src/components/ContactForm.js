import React, { Component } from 'react';
import { Form, Input, TextArea, Button, Icon } from 'semantic-ui-react'

class ContactForm extends Component {
  handleButtonClick = () => {
    this.setState((props) => {
      return {

      }
    })
  }

  render() {
    return (
      <Form>
        <Form.Group widths='equal'>
          <Form.Field id='form-input-control-first-name' control={Input} label='First name' placeholder='First name' />
          <Form.Field id='form-input-control-last-name' control={Input} label='Last name' placeholder='Last name' />
        </Form.Group>
        <Form.Group widths='equal'>
          <Form.Field id='form-input-control-email' control={Input} label='Email' placeholder='your@email.com' />
          <Form.Field id='form-input-control-email' control={Input} label='Phone number' placeholder='XXX-XXX-XXXX' />
        </Form.Group>
        <Form.Field id='form-textarea-control-opinion' control={TextArea} label='Request' placeholder='How can I help you?' />
        <Form.Field id='form-button-control-public' control={Button} content='Connect' onClick={this.handleButtonClick}  />
       </Form>
     )
   }
 }

export default ContactForm
