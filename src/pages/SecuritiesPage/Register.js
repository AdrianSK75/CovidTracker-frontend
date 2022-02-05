import { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    console.log(name, " ", password);
    const navigate = useNavigate();
    const handleSubmit = async e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/register', {
            name: name,
            password: password
        }).then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        });
        navigate("/");
    }
    return (
        <div class= "row justify-content-md-center">
                <div class="col-md-auto">
                    <h1> REGISTER </h1>
                    <form onSubmit = {handleSubmit} className = "form-group">
                        <input type ="text" name = "name" placeholder = "nickname" className = "form-control" value = {name} onChange = {e => setName(e.target.value)}/>
                        <input type ="password" name = "password" placeholder = "password" className = "form-control" value = {password} onChange = {e => setPassword(e.target.value)}/>
                        <button type = "submit" class="btn btn-success">Register</button>
                    </form>
                </div>
        </div>
    );
}
export default Register;