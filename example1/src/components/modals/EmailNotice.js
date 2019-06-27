import React, { Component } from 'react';
import {connect} from 'react-redux';
import {setEmailModalVisibility} from '../../actions';
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

class EmailNotice extends Component {


  render() {
    return (
      <Modal
        open={this.props.open}
        onClose={()=>this.props.setEmailModalVisibility(false)}
        basic
        size='small'
      >
        <Header icon='mail' content='Un Email se ha enviado' />
        <Modal.Content>
          <h3> Por favor para acceder a las compras y apartados, valida tu email!!</h3>
        </Modal.Content>
        <Modal.Actions>
          <Button color='green' onClick={()=>this.props.setEmailModalVisibility(false)} inverted>
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
  setEmailModalVisibility
}

export default connect(mapStateToProps, mapDispatchToProps)(EmailNotice);
