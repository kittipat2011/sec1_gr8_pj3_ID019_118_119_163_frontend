import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { getAllUsers,deleteUser } from "../../services/UserService";
import "../css/UserManage.css";

function UserManage() {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    getAllUsers().then((res) => {
      setUserList(res.data.data);
    });
    // eslint-disable-next-line
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
        deleteUser(id).then((res)=>{
          alert("Delete Success");
          getAllUsers().then((res) => {
            setUserList(res.data.data);
          });
        })
      }
    });
  };

  return (
    <>
      <div>
        <div class="d-flex align-items-center justify-content-md-between my-1 text-white">
          <h3>User List</h3>
          <Link to="/user/add" class="btn btn-success">
            {" "}
            + Add User
          </Link>
        </div>
        <hr />
        <div class="table-wrapper-scroll-y my-custom-scrollbar ">
          <table class="table table-bordered table-hover align-middle mb-0 text-danger table-light">
            <thead class="text-ID table-danger text-danger">
              <tr>
                <th scope="col" >ID</th>
                <th scope="col" >Username</th>
                <th scope="col">Firstname</th>
                <th scope="col" >Lastname</th>
                <th scope="col" >Email</th>
                <th scope="col" >Address</th>
                <th scope="col" >Age</th>
                <th scope="col" >Role</th>
                <th scope="col" width="180px" class="text-center">
                  Action
                </th>
              </tr>
            </thead>
            <tbody class="btn-UD">
              {userList.map((val, key) => {
                return (
                  <tr>
                    <td scope="row">{val.UserID}</td>
                    <td>{val.UserName}</td>
                    <td>{val.Firstname}</td>
                    <td>{val.Lastname}</td>
                    <td>{val.Email}</td>
                    <td>{val.Address}</td>
                    <td>{val.Age}</td>
                    <td>{val.UserRole}</td>
                    <td class="d-flex justify-content-between">
                      <Link to={"/user/edit/"+val.UserID} class="btn btn-secondary">
                        Update
                      </Link>
                      <button
                        type="button"
                        class="btn btn-danger"
                        onClick={()=>{onDelete(val.UserID)}}>
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
  );
}

export default UserManage;
