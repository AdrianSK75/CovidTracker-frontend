import { MapLogic } from "./MapLogic";

export const Status = () => {
    const {coordonates, lat, lng} = MapLogic();

    if (coordonates.length === 0) {
              return <h4>Refresh to load the Infected Zones...</h4>
    }
        let verifyZone = coordonates.filter(coordonate => 
          (coordonate.latitude + 1 >= lat && coordonate.latitude + 1 <= lat)
          && (coordonate.longitude + 1 >= lng && coordonate.longitude + 1 <= lng));
          if (verifyZone.length > 0) {
                 return <h4> You are Infected </h4>
          }
          return <h4> You are not Infected </h4>
}