import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

import { addUser } from "../../services/UserService";

function UserAdd() {
  
  const [id, setId] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [address, setAddress] = useState("");
  const [age, setAge] = useState("");
  const [role, setRole] = useState("");

  const onAdd = () => {
      
    let user = {
      user: {
        UserID: id,
        UserName: username,
        UserPassword: password,
        Firstname: firstname,
        Lastname: lastname,
        Email: email,
        Address: address,
        Age: age,
        UserRole: role,
      },
    };

    if (
      id === "" ||
      username === "" ||
      password === "" ||
      firstname === "" ||
      lastname === "" ||
      email === "" ||
      address === "" ||
      age === "" ||
      role === ""
    ) {
      Swal.fire({
        title: "Error!",
        text: "Please fill in the required information",
        icon: "warning",
        confirmButtonText: "OK",
      });
    } else {
      addUser(user).then((res) => {
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
          <h1 class="mb-3">Add User</h1>
          <hr />
          <form>
            <div class="mb-2">
              <label class="form-label">
                User ID [8 character and only number(0-9)]
              </label>
              <input
                type="text"
                required
                class="form-control"
                onChange={(event) => {
                  setId(event.target.value);
                }}
              />
            </div>
            <div class="mb-2">
              <label class="form-label">Username</label>
              <input
                type="text"
                required
                class="form-control"
                onChange={(event) => {
                  setUsername(event.target.value);
                }}
              />
            </div>
            <div class="mb-2">
              <label class="form-label">Password</label>
              <input
                type="password"
                required
                class="form-control"
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
            </div>
            <div class="row mb-2">
              <div class="col">
                <label class="form-label">Firstname</label>
                <input
                  type="text"
                  required
                  class="form-control"
                  onChange={(event) => {
                    setFirstname(event.target.value);
                  }}
                />
              </div>
              <div class="col">
                <label class="form-label">Laststname</label>
                <input
                  type="text"
                  required
                  class="form-control"
                  onChange={(event) => {
                    setLastname(event.target.value);
                  }}
                />
              </div>
            </div>
            <div class="mb-2">
              <label for="exampleInputEmail1" class="form-label">
                Email
              </label>
              <input
                type="email"
                required
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
            </div>
            <div class="mb-2">
              <label class="form-label">Address</label>
              <input
                type="text"
                required
                class="form-control"
                onChange={(event) => {
                  setAddress(event.target.value);
                }}
              />
            </div>

            <div class="row mb-2">
              <div class="col">
                <label class="form-label">Age</label>
                <input
                  type="text"
                  required
                  class="form-control"
                  onChange={(event) => {
                    setAge(event.target.value);
                  }}
                />
              </div>
              <div class="col">
                <label class="form-label">User Role</label>
                <select
                  class="form-select"
                  aria-label="Default select example"
                  required
                  onChange={(event) => {
                    setRole(event.target.value);
                  }}>
                  <option value=""> Select Role </option>
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                </select>
              </div>
            </div>
            <hr class="my-4" />
            <button onClick={onAdd} class="btn btn-success w-25 mx-1">
              Add
            </button>
            <Link to="/user" class="btn btn-secondary w-25 mx-1">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}

export default UserAdd;
