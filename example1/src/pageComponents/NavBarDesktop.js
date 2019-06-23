import React from 'react';
import _ from "lodash";
import {
  Image,
  Menu
} from "semantic-ui-react";



export default class NavBarDesktop extends React.Component{

  render(){

    return(
      <Menu fixed="top" inverted>
       <Menu.Item>
         <Image size="mini" src="https://react.semantic-ui.com/logo.png" />
       </Menu.Item>
        {_.map(this.props.leftItems, item => <Menu.Item {...item} />)}
       <Menu.Menu position="right">
         {_.map(this.props.rightItems, item => <Menu.Item {...item} />)}
       </Menu.Menu>
     </Menu>
    );
  }

}
