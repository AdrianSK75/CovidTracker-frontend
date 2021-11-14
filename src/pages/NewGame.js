//import axios from 'axios';
import React from 'react';
import Places from "../pages/components/Places";

const NewGame = () => {
        const [difficulty, setDifficulty] = React.useState(1);
        const [location, setLocation] = React.useState({
            lat: null,
            lng: null
        });
        
        const handleSubmit = (e) => {
            e.preventDefault();
            console.log(difficulty, location);
        }
        

        return (
            <div class= "row justify-content-md-center">
            <div class="col-md-auto">
                <h1> NEW GAME </h1>
                <form onSubmit = {handleSubmit} class = "form-group">
                        <select 
                        value = {difficulty} 
                        onChange = {e => setDifficulty(e.target.value)} class="form-select">
                            <option value ="1">Easy</option>
                            <option value ="2">Medium</option>
                            <option value ="3">Hard</option>
                        </select>
                        <Places zone = {{
                            setLocation: setLocation.bind(this)
                        }}></Places>
                        <button type ="submit" class="btn btn-success">New Game</button>
                </form>
            </div>
        </div>
        );
}
export default NewGame;