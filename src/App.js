import { useState } from 'react';
import { Routes, Route } from "react-router-dom";

import Navigation from "./components/shared/Navigation";
import Home from './components/pages/Home';
import UserManage from './components/pages/UserManage';
import UserAdd from './components/pages/UserAdd';
import UserEdit from './components/pages/UserEdit';
import SongManage from './components/pages/SongManage';
import SongAdd from './components/pages/SongAdd';
import SongEdit from './components/pages/SongEdit';
import ArtistManage from './components/pages/ArtistManage';
import ArtistAdd from './components/pages/ArtistAdd';
import ArtistEdit from './components/pages/ArtistEdit';
import Login from './components/pages/Login';
import Footer from './components/shared/Footer';
import "./components/css/App.css";

function App () {

  const [token, setToken] = useState(sessionStorage.getItem('token'));

  if(!token){
    return <Login setToken = { setToken } />
  }

    return (
      <>
        <Navigation />
        <div class=" container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/user" element={<UserManage />} />
            <Route path="/user/add" element={<UserAdd />} />
            <Route path="/user/edit/:id" element={<UserEdit />} />
            <Route path="/song" element={<SongManage />} />
            <Route path="/song/add" element={<SongAdd />} />
            <Route path="/song/edit/:id" element={<SongEdit />} />
            <Route path="/artist" element={<ArtistManage />} />
            <Route path="/artist/add" element={<ArtistAdd />} />
            <Route path="/artist/edit/:id" element={<ArtistEdit />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
        <Footer />
      </>
    );
  }

export default App;
