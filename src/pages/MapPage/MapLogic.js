import {useState, useEffect} from 'react';
import axios from 'axios';

export const MapLogic = () => {
      const [coordonates, setCoordonates] = useState([]);
      const [lat, setLat] = useState(null);
      const [lng, setLng] = useState(null);
      
      useEffect(() => {
        const fetchGame = async () => {  
              try {
                    const res = await axios.get('http://localhost:8000/api/game');
                    console.log(res);
                    const { data: { game } } = res;
                    const { location: { latitude, longitude }, radii } = game;
                    setLat(latitude);
                    setLng(longitude);
                    setCoordonates(radii);
              } catch (err) {
                    console.log(err);
              }
        }
        fetchGame();
        setTimeout(() => {
              fetchGame();
              window.location.reload();
        }, 10000);
    }, [coordonates]);

      return {coordonates, setCoordonates, lat, setLat, lng, setLng};
}