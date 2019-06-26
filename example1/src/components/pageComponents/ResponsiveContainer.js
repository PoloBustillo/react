import React from 'react';
import DesktopContainer from './DesktopContainer';
import MobileContainer from './MobileContainer';
import Login from '../modals/Login';
import Register from '../modals/Register';

export default class ResponsiveContainer extends React.Component{



  render(){
    return(
      <div className='containerHeader'>
       <DesktopContainer>
          {this.props.children}
        </DesktopContainer>
       <MobileContainer>
          {this.props.children}
        </MobileContainer>
       <Login/>
       <Register/>
     </div>
    );
  }
}
