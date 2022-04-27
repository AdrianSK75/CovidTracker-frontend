export const GameTable  = ({settings : {difficulty, latitude, longitude}, setDifficultyInString}) => {
    return (
        <table>
                <tr>
                    <th>Difficulty</th>
                    <th>Latitude</th>
                    <th>Longitude</th>
                </tr>
                <tr>       
                    <td>{setDifficultyInString(difficulty)}</td>
                    <td> {latitude} </td>
                    <td> {longitude} </td>  
                </tr>
        </table>
    );
}