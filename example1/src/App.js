import React from 'react';
import './App.css';
import Comment from './comments/Comment';
import NavBar from './pageComponents/NavBar';
import faker from 'faker';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { Container, Header, Divider } from 'semantic-ui-react'

class App extends React.Component {

  constructor() {
   // Initialize Firebase
   const auth = firebase.auth();
   const db = firebase.firestore();
   super();
  }

  render(){
    return (
      <div>
        <NavBar showFunc={this.showModal}>

        <div className="ui minimal comments container">
          <Divider horizontal><Header as='h1'><span className="header">Leolandia</span></Header></Divider>

          <h3 className="ui dividing header">Comments</h3>
          <Comment author={faker.internet.userName()}/>
          <Comment author={faker.internet.userName()}/>
          <Comment author={faker.internet.userName()}/>
          <form className="ui reply form">
            <div className="field">
              <textarea></textarea>
            </div>
            <div className="ui blue labeled submit icon button">
              <i className="icon edit"></i> Add Reply
            </div>
          </form>
        </div>
        </NavBar>
      </div>
    );
  }
}

export default App;
