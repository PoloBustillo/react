import React, { Component } from 'react'
import {connect} from 'react-redux';
import {setRegisterModalVisibility} from '../../actions';
import FormSocials from './FormSocials';
import {Modal, Divider, Grid, Segment, Form, Button} from 'semantic-ui-react'

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
  verificationEmailSend: false
};


class Register extends Component {

  state= {...INITIAL_STATE};

  onChange = event => {
    this.setState({[event.target.name]: event.target.value})
  }

  onSubmit = event => {
    event.preventDefault();
  }


  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error,
      verificationEmailSend
    } = this.state;

    const isInvalid = passwordOne !== passwordTwo ||
          passwordOne === '' ||
          email === '' ||
          username === '';

    return (
      <div>
        <Modal
          size={'mini'}
          dimmer={'blurring'}
          open={this.props.open}
          onClose={()=>this.props.setRegisterModalVisibility(false)}>
          <Modal.Header>Crear cuenta nueva</Modal.Header>
          <Modal.Content>
            <Modal.Description>
            <Segment placeholder>
              <Grid columns={2}>
                <Grid.Column verticalAlign='middle'>
                  <Form onSubmit={() => this.onSubmit}>
                    <Form.Input
                      name='username'
                      value={this.state.username}
                      icon='user'
                      onChange={this.onChange}
                      iconPosition='left'
                      type="text"
                      label='Usuario'/>
                    <Form.Input
                      name='email'
                      value={this.state.email}
                      icon='mail'
                      onChange={this.onChange}
                      iconPosition='left'
                      type="email"
                      label='Email'
                      placeholder='email'/>
                    <Form.Input
                      name='passwordOne'
                      value={this.state.passwordOne}
                      icon='lock'
                      onChange={this.onChange}
                      iconPosition='left'
                      label='Password'
                      type='password'/>
                    <Form.Input name='passwordTwo'
                      value={this.state.passwordTwo}
                      icon='lock'
                      onChange={this.onChange}
                      iconPosition='left'
                      label='Password'
                      type='password'
                      placeholder='Confirma tu password'/>
                    <Button
                      disabled={isInvalid}
                      content='Crear Cuenta'
                      primary/>
                  </Form>
                </Grid.Column>
                <FormSocials/>
              </Grid>

              <Divider vertical>Or</Divider>
            </Segment>

            </Modal.Description>
          </Modal.Content>
        </Modal>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {open:state.modalsReducer.openRegister}
}

const mapDispatchToProps = {
  setRegisterModalVisibility
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
