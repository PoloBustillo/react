import React from 'react'
import {Button, Form } from 'semantic-ui-react'

export default class FormEmail extends React.Component{
  state={mail:'',password:''}
  handleChangeMail = (event)=>{this.setState({mail:event.target.value})};
  handleChangePass = (event)=>{this.setState({password:event.target.value})};
  render(){
    return(
      <Form onSubmit={() => this.props.onSubmit(this.state.mail, this.state.password)}>
        <Form.Input icon='mail' onChange={this.handleChangeMail} iconPosition='left' type="email" label='Email' placeholder='email' />
        <Form.Input icon='lock' onChange={this.handleChangePass} iconPosition='left' label='Password' type='password' />
        <Button content={this.props.buttonName} primary/>
      </Form>
    );
  }

}
