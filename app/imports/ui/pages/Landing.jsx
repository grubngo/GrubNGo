import React from 'react';
import { Header, Grid } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
        <div className='back-image'>

          {/** capitalize GRID!!!! */}
          <Grid container stackable columns={2}>
            <Grid.Column inverted>
              <Header as='h1' inverted>Live updates from restaurants at UH Manoa!</Header>
              <a className='twitter-timeline' data-height='680' data-width='300'
                 href="https://twitter.com/GoGrubn/lists/feed?ref_src=twsrc%5Etfw"></a>
            </Grid.Column>

            <Grid.Column inverted>
              <Header as='h1' inverted>Hungry at UH Manoa? Use the map below to getchyo GRUB on!</Header>
              <iframe
                  width="1040"
                  height="680"
                  src="https://www.google.com/maps/d/u/0/embed?mid=1z9qHzKI8oEIKgsKoIA4vdEW3TU9lJUyQ">
              </iframe>
            </Grid.Column>
          </Grid>
        </div>
    );
  }
}

export default Landing;
