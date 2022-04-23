import { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { getAllSongs, deleteSong } from "../../services/SongService";
import { format } from "date-fns";
import Swal from "sweetalert2";
import { getAllArtists } from "../../services/ArtistService";
  
function SongManage() {

  const [songList, setSongList] = useState([]);
  const [artistList, setArtistList] = useState([]);

  useEffect(() => {
    getAllSongs().then((res) => {
      setSongList(res.data.data);
    });

    getAllArtists().then((res) => {
      setArtistList(res.data.data);
    });
    // eslint-disable-next-line
  }, []);

  const getArtistName = (id) =>{
    var artistname = "";
    artistList.forEach(artist => {
      if(id === artist.ArtistID){
        artistname = artist.ArtistName;
      }
    });
    return artistname;
  }

  const onDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteSong(id).then((res)=>{
          alert("Delete Success");
          getAllSongs().then((res) => {
            setSongList(res.data.data);
          });
        })
      }
    });
  };
  return (
    <>
      <div>
        <div class="d-flex align-items-center justify-content-md-between my- text-white">
          <h3>Song List</h3>
          <Link to="/song/add" class="btn btn-success"> + Add Song</Link>
        </div>
        <hr />
        <div class="table-wrapper-scroll-y my-custom-scrollbar">
          <table class="table table-bordered table-hover align-middle mb-0 text-danger table-light">
            <thead class="table-danger text-danger">
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Song Name</th>
                <th scope="col">Song Picture</th>
                <th scope="col">Song Release</th>
                <th scope="col">Artist</th>
                <th scope="col">Song Description</th>
                <th scope="col" width="180px" class="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
            {songList.map((val, key) => {
                return (
                  <tr>
                    <td scope="row">{val.SongID}</td>
                    <td>{val.SongName}</td>
                    <td>{val.SongPicture}</td>
                    <td>{format(new Date(val.SongReleaseDate), "dd/MM/yyyy")}</td>
                    <td>{getArtistName(val.ArtistID)}</td>
                    <td>{val.SongDesc}</td>
                    <td class="d-flex justify-content-between">
                      <Link to={"/song/edit/"+val.SongID} class="btn btn-secondary">
                        Update
                      </Link>
                      <button
                        type="button"
                        class="btn btn-danger"
                        onClick={()=>{onDelete(val.SongID)}}>
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default SongManage