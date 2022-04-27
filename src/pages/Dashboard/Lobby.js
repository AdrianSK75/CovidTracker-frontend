import axios from "axios";
import LobbyLogic from "./LobbyLogic"
import "./Lobby.css";
import { Loading } from "../components/Loading";
import { useNavigate } from "react-router-dom";
import { PlayersTable } from "./PlayersTable";
import { GameTable } from "./GameTable";

axios.defaults.baseURL = "http://127.0.0.1:8000/api"

export const Lobby = () => {
        const {id, user, error, setDifficultyInString, handleBackLink, settings, players} = LobbyLogic();
        const navigate = useNavigate();
        return (
            <div class= "row justify-content-md-center">
                <div class="col-md-auto">
                    <h1> Lobby: {id} </h1>
                    <GameTable
                        settings={settings}
                        setDifficultyInString = {setDifficultyInString}
                    ></GameTable>
                    <PlayersTable
                        players = {players}
                        user = {user}
                    ></PlayersTable>
                    {players.length === 0 || error.length > 0 ? <Loading/> : null}
                    <button type = 'submit' onClick = {() => navigate(`/group/${id}/run`)} className = 'btn btn-success' > Run the game </button>
                    <button type = 'submit' onClick = {() => handleBackLink()} className = 'btn btn-primary' > Left from group </button>
                    
                </div>
            </div>
        );
}