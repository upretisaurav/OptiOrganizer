import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="showcase">
            <h1>Explore the Possibilities</h1>
            <div className="button-container">
                <Link to="/login"><button className="circular-button">Login</button></Link>
                <Link to="/register"><button className="circular-button">Register</button></Link>
            </div>
        </div>
    );
}

export default Home;
