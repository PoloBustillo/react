import React from 'react';
import logo from './logo.svg';
import './App.css';
import Comment from './comments/Comment';
import Login from './login/Login';
import NavBar from './pageComponents/NavBar';
import faker from 'faker';
import firebase from 'firebase';

class App extends React.Component {

  constructor() {
   // Initialize Firebase
   const auth = firebase.auth();
   const db = firebase.firestore();
   super();
  }

  render(){
    return (
      <div className="ui minimal comments container">
        <NavBar/>
        <Login/>
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
    );
  }
}

export default App;
