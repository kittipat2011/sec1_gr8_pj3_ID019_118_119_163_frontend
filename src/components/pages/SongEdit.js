import { useEffect, useState } from 'react'
import { Link,useParams } from "react-router-dom";
import { getSongById,updateSong } from "../../services/SongService";
import { getAllArtists } from "../../services/ArtistService";
function SongEdit() {

    const {id} = useParams();

    const [artistList, setArtistList] = useState([]);

    const [songid, setId] = useState("");
    const [songname, setSongName] = useState("");
    const [songpicture, setSongPicture] = useState("");
    const [songreleasedate, setSongReleaseDate] = useState("");
    const [artistid, setArtistID] = useState("");
    const [songdesc, setSongDesc] = useState("");

    useEffect(() => {
        
        getSongById(id).then((res) => {
          let songData = res.data.data;
    
          setId(songData.SongID);
          setSongName(songData.SongName);
          setSongPicture(songData.SongPicture);
          setSongReleaseDate(songData.SongReleaseDate);
          setArtistID(songData.ArtistID);
          setSongDesc(songData.SongDesc);
        });

        getAllArtists().then((res) => {
            setArtistList(res.data.data);
        });
        // eslint-disable-next-line
      }, []);

      const onUpdate = () => {
        let song = {
          song: {
            SongID: songid,
            SongName: songname,
            SongPicture: songpicture,
            ArtistID:artistid,
            SongDesc:songdesc
          },
        };
        updateSong(song).then((res)=>{
        console.log(song.song)
        alert("Update Complete");
        })
      } 


    return (
        <>
            <>
                <div class="d-flex justify-content-center text-white">
                    <div class="w-50">
                        <h1 class="mb-3">Edit Song</h1>
                        <hr />
                        <form>
                            <div class="mb-2">
                                <label class="form-label">Song ID</label>
                                <input 
                                type="text" 
                                required 
                                class="form-control"
                                value={songid} 
                                disabled />
                            </div>
                            <div class="mb-2">
                                <label class="form-label">Song Name</label>
                                <input 
                                type="text" 
                                required 
                                class="form-control" 
                                value={songname}
                                onChange={(event) => {
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
                                value={songpicture}
                                onChange={(event) =>{
                                    setSongPicture(event.target.value);
                                }}
                                />
                            </div>
                            <div class="row mb-2">
                                <div class="col">
                                    <label class="form-label">Song Release Date</label>
                                    <input 
                                    type="text" 
                                    required 
                                    class="form-control" 
                                    value={songreleasedate}
                                    disabled
                                    />
                                </div>
                                <div class="col">
                                    <label class="form-label">Artist</label>
                                    <select class="form-select" aria-label="Default select example">
                                        <option value={artistid}> select Artist </option>
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
                                value={songdesc}
                                onChange={(event) =>{
                                    setSongDesc(event.target.value);
                                }}
                                />
                            </div>
                            <hr class="my-4" />
                            <button type="submit" onClick={onUpdate} class="btn btn-primary w-25 mx-1">Save</button>
                            <Link to="/song" class="btn btn-secondary w-25 mx-1">Cancel</Link>
                        </form>
                    </div>
                </div>
            </>
        </>
    )
}

export default SongEdit