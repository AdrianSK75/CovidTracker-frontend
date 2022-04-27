export const PlayersTable = ({ players, user }) => {
    return (
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
    );
}