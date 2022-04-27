import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

axios.defaults.baseURL = "http://127.0.0.1:8000/api"

export const NewGameLogic = () => {
    const user = JSON.parse(sessionStorage.getItem('user'));
    const [difficulty, setDifficulty] = React.useState(1);
    const [name, setName] = React.useState("");
    const [location, setLocation] = React.useState({
        lat: null,
        lng: null,
    });
    const navigate = useNavigate();
    console.log(location.lat, location.lng, name, difficulty);
    const handleSubmit = async e => {
        e.preventDefault();
        
        axios.defaults.headers.common['Authorization'] = `Bearer ${user.token}`;
        
        axios.post("/group/create", {
                  difficulty: parseInt(difficulty),
                  name: name,
                  latitude: location.lat,
                  longitude: location.lng
        })
        .then(response => {
              navigate("/groups");
              console.log(response);
        })
        .catch(error => {
              console.log(error.response);
              setTimeout(() => {
                    window.location.reload();
              }, 30000);
        })
    }
    return {difficulty, setDifficulty, location, setLocation, handleSubmit, name, setName};
}