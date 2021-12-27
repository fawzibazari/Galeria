
import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

import '../Asset/css/Login.css';
// import "../css/index.css";


function Login() {
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

            <Card className="login" sx={{ maxWidth: 345 }}>
                <Typography gutterBottom variant="h5" component="div">
                    S'identifier
                </Typography>
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
                    <div>
                        <Button
                            style={{
                                color: "white",
                                borderColor: "white",
                            }}
                            variant="outlined">se connecter</Button>
                        <br />
                        <br />
                    </div>
                </form>
            </Card>
        </div>
    )
}

export default Login;