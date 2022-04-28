import { Link } from "react-router-dom"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-color_ justify-content-center">

            <div className="container-fluid">
                <Link to="/" className="btn btn-danger text-light justify-content-left">Book Store APP</Link>
                <ul className="navbar-nav mr-auto">
                    <li className="navbar-item">
                        <Link to="/signup" className="nav-link text-light"> SignUp</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/login" className="nav-link text-light"> SignIn</Link>
                    </li>

                </ul>
            </div>
        </nav>


    )
}

export default Navbar;