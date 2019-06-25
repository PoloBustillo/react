import React,{Component} from 'react';
import PropTypes from 'prop-types';
import HomePageHeading from './HomePageHeading';
import {
  Button,
  Container,
  Responsive,
  Segment,
  Menu,
  Visibility,
} from 'semantic-ui-react';

const getWidth = () => {
  const isSSR = typeof window === 'undefined'

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

export default class DesktopContainer extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props
    const { fixed } = this.state

    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 700, padding: '1em 0em' }}
            vertical
            color='pink'
          >
            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              secondary={!fixed}
              size='large'
            >
              <Container>
                <Menu.Item as='a'>
                  Home
                </Menu.Item>
                <Menu.Item as='a'>Work</Menu.Item>
                <Menu.Item as='a'>Company</Menu.Item>
                <Menu.Item as='a'>Careers</Menu.Item>
                <Menu.Item position='right'>
                  <Button as='a' inverted={!fixed} onClick={this.props.showModal}>
                    Iniciar Sesion
                  </Button>
                  <Button
                    as='a'
                    onClick={this.props.showModalRegister}
                    inverted={!fixed}
                    primary={fixed}
                    style={{ marginLeft: '0.5em' }}>
                    Crear Cuenta
                  </Button>
                </Menu.Item>
              </Container>
            </Menu>
           <HomePageHeading />
          </Segment>
        </Visibility>

        {children}
      </Responsive>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}
