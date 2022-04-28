import { Link } from "react-router-dom"
const NavbarHome = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">

            <div className="container-fluid">
                <Link to="/home">Home Page</Link>
                <ul className="navbar-nav mr-auto">
                    {/* <li className="navbar-item">
                        <Link to="/wishlist/:id" className="nav-link"> Wishlist</Link>
                    </li> */}
                    {/* <li className="navbar-item">
                        <Link to={`/edit/${params}`} className="nav-link"> Logout</Link>
                    </li> */}

                </ul>
        </div>
</nav>
    )
}

export default NavbarHome

