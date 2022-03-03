import {Link, useNavigate} from "react-router-dom";
import axios from 'axios';
import { AuthContext } from "../Authentication/AuthProvider";
import { useContext } from "react";

const NavBar = () => {
    const user = JSON.parse(sessionStorage.getItem('user'));
    const { logout } = useContext(AuthContext);
    const navigate = useNavigate();
    
    return (
        <nav class="nav">
            <h5> Hello {user.name} ! ----- </h5>
            <button type ="submit"  className = "btn btn-danger" onClick = {() => [logout(), navigate('/login')]}>Logout</button>
        </nav>
    );
}

export default NavBar;