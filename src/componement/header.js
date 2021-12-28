import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Link } from "react-router-dom";
import AuthService from "../services/auth.service";
import '../Asset/css/Login.css';


function Header() {

    const logOut = () => {
        AuthService.logout();
      };

    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
            primary: {
                main: '#1976d2',
            },
        },
    });

    return (
        <Box sx={{ flexGrow: 1 }}>
            <ThemeProvider theme={darkTheme}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            <Link to={`/home`} className="link">
                            <Button color="inherit"> Photos</Button>
                            </Link>
                        </Typography>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 0.1 }}>
                            <Link className="link" to={`/profile`} >
                                <Button color="inherit"> Mon compte</Button>
                            </Link>
                        </Typography>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 0 }}>
                            <Link className="link" to={`/login`} >
                                <Button onClick={logOut} color="inherit">deconexion</Button>
                            </Link>
                        </Typography>
                    </Toolbar>
                </AppBar>
            </ThemeProvider>
        </Box>
    )
}

export default Header;