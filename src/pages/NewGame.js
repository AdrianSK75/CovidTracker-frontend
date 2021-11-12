import React from 'react';
import Places from "../pages/components/Places";

export default class NewGame extends React.Component  {
        constructor(props) {
                super(props);
                this.state = {difficulty: ""}
                
        }
        setDifficulty(e) {
            this.setState({difficulty: e.target.difficulty})
        }
        setLocation(e) {
            this.useState({lat: e.target.coordinates.lat, lng: e.target.coordinates.lng})
        }
        
        handleSubmit(e) {
            e.preventDefault();
            alert(e.target.difficulty, " ", e.target.lat, " ", e.target.lng)
            
            //introducing the coordinates to database
            // redirects the player to the game maps
        }

        render() {
                return (
                    <div class= "row justify-content-md-center">
                        <div class="col-md-auto">
                            <h1> NEW GAME </h1>
                            <form onSubmit = {this.handleSubmit} class = "form-group">
                                    <select value = {this.state.difficulty} onChange = {this.setDifficulty.bind(this)} class="form-select">
                                        <option value ="1">Easy</option>
                                        <option value ="2">Medium</option>
                                        <option value ="3">Hard</option>
                                    </select>
                                    <Places onSelect = {this.setLocation.bind(this)}></Places>
                                    <button type ="submit" class="btn btn-success">New Game</button>
                            </form>
                        </div>
                    </div>
                );
        }
}

//<Places></Places>