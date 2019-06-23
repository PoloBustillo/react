import _ from "lodash";
import React, { Component } from "react";
import { render } from "react-dom";
import {
  Icon,
  Image,
  Menu,
  Sidebar
} from "semantic-ui-react";

export default class NavBarMobile extends React.Component{

  state = {visible: false};

  handlePusher = () => {
    const { visible } = this.state;

    if (visible) this.setState({ visible: false });
  };

  handleToggle = () => this.setState({ visible: !this.state.visible });
  render(){
    const { visible } = this.state;
    return(
      <Sidebar.Pushable>
      <Sidebar
          as={Menu}
          animation='overlay'
          icon='labeled'
          inverted
          vertical
          visible={visible}
          width='thin'
          color='pink'
        >
          {_.map(this.props.leftItems, item => <Menu.Item {...item} />)}
        </Sidebar>
        <Sidebar.Pusher
          dimmed={visible}
          onClick={this.handlePusher}
          style={{ minHeight: "100vh" }}
        >
          <Menu fixed="top" color={"pink"} inverted>
            <Menu.Item>
              <Image size="mini" src="https://react.semantic-ui.com/logo.png" />
            </Menu.Item>
            <Menu.Item onClick={this.handleToggle}>
              <Icon name="sidebar" />
            </Menu.Item>
            <Menu.Menu position="right">
               <Menu.Item  as="a" content="Login" key="login" onClick={this.props.showModal}/>
               <Menu.Item  as="a" content="Crea Cuenta" key="register" onClick={this.props.showModalRegister}/>
            </Menu.Menu>
          </Menu>
          {this.props.children}
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    );
  }
}
