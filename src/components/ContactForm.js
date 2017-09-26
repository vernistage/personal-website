import React, { Component } from 'react';
import { Form, Input, TextArea, Button } from 'semantic-ui-react'
import axios from 'axios';
//
class ContactForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phoneNum: '',
      message: ''
    }
  }

  handleChange = (e) => {
   let newState = {};
   newState[e.target.name] = e.target.value;
   this.setState(newState);
  };

  handleSubmit = (e) => {
   e.preventDefault();
  //  console.log(JSON.stringify(this.state))
   let formData = {
      formSender: this.state.firstName,
      formSender: this.state.lastName,
      formEmail: this.state.email,
      formNum: this.state.phoneNum,
      formMessage: this.state.message
    }

    this.setState({
      firstName: '',
      lastName: '',
      email: '',
      phoneNum: '',
      message: ''
    });

    axios.post('http://www.sarahacolby.com/contact-me', formData)
      .then(function (response) {
       console.log(response);
      })
      .catch(function (error) {
       console.log(error);
      });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group widths='equal'>
          <Form.Field
            id='form-input-control-first-name'
            control={Input}
            label='First name'
            placeholder='First name'
            name = 'firstName'
            onChange={this.handleChange} />
          <Form.Field
            id='form-input-control-last-name'
            control={Input}
            label='Last name'
            placeholder='Last name'
            name = 'lastName'
            onChange={this.handleChange} />
        </Form.Group>
        <Form.Group widths='equal'>
          <Form.Field
            id='form-input-control-email'
            control={Input}
            label='Email'
            placeholder='your@email.com'
            name = 'email'
            onChange={this.handleChange} />
          <Form.Field
            id='form-input-control-email'
            control={Input}
            label='Phone number'
            placeholder='XXX-XXX-XXXX'
            name = 'phoneNum'
            onChange={this.handleChange} />
        </Form.Group>
        <Form.Field
          id='form-textarea-control-opinion'
          control={TextArea}
          label='Request'
          placeholder='How can I help you?'
          name = 'message'
          onChange={this.handleChange} />
        <Form.Field
          id='form-button-control-public'
          control={Button}
          content='Connect' />
       </Form>
     )
   }
 }

export default ContactForm
