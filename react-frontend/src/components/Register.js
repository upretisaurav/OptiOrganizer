import React, { useState } from "react";
import axios from "axios";
import config from "../config";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Register(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (event) => {
      event.preventDefault();
      try{
          const response = await axios.post(`${config.apiBaseUrl}/register`, {username, password});
          console.log(response.status, response.data);

          setUsername("");
          setPassword("");

          toast.success(`${response.data.message}`, {
              position: toast.POSITION.TOP_RIGHT
          });
      } catch (error) {
          console.error("Registration Error: ", error.response.data);

          toast.error(`Error: ${error.response.data["error"]}`, {
              position: toast.POSITION.TOP_RIGHT
          });
      }
  };

    return (
        <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleSubmit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign Up</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="text"
              className="form-control mt-1"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter email"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control mt-1"
              placeholder="Enter password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="forgot-password text-right mt-2"> <Link to="/login"> Login </Link>
          </p>
        </div>
      </form>
      <ToastContainer />
    </div>
    );
}

export default Register;