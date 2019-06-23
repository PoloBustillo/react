import React from 'react';
import {
  Responsive
} from "semantic-ui-react";
import NavBarDesktop from './NavBarDesktop';
import NavBarMobile from './NavBarMobile';

export default class NavBar extends React.Component{
  render () {

    const leftItems = [
      { as: "a", content: "Home", key: "home" },
      { as: "a", content: "Users", key: "users" }
    ];
    const rightItems = [
      { as: "a", content: "Login", key: "login" },
      { as: "a", content: "Register", key: "register" }
    ];

    return (
      <div>
        <Responsive {...Responsive.onlyMobile}>
        <NavBarMobile
            leftItems={leftItems}
            rightItems={rightItems}>
            {this.props.children}
        </NavBarMobile>
        </Responsive>
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <NavBarDesktop leftItems={leftItems} rightItems={rightItems}/>
          {this.props.children}
        </Responsive>
      </div>
    );
  }
}
