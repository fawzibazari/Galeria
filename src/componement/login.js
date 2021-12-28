import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";
import '../Asset/css/Login.css';
import AuthService from "../services/auth.service";
import FormControl from '@mui/material/FormControl';

import CardContent from '@mui/material/CardContent';

// import "../css/index.css";


function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
    };
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
        <div className="LoginGlobal">
            <form className="formLoigin" onSubmit={handleLogin}>
                <Card sx={{ maxWidth: 345 }}>
                    <Typography gutterBottom variant="h5" component="div">
                       S'identifier
                    </Typography>
                    <CardContent>
                        <FormControl variant="standard">
                            <InputLabel htmlFor="component-simple">Email</InputLabel>
                            <Input
                                id="component-simple"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </FormControl>
                        <FormControl variant="standard">
                            <InputLabel htmlFor="component-simple">Mot de passe</InputLabel>
                            <Input id="component-simple"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </FormControl>
                        <br />
                        <br />
                        <Button type="submit" >se connecter </Button>
                    </CardContent>
                </Card>
                {/* <h3>Login</h3>
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
                <button type="submit">Log in</button> */}
            </form>
        </div>
    )
}
export default Login;