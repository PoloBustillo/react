import React from 'react';
import {
  Image,
  Menu
} from "semantic-ui-react";

export default class NavBarDesktop extends React.Component{

  render(){
    return(
      <Menu fixed="top" color={'black'} inverted>
        <Menu.Item>
          <Image size="mini" src="logo.png" />
        </Menu.Item>

        <Menu.Menu position="right">

        </Menu.Menu>
      </Menu>
    );
  }

}
