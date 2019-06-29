import React,{Component} from 'react';
import PropTypes from 'prop-types';
import ButtonIcon from './ButtonIcon'
import {connect} from 'react-redux';
import * as actionCreators from '../../actions';
import HomePageHeading from './HomePageHeading';
import {
  Icon,
  Container,
  Responsive,
  Segment,
  Sidebar,
  Menu
} from 'semantic-ui-react';

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
        getWidth={this.props.getWidth}
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
          <Menu.Item hidden={this.props.isLogged} as='a' onClick={()=>this.props.actionCreators.setLoginModalVisibility(true)}>Acceder</Menu.Item>
          <Menu.Item hidden={this.props.isLogged} as='a' onClick={()=>this.props.actionCreators.setRegisterModalVisibility(true)}>Crear Cuenta</Menu.Item>
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
                  <ButtonIcon
                     inverted={true}
                     animated='vertical'
                     textInit='Iniciar'
                     iconFinal='user times'
                     onClick={()=>this.props.setLoginModalVisibility(true)}/>
                  <ButtonIcon
                     inverted={true}
                     animated='vertical'
                     textInit='Crear'
                     iconFinal='user plus'
                     onClick={()=>this.props.setRegisterModalVisibility(true)}/>
                </Menu.Item>
                <Menu.Item hidden={!this.props.isLogged} position='right'>
                  <ButtonIcon
                    inverted={true}
                    animated='vertical'
                    textInit={this.props.userName}
                    iconFinal='user'/>
                    <ButtonIcon
                      inverted={true}
                      animated='vertical'
                      iconInit='shopping cart'
                      iconFinal='cart plus'/>
                   <ButtonIcon
                      inverted={true}
                      animated='vertical'
                      iconInit='power off'
                      iconFinal='power off'
                      onClick={()=>this.props.logoutUserEmail()}/>
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


const mapStateToProps = (state, props) => {
  return {
    userName:state.sessionReducer.userName,
  }
}

const mapDispatchToProps = {
  ...actionCreators
}

export default connect(mapStateToProps, mapDispatchToProps)(MobileContainer);
