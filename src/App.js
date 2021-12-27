import React from "react";

import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import Login from './componement/login'
import Profile from './componement/profile'
import Home from './componement/home'
import Header from './componement/header'




class App extends React.Component {
  render() {
    return (

      <div className="mugiwara">
        <Header></Header>
        <BrowserRouter>
          <Routes>
            {/* <Route path="/" element={<App />} /> */}
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </BrowserRouter>,
      </div>

    );
  }

}

export default App;
