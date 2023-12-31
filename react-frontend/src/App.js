import React from 'react';
import Register from './components/Register';
import Login from './components/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Home";
import WelcomePage from './components/WelcomePage';

function App() {
    return (
        <Router>
          <Routes>
            <Route path = "/" element = {<Home />} />
            <Route path = "/login" element = {<Login />} />
            <Route path = "/register" element = {<Register />} />
            <Route path="/welcome" element={<WelcomePage />} />
          </Routes>
        </Router>
    );
}

export default App;
