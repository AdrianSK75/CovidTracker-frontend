import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";


export const LoginScreen = () => {
        const { login} = useContext(AuthContext);
        const [name, setName] = useState('');
        const [password, setPassword] = useState('');
        const navigate = useNavigate();

        const handleSubmit = () => {
            login(name, password);
            navigate('/groups');
        }
        return (
            <div class= "row justify-content-md-center">
            <div class="col-md-auto">
                <input type = "text" className = "form-control" onChange ={e => setName(e.target.value)} value ={name}/>
                <input type = "password" className = "form-control" onChange ={e => setPassword(e.target.value)} value ={password} />
                <button type = "submit" onClick = {() => handleSubmit() }> Login </button>
            </div>
        </div>
        );
}

export const RegisterScreen = () => {
        const { register } = useContext(AuthContext);
        const [name, setName] = useState('');
        const [password, setPassword] = useState('');
        const navigate = useNavigate();

        const handleSubmit = () => {
            register(name, password);
            navigate('/groups');
        }

        return (
            <div class= "row justify-content-md-center">
                <div class="col-md-auto">
                    <input type = "text" className = "form-control" onChange ={e => setName(e.target.value)} value ={name}/>
                    <input type = "password" className = "form-control" onChange ={e => setPassword(e.target.value)} value ={password} />
                    <button type = "button" onClick = {() => handleSubmit()}> Register</button>
                </div>
            </div>
        );

}