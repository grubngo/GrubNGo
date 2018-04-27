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
            <Container>
          <Embed
              url="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d5257.194777602245!2d-157.8200138283992!3d21.29528126714656!3m2!1i1024!2i768!4f13.1!2m1!1sRestaurants!5e0!3m2!1sen!2sus!4v1524794176413"/>
            </Container>
        </div>
    );
  }
}

export default Landing;
