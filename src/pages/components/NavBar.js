import {Link} from "react-router-dom";

function NavBar() {
    return (
        <nav class="nav">
            <p class="nav-link active">Health Certification</p>
            <Link to="/" class="nav-link active">New Game</Link>
        </nav>
    );
}

export default NavBar;