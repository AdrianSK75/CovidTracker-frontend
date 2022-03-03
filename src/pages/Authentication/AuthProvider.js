import axios from "axios";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";

axios.defaults.baseURL = 'http://127.0.0.1:8000/api';



export const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
        
        return (
            <AuthContext.Provider
                value = {{
                    register: (name, password) => {
                        axios.post('/register', {
                                name: name,
                                password: password,
                                password_confirmation: password
                        })
                        .then(response => {
                                const userResponse = {
                                    name: response.data.user.name,
                                    token: response.data.token
                                }
                                console.log(userResponse);
                                sessionStorage.setItem('user', JSON.stringify(userResponse))
                        })
                        .catch(error => {
                                console.log(error)
                    })},
                    login: (name, password) => {
                            axios.post('/login', {
                                name: name,
                                password: password,
                                password_confirmation: password
                            })
                            .then(response => {
                                const userResponse = {
                                    name: response.data.user.name,
                                    token: response.data.token
                                }
                                console.log(userResponse);
                                sessionStorage.setItem('user', JSON.stringify(userResponse))
                            })
                            .catch(error => {
                                console.log(error);
                            })
                    },
                    logout: () => {
                                let user = JSON.parse(sessionStorage.getItem('user'));
                                axios.defaults.headers.common['Authorization'] = `Bearer ${user.token}`;

                                axios.post('/logout')
                                .then(response => {
                                        sessionStorage.removeItem('user');
                                })
                                .catch(error => {
                                        console.log(error.response);
                                })
                    }
                }}>
                {children}
                </AuthContext.Provider>
        );
}