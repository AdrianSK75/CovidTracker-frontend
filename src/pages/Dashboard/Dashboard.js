import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

axios.defaults.baseURL = "http://127.0.0.1:8000/api"

export const Dashboard = () => {
        const user = JSON.parse(sessionStorage.getItem('user'));
        const [players, setPlayers] = useState([]);
        const [groups, setGroups] = useState([]);
        const [games, setGames] = useState([])
        const [data, setData] = useState([]);
      
        useEffect(() => {
            axios.defaults.headers.common['Authorization'] = `Bearer ${user.token}`;
            const awaitDashboardData = async () => {  
                  try {
                        const res = await axios.get('/groups');
                        const {data : {groups, settings, players}} = res;
                        setPlayers(players);
                        setGames(settings);
                        setGroups(groups);
                        setData((groups.map(group => { 
                              return {group: [group.id, games.at(group.id - 1), players.at(group.id - 1)]} 
                        })));
                  } catch (err) {
                        console.log(err);
                  }
            }
            if (data.length === 0)
                  awaitDashboardData();
        }, [data, players, groups, games, user.token]);

        const handleSubmit = async (id) => {

        }
        console.log(data);
       
        return (
              <div class= "row justify-content-md-center">
                  <div class="col-md-auto">
                      <h1> Groups Dashboard </h1>
                      <Link to = "/group/create" className = "btn btn-primary"> Create a group </Link>
                      <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th> Address </th>
                                    <th> Lobby </th>
                                    <th> Join </th>
                                </tr>
                            </thead>
                            <tbody>
                                  {data.map(info => {
                                          const { group } = info;
                                          console.log(group);
                                          return (
                                                <tr>
                                                      <td> {group[1]} </td>
                                                      <td> {group[2]} players </td>
                                                      <td><Link to = {`/group/${group[0]}/lobby`} className = "btn btn-success">JOIN</Link></td>
                                                </tr>
                                          );
                                  })}  
                            </tbody>
                            
                      </table>
                  </div>
              </div>
        );

}