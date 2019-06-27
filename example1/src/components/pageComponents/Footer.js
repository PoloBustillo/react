import React from 'react';
import _ from 'lodash';
import {List, Grid, Segment, Container, Header} from 'semantic-ui-react'
import SocialMedia from './SocialMedia';
import {menuAbout,menuServices} from '../../utils/Constants';
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
                  {_.map(menuAbout,(menuItem)=>{
                      return(
                        <List.Item
                        as='a'
                        href={menuItem.link}>
                          {menuItem.title}
                        </List.Item>
                    )
                  })}
                </List>
              </Grid.Column>
              <Grid.Column width={4}>
                <Header inverted as='h4' content='Services' />
                <List link inverted>
                  {_.map(menuServices,(menuItem)=>{
                      return(
                        <List.Item
                        as='a'
                        href={menuItem.link}>
                          {menuItem.title}
                        </List.Item>
                    )
                  })}
                </List>
              </Grid.Column>
              <Grid.Column width={9}>
                <Header as='h4' inverted>
                  Leolandia
                </Header>
                <p>
                  Empresa Poblana, enfocada en proveer diferente mercancia a los precios mas bajos, para brindar a nuestros clientes
                  de una buena experiencia.
                </p>
                <SocialMedia/>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    );
  }
}
