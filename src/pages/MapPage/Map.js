import React , {Fragment} from 'react';
import {
  withGoogleMap,
  GoogleMap,
  withScriptjs,
  Marker,
  Circle
} from "react-google-maps";
import { Link, useParams } from 'react-router-dom';
import { MapLogic } from './MapLogic';
import { Loading } from '../components/Loading';

const Map = () => {
      const {coordonates, lat, lng, error} = MapLogic();
      const { id } = useParams();
      console.log(id);      
      console.log({ lat, lng, tpLat: typeof lat, tpLng: typeof lng });
      return (
            <div>
            <Link to = {(`/group/${id}/lobby`)}>Back to Lobby</Link>
            { lat && lng && 
              <GoogleMap
                  defaultCenter={{lat: parseFloat(lat), lng: parseFloat(lng)}}
                  defaultZoom={4}>      
                        <Circle
                              defaultCenter={{
                                    lat: parseFloat(lat),
                                    lng: parseFloat(lng)
                              }}
                              radius={10000}
                              options={{strokeColor: "#6f74ed"}}
                        />
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
                {coordonates.length === 0 || error.length > 0 ? <Loading/> : null}
            </div>
        ); 
}
export default withScriptjs(withGoogleMap(Map));
