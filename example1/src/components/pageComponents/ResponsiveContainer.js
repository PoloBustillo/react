import React from 'react';
import DesktopContainer from './DesktopContainer';
import MobileContainer from './MobileContainer';
import Login from '../modals/Login';
import Register from '../modals/Register';

export default class ResponsiveContainer extends React.Component{

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

  render(){
    return(
      <div className='containerHeader'>
       <DesktopContainer
        showModalRegister={this.showModalRegister}
        showModal={this.showModal}>
          {this.props.children}
        </DesktopContainer>
       <MobileContainer
        showModalRegister={this.showModalRegister}
        showModal={this.showModal}>
          {this.props.children}
        </MobileContainer>
       <Login open={this.state.openLoginModal}/>
       <Register open={this.state.openRegisterModal}/>
     </div>
    );
  }
}
