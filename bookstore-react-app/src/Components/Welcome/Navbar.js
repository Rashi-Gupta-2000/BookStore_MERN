import { Link } from "react-router-dom"
import "./Navbar.css"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-color_ justify-content-center">

            <div className="container-fluid">
                <Link to="/" className="btn btn-danger text-light justify-content-left">Book Store APP</Link>
                <ul className="navbar-nav mr-auto">
                    <li className="navbar-item">
                        {/* <Link to="/signup" className="nav-link navbar-toggle text-dark"> SignUp</Link> */}
                        <button type="button" className="btn btn-outline-secondary"><a href="/signup">SignUp</a> </button>
                    </li>
                    <li className="navbar-item">
                        {/* <Link to="/login" className="nav-link text-light"> SignIn</Link> */}
                        <button type="button" className="btn btn-outline-secondary"><a href="/login">SignIn</a></button>
                    </li>

                </ul>
            </div>
        </nav>


    )
}

export default Navbar;