import React from 'react';
import DesktopContainer from './DesktopContainer';
import MobileContainer from './MobileContainer';
import {connect} from 'react-redux';
import {loadUserProfile} from '../../actions'
import Login from '../modals/Login';
import Register from '../modals/Register';
import EmailNotice from '../modals/EmailNotice'
import firebase from 'firebase/app';
import 'firebase/auth';

class ResponsiveContainer extends React.Component{

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) =>{
      if(user){
          user.getIdTokenResult(true)
          this.props.dispatch(loadUserProfile(user));
      }
    });
  }

  render(){
    return(
      <div className='containerHeader'>
       <DesktopContainer {...this.props}>
          {this.props.children}
        </DesktopContainer>
       <MobileContainer {...this.props}>
          {this.props.children}
        </MobileContainer>
       <Login/>
       <Register/>
       <EmailNotice/>
     </div>
    );
  }
}

const mapStateToProps = (state) => {
  const Logged= state.sessionReducer.authUser!=null;
  return {isAdmin:state.sessionReducer.isAdmin,
          isLogged:Logged}
}


export default connect(mapStateToProps,null)(ResponsiveContainer);
