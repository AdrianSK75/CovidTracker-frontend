import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Lobby.css";
import { Loading } from "../components/Loading";

axios.defaults.baseURL = "http://127.0.0.1:8000/api"

export const Lobby = () => {
        const { id } = useParams();
        const user = JSON.parse(sessionStorage.getItem('user'));
        const [settings, setSettings] = useState('');
        const [players, setPlayers] = useState([]);
        const [error, setError] = useState([]);
        const navigate = useNavigate();

        useEffect(() => {
                axios.defaults.headers.common['Authorization'] = `Bearer ${user.token}`;
                const receiveData = async () => {
                    try {
                        const res = await axios.get(`/group/${id}`);
                        console.log(res);
                        const { data : { group_game, players_name }} = res;
                        setSettings(group_game);
                        setPlayers(players_name);
                    } catch (err) {
                        console.log(err.response);
                        setError(err);
                    }
                }
                if (settings.length === 0 || players.length === 0)
                        receiveData();
        }, [user.token, players, settings, id]);

        const handleBackLink = () => {
                axios.defaults.headers.common['Authorization'] = `Bearer ${user.token}`;
                axios.get(`/group/${id}/delete`)
                .then(response => {
                    navigate('/groups');
                    console.log(response);
              })
              .catch(error => {
                    console.log(error.response);
                    setError(error)
              })
        }

        const setDifficultyInString = (difficulty) => {
                    let difficultyInString;
                    if (difficulty === '1') {
                            difficultyInString = 'Easy'
                    } else if (difficulty === '2') {
                            difficultyInString = 'Medium'
                    } else {
                            difficultyInString = 'Hard';
                    }
                    return difficultyInString;
        }
        
        return (
            <div class= "row justify-content-md-center">
            <div class="col-md-auto">
                    <h1> Lobby: {id} </h1>
                    <table>
                        <tr>
                            <th>Difficulty</th>
                            <th>Latitude</th>
                            <th>Longitude</th>
                        </tr>
                        <tr>       
                            <td>{setDifficultyInString(settings.difficulty)}</td>
                            <td> {settings.latitude} </td>
                            <td> {settings.longitude} </td>  
                        </tr>
                    </table>
                    <table>
                        <tr>
                            <th>Players</th>
                        </tr>
                        {players.map(player => {
                            return (
                                <tr>
                                    <td>{player === user.name ? <b>{player}</b> : player}</td>
                                </tr>
                            );
                        })}
                    </table>
                    {players.length === 0 || error.length > 0 ? <Loading/> : null}
                    <button type = 'submit' onClick = {() => navigate(`/group/${id}/run`)} className = 'btn btn-success' > Run the game </button>
                    <button type = 'submit' onClick = {() => handleBackLink()} className = 'btn btn-primary' > Left from group </button>
                    
                </div>
            </div>
        );
}