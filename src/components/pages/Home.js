import { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import { getAllUsers } from "../../services/UserService";
import { getAllSongs } from "../../services/SongService";
import { getAllArtists } from "../../services/ArtistService";

import "../css/Table.css";
import "../css/Home.css";

function Home() {
  const [userList, setUserList] = useState([]);
  const [songList, setSongList] = useState([]);
  const [artistList, setArtistList] = useState([]);

  useEffect(() => {
    getAllUsers().then((res) => {
      setUserList(res.data.data);
    });

    getAllSongs().then((res) => {
      setSongList(res.data.data);
    });

    getAllArtists().then((res) => {
      setArtistList(res.data.data);
    });
  }, []);

  const getArtistName = (id) =>{
    var artistname = "";
    artistList.forEach(artist => {
      if(id == artist.ArtistID){
        artistname = artist.ArtistName;
      }
    });
    return artistname;
  }

  return (
    <>
      {/* User section */}
      <div class="User row mb-5">
        <div class="B-user table-user d-flex align-items-center justify-content-md-between my-1 text-white">
          <h3>User List</h3>
          <Link to="/user" class="btn text-light">
            Manage
          </Link>
        </div>
        <hr />
        <div class="home-table-wrapper-scroll-y- home-my-custom-scrollbar ">
          <table class="table table-bordered  table-striped mb-0 text-danger table-light">
            <thead>
              <tr>
                <th scope="col">User ID</th>
                <th scope="col">Firstname</th>
                <th scope="col">Lastname</th>
                <th scope="col">Email</th>
              </tr>
            </thead>
            <tbody>
              {userList.map((val, key) => {
                return (
                  <tr>
                    <td>{val.UserID}</td>
                    <td>{val.Firstname}</td>
                    <td>{val.Lastname}</td>
                    <td>{val.Email}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <hr />
      <div class="row">
        {/* Artist Section */}
        <div class="Artist col-6">
          <div class="B-artist table-artist d-flex align-items-center justify-content-md-between my-1 text-white">
            <h3>Artist List</h3>
            <Link to="/artist" class="btn text-light">
              Manage
            </Link>
          </div>
          <hr />
          <div class="home-table-wrapper-scroll-y home-my-custom-scrollbar ">
            <table class="table table-bordered table-striped mb-0 text-danger table-light">
              <thead>
                <tr>
                  <th scope="col">Artist ID</th>
                  <th scope="col">Artist Name</th>
                  <th scope="col">Artist DOB</th>
                  <th scope="col">Description</th>
                </tr>
              </thead>
              <tbody>
                {artistList.map((val, key) => {
                  return (
                    <tr>
                      <td>{val.ArtistID}</td>
                      <td>{val.ArtistName}</td>
                      <td>{format(new Date(val.ArtistDOB), "dd/MM/yyyy")}</td>
                      <td>{val.ArtistDesc}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        {/* Song Section */}
        <div class="Song col-6">
          <div class="B-song txt-song d-flex align-items-center justify-content-md-between my-1 text-white">
            <h3>Song List</h3>
            <Link to="/song" class="btn text-light">
              Manage
            </Link>
          </div>
          <hr />
          <div class="home-table-wrapper-scroll-y home-my-custom-scrollbar text-white">
            <table class="table table-bordered table-striped mb-0 text-danger table-light">
              <thead>
                <tr>
                  <th scope="col">Song ID</th>
                  <th scope="col">Song name</th>
                  <th scope="col">Artist Name</th>
                  <th scope="col">Description</th>
                </tr>
              </thead>
              <tbody>
                {songList.map((val, key) => {
                  return (
                    <tr>
                      <td>{val.SongID}</td>
                      <td>{val.SongName}</td>
                      <td>
                        {getArtistName(val.ArtistID)}
                      </td>
                      <td>{val.SongDesc}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
