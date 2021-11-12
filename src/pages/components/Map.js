import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';


export default class Map extends Component {
  static defaultProps = {
    center: {
      lat: 44.3156,
      lng: 28.6141
    },
    zoom: 11
  };

  render() {
    return (
      <div style={{ height: '87vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys = {{ key: "AIzaSyBEK4QzBf4WDtqRNqZI2KtMUj7vJAA-UUU" }}
          defaultCenter = { this.props.center }
          defaultZoom = { this.props.zoom }
        >

        </GoogleMapReact>
      </div>
    );
  }
}

//export default Map;