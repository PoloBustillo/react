import React, { Component } from 'react'
import FormEmail from './FormEmail';
import FormSocials from './FormSocials';
import {Modal, Divider, Grid, Segment } from 'semantic-ui-react'
import * as firebase from 'firebase/app';
import 'firebase/auth';

export default class Register extends Component {

  state={open:false};
  close = () => this.setState({ open: false })

  onSubmitClick = (mail, password) => {
    const auth = firebase.auth();
    auth.createUserWithEmailAndPassword(mail, password)
    console.log(password);
  }

  componentWillReceiveProps(nextProps) {
     // Any time props.email changes, update state.
     if (nextProps.open !== this.props.open) {
       this.setState({
         open: nextProps.open
       });
     }
   }

  render() {
    return (
      <div>
        <Modal size={'mini'}  dimmer={'blurring'} open={this.state.open} onClose={this.close}>
          <Modal.Header>Crear cuenta nueva</Modal.Header>
          <Modal.Content>
            <Modal.Description>
            <Segment placeholder>
              <Grid columns={2}>
                <Grid.Column verticalAlign='middle'>
                 <FormEmail onSubmit={this.onSubmitClick} buttonName="Crear Cuenta"/>
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
