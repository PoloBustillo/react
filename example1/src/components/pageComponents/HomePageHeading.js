import React from 'react';
import PropTypes from 'prop-types';
import {
  Header,
  Container,
  Button,
  Icon
} from 'semantic-ui-react';

export default class HomePageHeading extends React.Component{

  render(){
    const mobile = this.props.mobile
    return(
      <Container text>
          <Header
            as='h1'
            content='Leolandia-Puebla'
            inverted
            style={{
              fontFamily: 'Mightype',
              fontSize: mobile ? '2em' : '4em',
              fontWeight: 'normal',
              marginBottom: 0,
              marginTop: mobile ? '1.5em' : '3em',
            }}
          />
          <Header
            as='h2'
            content='Regalate una sonrisa, compra con amor.'
            inverted
            style={{
              fontSize: mobile ? '1.5em' : '1.7em',
              fontWeight: 'normal',
              marginTop: mobile ? '0.5em' : '1.5em',
            }}
          />
          <Button primary size='huge'>
            Comprar es facil
            <Icon name='right arrow' />
          </Button>
      </Container>
    );
  }
}


HomePageHeading.propTypes = {
  mobile: PropTypes.bool,
}
