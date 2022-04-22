import { useState } from "react";
import { Link } from "react-router-dom";
import { addArtist } from "../../services/ArtistService";
import Swal from "sweetalert2";

function ArtistAdd() {

    const [id, setId] = useState("");
    const [artistname, setArtistName] = useState("");
    const [artistpicture, setArtistPicture] = useState("");
    const [artistDOB, setArtistDOB] = useState("");
    const [artistdesc, setArtistDesc] = useState("");

    const onAdd = () => {
        let artist = {
          artist: {
            ArtistID: id,
            ArtistName: artistname,
            ArtistPicture: artistpicture,
            ArtistDOB: artistDOB,
            ArtistDesc: artistdesc,
          },
        };
    
        if (
          id === "" ||
          artistname === "" ||
          artistpicture === "" ||
          artistDOB === "" ||
          artistdesc === ""
        ) {
          Swal.fire({
            title: "Error!",
            text: "Please fill in the required information",
            icon: "warning",
            confirmButtonText: "OK",
          });
        } else {
          addArtist(artist).then((res) => {
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
                    <h1 class="mb-3 ">Add Artist</h1>
                    <hr />
                    <form>
                        <div class="mb-2">
                            <label class="form-label">Artist ID</label>
                            <input 
                            type="text" 
                            required 
                            class="form-control" 
                            onChange={(event) => {
                                setId(event.target.value);
                            }}/>
                        </div>
                        <div class="mb-2">
                            <label class="form-label">Artist Name</label>
                            <input
                            type="text"
                            required
                            class="form-control"
                            onChange={(event) =>{
                                setArtistName(event.target.value);
                            }} />
                        </div>
                        <div class="mb-2">
                            <label class="form-label">Artist Picture</label>
                            <input 
                            type="text" 
                            required 
                            class="form-control"
                            onChange={(event) =>{
                                setArtistPicture(event.target.value);
                            }} />
                        </div>
                        <div class="mb-2">
                                <label class="form-label">Date of Birth</label>
                                <input 
                                type="date" 
                                required 
                                class="form-control" 
                                onChange={(event) =>{
                                    setArtistDOB(event.target.value);
                                }}
                                />
                        </div>
                        <div class="mb-2">
                            <label class="form-label">Artist Description</label>
                            <input 
                            type="text" 
                            required 
                            class="form-control" 
                            onChange={(event) => {
                                setArtistDesc(event.target.value);
                            }}
                            />
                        </div>
                        <hr class="my-4" />
                        <button type="submit" onClick={onAdd} class="btn btn-success w-25 mx-1">Add</button>
                        <Link to="/artist" class="btn btn-secondary w-25 mx-1">Cancel</Link>
                    </form>
                </div>
            </div>
    </>
  )
}

export default ArtistAdd