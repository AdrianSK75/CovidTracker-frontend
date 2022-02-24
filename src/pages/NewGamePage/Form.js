import { NewGameLogic } from "./NewGameLogic";
import { Select } from './Select';
import Places from "./Places";

export const Form = () => {
        const { coordinates, setCoordinates, handleSubmit } = NewGameLogic();
        return (
            <form onSubmit = {handleSubmit} class = "form-group">
                    <Select />
                    <Places
                        zone = {{
                            setCoordinates: setCoordinates.bind(this),
                            }}
                        ></Places>
                    <input type ="hidden" name = "latitude" value = {coordinates.lat}/>
                    <input type ="hidden" name = "longitude" value = {coordinates.lng}/>
                    <input type ="hidden" name = "address" value = {coordinates.address}/>
                    <button type ="submit" class="btn btn-success">New Game</button>
            </form>
        );
}