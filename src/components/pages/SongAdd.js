import { useEffect, useState } from "react";
import { Link  } from "react-router-dom";
import Swal from "sweetalert2";

import { getAllArtists } from "../../services/ArtistService";
import { addSong } from "../../services/SongService";
function SongAdd() {
    
    const [artistList, setArtistList] = useState([]);

    const [id, setId] = useState("");
    const [songname, setSongName] = useState("");
    const [songpicture, setSongPicture] = useState("");
    const [songreleasedate, setSongReleaseDate] = useState("");
    const [artistid,setArtistID] = useState("");
    const [songdesc, setSongSongDesc] = useState("");

    useEffect(() => {
        getAllArtists().then((res) => {
          setArtistList(res.data.data);
        });
      }, []);
    

      const onAdd = () => {
      
        let song = {
          song: {
            SongID: id,
            SongName: songname,
            SongPicture: songpicture,
            SongReleaseDate: songreleasedate,
            ArtistID:artistid,
            SongDesc: songdesc,
          },
        };
    
        if (
          id === "" ||
          songname === "" ||
          songpicture === "" ||
          songreleasedate === "" ||
          artistid === ""||
          songdesc === "" 
        ) {
          Swal.fire({
            title: "Error!",
            text: "Please fill in the required information",
            icon: "warning",
            confirmButtonText: "OK",
          });
        } else {
          addSong(song).then((res) => {
            if(res.data.error){
               alert("Add Error");
              }else{
                alert("Add Success")
              }
          });
        }
      };

    return (
        <>
            <div class="d-flex justify-content-center text-white">
                <div class="w-50">
                    <h1 class="mb-3">Add Song</h1>
                    <hr />
                    <form>
                        <div class="mb-2">
                            <label class="form-label">Song ID</label>
                            <input 
                            type="text" 
                            required 
                            class="form-control"
                            onChange={(event) =>{
                                setId(event.target.value);
                            }}
                            />
                        </div>
                        <div class="mb-2">
                            <label class="form-label">Song Name</label>
                            <input 
                            type="text" 
                            required 
                            class="form-control" 
                            onChange={(event) =>{
                                setSongName(event.target.value);
                            }}
                            />
                        </div>
                        <div class="mb-2">
                            <label class="form-label">Song Picture</label>
                            <input 
                            type="text" 
                            required 
                            class="form-control" 
                            onChange={(event) =>{
                                setSongPicture(event.target.value);
                            }}
                            />
                        </div>
                        <div class="row mb-2">
                            <div class="col">
                                <label class="form-label">Song Release Date</label>
                                <input 
                                type="date" 
                                required 
                                class="form-control" 
                                onChange={(event)=> {
                                    setSongReleaseDate(event.target.value);
                                }}
                                />
                            </div>
                            <div class="col">
                                <label class="form-label">Artist</label>
                                <select 
                                class="form-select" 
                                aria-label="Default select example"
                                onChange={(event) =>{
                                    setArtistID(event.target.value);
                                }}>
                                    <option value=""> Select Artist </option>
                                    {artistList.map((val,key)=>{
                                        return(
                                            <option value={val.ArtistID}>{val.ArtistName}</option>
                                        )
                                    })}
                                </select>
                            </div>
                        </div>
                        <div class="mb-2">
                            <label class="form-label">Song Desc</label>
                            <input 
                            type="text" 
                            required 
                            class="form-control" 
                            onChange={(event) =>{
                                setSongSongDesc(event.target.value);
                            }}
                            />
                        </div>
                        <hr class="my-4" />
                        <button type="submit" onClick={onAdd} class="btn btn-success w-25 mx-1">Add</button>
                        <Link to="/song" class="btn btn-secondary w-25 mx-1">Cancel</Link>
                    </form>
                </div>
            </div>
        </>
    )
}

export default SongAdd