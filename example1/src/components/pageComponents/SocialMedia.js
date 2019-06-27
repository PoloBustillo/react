import React from 'react';
import './SocialMedia.css'


export default class SocialMedia extends React.Component {

  render(){
    return(
      <div>
        <button class="social-button ui circular facebook icon button">
          <i class="facebook icon"></i>
        </button>
        <button class="social-button ui circular twitter icon button">
          <i class="twitter icon"></i>
        </button>
        <button class="social-button ui circular instagram icon button">
          <i class="instagram icon"></i>
        </button>
        <button class="social-button ui circular google plus icon button">
          <i class="google icon"></i>
        </button>
      </div>
    );

  }
}
