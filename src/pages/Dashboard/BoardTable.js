import { Link } from "react-router-dom";

export const BoardTable = ({ data, inside, handleSubmit }) => {
   
    return (
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
                                                                  : <Link  to = {(`/group/${group[0]}/lobby`)} className = "btn btn-primary">JOINED</Link>
                                                            }
                                                      </td>
                                                </tr>
                                                </>
                                          );
                                  })}  
                            </tbody>
                      </table>
        );
}