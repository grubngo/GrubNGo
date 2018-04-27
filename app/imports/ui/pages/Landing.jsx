import React from 'react';
import { Grid, Icon, Header, Embed, Container } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
        <div className='back-image'>

          {/** capitalize GRID!!!! */}
          <Grid container stackable centered columns={3}>

            <Grid.Column textAlign='center'>
              <Icon size='huge' inverted name='address card'/>
              <Header as='h1' inverted>List of Vendors</Header>
              <Header as='h3' inverted>Browse the list of Food Vendors and their locations available at UH
                Manoa</Header>
            </Grid.Column>

            <Grid.Column textAlign='center'>
              <Icon size='huge' inverted name='coffee'/>
              <Header as='h1' inverted>Vendor Page</Header>
              <Header as='h3' inverted>For each vendor, you can view their menu, location, and bussiness hours.</Header>
            </Grid.Column>

            <Grid.Column textAlign='center'>
              <Icon size='huge' inverted name='search'/>
              <Header as='h1' inverted>Browse Food</Header>
              <Header as='h3' inverted>Craving Sushi, Pho, Pizza, or want to try something new? Search by food
                categories.</Header>
            </Grid.Column>
          </Grid>
          <Container align='center'>
            <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1z9qHzKI8oEIKgsKoIA4vdEW3TU9lJUyQ" width="1040" height="680"></iframe>
          </Container>
        </div>
    );
  }
}

export default Landing;
