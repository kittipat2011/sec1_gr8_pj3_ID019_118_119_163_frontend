import { useEffect, useState } from 'react'
import { Link,useParams } from "react-router-dom";
import { getArtistById,updateArtist } from "../../services/ArtistService";

function ArtistEdit() {

    const {id} = useParams();

    const [artistid, setId] = useState("");
    const [artistname, setArtistName] = useState("");
    const [artistpicture, setArtistPicture] = useState("");
    const [artistDOB, setArtistDOB] = useState("");
    const [artistdesc, setArtistDesc] = useState("");

    useEffect(() => {
        getArtistById(id).then((res) => {
          let artistData = res.data.data;
    
          setId(artistData.ArtistID);
          setArtistName(artistData.ArtistName);
          setArtistPicture(artistData.ArtistPicture);
          setArtistDOB(artistData.ArtistDOB);
          setArtistDesc(artistData.ArtistDesc);
        });
        // eslint-disable-next-line
      }, []);

      const onUpdate = () => {
        let artist = {
          artist: {
            ArtistID: artistid,
            ArtistName: artistname,
            ArtistPicture: artistpicture,
            ArtistDesc: artistdesc,
          },
        };
        updateArtist(artist).then((res)=>{
        console.log(artist.artist)
        alert("Update Complete");
        })
      } 
      
  return (
    <>
       <div class="d-flex justify-content-center text-white">
                <div class="w-50">
                    <h1 class="mb-3">Edit Artist</h1>
                    <hr />
                    <form>
                        <div class="mb-2">
                            <label class="form-label">Artist ID</label>
                            <input type="text" required class="form-control" value={artistid} disabled />
                        </div>
                        <div class="mb-2">
                            <label class="form-label">Artist Name</label>
                            <input 
                            type="text" 
                            required 
                            class="form-control" 
                            value={artistname}
                            onChange={(event)=>{
                                setArtistName(event.target.value);
                            }}
                            />
                        </div>
                        <div class="mb-2">
                            <label class="form-label">Artist Picture</label>
                            <input 
                            type="text" 
                            required 
                            class="form-control" 
                            value={artistpicture}
                            onChange={(event) => {
                                setArtistPicture(event.target.value);
                            }}
                            />
                        </div>
                        <div class="mb-2">
                                <label class="form-label">Date of Birth</label>
                                <input 
                                type="text" 
                                required 
                                class="form-control" 
                                value={artistDOB}
                                disabled
                                />
                        </div>
                        <div class="mb-2">
                            <label class="form-label">Artist Description</label>
                            <input 
                            type="text" 
                            required 
                            class="form-control" 
                            value={artistdesc}
                            onChange={(event) => {
                                setArtistDesc(event.target.value);
                            }}
                            />
                        </div>
                        <hr class="my-4" />
                        <button type="submit" onClick={onUpdate} class="btn btn-primary w-25 mx-1">Save</button>
                        <Link to="/artist" class="btn btn-secondary w-25 mx-1">Cancel</Link>
                    </form>
                </div>
            </div>
    </>
  )
}

export default ArtistEdit