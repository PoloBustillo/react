import React from 'react';
import {
  Button,
  Icon
} from 'semantic-ui-react';

export default class ButtonIcon extends React.Component {

  render(){
    return(
      <Button
      as='a'
      inverted={this.props.inverted}
      animated={this.props.animated}
      style={{ marginLeft: '0.5em' }}
      onClick={this.props.onClick}>
       <Button.Content hidden>
          <Icon name={this.props.iconFinal}/>
       </Button.Content>
       <Button.Content visible>
        {this.props.textInit}
         <Icon hidden={this.props.iconInit==null} name={this.props.iconInit} />
       </Button.Content>
     </Button>
    );
  }
}
