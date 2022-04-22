import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import { getAllArtists, deleteArtist } from "../../services/ArtistService";
import Swal from "sweetalert2";

function ArtistManage() {
  const [artistList, setArtistList] = useState([]);

  useEffect(() => {
    getAllArtists().then((res) => {
      setArtistList(res.data.data);
    });
  }, []);

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
          deleteArtist(id).then((res)=>{
          alert("Delete Success");
          getAllArtists().then((res) => {
            setArtistList(res.data.data);
          });
        })
      }
    });
  };
  return (
    <>
    <div>
        <div class="d-flex align-items-center justify-content-md-between my-0 text-white">
          <h3>Artist List</h3>
          <Link to="/artist/add" class="btn btn-success "> + Add Artist</Link>
        </div>
        <hr />
        <div class="table-wrapper-scroll-y my-custom-scrollbar text-white">
          <table class="table table-bordered table-hover align-middle mb-0 text-danger table-light tex">
            <thead class="table-danger text-danger">
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Artist Name</th>
                <th scope="col">Artist Picture</th>
                <th scope="col">Date of Birth</th>
                <th scope="col">Artist Description</th>
                <th scope="col" width="180px" class="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
            {artistList.map((val, key) => {
                  return (
                    <tr>
                      <td>{val.ArtistID}</td>
                      <td>{val.ArtistName}</td>
                      <td>{val.ArtistPicture}</td>
                      <td>{format(new Date(val.ArtistDOB), "dd/MM/yyyy")}</td>
                      <td>{val.ArtistDesc}</td>
                      <td class="d-flex justify-content-between">
                      <Link to={"/artist/edit/"+val.ArtistID} class="btn btn-secondary">
                        Update
                      </Link>
                      <button
                        type="button"
                        class="btn btn-danger"
                        onClick={()=>{onDelete(val.ArtistID)}}>
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

export default ArtistManage