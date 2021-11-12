import React from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";

export default function App() {
  const [address, setAddress] = React.useState("");
  const [coordinates, setCoordinates] = React.useState({
        lat: null,
        lng: null
  });

  const handleSelect = async value => {
        const results = await geocodeByAddress(value);
        const latLng = await getLatLng(results[0]);
        console.log(results);
        setAddress(value);
        setCoordinates(latLng);
        this.props.onSelect.bind(latLng);
  };

  return (
    <div>
      <PlacesAutocomplete
        value = {address}
        onChange = {setAddress}
        onSelect = {handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
                <p>Latitude: {coordinates.lat}</p>
                <p>Longitude: {coordinates.lng}</p>

                <input {...getInputProps({ placeholder: "Set Location" })} />

                <div>
                {loading ? <div>...loading</div> : null}

                {suggestions.map(suggestion => {
                    const style = {
                    backgroundColor: suggestion.active ? "#41b6e6" : "#fff"
                    };

                    return (
                    <div {...getSuggestionItemProps(suggestion, { style })}>
                        {suggestion.description}
                    </div>
                    );
                })}
                </div>
            </div>
            )}
        </PlacesAutocomplete>
    </div>
  );
}