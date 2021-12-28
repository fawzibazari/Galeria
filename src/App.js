import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AuthService from "./services/auth.service";

import Login from './componement/login'
import Profile from './componement/profile'
import Home from './componement/home'
import Header from './componement/header'
import Footer from './componement/footer'


import './Asset/css/index.css';


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
  },
});


function App() {

  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
    }
  }, []);

  const logOut = () => {
    AuthService.logout();
  };

    return (

      <div >
        <ThemeProvider theme={darkTheme}>
          <BrowserRouter>
            <Header></Header>

            <Routes>
              {/* <Route path="/" element={<App />} /> */}
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/home" element={<Home />} />
            </Routes>

          </BrowserRouter>
        </ThemeProvider>
        <Footer></Footer>

      </div>

    );
  

}

export default App;
