import { useEffect, useState } from 'react'
import { Link,useParams } from "react-router-dom";
import { getUserById,updateUser } from "../../services/UserService";

function UserEdit() {

  const {id} = useParams();

  const [userid, setId] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [address, setAddress] = useState("");
  const [age, setAge] = useState("");
  const [role, setRole] = useState("");

  useEffect(() => {
    getUserById(id).then((res) => {
      let userData = res.data.data;

      setId(userData.UserID);
      setUsername(userData.UserName);
      setEmail(userData.Email);
      setFirstname(userData.Firstname);
      setLastname(userData.Lastname);
      setAddress(userData.Address);
      setAge(userData.Age);
      setRole(userData.UserRole);
    });
    // eslint-disable-next-line
  }, []);

  const onUpdate = () => {
    let user = {
      user: {
        UserID: id,
        UserName: username,
        Firstname: firstname,
        Lastname: lastname,
        Email: email,
        Address: address,
        Age: age,
        UserRole: role,
      },
    };
    updateUser(user).then((res)=>{
      console.log(user.user)
    alert("ok")
    })
  }

  return (
    <>
      <div class="d-flex justify-content-center text-white">
        <div class="w-50">
          <h1 class="mb-3">Edit User</h1>
          <hr />
          <form>
            <div class="mb-2">
              <label class="form-label">User ID</label>
              <input type="text" required class="form-control" value={userid} disabled/>
            </div>
            <div class="mb-2">
              <label class="form-label">Username</label>
              <input type="text" required class="form-control" value={username} disabled/>
            </div>
            <div class="row mb-2">
              <div class="col">
                <label class="form-label">Firstname</label>
                <input
                  type="text"
                  required
                  class="form-control" value={firstname}
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
                  value={lastname}
                  onChange={(event) => {
                    setLastname(event.target.value);
                  }}
                />
              </div>
            </div>
            <div class="mb-2">
              <label for="exampleInputEmail1" class="form-label">Email</label>
              <input
                  type="email"
                  required
                  id="exampleInputEmail1" 
                  aria-describedby="emailHelp"
                  class="form-control" value={email}
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
                  class="form-control" value={address}
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
                  class="form-control" value={age}
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
                  <option value={role}> Select Role </option>
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                </select>
              </div>
            </div>
            <hr class="my-4" />
            <button onClick={onUpdate} class="btn btn-primary w-25 mx-1">Save</button>
            <Link to="/user" class="btn btn-secondary w-25 mx-1">Cancel</Link>
          </form>
        </div>
      </div>
    </>
  )
}

export default UserEdit