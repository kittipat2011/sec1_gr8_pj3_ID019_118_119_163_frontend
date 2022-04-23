import { useEffect, useState } from 'react';
import { userLogin } from "../../services/UserService";
import "../css/Login.css";


function Login({setToken}) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {

  }, []);

  function onLogin() {
    
    const loginData = {
      email: email,
      password: password,
    };

    userLogin(loginData).then((res) => {
      const role = res.data.data[0].UserRole;
      if(role === "admin"){
        if(res.data.message === "login successfully."){
          const token = res.data.token;
          console.log(token);
          sessionStorage.setItem('token',token)
          alert("Login Success")
          window.location.reload(false);
        }
      }else{
        alert("login failed");
      }
    });
  }
  
  
  return (
    <>
      <div class="d-flex justify-content-center mt-5 pt-5 text-white">
        <div class="L w-50 mt-5">
          <h1 class="text-center mb-3">Login</h1>
          <form>
            <div class="mb-4">
              <label for="exampleInputEmail1" class="form-label">Email address</label>
              <input
              type="email"
              required
              name="email" 
              class="form-control"
              id="email"
              aria-describedby="emailHelp"
              onChange={(event)=>{
                setEmail(event.target.value);
              }} />
            </div>
            <div class="mb-4">
              <label for="exampleInputPassword1" class="form-label">Password</label>
              <input 
              type="password" 
              name="password"
              required
              class="form-control" id="password"
              onChange={(event)=>{
                setPassword(event.target.value);
              }} />
            </div>
            <button onClick={onLogin} class="btn text-light w-100">Login</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login