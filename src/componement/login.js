import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";
// import '../Asset/css/Login.css';
import AuthService from "../services/auth.service";

// import "../css/index.css";


function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
// i could have done with a function but "la flemme"
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
          await AuthService.login(email, password).then(
            () => {
              navigate("/home");
              window.location.reload();
            },
            (error) => {
              console.log(error);
            }
          );
        } catch (err) {
          console.log(err);
        }

    }
    return (
        <div>
      <form onSubmit={handleLogin}>
        <h3>Login</h3>
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Log in</button>
      </form>
    </div>
    )
}
 export default Login;