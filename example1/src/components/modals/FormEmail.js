import React from 'react'
import { Input, Button, Form } from 'semantic-ui-react'

export default class FormEmail extends React.Component{

  render(){
    return(
      <Form>
        <Form.Input icon='mail' iconPosition='left' type="email" label='Email' placeholder='email' />
        <Form.Input icon='lock' iconPosition='left' label='Password' type='password' />
        <Button content={this.props.buttonName} primary />
      </Form>
    );
  }

}
