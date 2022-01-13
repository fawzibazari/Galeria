import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AuthService from "../services/auth.service";
import '../Asset/css/Login.css';
import '../Asset/css/footer.css';


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
        <footer className="footer">
        <p>Galeria</p>
      
      </footer>
    )
}
export default Footer;