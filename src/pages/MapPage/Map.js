import React , {Fragment} from 'react';
import {
  withGoogleMap,
  GoogleMap,
  withScriptjs,
  Marker,
  Circle
} from "react-google-maps";
import { MapLogic } from './MapLogic';
import { Status } from './Status';

const Map = () => {
      const {coordonates, lat, lng} = MapLogic();      
      console.log({ lat, lng, tpLat: typeof lat, tpLng: typeof lng });
      if (coordonates.length === 0) {
            return <h1> Loading... </h1>
      }
      return (
            <div>
            <Status/>
            { lat && lng && 
              <GoogleMap
                  defaultCenter={{lat: parseFloat(lat), lng: parseFloat(lng)}}
                  defaultZoom={4}>      
                        <Marker
                        position={{
                              lat: parseFloat(lat),
                              lng: parseFloat(lng)
                        }}
                        title="Your location"/>
                        {coordonates.map(place => {
                                    return (
                                          <Fragment key={place.id}>
                                                <Circle
                                                defaultCenter={{
                                                      lat: parseFloat(place.latitude),
                                                      lng: parseFloat(place.longitude)
                                                }}
                                                radius={100000}
                                                options={{strokeColor: "#ff0000"}}
                                                />
                                          </Fragment>
                                    );
                        })}
                  </GoogleMap>
                }
            </div>
        ); 
}
export default withScriptjs(withGoogleMap(Map));
