import {Link} from "react-router-dom";
import axios from 'axios';

const NavBar = () => {
    const handleClick = () => {
        try {
            axios.get('http://localhost:8000/api/');
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <nav class="nav">
            <Link to="/register" class="btn btn-info" onClick = {handleClick}>New Game</Link>
        </nav>
    );
}

export default NavBar;