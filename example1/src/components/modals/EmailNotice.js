import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../../actions';
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

class EmailNotice extends Component {


  render() {
    const classes = this.props.mobile?'mobile scrolling':'scrolling'
    return (
      <Modal
        open={this.props.open}
        onClose={()=>this.props.actionCreators.setEmailModalVisibility(false)}
        basic
        size='small'
        className={classes}
      >
        <Header icon='mail' content='Un Email se ha enviado' />
        <Modal.Content>
          <h3> Por favor para acceder a las compras y apartados, valida tu email!!</h3>
        </Modal.Content>
        <Modal.Actions>
          <Button color='green' onClick={()=>this.props.actionCreators.setEmailModalVisibility(false)} inverted>
            <Icon name='checkmark' /> Entendido
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}

const mapStateToProps = (state) => {
  return {open:state.modalsReducer.openEmailVerification}
}

const mapDispatchToProps = {
  actionCreators
}

export default connect(mapStateToProps, mapDispatchToProps)(EmailNotice);
