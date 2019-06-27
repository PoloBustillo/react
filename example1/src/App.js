import React from 'react';
import './App.css';
//import Comment from './components/comments/Comment';
import Footer from './components/pageComponents/Footer';
import ResponsiveContainer from './components/pageComponents/ResponsiveContainer';
import Intro from './components/sections/Intro';
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

export default App;
