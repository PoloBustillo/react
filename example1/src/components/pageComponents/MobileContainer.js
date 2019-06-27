import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {
  setRegisterModalVisibility,
  setLoginModalVisibility,
  logoutUserEmail
} from '../../actions';
import HomePageHeading from './HomePageHeading';
import {
  Button,
  Icon,
  Container,
  Responsive,
  Segment,
  Sidebar,
  Menu
} from 'semantic-ui-react';

const getWidth = () => {
  const isSSR = typeof window === 'undefined'

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

class MobileContainer extends Component {
  state = {}

  handleSidebarHide = () => this.setState({ sidebarOpened: false })

  handleToggle = () => this.setState({ sidebarOpened: true })

  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state

    return (
      <Responsive
        as={Sidebar.Pushable}
        getWidth={getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}
      >
        <Sidebar
          as={Menu}
          animation='push'
          inverted
          onHide={this.handleSidebarHide}
          vertical
          visible={sidebarOpened}
        >
          <Menu.Item as='a'>
            Home
          </Menu.Item>
          <Menu.Item as='a'>Puntos de Entrega</Menu.Item>
          <Menu.Item as='a'>Catalogo</Menu.Item>
          <Menu.Item as='a'>Cursos</Menu.Item>
          <Menu.Item hidden={!this.props.isLogged} as='a' onClick={()=>this.props.logoutUserEmail()}>Salir</Menu.Item>
          <Menu.Item hidden={this.props.isLogged} as='a' onClick={()=>this.props.setLoginModalVisibility(true)}>Acceder</Menu.Item>
          <Menu.Item hidden={this.props.isLogged} as='a' onClick={()=>this.props.setRegisterModalVisibility(true)}>Crear Cuenta</Menu.Item>
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment
            inverted
            color='pink'
            textAlign='center'
            style={{ minHeight: 350, padding: '1em 0em' }}
            vertical
          >
            <Container>
              <Menu inverted secondary size='large'>
                <Menu.Item onClick={this.handleToggle}>
                  <Icon name='sidebar' />
                </Menu.Item>
                <Menu.Item hidden={this.props.isLogged} position='right'>
                  <Button
                    as='a'
                    inverted
                    onClick={()=>this.props.setLoginModalVisibility(true)}>
                    Iniciar
                  </Button>
                  <Button
                    inverted
                    as='a'
                    onClick={()=>this.props.setRegisterModalVisibility(true)}
                    style={{ marginLeft: '0.5em' }}>
                    Crear
                  </Button>
                </Menu.Item>
                <Menu.Item hidden={!this.props.isLogged} position='right'>
                  <Button
                    as='a'
                    inverted
                    onClick={()=>this.props.logoutUserEmail()}>
                    Salir
                  </Button>
                </Menu.Item>
              </Menu>
            </Container>
            <HomePageHeading mobile />
          </Segment>

          {children}
        </Sidebar.Pusher>
      </Responsive>
    )
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
}

const mapStateToProps = (state, props) => ({
   ...state
})

const mapDispatchToProps = {
  setRegisterModalVisibility,
  setLoginModalVisibility,
  logoutUserEmail
}

export default connect(mapStateToProps, mapDispatchToProps)(MobileContainer);
