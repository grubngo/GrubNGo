import React from 'react';
import { Grid, Icon, Header, Embed, Container } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
        <div className='back-image'>
          <div className ='mapContainer' align="center">
            <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1z9qHzKI8oEIKgsKoIA4vdEW3TU9lJUyQ" width="1040" height="680"></iframe>
            <a class="twitter-timeline" data-height="500" data-width="1040"  href="https://twitter.com/GoGrubn/lists/feed?ref_src=twsrc%5Etfw"></a>
          </div>
        </div>
    );
  }
}

export default Landing;
