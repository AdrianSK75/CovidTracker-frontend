import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const NewGameLogic = () => {
    const user = JSON.parse(sessionStorage.getItem('user'));
    const [difficulty, setDifficulty] = React.useState(1);
    const [coordinates, setCoordinates] = React.useState({
        lat: null,
        lng: null,
        address: null
    });
    const navigate = useNavigate();
    console.log(coordinates);
    const handleSubmit = async e => {
        e.preventDefault();
        
        axios.defaults.headers.common['Authorization'] = `Bearer ${user.token}`;
        
        axios.post('http://localhost:8000/api/group/create', {
            difficulty: difficulty,
            address: coordinates.address,
            latitude: coordinates.lat,
            longitude: coordinates.lng
        }).then(function (response) {
            navigate('/groups');
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        });
    }
    
    return {difficulty, setDifficulty, coordinates, setCoordinates, handleSubmit};
}