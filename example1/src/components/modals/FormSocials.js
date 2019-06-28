import React from 'react'
import { Icon, Button, Grid} from 'semantic-ui-react'

export default class FormSocials extends React.Component{

  render(){
    return(
      <Grid.Column verticalAlign='middle' stretched>
        <Button onClick={()=>this.props.facebookLogin()}color='facebook'>
           <Icon name='facebook' /> Facebook
       </Button>
       <br/>
       <br/>
        <Button color='google plus'>
          <Icon name='google plus' /> Google Plus
        </Button>
      </Grid.Column>
    );
  }

}
