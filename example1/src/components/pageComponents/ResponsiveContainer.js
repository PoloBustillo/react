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
import {Responsive} from 'semantic-ui-react';

const getWidth = () => {
  const isSSR = typeof window === 'undefined'
  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

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
      <div>
       <DesktopContainer {...this.props} getWidth={getWidth}>
          {this.props.children}
        </DesktopContainer>
       <MobileContainer {...this.props} getWidth={getWidth}>
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
