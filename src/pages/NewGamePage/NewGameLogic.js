import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export const NewGameLogic = () => {
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
    
    return {difficulty, setDifficulty, location, setLocation, handleSubmit};
}