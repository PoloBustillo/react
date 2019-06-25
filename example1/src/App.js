import React from 'react';
import './App.css';
import Comment from './components/comments/Comment';
import Footer from './components/pageComponents/Footer';
import ResponsiveContainer from './components/pageComponents/ResponsiveContainer';
import faker from 'faker';


class App extends React.Component {
  
  render(){
    return (
      <div>
        <ResponsiveContainer>
          <div className="ui minimal comments container">

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
        </ResponsiveContainer>
        <Footer/>
      </div>
    );
  }
}

export default App;
