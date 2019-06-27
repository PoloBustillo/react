import React, { Component } from 'react'
import {connect} from 'react-redux';
import FormSocials from './FormSocials';
import {
  setLoginModalVisibility,
  setRegisterModalVisibility,
  loginUserEmail
} from '../../actions';
import {
  Modal,
  Divider,
  Grid,
  Segment,
  Message,
  Button,
  Form
} from 'semantic-ui-react'

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null
};

class Login extends Component {

  state= {...INITIAL_STATE};

  onChange = event => {
    this.setState({[event.target.name]: event.target.value})
  }

  onSubmit = (event, email, password) => {
    event.preventDefault();
    this.setState({...INITIAL_STATE});
    this.props.loginUserEmail(email,password)
  }

  render() {
    const {
      email,
      password,
      error
    } = this.state;

    const isInvalid = password=== '' ||
          email === '';
    return (
      <div>
        <Modal
          size={'mini'}
          dimmer={'blurring'}
          open={this.props.open}
          onClose={()=>this.props.setLoginModalVisibility(false)}>
          <Modal.Header>Por favor introduce tus credenciales</Modal.Header>
          <Modal.Content>
            <Modal.Description>
            <Segment placeholder>
              <Grid columns={2}>
                <Grid.Column verticalAlign='middle'>
                  <Form onSubmit={(event) => this.onSubmit(event, email, password)}>
                    <Form.Input
                      name='email'
                      value={this.state.email}
                      icon='mail'
                      onChange={this.onChange}
                      iconPosition='left'
                      type="email"
                      label='Email'
                      placeholder='email' />
                    <Form.Input
                      name='password'
                      value={this.state.password}
                      icon='lock'
                      onChange={this.onChange}
                      iconPosition='left'
                      label='Password'
                      type='password' />
                      <Message
                        hidden={this.props.errorMsg==''}
                        header='Error'
                        content={this.props.errorMsg}
                      />
                    <Button content='Acceder'
                    loading={this.props.spinner}
                    disabled={isInvalid} primary/>
                  </Form>
                </Grid.Column>
                <FormSocials/>
              </Grid>
              <Divider vertical>Or</Divider>
            </Segment>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Message>
              No tienes cuenta?
              <a href='#'
                  onClick={()=>{this.props.setLoginModalVisibility(false);
                              this.props.setRegisterModalVisibility(true)}}>
                  Crea tu cuenta
              </a>
            </Message>
          </Modal.Actions>
        </Modal>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    open:state.modalsReducer.openLogin,
    spinner:state.modalsReducer.spinner,
    errorMsg:state.modalsReducer.errorCode
  }
}

const mapDispatchToProps = {
  setLoginModalVisibility,
  setRegisterModalVisibility,
  loginUserEmail
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
