import React from 'react';
import faker from 'faker';

export default class Comment extends React.Component{

  render(){
    return(
      <div className="comment">
        <a className="avatar">
          <img src={faker.image.avatar()}/>
        </a>
        <div className="content">
          <a className="author">{this.props.author}</a>
          <div className="metadata">
            <span className="date">{faker.date.past().toString()}</span>
          </div>
          <div className="text">
            {faker.lorem.sentence()}
          </div>
          <div className="actions">
            <a className="reply">Reply</a>
          </div>
        </div>
        <div class="ui small basic icon buttons">
          <button class="ui button"><i class="file icon"></i></button>
          <button class="ui button"><i class="save icon"></i></button>
          <button class="ui button"><i class="upload icon"></i></button>
          <button class="ui button"><i class="download icon"></i></button>
        </div>
      </div>
    );
  }
}
