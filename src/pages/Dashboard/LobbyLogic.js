import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const LobbyLogic = () => {
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
        return {id, user, error, setDifficultyInString, handleBackLink, settings, players}
}
export default LobbyLogic