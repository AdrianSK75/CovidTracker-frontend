import Map from "./pages/Map";
import NavBar from "./pages/components/NavBar";

const App = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Map
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDiX3xldXSHLspKnIrA64Vjl8mqdWIrwug"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `550px` }} />}
              mapElement={<div style={{ height: `100%` }} />}
            ></Map>
        </div>
    );
}

export default App;
