import React from 'react';
import {List, Grid, Segment, Container, Header} from 'semantic-ui-react'

export default class Footer extends React.Component {

  render(){

    return(
      <Segment inverted vertical color='pink' style={{ padding: '5em 0em' }}>
        <Container>
          <Grid divided inverted stackable>
            <Grid.Row>
              <Grid.Column width={3}>
                <Header inverted as='h4' content='About' />
                <List link inverted>
                  <List.Item as='a'>Mapa del sitio</List.Item>
                  <List.Item as='a'>Contactanos</List.Item>
                  <List.Item as='a'>Consejos</List.Item>
                  <List.Item as='a'>Eventos</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header inverted as='h4' content='Services' />
                <List link inverted>
                  <List.Item as='a'>Preguntas frecuentes</List.Item>
                  <List.Item as='a'>Politicas</List.Item>
                  <List.Item as='a'>Como comprar</List.Item>
                  <List.Item as='a'>Regalos</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={7}>
                <Header as='h4' inverted>
                  Leolandia
                </Header>
                <p>
                  Empresa Poblana, enfocada en proveer diferente mercancia a los precios mas bajos, para brindar a nuestros clientes
                  de una buena experiencia.
                </p>
                <button class="ui circular facebook icon button">
                  <i class="facebook icon"></i>
                </button>
                <button class="ui circular twitter icon button">
                  <i class="twitter icon"></i>
                </button>
                <button class="ui circular linkedin icon button">
                  <i class="linkedin icon"></i>
                </button>
                <button class="ui circular google plus icon button">
                  <i class="google plus icon"></i>
                </button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    );
  }
}
