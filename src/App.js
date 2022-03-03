import Map from "./pages/MapPage/Map";
import NavBar from "./pages/components/NavBar";

const App = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Map
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAyXvDA3765JL4IY3Plxg6awFcgUCHApKM"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `550px` }} />} 
              
              mapElement={<div style={{ height: `100%` }} />}
            ></Map>
        </div>
    );
}

export default App;
