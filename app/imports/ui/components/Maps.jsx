import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Maps extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  render() {
    return (
        // Important! Always set the container height explicitly
        <div style={{ height: '100vh', width: '100%' }}>
          <GoogleMapReact
              bootstrapURLKeys={{ key: AIzaSyDohsA6g7_IT6eTvTuISQFG0vt_KZpRuyE }}
              defaultCenter={this.props.center}
              defaultZoom={this.props.zoom}
          >
            <AnyReactComponent
                lat={59.955413}
                lng={30.337844}
                text={'Placemarker'}
            />
          </GoogleMapReact>
        </div>
    );
  }
}

export default Maps;

/*
API Key: AIzaSyDohsA6g7_IT6eTvTuISQFG0vt_KZpRuyE
 */

