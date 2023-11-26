import React, { useState } from "react";
import axios from "axios";
import config from "./config";

function Register(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        try{
            const response = await axios.post(`${config.apiBaseUrl}/register`, {username, password});
            console.log(response.data);
        } catch (error) {
            console.error("Registration Error: ", error.response.data);
        }
    };

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username: </label>
                    <input type="text" value = {username} onChange= {(e) => setUsername(e.target.value)} />
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" value = {password} onChange= {(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default Register;