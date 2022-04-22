import { Link } from "react-router-dom";
import '../css/Navigation.css';
const Logo = require("../images/Logo.png");
function Navigation() {

    const logout = () => {
        sessionStorage.clear('token');
        window.location.reload(false);
    }

    return (
        <>
            <nav class="Nav-Bar d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-5 ">
                {/* <a href="/" class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                </a> */}
                <ul class="test nav  col-12 col-md-auto mx-3 mb-2 justify-content-center mb-md-0">
                    <li><Link to="/home" class="home-T nav-link px-2 link-light ">Home</Link></li>
                    <li><Link to="/user" class="User-T nav-link px-2 link-light">User Manage</Link></li>
                    <li><Link to="/song" class="Song-T nav-link px-2 link-light">Song Manage</Link></li>
                    <li><Link to="/artist" class="Artist-T nav-link px-2 link-light">Artist Manage</Link></li>
                </ul>
                    <img src={Logo} height="45px" alt="" srcset="" class="center"></img> 
                <div class="Login nav-login col-md-3 mx-3 text-end">
                    <button onClick={logout} class="btn text-light me-2">Logout</button>
                </div>
            </nav>
        </>
    )
}

export default Navigation