import React from 'react';
import Login from '../modals/Login';
import Register from '../modals/Register';
import {
  Responsive
} from "semantic-ui-react";
import NavBarDesktop from './NavBarDesktop';
import NavBarMobile from './NavBarMobile';

export default class NavBar extends React.Component{

  state ={openLoginModal:false,
    openRegisterModal:false};

  showModal = () => {
   this.setState({
     openRegisterModal:false,
     openLoginModal:true
   });
  };

  showModalRegister = () => {
   this.setState({
     openRegisterModal:true,
     openLoginModal:false
   });
  };

  render () {
    return (
      <div>
        <Login open={this.state.openLoginModal}/>
        <Register open={this.state.openRegisterModal}/>
        <Responsive {...Responsive.onlyMobile}>
        <NavBarMobile
            showModalRegister={this.showModalRegister}
            showModal={this.showModal}>
            {this.props.children}
        </NavBarMobile>
        </Responsive>
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <NavBarDesktop
        showModalRegister={this.showModalRegister}
        showModal={this.showModal}/>
          {this.props.children}
        </Responsive>
      </div>
    );
  }
}
