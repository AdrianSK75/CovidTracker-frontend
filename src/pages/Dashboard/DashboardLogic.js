import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

axios.defaults.baseURL = "http://127.0.0.1:8000/api"

export const DashboardLogic = () => {
        const user = JSON.parse(sessionStorage.getItem('user'));
        const [players, setPlayers] = useState([]);
        const [groups, setGroups] = useState([]);
        const [games, setGames] = useState([])
        const [data, setData] = useState([]);
        const [error, setError] = useState([]);
        const [inside, setInside] = useState(0)
        const navigate = useNavigate();
      
        useEffect(() => {
            axios.defaults.headers.common['Authorization'] = `Bearer ${user.token}`;
            const awaitDashboardData = async () => {  
                  try {
                        const res = await axios.get('/groups');
                        const {data : {groups, settings, players, current_group}} = res;
                        console.log(res.data.players);
                        setPlayers(players);
                        setGames(settings);
                        setGroups(groups);
                        setInside(current_group);
                        let it = -1;
                        setData((groups.map(group => { return {group: [group.id, games.at(++it), players.at(it)]} })));
                  } catch (err) {
                        console.log(err);
                        setError(err);
                  }
            }
            if (data.length === 0) {
                  awaitDashboardData();
            }
        }, [data, players, groups, games, user.token]);

        const handleSubmit = async (id) => {
            axios.defaults.headers.common['Authorization'] = `Bearer ${user.token}`;
            axios.post(`/group/${id}/join`, {
                  
            })
            .then(response => {
                  navigate(`/group/${id}/lobby`);
                  console.log(response);
            })
            .catch(error => {
                  console.log(error.response);
                  setTimeout(() => {
                        window.location.reload();
                  }, 30000);
            })
        }
        return {handleSubmit, error, data, inside, user}
}