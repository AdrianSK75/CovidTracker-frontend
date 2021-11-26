import React , {useEffect, useState, Fragment} from 'react';
import {
  withGoogleMap,
  GoogleMap,
  withScriptjs,
  Marker,
  Circle
} from "react-google-maps";
import axios from 'axios';

const Map = () => {
      const [coordonates, setCoordonates] = useState([]);
      const [location, setLocation] = useState({latitude: null, longitude: null});

      useEffect(() => {
            const fetchGame = async () => {  
                  try {
                        const res = await axios.get('http://localhost:8000/api/game');
                        setCoordonates(res.data.game.radius);
                        setLocation({latitude: res.data.game.location.latitude, longitude: res.data.game.location.longitude})
                        console.log(coordonates)
                  } catch (err) {
                        console.log(err);
                  }
            }
            fetchGame();
      }, []);

      const result = () => {
            let verifyZone = coordonates.filter(coordonate => 
              (coordonate.latitude + 1 >= location.latitude && coordonate.latitude - 1 <= location.latitude)
              && (coordonate.longitude + 1 >= location.longitude && coordonate.longitude - 1 <= location.longitude));
            console.log(verifyZone)
              if (coordonates.length === 0)
                  return <h4>Refresh to load the Infected Zones...</h4>
            if (verifyZone.length > 0) 
                  return <h4> You are Infected </h4>
            return <h4> You are not Infected </h4>
      }; 
      return (
            <div>
                { result() } 
                <GoogleMap
                        defaultZoom={5}
                        defaultCenter={{lat: 44.00, lng: 22.00}}
                >
                  <Marker
                        position={{
                              lat: parseFloat(location.latitude),
                              lng: parseFloat(location.longitude)
                        }}
                        title="Your location"
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
            </div>
        ); 
}
export default withScriptjs(withGoogleMap(Map));
