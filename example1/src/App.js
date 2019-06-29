import React from 'react';
import {connect} from 'react-redux';
import './App.css';
//import Comment from './components/comments/Comment';
import Footer from './components/pageComponents/Footer';
import ResponsiveContainer from './components/pageComponents/ResponsiveContainer';
import Intro from './components/sections/Intro';
import {loadUserProfile} from './actions';

//import faker from 'faker';


class App extends React.Component {

  render(){
    return (
      <div>
        <ResponsiveContainer>
          <Intro/>
        </ResponsiveContainer>
        <Footer/>
      </div>
    );
  }
}

export default connect(null,null)(App);
