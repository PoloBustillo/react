import React from 'react';


export default class Login extends React.Component
{

  render(){
    return(
      <div class="ui modal">
        <i class="close icon"></i>
        <div class="header">
          Profile Picture
        </div>
        <div class="image content">
          <div class="ui medium image">
            <img src="/images/avatar/large/chris.jpg"/>
          </div>
          <div class="description">
            <div class="ui header">We've auto-chosen a profile image for you.</div>
            <form class="ui fluid form">
              <div class="field">
                <input type="text" placeholder="First name"/>
                <div class="ui pointing red basic label">
                  Please enter a value
                </div>
              </div>
              <div class="ui divider"></div>
              <div class="field" placeholder="Last Name">
                <div class="ui pointing below red basic label">
                  Please enter a value
                </div>
                <input type="text"/>
              </div>
              <div class="ui divider"></div>
              <div class="inline field">
                <input type="text" placeholder="Username"/>
                <div class="ui left pointing red basic label">
                  That name is taken!
                </div>
              </div>
              <div class="ui divider"></div>
              <div class="inline field">
                <div class="ui right pointing red basic label">
                  Your password must be 6 characters or more
                </div>
                <input type="password"/>
              </div>
            </form>
          </div>
        </div>
        <div class="actions">
          <div class="ui black deny button">
            Nope
          </div>
          <div class="ui positive right labeled icon button">
            Yep, that's me
            <i class="checkmark icon"></i>
          </div>
        </div>
      </div>

    );
  }
}
