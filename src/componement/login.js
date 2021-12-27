
import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import '../Asset/css/Login.css';
// import "../css/index.css";


function Login() {

    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
            primary: {
                main: '#1976d2',
                color: '#'
            },
        },
    });


    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");

    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
    };
    const handleChangePassword = (event) => {
        setPassword(event.target.value);
    };

    console.log(Email)
    console.log(Password)


    return (
        <div className="Login">
            <h1>S'identifier</h1>
            <form>
                <div>
                    <InputLabel htmlFor="component-simple">Email</InputLabel>
                    <Input id="component-simple" value={Email} onChange={handleChangeEmail} />
                    <br />
                    <br />
                    <InputLabel htmlFor="component-simple">Mot de passe </InputLabel>
                    <Input id="component-simple" value={Password} onChange={handleChangePassword} />
                    <br />
                    <br />
                </div>
                <ThemeProvider theme={darkTheme}>
                    <div>
                        <Button style={{
                           color: "black",
                           borderColor: "black",
                        }} variant="outlined">se connecter</Button>
                    </div>
                </ThemeProvider>

            </form>
        </div>
    )
}

export default Login;