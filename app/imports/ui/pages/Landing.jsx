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
              <Header as='h1' inverted>UH Manoa Twitter Feed</Header>
              <a className='twitter-timeline' data-height='680' data-width='300' data-alignment="left"
                 href="https://twitter.com/GoGrubn/lists/feed?ref_src=twsrc%5Etfw"></a>
            </Grid.Column>

            <Grid.Column inverted>
              <Header as='h1' inverted>Grub 'N' Go With The Map Below</Header>
              <iframe
                  width="700"
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
