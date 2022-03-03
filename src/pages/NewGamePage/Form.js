import { NewGameLogic } from "./NewGameLogic";
import { Select } from './Select';
import Places from "./Places";

export const Form = () => {
        const { location, handleSubmit, name, setName, setLocation } = NewGameLogic();
        return (
            <form onSubmit = {handleSubmit} class = "form-group">
                    <Select />
                    <Places
                        zone = {{
                            setLocation: setLocation.bind(this),
                            setName: setName.bind(this)
                        }}
                    ></Places>
                    <input type ="hidden" name = "latitude" value = {location.lat}/>
                    <input type ="hidden" name = "longitude" value = {location.lng}/>
                    <input type ="hidden" name = "name" value = {name}/>
                    <button type ="submit" class="btn btn-success">New Game</button>
            </form>
        );
}