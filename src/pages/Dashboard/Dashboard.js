import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Loading } from "../components/Loading";
import NavBar from "../components/NavBar";

axios.defaults.baseURL = "http://127.0.0.1:8000/api"

export const Dashboard = () => {
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
        console.log(data, inside);
       
        return (
            <>
            <NavBar></NavBar>
              <div class= "row justify-content-md-center">
                  <div class="col-md-auto">
                      <h1> Groups Dashboard </h1>
                      <Link to = "/group/create" className = "btn btn-primary"> Create a group </Link>
                      <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th> Address </th>
                                    <th> In Lobby </th>
                                    <th> Join </th>
                                </tr>
                            </thead>
                            <tbody>
                                  {data.map(info => {
                                          const { group } = info;
                                          console.log(data);
                                          return (
                                                <>
                                                <tr>
                                                      <td> {group[1]} </td>
                                                      <td> {group[2]} {group[2] === 1 ? " player" : " players"} </td>
                                                      <td>
                                                            { inside !== group[0] ?   
                                                                  <button type ="submit" onClick = {() => handleSubmit(group[0])} className = "btn btn-success">JOIN</button> 
                                                                  : <Link to = {(`/group/${group[0]}/lobby`)} className = "btn btn-primary">JOINED</Link>
                                                            }
                                                      </td>
                                                </tr>
                                                
                                                </>
                                          );
                                  })}  
                            </tbody>
                            
                      </table>
                      {error.length > 0 || data.length === 0 || user.token === null ? <Loading/> : null}
                  </div>
              </div></>
        );

}