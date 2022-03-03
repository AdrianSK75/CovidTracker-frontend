import {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

axios.defaults.baseURL = "http://127.0.0.1:8000/api"

export const MapLogic = () => {
      const { id } = useParams();
      const user = JSON.parse(sessionStorage.getItem('user'));
      const [coordonates, setCoordonates] = useState([]);
      const [error, setError] = useState([]);
      const [lat, setLat] = useState(null);
      const [lng, setLng] = useState(null);
      
      useEffect(() => {
        const fetchGame = async () => {  
            axios.defaults.headers.common['Authorization'] = `Bearer ${user.token}`;  
            try {
                    const res = await axios.get(`/group/${id}/run`);
                    console.log(res);
                    const { data: { game } } = res;
                    const { location: { latitude, longitude }, radii } = game;
                    setLat(latitude);
                    setLng(longitude);
                    setCoordonates(radii);
              } catch (err) {
                    console.log(err.response);
                    setError(err);
                    window.location.reload();
              }
        }
        if (coordonates.length === 0)
            	fetchGame();
        setTimeout(() => {
              fetchGame();
        }, 15000);
    }, [coordonates, id, user.token]);

      return {coordonates, setCoordonates, lat, setLat, lng, setLng, error};
}