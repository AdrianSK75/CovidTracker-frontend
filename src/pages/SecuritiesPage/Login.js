import { useState } from "react";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [players, setPlayers] = useState([]);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const handleSubmit = async e => {
        e.preventDefault()
        try {
            const res = await axios.get('http://localhost:8000/api/login');
            const { data: { users } } = res;
            setPlayers(users)
        } catch (err) {
            console.log(err);
        }
        const foundPlayer = players.find(p => p.name === name);
        if (foundPlayer === name) {
                return setError("The player aleardy exists!")
        } else {
                navigate("/")
        }
        
    }
    return (
        <div class= "row justify-content-md-center">
                <div class="col-md-auto">
                    <h1> LOGIN </h1>
                    <form onSubmit = {handleSubmit} className = "form-group">
                        <input type ="text" name = "name" placeholder = "nickname" className = "form-control" value = {name} onChange = {e => setName(e.target.value)}/>
                        <input type ="password" name = "password" placeholder = "password" className = "form-control" value = {password} onChange = {e => setPassword(e.target.value)}/>
                        <Link to ="/register">You don't have an account?</Link><br></br>
                        <button type = "submit" class="btn btn-success">Login</button>
                    </form>
                    <p>{error}</p>
                </div>
        </div>
    );
}
export default Login;