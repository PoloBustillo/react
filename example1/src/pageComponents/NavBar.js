import React from 'react';
import {
  Responsive
} from "semantic-ui-react";

export default class NavBar extends React.Component{

  state = {
    visible: false
  };

  handlePusher = () => {
    const { visible } = this.state;

    if (visible) this.setState({ visible: false });
  };

  handleToggle = () => this.setState({ visible: !this.state.visible });

  render() {
    const { children, leftItems, rightItems } = this.props;
    const { visible } = this.state;

    return (
      <div>
        <Responsive {...Responsive.onlyMobile}>
        HolaMobile

        </Responsive>
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
      HOla
        </Responsive>
      </div>
    );
  }
}
