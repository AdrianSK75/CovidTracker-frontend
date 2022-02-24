import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Lobby.css";

axios.defaults.baseURL = "http://127.0.0.1:8000/api"

export const Lobby = () => {
        const { id } = useParams();
        const user = JSON.parse(sessionStorage.getItem('user'));
        const [settings, setSettings] = useState('');
        const [players, setPlayers] = useState('');
        useEffect(() => {
                axios.defaults.headers.common['Authorization'] = `Bearer ${user.token}`;
                const receiveData = async () => {
                    try {
                        const res = await axios.get(`/group/${id}/join`);
                        const { data : { group_game, players_name }} = res;
                        setSettings(group_game);
                        setPlayers(players_name);  
                    } catch (err) {
                        console.log(err);
                    }
                }
                receiveData();
        }, [user.token, players, settings, id]);
        
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
                            <td>Jill</td>
                            <td>Smith</td>
                            <td>50</td>
                        </tr>
                    </table>
                    <table>
                            <tr>
                                <th>Players</th>
                            </tr>
                            <tr>
                                <td>Jill</td>
                            </tr>
                            <tr>
                                <td>Eve</td>
                                
                            </tr>
                            <tr>
                                <td>Adam</td>
                            </tr>
                        </table>
                </div>
            </div>
        );
}