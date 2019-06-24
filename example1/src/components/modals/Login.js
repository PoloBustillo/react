import React, { Component } from 'react'
import FormEmail from './FormEmail';
import FormSocials from './FormSocials';
import { Input, Button, Modal, Icon,
   Divider, Form, Grid, Segment } from 'semantic-ui-react'

export default class Login extends Component {
  state={open:false};

  close = () => this.setState({ open: false })

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
          <Modal.Header>Por favor introduce tus credenciales</Modal.Header>
          <Modal.Content>
            <Modal.Description>
            <Segment placeholder>
              <Grid columns={2}>
                <Grid.Column verticalAlign='middle'>
                   <FormEmail buttonName="Acceder"/>
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
