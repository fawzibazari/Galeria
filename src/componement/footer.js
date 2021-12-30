import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AuthService from "../services/auth.service";
import '../Asset/css/Login.css';


function Footer() {

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
                    </Toolbar>
                </AppBar>
            </ThemeProvider>
        </Box>
    )
}
export default Footer;