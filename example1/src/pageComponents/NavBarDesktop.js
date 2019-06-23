import React from 'react';
import _ from "lodash";
import {
  Image,
  Menu
} from "semantic-ui-react";



export default class NavBarDesktop extends React.Component{

  render(){

    const leftItems = [
      { as: "a", content: "Home", key: "home" },
      { as: "a", content: "Users", key: "users" }
    ];

    const rightItems = [
      { as: "a", content: "Login", key: "login" },
      { as: "a", content: "Register", key: "register" }
    ];

    return(
      <Menu fixed="top" inverted>
       <Menu.Item>
         <Image size="mini" src="https://react.semantic-ui.com/logo.png" />
       </Menu.Item>
        {_.map(leftItems, item => <Menu.Item {...item} />)}
       <Menu.Menu position="right">
         {_.map(rightItems, item => <Menu.Item {...item} />)}
       </Menu.Menu>
     </Menu>
    );
  }

}
