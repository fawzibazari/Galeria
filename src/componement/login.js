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
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import MuiAlert from '@mui/material/Alert';


import CardContent from '@mui/material/CardContent';

// import "../css/index.css";


const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [open, setOpen] = React.useState(false);
    const  vertical ="top"
    const  horizontal = "center"



    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };
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
                    setOpen(false);
                    navigate("/home");
                    window.location.reload();
                    console.log(open);
                },
                (error) => {
                    setOpen(true);
                    console.log(error);
                    console.log(open);
                }
            );
        } catch (err) {
            console.log(err);
            console.log("hello")
        }
    }

    const action = (
        <React.Fragment>

            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    );

    return (
        <div className="LoginGlobal">

            {/* <Alert open={errorStatut == false} severity="error">
                <AlertTitle>Error</AlertTitle>
                This is an error alert — <strong>check it out!</strong>
            </Alert> */}
            <Snackbar
                anchorOrigin={{ vertical, horizontal }}
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                key={vertical + horizontal} >
                <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                    le mail ou le mot de passe est incorect
                </Alert>
            </Snackbar>
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