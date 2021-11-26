import axios from 'axios';
import React from 'react';
import Places from "../pages/components/Places";
import {useNavigate} from 'react-router-dom';

const NewGame = () => {
        const [difficulty, setDifficulty] = React.useState(1);
        const [location, setLocation] = React.useState({
            lat: null,
            lng: null
        });
        const navigate = useNavigate();
        
        const handleSubmit = async e => {
            e.preventDefault();
            axios.post('http://localhost:8000/api/', {
                difficulty: difficulty,
                latitude: location.lat,
                longitude: location.lng
            }).then(function (response) {
                console.log(response);
            }).catch(function (error) {
                console.log(error);
            });
            navigate("/game");
        }
        return (
            <div class= "row justify-content-md-center">
                <div class="col-md-auto">
                    <h1> NEW GAME </h1>
                    <form onSubmit = {handleSubmit} class = "form-group">
                        <select 
                            value = {difficulty} 
                            onChange = {e => setDifficulty(e.target.value)}
                            name = "difficulty"
                            class="form-select">
                                <option value ="1">Easy</option>
                                <option value ="2">Medium</option>
                                <option value ="3">Hard</option>
                            </select>
                        
                            <Places zone = {{
                                setLocation: setLocation.bind(this),
                                location: location
                            }}></Places>
                            <input type ="hidden" name = "latitude" value = {location.lat}/>
                            <input type ="hidden" name = "longitude" value = {location.lng}/>
                            <button type ="submit" class="btn btn-success">New Game</button>
                    </form>
                </div>
            </div>
        );
}
export default NewGame;