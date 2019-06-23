import React from 'react';
import _ from "lodash";
import {
  Image,
  Menu
} from "semantic-ui-react";


export default class NavBarDesktop extends React.Component{

  render(){

    return(
      <Menu fixed="top" color={"pink"} inverted>
       <Menu.Item>
         <Image size="mini" src="https://react.semantic-ui.com/logo.png" />
       </Menu.Item>
       <Menu.Item  as="a" content="Home" key="home"/>
       <Menu.Menu position="right">
         <Menu.Item  as="a" content="Login" key="login" onClick={this.props.showModal}/>
         <Menu.Item  as="a" content="Crea Cuenta" key="register" onClick={this.props.showModalRegister}/>
         <Menu.Item/>
       </Menu.Menu>

     </Menu>
    );
  }

}
