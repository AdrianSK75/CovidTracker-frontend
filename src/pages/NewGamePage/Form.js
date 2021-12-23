import { NewGameLogic } from "./NewGameLogic";
import { Select } from './Select';
import Places from "./Places";

export const Form = () => {
        const { location, setLocation, handleSubmit } = NewGameLogic();
        return (
            <form onSubmit = {handleSubmit} class = "form-group">
                    <Select />
                    <Places
                        zone = {{
                            setLocation: setLocation.bind(this),
                            location: location}}
                        ></Places>
                    <input type ="hidden" name = "latitude" value = {location.lat}/>
                    <input type ="hidden" name = "longitude" value = {location.lng}/>
                    <button type ="submit" class="btn btn-success">New Game</button>
            </form>
        );
}