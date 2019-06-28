import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import _ from 'lodash';
import {menuMainDesktop} from '../../utils/Constants';
import HomePageHeading from './HomePageHeading';
import ButtonIcon from './ButtonIcon';
import {
  setRegisterModalVisibility,
  setLoginModalVisibility,
  logoutUserEmail
} from '../../actions';
import {
  Container,
  Responsive,
  Segment,
  Menu,
  Visibility
} from 'semantic-ui-react';


class DesktopContainer extends Component {
  state={};
  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props
    const { fixed } = this.state
    return (
      <Responsive getWidth={this.props.getWidth} minWidth={Responsive.onlyTablet.minWidth}>
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
                {_.map(menuMainDesktop,(menuItem)=>{
                    return(
                      <Menu.Item
                      as='a'
                      href={menuItem.link}>
                        {menuItem.title}
                      </Menu.Item>
                  )
                })}
                <Menu.Item hidden={this.props.isLogged} position='right'>
                <ButtonIcon
                   inverted={true}
                   animated='vertical'
                   textInit='Iniciar Sesion'
                   iconFinal='user times'
                   onClick={()=>this.props.setLoginModalVisibility(true)}/>
                <ButtonIcon
                   inverted={true}
                   animated='vertical'
                   textInit='Crear Cuenta'
                   iconFinal='user plus'
                   onClick={()=>this.props.setRegisterModalVisibility(true)}/>
                </Menu.Item>
                <Menu.Item hidden={!this.props.isLogged} position='right'>
                 <ButtonIcon
                   inverted={!fixed}
                   animated='vertical'
                   textInit={this.props.userName}
                   iconFinal='user'/>
                   <ButtonIcon
                     inverted={!fixed}
                     animated='vertical'
                     iconInit='shopping cart'
                     iconFinal='cart plus'/>
                  <ButtonIcon
                     inverted={!fixed}
                     animated='vertical'
                     iconInit='power off'
                     iconFinal='power off'
                     onClick={()=>this.props.logoutUserEmail()}/>
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

const mapStateToProps = (state, props) => {
  return {
    userName:state.sessionReducer.userName,
  }
}

const mapDispatchToProps = {
  setRegisterModalVisibility,
  setLoginModalVisibility,
  logoutUserEmail
}

export default connect(mapStateToProps, mapDispatchToProps)(DesktopContainer);
