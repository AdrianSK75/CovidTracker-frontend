import Map from "./pages/MapPage/Map";
import NavBar from "./pages/components/NavBar";

const App = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Map
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDbKgCePmcalbV5C8QpcLTzV5Sxgr0mmbA"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `550px` }} />} 
              
              mapElement={<div style={{ height: `100%` }} />}
            ></Map>
        </div>
    );
}

export default App;
